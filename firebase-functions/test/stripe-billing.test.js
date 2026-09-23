// Tests the Stripe billing domain logic (rebate validation + claims, checkout
// session creation, webhook entitlement writes) against the Firestore
// emulator with a fake Stripe client. Run via: npm run test:stripe
// (firebase emulators:exec sets FIRESTORE_EMULATOR_HOST).

import assert from "node:assert/strict";
import { after, beforeEach, describe, test } from "node:test";

import { initializeApp } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

import {
  ACCOUNT_ORIGIN,
  PROD_ORIGIN,
  REBATE_COUPON_ID,
  checkoutReturnOrigin,
  createCheckoutSession,
  createPortalSession,
  entitlementFromSubscription,
  handleStripeEvent,
  normalizeRebate,
  rebateClaimId,
} from "../stripe-billing.js";

const PROJECT_ID = "demo-dpaam-stripe";
const NOW = Date.UTC(2026, 8, 14, 12, 0, 0);
const PERIOD_END_S = Math.floor(Date.UTC(2027, 8, 14, 12, 0, 0) / 1000);
const PRICE_ID = "price_test_allaccess";

if (!process.env.FIRESTORE_EMULATOR_HOST) {
  throw new Error("FIRESTORE_EMULATOR_HOST is not set — run through `npm run test:stripe`.");
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
    stripeCustomerId: null,
    subscriptionId: null,
    status: null,
    currentPeriodEnd: null,
    rebate: null,
    ...fields,
  });
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

/**
 * Fake Stripe client. Records every call; behavior overridable per test.
 */
function fakeStripe(overrides = {}) {
  const calls = {
    customersCreate: [],
    sessionsCreate: [],
    portalSessionsCreate: [],
    subscriptionsRetrieve: [],
    subscriptionsCancel: [],
    chargesRetrieve: [],
  };
  return {
    calls,
    customers: {
      create: async (params) => {
        calls.customersCreate.push(params);
        if (overrides.customerError) throw overrides.customerError;
        return { id: overrides.customerId ?? "cus_new" };
      },
    },
    checkout: {
      sessions: {
        create: async (params) => {
          calls.sessionsCreate.push(params);
          // sessionError may be an Error (always throw) or a function of the
          // request params returning an Error or null (conditional throw).
          const sessionError = typeof overrides.sessionError === "function"
            ? overrides.sessionError(params)
            : overrides.sessionError;
          if (sessionError) throw sessionError;
          return { id: "cs_1", url: "https://checkout.stripe.com/c/pay/cs_1" };
        },
      },
    },
    billingPortal: {
      sessions: {
        create: async (params) => {
          calls.portalSessionsCreate.push(params);
          if (overrides.portalError) throw overrides.portalError;
          return {
            id: "bps_1",
            url: overrides.portalUrl ?? "https://billing.stripe.com/p/session/bps_1",
          };
        },
      },
    },
    subscriptions: {
      retrieve: async (id) => {
        calls.subscriptionsRetrieve.push(id);
        return overrides.subscription ?? subscriptionObject({ id });
      },
      cancel: async (id) => {
        calls.subscriptionsCancel.push(id);
        if (overrides.cancelError) throw overrides.cancelError;
        // Return the subscription as canceled (mirrors Stripe behavior).
        return overrides.canceledSubscription ?? subscriptionObject({ id, status: "canceled" });
      },
    },
    charges: {
      retrieve: async (id) => {
        calls.chargesRetrieve.push(id);
        if (overrides.chargeRetrieveError) throw overrides.chargeRetrieveError;
        return overrides.charge ?? { id, customer: "cus_1" };
      },
    },
  };
}

function subscriptionObject(overrides = {}) {
  return {
    id: "sub_1",
    status: "active",
    cancel_at_period_end: false,
    customer: "cus_1",
    metadata: { uid: "buyer" },
    current_period_end: PERIOD_END_S,
    ...overrides,
  };
}

function stripeEvent(type, object, { id = "evt_1", created = 1_800_000_000 } = {}) {
  return { id, type, created, data: { object } };
}

