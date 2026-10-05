---
name: publish
description: >-
  Publishes this static site to Cloudflare Pages using Wrangler CLI (direct upload).
  ALWAYS bumps the cache-bust version, git-adds all, and commits before publish.
  Supports projects with more than 1,000 files (Wrangler allows up to 20,000).
  Use when the user asks to publish, deploy to Cloudflare Pages, run wrangler
  pages deploy, mentions Cloudflare Pages deployment, or simply says "publish".
  For Firestore rules or a full prod deploy (Firebase + Pages), use the `deploy`
  skill instead.
---

# Publish (Cloudflare Pages / Wrangler)

## Context

This repo is a static site (HTML/CSS/JS/assets). The Cloudflare **dashboard drag-and-drop upload** caps at **1,000 files**. **Wrangler** must be used for larger trees (this project has ~1,000+ files).

## Prerequisites

- Node.js and npm installed
- Wrangler: `npm install -g wrangler` (or use `npx wrangler` without global install)
- Authenticated: `wrangler login` (opens browser; one-time per machine)

## CRITICAL: every publish must bump version + commit

**Never publish without this sequence.** Cache-bust query strings and the in-app version label only update if the patch is incremented and committed into the tree you upload.

On **every** user ask to publish (including a bare “publish”):

1. **Regenerate standards lookup and game IDs** — `node scripts/export-game-standards.mjs` (updates [`js/game-standards.js`](js/game-standards.js) from resource files) and `node scripts/export-game-ids.mjs` (updates `firebase-functions/game-ids.json`); commit both outputs
2. **Bump the patch version** (see [Version bump](#version-bump))
3. **`git add -A`** (stage everything intended to ship)
4. **Commit** (message must mention the new version, e.g. `… for 3.4.48.`)
5. **Build the public-only upload directory** — `node scripts/build-pages.mjs`
6. **Publish** with Wrangler (see [Publish from this repo](#publish-from-this-repo))
7. **Redeploy share-code functions if escape rooms changed** (see [Escape room changes: redeploy share-code functions](#escape-room-changes-redeploy-share-code-functions))

Do **not** skip the version bump or standards export. Either is a hard failure of this skill.

## Escape room changes: redeploy share-code functions

Firebase functions `createShareCode`, `cancelShareCode`, and `resolveGameCode` validate game IDs against `firebase-functions/game-ids.json`, which is loaded when the functions are deployed. Publishing to Cloudflare does **not** update it. If a room is in the catalog but missing from the deployed list, teachers get **"Unknown game."** when sharing, and students can't resolve its codes.

**When it applies:** the publish includes adding, removing, enabling (uncommenting), or renaming an escape room entry — in practice, any change to `js/games.js` entries or their `id`s. Check with:

```bash
git diff HEAD~1 --stat -- js/games.js firebase-functions/game-ids.json
```

If either file changed in the publish commit (or since the last functions deploy), redeploy. If unsure, redeploy — it's safe and takes about a minute.

**Steps** (after the Wrangler publish succeeds):

1. Regenerate the ID list (the deploy predeploy hook also runs this, but run it before committing so the committed file is current):

   ```bash
   node scripts/export-game-ids.mjs
   ```

2. Deploy only the share-code functions:

   ```bash
   npx firebase-tools deploy --only functions:createShareCode,functions:cancelShareCode,functions:resolveGameCode --project dpaam-8864d
   ```

3. If it fails with `Your credentials are no longer valid`, stop and ask the user to run `npx firebase-tools login --reauth` in their own terminal, then retry.

Do not deploy the other functions (Stripe, profile, etc.) as part of publish unless the user asks.

## Version bump

### Canonical version

Read the current version from:

```js
// js/splash-new.js
const version = 'X.Y.Z';
```

Increment the **patch** only: `3.4.47` → `3.4.48`.

Also keep `js/debrief.js`’s `const version = '…'` in sync (it has drifted before; always set it to the **new** version, even if it still lists an older one).

### Files that must receive the new version string

Only `?version=X.Y.Z` cache-bust queries and `const version = 'X.Y.Z'` lines are version strings. Everything else that looks like a version (SVG path data such as `4 0 7`, prices, coordinates) must stay untouched. These files are updated:

| Path | What updates |
|------|----------------|
| `js/splash-new.js` | `const version = '…'` |
| `js/debrief.js` | `const version = '…'` |
| `index.html` | `?version=` on CSS/JS links |
| `debrief.html` | `?version=` on CSS/JS links |
| `answer-key.html` | `?version=` on CSS/JS links |
| `free-play.html` | `?version=` on CSS/JS links |
| `preview.html` | `?version=` on CSS/JS links |
| `enter-the-undermurk.html` | `?version=` on CSS/JS links |
| `404.html` | `?version=` on CSS/JS links |
| `membership.html` | `?version=` on CSS/JS links |

Run the bump script. It reads the current version from `js/splash-new.js`, increments the patch, and rewrites only those two anchored patterns (so `js/debrief.js` is always forced to the new version even if it drifted):

```bash
node scripts/bump-version.mjs
```

**Never** bump with a bare `sed "s/${OLD}/${NEW}/g"`. In `sed`, `.` matches any character, so `4.0.7` also matches `4 0 7` inside SVG `d="…"` attributes. That silently corrupted the Google and heart icons in `membership.html` across the 4.0.2–4.0.8 publishes.

Verify before committing. The `git diff` check must print nothing; any output means something other than a version string changed, so stop and investigate:

```bash
grep -n "const version" js/debrief.js js/splash-new.js
grep -o 'version=[0-9.]*' index.html debrief.html | sort -u
git diff -U0 -- 404.html answer-key.html debrief.html enter-the-undermurk.html \
  free-play.html index.html preview.html membership.html js/debrief.js js/splash-new.js \
  | grep -E '^[-+][^-+]' | grep -vE 'version=|const version'
```

Uncommitted feature edits in those files will also show up; confirm each listed line is an intended change. Both consts and the HTML `?version=` values must equal `NEW`.

### Commit after bump

```bash
git add -A
git status
git diff --cached --stat
git log -3 --format='%s'
git commit -m "$(cat <<'EOF'
Short summary of what shipped for X.Y.Z.

EOF
)"
```

Follow recent commit style (complete sentence; end with `for X.Y.Z.`). Prefer `all` / `git_write` permissions for the commit.

## Publish from this repo

0. **Authenticate first (always).** Before running any publish command, remind the user to run `npx wrangler login` in their own terminal (it opens a browser for OAuth, which cannot be completed from the agent shell). Wait for them to confirm they're logged in before proceeding — **except** when they already confirmed login earlier in the same conversation. If publish fails with `Failed to fetch auth token` or a `CLOUDFLARE_API_TOKEN` error, stop and prompt them to run `npx wrangler login` (or set `CLOUDFLARE_API_TOKEN`).

1. **Working directory**: repository root. Run `node scripts/build-pages.mjs` to copy
   only public site files into `dist/`. Never upload the repository root directly:
   doing so publishes backend source, local Firebase environment files, and internal
   project files as downloadable static assets.

2. **Project name**: **`dingopunks`** (Cloudflare Pages project). The repo root `wrangler.toml` sets this via `name` for Wrangler. Production domain: `dingopunks.pages.dev`.

3. **Run** (after version bump + commit):

```bash
npx wrangler pages deploy dist --project-name dingopunks --commit-dirty=true --commit-message "X.Y.Z …"
```

Use `npx wrangler` instead of `wrangler` if Wrangler is not installed globally. Pass `--commit-dirty=true` so a dirty tree (if any) does not block upload; the version bump should already be committed.

**Account:** This project lives on **Hello@dingopunks.com's Account** (`f5fc67b8754cc1f8f81bc6f734ace844`). Pages doesn't allow `account_id` inside `wrangler.toml`, so Wrangler picks it up from the logged-in user. If Wrangler ever complains about multiple accounts, prepend `CLOUDFLARE_ACCOUNT_ID=f5fc67b8754cc1f8f81bc6f734ace844` to the command.

**Legacy note:** The site previously lived on `Ethanthedirks@gmail.com`'s account as project `puzzle-punks-game` (account ID `81473d4fbffcfe0e5865888d35278f8c`). After the May 2026 rebrand to Dingo Punks, all publishes go to the `dingopunks` project on the `hello@dingopunks.com` account — do not publish to the old project.

4. **Optional flags** (when useful):
   - `--commit-message "short description"` — label the deployment in the dashboard (include the new version)
   - `--branch BRANCH_NAME` — preview branch (omit for production default)

## If the project name changes

Default for this repo is **`dingopunks`** (see `wrangler.toml`). If it ever differs from the dashboard, update `wrangler.toml` `name` and/or pass `--project-name`. You can also run `wrangler pages project list` (after `wrangler login`) to confirm names.

## Optional: refresh config from the dashboard

```bash
wrangler pages download config dingopunks
```

See [Wrangler `pages` commands](https://developers.cloudflare.com/workers/wrangler/commands/pages/) for `pages deploy` and `pages download config`.

## Agent behavior

When the user asks to publish (e.g. “publish”, “deploy to Cloudflare”):

1. **First (if not already confirmed this conversation):** remind the user to run `npx wrangler login` in their own terminal. Do not attempt the publish until they confirm they're logged in (or have set `CLOUDFLARE_API_TOKEN`).
2. **Always** bump patch version in the files listed above; sync both `const version` declarations.
3. **Always** `git add -A` and commit with the new version in the message.
4. Run `node scripts/build-pages.mjs` to create the public-only `dist/` directory.
5. Run `npx wrangler pages deploy dist --project-name dingopunks --commit-dirty=true` with network access; include the new version in `--commit-message`.
6. If escape rooms were added or modified, redeploy the share-code functions (see [Escape room changes](#escape-room-changes-redeploy-share-code-functions)).
7. Report the new version, both URLs (`https://<id>.dingopunks.pages.dev` and `https://dingopunks.pages.dev`), and whether functions were redeployed.
8. If publish fails with a project-name error, confirm `wrangler.toml` `name` matches the dashboard or suggest `wrangler pages project list` after login.

Pushing to GitHub (`dingopunks` remote) is **not** part of this skill unless the user also asks to push / back up; use the `push` skill for that.

## Firebase vs Cloudflare `functions/`

Cloudflare Pages treats a root-level **`functions/`** folder as **Pages Functions** and tries to bundle it on publish. Firebase Cloud Functions in this repo live in **`firebase-functions/`** instead. Do not rename that folder back to `functions/` at the repo root.

## What not to do

- **Do not publish without incrementing the version and committing first.**
- Do not skip the share-code functions redeploy when escape rooms were added or modified; the Pages publish alone leaves new rooms unshareable.
- Do not bump versions with an unanchored `sed` find/replace; use `node scripts/bump-version.mjs`.
- Do not pass `.` to `wrangler pages deploy`; deploy the generated `dist/` directory.
- Do not leave `js/debrief.js` on an older `const version` than `js/splash-new.js`.
- Do not suggest zipping the folder for dashboard upload when file count exceeds 1,000.
- Do not publish from `resource/` or other subfolders unless the user explicitly wants only that subtree published.
