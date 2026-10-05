import { logger } from "firebase-functions";
import { HttpsError, onCall, onRequest } from "firebase-functions/v2/https";
import { onDocumentUpdated } from "firebase-functions/v2/firestore";
import { defineSecret, defineString } from "firebase-functions/params";
import { initializeApp } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import Stripe from "stripe";

import {
  createShareCode as createShareCodeImpl,
  cancelShareCode as cancelShareCodeImpl,
} from "./share-codes.js";
import {
  clientIpFromRequest,
  resolveGameCode as resolveGameCodeImpl,
} from "./resolve-code.js";
import {
  createCheckoutSession as createCheckoutSessionImpl,
  createPortalSession as createPortalSessionImpl,
  handleStripeEvent,
} from "./stripe-billing.js";
import {
  planFieldValue,
  planSyncForChange,
  subscribeToGroup,
  syncPlanField,
} from "./mailerlite.js";

initializeApp();

// Stripe credentials live in Cloud Secret Manager, never in the repo:
//   firebase functions:secrets:set STRIPE_SECRET_KEY
//   firebase functions:secrets:set STRIPE_WEBHOOK_SECRET
// The price ID is config, not a secret — a string param (deploy prompts for
// it once and stores it in firebase-functions/.env).
const stripeSecretKey = defineSecret("STRIPE_SECRET_KEY");
const stripeWebhookSecret = defineSecret("STRIPE_WEBHOOK_SECRET");
const stripePriceId = defineString("STRIPE_PRICE_ID", {
  description: "Stripe Price ID for the All-Access yearly subscription (price_...)",
});
let cachedStripe = null;
function stripeClient() {
  cachedStripe ??= new Stripe(stripeSecretKey.value());
  return cachedStripe;
}

// New accounts are added to the MailerLite "Dingo Punks" group. Their plan
// custom field is kept in sync as account access changes:
//   firebase functions:secrets:set MAILERLITE_API_KEY
const mailerliteApiKey = defineSecret("MAILERLITE_API_KEY");
const mailerliteGroupId = defineString("MAILERLITE_GROUP_ID", {
  description: 'MailerLite group ID for the "Dingo Punks" group (numeric)',
});

function requireAuth(request) {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Sign in first.");
  }
  return request.auth.uid;
}

async function ensureUserDocument(user) {
  const userRef = getFirestore().collection("users").doc(user.uid);
  let created = false;
  let mailerliteStatus = null;
  let plan = "free";
  let mailerlitePlan = null;

  await getFirestore().runTransaction(async (transaction) => {
    const existing = await transaction.get(userRef);
    if (existing.exists) {
      mailerliteStatus = existing.get("mailerliteStatus") ?? null;
      plan = existing.get("plan") ?? "free";
      mailerlitePlan = existing.get("mailerlitePlan") ?? null;
      return;
    }

    transaction.create(userRef, {
      email: user.email ?? null,
      createdAt: FieldValue.serverTimestamp(),
      plan: "free",
      stripeCustomerId: null,
      subscriptionId: null,
      status: null,
      currentPeriodEnd: null,
      rebate: null,
      mailerliteStatus: "pending",
    });
    created = true;
    mailerliteStatus = "pending";
  });

  return { created, mailerliteStatus, plan, mailerlitePlan };
}

// Only "pending" accounts (created since this sync shipped) are synced, so
// older accounts are never backfilled. A transient failure leaves the account
// pending and the next ensureUserProfile call retries. Never throws: a
// MailerLite outage must not block sign-up.
async function syncMailerLite(uid, email, name, plan) {
  if (process.env.FUNCTIONS_EMULATOR === "true" || !email) return;

  const userRef = getFirestore().collection("users").doc(uid);
  try {
    await subscribeToGroup({
      apiKey: mailerliteApiKey.value(),
      groupId: mailerliteGroupId.value(),
      email,
      name,
      plan,
    });
    await userRef.update({
      mailerliteStatus: "subscribed",
      mailerlitePlan: planFieldValue(plan),
      mailerliteSubscribedAt: FieldValue.serverTimestamp(),
    });
  } catch (error) {
    if (error?.permanent) {
      logger.warn("MailerLite rejected subscriber", {
        uid,
        status: error.status,
        errorMessage: error.message,
      });
      await userRef.update({ mailerliteStatus: "rejected" }).catch(() => {});
      return;
    }
    logger.warn("MailerLite sync failed; will retry on next profile load", {
      uid,
      errorMessage: error?.message,
    });
  }
}