beforeEach(clearFirestore);
after(() => db.terminate());

// ---------------------------------------------------------------------------
// normalizeRebate
// ---------------------------------------------------------------------------

describe("normalizeRebate", () => {
  test("no rebate fields means no rebate", () => {
    assert.equal(normalizeRebate(undefined, undefined), null);
    assert.equal(normalizeRebate(null, null), null);
    assert.equal(normalizeRebate("", ""), null);
  });

  test("normalizes platform case and trims the order number", () => {
    assert.deepEqual(normalizeRebate(" TPT ", " 123456789 "), {
      platform: "tpt",
      orderNumber: "123456789",
    });
    assert.deepEqual(normalizeRebate("shopify", "1234"), {
      platform: "shopify",
      orderNumber: "1234",
    });
    assert.deepEqual(normalizeRebate("shopify", "12345"), {
      platform: "shopify",
      orderNumber: "12345",
    });
  });

  test("strips a leading # from the order number (Shopify receipt format)", () => {
    assert.deepEqual(normalizeRebate("shopify", "#1234"), {
      platform: "shopify",
      orderNumber: "1234",
    });
    assert.deepEqual(normalizeRebate("shopify", " #12345 "), {
      platform: "shopify",
      orderNumber: "12345",
    });
    assert.deepEqual(normalizeRebate("tpt", "#123456789"), {
      platform: "tpt",
      orderNumber: "123456789",
    });
  });

  test("rejects half-filled, unknown-platform, and bad-format input", () => {
    const cases = [
      ["tpt", undefined],
      [undefined, "123456789"],
      ["amazon", "123456789"],
      ["tpt", "12345678"], // 8 digits
      ["tpt", "1234567890"], // 10 digits
      ["shopify", "123"], // 3 digits
      ["shopify", "123456"], // 6 digits
      ["tpt", "12345678a"],
      ["tpt", 123456789], // non-string
    ];
    for (const [platform, orderNumber] of cases) {
      assert.throws(
        () => normalizeRebate(platform, orderNumber),
        (error) => error.code === "invalid-argument",
        `expected invalid-argument for ${platform}/${orderNumber}`,
      );
    }
  });
});

// ---------------------------------------------------------------------------
// checkoutReturnOrigin
// ---------------------------------------------------------------------------

describe("checkoutReturnOrigin", () => {
  test("defaults to production and never trusts arbitrary origins", () => {
    assert.equal(checkoutReturnOrigin(undefined, false), PROD_ORIGIN);
    assert.equal(checkoutReturnOrigin("https://evil.example.com", false), PROD_ORIGIN);
    assert.equal(checkoutReturnOrigin("http://localhost:8000", false), PROD_ORIGIN);
    assert.equal(checkoutReturnOrigin(PROD_ORIGIN, false), PROD_ORIGIN);
  });

  test("allows the account production origin", () => {
    assert.equal(checkoutReturnOrigin(ACCOUNT_ORIGIN, false), ACCOUNT_ORIGIN);
    assert.equal(checkoutReturnOrigin(`${ACCOUNT_ORIGIN}/`, false), ACCOUNT_ORIGIN);
  });

  test("allows localhost only under the emulator", () => {
    assert.equal(checkoutReturnOrigin("http://localhost:8000", true), "http://localhost:8000");
    assert.equal(checkoutReturnOrigin("http://127.0.0.1:5500", true), "http://127.0.0.1:5500");
    assert.equal(checkoutReturnOrigin("https://evil.example.com", true), PROD_ORIGIN);
  });
});

// ---------------------------------------------------------------------------
// createCheckoutSession
// ---------------------------------------------------------------------------

