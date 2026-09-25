# DPAAM Public Launch Runway

Target: public paid launch of Dingo Punks All-Access as soon as every P0 gate below passes.

Source of truth: `readme/dpaam-backend-plan.md`. Where older documents disagree, launch uses:

- $35.88/year, displayed as $2.99/month billed annually
- Optional $8.99 first-year rebate
- 8 free rooms
- 5-character membership codes with at least one letter
- 14-day code lifetime
- 20 active codes per account

## How to use this checklist

- **P0** means launch-blocking. Do not launch with an unchecked P0 item.
- **P1** means important but safe to complete immediately after launch.
- Test the exact release commit. If code changes after a test pass, rerun the affected gate.
- Attach evidence to failures and critical passes: date, tester, device/browser, account, screenshot or recording, and issue link.
- Keep test accounts clearly labeled and remove their production share codes and rebate claims when testing is complete.
- Final launch rule: all P0 items checked, no open critical/high defects, and one named person makes the go/no-go decision.

## Shopify + platform changes
- [ ] **Add account button to header**
- [ ] **Wire in new ToS and PP**
- [ ] **Add a help doc/FAQ**
- [ ] **config the alphabetic keyboard**
- [ ] **remove debug panel**
- [ ] **update 'what's a game code' modal**
- [ ] **add all-acceess link to global menu**

## Current P0 blockers

- [X] **Remove the beta signup gate for public registration.** Remove the beta-code field and frontend authorization call, disable the backend pre-create approval requirement, deploy both pieces, and prove a brand-new email and Google user can register without a code.
- [X] **Add touch-device membership-code entry.** A student must be able to type all allowed letters and digits on iPad, Chromebook touch mode, and phone; direct links must continue to work.
- [X] **Replace the placeholder legal links.** Both sign-in and signup currently link Terms and Privacy Policy to `#`. Use published, mobile-readable pages.
- [X] **Lock the refund policy and entitlement behavior.** Policy: full refunds and chargebacks revoke All-Access immediately. The webhook handles `charge.refunded` (full only) and `charge.dispute.created` by canceling the Stripe subscription immediately and writing `plan: free, status: lapsed`. Verify by issuing a test-mode refund and confirming the account loses access within one webhook delivery.
- [X] **Set up subscription renewal notice email.** Subscribers receive email at least 30 days before an annual All-Access subscription renews, with correct branding, renewal date, and charge amount (Stripe customer emails, custom email, or equivalent).
- [X] **Confirm the public route and acquisition path.** A customer can get from the public Dingo Punks site to `https://play.dingopunks.com/membership.html`, understand free versus paid access, create an account, and purchase without a hidden URL or beta instructions.

---

## Gate 1 — Release candidate and automated checks

### Release control

- [ ] **P0** Choose the release commit and record its SHA here:
- [ ] **P0** Working tree is clean; every intended launch change is committed.
- [ ] **P0** Confirm the generated game catalog is current:
- [ ] **P0** The custom production domain is indexable as intended; the `pages.dev` preview remains `noindex`.

  ```sh
  node scripts/export-game-ids.mjs
  git diff --exit-code -- firebase-functions/game-ids.json
  ```

- [ ] **P0** Confirm all catalog entries used by the membership library have a valid resource path, thumbnail, metadata, and server-exported game ID.
- [ ] **P0** Freeze unrelated content and refactors until launch verification is complete.
- [ ] **P0** Record the currently deployed Cloudflare Pages version and Firebase Functions revisions so rollback is possible.
Version:
Cloudflare:
Git:
Functions:

### Backend test suite

- [X] **P0** From the repo root, run:

  ```sh
  npm --prefix firebase-functions test
  ```

