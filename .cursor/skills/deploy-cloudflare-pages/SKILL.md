---
name: deploy-cloudflare-pages
description: >-
  Deploys this static site to Cloudflare Pages using Wrangler CLI (direct upload).
  ALWAYS bumps the cache-bust version, git-adds all, and commits before deploy.
  Supports projects with more than 1,000 files (Wrangler allows up to 20,000).
  Use when the user asks to deploy to Cloudflare, publish to Pages, run wrangler
  pages deploy, mentions Cloudflare Pages deployment, or simply says "publish".
---

# Deploy to Cloudflare Pages (Wrangler)

## Context

This repo is a static site (HTML/CSS/JS/assets). The Cloudflare **dashboard drag-and-drop upload** caps at **1,000 files**. **Wrangler** must be used for larger trees (this project has ~1,000+ files).

## Prerequisites

- Node.js and npm installed
- Wrangler: `npm install -g wrangler` (or use `npx wrangler` without global install)
- Authenticated: `wrangler login` (opens browser; one-time per machine)

## CRITICAL: every publish must bump version + commit

**Never deploy without this sequence.** Cache-bust query strings and the in-app version label only update if the patch is incremented and committed into the tree you upload.

On **every** user ask to publish / deploy (including a bare “publish”):

1. **Bump the patch version** (see [Version bump](#version-bump))
2. **`git add -A`** (stage everything intended to ship)
3. **Commit** (message must mention the new version, e.g. `… for 3.4.48.`)
4. **Deploy** with Wrangler (see [Deploy](#deploy-from-this-repo))

Do **not** skip the bump because “nothing CSS-related changed,” “we just deployed,” or “files are already dirty.” Publish = bump → add all → commit → deploy.

Skipping the version bump is a hard failure of this skill.

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

Replace **every** occurrence of the old `X.Y.Z` with the new one in:

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

Example (after reading current `OLD` from `js/splash-new.js` and computing `NEW`):

```bash
OLD=3.4.47
NEW=3.4.48
for f in \
  404.html answer-key.html debrief.html enter-the-undermurk.html \
  free-play.html index.html preview.html \
  js/debrief.js js/splash-new.js
do
  sed -i '' "s/${OLD}/${NEW}/g" "$f"
done
# If debrief.js was already behind OLD, force it to NEW:
sed -i '' -E "s/const version = '[0-9]+\\.[0-9]+\\.[0-9]+'/const version = '${NEW}'/" js/debrief.js js/splash-new.js
```

Verify both consts and spot-check an HTML cache-bust query before committing:

```bash
grep -n "const version" js/debrief.js js/splash-new.js
grep -o 'version=[0-9.]*' index.html debrief.html | sort -u
```

Both consts and the HTML `?version=` values must equal `NEW`. Fix any leftover old version before deploy.

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

## Deploy from this repo

0. **Authenticate first (always).** Before running any deploy command, remind the user to run `npx wrangler login` in their own terminal (it opens a browser for OAuth, which cannot be completed from the agent shell). Wait for them to confirm they're logged in before proceeding — **except** when they already confirmed login earlier in the same conversation. If deploy fails with `Failed to fetch auth token` or a `CLOUDFLARE_API_TOKEN` error, stop and prompt them to run `npx wrangler login` (or set `CLOUDFLARE_API_TOKEN`).

1. **Working directory**: repository root (the folder that contains `index.html`), not a subfolder.

2. **Project name**: **`dingopunks`** (Cloudflare Pages project). The repo root `wrangler.toml` sets this via `name` for Wrangler. Production domain: `dingopunks.pages.dev`.

3. **Run** (after version bump + commit):

```bash
npx wrangler pages deploy . --project-name dingopunks --commit-dirty=true --commit-message "X.Y.Z …"
```

Use `npx wrangler` instead of `wrangler` if Wrangler is not installed globally. Pass `--commit-dirty=true` so a dirty tree (if any) does not block upload; the version bump should already be committed.

**Account:** This project lives on **Hello@dingopunks.com's Account** (`f5fc67b8754cc1f8f81bc6f734ace844`). Pages doesn't allow `account_id` inside `wrangler.toml`, so Wrangler picks it up from the logged-in user. If Wrangler ever complains about multiple accounts, prepend `CLOUDFLARE_ACCOUNT_ID=f5fc67b8754cc1f8f81bc6f734ace844` to the command.

**Legacy note:** The site previously lived on `Ethanthedirks@gmail.com`'s account as project `puzzle-punks-game` (account ID `81473d4fbffcfe0e5865888d35278f8c`). After the May 2026 rebrand to Dingo Punks, all deploys go to the `dingopunks` project on the `hello@dingopunks.com` account — do not deploy to the old project.

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

When the user asks to deploy / publish (e.g. “deploy to Cloudflare”, “publish”):

1. **First (if not already confirmed this conversation):** remind the user to run `npx wrangler login` in their own terminal. Do not attempt the deploy until they confirm they're logged in (or have set `CLOUDFLARE_API_TOKEN`).
2. **Always** bump patch version in the files listed above; sync both `const version` declarations.
3. **Always** `git add -A` and commit with the new version in the message.
4. Use the workspace root for this game as the deploy directory.
5. Run `npx wrangler pages deploy . --project-name dingopunks --commit-dirty=true` with network access; include the new version in `--commit-message`.
6. Report the new version and both URLs (`https://<id>.dingopunks.pages.dev` and `https://dingopunks.pages.dev`).
7. If deploy fails with a project-name error, confirm `wrangler.toml` `name` matches the dashboard or suggest `wrangler pages project list` after login.

Pushing to GitHub (`dingopunks` remote) is **not** part of this skill unless the user also asks to push / back up; use the `push-github` skill for that.

## What not to do

- **Do not deploy without incrementing the version and committing first.**
- Do not leave `js/debrief.js` on an older `const version` than `js/splash-new.js`.
- Do not suggest zipping the folder for dashboard upload when file count exceeds 1,000.
- Do not deploy from `resource/` or other subfolders unless the user explicitly wants only that subtree published.
