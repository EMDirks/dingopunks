// Tests the fixed-window rate-limit counters against the Firestore emulator.
// Run via: npm run test:ratelimit  (firebase emulators:exec sets
// FIRESTORE_EMULATOR_HOST so the admin SDK talks to the emulator).

import assert from "node:assert/strict";
import { after, beforeEach, describe, test } from "node:test";

import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

import {
  RATE_LIMIT_COLLECTION,
  RATE_LIMIT_GRACE_MS,
  consumeRateLimit,
  enforceRateLimit,
  rateLimitKey,
} from "../rate-limit.js";

const PROJECT_ID = "demo-dpaam-rate-limits";
const NOW = Date.UTC(2026, 8, 5, 12, 0, 0);
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 3;

if (!process.env.FIRESTORE_EMULATOR_HOST) {
  throw new Error("FIRESTORE_EMULATOR_HOST is not set — run through `npm run test:ratelimit`.");
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

function consume(identifier, now, overrides = {}) {
  return consumeRateLimit(db, "test-scope", identifier, {
    limit: LIMIT,
    windowMs: WINDOW_MS,
    now,
    ...overrides,
  });
}

function counterDoc(identifier, scope = "test-scope") {
  return db.collection(RATE_LIMIT_COLLECTION).doc(rateLimitKey(scope, identifier)).get();
}

beforeEach(clearFirestore);
after(() => db.terminate());

describe("rateLimitKey", () => {
  test("produces a Firestore-safe id from identifiers that aren't", () => {
    for (const identifier of ["2001:db8::/64", "a/b", "..", "", "x".repeat(500)]) {
      const key = rateLimitKey("test-scope", identifier);
      assert.match(key, /^test-scope_[0-9a-f]{32}$/);
    }
  });

  test("is stable per identifier and distinct across identifiers and scopes", () => {
    assert.equal(rateLimitKey("a", "1.2.3.4"), rateLimitKey("a", "1.2.3.4"));
    assert.notEqual(rateLimitKey("a", "1.2.3.4"), rateLimitKey("a", "1.2.3.5"));
    assert.notEqual(rateLimitKey("a", "1.2.3.4"), rateLimitKey("b", "1.2.3.4"));
  });
});

describe("consumeRateLimit", () => {
  test("allows up to the limit, then blocks with a retryAfter", async () => {
    for (let i = 0; i < LIMIT; i++) {
      const result = await consume("1.2.3.4", NOW);
      assert.deepEqual(result, { allowed: true, remaining: LIMIT - 1 - i, retryAfter: 0 });
    }

    const blocked = await consume("1.2.3.4", NOW);
    assert.equal(blocked.allowed, false);
    assert.equal(blocked.remaining, 0);
    assert.equal(blocked.retryAfter, WINDOW_MS / 1000);
  });

  test("counts blocked attempts as reads only — the counter stops growing", async () => {
    for (let i = 0; i < LIMIT + 5; i++) await consume("1.2.3.4", NOW);

    const doc = await counterDoc("1.2.3.4");
    assert.equal(doc.get("count"), LIMIT);
  });

  test("retryAfter shrinks as the window elapses and never reaches zero", async () => {
    for (let i = 0; i < LIMIT; i++) await consume("1.2.3.4", NOW);

    assert.equal((await consume("1.2.3.4", NOW + 60_000)).retryAfter, 540);
    assert.equal((await consume("1.2.3.4", NOW + WINDOW_MS - 1)).retryAfter, 1);
  });

  test("keys are independent", async () => {
    for (let i = 0; i < LIMIT; i++) await consume("1.2.3.4", NOW);

    assert.equal((await consume("1.2.3.4", NOW)).allowed, false);
    assert.equal((await consume("5.6.7.8", NOW)).allowed, true);
  });

  test("scopes are independent for the same identifier", async () => {
    for (let i = 0; i < LIMIT; i++) await consume("1.2.3.4", NOW);

    const other = await consumeRateLimit(db, "other-scope", "1.2.3.4", {
      limit: LIMIT,
      windowMs: WINDOW_MS,
      now: NOW,
    });
    assert.equal(other.allowed, true);
  });

  test("a fresh window opens once the old one elapses", async () => {
    for (let i = 0; i < LIMIT; i++) await consume("1.2.3.4", NOW);

    assert.equal((await consume("1.2.3.4", NOW + WINDOW_MS - 1)).allowed, false);

    const rolled = await consume("1.2.3.4", NOW + WINDOW_MS);
    assert.deepEqual(rolled, { allowed: true, remaining: LIMIT - 1, retryAfter: 0 });

    const doc = await counterDoc("1.2.3.4");
    assert.equal(doc.get("count"), 1);
    assert.equal(doc.get("windowStart").toMillis(), NOW + WINDOW_MS);
  });

  test("writes a TTL field that outlives the window", async () => {
    await consume("1.2.3.4", NOW);

    const doc = await counterDoc("1.2.3.4");
    assert.equal(doc.get("scope"), "test-scope");
    assert.equal(doc.get("windowStart").toMillis(), NOW);
    assert.equal(doc.get("expiresAt").toMillis(), NOW + WINDOW_MS + RATE_LIMIT_GRACE_MS);
  });

  test("parallel requests cannot overshoot the limit", async () => {
    // Heavy same-doc contention can exhaust the SDK's transaction retries, so
    // the assertion is the invariant that matters: no run of parallel requests
    // ever lets more than `limit` through.
    const settled = await Promise.allSettled(
      Array.from({ length: 8 }, () => consume("1.2.3.4", NOW)),
    );

    const allowed = settled.filter(
      (outcome) => outcome.status === "fulfilled" && outcome.value.allowed,
    ).length;
    assert.ok(allowed >= 1, "expected at least one request to get through");
    assert.ok(allowed <= LIMIT, `expected at most ${LIMIT} allowed, got ${allowed}`);

    const doc = await counterDoc("1.2.3.4");
    assert.ok(doc.get("count") <= LIMIT);
  });

  test("a malformed or future-stamped counter is reset, not trusted", async () => {
    const ref = db.collection(RATE_LIMIT_COLLECTION).doc(rateLimitKey("test-scope", "1.2.3.4"));

    for (const broken of [
      { count: 99 }, // no windowStart
      { count: "many", windowStart: Timestamp.fromMillis(NOW) },
      { count: 99, windowStart: Timestamp.fromMillis(NOW + WINDOW_MS) }, // future
    ]) {
      await ref.set(broken);
      const result = await consume("1.2.3.4", NOW);
      assert.deepEqual(result, { allowed: true, remaining: LIMIT - 1, retryAfter: 0 });
    }
  });

  test("a stale counter left behind by TTL lag does not block a new window", async () => {
    const ref = db.collection(RATE_LIMIT_COLLECTION).doc(rateLimitKey("test-scope", "1.2.3.4"));
    await ref.set({
      scope: "test-scope",
      count: LIMIT,
      windowStart: Timestamp.fromMillis(NOW - 30 * 24 * 60 * 60 * 1000),
      expiresAt: Timestamp.fromMillis(NOW - 29 * 24 * 60 * 60 * 1000),
    });

    assert.equal((await consume("1.2.3.4", NOW)).allowed, true);
  });
});

describe("enforceRateLimit", () => {
  test("returns the result while allowed", async () => {
    const result = await enforceRateLimit(db, "test-scope", "1.2.3.4", {
      limit: LIMIT,
      windowMs: WINDOW_MS,
      now: NOW,
    });
    assert.equal(result.allowed, true);
  });

  test("throws resource-exhausted carrying retryAfter in the details", async () => {
    for (let i = 0; i < LIMIT; i++) await consume("1.2.3.4", NOW);

    await assert.rejects(
      enforceRateLimit(db, "test-scope", "1.2.3.4", {
        limit: LIMIT,
        windowMs: WINDOW_MS,
        now: NOW,
        message: "Slow down.",
      }),
      (error) => {
        assert.equal(error.code, "resource-exhausted");
        assert.equal(error.message, "Slow down.");
        assert.deepEqual(error.details, { retryAfter: WINDOW_MS / 1000 });
        return true;
      },
    );
  });
});
