// Stripe billing domain logic: createCheckoutSession (rebate validation +
// rebateClaims) and the webhook's entitlement writes. Kept separate from
// index.js so everything can be tested against the Firestore emulator with a
// fake Stripe client — no functions emulator, no network.
//
// Invariants this module owns:
// - The webhook is the ONLY writer of plan / status / currentPeriodEnd.
// - A rebate order number is claimed by at most one account, transactionally.
// - Stale or out-of-order Stripe events can never re-grant lapsed access.

import { logger } from "firebase-functions";
import { HttpsError } from "firebase-functions/v2/https";
import { FieldValue, Timestamp } from "firebase-admin/firestore";

import { enforceRateLimit } from "./rate-limit.js";

// Honor-system rebate: format-checked order numbers, one claim per number.
// TPT order numbers are 9 digits; Shopify order numbers are 4-5 digits.
export const REBATE_PLATFORM_PATTERNS = {
  tpt: /^\d{9}$/,
  shopify: /^\d{4,5}$/,
};

// Dashboard coupon: $8.99 off, duration `once` (first invoice only).
export const REBATE_COUPON_ID = "REBATE899";

// Per-user backstop against rebate-claim probing (plan §3: 10/hour).
export const CHECKOUT_RATE_LIMIT_SCOPE = "createCheckoutSession";
export const CHECKOUT_RATE_LIMIT = 10;
export const CHECKOUT_RATE_WINDOW_MS = 60 * 60 * 1000;

// Where Checkout sends the browser afterwards. The origin is server-chosen
// (never trusted from the client verbatim) so a forged request can't turn
// Checkout into an open redirect. Localhost is honored only under the
// emulator; anything else falls back to production.
export const PROD_ORIGIN = "https://play.dingopunks.com";
const LOCALHOST_ORIGIN = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/;

export const REBATE_CLAIMS_COLLECTION = "rebateClaims";

/**
 * Validate and normalize the optional rebate fields. Returns null when no
 * rebate was requested; throws invalid-argument on anything malformed. Pure —
 * runs before the rate limit so bad input costs no Firestore work.
 */
export function normalizeRebate(rawPlatform, rawOrderNumber) {
  const platformGiven = rawPlatform !== undefined && rawPlatform !== null && rawPlatform !== "";
  const orderGiven = rawOrderNumber !== undefined && rawOrderNumber !== null && rawOrderNumber !== "";

  if (!platformGiven && !orderGiven) return null;
  if (!platformGiven || !orderGiven) {
    throw new HttpsError(
      "invalid-argument",
      "Both a platform and an order number are required for the rebate.",
    );
  }

  const platform = typeof rawPlatform === "string" ? rawPlatform.trim().toLowerCase() : "";
  const pattern = REBATE_PLATFORM_PATTERNS[platform];
  if (!pattern) {
    throw new HttpsError("invalid-argument", "Unknown rebate platform.");
  }

  const orderNumber = typeof rawOrderNumber === "string" ? rawOrderNumber.trim() : "";
  if (!pattern.test(orderNumber)) {
    throw new HttpsError(
      "invalid-argument",
      platform === "tpt"
        ? "TPT order numbers are 9 digits."
        : "Shopify order numbers are 4 or 5 digits.",
    );
  }

  return { platform, orderNumber };
}

export function rebateClaimId(rebate) {
  return `${rebate.platform}_${rebate.orderNumber}`;
}

/**
 * Claim a rebate order number for this account. Transactional create makes
 * the claim exclusive across accounts; a repeat claim by the SAME account is
 * allowed (a failed or abandoned checkout must not burn the order number).
 *
 * @returns {Promise<boolean>} true if this call created the claim.
 */
export async function claimRebate(db, uid, rebate) {
  const ref = db.collection(REBATE_CLAIMS_COLLECTION).doc(rebateClaimId(rebate));

  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (snap.exists) {
      if (snap.get("uid") === uid) return false;
      throw new HttpsError(
        "already-exists",
        "That order number has already been used for a rebate.",
      );
    }
    tx.create(ref, {
      uid,
      platform: rebate.platform,
      orderNumber: rebate.orderNumber,
      createdAt: FieldValue.serverTimestamp(),
    });
    return true;
  });
}

