// Fixed-window rate-limit counters in Firestore — one small doc per key, no
// extra infra. Built in Phase 3 for resolveGameCode; createCheckoutSession
// (Phase 4) and an optional createShareCode limit (Phase 5) reuse it as-is.
//
// Fixed windows allow up to 2x the limit across a window boundary. That's
// fine: these are abuse backstops, not billing meters.

import { createHash } from "node:crypto";

import { HttpsError } from "firebase-functions/v2/https";
import { FieldValue, Timestamp } from "firebase-admin/firestore";

export const RATE_LIMIT_COLLECTION = "rateLimits";

// How long a counter outlives its window before the TTL policy may delete it.
// Only slack for TTL lag — every read re-checks `windowStart` itself, so a
// stale doc is never mistaken for an open window.
export const RATE_LIMIT_GRACE_MS = 60 * 60 * 1000;

/**
 * Doc ID for a counter. The identifier is hashed because raw identifiers (IP
 * addresses especially) contain characters Firestore rejects in doc IDs, and
 * because a hashed counter collection holds no readable PII. The scope is
 * mixed into the hash so two endpoints can never share a counter, and kept as
 * a readable prefix so the collection is debuggable in the console.
 */
export function rateLimitKey(scope, identifier) {
  const digest = createHash("sha256")
    .update(`${scope}\u0000${identifier}`)
    .digest("hex");
  return `${scope}_${digest.slice(0, 32)}`;
}

/**
 * Count one request against `scope`/`identifier`.
 *
 * Read-modify-write in a transaction, so parallel requests can't both slip
 * past the limit. Once the limit is hit the transaction stops writing, so a
 * client hammering a blocked key costs one read per attempt.
 *
 * @returns {Promise<{allowed: boolean, remaining: number, retryAfter: number}>}
 *   `retryAfter` is whole seconds until the window rolls over (0 if allowed).
 */
export async function consumeRateLimit(db, scope, identifier, options) {
  const { limit, windowMs, now = Date.now() } = options;
  const ref = db.collection(RATE_LIMIT_COLLECTION).doc(rateLimitKey(scope, identifier));

  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const windowStart = snap.exists ? snap.get("windowStart") : null;
    const count = snap.exists ? snap.get("count") : null;

    // Anything unexpected — missing doc, elapsed window, a window stamped in
    // the future, a malformed doc — starts a fresh window.
    const openWindow =
      windowStart instanceof Timestamp &&
      typeof count === "number" &&
      windowStart.toMillis() <= now &&
      now - windowStart.toMillis() < windowMs;

    if (!openWindow) {
      tx.set(ref, {
        scope,
        count: 1,
        windowStart: Timestamp.fromMillis(now),
        expiresAt: Timestamp.fromMillis(now + windowMs + RATE_LIMIT_GRACE_MS),
      });
      return { allowed: true, remaining: limit - 1, retryAfter: 0 };
    }

    const windowEndsAt = windowStart.toMillis() + windowMs;

    if (count >= limit) {
      return {
        allowed: false,
        remaining: 0,
        retryAfter: Math.max(1, Math.ceil((windowEndsAt - now) / 1000)),
      };
    }

    tx.update(ref, { count: FieldValue.increment(1) });
    return { allowed: true, remaining: limit - count - 1, retryAfter: 0 };
  });
}

/**
 * `consumeRateLimit` that throws instead of reporting. `retryAfter` rides
 * along in the error details so the client can show a real countdown.
 */
export async function enforceRateLimit(db, scope, identifier, options) {
  const { message = "Too many attempts. Try again shortly.", ...limitOptions } = options;
  const result = await consumeRateLimit(db, scope, identifier, limitOptions);

  if (!result.allowed) {
    throw new HttpsError("resource-exhausted", message, {
      retryAfter: result.retryAfter,
    });
  }

  return result;
}
