# account.dingopunks.com setup

Teacher membership lives at **`https://account.dingopunks.com/`** (same Cloudflare Pages project as `play.dingopunks.com`). Student play stays on **`https://play.dingopunks.com`**. Shopify marketing stays on **`https://dingopunks.com`**.

## 1. Cloudflare Pages

1. **Workers & Pages → dingopunks → Custom domains**
2. Add **`account.dingopunks.com`** (leave **`play.dingopunks.com`** as-is).
3. Optional: **Rules** on the zone (only if traffic is proxied through Cloudflare for that hostname) — rewrite `account.dingopunks.com/` → `/membership.html` so the address bar stays clean. If you use Shopify URL redirects instead, point `/membership` and `/membership.html` on the shop to `https://account.dingopunks.com/`.

## 2. Firebase Authentication — authorized domains

1. [Firebase Console](https://console.firebase.google.com/) → project **`dpaam-8864d`** → **Authentication → Settings → Authorized domains**.
2. Add **`account.dingopunks.com`**.
3. Keep **`play.dingopunks.com`** and defaults (`localhost`, `dpaam-8864d.firebaseapp.com`, etc.).

Without this, Google sign-in shows **Sign-in unavailable** (`auth/unauthorized-domain`).

## 3. Google Cloud — API key website restrictions (required for email/password login)

Email/password calls `identitytoolkit.googleapis.com` with the browser API key from [`js/firebase-init.js`](../js/firebase-init.js). If the key is restricted to certain referrers, a **new hostname must be added** or login returns **403** and the UI may show **Something went wrong**.

1. [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials?project=dpaam-8864d) (project **`dpaam-8864d`**).
2. Open the **Browser key (auto created by Firebase)** (same key as in `firebase-init.js`).
3. Under **Application restrictions → HTTP referrers (web sites)**, add:
   - `account.dingopunks.com/*`
4. Do **not** remove existing entries (`play.dingopunks.com/*`, `*.pages.dev/*`, `localhost/*`, `dpaam-8864d.firebaseapp.com/*`, etc.).
5. **Save** and wait a few minutes.

**Verify:** On `https://account.dingopunks.com`, sign in with a wrong password — you should see **Incorrect email or password**, not a generic error and not a 403 in the network tab.

## 4. Firebase Functions — Stripe return URLs

Deployed logic in [`firebase-functions/stripe-billing.js`](../firebase-functions/stripe-billing.js) allowlists:

- `https://play.dingopunks.com`
- `https://account.dingopunks.com`

Checkout and Customer Portal return to the origin the user started from.

## 5. Shopify redirects (dingopunks.com is not proxied through Cloudflare)

Use **Online Store → Navigation → View URL redirects** (or **Content → Menus → URL redirects**):

| Redirect from | Redirect to |
|---------------|-------------|
| `/membership` | `https://account.dingopunks.com/` |
| `/membership.html` | `https://account.dingopunks.com/` |

Do **not** turn on Cloudflare “proxied” DNS for the apex shop domain just to run redirect rules — that would break Shopify.

## 6. Cloudflare zone cache-control (required)

The repo's `_headers` file sets `Cache-Control: public, max-age=0, must-revalidate` for `/js/*` and `/css/*` so browsers revalidate imported modules on every load. Cloudflare Pages respects this on `dingopunks.pages.dev`, but the proxied custom hostnames override it with the zone's Browser Cache TTL (default 4 hours). This causes stale-module errors after a publish.

**Fix:** In Cloudflare Dashboard → the `dingopunks.com` zone → **Rules → Cache Rules**, add a rule for hostname `account.dingopunks.com` (and `play.dingopunks.com`) that sets **Browser TTL: Respect Origin** and **Edge Cache TTL: Respect Origin** for `/js/*` and `/css/*`, or set the zone's global Browser Cache TTL to **Respect Existing Headers**.

**Verify** after applying:

```bash
curl -sI https://account.dingopunks.com/js/membership/email-verification.js | grep -i cache-control
# Expected: cache-control: public, max-age=0, must-revalidate
```

## Smoke test

- [ ] `https://account.dingopunks.com/` — membership loads, login works (email + Google).
- [ ] `https://account.dingopunks.com/?anything=here` — lands on the membership page, not the student splash.
- [ ] `https://play.dingopunks.com/` — student code entry unchanged.
- [ ] `https://dingopunks.com/membership` — lands on account domain.
- [ ] Checkout / Manage Subscription from account domain return to `account.dingopunks.com`.
- [ ] `/js/membership/email-verification.js` cache-control header is `max-age=0, must-revalidate` on the custom domain.
