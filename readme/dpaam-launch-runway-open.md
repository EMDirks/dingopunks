# DPAAM Public Launch Runway — Open Items

Filtered from `readme/dpaam-launch-runway.md`. Only unchecked work remains here; the source file is unchanged.

---

## Shopify + platform changes

- [X] **Implement notes on phone**
- [X] **Add account button to header**
- [X] **remove debug panel**
- [X] **update 'what's a game code' modal**
- [X] **add all-access link to global menu**
- [X] **new blog post**
- [X] **link "account" on the help page (How accounts work)**
- [X] **do all 7 on-site marketing items:**
- [X] **update banner on splash**
- [X] **update undermurk promo image to say "All-Access"**

---

## Gate 1 — Release candidate and automated checks

### Release control

- [X] **P0** Choose the release commit and record it here: Version 4.0.0 — `cfa4c3b23e4e9f490cb38e4359d1b9fde8a9a837` (tag `v4.0.0`)
- [X] **P0** Working tree is clean; every intended launch change is committed.
- [X] **P0** Confirm the generated game catalog is current
- [X] **P0** The custom production domain is indexable as intended; the `pages.dev` preview remains `noindex`. (Only `membership.html` is indexable; all other pages carry `noindex, nofollow`.)

  ```sh
  node scripts/export-game-ids.mjs
  git diff --exit-code -- firebase-functions/game-ids.json
  ```

- [X] **P0** Confirm all catalog entries used by the membership library have a valid resource path, thumbnail, metadata, and server-exported game ID. (2026-10-01: all 150 entries pass; client `isFree` matches server `FREE_GAME_IDS`.)
- [X] **P0** Freeze unrelated content and refactors until launch verification is complete.
- [x] **P0** Record the currently deployed Cloudflare Pages version and Firebase Functions revisions so rollback is possible.

Rollback target (recorded 2026-10-01, before the 4.0.0 deploy):