- [X] **P0** All Firestore rules tests pass: own-profile reads, no profile enumeration, no client entitlement writes, bounded preferences, owner-only code queries, backend collections denied, unknown paths denied.
- [X] **P0** All share-code tests pass: free/paid entitlement, catalog validation, idempotency, expiry, 20-code cap, collisions, cancellation, and blocked/profane codes.
- [X] **P0** All public-resolution tests pass: format handling, generic not-found behavior, expiration, trusted client-IP extraction, IPv6 bucketing, and 30-per-10-minute limiting.
- [X] **P0** All beta/public-signup tests are updated for the public-launch behavior and pass after the beta gate is removed.
- [X] **P0** All Stripe tests pass: rebate validation and uniqueness, checkout rate limiting, duplicate-subscription prevention, portal creation, webhook ordering, cancellation, lapse, and safe error mapping.
- [X] **P0** Run `npm audit` in `firebase-functions`; triage every high or critical production dependency finding. (2026-09-22: `--omit=dev`, no high/critical; `npm audit fix` for `qs`; 8 moderate transitive `uuid` in Firebase SDK — deferred, see post-launch backlog.)
- [X] **P0** No secrets, live Stripe IDs, real customer data, or private access codes appear in tracked files or the browser bundle. (2026-09-22: scanned all tracked files for Stripe keys/IDs (`sk_live`, `pk_live`, `whsec_`, `price_`/`cus_`/`sub_` etc.), private keys, tokens, `.env`/credential files, high-entropy literals, and email addresses — clean. Only emails are `example.com` test fixtures, the public support address, and the owner's email in an internal doc. Firebase browser API key in `js/firebase-init.js` is public by design (referrer restriction is Gate 2). `firebase-functions/.env.dpaam-8864d` is gitignored and untracked. Fixed this pass: 176 accidentally tracked `node_modules/` playwright files untracked and `node_modules/` added to `.gitignore`, closing the risk of the publish skill's `git add -A` committing the Wrangler account cache. Accepted exception: legacy 5-digit purchase codes are derivable from `googleAnalyticsID` strings in `js/analytics.js` in the shipped bundle — required by design for offline legacy play (Gate 6); membership share codes are server-side only. Old beta code `BETA01` in git history is already documented as rotated/burned.)

### Frontend confidence

There is currently no repository-owned browser E2E suite, so the manual gates below are required. A GitHub Actions workflow (`.github/workflows/backend-tests.yml`) now runs the backend suite automatically on every push to main that touches `firebase-functions/`, `firestore.rules`, or `firebase.json`.

- [X] **P0** Load the release candidate with DevTools open and resolve every uncaught exception, failed first-party request, mixed-content warning, and missing production asset.
- [X] **P0** Verify the browser loads pinned Firebase modules successfully on normal home, school, and privacy-filtered networks. (2026-09-22: home and school pass. uBlock, Brave shields, and Safari Prevent Cross-Site Tracking do not block `gstatic.com/firebasejs`, so they are not a useful stand-in. Real privacy-filtered networks deferred to the post-launch runway.)

### Post-launch backlog (P1)

