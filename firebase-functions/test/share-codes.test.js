// Tests the share-code domain logic (entitlement, idempotency, the 20-cap,
// and doc-ID collision handling) directly against the Firestore emulator.
// Run via: npm run test:codes  (firebase emulators:exec sets
// FIRESTORE_EMULATOR_HOST so the admin SDK talks to the emulator).

import assert from "node:assert/strict";
import { after, beforeEach, describe, test } from "node:test";

import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

import {
  CODE_PATTERN,
  CODE_TTL_MS,
  MAX_ACTIVE_CODES,
  cancelShareCode,
  createShareCode,
  generateCandidateCode,
} from "../share-codes.js";

const PROJECT_ID = "demo-dpaam-codes";
const FREE_GAME = "the-midnight-mall-mixed-reading-skills-3";
const OTHER_FREE_GAME = "the-midnight-mall-mixed-math-skills-4";
const PAID_GAME = "beehive-blitz-fractions-4";
const NOW = Date.UTC(2026, 8, 5, 12, 0, 0);

if (!process.env.FIRESTORE_EMULATOR_HOST) {
  throw new Error("FIRESTORE_EMULATOR_HOST is not set — run through `npm run test:codes`.");
}

initializeApp({ projectId: PROJECT_ID });
const db = getFirestore();

async function clearFirestore() {
  const response = await fetch(
    `http://${process.env.FIRESTORE_EMULATOR_HOST}/emulator/v1/projects/${PROJECT_ID}/databases/(default)/documents`,
    { method: "DELETE" },
  );
  assert.equal(response.status, 200);
}

async function seedUser(uid, fields) {
  await db.collection("users").doc(uid).set({
    email: `${uid}@example.com`,
    plan: "free",
    ...fields,
  });
}

async function seedCode(code, { uid, gameId, expiresAtMs }) {
  await db.collection("codes").doc(code).set({
    uid,
    gameId,
    createdAt: Timestamp.fromMillis(NOW - 1000),
    expiresAt: Timestamp.fromMillis(expiresAtMs),
  });
}

// Deterministic stand-in for the random code generator.
function candidates(...codes) {
  let index = 0;
  return () => codes[index++];
}

// Unique, format-valid seed codes: SEEDA, SEEDB, ... (i < 25).
function seedCodeId(prefix, i) {
  return `${prefix}${"ABCDEFGHIJKLMNPQRSTUVWXY"[i]}`;
}

async function assertHttpsError(promise, expectedCode) {
  await assert.rejects(promise, (error) => {
    assert.equal(error.code, expectedCode, `expected ${expectedCode}, got ${error.code}: ${error.message}`);
    return true;
  });
}

beforeEach(clearFirestore);
after(() => db.terminate());

describe("generateCandidateCode", () => {
  test("always matches the code format and contains a letter", () => {
    for (let i = 0; i < 500; i++) {
      const code = generateCandidateCode();
      assert.match(code, CODE_PATTERN);
      assert.match(code, /[A-Z]/);
      assert.doesNotMatch(code, /[O0]/);
    }
  });
});

describe("createShareCode entitlement", () => {
  test("free plan can share a free game", async () => {
    await seedUser("free-user");

    const result = await createShareCode(db, "free-user", FREE_GAME, { now: NOW });

    assert.match(result.code, CODE_PATTERN);
    assert.equal(result.expiresAt, NOW + CODE_TTL_MS);

    const doc = await db.collection("codes").doc(result.code).get();
    assert.equal(doc.get("uid"), "free-user");
    assert.equal(doc.get("gameId"), FREE_GAME);
    assert.equal(doc.get("expiresAt").toMillis(), NOW + CODE_TTL_MS);
    assert.ok(doc.get("createdAt") instanceof Timestamp);
  });

  test("free plan is denied a paid game", async () => {
    await seedUser("free-user");

    await assertHttpsError(
      createShareCode(db, "free-user", PAID_GAME, { now: NOW }),
      "permission-denied",
    );
  });

  test("a missing user doc is treated as the free plan", async () => {
    const result = await createShareCode(db, "ghost-user", FREE_GAME, { now: NOW });
    assert.match(result.code, CODE_PATTERN);

    await assertHttpsError(
      createShareCode(db, "ghost-user", PAID_GAME, { now: NOW }),
      "permission-denied",
    );
  });

  test("all-access plan can share any game, including while canceling", async () => {
    await seedUser("member", { plan: "all-access", status: "canceling" });

    const result = await createShareCode(db, "member", PAID_GAME, { now: NOW });
    assert.match(result.code, CODE_PATTERN);
  });

  test("rejects unknown and malformed gameIds", async () => {
    await seedUser("member", { plan: "all-access" });

    await assertHttpsError(
      createShareCode(db, "member", "not-a-real-game", { now: NOW }),
      "invalid-argument",
    );
    await assertHttpsError(
      createShareCode(db, "member", undefined, { now: NOW }),
      "invalid-argument",
    );
  });
});

