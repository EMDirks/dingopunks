# All-Access success modal on return from Stripe Checkout

**Implemented 2026-10-06.** The debug panel's Modals row has an **Upgrade success** button that opens the modal with a stubbed renewal date, so the layout can be checked without a Checkout run.

When a user upgrades to All-Access and Stripe redirects back to the membership dashboard, show a **success modal** instead of a toast. Cancel return (`?checkout=cancel`) keeps the existing toast only.

No backend changes: `success_url` stays `membership.html?checkout=success` (`firebase-functions/stripe-billing.js`).

---

## Current behavior

Stripe sends the user back to `membership.html?checkout=success` (set in `firebase-functions/stripe-billing.js` line 232). On the client, `consumeCheckoutReturn()` in `js/membership.js` strips the query param and shows a toast:

- Success + plan already `member`: **Welcome to All-Access**
- Success + plan still free (webhook lag): **Checkout complete**
- Cancel: **Checkout canceled**

`loadDashboardState()` re-reads the user profile once when `checkout=success` is present, but if the webhook has not landed yet, the user sees **Checkout complete** while still on the free UI; the dashboard updates later via `applyLiveUserProfile()`.

The modal replaces the **success** toast only. Cancel toast unchanged.

---

## 1. Markup — `membership.html`

Add a new `<dialog>` next to the other compact modals (e.g. after the share-expiry modal, ~line 937), matching existing structure:

- `id="dpaam-upgrade-success-modal"`, classes `dpaam-modal dpaam-modal--compact`, `aria-labelledby` on the title.
- `<form method="dialog" class="dpaam-modal-form">` with standard header (`dpaam-modal-header`, `dpaam-modal-title`, `×` close).
- Body: `dpaam-upgrade-lead` paragraph plus container `id="dpaam-upgrade-success-body"` for JS-rendered renewal line.
- Footer: one `type="submit"` button, `dpaam-btn dpaam-btn-activate` (closes via existing `wireAnimatedModal` submit handler, like share-expiry “Got it”).

**Copy**

| Element | Text |
|--------|------|
| Title | Welcome to All-Access |
| Lead | Every escape room in the library is unlocked, and you can share up to 20 at a time. Enter the Undermurk bonus content is unlocked too. |
| Renewal (JS) | Subscription renews on {date} — reuse `memberSubscriptionBannerHtml(userBillingProfile)`; empty string if period end not available yet. |
| Button | Start exploring |

Optional hero image: defer unless an asset exists (see P1 “Add images to modals” in launch runway).

---

## 2. DOM refs — `js/membership/context.js`

Add to `els` (~line 84):

- `upgradeSuccessModal: document.getElementById("dpaam-upgrade-success-modal")`
- `upgradeSuccessBody: document.getElementById("dpaam-upgrade-success-body")`

---

## 3. Modal plumbing — `js/membership.js`

- Add `els.upgradeSuccessModal` to `DPAAM_MODALS` (~line 1044).
- `wireAnimatedModal(els.upgradeSuccessModal)` in `wireEvents()` next to `wireAnimatedModal(els.shareExpiryModal)` (~line 2714).
- `openUpgradeSuccessModal()`:
  - Set `els.upgradeSuccessBody` from `memberSubscriptionBannerHtml(userBillingProfile)`.
  - `showExclusiveModal(els.upgradeSuccessModal)`.

---

## 4. Webhook race — `js/membership.js`

Replace the success branch in `consumeCheckoutReturn()` with a pending flag:

- Module state: `pendingUpgradeSuccess`, `pendingUpgradeSuccessTimer`.
- On `"success"` in `consumeCheckoutReturn()`:
  - If `planMembershipAccess === "member"` (use plan value, not `state.membershipAccess`, so debug override does not affect this): open modal in existing `setTimeout(..., 0)` after first dashboard render.
  - Else: set `pendingUpgradeSuccess = true`, start fallback timer (~20s, same order of magnitude as `DASHBOARD_LOAD_TIMEOUT_MS`). If it fires with flag still set: clear flag, toast **Payment received. Your plan will update in a moment.**
- In `applyLiveUserProfile()`, inside `if (accessChanged)` after `applyMembershipAccess()`: if `pendingUpgradeSuccess && nextAccess === "member"`, clear flag and timer, call `openUpgradeSuccessModal()`.
- On sign-out (where `userBillingProfile` is reset, ~line 3106): clear flag and timer so a pending modal cannot fire for another account.

Keep `history.replaceState` removal of `?checkout=success` so refresh does not re-show the modal.

---

## 5. Styling — `css/membership.css`

Likely no new rules: `.dpaam-modal--compact` and `.dpaam-upgrade-lead` suffice. If renewal line needs spacing, one scoped rule under `#dpaam-upgrade-success-modal`. Verify iPhone Safari compact modals.

---

## 6. Docs (when implemented)

- Update `readme/dpaam-backend-plan.md` (~line 150): success return shows modal, not toast.
- Check off or note in `readme/dpaam-launch-runway.md` standard-purchase P0 / this P1 item.

---

## 7. Verification

- Debug panel → Modals → **Upgrade success**: modal layout, renewal line, and close paths without a Checkout run.
- Stripe test: free → Upgrade → complete Checkout → modal over member dashboard, renewal date when available, close via button / × / Escape / backdrop; URL has no `?checkout=success` after close or refresh.
- Race: load `?checkout=success` as free, flip `plan` to `all-access` in Firestore/emulator → modal when listener fires; without flip, fallback toast after ~20s.
- Cancel: `?checkout=cancel` → toast only, no modal.
- Already-member hitting `?checkout=success` directly → modal once (same as current toast behavior).
- `npm --prefix firebase-functions test` (no backend change expected).
- Gate 8 device matrix smoke for this modal.
- **Publish** after change (`context.js`, `membership.js`, `membership.html` together; stale cache leaves `els.upgradeSuccessModal` null — guarded, degrades to no modal).

---

## Timing

Touches the payment return path. Reasonable to ship after production smoke and first-day reconciliation, before the public marketing CTA (see `readme/dpaam-launch-runway-open.md` launch day section).