/** Best-effort undo when Stripe fails after the claim was taken. */
async function releaseRebateClaim(db, uid, rebate) {
  try {
    await db.runTransaction(async (tx) => {
      const ref = db.collection(REBATE_CLAIMS_COLLECTION).doc(rebateClaimId(rebate));
      const snap = await tx.get(ref);
      if (snap.exists && snap.get("uid") === uid) tx.delete(ref);
    });
  } catch (error) {
    // The claim stays with this uid, so only this user can retry it — an
    // annoyance, not a security hole. Log and move on.
    logger.error("Failed to release rebate claim after checkout error", {
      uid,
      claim: rebateClaimId(rebate),
      message: error?.message,
    });
  }
}

/** The trusted origin Stripe-hosted billing pages may return the browser to. */
export function checkoutReturnOrigin(rawOrigin, emulator) {
  if (typeof rawOrigin === "string") {
    const origin = rawOrigin.trim().replace(/\/+$/, "");
    if (origin === PROD_ORIGIN) return origin;
    if (emulator && LOCALHOST_ORIGIN.test(origin)) return origin;
  }
  return PROD_ORIGIN;
}

/**
 * Create a Stripe Checkout session for the All-Access subscription.
 *
 * Order of operations: pure rebate validation (free) → per-user rate limit →
 * membership check → rebate claim → Stripe customer + session. If Stripe
 * fails after this call created the claim, the claim is released so the user
 * can retry.
 *
 * @returns {Promise<{url: string}>}
 */
export async function createCheckoutSession(db, stripe, uid, data = {}, options = {}) {
  const {
    now = Date.now(),
    priceId,
    email = null,
    emulator = false,
    limit = CHECKOUT_RATE_LIMIT,
    windowMs = CHECKOUT_RATE_WINDOW_MS,
  } = options;

  if (!priceId) {
    logger.error("createCheckoutSession called without a configured STRIPE_PRICE_ID");
    throw new HttpsError("internal", "Billing is not configured.");
  }

  const rebate = normalizeRebate(data.rebatePlatform, data.rebateOrderNumber);
  const origin = checkoutReturnOrigin(data.returnOrigin, emulator);

  await enforceRateLimit(db, CHECKOUT_RATE_LIMIT_SCOPE, uid, {
    limit,
    windowMs,
    now,
    message: "Too many checkout attempts. Try again in an hour.",
  });

  const userRef = db.collection("users").doc(uid);
  const userSnap = await userRef.get();

  // Don't sell a second subscription to a current member. A "canceling"
  // member is still entitled through currentPeriodEnd; re-activating belongs
  // in the Customer Portal, not a new Checkout.
  if (userSnap.exists && userSnap.get("plan") === "all-access") {
    throw new HttpsError(
      "failed-precondition",
      "You already have an All-Access membership.",
    );
  }

  const claimCreated = rebate ? await claimRebate(db, uid, rebate) : false;

  try {
    let customerId = userSnap.exists ? userSnap.get("stripeCustomerId") : null;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: email ?? userSnap.get("email") ?? undefined,
        metadata: { uid },
      });
      // Save it, unless a parallel call already saved a different customer —
      // then use the stored one so the account never splits across customers.
      customerId = await db.runTransaction(async (tx) => {
        const snap = await tx.get(userRef);
        const existing = snap.exists ? snap.get("stripeCustomerId") : null;
        if (existing) return existing;
        tx.set(userRef, { stripeCustomerId: customer.id }, { merge: true });
        return customer.id;
      });
    }

    const metadata = { uid };
    if (rebate) {
      metadata.rebatePlatform = rebate.platform;
      metadata.rebateOrderNumber = rebate.orderNumber;
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      ...(rebate ? { discounts: [{ coupon: REBATE_COUPON_ID }] } : {}),
      // uid rides on the session (for checkout.session.completed) AND on the
      // subscription itself (for customer.subscription.* events).
      metadata,
      subscription_data: { metadata: { uid } },
      client_reference_id: uid,
      success_url: `${origin}/membership.html?checkout=success`,
      cancel_url: `${origin}/membership.html?checkout=cancel`,
    });

    if (!session.url) {
      throw new Error("Stripe returned a session without a URL.");
    }
    return { url: session.url };
  } catch (error) {
    if (claimCreated) await releaseRebateClaim(db, uid, rebate);
    if (error instanceof HttpsError) throw error;
    logger.error("Stripe checkout session creation failed", {
      uid,
      message: error?.message,
    });
    throw new HttpsError("internal", "Could not start checkout. Please try again.");
  }
}