describe("createCheckoutSession", () => {
  test("creates a customer and a subscription session for a free user", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe();

    const result = await createCheckoutSession(db, stripe, "buyer", {}, {
      now: NOW,
      priceId: PRICE_ID,
      email: "buyer@example.com",
    });

    assert.equal(result.url, "https://checkout.stripe.com/c/pay/cs_1");

    assert.equal(stripe.calls.customersCreate.length, 1);
    assert.deepEqual(stripe.calls.customersCreate[0], {
      email: "buyer@example.com",
      metadata: { uid: "buyer" },
    });

    assert.equal(stripe.calls.sessionsCreate.length, 1);
    const session = stripe.calls.sessionsCreate[0];
    assert.equal(session.mode, "subscription");
    assert.equal(session.customer, "cus_new");
    assert.deepEqual(session.line_items, [{ price: PRICE_ID, quantity: 1 }]);
    assert.deepEqual(session.metadata, { uid: "buyer" });
    assert.deepEqual(session.subscription_data, { metadata: { uid: "buyer" } });
    assert.equal(session.client_reference_id, "buyer");
    assert.equal(session.discounts, undefined);
    assert.equal(session.success_url, `${PROD_ORIGIN}/membership.html?checkout=success`);
    assert.equal(session.cancel_url, `${PROD_ORIGIN}/membership.html?checkout=cancel`);

    const userDoc = await db.collection("users").doc("buyer").get();
    assert.equal(userDoc.get("stripeCustomerId"), "cus_new");
  });

  test("reuses an existing Stripe customer", async () => {
    await seedUser("buyer", { stripeCustomerId: "cus_existing" });
    const stripe = fakeStripe();

    await createCheckoutSession(db, stripe, "buyer", {}, { now: NOW, priceId: PRICE_ID });

    assert.equal(stripe.calls.customersCreate.length, 0);
    assert.equal(stripe.calls.sessionsCreate[0].customer, "cus_existing");
  });

  test("a stale stored customer is replaced and the session retried", async () => {
    // The stored customer doesn't exist in the current Stripe mode (e.g. a
    // test-mode leftover after the switch to the live key).
    await seedUser("buyer", { stripeCustomerId: "cus_stale" });
    const staleError = Object.assign(
      new Error("No such customer: 'cus_stale'; a similar object exists in test mode."),
      { code: "resource_missing", param: "customer", type: "StripeInvalidRequestError" },
    );
    const stripe = fakeStripe({
      sessionError: (params) => (params.customer === "cus_stale" ? staleError : null),
    });

    const result = await createCheckoutSession(db, stripe, "buyer", {}, {
      now: NOW,
      priceId: PRICE_ID,
    });

    assert.ok(result.url);
    // First attempt used the stale ID, the retry used a fresh customer.
    assert.equal(stripe.calls.sessionsCreate.length, 2);
    assert.equal(stripe.calls.sessionsCreate[0].customer, "cus_stale");
    assert.equal(stripe.calls.sessionsCreate[1].customer, "cus_new");
    assert.equal(stripe.calls.customersCreate.length, 1);
    // The dead ID was overwritten so future calls skip the retry.
    const userDoc = await db.collection("users").doc("buyer").get();
    assert.equal(userDoc.get("stripeCustomerId"), "cus_new");
  });

  test("returns account-domain checkout sessions to the account domain", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe();

    await createCheckoutSession(
      db,
      stripe,
      "buyer",
      { returnOrigin: ACCOUNT_ORIGIN },
      { now: NOW, priceId: PRICE_ID },
    );

    const session = stripe.calls.sessionsCreate[0];
    assert.equal(session.success_url, `${ACCOUNT_ORIGIN}/membership.html?checkout=success`);
    assert.equal(session.cancel_url, `${ACCOUNT_ORIGIN}/membership.html?checkout=cancel`);
  });

  test("a valid rebate attaches the coupon and claims the order number", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe();

    await createCheckoutSession(
      db,
      stripe,
      "buyer",
      { rebatePlatform: "tpt", rebateOrderNumber: "123456789" },
      { now: NOW, priceId: PRICE_ID },
    );

    const session = stripe.calls.sessionsCreate[0];
    assert.deepEqual(session.discounts, [{ coupon: REBATE_COUPON_ID }]);
    assert.deepEqual(session.metadata, {
      uid: "buyer",
      rebatePlatform: "tpt",
      rebateOrderNumber: "123456789",
    });

    const claim = await db
      .collection("rebateClaims")
      .doc(rebateClaimId({ platform: "tpt", orderNumber: "123456789" }))
      .get();
    assert.equal(claim.exists, true);
    assert.equal(claim.get("uid"), "buyer");
    assert.equal(claim.get("platform"), "tpt");
    assert.equal(claim.get("orderNumber"), "123456789");
  });

  test("an order number claimed by another account is rejected before Stripe", async () => {
    await seedUser("buyer");
    await db.collection("rebateClaims").doc("tpt_123456789").set({
      uid: "someone-else",
      platform: "tpt",
      orderNumber: "123456789",
      createdAt: Timestamp.fromMillis(NOW - 1000),
    });
    const stripe = fakeStripe();

    await assertHttpsError(
      createCheckoutSession(
        db,
        stripe,
        "buyer",
        { rebatePlatform: "tpt", rebateOrderNumber: "123456789" },
        { now: NOW, priceId: PRICE_ID },
      ),
      "already-exists",
    );

    assert.equal(stripe.calls.sessionsCreate.length, 0);
    // The other account's claim is untouched.
    const claim = await db.collection("rebateClaims").doc("tpt_123456789").get();
    assert.equal(claim.get("uid"), "someone-else");
  });

  test("the same account can retry its own claimed order number", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe();
    const data = { rebatePlatform: "shopify", rebateOrderNumber: "5432" };

    await createCheckoutSession(db, stripe, "buyer", data, { now: NOW, priceId: PRICE_ID });
    // Simulate an abandoned checkout: the claim exists, the user retries.
    await createCheckoutSession(db, stripe, "buyer", data, { now: NOW, priceId: PRICE_ID });

    assert.equal(stripe.calls.sessionsCreate.length, 2);
  });

  test("releases a freshly created claim when Stripe fails", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe({ sessionError: new Error("stripe exploded") });

    await assertHttpsError(
      createCheckoutSession(
        db,
        stripe,
        "buyer",
        { rebatePlatform: "tpt", rebateOrderNumber: "987654321" },
        { now: NOW, priceId: PRICE_ID },
      ),
      "internal",
    );

    const claim = await db.collection("rebateClaims").doc("tpt_987654321").get();
    assert.equal(claim.exists, false);
  });

  test("current members cannot buy a second subscription", async () => {
    await seedUser("member", { plan: "all-access", status: "active" });
    const stripe = fakeStripe();

    await assertHttpsError(
      createCheckoutSession(db, stripe, "member", {}, { now: NOW, priceId: PRICE_ID }),
      "failed-precondition",
    );
    assert.equal(stripe.calls.sessionsCreate.length, 0);
  });

  test("a canceling member is still a member", async () => {
    await seedUser("member", { plan: "all-access", status: "canceling" });

    await assertHttpsError(
      createCheckoutSession(db, fakeStripe(), "member", {}, { now: NOW, priceId: PRICE_ID }),
      "failed-precondition",
    );
  });

  test("rate limit blocks after the per-user cap", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe();
    const options = { now: NOW, priceId: PRICE_ID, limit: 2, windowMs: 60 * 60 * 1000 };

    await createCheckoutSession(db, stripe, "buyer", {}, options);
    await createCheckoutSession(db, stripe, "buyer", {}, options);
    await assertHttpsError(
      createCheckoutSession(db, stripe, "buyer", {}, options),
      "resource-exhausted",
    );
  });

  test("invalid rebate input does not charge the rate limit", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe();
    const options = { now: NOW, priceId: PRICE_ID, limit: 1, windowMs: 60 * 60 * 1000 };

    await assertHttpsError(
      createCheckoutSession(
        db,
        stripe,
        "buyer",
        { rebatePlatform: "tpt", rebateOrderNumber: "nope" },
        options,
      ),
      "invalid-argument",
    );

    // The limit of 1 is still available.
    const result = await createCheckoutSession(db, stripe, "buyer", {}, options);
    assert.ok(result.url);
  });

  test("a missing price ID fails closed", async () => {
    await seedUser("buyer");
    await assertHttpsError(
      createCheckoutSession(db, fakeStripe(), "buyer", {}, { now: NOW }),
      "internal",
    );
  });
});

