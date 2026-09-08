import assert from "node:assert/strict";
import { after, beforeEach, describe, test } from "node:test";

import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import {
  BETA_APPROVAL_TTL_MS,
  authorizeBetaSignup,
  betaApprovalId,
  consumeBetaSignupApproval,
} from "../beta-signup.js";

const PROJECT_ID = "demo-dpaam-beta-signup";
const NOW = Date.UTC(2026, 8, 8, 12, 0, 0);
const EMAIL = "teacher@example.com";

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

beforeEach(clearFirestore);
after(() => db.terminate());

describe("beta signup authorization", () => {
  test("accepts the configured code without storing the email", async () => {
    const result = await authorizeBetaSignup(
      db,
      `  ${EMAIL.toUpperCase()}  `,
      " beta01 ",
      { now: NOW },
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
      authorizeBetaSignup(db, EMAIL, "WRONG", { now: NOW }),
      (error) => error.code === "permission-denied",
    );

    const approvals = await db.collection("betaSignupApprovals").get();
    assert.equal(approvals.empty, true);
  });

  test("consumes a valid approval once", async () => {
    await authorizeBetaSignup(db, EMAIL, "BETA01", { now: NOW });
    await consumeBetaSignupApproval(db, EMAIL, { now: NOW + 1 });

    await assert.rejects(
      consumeBetaSignupApproval(db, EMAIL, { now: NOW + 2 }),
      (error) => error.code === "permission-denied",
    );
  });

  test("rejects and removes an expired approval", async () => {
    await authorizeBetaSignup(db, EMAIL, "BETA01", {
      now: NOW - BETA_APPROVAL_TTL_MS,
    });

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
