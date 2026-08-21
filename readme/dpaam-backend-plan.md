# DPAAM Backend — Implementation Plan

Static front end stays on Cloudflare Pages (no build step, vanilla ES modules — unchanged).
Firebase supplies auth, database, and server logic. Stripe supplies billing.

**Stack:** Firebase Auth (email/password + Google) · Firestore · Cloud Functions (2nd gen, Node) · Stripe Checkout + Customer Portal + one webhook.

**Note:** Cloud Functions require the Firebase **Blaze** (pay-as-you-go) plan. At this scale, expect costs near zero.

---

## 1. Locked-in decisions

| Decision | Value |
|---|---|
| Static hosting | Cloudflare Pages (unchanged) |
| Login UX | Auth gate inside `membership.html` — full-screen login/signup view, swaps to dashboard on sign-in |
| Sign-in methods | Email/password + Google |
| Password change | Firebase default: `sendPasswordResetEmail` (replaces the in-modal change-password form) |
| Billing UI | Stripe-hosted Checkout for purchase; Stripe Customer Portal for cancel / card management |
| Price | $47.88/yr (displayed as $3.99/mo, billed annually), auto-renews |
| Cancel behavior | `cancel_at_period_end` via Portal — access continues until the year is up |
| Rebate | $8.99 off, **first year only** (assumed — flagged in Open Items). Format-based honor system: TPT = `^\d{9}$`, Shopify = `^\d{4,5}$` |
| Free tier | 8 games: `the-midnight-mall-mixed-reading-skills-{2,3,4,5}` + `the-midnight-mall-mixed-math-skills-{2,3,4,5}` |
| Free sharing | Free users can generate share codes, but only for the 8 free rooms (same 7-day / 20-code mechanics) |
| Game codes | 5 chars from `ABCDEFGHIJKLMNPQRSTUVWXYZ123456789`, **must contain ≥1 letter** (keeps the membership code space disjoint from legacy all-numeric codes), globally unique among active codes, 7-day TTL, max 20 active per user |
| Legacy codes | Existing 5-digit numeric purchase codes stay client-side validated in `splash-new.js`, untouched |

---

## 2. Firestore data model

Three top-level collections. Billing/entitlement data is **server-written only**; user preferences are client-writable.

### `users/{uid}` — server-managed (client read-only)

```
{
  email:            string,
  createdAt:        timestamp,
  plan:             "free" | "all-access",
  stripeCustomerId: string | null,
  subscriptionId:   string | null,
  status:           "active" | "canceling" | "lapsed" | null,   // derived from Stripe
  currentPeriodEnd: timestamp | null,
  rebate:           { platform, orderNumber, appliedAt } | null
}
```

Created by an `onUserCreated` auth trigger (or lazily on first function call). `plan` starts as `"free"`.

### `userPrefs/{uid}` — client read/write (own doc only)

```
{
  favorites: [gameId, ...]     // ordered array — order IS the user's sort
}
```

Favorites and reorder persist by writing this one array (debounced). No function needed.

### `codes/{CODE}` — server-written; doc ID **is** the game code

```
{
  uid:       string,
  gameId:    string,
  createdAt: timestamp,
  expiresAt: timestamp
}
```

- Doc-ID-as-code + transactional create = global uniqueness for free.
- Set a **Firestore TTL policy** on `expiresAt` — expired codes auto-delete (TTL deletion can lag ~24h, so every read path also checks `expiresAt` explicitly).
- Dashboard reads its own codes with a client query (`where uid == auth.uid`), allowed by rules.

### Security rules sketch

```
users/{uid}:      read if auth.uid == uid;  write: never (admin SDK only)
userPrefs/{uid}:  read/write if auth.uid == uid
                  && favorites is list && favorites.size() <= 500
codes/{code}:     read (get/list) if auth.uid == resource.data.uid;  write: never
```

Students never touch Firestore directly — code resolution goes through a function.

---

## 3. Cloud Functions

Six functions. All callables verify `context.auth` except `resolveGameCode` and the webhook.

| Function | Type | Purpose |
|---|---|---|
| `createShareCode({gameId})` | callable | Entitlement check (free plan → gameId must be in FREE_GAME_IDS; paid → any valid gameId). Count active codes `< 20` else error → front end shows the existing limit modal. Generate code (retry on collision), create `codes/{CODE}` in a transaction (fail if doc exists). Returns `{code, expiresAt}`. |
| `cancelShareCode({code})` | callable | Verify `codes/{code}.uid == auth.uid`, delete. |
| `resolveGameCode({code})` | callable, **unauthenticated** | Uppercase + validate format. Rate limit by IP (below). Look up `codes/{code}`; if found and unexpired, return `{gameId}`. Else a generic not-found error. |
| `createCheckoutSession({rebatePlatform?, rebateOrderNumber?})` | callable | Validate rebate format server-side; if valid, attach the $8.99 once-off coupon and claim the order number in `rebateClaims/{platform_orderNumber}` (transactional create — blocks the same order number being reused across accounts). Create Stripe Checkout session (`mode: subscription`, existing-or-new customer, `metadata.uid`). Returns session URL. |
| `createPortalSession()` | callable | Returns Stripe Customer Portal URL for `stripeCustomerId`. Powers the "Manage Subscription" button — cancel lives here, zero custom UI. |
| `stripeWebhook` | HTTPS | Verifies Stripe signature. Handles `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted` → writes `plan`, `status`, `currentPeriodEnd` to `users/{uid}`. This is the **only** writer of entitlement state. |

