// Share-code domain logic for createShareCode / cancelShareCode.
// Kept separate from index.js so the transaction logic can be tested against
// the Firestore emulator without spinning up the functions emulator.

import { randomInt } from "node:crypto";
import { readFileSync } from "node:fs";

import { HttpsError } from "firebase-functions/v2/https";
import { FieldValue, Timestamp } from "firebase-admin/firestore";

// No O or 0 — and every code must contain at least one letter, which keeps
// membership codes disjoint from the legacy all-numeric purchase codes.
export const CODE_ALPHABET = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
export const CODE_LENGTH = 5;
export const CODE_PATTERN = new RegExp(`^[${CODE_ALPHABET}]{${CODE_LENGTH}}$`);
export const CODE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
export const MAX_ACTIVE_CODES = 20;
const MAX_CANDIDATE_ATTEMPTS = 20;

export const VALID_GAME_IDS = new Set(
  JSON.parse(readFileSync(new URL("./game-ids.json", import.meta.url), "utf8")),
);

// Free tier: the 8 Midnight Mall mixed-skills rooms. Server-side source of
// truth — the client's isFree flags are cosmetic.
export const FREE_GAME_IDS = new Set([
  "the-midnight-mall-mixed-reading-skills-2",
  "the-midnight-mall-mixed-reading-skills-3",
  "the-midnight-mall-mixed-reading-skills-4",
  "the-midnight-mall-mixed-reading-skills-5",
  "the-midnight-mall-mixed-math-skills-2",
  "the-midnight-mall-mixed-math-skills-3",
  "the-midnight-mall-mixed-math-skills-4",
  "the-midnight-mall-mixed-math-skills-5",
]);

// Catch catalog drift loudly at deploy time (functions are loaded during
// deploy discovery): every free id must exist in the exported catalog.
for (const id of FREE_GAME_IDS) {
  if (!VALID_GAME_IDS.has(id)) {
    throw new Error(
      `Free game id "${id}" is missing from game-ids.json — regenerate it with scripts/export-game-ids.mjs or update FREE_GAME_IDS.`,
    );
  }
}

export function generateCandidateCode() {
  for (;;) {
    let code = "";
    for (let i = 0; i < CODE_LENGTH; i++) {
      code += CODE_ALPHABET[randomInt(CODE_ALPHABET.length)];
    }
    // Require ≥1 letter (all-numeric would collide with the legacy code
    // space). All-numeric draws are ~0.4% likely, so the loop is cheap.
    if (/[A-Z]/.test(code)) return code;
  }
}

function isActive(codeDoc, nowMs) {
  const expiresAt = codeDoc.get("expiresAt");
  return expiresAt instanceof Timestamp && expiresAt.toMillis() > nowMs;
}

/**
 * Create (or return the existing) share code for one of the caller's games.
 * Entitlement, the one-code-per-game idempotency check, the 20-cap, and the
 * candidate-collision handling all run inside a single transaction. The
 * 20-cap is best-effort under adversarial parallel requests (phantom inserts
 * can briefly exceed it) — accepted per the plan; global code uniqueness via
 * doc-ID create IS strict.
 *
 * @returns {Promise<{code: string, expiresAt: number}>} expiresAt in ms.
 */
export async function createShareCode(db, uid, gameId, options = {}) {
  const { now = Date.now(), randomCode = generateCandidateCode } = options;

  if (typeof gameId !== "string" || !VALID_GAME_IDS.has(gameId)) {
    throw new HttpsError("invalid-argument", "Unknown game.");
  }

  return db.runTransaction(async (tx) => {
    // Entitlement comes from the server-managed user doc, never the client.
    // A missing doc (profile provisioning raced or failed) is treated as free.
    const userSnap = await tx.get(db.collection("users").doc(uid));
    const plan = userSnap.exists ? userSnap.get("plan") : "free";
    if (plan !== "all-access" && !FREE_GAME_IDS.has(gameId)) {
      throw new HttpsError(
        "permission-denied",
        "An All-Access membership is required to share this room.",
      );
    }

    const ownCodes = await tx.get(
      db.collection("codes").where("uid", "==", uid),
    );
    const activeCodes = ownCodes.docs.filter((doc) => isActive(doc, now));

    // Idempotent: one active code per user per game. Re-share returns the
    // existing code; cancel-then-share is how users mint a fresh one.
    const existing = activeCodes.find((doc) => doc.get("gameId") === gameId);
    if (existing) {
      return {
        code: existing.id,
        expiresAt: existing.get("expiresAt").toMillis(),
      };
    }

    if (activeCodes.length >= MAX_ACTIVE_CODES) {
      throw new HttpsError(
        "resource-exhausted",
        `You've reached ${MAX_ACTIVE_CODES} active share codes. Cancel an existing code before sharing another room.`,
      );
    }

    // Find a free doc ID. Expired-but-not-yet-TTL-deleted docs are fair game
    // to overwrite; an active collision means we try a new candidate.
    for (let attempt = 0; attempt < MAX_CANDIDATE_ATTEMPTS; attempt++) {
      const code = randomCode();
      const ref = db.collection("codes").doc(code);
      const snap = await tx.get(ref);
      if (snap.exists && isActive(snap, now)) continue;

      const expiresAtMs = now + CODE_TTL_MS;
      const data = {
        uid,
        gameId,
        createdAt: FieldValue.serverTimestamp(),
        expiresAt: Timestamp.fromMillis(expiresAtMs),
      };
      if (snap.exists) {
        tx.set(ref, data); // overwrite an expired leftover
      } else {
        tx.create(ref, data); // strict: fails (and retries) on a concurrent create
      }
      return { code, expiresAt: expiresAtMs };
    }

    // 45M combinations vs ≤20 active codes per user — reaching this means
    // something is deeply wrong, not bad luck.
    throw new HttpsError("internal", "Could not allocate a code. Try again.");
  });
}

/**
 * Delete one of the caller's share codes. A code that doesn't exist and a
 * code owned by someone else both return the same generic not-found.
 */
export async function cancelShareCode(db, uid, rawCode) {
  if (typeof rawCode !== "string") {
    throw new HttpsError("invalid-argument", "A code is required.");
  }
  const code = rawCode.trim().toUpperCase();
  if (!CODE_PATTERN.test(code)) {
    throw new HttpsError("invalid-argument", "That code isn't valid.");
  }

  await db.runTransaction(async (tx) => {
    const ref = db.collection("codes").doc(code);
    const snap = await tx.get(ref);
    if (!snap.exists || snap.get("uid") !== uid) {
      throw new HttpsError("not-found", "That code doesn't exist.");
    }
    tx.delete(ref);
  });

  return { canceled: true };
}