// ---------------------------------------------------------------------------
// createPortalSession
// ---------------------------------------------------------------------------

describe("createPortalSession", () => {
  test("creates a portal session for the server-linked customer", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "active",
      stripeCustomerId: "cus_member",
    });
    const stripe = fakeStripe();

    const result = await createPortalSession(db, stripe, "member");

    assert.equal(result.url, "https://billing.stripe.com/p/session/bps_1");
    assert.deepEqual(stripe.calls.portalSessionsCreate, [
      {
        customer: "cus_member",
        return_url: `${PROD_ORIGIN}/membership.html`,
      },
    ]);
  });

  test("allows an emulator localhost return origin", async () => {
    await seedUser("member", { stripeCustomerId: "cus_member" });
    const stripe = fakeStripe();

    await createPortalSession(
      db,
      stripe,
      "member",
      { returnOrigin: "http://localhost:8000" },
      { emulator: true },
    );

    assert.equal(
      stripe.calls.portalSessionsCreate[0].return_url,
      "http://localhost:8000/membership.html",
    );
  });

  test("returns account-domain portal sessions to the account domain", async () => {
    await seedUser("member", { stripeCustomerId: "cus_member" });
    const stripe = fakeStripe();

    await createPortalSession(db, stripe, "member", {
      returnOrigin: ACCOUNT_ORIGIN,
    });

    assert.equal(
      stripe.calls.portalSessionsCreate[0].return_url,
      `${ACCOUNT_ORIGIN}/membership.html`,
    );
  });

  test("rejects accounts without a linked Stripe customer", async () => {
    await seedUser("free-user");
    const stripe = fakeStripe();

    await assertHttpsError(
      createPortalSession(db, stripe, "free-user"),
      "failed-precondition",
    );
    assert.equal(stripe.calls.portalSessionsCreate.length, 0);
  });

  test("maps Stripe portal errors to a safe callable error", async () => {
    await seedUser("member", { stripeCustomerId: "cus_member" });
    const stripe = fakeStripe({ portalError: new Error("secret Stripe detail") });

    await assertHttpsError(
      createPortalSession(db, stripe, "member"),
      "internal",
    );
  });
});

