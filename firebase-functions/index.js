import { HttpsError, onCall } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

initializeApp();

async function ensureUserDocument(user) {
  const userRef = getFirestore().collection("users").doc(user.uid);
  let created = false;

  await getFirestore().runTransaction(async (transaction) => {
    const existing = await transaction.get(userRef);
    if (existing.exists) return;

    transaction.create(userRef, {
      email: user.email ?? null,
      createdAt: FieldValue.serverTimestamp(),
      plan: "free",
      stripeCustomerId: null,
      subscriptionId: null,
      status: null,
      currentPeriodEnd: null,
      rebate: null,
    });
    created = true;
  });

  return created;
}

export const ensureUserProfile = onCall({ invoker: "public" }, async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Sign in before setting up your profile.");
  }

  const created = await ensureUserDocument({
    uid: request.auth.uid,
    email:
      typeof request.auth.token.email === "string"
        ? request.auth.token.email
        : null,
  });

  return { created };
});