describe("createShareCode idempotency", () => {
  test("re-sharing the same game returns the existing code", async () => {
    await seedUser("free-user");

    const first = await createShareCode(db, "free-user", FREE_GAME, { now: NOW });
    const second = await createShareCode(db, "free-user", FREE_GAME, {
      now: NOW + 60_000,
    });

    assert.equal(second.code, first.code);
    assert.equal(second.expiresAt, first.expiresAt);
  });

  test("an expired code for the same game is not reused", async () => {
    await seedUser("free-user");
    await seedCode("EXPD1", {
      uid: "free-user",
      gameId: FREE_GAME,
      expiresAtMs: NOW - 1000,
    });

    const result = await createShareCode(db, "free-user", FREE_GAME, { now: NOW });
    assert.notEqual(result.code, "EXPD1");
    assert.equal(result.expiresAt, NOW + CODE_TTL_MS);
  });

  test("different games get different codes", async () => {
    await seedUser("free-user");

    const first = await createShareCode(db, "free-user", FREE_GAME, { now: NOW });
    const second = await createShareCode(db, "free-user", OTHER_FREE_GAME, { now: NOW });

    assert.notEqual(second.code, first.code);
  });

  test("cancel then share mints a fresh code", async () => {
    await seedUser("free-user");

    const first = await createShareCode(db, "free-user", FREE_GAME, { now: NOW });
    await cancelShareCode(db, "free-user", first.code);
    const second = await createShareCode(db, "free-user", FREE_GAME, {
      now: NOW,
      randomCode: candidates(first.code === "AAAA1" ? "BBBB2" : "AAAA1"),
    });

    assert.notEqual(second.code, first.code);
    const oldDoc = await db.collection("codes").doc(first.code).get();
    assert.equal(oldDoc.exists, false);
  });
});

describe("createShareCode 20-cap", () => {
  test("rejects a new code once 20 are active, but still re-shares", async () => {
    await seedUser("member", { plan: "all-access" });
    for (let i = 0; i < MAX_ACTIVE_CODES; i++) {
      await seedCode(seedCodeId("CAP1", i), {
        uid: "member",
        gameId: `game-${i}`,
        expiresAtMs: NOW + 60_000,
      });
    }

    await assertHttpsError(
      createShareCode(db, "member", PAID_GAME, { now: NOW }),
      "resource-exhausted",
    );

    // Re-sharing an already-shared game is still allowed at the cap.
    await seedCode("REUSE", {
      uid: "member",
      gameId: PAID_GAME,
      expiresAtMs: NOW + 60_000,
    });
    // (21 seeded now, but the existing-code branch runs before the cap check.)
    const result = await createShareCode(db, "member", PAID_GAME, { now: NOW });
    assert.equal(result.code, "REUSE");
  });

  test("expired codes do not count toward the cap", async () => {
    await seedUser("member", { plan: "all-access" });
    for (let i = 0; i < MAX_ACTIVE_CODES; i++) {
      await seedCode(seedCodeId("OLD1", i), {
        uid: "member",
        gameId: `game-${i}`,
        expiresAtMs: NOW - 1000,
      });
    }

    const result = await createShareCode(db, "member", PAID_GAME, { now: NOW });
    assert.match(result.code, CODE_PATTERN);
  });

  test("another user's codes do not count toward the cap", async () => {
    await seedUser("member", { plan: "all-access" });
    for (let i = 0; i < MAX_ACTIVE_CODES; i++) {
      await seedCode(seedCodeId("THR1", i), {
        uid: "someone-else",
        gameId: `game-${i}`,
        expiresAtMs: NOW + 60_000,
      });
    }

    const result = await createShareCode(db, "member", PAID_GAME, { now: NOW });
    assert.match(result.code, CODE_PATTERN);
  });
});

describe("createShareCode collision handling", () => {
  test("retries past a candidate that collides with an active code", async () => {
    await seedUser("free-user");
    await seedCode("TAKN1", {
      uid: "someone-else",
      gameId: PAID_GAME,
      expiresAtMs: NOW + 60_000,
    });

    const result = await createShareCode(db, "free-user", FREE_GAME, {
      now: NOW,
      randomCode: candidates("TAKN1", "FRESH"),
    });

    assert.equal(result.code, "FRESH");
    const collided = await db.collection("codes").doc("TAKN1").get();
    assert.equal(collided.get("uid"), "someone-else");
  });

  test("overwrites a candidate that collides with an expired leftover", async () => {
    await seedUser("free-user");
    await seedCode("STALE", {
      uid: "someone-else",
      gameId: PAID_GAME,
      expiresAtMs: NOW - 1000,
    });

    const result = await createShareCode(db, "free-user", FREE_GAME, {
      now: NOW,
      randomCode: candidates("STALE"),
    });

    assert.equal(result.code, "STALE");
    const doc = await db.collection("codes").doc("STALE").get();
    assert.equal(doc.get("uid"), "free-user");
    assert.equal(doc.get("gameId"), FREE_GAME);
    assert.equal(doc.get("expiresAt").toMillis(), NOW + CODE_TTL_MS);
  });
});

describe("cancelShareCode", () => {
  test("deletes the caller's code, accepting lowercase input", async () => {
    await seedCode("MINE1", {
      uid: "free-user",
      gameId: FREE_GAME,
      expiresAtMs: NOW + 60_000,
    });

    const result = await cancelShareCode(db, "free-user", " mine1 ");
    assert.deepEqual(result, { canceled: true });

    const doc = await db.collection("codes").doc("MINE1").get();
    assert.equal(doc.exists, false);
  });

  test("returns the same not-found for missing codes and other users' codes", async () => {
    await seedCode("THRS1", {
      uid: "someone-else",
      gameId: FREE_GAME,
      expiresAtMs: NOW + 60_000,
    });

    await assertHttpsError(cancelShareCode(db, "free-user", "GXNE1"), "not-found");
    await assertHttpsError(cancelShareCode(db, "free-user", "THRS1"), "not-found");

    const doc = await db.collection("codes").doc("THRS1").get();
    assert.equal(doc.exists, true);
  });

  test("rejects malformed codes", async () => {
    await assertHttpsError(cancelShareCode(db, "free-user", "ABC"), "invalid-argument");
    await assertHttpsError(cancelShareCode(db, "free-user", "ABCD0"), "invalid-argument");
    await assertHttpsError(cancelShareCode(db, "free-user", 12345), "invalid-argument");
  });
});