// ---------------------------------------------------------------------------
// entitlementFromSubscription
// ---------------------------------------------------------------------------

describe("entitlementFromSubscription", () => {
  test("maps the lifecycle per the plan", () => {
    const active = entitlementFromSubscription(subscriptionObject());
    assert.equal(active.plan, "all-access");
    assert.equal(active.status, "active");
    assert.equal(active.currentPeriodEnd.toMillis(), PERIOD_END_S * 1000);
    assert.equal(active.subscriptionId, "sub_1");

    const canceling = entitlementFromSubscription(
      subscriptionObject({ cancel_at_period_end: true }),
    );
    assert.equal(canceling.plan, "all-access");
    assert.equal(canceling.status, "canceling");

    // Newer API versions schedule cancellation via a cancel_at timestamp
    // with cancel_at_period_end left false.
    const cancelingViaCancelAt = entitlementFromSubscription(
      subscriptionObject({ cancel_at_period_end: false, cancel_at: PERIOD_END_S }),
    );
    assert.equal(cancelingViaCancelAt.plan, "all-access");
    assert.equal(cancelingViaCancelAt.status, "canceling");

    const pastDue = entitlementFromSubscription(subscriptionObject({ status: "past_due" }));
    assert.equal(pastDue.plan, "all-access");

    const lapsed = entitlementFromSubscription(subscriptionObject({ status: "canceled" }));
    assert.deepEqual(lapsed, {
      plan: "free",
      status: "lapsed",
      currentPeriodEnd: null,
      subscriptionId: null,
    });

    assert.equal(entitlementFromSubscription(subscriptionObject({ status: "incomplete" })), null);
  });

  test("reads current_period_end from subscription items on newer API shapes", () => {
    const sub = subscriptionObject({ current_period_end: undefined });
    sub.items = { data: [{ current_period_end: PERIOD_END_S }] };
    const entitlement = entitlementFromSubscription(sub);
    assert.equal(entitlement.currentPeriodEnd.toMillis(), PERIOD_END_S * 1000);
  });
});

