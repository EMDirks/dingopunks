// Tests the authenticated change-email availability check against the Auth
// and Firestore emulators. Run via: npm run test:email

import assert from "node:assert/strict";
import { after, beforeEach, describe, test } from "node:test";

import { deleteApp, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

import {
  CHECK_EMAIL_RATE_LIMIT,
  checkEmailAvailable,
} from "../change-email.js";

const PROJECT_ID = "demo-dpaam-change-email";
const NOW = Date.UTC(2026, 8, 23, 12, 0, 0);

if (!process.env.FIRESTORE_EMULATOR_HOST || !process.env.FIREBASE_AUTH_EMULATOR_HOST) {
  throw new Error(
    "Auth and Firestore emulator hosts are required — run through npm run test:email.",
  );
}

const app = initializeApp({ projectId: PROJECT_ID });
const auth = getAuth(app);
const db = getFirestore(app);

function caller(overrides = {}) {
  return {
    uid: "caller-1",
    token: {
      email_verified: false,
      firebase: { sign_in_provider: "password" },
    },
    ...overrides,
  };
}

async function clearFirestore() {
  const response = await fetch(
    `http://${process.env.FIRESTORE_EMULATOR_HOST}/emulator/v1/projects/${PROJECT_ID}/databases/(default)/documents`,
    { method: "DELETE" },
  );
  assert.equal(response.status, 200);
}

async function clearAuth() {
  const response = await fetch(
    `http://${process.env.FIREBASE_AUTH_EMULATOR_HOST}/emulator/v1/projects/${PROJECT_ID}/accounts`,
    { method: "DELETE" },
  );
  assert.equal(response.status, 200);
}

async function assertHttpsError(promise, expectedCode) {
  await assert.rejects(promise, (error) => {
    assert.equal(
      error.code,
      expectedCode,
      `expected ${expectedCode}, got ${error.code}: ${error.message}`,
    );
    return true;
  });
}

beforeEach(async () => {
  await Promise.all([clearFirestore(), clearAuth()]);
});

after(async () => {
  await deleteApp(app);
});

describe("checkEmailAvailable", () => {
  test("reports an unused email as available", async () => {
    const result = await checkEmailAvailable(
      auth,
      db,
      caller(),
      "  New.Teacher@Example.com ",
      { now: NOW },
    );

    assert.deepEqual(result, { available: true });
  });

  test("reports an existing email as unavailable without case sensitivity", async () => {
    await auth.createUser({
      uid: "existing-user",
      email: "Existing.Teacher@example.com",
      password: "password123",
    });

    const result = await checkEmailAvailable(
      auth,
      db,
      caller(),
      "existing.teacher@EXAMPLE.COM",
      { now: NOW },
    );

    assert.deepEqual(result, { available: false });
  });

  test("rejects a verified email caller", async () => {
    await assertHttpsError(
      checkEmailAvailable(
        auth,
        db,
        caller({
          token: {
            email_verified: true,
            firebase: { sign_in_provider: "password" },
          },
        }),
        "new@example.com",
        { now: NOW },
      ),
      "failed-precondition",
    );
  });

  test("rejects a caller signed in with Google", async () => {
    await assertHttpsError(
      checkEmailAvailable(
        auth,
        db,
        caller({
          token: {
            email_verified: true,
            firebase: { sign_in_provider: "google.com" },
          },
        }),
        "new@example.com",
        { now: NOW },
      ),
      "failed-precondition",
    );
  });

  test("rejects a malformed email", async () => {
    await assertHttpsError(
      checkEmailAvailable(auth, db, caller(), "not-an-email", { now: NOW }),
      "invalid-argument",
    );
  });

  test("rate-limits repeated checks by caller uid", async () => {
    for (let attempt = 0; attempt < CHECK_EMAIL_RATE_LIMIT; attempt += 1) {
      const result = await checkEmailAvailable(
        auth,
        db,
        caller(),
        `unused-${attempt}@example.com`,
        { now: NOW },
      );
      assert.equal(result.available, true);
    }

    await assertHttpsError(
      checkEmailAvailable(auth, db, caller(), "one-more@example.com", { now: NOW }),
      "resource-exhausted",
    );
  });
});