**Game catalog on the server:** functions need valid gameIds + the free set. Add a tiny script (`scripts/export-game-ids.mjs`) that reads `js/games.js` and emits `functions/game-ids.json`; run it as part of functions deploy. The 8 free IDs live as a constant in the functions code.

**Rate limiting** (simple Firestore fixed-window counters — one small doc per key, no infra):

- `resolveGameCode`: per-IP, e.g. 30 lookups / 10 min. On limit, return a `resource-exhausted` error with `retryAfter` — the play page already has a lockout overlay UI to show it. (Brute force is already mathematically pointless at 45M combinations; this is the abuse backstop.)
- `createShareCode`: per-user, e.g. 40 creations/day (the 20-active cap is the real limit).
- `createCheckoutSession`: per-user, e.g. 10/hour (protects rebate-claim probing).

Counters live in a `rateLimits/{key}` collection with their own TTL field.

---

## 4. Stripe setup (dashboard, one-time)

1. Product **All-Access** → Price **$47.88/year**, recurring.
2. Coupon **REBATE899**: $8.99 amount off, duration `once` (first invoice only). *(If the rebate should recur every year, change duration to `forever` — nothing else changes.)*
3. Customer Portal config: enable cancel (at period end) + payment method update; disable plan switching.
4. Webhook endpoint → `stripeWebhook` URL, events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`.
5. Store secret key + webhook signing secret as Functions secrets (`firebase functions:secrets:set`). Never in the repo.

Lifecycle mapping:

- Purchase → webhook sets `plan: "all-access"`, `status: "active"`, `currentPeriodEnd`.
- Cancel in Portal → subscription gets `cancel_at_period_end: true` → webhook sets `status: "canceling"` (access unchanged until `currentPeriodEnd`).
- Period ends after cancel / payment fails terminally → `customer.subscription.deleted` → `plan: "free"`, `status: "lapsed"`. User keeps their account, favorites, and free-tier access. Existing active codes live out their remaining 7 days.

---

## 5. Front-end work

### `membership.html` — auth gate + upgrade

- New full-screen **auth view** (email/password sign-in, sign-up, Google button, "Forgot password?" → reset email). Dashboard stays `hidden` until `onAuthStateChanged` fires with a user.
- New `js/firebase-init.js` (public web config — safe to commit) shared by membership and play pages.
- **Account modal:** real email; replace the change-password form with a "Send password reset email" button; add **Log out**; plan/price/renewal from `users/{uid}`; "Manage Subscription" → `createPortalSession` redirect. For free users, that section becomes the **Upgrade** panel: price, rebate input (platform select + order number, client-side regex mirrored server-side), button → `createCheckoutSession` redirect. On return from Checkout (`?checkout=success`), show a toast and re-read the user doc.

### `js/membership.js` — wire the existing seams

State bootstraps from Firestore after login instead of starting empty:

- `favorites` ← `userPrefs/{uid}`; `activeCodes` ← `codes` query (client-side expiry filter).
- `addFavorite` / `removeFavorite` / `setFavoritesOrder` → write the `favorites` array back (debounced ~1s). Optimistic UI, no spinners.
- `generateCode` → `createShareCode` callable (replaces local `generateCodeString`); needs a small async/loading state on the Share button. Limit error → existing limit modal.
- `cancelCode` → `cancelShareCode` callable.
- Library rendering: free plan → non-free rooms get a lock badge + "Upgrade" CTA instead of Share. (Server enforces regardless.)
- Countdown timers, tabs, drag-reorder, share modal: unchanged.

### Play page (`index.html` / `js/splash-new.js`) — membership codes

- **URL slug:** on load, if `location.search` matches `^\?([A-NP-Z1-9]{5})$` and contains a letter → `resolveGameCode` → look up the gameId's `path` in the catalog → inject the resource script (same flow the legacy path uses) and auto-launch. Invalid/expired → normal code-entry screen + "That code has expired or doesn't exist" message.
- **Typed entry:** in `checkIfAccessInputIsFilled`, branch first: all-numeric → existing legacy check, untouched; contains a letter → server resolution (uppercase input as typed). Rate-limit errors reuse the existing lockout overlay.
- Extract the "load game by resource path" portion of the legacy success handler into a shared function both paths call.
- *(Accepted trade-off: game content is static files, so resolution gates the launch, not the assets — same as today.)*

---

## 6. Build order

Each phase ships independently and is testable on its own.

**Model delegation legend** — which tier of AI to hand each item to:

| Tag | Tier | Use for |
|---|---|---|
| `[LOW]` | Composer 2.5 | Mechanical UI wiring, CSS, config boilerplate, doc updates — well-specified, low blast radius |
| `[MID]` | GPT 5.6 | Multi-file logic, touchy legacy code, third-party API wiring where mistakes are annoying but recoverable |
| `[HIGH]` | Fable | Anything security- or money-bearing: security rules, entitlement enforcement, rate limiting, webhook verification, code uniqueness. Mistakes here are silent and exploitable |
| `[YOU]` | Human | Console/dashboard clicking (Firebase + Stripe setup), account credentials, final verification |

Rule of thumb: anything a hostile user could probe gets `[HIGH]`. Anything that just looks wrong when broken gets `[LOW]`.

### Phase 1 — Firebase + Auth
- [X] `[YOU]` Create Firebase project (Blaze), enable Auth (email/password + Google), Firestore, Functions; add play + membership domains to Auth authorized domains.
- [ ] `[LOW]` Auth gate view markup + CSS in `membership.html` (login / signup / Google / forgot password).
- [ ] `[MID]` `js/firebase-init.js` + auth flow wiring (sign-in/up, Google popup, reset email, `onAuthStateChanged` gate, error states).
- [ ] `[LOW]` Account modal: real email, logout, password-reset button.
- [ ] `[LOW]` `onUserCreated` → `users/{uid}` with `plan: "free"`.

### Phase 2 — Persistence (favorites + shared codes)
- [ ] `[HIGH]` Firestore security rules (all collections) — the wall between users and each other's data.
- [ ] `[LOW]` `userPrefs` wiring (load on login, debounced writes for add/remove/reorder).
- [ ] `[HIGH]` `createShareCode` / `cancelShareCode` functions (entitlement check, 20-cap, uniqueness transaction, per-user rate limit) + game-ids export script.
- [ ] `[LOW]` Swap `generateCode`/`cancelCode` front-end seams to callables (async/loading states).
- [ ] `[YOU]` Firestore TTL policy on `codes.expiresAt` (and on `rateLimits`) — console setting.
- [ ] `[LOW]` Free-tier gating in the library UI (lock badge + upgrade CTA).

### Phase 3 — Play-side resolution
- [ ] `[HIGH]` `resolveGameCode` + per-IP rate limiting (the one public, unauthenticated endpoint).
- [ ] `[MID]` URL-slug auto-launch + typed-entry branch in `splash-new.js`; expired-code messaging. (Legacy code is load-bearing — careful surgery, no rewrite.)
- [ ] `[YOU]` End-to-end: share from dashboard → open `play.dingopunks.com/?CODE` in incognito → game launches.

### Phase 4 — Stripe
- [ ] `[YOU]` Stripe product/price/coupon/portal/webhook setup in the dashboard (test mode first).
- [ ] `[HIGH]` `createCheckoutSession` (rebate validation + `rebateClaims`) and `stripeWebhook` (signature verification, entitlement writes) — money and access control.
- [ ] `[MID]` `createPortalSession` + return-from-Checkout handling.
- [ ] `[LOW]` Upgrade panel UI; paid account view (plan, renewal date, Manage Subscription).
- [ ] `[MID]` Test full lifecycle with Stripe test clocks: purchase → renew → cancel → lapse.

### Phase 5 — Hardening
- [ ] `[HIGH]` Adversarial review: rules, entitlement fields unwritable from clients, rate-limit tuning, probing every callable as a hostile user.
- [ ] `[LOW]` Friendly error toasts for every failure path.
- [ ] `[LOW]` Update `readme/dpaam.md` (currently stale: 24hr/12-code/6-char/$49 → 7-day/20-code/5-char/$47.88).
- [ ] `[MID]` Optional, post-MVP: Firebase App Check, email verification.

**Local dev:** Firebase Emulator Suite (auth + firestore + functions) with `firebase-init.js` auto-connecting on `localhost`; `stripe listen --forward-to` for webhook testing.

---

## 7. Open items / defaults chosen

1. **Rebate duration** — assumed first-year-only ($38.89 year one, $47.88 after). One-line change if wrong.
2. **Rebate order-number reuse** — plan blocks the same order number across accounts (`rebateClaims`). Cheap insurance on the honor system; remove if too strict.
3. **Lapsed subscribers' active codes** — default: codes live out their remaining 7 days. Alternative (kill immediately) is one extra check in `resolveGameCode`.
4. **Email verification** — not required at MVP (Stripe checkout confirms a real person for paid; free tier is low-risk).