- [ ] **P1** Upgrade `firebase-admin` to ≥14.4.0 to clear transitive `uuid` npm audit findings; run `npm --prefix firebase-functions test`, then redeploy functions.
- [ ] **P1** Move legacy 5-digit purchase-code resolution server-side so valid codes are no longer derivable from `googleAnalyticsID` strings in `js/analytics.js` / the browser bundle; define and test behavior when Firebase is blocked or unavailable (today’s client-only path).
- [X] **P1** Show a modal when a student enters a wrong game code. (Shipped 3.4.167+: “That code didn’t work.” on play and answer key; answer-key copy omits “ask your teacher for a new one.”)
- [ ] **P1** **Wrong-code modal — teacher troubleshooting dropdown.** Add a collapsible section to the “That code didn’t work.” modal with a quick guide for teachers to resolve the issue (e.g. confirm the code character-by-character, legacy PDF code vs membership share code, code expired after 14 days, create or refresh a share code from the membership library, copy/link/QR again). Keep student-facing body copy unchanged; the dropdown is optional detail for adults at the device.
- [ ] **P1** Clean up game-code rate limiting. The local 5-attempt lockout and the server `resource-exhausted` response both use the same countdown overlay; make the student-facing behavior intentional and consistent.
- [ ] **P1** Add a small automated browser smoke suite for public signup/sign-in, free sharing, and student launch.
- [ ] **P1** Run backend tests automatically on every push to main. (2026-09-23: added `.github/workflows/backend-tests.yml` — triggers on push/PR to main when `firebase-functions/`, `firestore.rules`, `firebase.json`, or the workflow file changes; Node 22, `npm ci`, Firebase CLI, emulator jar cache, `npm --prefix firebase-functions test`.)
- [ ] **P1** **Custom Firebase email action handler (post-launch).** Launch ships with Firebase’s default interstitial (“Your email has been verified…”) plus our `continueUrl` back to the account page; the original tab already auto-detects verification. After launch, add a dedicated `auth-action.html` on `account.dingopunks.com` that handles **all** action modes in one place (`verifyEmail`, `resetPassword`, `recoverEmail`, `verifyAndChangeEmail` via `applyActionCode` / password-reset confirm), shows Dingo Punks copy (e.g. verified → brief message + redirect to account), and handles expired/used links. Test every mode in the Auth emulator, then flip Firebase Console → Authentication → Templates **custom action URL** (reversible). Do not point the action URL at membership/dashboard JS until all modes are covered — password-reset links must keep working.
- [ ] **P1** **Customize the Firebase password-management page URL and colors (if possible).** The reset-password page still uses Firebase’s default host and styling. After launch, check whether Authentication templates (or Identity Platform) can serve that page on a Dingo Punks URL and apply brand colors. If the hosted page cannot take colors, cover branding on the custom action handler above instead.
- [ ] **P1** **Verification gate before upgrade.** Launch lets unverified email/password users start Checkout; only share-code creation waits on a verified address. After launch, block Upgrade and checkout until the email is verified (reuse the existing verify prompt), and enforce the same check on `createCheckoutSession` so a direct call cannot skip it. Google sign-in stays treated as already verified.
- [ ] **P1** **Inactive account cleanup (post-launch).** Decide inactivity threshold **N days (TBD)** and what “inactive” means (e.g. no sign-in, no share-code activity). Define exclusions (active or canceling All-Access, open disputes, support holds). Implement scheduled deletion or archival of eligible Firebase Auth users and related Firestore data; document retention in Privacy Policy and support macros before enabling automation.
- [ ] **P1** Prevent bumper flicker on index page load. The opening bumper is injected in JS after first paint, so the page flashes before the teal overlay covers it.

---

## Gate 2 — Production configuration

### Firebase

