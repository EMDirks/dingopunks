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
| Game codes | 5 chars from `ABCDEFGHIJKLMNPQRSTUVWXYZ123456789`, **must contain ≥1 letter** (keeps the membership code space disjoint from legacy all-numeric codes), globally unique among active codes, 7-day TTL, max 20 active per user (best-effort under concurrent requests — see `createShareCode`), one active code per user per game (re-sharing returns the existing code) |
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

Created by the authenticated `ensureUserProfile` callable after sign-in. The shared
server helper is idempotent and can also be called by later functions. `plan` starts
as `"free"`.

**`plan` is the entitlement source of truth starting in Phase 2.** The client reads
`users/{uid}` on login and derives `membershipAccess` from `plan` (`"all-access"` →
member UI, `"free"` → gated UI). The localhost debug toggle survives only as an
explicit dev-time override, default off. `status: "canceling"` still counts as fully
entitled (access runs through `currentPeriodEnd`); once Stripe lands, the server
entitlement helper may also sanity-check `currentPeriodEnd > now`. Server functions
never trust the client — `createShareCode` re-reads the user doc itself.

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
- Set a **Firestore TTL policy** on `expiresAt` — but TTL is **cleanup only**, never enforcement. TTL deletion can lag ~24h, so every read path checks `expiresAt` explicitly, and a candidate code can collide with an expired-but-undeleted doc (`createShareCode` handles this: overwrite if expired, else retry a new candidate). Don't block dev/testing on the TTL policy; enable it before Phase 2 ships to production.
- Dashboard reads its own codes with a client query (`where uid == auth.uid`), allowed by rules. Expired codes are filtered client-side and the list is sorted client-side by `createdAt` descending — at ≤20 codes there's no reason for a composite index.

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

Seven functions. All callables verify authentication except `resolveGameCode`; the webhook verifies Stripe's signature.

| Function | Type | Purpose |
|---|---|---|
| `ensureUserProfile()` | callable | Idempotently creates the signed-in user's complete `users/{uid}` document with `plan: "free"` if it does not exist. The client never supplies the UID. |
| `createShareCode({gameId})` | callable | Entitlement check from `users/{uid}` (free plan → gameId must be in FREE_GAME_IDS; paid → any valid gameId; `status: "canceling"` still counts as paid). **Idempotent:** if an active unexpired code already exists for this gameId, return it — one active code per user per game, enforced server-side; cancel-then-share is how users mint a fresh code. Otherwise count active codes `< 20` else `resource-exhausted` → front end shows the limit modal. Generate code, create `codes/{CODE}` — on doc collision, overwrite if the existing doc is expired, else retry a new candidate. Query + checks + create run in one plain transaction; the 20-cap is **best-effort under adversarial parallel requests** (phantom inserts can briefly exceed it — acceptable for an abuse backstop, deliberately not hardened further). Returns `{code, expiresAt}`. |
| `cancelShareCode({code})` | callable | Verify `codes/{code}.uid == auth.uid`, delete. |
| `resolveGameCode({code})` | callable, **unauthenticated** | Uppercase + validate format. Rate limit by IP (below). Look up `codes/{code}`; if found and unexpired, return `{gameId}`. Else a generic not-found error. |
| `createCheckoutSession({rebatePlatform?, rebateOrderNumber?})` | callable | Validate rebate format server-side; if valid, attach the $8.99 once-off coupon and claim the order number in `rebateClaims/{platform_orderNumber}` (transactional create — blocks the same order number being reused across accounts). Create Stripe Checkout session (`mode: subscription`, existing-or-new customer, `metadata.uid`). Returns session URL. |
| `createPortalSession()` | callable | Returns Stripe Customer Portal URL for `stripeCustomerId`. Powers the "Manage Subscription" button — cancel lives here, zero custom UI. |
| `stripeWebhook` | HTTPS | Verifies Stripe signature. Handles `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted` → writes `plan`, `status`, `currentPeriodEnd` to `users/{uid}`. This is the **only** writer of entitlement state. |

**Game catalog on the server:** functions need valid gameIds + the free set. Add a tiny script (`scripts/export-game-ids.mjs`, new and independent of `export-game-standards.mjs`) that reads `js/games.js` and emits `firebase-functions/game-ids.json`. Commit the generated file **and** wire it as a `predeploy` hook in `firebase.json` so a stale catalog can't ship. The 8 free IDs live as a constant in the functions code.

**Rate limiting** (simple Firestore fixed-window counters — one small doc per key, no infra):

- `resolveGameCode`: per-IP, e.g. 30 lookups / 10 min. On limit, return a `resource-exhausted` error with `retryAfter` — the play page already has a lockout overlay UI to show it. (Brute force is already mathematically pointless at 45M combinations; this is the abuse backstop.)
- `createShareCode`: **no rate limit in Phase 2.** It's authenticated and the 20-active cap is the real limit. If still wanted, add it in Phase 5 as a five-line reuse of the Phase 3 infra.
- `createCheckoutSession`: per-user, e.g. 10/hour (protects rebate-claim probing).

Counters live in a `rateLimits/{key}` collection with their own TTL field (infra built in Phase 3 alongside `resolveGameCode`).

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

