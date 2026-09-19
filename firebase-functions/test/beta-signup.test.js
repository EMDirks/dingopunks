import assert from "node:assert/strict";
import { after, beforeEach, describe, test } from "node:test";

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import {
  BETA_APPROVAL_TTL_MS,
  BETA_RATE_LIMIT,
  BETA_RATE_WINDOW_MS,
  authorizeBetaSignup,
  betaApprovalId,
  consumeBetaSignupApproval,
} from "../beta-signup.js";

const PROJECT_ID = "demo-dpaam-beta-signup";
const NOW = Date.UTC(2026, 8, 8, 12, 0, 0);
const EMAIL = "teacher@example.com";
// The real access code is deploy-time config (BETA_ACCESS_CODE param), never
// a constant in source; tests supply their own expected code.
const CODE = "TEST-CODE-42";

if (!process.env.FIRESTORE_EMULATOR_HOST) {
  throw new Error(
    "FIRESTORE_EMULATOR_HOST is not set — run through `npm run test:beta`.",
  );
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

function authorize(email, accessCode, options = {}) {
  return authorizeBetaSignup(db, email, accessCode, {
    now: NOW,
    expectedCode: CODE,
    ...options,
  });
}

beforeEach(clearFirestore);
after(() => db.terminate());

describe("beta signup authorization", () => {
  test("accepts the configured code without storing the email", async () => {
    const result = await authorize(
      `  ${EMAIL.toUpperCase()}  `,
      ` ${CODE.toLowerCase()} `,
    );

    assert.deepEqual(result, {
      authorized: true,
      expiresAt: NOW + BETA_APPROVAL_TTL_MS,
    });

    const approval = await db
      .collection("betaSignupApprovals")
      .doc(betaApprovalId(EMAIL))
      .get();
    assert.equal(approval.exists, true);
    assert.deepEqual(Object.keys(approval.data()).sort(), [
      "createdAt",
      "expiresAt",
    ]);
  });

  test("rejects an invalid code without creating an approval", async () => {
    await assert.rejects(
      authorize(EMAIL, "WRONG"),
      (error) => error.code === "permission-denied",
    );

    const approvals = await db.collection("betaSignupApprovals").get();
    assert.equal(approvals.empty, true);
  });

  test("refuses to run without a configured access code", async () => {
    // An unset param must never degrade into an empty-string comparison an
    // empty submitted code would pass.
    for (const expectedCode of [undefined, "", "   "]) {
      await assert.rejects(
        authorize(EMAIL, "", { expectedCode }),
        (error) => error.code === "internal",
      );
    }

    const approvals = await db.collection("betaSignupApprovals").get();
    assert.equal(approvals.empty, true);
    // Misconfiguration is not the caller's fault — no quota charged.
    const counters = await db.collection("rateLimits").get();
    assert.equal(counters.empty, true);
  });

  test("consumes a valid approval once", async () => {
    await authorize(EMAIL, CODE);
    await consumeBetaSignupApproval(db, EMAIL, { now: NOW + 1 });

    await assert.rejects(
      consumeBetaSignupApproval(db, EMAIL, { now: NOW + 2 }),
      (error) => error.code === "permission-denied",
    );
  });

  test("rejects and removes an expired approval", async () => {
    await authorize(EMAIL, CODE, { now: NOW - BETA_APPROVAL_TTL_MS });

    await assert.rejects(
      consumeBetaSignupApproval(db, EMAIL, { now: NOW }),
      (error) => error.code === "permission-denied",
    );

    const approval = await db
      .collection("betaSignupApprovals")
      .doc(betaApprovalId(EMAIL))
      .get();
    assert.equal(approval.exists, false);
  });

  test("can be disabled without requiring an approval", async () => {
    const result = await authorizeBetaSignup(db, EMAIL, "WRONG", {
      gateEnabled: false,
      now: NOW,
    });
    await consumeBetaSignupApproval(db, EMAIL, {
      gateEnabled: false,
      now: NOW,
    });

    assert.deepEqual(result, { authorized: true, expiresAt: null });
  });
});

describe("beta signup rate limiting", () => {
  const IP = "203.0.113.5";

  test("wrong-code attempts are charged, so brute force is throttled", async () => {
    for (let i = 0; i < 2; i++) {
      await assert.rejects(
        authorize(EMAIL, "WRONG", { clientIp: IP, limit: 2 }),
        (error) => error.code === "permission-denied",
      );
    }

    // Blocked before the comparison: even the correct code gets the limit
    // error, so a blocked caller can't keep probing for the right code.
    await assert.rejects(
      authorize(EMAIL, CODE, { clientIp: IP, limit: 2 }),
      (error) => error.code === "resource-exhausted",
    );
  });

  test("successful approvals are charged too — a leaked code can't spam approvals", async () => {
    await authorize(EMAIL, CODE, { clientIp: IP, limit: 1 });

    await assert.rejects(
      authorize("another@example.com", CODE, { clientIp: IP, limit: 1 }),
      (error) => error.code === "resource-exhausted",
    );
  });

  test("one IP's limit does not affect another", async () => {
    await assert.rejects(
      authorize(EMAIL, "WRONG", { clientIp: IP, limit: 1 }),
      (error) => error.code === "permission-denied",
    );
    await assert.rejects(
      authorize(EMAIL, CODE, { clientIp: IP, limit: 1 }),
      (error) => error.code === "resource-exhausted",
    );

    const result = await authorize(EMAIL, CODE, {
      clientIp: "198.51.100.7",
      limit: 1,
    });
    assert.equal(result.authorized, true);
  });

  test("malformed emails cost no quota", async () => {
    await assert.rejects(
      authorize("not-an-email", CODE, { clientIp: IP }),
      (error) => error.code === "invalid-argument",
    );

    const counters = await db.collection("rateLimits").get();
    assert.equal(counters.empty, true);
  });

  test("quota frees up once the window rolls over", async () => {
    await assert.rejects(
      authorize(EMAIL, "WRONG", { clientIp: IP, limit: 1 }),
      (error) => error.code === "permission-denied",
    );
    await assert.rejects(
      authorize(EMAIL, CODE, { clientIp: IP, limit: 1 }),
      (error) => error.code === "resource-exhausted",
    );

    const result = await authorize(EMAIL, CODE, {
      clientIp: IP,
      limit: 1,
      now: NOW + BETA_RATE_WINDOW_MS,
    });
    assert.equal(result.authorized, true);
  });

  test("defaults to 10 attempts per 10 minutes", () => {
    assert.equal(BETA_RATE_LIMIT, 10);
    assert.equal(BETA_RATE_WINDOW_MS, 10 * 60 * 1000);
  });
});