async function syncPlanToMailerLite(uid, email, plan) {
  if (process.env.FUNCTIONS_EMULATOR === "true" || !email) return;

  const userRef = getFirestore().collection("users").doc(uid);
  try {
    await syncPlanField({
      apiKey: mailerliteApiKey.value(),
      email,
      plan,
    });
    await userRef.update({ mailerlitePlan: planFieldValue(plan) });
  } catch (error) {
    logger.warn("MailerLite plan sync failed; will retry on next profile load", {
      uid,
      permanent: Boolean(error?.permanent),
      status: error?.status ?? null,
      errorMessage: error?.message,
    });
  }
}

export const ensureUserProfile = onCall(
  { invoker: "public", secrets: [mailerliteApiKey] },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Sign in before setting up your profile.");
    }

    const email =
      typeof request.auth.token.email === "string" ? request.auth.token.email : null;
    const { created, mailerliteStatus, plan, mailerlitePlan } = await ensureUserDocument({
      uid: request.auth.uid,
      email,
    });

    if (mailerliteStatus === "pending") {
      const name =
        typeof request.auth.token.name === "string" ? request.auth.token.name : null;
      await syncMailerLite(request.auth.uid, email, name, plan);
    } else if (
      mailerliteStatus === "subscribed" &&
      mailerlitePlan !== planFieldValue(plan)
    ) {
      await syncPlanToMailerLite(request.auth.uid, email, plan);
    }

    return { created };
  },
);

export const onUserPlanChanged = onDocumentUpdated(
  { document: "users/{uid}", secrets: [mailerliteApiKey] },
  async (event) => {
    const change = planSyncForChange(event.data.before.data(), event.data.after.data());
    if (!change) return;
    await syncPlanToMailerLite(event.params.uid, change.email, change.plan);
  },
);

export const createShareCode = onCall({ invoker: "public" }, async (request) => {
  const uid = requireAuth(request);
  return createShareCodeImpl(getFirestore(), uid, request.data?.gameId);
});

export const cancelShareCode = onCall({ invoker: "public" }, async (request) => {
  const uid = requireAuth(request);
  return cancelShareCodeImpl(getFirestore(), uid, request.data?.code);
});

// Deliberately unauthenticated: students play from a shared code, with no
// account. Per-IP rate limiting inside the implementation is the only gate.
// maxInstances is a bill ceiling for floods, not a throughput target: 5
// instances at the default concurrency still serve hundreds of lookups/sec.
export const resolveGameCode = onCall({ invoker: "public", maxInstances: 5 }, async (request) => {
  return resolveGameCodeImpl(
    getFirestore(),
    request.data?.code,
    clientIpFromRequest(request.rawRequest),
  );
});

export const createCheckoutSession = onCall(
  { invoker: "public", secrets: [stripeSecretKey] },
  async (request) => {
    const uid = requireAuth(request);
    return createCheckoutSessionImpl(getFirestore(), stripeClient(), uid, request.data ?? {}, {
      priceId: stripePriceId.value(),
      email:
        typeof request.auth.token.email === "string" ? request.auth.token.email : null,
      emulator: process.env.FUNCTIONS_EMULATOR === "true",
    });
  },
);

export const createPortalSession = onCall(
  { invoker: "public", secrets: [stripeSecretKey] },
  async (request) => {
    const uid = requireAuth(request);
    return createPortalSessionImpl(
      getFirestore(),
      stripeClient(),
      uid,
      request.data ?? {},
      { emulator: process.env.FUNCTIONS_EMULATOR === "true" },
    );
  },
);

// The only writer of entitlement state (plan / status / currentPeriodEnd).
// Auth is Stripe's signature over the raw body — nothing else is trusted.
export const stripeWebhook = onRequest(
  { invoker: "public", secrets: [stripeSecretKey, stripeWebhookSecret] },
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).send("Method Not Allowed");
      return;
    }

    let event;
    try {
      event = stripeClient().webhooks.constructEvent(
        request.rawBody,
        request.headers["stripe-signature"],
        stripeWebhookSecret.value(),
      );
    } catch (error) {
      logger.warn("Stripe webhook signature verification failed", {
        errorMessage: error?.message,
      });
      response.status(400).send("Invalid signature");
      return;
    }

    try {
      await handleStripeEvent(getFirestore(), stripeClient(), event);
      // Unactionable events (unknown type, missing uid) also get a 200 —
      // they're logged inside handleStripeEvent, and a Stripe retry can't
      // fix them.
      response.status(200).send("ok");
    } catch (error) {
      // Infrastructure failure: answer 500 so Stripe retries the delivery.
      logger.error("Stripe webhook handler failed", {
        eventId: event.id,
        eventType: event.type,
        errorMessage: error?.message,
      });
      response.status(500).send("Webhook handler error");
    }
  },
);
