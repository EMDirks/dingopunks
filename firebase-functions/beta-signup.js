import { createHash, timingSafeEqual } from "node:crypto";

import { Timestamp } from "firebase-admin/firestore";
import { HttpsError } from "firebase-functions/v2/https";

// Temporary beta gate. Set this to false and remove the matching signup field
// and authorization calls in the frontend when public registration opens.
export const BETA_SIGNUP_GATE_ENABLED = true;
export const BETA_ACCESS_CODE = "BETA01";
export const BETA_APPROVAL_TTL_MS = 10 * 60 * 1000;

const APPROVAL_COLLECTION = "betaSignupApprovals";

function normalizeEmail(email) {
  if (typeof email !== "string") {
    throw new HttpsError("invalid-argument", "Enter a valid email address.");
  }

  const normalized = email.trim().toLowerCase();
  if (!normalized || !normalized.includes("@")) {
    throw new HttpsError("invalid-argument", "Enter a valid email address.");
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
    expectedCode = BETA_ACCESS_CODE,
    gateEnabled = BETA_SIGNUP_GATE_ENABLED,
  } = {},
) {
  if (!gateEnabled) return { authorized: true, expiresAt: null };

  if (!accessCodesMatch(accessCode, expectedCode)) {
    throw new HttpsError("permission-denied", "That beta access code is not valid.");
  }

  const expiresAt = now + BETA_APPROVAL_TTL_MS;
  await db.collection(APPROVAL_COLLECTION).doc(betaApprovalId(email)).set({
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
      "A valid beta access code is required to create an account.",
    );
  }
}