- [X] **P0** Project is `dpaam-8864d`, Blaze billing is active, and Identity Platform is enabled.
- [X] **P0** Email/password and Google providers are enabled and configured for the correct support email.
- [X] **P0** `play.dingopunks.com` and `account.dingopunks.com` (and any other membership origin) are Firebase **Authorized domains**.
- [X] **P0** Google Cloud **Browser API key** HTTP referrers include `account.dingopunks.com/*` (403 on `identitytoolkit.googleapis.com` means this is missing). See `readme/dpaam-account-domain.md`.
- [X] **P0** Every customer email uses the correct sender name, Dingo Punks branding, a working destination link, and clear non-spammy copy.
- [X] **P0** Firestore rules deployed from the release commit match `firestore.rules`.
- [X] **P0** Functions run on the intended Node runtime and every required function is deployed.
- [X] **P0** Production values exist for `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, and `STRIPE_PRICE_ID`; test-mode values are not deployed to live. (2026-09-23: deployed functions bind `STRIPE_SECRET_KEY@4` (`sk_live_`), `STRIPE_WEBHOOK_SECRET@3`, and live price `price_1UIr7tP9iKw5zvCcQHViAvwk` ($35.88/year, livemode). Stale `BETA_ACCESS_CODE` env removed from deploy. Webhook-secret/endpoint match is proven by first successful signed delivery — see webhook delivery item below.)
- [X] **P0** The public-signup deployment no longer requires `BETA_ACCESS_CODE` or beta approval documents. (2026-09-23: functions source has zero beta references; `BETA_ACCESS_CODE` removed from `.env.dpaam-8864d` and confirmed absent from all deployed function environments after redeploy.)
- [X] **P0** TTL policies are enabled for `codes.expiresAt` and `rateLimits.expiresAt`. (2026-09-23: Firestore Admin API on `dpaam-8864d` `(default)` — both collection-group fields have `ttlConfig.state: ACTIVE`. Cleanup only; reads still enforce `expiresAt`.)
- [X] **P0** Remove or confirm the future of `betaSignupApprovals.expiresAt` after the public gate is retired. (2026-09-23: removed. Beta signup is retired, the collection was already empty, and the TTL policy is gone from `dpaam-8864d` `(default)`. `codes.expiresAt` and `rateLimits.expiresAt` remain `ACTIVE`.)
- [ ] **P0** Set up automatic Firestore backups for `dpaam-8864d` `(default)`. Enable a daily backup schedule (or equivalent managed backups), confirm the first backup succeeds, and record the backup location and how long copies are kept. (2026-09-24: schedules created in `nam5` — daily backups kept 14 days and weekly Sunday backups kept 98 days; PITR and database delete protection enabled. First scheduled backup is pending; after it reaches `READY`, check this item. See `readme/dpaam-firestore-backups.md`.)
- [X] **P0** Cloud Billing budget alert emails a monitored inbox for `dpaam-8864d` (quota usage alerts intentionally omitted — Blaze spend is the tripwire; `resolveGameCode` is rate-limited). (2026-09-23: quota alerts waived; budget alert configured.)
- [X] **P0** Logs expose no raw payment data, passwords, rebate values beyond what support requires, or spoofable IP data presented as trusted. (2026-09-23: audited every `logger.*` call in `firebase-functions/` (index, stripe-billing, resolve-code, share-codes, rate-limit, blocked-code-terms) and every `console.*` call in the shipped frontend. Payment data: none possible — cards are Stripe-hosted; logs carry only Stripe object IDs (event/session/subscription/customer/charge), uid, and `error.message`; webhook signature failures log the message only, never the body or header. Passwords: auth is Firebase client SDK only; no function receives a password and no console call prints form input — frontend logs error objects only. Rebate: the only logged rebate datum is the claim ID (`platform_orderNumber`) in the release-failure path, which support needs to manually free a stuck claim; amounts are a fixed coupon and order numbers otherwise live in Firestore, not logs. IPs: no raw IP is logged anywhere — the one XFF anomaly log records chain length only; rate-limit doc IDs are SHA-256 hashes; `clientIpFromRequest` trusts only the Google-appended rightmost XFF entry (production-verified 2026-09-19) and never client-controlled entries or Express `req.ip`.)

### Stripe live mode

- [X] **P0** Live product and recurring price are exactly $35.88 USD per year. (2026-09-23: `price_1UIr7tP9iKw5zvCcQHViAvwk` verified via Stripe API — livemode, active, USD 3588 recurring yearly.)
- [X] **P0** Live coupon `REBATE899` is $8.99 off once, not forever.
- [X] **P0** Checkout clearly states annual billing, auto-renewal, first-year discounted total when applicable, and later renewal price.
- [X] **P0** Subscription renewal reminder email is configured so subscribers get at least 30 days' notice before annual renewal (verify sender, copy, and a test delivery).
- [X] **P0** Customer Portal allows payment-method updates and cancellation at period end and does not allow plan switching.
- [X] **P0** Live webhook points to the deployed `stripeWebhook` URL and subscribes to `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `charge.refunded`, and `charge.dispute.created`. (2026-09-23: live-mode endpoint enabled at `https://stripewebhook-j6oopmp5zq-uc.a.run.app` with exactly those five events.)
- [X] **P0** Stripe reports a successful webhook delivery for each lifecycle event used in testing. (2026-09-23: live purchase, then cancel at period end. Stripe `pending_webhooks: 0` and Cloud Run HTTP 200 for `checkout.session.completed` at 15:47:37Z and both `customer.subscription.updated` deliveries at 15:48:31Z (`cancel_at` set to period end, status still `active`) and 15:48:32Z (cancellation comment). `customer.subscription.deleted`, `charge.refunded`, and `charge.dispute.created` did not fire in this test.)
- [X] **P0** Failed payments, disputes, refunds, and support-driven cancellation have written operating procedures even when they are handled manually at launch.
- [X] **P0** Public refund and renewal language matches actual Stripe and entitlement behavior.