- `membershipAccess` ← `users/{uid}.plan` (mapping lives in exactly one place; localhost debug toggle is an explicit override on top, default off).
- `favorites` ← `userPrefs/{uid}`; `activeCodes` ← `codes` query (client-side expiry filter, client-side sort by `createdAt` desc).
- `addFavorite` / `removeFavorite` / `setFavoritesOrder` → write the `favorites` array back (debounced ~1s). Optimistic UI, no spinners, no revert on failure. **No custom retry** — the Firestore SDK already queues and retries transient failures; if the write ultimately rejects, show a friendly toast (add a minimal toast utility — Phase 5 wants one anyway). The next favorites change re-saves the whole array, so state self-heals. Optional: flush pending writes on `pagehide` if it's genuinely one line.
- `generateCode` → `createShareCode` callable (replaces local `generateCodeString`); needs a small async/loading state on the Share button. Re-share of an already-shared game returns the same code (server is idempotent); the share modal should show expiry prominently so a near-expiry code isn't a surprise. Limit error → **new dedicated limit modal**: copy "You've reached 20 active share codes. Cancel an existing code before sharing another room.", buttons `View Active Codes` (closes modal, switches dashboard to the Active tab) and `Close`.
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
- [X] `[LOW]` Auth gate view markup + CSS in `membership.html` (login / signup / Google / forgot password).
- [X] `[MID]` `js/firebase-init.js` + auth flow wiring (sign-in/up, Google popup, reset email, `onAuthStateChanged` gate, error states).
- [X] `[LOW]` Account modal: real email, logout, password-reset button.
- [X] `[YOU]` Upgrade Auth to **Identity Platform** (Authentication → Settings).
- [X] `[LOW]` Gen 2 `ensureUserProfile` callable → idempotent `users/{uid}` provisioning with `plan: "free"`.

### Phase 2 — Persistence (favorites + shared codes)

*Workflow: checkpoint-commit existing work first (preserve unrelated standards WIP untouched). Develop and test against the Firebase Emulator Suite (auth + firestore + functions); deploy to production `dpaam-8864d` only once the phase works locally.*

- [X] `[HIGH]` Firestore security rules (all collections) — the wall between users and each other's data.
- [ ] `[MID]` Plan-driven entitlement on the client: read `users/{uid}` on login → derive `membershipAccess` from `plan`; demote the localhost debug toggle to an explicit override.
- [ ] `[LOW]` `userPrefs` wiring (load on login, debounced optimistic writes for add/remove/reorder; toast on persistent failure — includes the minimal toast utility).
- [ ] `[HIGH]` `createShareCode` / `cancelShareCode` functions (server-side entitlement from user doc, idempotent one-code-per-game, 20-cap in a plain transaction, doc-ID uniqueness with expired-doc collision handling) + `scripts/export-game-ids.mjs` → committed `firebase-functions/game-ids.json` + `predeploy` hook.
- [ ] `[LOW]` Swap `generateCode`/`cancelCode` front-end seams to callables (async/loading states).
- [ ] `[LOW]` New 20-code limit modal (`View Active Codes` → Active tab, `Close`).
- [ ] `[LOW]` Free-tier gating in the library UI (lock badge + upgrade CTA).
- [ ] `[YOU]` Firestore TTL policy on `codes.expiresAt` — console setting; cleanup only, required before the phase ships to production (not before).

### Phase 3 — Play-side resolution
- [ ] `[HIGH]` `resolveGameCode` + per-IP rate limiting (the one public, unauthenticated endpoint; this builds the `rateLimits` counter infra).
- [ ] `[MID]` URL-slug auto-launch + typed-entry branch in `splash-new.js`; expired-code messaging. (Legacy code is load-bearing — careful surgery, no rewrite.)
- [ ] `[YOU]` Firestore TTL policy on the `rateLimits` TTL field — console setting, before this phase ships.
- [ ] `[YOU]` End-to-end: share from dashboard → open `play.dingopunks.com/?CODE` in incognito → game launches.

### Phase 4 — Stripe
- [ ] `[YOU]` Stripe product/price/coupon/portal/webhook setup in the dashboard (test mode first).
- [ ] `[HIGH]` `createCheckoutSession` (rebate validation + `rebateClaims`) and `stripeWebhook` (signature verification, entitlement writes) — money and access control.
- [ ] `[MID]` `createPortalSession` + return-from-Checkout handling.
- [ ] `[LOW]` Upgrade panel UI; paid account view (plan, renewal date, Manage Subscription).
- [ ] `[MID]` Test full lifecycle with Stripe test clocks: purchase → renew → cancel → lapse.

### Phase 5 — Hardening
- [ ] `[HIGH]` Adversarial review: rules, entitlement fields unwritable from clients, rate-limit tuning, probing every callable as a hostile user.
- [ ] `[LOW]` Optional: per-user rate limit on `createShareCode` (deferred from Phase 2 — reuse the Phase 3 counter infra if the 20-cap proves insufficient).
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
5. **20-cap under concurrency** — deliberately best-effort: parallel requests can briefly overshoot the cap (phantom inserts aren't blocked by a plain transaction). Accepted; the cap is an abuse backstop, not an invariant, and overshoot is bounded by burst size. Global code uniqueness (doc-ID create) **is** strict.