Version: 3.4.193
Cloudflare: `51acfd05-8c71-4714-ad54-53c57794fe02` (https://51acfd05.dingopunks.pages.dev)
Git: `989403a19376eb4d42c2b298d89534b63a340ab0`
Functions (project `dpaam-8864d`, us-central1, v2, nodejs22; Firebase deploy hashes from `firebase functions:list --json`):

- `cancelShareCode`, `createShareCode`, `resolveGameCode`: `6a8d48a2f28ded2b61bf5b53ab3ed8ce4f63a963`
- `createCheckoutSession`, `createPortalSession`: `5d6c4b91867dbb4e323ca2f5978547aec0ec7d9d`
- `ensureUserProfile`: `f873cc90e9e3ddce2c24e7bc8c447f3b4173c950`
- `stripeWebhook`: `9736faef73e3b00aceaed86bc9337c13cf5910cb`

### Post-launch backlog (P1)

- [X] **P1** Make the code input pasteable.
- [X]**P1 Set up a proper help center** One hub, 3 locations.
- [X] **P1** **Set up Stripe Tax.** Enable Stripe Tax on the live account, add tax registrations for jurisdictions where you collect, set tax behavior on the All-Access product/price, and confirm live Checkout, invoices, and the Customer Portal show the expected tax (or exemption) before scaling marketing.
- [X] **P1** **All-Access success modal after Stripe Checkout.** When a user returns to the dashboard with `?checkout=success`, show a welcome modal instead of a toast; handle webhook lag with a pending flag and a fallback toast if plan access has not updated within ~20s. Cancel return keeps the existing toast. Implementation plan: `readme/dpaam-upgrade-success-modal.md`. *(2026-10-06: implemented; debug panel has an "Upgrade success" button to preview the modal. Still needs a live Stripe test-mode run and the webhook-lag check from the plan's verification list.)*
- [ ] **P1** Upgrade `firebase-admin` to ≥14.4.0 to clear transitive `uuid` npm audit findings; run `npm --prefix firebase-functions test`, then redeploy functions.
- [ ] **P1** Move legacy 5-digit purchase-code resolution server-side so valid codes are no longer derivable from `googleAnalyticsID` strings in `js/analytics.js` / the browser bundle; define and test behavior when Firebase is blocked or unavailable (today’s client-only path).
- [X] **P1** **Google Analytics on the account site.** Play pages already send page views to `G-C3DG9YEYJ3`. Add the same tag to `membership.html` (and `enter-the-undermurk.html` if that surface should be measured). Keep the existing rule: no student account data, passwords, or payment details in analytics.
- [ ] **P1** **Better blog post explaining accounts.** Publish a clearer Shopify blog post on how Dingo Punks accounts work (Starter vs All-Access, sign-up, library, sharing, upgrade). Link to the Help Center and `account.dingopunks.com`. Revise or replace the launch accounts post; add screenshots (see also the accounts-blog images item under Post-launch runway → After 72 hours).
- [X] **P1** **Email segments for Starter and All-Access.** Split teacher email into two segments: Starter (`plan: "free"`) and All-Access (`plan: "all-access"`, including `canceling` until the paid period ends). Move people when they upgrade, lapse, or get a refund so upgrade mail goes only to Starter and member mail only to All-Access. *(2026-10-05: MailerLite custom field `plan` syncs through `onUserPlanChanged`; profile load reconciles missed updates, and the Starter / All-Access segments are defined in MailerLite.)*
- [ ] **P1** **Wrong-code modal — teacher troubleshooting dropdown.** Add a collapsible section to the “That code didn’t work.” modal with a quick guide for teachers to resolve the issue (e.g. confirm the code character-by-character, legacy PDF code vs membership share code, code expired after 14 days, create or refresh a share code from the membership library, copy/link/QR again). Keep student-facing body copy unchanged; the dropdown is optional detail for adults at the device.
- [ ] **P1** Clean up game-code rate limiting. The local 5-attempt lockout and the server `resource-exhausted` response both use the same countdown overlay; make the student-facing behavior intentional and consistent. (2026-09-25: the server lockout now lasts at most 60 seconds, the same as the local one, so the long-countdown concern is mostly gone. What remains is making the two feel intentional.)
- [ ] **P1** Add a small automated browser smoke suite for public signup/sign-in, free sharing, and student launch.
- [ ] **P1** Run backend tests automatically on every push to main. (2026-09-23: added `.github/workflows/backend-tests.yml` — triggers on push/PR to main when `firebase-functions/`, `firestore.rules`, `firebase.json`, or the workflow file changes; Node 22, `npm ci`, Firebase CLI, emulator jar cache, `npm --prefix firebase-functions test`.)
- [ ] **P1** **Custom Firebase email action handler (post-launch).** Launch ships with Firebase’s default interstitial (“Your email has been verified…”) plus our `continueUrl` back to the account page; the original tab already auto-detects verification. After launch, add a dedicated `auth-action.html` on `account.dingopunks.com` that handles **all** action modes in one place (`verifyEmail`, `resetPassword`, `recoverEmail`, `verifyAndChangeEmail` via `applyActionCode` / password-reset confirm), shows Dingo Punks copy (e.g. verified → brief message + redirect to account), and handles expired/used links. Test every mode in the Auth emulator, then flip Firebase Console → Authentication → Templates **custom action URL** (reversible). Do not point the action URL at membership/dashboard JS until all modes are covered — password-reset links must keep working.
- [ ] **P1** **Customize the Firebase password-management page URL and colors (if possible).** The reset-password page still uses Firebase’s default host and styling. After launch, check whether Authentication templates (or Identity Platform) can serve that page on a Dingo Punks URL and apply brand colors. If the hosted page cannot take colors, cover branding on the custom action handler above instead.
- [ ] **P1** **Verification gate before upgrade.** Launch lets unverified email/password users start Checkout; only share-code creation waits on a verified address. After launch, block Upgrade and checkout until the email is verified (reuse the existing verify prompt), and enforce the same check on `createCheckoutSession` so a direct call cannot skip it. Google sign-in stays treated as already verified.
- [ ] **P1** **Plan upgrade UI — SaaS-style comparison table.** Rework the membership upgrade surfaces (account Upgrade panel, auth sign-up offer blocks, All-Access paywall/upgrade modal, and related inline CTAs) into a conventional SaaS pricing-table pattern: aligned plan columns or a feature matrix, scannable tier names and prices, checkmarks (or equivalent) per feature row, and one clear primary CTA per tier. Keep existing copy, rebate input, and Checkout/Portal wiring; this is layout and visual hierarchy only.
- [ ] **P1** **Inactive account cleanup (post-launch).** Decide inactivity threshold **N days (TBD)** and what “inactive” means (e.g. no sign-in, no share-code activity). Define exclusions (active or canceling All-Access, open disputes, support holds). Implement scheduled deletion or archival of eligible Firebase Auth users and related Firestore data; document retention in Privacy Policy and support macros before enabling automation.
- [ ] **P1** **Paid share codes outlive subscription lapse.** `resolveGameCode` honors the code’s `expiresAt` but does not re-check the owner’s current plan, so a member who refunds or lapses can keep up to 20 paid-room codes working for ≤14 days (bounded leak; Undermurk bonus already locks on the next launch via live plan). Optional fix: in `resolve-code.js`, reject non–free-tier games when the owner’s profile is not `all-access`.
- [ ] **P1** **Concurrent Checkout tabs.** The “already All-Access” guard runs before session creation, so two tabs finishing Checkout at once could create two subscriptions on one Stripe customer. Low probability; support can refund the duplicate. Consider a server-side idempotency or “open session” guard if it shows up in support.
- [ ] **P1** **Static paid assets are publicly fetchable.** Game scripts under `/resource/...` return 200 without auth (same as the legacy model; paywall is share codes and teacher workflow, not file secrecy). Revisit only if product positioning changes; document for support if teachers ask.
- [ ] **P1** Prevent bumper flicker on index page load. The opening bumper is injected in JS after first paint, so the page flashes before the teal overlay covers it.
- [ ] **P1** Add images to modals as necessary to help illustrate their concepts.
- [ ] **P1** **Add modal tabs.** Build a reusable tab selector for the shared play-side modal (`createModal` in `js/global.js`) so one modal can serve several audiences, each tab with its own body copy and its own action buttons. First use case: "What's a game code?" with a Students tab (default) and a Teachers tab that adds a Help Center button. Attempted 2026-10-06 and reverted; the modal markup differs across pages (`preview.html` has no `.modal__actions` wrapper), so normalize that first.
- [ ] **P1** **Dynamic escape room thumbnails.** Generate membership library card images from room metadata (theme, subject, topic, grade) instead of shipping and maintaining per-room `thumbnail-*.png` files under each resource. Replace today’s `scripts/add-game-thumbnails.mjs` + static asset workflow with a build-time or on-demand generator, with a branded fallback for rooms not yet migrated so new escape rooms do not need a manual thumbnail pass.
- [ ] **P1** **Accessibility audit (out of scope for MVP).** One pass after launch: complete every teacher action using only a keyboard on desktop; check visible focus, meaningful labels, heading order, alt text, status announcements, color contrast, and 200% zoom; use VoiceOver on one Apple device for signup, navigation, sharing, and code entry.
- [ ] **P1** Test slow network, brief offline/online recovery, blocked popup, disabled third-party cookies, and a stale open tab.
- [ ] **P1** Add `assets/enter-the-undermurk/logo/logo.png` to the debrief.
- [ ] **P1** Double all Enter the Undermurk content
- [ ] **P1** Add math to the Enter the Undermurk minigame
- [ ] **P1** Safari iPhone: more accurate skeleton loader on dashboard and share modals
- [ ] **P1** Safari iPhone: general modal attractiveness needs a full pass
- [ ] **P1** All: Modal scroll cutoffs — have visible top/bottom border for a cleaner look
- [ ] **P1** **Final Bell breakout:** Change the language from "summer school" to "detention".
- [ ] **P1** Add a sticky customer support control to the bottom right of the membership.

---

## Gate 8 — Browser, device, accessibility, and resilience matrix

Run the smoke journey below on:

- [CD] **P0** Chrome on macOS desktop (CD)
- [SD] **P0** Safari on macOS desktop (SD)
- [CC] **P0** Chrome on a Chromebook (CC)
- [SI] **P0** Safari on iPad (SI)
- [SP] **P0** Safari on iPhone (SP)

Smoke journey for each device:

- [CD/SD/CC/SI/SP] Sign in, open account details, filter the library, favorite a room, share a permitted room, copy/open the link, type the code, and launch the game.
- [CD/SD/CC/SI/SP] Confirm layouts at portrait and landscape sizes with no clipped controls, accidental horizontal scrolling, hidden errors, or keyboard-covered inputs.
- [CD/SD/CC/SI/SP] Confirm dialogs open, trap focus, announce titles/errors, close by their visible control and Escape where available, and restore focus.
- [CD/SD/CC/SI/SP] Confirm no password, full payment detail, secret, or another user's data appears in URLs, page source, console, analytics, or error messages.
- [CD/SD/CC/SI/SP] Play escape room
- [CD/SD/CC/SI/SP] Play enter the undermurk
- [CD/SD/CC/SI/SP] Test all menu options

---

## Launch day

### Before deploy

- [X] All P0 gates above are checked.
- [X] Release SHA, test evidence, known P1 issues, rollback target, and go/no-go owner are recorded.
- [X] No active Stripe test/live mode confusion; production secrets and live webhook are confirmed one final time.
- [X] Create clean production test accounts and choose one representative free and paid room.

### Deploy order

- [X] Deploy and verify Firestore rules and Firebase Functions first.
- [X] Prove public signup works without beta approval directly against the deployed backend.
- [x] Publish the matching static frontend to Cloudflare Pages.
- [x] Confirm the custom domain serves the intended deployment and cache-busted assets.
- [X] Run the production smoke: public signup, verification or Google auth, Free selection, live purchase, paid share, incognito student launch, portal cancellation, and refund-policy check.
- [X] Verify logs and Stripe webhook deliveries before announcing.
- [X] Make the public marketing CTA live only after the production smoke passes. (Scheduled for Saturday, October 3, 2026.)

### Immediate monitoring: first two hours

- [X] Watch signup and login failures.
- [X] Watch Checkout starts versus completed sessions and payment failures.
- [X] Watch webhook 4xx/5xx responses, retries, and entitlement mismatches.
- [X] Watch function errors, latency, invocation spikes, rate-limit spikes, Firestore reads/writes, and budget alerts.
- [X] Test one free and one paid student link from outside the admin network.
- [X] Triage support messages and record every launch defect in one shared list.
- [X] Roll back for widespread auth, payment, entitlement, privacy, or student-launch failures; do not hot-fix blindly in production.

---

## Post-launch runway

### After 24 hours

- [X] Reconcile Stripe's successful subscriptions with Firestore `all-access` users.
- [X] Review failed/abandoned Checkouts, webhook retries, refund/cancellation requests, and duplicate customer records.
- [X] Review signup verification completion, Google versus email failures, and support volume.
- [X] Review share creation, resolution failures, rate-limit frequency, expired-code behavior, and top student launch errors.
- [X] Confirm spend and usage are within expected bounds.
- [X] Fix every P0 regression before additional marketing.

### After 72 hours

- [X] Repeat cross-account entitlement, cancellation, paid share, and student-launch smoke tests.
- [X] Review Cloudflare/Firebase/Stripe logs for errors that did not produce support tickets.

### After 7 days

- [ ] Reconcile subscriptions and entitlements again.
- [ ] Review conversion, rebate use/rejection, cancellations, refunds, disputes, and support themes.
- [ ] Confirm TTL cleanup and Firestore growth are healthy.
- [ ] Decide whether Firebase App Check or stricter authenticated-callable limits are justified by observed abuse or cost.
- [ ] Run a short launch retrospective and update this checklist with anything that escaped.

---

## Final sign-off

- Release SHA: `cfa4c3b23e4e9f490cb38e4359d1b9fde8a9a837` (tag `v4.0.0`)
- Production Pages deployment: `b8d08af2-4a40-479c-8370-33ddb62bbccd` (4.0.0 from `cfa4c3b`, published 2026-10-01; https://b8d08af2.dingopunks.pages.dev)
- Known accepted P1 issues: Post-launch backlog (P1) list in Gate 1
- Go/no-go owner: Harper Dirks
- Launch decision and time: Publish 4.0.0 on Thursday, October 1, 2026 at `12:00PM`; point the public website to the account page on Saturday, October 3, 2026.