### Cloudflare and public web

- [X] **P0** Custom domain serves the release over valid HTTPS with no redirect loop.
- [X] **P0** `play.dingopunks.com`, `/membership.html`, `/answer-key.html`, and representative resource assets return successfully.
- [X] **P0** Terms, Privacy Policy, contact/support, refund policy, and billing descriptors are discoverable before purchase.
- [X] **P0** Analytics and consent behavior are acceptable for teacher and student pages; no student account or payment data is sent to analytics.

---

## Gate 3 — Account and authentication journeys

Use at least these 6 clean states: unverified email user, free email user, free Google user, active paid user, canceling user, lapsed user.

### Public signup and sign-in

- [X] **P0** New email/password signup works without a beta code.
- [X] **P0** Invalid email, weak password, duplicate email, wrong password, disabled account, offline state, and excessive attempts show useful non-technical errors.
- [X] **P0** Verification email arrives, its link works, Continue rechecks the account, and resend works without creating duplicate accounts.
- [X] **P0** Google signup works without a beta code and is treated as verified.
- [X] **P0** Google sign-in handles popup blocked, popup canceled, account chooser, and an email already registered with another provider.
- [X] **P0** Forgot-password email arrives, reset succeeds, old password fails, and new password signs in.
- [X] **P0** Logout clears the dashboard and browser Back does not reveal private account data.
- [X] **P0** Refreshing or opening a second tab restores the correct signed-in state without flashing another user's data.
- [ ] **P0** A network failure during profile provisioning gives a retry path and does not create a broken partial account.

### New-account plan selection

- [X] **P0** A new verified account sees the free-versus-paid offer before the dashboard.
- [X] **P0** Selecting Free enters the dashboard with exactly the free entitlement.
- [X] **P0** Selecting All-Access starts Checkout for the signed-in account.
- [X] **P0** Refresh, browser Back, private browsing, and a second device do not trap the user in the offer step or silently grant paid access.
- [X] **P0** The account email, plan, price, renewal/cancellation date, password reset, logout, Upgrade, and Manage Subscription controls are correct for each account state.

---

## Gate 4 — Free dashboard journey

- [X] **P0** Exactly the 8 intended Midnight Mall rooms are shareable on a free account.
- [X] **P0** Every other room visibly shows the paid lock/upgrade path and cannot be shared through UI or direct callable invocation.
- [X] **P0** Season, grade, subject, and topic filters work alone and in combinations; clearing filters restores the catalog.
- [X] **P0** Room details show the correct title, description, tags, standards, preview, favorite state, and sharing state.
- [X] **P0** Add, remove, and drag-reorder Favorites; refresh, sign out/in, and use a second device to confirm persistence and ordering.
- [X] **P0** A rejected preference write produces a friendly toast and a later edit self-heals the saved array. (2026-09-25: accepted for launch. Offline favorites stay queued in the open tab and sync when the connection returns. A permanent rules rejection is not a path a teacher can hit; the toast is already there if one ever does.)
- [X] **P0** Share a free room; the code, direct link, QR/copy actions if present, expiry, answer-key action, and Google Classroom action are correct.
- [X] **P0** Re-share the same room and confirm the same active code and expiry return.
- [X] **P0** Cancel the code, confirm student access stops, then share again and confirm a new code is issued.
- [X] **P0** Upgrade CTAs from the library, account panel, and paywall all open the same correct paid offer.

---

## Gate 5 — Paid dashboard and code lifecycle

