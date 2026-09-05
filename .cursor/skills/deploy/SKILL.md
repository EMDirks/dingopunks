---
name: deploy
description: >-
  Deploys DPAAM backend and frontend to production Firebase (dpaam-8864d) and
  Cloudflare Pages. Includes Firestore security rules and the static-site publish
  flow. Use when the user asks to deploy, deploy rules, deploy to production,
  ship Firebase changes, or wants a full prod deploy (not just publish).
---

# Deploy (Firebase + Cloudflare Pages)

Production has **two targets**:

| Target | What ships | Tool |
|--------|------------|------|
| **Firebase** `dpaam-8864d` | Firestore rules (and later: Cloud Functions) | Firebase CLI |
| **Cloudflare Pages** `dingopunks` | Static HTML/CSS/JS/assets | Wrangler |

Cloudflare publish does **not** deploy Firebase rules. Rules must be deployed separately.

## Prerequisites

- **Firebase CLI**: `firebase` or `npx firebase-tools`
- **Wrangler**: `npx wrangler` (for frontend publish)
- Authenticated:
  - `firebase login` (or `firebase login --reauth` if credentials expired)
  - `npx wrangler login` (for Pages; opens browser — user may need to do this in their own terminal)

Project config is already in the repo: `.firebaserc` → `dpaam-8864d`, `firebase.json` → `firestore.rules`.

## Deploy Firestore rules

Run from the **repository root**:

```bash
firebase deploy --only firestore:rules
```

- **No version bump** and **no git commit** required for rules-only deploys (unless you also changed skill/docs the user asked to commit).
- Rules file: [`firestore.rules`](firestore.rules)
- Emulator tests: `cd firebase-functions && npm test` (rules tests in `firebase-functions/test/firestore.rules.test.js`)

If deploy fails with `Your credentials are no longer valid`, stop and ask the user to run `firebase login --reauth` in their terminal, then retry.

## Deploy Cloudflare Pages (frontend)

Follow the **`publish` skill** in full:

1. Regenerate standards (`node scripts/export-game-standards.mjs`)
2. Bump patch version in all cache-bust files (including `membership.html`)
3. `git add -A` and commit
4. `npx wrangler pages deploy . --project-name dingopunks --commit-dirty=true`

## Full production deploy

When the user asks to **deploy** without specifying a target, or wants everything live:

1. **Firestore rules** — `firebase deploy --only firestore:rules`
2. **Frontend** — follow the `publish` skill (version bump + commit + Wrangler)

Deploy rules **before** or **after** the frontend as appropriate; for new client features that depend on new rules (e.g. `userPrefs`), rules should be live before or with the frontend.

## Future: Cloud Functions

When Phase 2+ functions ship, add:

```bash
firebase deploy --only functions
```

(or combine: `firebase deploy --only firestore:rules,functions`). Do not deploy until the user asks and the functions are ready.

## Agent behavior

| User request | Action |
|--------------|--------|
| "deploy rules" / "deploy Firestore rules" | Rules only — no version bump |
| "publish" / "deploy to Cloudflare" | Use `publish` skill only |
| "deploy" / "deploy to prod" / "full deploy" | Rules + publish (unless user specifies one target) |

1. Confirm Firebase auth before `firebase deploy`; Wrangler auth before Pages deploy (see `publish` skill).
2. Report Firebase project (`dpaam-8864d`) and success/failure for rules.
3. For frontend, report version and Pages URLs from the `publish` skill.

## What not to do

- Do not assume Cloudflare publish deployed Firebase rules.
- Do not deploy Cloud Functions unless explicitly requested and implemented.
- Do not rename `firebase-functions/` to `functions/` at repo root (Cloudflare Pages conflict — see `publish` skill).
