import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { after, before, beforeEach, describe, test } from "node:test";

import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} from "@firebase/rules-unit-testing";
import {
  collection,
  deleteDoc,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

const PROJECT_ID = "demo-dpaam-rules";
const OWNER_UID = "owner-user";
const OTHER_UID = "other-user";
const RULES = readFileSync(
  new URL("../../firestore.rules", import.meta.url),
  "utf8",
);

let testEnv;

function authenticatedDb(uid) {
  return testEnv.authenticatedContext(uid).firestore();
}

function unauthenticatedDb() {
  return testEnv.unauthenticatedContext().firestore();
}

async function seedDocuments(documents) {
  await testEnv.withSecurityRulesDisabled(async (context) => {
    const db = context.firestore();
    await Promise.all(
      Object.entries(documents).map(([path, data]) =>
        setDoc(doc(db, path), data),
      ),
    );
  });
}

before(async () => {
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: { rules: RULES },
  });
});

beforeEach(async () => {
  await testEnv.clearFirestore();
});

after(async () => {
  await testEnv.cleanup();
});

describe("users", () => {
  beforeEach(async () => {
    await seedDocuments({
      [`users/${OWNER_UID}`]: {
        email: "owner@example.com",
        plan: "free",
      },
      [`users/${OTHER_UID}`]: {
        email: "other@example.com",
        plan: "all-access",
      },
    });
  });

  test("allows an authenticated user to get only their own profile", async () => {
    const ownerDb = authenticatedDb(OWNER_UID);

    await assertSucceeds(getDoc(doc(ownerDb, "users", OWNER_UID)));
    await assertFails(getDoc(doc(ownerDb, "users", OTHER_UID)));
    await assertFails(
      getDoc(doc(unauthenticatedDb(), "users", OWNER_UID)),
    );
  });

  test("denies profile enumeration even when filtered to the caller", async () => {
    const ownerDb = authenticatedDb(OWNER_UID);
    const ownProfileQuery = query(
      collection(ownerDb, "users"),
      where(documentId(), "==", OWNER_UID),
    );

    await assertFails(getDocs(ownProfileQuery));
  });

  test("denies every client write to profiles and entitlement fields", async () => {
    const ownerDb = authenticatedDb(OWNER_UID);
    const ownProfile = doc(ownerDb, "users", OWNER_UID);

    await assertFails(
      setDoc(doc(ownerDb, "users", "new-user"), { plan: "free" }),
    );
    await assertFails(updateDoc(ownProfile, { plan: "all-access" }));
    await assertFails(deleteDoc(ownProfile));
  });
});

describe("userPrefs", () => {
  test("allows valid create, read, update, and delete on the caller's doc", async () => {
    const ownerDb = authenticatedDb(OWNER_UID);
    const ownPrefs = doc(ownerDb, "userPrefs", OWNER_UID);

    await assertSucceeds(setDoc(ownPrefs, { favorites: ["game-a"] }));
    await assertSucceeds(getDoc(ownPrefs));
    await assertSucceeds(
      updateDoc(ownPrefs, { favorites: ["game-b", "game-a"] }),
    );
    await assertSucceeds(deleteDoc(ownPrefs));
  });

  test("denies unauthenticated and cross-user access", async () => {
    await seedDocuments({
      [`userPrefs/${OTHER_UID}`]: { favorites: ["game-b"] },
    });

    const ownerDb = authenticatedDb(OWNER_UID);
    const otherPrefs = doc(ownerDb, "userPrefs", OTHER_UID);
    const anonymousOwnPrefs = doc(
      unauthenticatedDb(),
      "userPrefs",
      OWNER_UID,
    );

    await assertFails(getDoc(otherPrefs));
    await assertFails(setDoc(otherPrefs, { favorites: [] }));
    await assertFails(updateDoc(otherPrefs, { favorites: [] }));
    await assertFails(deleteDoc(otherPrefs));
    await assertFails(getDoc(anonymousOwnPrefs));
    await assertFails(setDoc(anonymousOwnPrefs, { favorites: [] }));
  });

  test("requires the exact bounded preferences schema", async () => {
    const ownerDb = authenticatedDb(OWNER_UID);
    const ownPrefs = doc(ownerDb, "userPrefs", OWNER_UID);

    await assertFails(setDoc(ownPrefs, {}));
    await assertFails(setDoc(ownPrefs, { favorites: "game-a" }));
    await assertFails(
      setDoc(ownPrefs, { favorites: [], plan: "all-access" }),
    );
    await assertFails(
      setDoc(ownPrefs, {
        favorites: Array.from({ length: 501 }, (_, index) => `game-${index}`),
      }),
    );
  });

  test("denies listing the preferences collection", async () => {
    await seedDocuments({
      [`userPrefs/${OWNER_UID}`]: { favorites: ["game-a"] },
    });

    await assertFails(
      getDocs(collection(authenticatedDb(OWNER_UID), "userPrefs")),
    );
  });
});