- [X] **P0** An active member can share representative free and paid rooms across grades, subjects, seasons, and resource folders.
- [ ] **P0** A free user cannot gain paid sharing by editing browser state, local storage, requests, or Firestore documents.
- [ ] **P0** Active-code rows show the correct room, code, creation order, and live countdown after refresh and on a second device.
- [ ] **P0** Re-sharing is idempotent, while cancel-then-share creates a fresh code.
- [ ] **P0** At 20 active codes, re-sharing an existing room still works and a new room opens the dedicated limit modal.
- [ ] **P0** “View Active Codes” from the limit modal goes to the Active tab; canceling one code permits one replacement.
- [ ] **P0** An expired code disappears from the dashboard and does not resolve even if TTL cleanup has not deleted its document.
- [ ] **P0** A canceling subscriber retains full paid sharing until `currentPeriodEnd`.
- [ ] **P0** A lapsed subscriber sees free access only; existing active codes behave according to the chosen policy in the backend plan.
- [ ] **P0** One account cannot read, list, cancel, or infer another account's profile, preferences, codes, rebate claims, or rate-limit records.
- [ ] **P0** All function failures end loading states and show a useful toast; no button remains permanently disabled.

---

## Gate 6 — Student play and legacy regression

### Membership code paths

- [ ] **P0** Open a valid direct link in a signed-out incognito window: `https://play.dingopunks.com/?CODE`; the correct room auto-launches.
- [ ] **P0** Type the same code with a physical keyboard and with touch input; lowercase input normalizes correctly.
- [ ] **P0** Touch entry supports every allowed letter and digit, excludes ambiguous characters as designed, supports correction, and submits only five characters.
- [ ] **P0** Invalid, missing, expired, canceled, malformed, and stale-catalog codes all reveal only the same generic failure.
- [ ] **P0** A membership code opens the answer key on `answer-key.html`; a legacy code still works there too.
- [ ] **P0** Repeated failed lookups trigger the server lockout with a correct retry countdown; access returns after the window.
- [ ] **P0** One school-network IP reaching the limit does not create a permanent lockout, and IPv6 address rotation within one `/64` does not bypass it.
- [ ] **P0** If Firebase or the Firebase CDN is unavailable, the student receives recoverable feedback and can retry without burning local attempts.

### Legacy and game regression

- [ ] **P0** A valid 5-digit legacy purchase code still launches the correct room.
- [ ] **P0** Invalid legacy codes and the existing local lockout behave exactly as before.
- [ ] **P0** Legacy play still works when Firebase is blocked or unavailable.
- [ ] **P0** Complete at least one free membership room and one paid membership room through splash, setup, every challenge type, completion, and debrief.
- [ ] **P0** Test representative resources containing multiple choice, crossword, decoder, drag/touch interaction, audio, images, and answer-key content.
- [ ] **P0** Browser refresh, Back, opening a copied link, and returning from background do not load the wrong room or expose an answer key.

---

## Gate 7 — Billing lifecycle

### Test-mode coverage

- [ ] **P0** Standard purchase: free account → Checkout → successful payment → success return → webhook → active All-Access UI.
- [ ] **P0** Canceled Checkout returns safely, grants no access, and allows a retry.
- [ ] **P0** Valid TPT 9-digit rebate applies exactly $8.99 once.
- [ ] **P0** Valid Shopify 4- or 5-digit order number, with and without a leading `#`, applies exactly $8.99 once.
- [ ] **P0** Invalid, partial, or mismatched rebate input cannot start a discounted Checkout.
- [ ] **P0** The same rebate order cannot be used by another account; the original account can safely retry after a Stripe creation error.
- [ ] **P0** A current or canceling member cannot buy a second subscription.
- [ ] **P0** Checkout rate limiting produces a friendly retry message.
- [ ] **P0** A successful return handles webhook delay without falsely claiming access is ready; the UI updates when the profile changes.
- [ ] **P0** Portal opens only for the server-linked Stripe customer and returns to the correct membership page.
- [ ] **P0** Payment-method update is reflected in Stripe and does not alter entitlement.
- [ ] **P0** Cancel at period end changes status to canceling, shows the cancellation date, and preserves access.
- [ ] **P0** Test-clock renewal preserves active access and advances the renewal date.
- [ ] **P0** Test-clock period end after cancellation changes the account to free/lapsed.
- [ ] **P0** Out-of-order and replayed webhooks do not resurrect a lapsed account or let an old subscription deletion kill a newer subscription.
- [ ] **P0** Stripe webhook signature failure returns 400; transient handler failure returns 500 for retry.

