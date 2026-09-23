// Email verification for email/password accounts.
//
// Verification is a soft gate: unverified users still reach the dashboard,
// and only share-code creation waits on a verified address. This module owns
// what the auth flow and the dashboard share — sending the link (with a
// continue URL back to this page), the resend cooldown, the background watch
// that notices when the link was clicked, and fixing a mistyped address.

import {
  EmailAuthProvider,
  auth,
  reauthenticateWithCredential,
  reload,
  sendEmailVerification,
  updateEmail,
  verifyBeforeUpdateEmail,
} from "../firebase-init.js";

export const RESEND_COOLDOWN_MS = 30_000;
const POLL_INTERVAL_MS = 5_000;
const SENT_AT_PREFIX = "dpaam-verify-sent-at:";
const PENDING_EMAIL_PREFIX = "dpaam-verify-pending-email:";

function readSession(key) {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key, value) {
  try {
    if (value === null) sessionStorage.removeItem(key);
    else sessionStorage.setItem(key, value);
  } catch {
    /* ignore quota / private mode */
  }
}

export function userNeedsEmailVerification(user) {
  if (!user?.email || user.emailVerified) return false;
  return Boolean(
    user.providerData?.some((provider) => provider.providerId === "password"),
  );
}

// Where the Firebase action page sends people after they click the link.
// Same page they signed up on, so the open tab (or this new one) lands back
// in the dashboard and the watch below notices the flip.
function continueUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

function actionCodeSettings() {
  return { url: continueUrl() };
}

// A pending email is set while a `verifyBeforeUpdateEmail` link is out: the
// account still reports the old address until the link is clicked, but the
// UI should talk about the address we actually mailed.
function pendingEmailFor(uid) {
  return uid ? readSession(`${PENDING_EMAIL_PREFIX}${uid}`) : null;
}

function setPendingEmail(uid, email) {
  if (!uid) return;
  writeSession(`${PENDING_EMAIL_PREFIX}${uid}`, email || null);
}

export function verificationTargetEmail(user) {
  if (!user) return "";
  const pending = pendingEmailFor(user.uid);
  if (pending && pending.toLowerCase() === (user.email || "").toLowerCase()) {
    setPendingEmail(user.uid, null);
    return user.email;
  }
  return pending || user.email || "";
}

export function verificationIsPendingEmailChange(user) {
  if (!user) return false;
  const pending = pendingEmailFor(user.uid);
  return Boolean(pending) && pending.toLowerCase() !== (user.email || "").toLowerCase();
}

// Fired on `document` after every send so resend buttons can pick up the
// cooldown even when the send finished after the UI last rendered.
export const VERIFICATION_SENT_EVENT = "dpaam-verification-sent";

function markSent(uid) {
  if (!uid) return;
  writeSession(`${SENT_AT_PREFIX}${uid}`, String(Date.now()));
  document.dispatchEvent(new CustomEvent(VERIFICATION_SENT_EVENT, { detail: { uid } }));
}

export function resendCooldownRemainingMs(user = auth.currentUser) {
  if (!user?.uid) return 0;
  const sentAt = Number(readSession(`${SENT_AT_PREFIX}${user.uid}`));
  if (!Number.isFinite(sentAt) || sentAt <= 0) return 0;
  return Math.max(0, sentAt + RESEND_COOLDOWN_MS - Date.now());
}

export async function sendVerificationEmail(user) {
  if (!user) return;
  if (verificationIsPendingEmailChange(user)) {
    await verifyBeforeUpdateEmail(user, pendingEmailFor(user.uid), actionCodeSettings());
  } else {
    await sendEmailVerification(user, actionCodeSettings());
  }
  markSent(user.uid);
}

// Point an unverified account at the address the user meant to type.
//
// Prefers `updateEmail` (immediate; the account keeps its session) and then
// sends a fresh verification link. Projects with email-enumeration protection
// reject `updateEmail` with `auth/operation-not-allowed`; there we fall back to
// `verifyBeforeUpdateEmail`, which mails the new address and swaps it in when
// the link is clicked. Both paths need a recent sign-in — callers should catch
// `auth/requires-recent-login`, collect the password, and call again with it.
export async function changeUnverifiedEmail(user, newEmail, password = "") {
  if (!user) throw new Error("No signed-in user.");
  if (password) {
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
  }

  try {
    await updateEmail(user, newEmail);
  } catch (error) {
    if (error?.code !== "auth/operation-not-allowed") throw error;
    await verifyBeforeUpdateEmail(user, newEmail, actionCodeSettings());
    setPendingEmail(user.uid, newEmail);
    markSent(user.uid);
    return { pendingVerification: true };
  }

  setPendingEmail(user.uid, null);
  await sendVerificationEmail(user);
  return { pendingVerification: false };
}

// ---------- background watch ----------
//
// Firebase does not push `emailVerified` changes to open sessions; the client
// has to `reload()` and look. We poll while the tab is visible and re-check the
// moment the tab regains focus (that's when people come back from their inbox).

let activeWatch = null;

const WATCH_FATAL_CODES = new Set([
  "auth/user-token-expired",
  "auth/user-disabled",
  "auth/user-not-found",
]);

export function stopVerificationWatch() {
  activeWatch?.stop();
  activeWatch = null;
}

export function startVerificationWatch(user, onVerified) {
  stopVerificationWatch();
  if (!userNeedsEmailVerification(user)) return;

  const uid = user.uid;
  let checking = false;

  async function check() {
    if (checking || document.hidden) return;
    if (auth.currentUser?.uid !== uid) {
      stopVerificationWatch();
      return;
    }

    checking = true;
    try {
      await reload(auth.currentUser);
    } catch (error) {
      // Revoked or deleted sessions won't recover; transient failures just
      // wait for the next tick.
      if (WATCH_FATAL_CODES.has(error?.code)) stopVerificationWatch();
      return;
    } finally {
      checking = false;
    }

    if (activeWatch?.uid !== uid) return;
    const current = auth.currentUser;
    if (current?.uid === uid && current.emailVerified) {
      setPendingEmail(uid, null);
      stopVerificationWatch();
      onVerified?.(current);
    }
  }

  const onReturn = () => {
    if (!document.hidden) void check();
  };
  const timer = window.setInterval(() => void check(), POLL_INTERVAL_MS);
  document.addEventListener("visibilitychange", onReturn);
  window.addEventListener("focus", onReturn);

  activeWatch = {
    uid,
    stop() {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onReturn);
      window.removeEventListener("focus", onReturn);
    },
  };

  void check();
}
