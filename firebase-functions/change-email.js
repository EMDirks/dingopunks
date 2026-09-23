// Availability check for the unverified-user "Change email" flow.
//
// Firebase's email-enumeration protection deliberately makes
// verifyBeforeUpdateEmail resolve successfully when the target address is
// already registered, even though no message is sent. This authenticated,
// narrowly gated check lets that flow reject a taken address before asking
// Firebase to send the verification link.

import { logger } from "firebase-functions";
import { HttpsError } from "firebase-functions/v2/https";

import { enforceRateLimit } from "./rate-limit.js";

export const CHECK_EMAIL_RATE_LIMIT_SCOPE = "checkEmail";
export const CHECK_EMAIL_RATE_LIMIT = 5;
export const CHECK_EMAIL_RATE_WINDOW_MS = 15 * 60 * 1000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(rawEmail) {
  const email = typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    throw new HttpsError("invalid-argument", "Enter a valid email.");
  }
  return email;
}

function requireEligibleCaller(caller) {
  if (!caller?.uid) {
    throw new HttpsError("unauthenticated", "Sign in first.");
  }

  const signInProvider = caller.token?.firebase?.sign_in_provider;
  if (signInProvider !== "password" || caller.token?.email_verified !== false) {
    throw new HttpsError(
      "failed-precondition",
      "Email changes are only available to unverified email accounts.",
    );
  }

  return caller.uid;
}

export async function checkEmailAvailable(authAdmin, db, caller, rawEmail, options = {}) {
  const {
    now = Date.now(),
    limit = CHECK_EMAIL_RATE_LIMIT,
    windowMs = CHECK_EMAIL_RATE_WINDOW_MS,
  } = options;
  const uid = requireEligibleCaller(caller);
  const email = normalizeEmail(rawEmail);

  await enforceRateLimit(db, CHECK_EMAIL_RATE_LIMIT_SCOPE, uid, {
    limit,
    windowMs,
    now,
    message: "Too many attempts. Try again in a few minutes.",
  });

  try {
    await authAdmin.getUserByEmail(email);
    logger.info("Change-email availability checked", { uid, available: false });
    return { available: false };
  } catch (error) {
    if (error?.code === "auth/user-not-found") {
      logger.info("Change-email availability checked", { uid, available: true });
      return { available: true };
    }

    logger.error("Change-email availability check failed", {
      uid,
      errorCode: error?.code ?? null,
    });
    throw new HttpsError("internal", "Unable to check that email right now.");
  }
}
