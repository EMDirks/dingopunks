import { createHash, timingSafeEqual } from "node:crypto";

import { Timestamp } from "firebase-admin/firestore";
import { logger } from "firebase-functions";
import { HttpsError } from "firebase-functions/v2/https";

import { enforceRateLimit } from "./rate-limit.js";

// Temporary beta gate. Set this to false and remove the matching signup field
// and authorization calls in the frontend when public registration opens.
export const BETA_SIGNUP_GATE_ENABLED = true;
export const BETA_APPROVAL_TTL_MS = 10 * 60 * 1000;

// The access code itself is deploy-time config (BETA_ACCESS_CODE param), NOT
// a constant: this repo's public mirror burned the original hardcoded value.
// The code is a shared-with-testers gate, not a cryptographic secret, but it
// must never live in source.

// Per-IP backstop on the second unauthenticated endpoint: charged before the
// code comparison, so wrong-code brute force and approval spam with a leaked
// code are both throttled at the same door.
export const BETA_RATE_LIMIT_SCOPE = "authorizeBetaSignup";
export const BETA_RATE_LIMIT = 10;
export const BETA_RATE_WINDOW_MS = 10 * 60 * 1000;

const APPROVAL_COLLECTION = "betaSignupApprovals";

function normalizeEmail(email) {
  if (typeof email !== "string") {
    throw new HttpsError("invalid-argument", "Enter a valid email.");
  }

  const normalized = email.trim().toLowerCase();
  if (!normalized || !normalized.includes("@")) {
    throw new HttpsError("invalid-argument", "Enter a valid email.");
  }

  return normalized;
}

function normalizeAccessCode(accessCode) {
  return typeof accessCode === "string"
    ? accessCode.trim().toUpperCase()
    : "";
}

function accessCodesMatch(submittedCode, expectedCode) {
  const submitted = Buffer.from(normalizeAccessCode(submittedCode));
  const expected = Buffer.from(normalizeAccessCode(expectedCode));
  return (
    submitted.length === expected.length &&
    timingSafeEqual(submitted, expected)
  );
}

export function betaApprovalId(email) {
  return createHash("sha256").update(normalizeEmail(email)).digest("hex");
}

export async function authorizeBetaSignup(
  db,
  email,
  accessCode,
  {
    now = Date.now(),
    expectedCode,
    gateEnabled = BETA_SIGNUP_GATE_ENABLED,
    clientIp = "unknown",
    limit = BETA_RATE_LIMIT,
    windowMs = BETA_RATE_WINDOW_MS,
  } = {},
) {
  if (!gateEnabled) return { authorized: true, expiresAt: null };

  // Validates the email format too — malformed input costs no Firestore work
  // and no rate-limit quota.
  const approvalId = betaApprovalId(email);

  // An unset param would make accessCodesMatch compare against "" — an empty
  // submitted code would then pass the gate. Refuse to run misconfigured.
  if (typeof expectedCode !== "string" || !expectedCode.trim()) {
    logger.error("authorizeBetaSignup called without a configured BETA_ACCESS_CODE");
    throw new HttpsError("internal", "Signup is not available right now.");
  }

  // Charged before the code comparison: brute-forcing the code and spamming
  // approvals with a leaked code are both capped per IP.
  await enforceRateLimit(db, BETA_RATE_LIMIT_SCOPE, clientIp || "unknown", {
    limit,
    windowMs,
    now,
    message: "Too many attempts. Wait a few minutes.",
  });

  if (!accessCodesMatch(accessCode, expectedCode)) {
    throw new HttpsError("permission-denied", "Invalid beta code.");
  }

  const expiresAt = now + BETA_APPROVAL_TTL_MS;
  await db.collection(APPROVAL_COLLECTION).doc(approvalId).set({
    createdAt: Timestamp.fromMillis(now),
    expiresAt: Timestamp.fromMillis(expiresAt),
  });

  return { authorized: true, expiresAt };
}

export async function consumeBetaSignupApproval(
  db,
  email,
  {
    now = Date.now(),
    gateEnabled = BETA_SIGNUP_GATE_ENABLED,
  } = {},
) {
  if (!gateEnabled) return;

  const approvalRef = db
    .collection(APPROVAL_COLLECTION)
    .doc(betaApprovalId(email));

  const authorized = await db.runTransaction(async (transaction) => {
    const approval = await transaction.get(approvalRef);
    const expiresAt = approval.data()?.expiresAt?.toMillis?.();

    if (!approval.exists || !expiresAt || expiresAt <= now) {
      if (approval.exists) transaction.delete(approvalRef);
      return false;
    }

    transaction.delete(approvalRef);
    return true;
  });

  if (!authorized) {
    throw new HttpsError(
      "permission-denied",
      "Invalid beta code.",
    );
  }
}