/**
 * Create a Stripe Customer Portal session for the customer linked to this
 * Firebase account. The customer ID always comes from the server-managed user
 * document; callers can only supply a return origin, which is allowlisted.
 *
 * @returns {Promise<{url: string}>}
 */
export async function createPortalSession(db, stripe, uid, data = {}, options = {}) {
  const { emulator = false } = options;
  const origin = checkoutReturnOrigin(data.returnOrigin, emulator);
  const userSnap = await db.collection("users").doc(uid).get();
  const customerId = userSnap.exists ? userSnap.get("stripeCustomerId") : null;

  if (typeof customerId !== "string" || !customerId) {
    throw new HttpsError(
      "failed-precondition",
      "No billing account is available for this membership.",
    );
  }

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${origin}/membership.html`,
    });
    if (!session.url) {
      throw new Error("Stripe returned a portal session without a URL.");
    }
    return { url: session.url };
  } catch (error) {
    logger.error("Stripe customer portal session creation failed", {
      uid,
      message: error?.message,
    });
    throw new HttpsError("internal", "Could not open billing. Please try again.");
  }
}

// ---------------------------------------------------------------------------
// Webhook: Stripe events → entitlement writes on users/{uid}
// ---------------------------------------------------------------------------

// Grace on subscription status: `past_due` keeps access — Stripe is still
// retrying the card, and a terminal failure arrives as subscription.deleted.
const ENTITLED_STATUSES = new Set(["active", "trialing", "past_due"]);
const LAPSED_STATUSES = new Set(["canceled", "unpaid", "incomplete_expired"]);

/**
 * `current_period_end` in ms, or null. Newer Stripe API versions moved the
 * field from the subscription onto its items, so check both shapes.
 */
export function subscriptionPeriodEndMs(subscription) {
  const seconds =
    subscription.current_period_end ??
    subscription.items?.data?.[0]?.current_period_end ??
    null;
  return typeof seconds === "number" ? seconds * 1000 : null;
}

/**
 * The plan §4 lifecycle mapping. Returns the user-doc fields a subscription
 * state implies, or null when the event should be ignored (e.g. `incomplete`
 * — Checkout not finished, nothing to grant or revoke).
 */
export function entitlementFromSubscription(subscription) {
  if (ENTITLED_STATUSES.has(subscription.status)) {
    const periodEndMs = subscriptionPeriodEndMs(subscription);
    return {
      plan: "all-access",
      status: subscription.cancel_at_period_end ? "canceling" : "active",
      currentPeriodEnd: periodEndMs === null ? null : Timestamp.fromMillis(periodEndMs),
      subscriptionId: subscription.id,
    };
  }
  if (LAPSED_STATUSES.has(subscription.status)) {
    return {
      plan: "free",
      status: "lapsed",
      currentPeriodEnd: null,
      subscriptionId: null,
    };
  }
  return null;
}

/** Fallback uid lookup when subscription metadata is missing the uid. */
async function uidForCustomer(db, customerId) {
  if (typeof customerId !== "string" || !customerId) return null;
  const snap = await db
    .collection("users")
    .where("stripeCustomerId", "==", customerId)
    .limit(2)
    .get();
  return snap.size === 1 ? snap.docs[0].id : null;
}

/**
 * Apply one subscription state to users/{uid}, transactionally, with two
 * guards that make out-of-order webhook delivery safe:
 *
 * 1. Timestamp guard: each write records the Stripe event's `created`; any
 *    event older than the last applied one is skipped. A delayed retry of a
 *    stale `updated (active)` event can never resurrect lapsed access.
 * 2. Subscription-ID guard: a lapse (plan→free) only applies if it's about
 *    the subscription we currently track. A late `deleted` for an old
 *    subscription can't kill a fresh re-subscribe.
 */
async function applySubscriptionState(db, uid, subscription, event, extras = {}) {
  const entitlement = entitlementFromSubscription(subscription);
  if (!entitlement) {
    logger.info("Ignoring subscription state with no entitlement mapping", {
      uid,
      subscriptionId: subscription.id,
      subscriptionStatus: subscription.status,
    });
    return { applied: false };
  }

  return db.runTransaction(async (tx) => {
    const userRef = db.collection("users").doc(uid);
    const snap = await tx.get(userRef);

    const lastEventCreated = snap.exists ? snap.get("stripeEventCreated") : null;
    if (typeof lastEventCreated === "number" && event.created < lastEventCreated) {
      logger.warn("Skipping out-of-order Stripe event", {
        uid,
        eventId: event.id,
        eventCreated: event.created,
        lastEventCreated,
      });
      return { applied: false };
    }

    if (entitlement.plan === "free") {
      const trackedSubscription = snap.exists ? snap.get("subscriptionId") : null;
      if (trackedSubscription && trackedSubscription !== subscription.id) {
        logger.warn("Skipping lapse for an untracked subscription", {
          uid,
          eventSubscription: subscription.id,
          trackedSubscription,
        });
        return { applied: false };
      }
    }

    const update = {
      ...entitlement,
      stripeEventCreated: event.created,
    };
    if (typeof extras.customerId === "string" && extras.customerId) {
      update.stripeCustomerId = extras.customerId;
    }
    // First rebate wins; a rebate is a one-time first-purchase artifact.
    if (extras.rebate && !(snap.exists && snap.get("rebate"))) {
      update.rebate = {
        platform: extras.rebate.platform,
        orderNumber: extras.rebate.orderNumber,
        appliedAt: FieldValue.serverTimestamp(),
      };
    }

    // merge:true — the webhook must never depend on ensureUserProfile having
    // run, and must never clobber fields it doesn't own.
    tx.set(userRef, update, { merge: true });
    return { applied: true };
  });
}

function rebateFromMetadata(metadata) {
  const platform = metadata?.rebatePlatform;
  const orderNumber = metadata?.rebateOrderNumber;
  return typeof platform === "string" && typeof orderNumber === "string"
    ? { platform, orderNumber }
    : null;
}

/**
 * Route one verified Stripe event to its entitlement write. Signature
 * verification happens in index.js before this is called.
 *
 * Returns {handled} rather than throwing for events we can't act on
 * (missing uid, unknown type): a Stripe retry can't fix those, so a 200
 * with an error log is the right response. Genuine infrastructure failures
 * (Firestore down) still throw, and index.js answers 500 so Stripe retries.
 */
export async function handleStripeEvent(db, stripe, event) {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      if (session.mode !== "subscription") return { handled: false };

      const uid = session.metadata?.uid;
      if (!uid) {
        logger.error("checkout.session.completed without a uid in metadata", {
          eventId: event.id,
          sessionId: session.id,
        });
        return { handled: false };
      }

      const subscriptionId =
        typeof session.subscription === "string"
          ? session.subscription
          : session.subscription?.id;
      if (!subscriptionId) {
        logger.error("checkout.session.completed without a subscription", {
          eventId: event.id,
          sessionId: session.id,
        });
        return { handled: false };
      }

      // The session doesn't carry period end / status — fetch the live
      // subscription so this handler and subscription.updated write
      // identical state regardless of arrival order.
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      await applySubscriptionState(db, uid, subscription, event, {
        customerId:
          typeof session.customer === "string" ? session.customer : session.customer?.id,
        rebate: rebateFromMetadata(session.metadata),
      });
      return { handled: true };
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      const uid =
        subscription.metadata?.uid ?? (await uidForCustomer(db, subscription.customer));
      if (!uid) {
        logger.error("Subscription event with no resolvable uid", {
          eventId: event.id,
          eventType: event.type,
          subscriptionId: subscription.id,
        });
        return { handled: false };
      }

      await applySubscriptionState(db, uid, subscription, event);
      return { handled: true };
    }

    default:
      logger.info("Ignoring unhandled Stripe event type", { eventType: event.type });
      return { handled: false };
  }
}
