// Tests resolveGameCode — format validation, per-IP rate limiting, expiry, and
// the generic not-found — plus the client-IP extraction the limit keys on.
// Run via: npm run test:resolve  (firebase emulators:exec sets
// FIRESTORE_EMULATOR_HOST so the admin SDK talks to the emulator).

import assert from "node:assert/strict";
import { after, beforeEach, describe, test } from "node:test";

import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

import {
  RESOLVE_RATE_LIMIT,
  RESOLVE_RATE_WINDOW_MS,
  clientIpFromRequest,
  normalizeIp,
  resolveGameCode,
} from "../resolve-code.js";

const PROJECT_ID = "demo-dpaam-resolve";
const FREE_GAME = "the-midnight-mall-mixed-reading-skills-3";
const PAID_GAME = "beehive-blitz-fractions-4";
const NOW = Date.UTC(2026, 8, 5, 12, 0, 0);
const IP = "203.0.113.5";
const NOT_FOUND_MESSAGE = "That code has expired or doesn't exist.";

if (!process.env.FIRESTORE_EMULATOR_HOST) {
  throw new Error("FIRESTORE_EMULATOR_HOST is not set — run through `npm run test:resolve`.");
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

async function seedCode(code, { uid = "owner", gameId, expiresAtMs }) {
  await db.collection("codes").doc(code).set({
    uid,
    gameId,
    createdAt: Timestamp.fromMillis(NOW - 1000),
    expiresAt: Timestamp.fromMillis(expiresAtMs),
  });
}

// A generous per-IP limit so tests that aren't about rate limiting never trip
// it; the rate-limit suite passes an explicit small limit instead.
function resolve(code, { ip = IP, now = NOW, ...overrides } = {}) {
  return resolveGameCode(db, code, ip, { now, limit: 1000, ...overrides });
}

async function assertHttpsError(promise, expectedCode, expectedMessage) {
  await assert.rejects(promise, (error) => {
    assert.equal(error.code, expectedCode, `expected ${expectedCode}, got ${error.code}: ${error.message}`);
    if (expectedMessage) assert.equal(error.message, expectedMessage);
    return true;
  });
}

beforeEach(clearFirestore);
after(() => db.terminate());

describe("normalizeIp", () => {
  test("passes IPv4 through and strips a port", () => {
    assert.equal(normalizeIp("203.0.113.5"), "203.0.113.5");
    assert.equal(normalizeIp("203.0.113.5:41234"), "203.0.113.5");
    assert.equal(normalizeIp("  203.0.113.5  "), "203.0.113.5");
  });

  test("unwraps IPv4-mapped IPv6 to the IPv4 address", () => {
    assert.equal(normalizeIp("::ffff:203.0.113.5"), "203.0.113.5");
    assert.equal(normalizeIp("[::FFFF:203.0.113.5]:8080"), "203.0.113.5");
  });

  test("buckets IPv6 by /64 so one subscriber's subnet shares a counter", () => {
    const expected = "2001:0db8:85a3:0001::/64";
    assert.equal(normalizeIp("2001:0db8:85a3:0001:0000:8a2e:0370:7334"), expected);
    assert.equal(normalizeIp("2001:0db8:85a3:0001:ffff:ffff:ffff:ffff"), expected);
    assert.equal(normalizeIp("2001:0DB8:85A3:0001::1"), expected);
    assert.equal(normalizeIp("[2001:0db8:85a3:0001::1]:443"), expected);
    assert.equal(normalizeIp("2001:0db8:85a3:0001::1%eth0"), expected);

    // A different /64 is a different bucket.
    assert.notEqual(normalizeIp("2001:0db8:85a3:0002::1"), expected);
  });

  test("expands and zero-pads compressed IPv6 so equal subnets share a bucket", () => {
    assert.equal(normalizeIp("::1"), "0000:0000:0000:0000::/64");
    assert.equal(normalizeIp("2001:db8::1"), "2001:0db8:0000:0000::/64");
    assert.equal(
      normalizeIp("2001:db8::1"),
      normalizeIp("2001:0db8:0000:0000:0000:0000:0000:0001"),
    );
  });

  test("falls back to the shared bucket for anything unparseable", () => {
    for (const value of ["", "   ", "not-an-ip", "1:2:3::4::5", "gggg::1", null, undefined, 42]) {
      assert.equal(normalizeIp(value), "unknown");
    }
  });
});

describe("clientIpFromRequest", () => {
  test("uses the entry Google appended, not the client-supplied leftmost one", () => {
    // Google's front end appends `<client-ip>, <lb-ip>`; anything to the left
    // came from the caller. Trusting the leftmost entry would let an attacker
    // rotate a fake IP per request and bypass the limit entirely.
    const ip = clientIpFromRequest({
      headers: { "x-forwarded-for": "9.9.9.9, 203.0.113.5, 130.211.0.1" },
    });
    assert.equal(ip, "203.0.113.5");
  });

  test("a two-entry chain is client then load balancer", () => {
    assert.equal(
      clientIpFromRequest({ headers: { "x-forwarded-for": "203.0.113.5, 130.211.0.1" } }),
      "203.0.113.5",
    );
  });

  test("normalizes the extracted address", () => {
    assert.equal(
      clientIpFromRequest({
        headers: { "x-forwarded-for": "9.9.9.9, 2001:db8:1:2:3:4:5:6, 130.211.0.1" },
      }),
      "2001:0db8:0001:0002::/64",
    );
  });

  test("joins a repeated header before picking the trusted entry", () => {
    assert.equal(
      clientIpFromRequest({
        headers: { "x-forwarded-for": ["9.9.9.9", "203.0.113.5, 130.211.0.1"] },
      }),
      "203.0.113.5",
    );
  });

  test("falls back to the socket address when there is no proxy chain", () => {
    // One entry means we aren't behind the expected chain (emulator, direct
    // connection), so the header is unverified and must not be trusted.
    assert.equal(
      clientIpFromRequest({ headers: { "x-forwarded-for": "9.9.9.9" }, ip: "203.0.113.5" }),
      "203.0.113.5",
    );
    assert.equal(
      clientIpFromRequest({ headers: {}, socket: { remoteAddress: "203.0.113.5" } }),
      "203.0.113.5",
    );
  });

  test("returns the shared bucket when nothing is available", () => {
    assert.equal(clientIpFromRequest({ headers: {} }), "unknown");
    assert.equal(clientIpFromRequest(undefined), "unknown");
  });
});

describe("resolveGameCode lookups", () => {
  test("resolves an active code to its gameId", async () => {
    await seedCode("AB1CD", { gameId: PAID_GAME, expiresAtMs: NOW + 60_000 });

    assert.deepEqual(await resolve("AB1CD"), { gameId: PAID_GAME });
  });

  test("accepts lowercase and padded input", async () => {
    await seedCode("AB1CD", { gameId: FREE_GAME, expiresAtMs: NOW + 60_000 });

    assert.deepEqual(await resolve("  ab1cd "), { gameId: FREE_GAME });
  });

  test("resolves regardless of who owns the code or their plan", async () => {
    // Per the plan, a lapsed member's codes live out their remaining 14 days.
    await seedCode("AB1CD", {
      uid: "lapsed-member",
      gameId: PAID_GAME,
      expiresAtMs: NOW + 60_000,
    });

    assert.deepEqual(await resolve("AB1CD"), { gameId: PAID_GAME });
  });

  test("gives the same not-found for missing, expired, and stale-catalog codes", async () => {
    await seedCode("EXPD1", { gameId: FREE_GAME, expiresAtMs: NOW - 1 });
    await seedCode("GNNE1", { gameId: "retired-room-4", expiresAtMs: NOW + 60_000 });

    for (const code of ["AB1CD", "EXPD1", "GNNE1"]) {
      await assertHttpsError(resolve(code), "not-found", NOT_FOUND_MESSAGE);
    }
  });

  test("treats a code with no usable expiry as not found", async () => {
    await db.collection("codes").doc("BRKN1").set({ uid: "owner", gameId: FREE_GAME });

    await assertHttpsError(resolve("BRKN1"), "not-found", NOT_FOUND_MESSAGE);
  });

  test("rejects malformed codes without touching Firestore", async () => {
    for (const code of ["AB1", "AB1CDE", "AB0CD", "ABOCD", "AB-CD", "", 12345, null, ["AB1CD"]]) {
      await assertHttpsError(resolve(code), "invalid-argument");
    }

    // Nothing malformed should have spent rate-limit quota.
    const counters = await db.collection("rateLimits").get();
    assert.equal(counters.size, 0);
  });

  test("rejects all-numeric codes — those belong to the legacy code space", async () => {
    await seedCode("12345", { gameId: FREE_GAME, expiresAtMs: NOW + 60_000 });

    await assertHttpsError(resolve("12345"), "invalid-argument");
  });
});

describe("resolveGameCode rate limiting", () => {
  test("blocks an IP past the limit and reports retryAfter", async () => {
    await seedCode("AB1CD", { gameId: FREE_GAME, expiresAtMs: NOW + 60_000 });

    for (let i = 0; i < 3; i++) {
      assert.deepEqual(await resolve("AB1CD", { limit: 3 }), { gameId: FREE_GAME });
    }

    await assert.rejects(resolve("AB1CD", { limit: 3 }), (error) => {
      assert.equal(error.code, "resource-exhausted");
      assert.equal(error.details.retryAfter, RESOLVE_RATE_WINDOW_MS / 1000);
      return true;
    });
  });

  test("failed guesses count toward the limit", async () => {
    for (let i = 0; i < 3; i++) {
      await assertHttpsError(resolve("AB1CD", { limit: 3 }), "not-found");
    }

    await assertHttpsError(resolve("AB1CD", { limit: 3 }), "resource-exhausted");
  });

  test("the limit is charged before the lookup, so a blocked IP learns nothing", async () => {
    await seedCode("AB1CD", { gameId: FREE_GAME, expiresAtMs: NOW + 60_000 });

    for (let i = 0; i < 2; i++) {
      await assertHttpsError(resolve("ZZ9ZZ", { limit: 2 }), "not-found");
    }

    await assertHttpsError(resolve("AB1CD", { limit: 2 }), "resource-exhausted");
  });

  test("one IP's limit does not affect another", async () => {
    for (let i = 0; i < 2; i++) await assertHttpsError(resolve("AB1CD", { limit: 2 }), "not-found");

    await assertHttpsError(resolve("AB1CD", { limit: 2 }), "resource-exhausted");
    await assertHttpsError(
      resolve("AB1CD", { limit: 2, ip: "198.51.100.7" }),
      "not-found",
    );
  });

  test("an IPv6 subnet cannot buy quota by rotating addresses in its /64", async () => {
    await assertHttpsError(
      resolve("AB1CD", { limit: 1, ip: normalizeIp("2001:db8:1:2:3:4:5:6") }),
      "not-found",
    );
    await assertHttpsError(
      resolve("AB1CD", { limit: 1, ip: normalizeIp("2001:db8:1:2:aaaa:bbbb:cccc:dddd") }),
      "resource-exhausted",
    );
  });

  test("quota frees up once the window rolls over", async () => {
    await assertHttpsError(resolve("AB1CD", { limit: 1 }), "not-found");
    await assertHttpsError(resolve("AB1CD", { limit: 1 }), "resource-exhausted");

    await assertHttpsError(
      resolve("AB1CD", { limit: 1, now: NOW + RESOLVE_RATE_WINDOW_MS }),
      "not-found",
    );
  });

  test("defaults to 30 lookups per 10 minutes", async () => {
    assert.equal(RESOLVE_RATE_LIMIT, 30);
    assert.equal(RESOLVE_RATE_WINDOW_MS, 10 * 60 * 1000);

    for (let i = 0; i < RESOLVE_RATE_LIMIT; i++) {
      await assertHttpsError(resolveGameCode(db, "AB1CD", IP, { now: NOW }), "not-found");
    }
    await assertHttpsError(
      resolveGameCode(db, "AB1CD", IP, { now: NOW }),
      "resource-exhausted",
    );
  });
});