### One controlled live-mode transaction

- [ ] **P0** Use a dedicated launch-test account and a real card to buy one live annual subscription.
- [ ] **P0** Confirm the expected charge, receipt, Stripe customer/subscription metadata, successful webhook, and active entitlement.
- [ ] **P0** Generate and play a paid-room code from the live entitlement.
- [ ] **P0** Open the live Customer Portal and cancel at period end; confirm the account becomes canceling and access remains.
- [ ] **P0** Issue the planned live refund and verify the result against the locked refund policy: the webhook receives `charge.refunded`, cancels the subscription, and the account immediately shows `plan: free, status: lapsed` with no remaining access.
- [ ] **P0** Clean up the live test customer only after screenshots, event IDs, and expected entitlement state are recorded.

---

## Gate 8 — Browser, device, accessibility, and resilience matrix

Run the smoke journey below on:

- [ ] **P0** Chrome on macOS or Windows desktop
- [ ] **P0** Safari on macOS desktop
- [ ] **P0** Edge on Windows desktop
- [ ] **P0** Chrome on a Chromebook, including touch mode if available
- [ ] **P0** Safari on iPad
- [ ] **P0** Safari on iPhone
- [ ] **P0** Chrome on Android phone

Smoke journey for each device:

- [ ] Sign in, open account details, filter the library, favorite a room, share a permitted room, copy/open the link, type the code, and launch the game.
- [ ] Confirm layouts at portrait and landscape sizes with no clipped controls, accidental horizontal scrolling, hidden errors, or keyboard-covered inputs.
- [ ] Confirm dialogs open, trap focus, announce titles/errors, close by their visible control and Escape where available, and restore focus.
- [ ] Complete every teacher action using only a keyboard on desktop.
- [ ] Check visible focus, meaningful labels, heading order, alt text, status announcements, color contrast, and 200% zoom.
- [ ] Use VoiceOver on one Apple device for signup, navigation, sharing, and code entry.
- [ ] Test slow network, brief offline/online recovery, blocked popup, disabled third-party cookies, and a stale open tab.
- [ ] Confirm no password, full payment detail, secret, or another user's data appears in URLs, page source, console, analytics, or error messages.

---

## Gate 9 — Content, support, and operations

### Customer-facing accuracy

- [ ] **P0** Every visible price says $35.88/year or $2.99/month billed annually; no live page uses the older $49 figure.
- [ ] **P0** Every visible limit says 14 days and 20 active codes; no live page uses the older 24-hour or 12-code values.
- [ ] **P0** Rebate copy says $8.99 off the first year and explains accepted order-number formats without promising verification that does not exist.
- [ ] **P0** Renewal, cancellation, lapse, and refund copy matches actual behavior.
- [ ] **P0** Free-room count and room names match the server constants and UI.
- [ ] **P0** Customer receipts and card statement descriptor are recognizable as Dingo Punks.

### Support readiness

- [ ] **P0** A monitored support address is visible from auth, billing, and error states.
- [ ] **P0** Prepare short support procedures for: verification email missing, Google popup failure, password reset, wrong plan, webhook delay, duplicate account, rebate rejected/claimed, share-code limit, student code expired, refund, cancellation, accidental duplicate purchase, and email change (support edits the address in Firebase Console → Authentication → find user → Edit, then asks the user to sign in with the new address).
- [ ] **P0** Support can locate a customer by email in Firebase and Stripe without requesting a password or full card number.
- [ ] **P0** Define who can manually correct entitlement, issue a refund, cancel a subscription, release a rebate claim, and inspect logs.
- [ ] **P0** Define severity and response owners for purchase failure, widespread login failure, wrong entitlement, student launch failure, and data exposure.

### Monitoring and rollback