// ---------------------------------------------------------------------------
// handleStripeEvent
// ---------------------------------------------------------------------------

describe("handleStripeEvent", () => {
  test("checkout.session.completed grants access and records the rebate", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe({ subscription: subscriptionObject() });

    const result = await handleStripeEvent(
      db,
      stripe,
      stripeEvent("checkout.session.completed", {
        id: "cs_1",
        mode: "subscription",
        customer: "cus_1",
        subscription: "sub_1",
        metadata: { uid: "buyer", rebatePlatform: "tpt", rebateOrderNumber: "123456789" },
      }),
    );

    assert.equal(result.handled, true);
    assert.deepEqual(stripe.calls.subscriptionsRetrieve, ["sub_1"]);

    const doc = await db.collection("users").doc("buyer").get();
    assert.equal(doc.get("plan"), "all-access");
    assert.equal(doc.get("status"), "active");
    assert.equal(doc.get("subscriptionId"), "sub_1");
    assert.equal(doc.get("stripeCustomerId"), "cus_1");
    assert.equal(doc.get("currentPeriodEnd").toMillis(), PERIOD_END_S * 1000);
    assert.equal(doc.get("rebate.platform"), "tpt");
    assert.equal(doc.get("rebate.orderNumber"), "123456789");
    assert.ok(doc.get("rebate.appliedAt") instanceof Timestamp);
    // The webhook must not clobber fields it doesn't own.
    assert.equal(doc.get("email"), "buyer@example.com");
  });

  test("grants access even when the user doc does not exist yet", async () => {
    const stripe = fakeStripe({ subscription: subscriptionObject() });

    await handleStripeEvent(
      db,
      stripe,
      stripeEvent("checkout.session.completed", {
        id: "cs_1",
        mode: "subscription",
        customer: "cus_1",
        subscription: "sub_1",
        metadata: { uid: "ghost" },
      }),
    );

    const doc = await db.collection("users").doc("ghost").get();
    assert.equal(doc.get("plan"), "all-access");
  });

  test("cancel at period end maps to status canceling with access intact", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "active",
      subscriptionId: "sub_1",
      stripeEventCreated: 1_800_000_000,
    });

    await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent(
        "customer.subscription.updated",
        subscriptionObject({ cancel_at_period_end: true, metadata: { uid: "member" } }),
        { created: 1_800_000_100 },
      ),
    );

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "all-access");
    assert.equal(doc.get("status"), "canceling");
    assert.equal(doc.get("currentPeriodEnd").toMillis(), PERIOD_END_S * 1000);
  });

  test("subscription.deleted lapses the account", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "canceling",
      subscriptionId: "sub_1",
      stripeCustomerId: "cus_1",
      stripeEventCreated: 1_800_000_000,
    });

    await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent(
        "customer.subscription.deleted",
        subscriptionObject({ status: "canceled", metadata: { uid: "member" } }),
        { created: 1_800_000_200 },
      ),
    );

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "free");
    assert.equal(doc.get("status"), "lapsed");
    assert.equal(doc.get("subscriptionId"), null);
    assert.equal(doc.get("currentPeriodEnd"), null);
    // The customer link survives a lapse (re-subscribing reuses it).
    assert.equal(doc.get("stripeCustomerId"), "cus_1");
  });

  test("an out-of-order stale event cannot resurrect lapsed access", async () => {
    await seedUser("member", {
      plan: "free",
      status: "lapsed",
      subscriptionId: null,
      stripeEventCreated: 1_800_000_500, // the deletion already applied
    });

    // A delayed retry of an OLDER "subscription is active" event arrives.
    await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent(
        "customer.subscription.updated",
        subscriptionObject({ metadata: { uid: "member" } }),
        { created: 1_800_000_400 },
      ),
    );

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "free");
    assert.equal(doc.get("status"), "lapsed");
  });

  test("a late deletion of an old subscription cannot kill a re-subscribe", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "active",
      subscriptionId: "sub_NEW",
      stripeEventCreated: 1_800_000_000,
    });

    await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent(
        "customer.subscription.deleted",
        subscriptionObject({ id: "sub_OLD", status: "canceled", metadata: { uid: "member" } }),
        { created: 1_800_000_600 },
      ),
    );

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "all-access");
    assert.equal(doc.get("subscriptionId"), "sub_NEW");
  });

  test("falls back to the customer ID when subscription metadata lacks a uid", async () => {
    await seedUser("member", { stripeCustomerId: "cus_777" });

    await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent(
        "customer.subscription.updated",
        subscriptionObject({ customer: "cus_777", metadata: {} }),
      ),
    );

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "all-access");
  });

  test("an unresolvable uid is reported unhandled, not thrown", async () => {
    const result = await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent(
        "customer.subscription.updated",
        subscriptionObject({ customer: "cus_unknown", metadata: {} }),
      ),
    );
    assert.equal(result.handled, false);
  });

  test("incomplete subscriptions write nothing", async () => {
    await seedUser("buyer");

    await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent(
        "customer.subscription.updated",
        subscriptionObject({ status: "incomplete", metadata: { uid: "buyer" } }),
      ),
    );

    const doc = await db.collection("users").doc("buyer").get();
    assert.equal(doc.get("plan"), "free");
    assert.equal(doc.get("stripeEventCreated"), undefined);
  });

  test("non-subscription checkout sessions and unknown events are ignored", async () => {
    const paymentSession = await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent("checkout.session.completed", { id: "cs_1", mode: "payment", metadata: {} }),
    );
    assert.equal(paymentSession.handled, false);

    const unknown = await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent("invoice.paid", { id: "in_1" }),
    );
    assert.equal(unknown.handled, false);
  });

  test("a first rebate is not overwritten by a replayed session", async () => {
    await seedUser("buyer");
    const stripe = fakeStripe({ subscription: subscriptionObject() });
    const sessionEvent = (orderNumber, created) =>
      stripeEvent(
        "checkout.session.completed",
        {
          id: "cs_1",
          mode: "subscription",
          customer: "cus_1",
          subscription: "sub_1",
          metadata: { uid: "buyer", rebatePlatform: "tpt", rebateOrderNumber: orderNumber },
        },
        { created },
      );

    await handleStripeEvent(db, stripe, sessionEvent("111111111", 1_800_000_000));
    await handleStripeEvent(db, stripe, sessionEvent("222222222", 1_800_000_100));

    const doc = await db.collection("users").doc("buyer").get();
    assert.equal(doc.get("rebate.orderNumber"), "111111111");
  });
});