describe("codes", () => {
  beforeEach(async () => {
    const now = Date.now();
    await seedDocuments({
      "codes/OWNR1": {
        uid: OWNER_UID,
        gameId: "game-a",
        createdAt: new Date(now),
        expiresAt: new Date(now + 60_000),
      },
      "codes/OWNR2": {
        uid: OWNER_UID,
        gameId: "game-b",
        createdAt: new Date(now),
        expiresAt: new Date(now + 60_000),
      },
      "codes/OTHR1": {
        uid: OTHER_UID,
        gameId: "game-c",
        createdAt: new Date(now),
        expiresAt: new Date(now + 60_000),
      },
    });
  });

  test("allows direct reads only when the stored uid owns the code", async () => {
    const ownerDb = authenticatedDb(OWNER_UID);

    await assertSucceeds(getDoc(doc(ownerDb, "codes", "OWNR1")));
    await assertFails(getDoc(doc(ownerDb, "codes", "OTHR1")));
    await assertFails(
      getDoc(doc(unauthenticatedDb(), "codes", "OWNR1")),
    );
  });

  test("allows only owner-constrained code queries", async () => {
    const ownerDb = authenticatedDb(OWNER_UID);
    const ownCodesQuery = query(
      collection(ownerDb, "codes"),
      where("uid", "==", OWNER_UID),
    );

    const snapshot = await assertSucceeds(getDocs(ownCodesQuery));
    assert.equal(snapshot.size, 2);

    await assertFails(getDocs(collection(ownerDb, "codes")));
    await assertFails(
      getDocs(
        query(
          collection(ownerDb, "codes"),
          where("uid", "==", OTHER_UID),
        ),
      ),
    );
    await assertFails(
      getDocs(
        query(
          collection(unauthenticatedDb(), "codes"),
          where("uid", "==", OWNER_UID),
        ),
      ),
    );
  });

  test("denies every client write, including writes to owned codes", async () => {
    const ownerDb = authenticatedDb(OWNER_UID);
    const ownCode = doc(ownerDb, "codes", "OWNR1");

    await assertFails(
      setDoc(doc(ownerDb, "codes", "NEWC1"), {
        uid: OWNER_UID,
        gameId: "game-a",
      }),
    );
    await assertFails(updateDoc(ownCode, { gameId: "game-c" }));
    await assertFails(deleteDoc(ownCode));
  });
});

describe("server-only and unknown paths", () => {
  test("denies all client access to backend collections", async () => {
    await seedDocuments({
      "rebateClaims/tpt_123456789": { uid: OWNER_UID },
      "rateLimits/ip_hash": { count: 1 },
    });

    const ownerDb = authenticatedDb(OWNER_UID);

    for (const path of ["rebateClaims/tpt_123456789", "rateLimits/ip_hash"]) {
      const reference = doc(ownerDb, path);
      await assertFails(getDoc(reference));
      await assertFails(setDoc(reference, { uid: OWNER_UID }));
      await assertFails(updateDoc(reference, { count: 2 }));
      await assertFails(deleteDoc(reference));
    }
  });

  test("default-denies unknown collections and subcollections", async () => {
    await seedDocuments({
      "unexpected/document": { value: true },
      [`users/${OWNER_UID}/private/document`]: { value: true },
    });

    const ownerDb = authenticatedDb(OWNER_UID);

    await assertFails(getDoc(doc(ownerDb, "unexpected", "document")));
    await assertFails(
      setDoc(doc(ownerDb, "unexpected", "new-document"), { value: true }),
    );
    await assertFails(
      getDoc(doc(ownerDb, "users", OWNER_UID, "private", "document")),
    );
  });
});