- [ ] **P0** Confirm access to Firebase logs, Firestore usage, Auth usage, Cloudflare analytics/deployments, Stripe events, payments, disputes, and webhook delivery logs.
- [ ] **P0** Save exact rollback steps for Cloudflare Pages, Functions, and Firestore rules.
- [ ] **P0** Rollback does not restore the beta gate or deploy frontend code that calls missing backend functions.
- [ ] **P0** Choose a launch window when the owner can monitor for at least two hours and respond for the next 24 hours.
- [ ] **P0** Prepare a short customer-facing outage message and a way to disable/redirect the paid CTA without breaking existing members.

---

## Launch day

### Before deploy

- [ ] All P0 gates above are checked.
- [ ] Release SHA, test evidence, known P1 issues, rollback target, and go/no-go owner are recorded.
- [ ] No active Stripe test/live mode confusion; production secrets and live webhook are confirmed one final time.
- [ ] Create clean production test accounts and choose one representative free and paid room.

### Deploy order

- [ ] Deploy and verify Firestore rules and Firebase Functions first.
- [ ] Prove public signup works without beta approval directly against the deployed backend.
- [ ] Publish the matching static frontend to Cloudflare Pages.
- [ ] Confirm the custom domain serves the intended deployment and cache-busted assets.
- [ ] Run the production smoke: public signup, verification or Google auth, Free selection, live purchase, paid share, incognito student launch, portal cancellation, and refund-policy check.
- [ ] Verify logs and Stripe webhook deliveries before announcing.
- [ ] Make the public marketing CTA live only after the production smoke passes.

### Immediate monitoring: first two hours

- [ ] Watch signup and login failures.
- [ ] Watch Checkout starts versus completed sessions and payment failures.
- [ ] Watch webhook 4xx/5xx responses, retries, and entitlement mismatches.
- [ ] Watch function errors, latency, invocation spikes, rate-limit spikes, Firestore reads/writes, and budget alerts.
- [ ] Test one free and one paid student link from outside the admin network.
- [ ] Triage support messages and record every launch defect in one shared list.
- [ ] Roll back for widespread auth, payment, entitlement, privacy, or student-launch failures; do not hot-fix blindly in production.

---

## Post-launch runway

### After 24 hours

- [ ] Reconcile Stripe's successful subscriptions with Firestore `all-access` users.
- [ ] Review failed/abandoned Checkouts, webhook retries, refund/cancellation requests, and duplicate customer records.
- [ ] Review signup verification completion, Google versus email failures, and support volume.
- [ ] Review share creation, resolution failures, rate-limit frequency, expired-code behavior, and top student launch errors.
- [ ] Confirm spend and usage are within expected bounds.
- [ ] Fix every P0 regression before additional marketing.

### After 72 hours

- [ ] Repeat cross-account entitlement, cancellation, paid share, and student-launch smoke tests.
- [ ] Review Cloudflare/Firebase/Stripe logs for errors that did not produce support tickets.
- [ ] Check school-network, iPad, Chromebook, Safari, popup-blocker, and email-deliverability reports.
- [ ] Test pinned Firebase module load on a real privacy-filtered network (for example NextDNS or similar DNS/filter lists). Browser blockers (uBlock, Brave shields, Safari Prevent Cross-Site Tracking) do not block `gstatic` and do not count.
- [ ] Prioritize the remaining P1 list and automate the highest-frequency regression journey.

### After 7 days

- [ ] Reconcile subscriptions and entitlements again.
- [ ] Review conversion, rebate use/rejection, cancellations, refunds, disputes, and support themes.
- [ ] Confirm TTL cleanup and Firestore growth are healthy.
- [ ] Decide whether Firebase App Check or stricter authenticated-callable limits are justified by observed abuse or cost.
- [ ] Run a short launch retrospective and update this checklist with anything that escaped.

---

## Final sign-off

- Release SHA: `________________`
- Production Pages deployment: `________________`
- Firebase Functions revision/deploy time: `________________`
- Stripe live transaction/event: `________________`
- Test evidence folder or issue: `________________`
- Known accepted P1 issues: `________________`
- Go/no-go owner: `________________`
- Launch decision and time: `________________`