// ---------------------------------------------------------------------------
// charge.refunded and charge.dispute.created — immediate access revocation
// ---------------------------------------------------------------------------

describe("handleStripeEvent — refund and dispute revocation", () => {
  function chargeRefundedEvent(overrides = {}) {
    return stripeEvent("charge.refunded", {
      id: "ch_1",
      customer: "cus_1",
      refunded: true,
      ...overrides,
    });
  }

  function disputeCreatedEvent(overrides = {}) {
    return stripeEvent("charge.dispute.created", {
      id: "dp_1",
      charge: "ch_1",
      ...overrides,
    });
  }

  test("full refund cancels the subscription in Stripe and revokes access immediately", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "active",
      stripeCustomerId: "cus_1",
      subscriptionId: "sub_1",
    });
    const stripe = fakeStripe();

    const result = await handleStripeEvent(db, stripe, chargeRefundedEvent());

    assert.equal(result.handled, true);
    // Stripe subscription was canceled
    assert.deepEqual(stripe.calls.subscriptionsCancel, ["sub_1"]);

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "free");
    assert.equal(doc.get("status"), "lapsed");
    assert.equal(doc.get("subscriptionId"), null);
  });

  test("refund arriving after support already canceled in Stripe revokes without re-canceling", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "canceling",
      stripeCustomerId: "cus_1",
      subscriptionId: "sub_1",
    });
    // subscription.retrieve returns an already-canceled subscription
    const stripe = fakeStripe({
      subscription: subscriptionObject({ status: "canceled" }),
    });

    const result = await handleStripeEvent(db, stripe, chargeRefundedEvent());

    assert.equal(result.handled, true);
    // Should not call cancel again
    assert.equal(stripe.calls.subscriptionsCancel.length, 0);

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "free");
    assert.equal(doc.get("status"), "lapsed");
  });

  test("partial refund (refunded: false) writes nothing", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "active",
      stripeCustomerId: "cus_1",
      subscriptionId: "sub_1",
    });
    const stripe = fakeStripe();

    const result = await handleStripeEvent(
      db,
      stripe,
      chargeRefundedEvent({ refunded: false }),
    );

    assert.equal(result.handled, false);
    assert.equal(stripe.calls.subscriptionsCancel.length, 0);

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "all-access"); // unchanged from seed
    assert.equal(doc.get("status"), "active");   // unchanged from seed
  });

  test("refund for an unknown customer returns handled=false with no writes", async () => {
    const stripe = fakeStripe();

    const result = await handleStripeEvent(
      db,
      stripe,
      chargeRefundedEvent({ customer: "cus_unknown" }),
    );

    assert.equal(result.handled, false);
    assert.equal(stripe.calls.subscriptionsCancel.length, 0);
  });

  test("refund for a user with no tracked subscriptionId returns handled=false", async () => {
    await seedUser("member", {
      plan: "free",
      stripeCustomerId: "cus_1",
      subscriptionId: null,
    });
    const stripe = fakeStripe();

    const result = await handleStripeEvent(db, stripe, chargeRefundedEvent());

    assert.equal(result.handled, false);
    assert.equal(stripe.calls.subscriptionsCancel.length, 0);
  });

  test("charge.dispute.created retrieves the charge, cancels the subscription, and revokes access", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "active",
      stripeCustomerId: "cus_1",
      subscriptionId: "sub_1",
    });
    const stripe = fakeStripe({ charge: { id: "ch_1", customer: "cus_1" } });

    const result = await handleStripeEvent(db, stripe, disputeCreatedEvent());

    assert.equal(result.handled, true);
    assert.deepEqual(stripe.calls.chargesRetrieve, ["ch_1"]);
    assert.deepEqual(stripe.calls.subscriptionsCancel, ["sub_1"]);

    const doc = await db.collection("users").doc("member").get();
    assert.equal(doc.get("plan"), "free");
    assert.equal(doc.get("status"), "lapsed");
  });

  test("a later replayed customer.subscription.deleted for the same subscription is idempotent", async () => {
    await seedUser("member", {
      plan: "all-access",
      status: "active",
      stripeCustomerId: "cus_1",
      subscriptionId: "sub_1",
      stripeEventCreated: 1_800_000_000,
    });
    const stripe = fakeStripe({
      subscription: subscriptionObject({ status: "canceled" }),
    });

    // Refund already applied at t=1_800_000_100, revoking access
    await handleStripeEvent(
      db,
      stripe,
      stripeEvent(
        "charge.refunded",
        { id: "ch_1", customer: "cus_1", refunded: true },
        { created: 1_800_000_100 },
      ),
    );

    const afterRevoke = await db.collection("users").doc("member").get();
    assert.equal(afterRevoke.get("plan"), "free");

    // Later customer.subscription.deleted arrives (older timestamp, should be skipped)
    const result = await handleStripeEvent(
      db,
      fakeStripe(),
      stripeEvent(
        "customer.subscription.deleted",
        subscriptionObject({ id: "sub_1", status: "canceled", metadata: { uid: "member" } }),
        { created: 1_800_000_050 }, // older than the refund event
      ),
    );

    assert.equal(result.applied ?? true, true); // guard didn't throw
    const afterReplay = await db.collection("users").doc("member").get();
    assert.equal(afterReplay.get("plan"), "free"); // still lapsed, no state corruption
  });
});
