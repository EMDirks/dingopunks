---
name: deploy-cloudflare-pages
description: >-
  Deploys this static site to Cloudflare Pages using Wrangler CLI (direct upload).
  Supports projects with more than 1,000 files (Wrangler allows up to 20,000).
  Use when the user asks to deploy to Cloudflare, publish to Pages, run wrangler
  pages deploy, or mentions Cloudflare Pages deployment from this repository.
---

# Deploy to Cloudflare Pages (Wrangler)

## Context

This repo is a static site (HTML/CSS/JS/assets). The Cloudflare **dashboard drag-and-drop upload** caps at **1,000 files**. **Wrangler** must be used for larger trees (this project has ~1,000+ files).

## Prerequisites

- Node.js and npm installed
- Wrangler: `npm install -g wrangler` (or use `npx wrangler` without global install)
- Authenticated: `wrangler login` (opens browser; one-time per machine)

## Deploy from this repo

0. **Authenticate first (always).** Before running any deploy command, remind the user to run `npx wrangler login` in their own terminal (it opens a browser for OAuth, which cannot be completed from the agent shell). Wait for them to confirm they're logged in before proceeding. If deploy fails with `Failed to fetch auth token` or a `CLOUDFLARE_API_TOKEN` error, stop and prompt them to run `npx wrangler login` (or set `CLOUDFLARE_API_TOKEN`).

1. **Working directory**: repository root (the folder that contains `index.html`), not a subfolder.

2. **Project name**: **`dingopunks`** (Cloudflare Pages project). The repo root `wrangler.toml` sets this via `name` for Wrangler. Production domain: `dingopunks.pages.dev`.

3. **Run** (either form works):

```bash
wrangler pages deploy .
```

```bash
wrangler pages deploy . --project-name dingopunks
```

Use `npx wrangler` instead of `wrangler` if Wrangler is not installed globally.

**Account:** This project lives on **Hello@dingopunks.com's Account** (`f5fc67b8754cc1f8f81bc6f734ace844`). Pages doesn't allow `account_id` inside `wrangler.toml`, so Wrangler picks it up from the logged-in user. If Wrangler ever complains about multiple accounts, prepend `CLOUDFLARE_ACCOUNT_ID=f5fc67b8754cc1f8f81bc6f734ace844` to the command.

**Legacy note:** The site previously lived on `Ethanthedirks@gmail.com`'s account as project `puzzle-punks-game` (account ID `81473d4fbffcfe0e5865888d35278f8c`). After the May 2026 rebrand to Dingo Punks, all deploys go to the `dingopunks` project on the `hello@dingopunks.com` account — do not deploy to the old project.

4. **Optional flags** (when useful):
   - `--commit-message "short description"` — label the deployment in the dashboard
   - `--branch BRANCH_NAME` — preview branch (omit for production default)

## If the project name changes

Default for this repo is **`dingopunks`** (see `wrangler.toml`). If it ever differs from the dashboard, update `wrangler.toml` `name` and/or pass `--project-name`. You can also run `wrangler pages project list` (after `wrangler login`) to confirm names.

## Optional: refresh config from the dashboard

```bash
wrangler pages download config dingopunks
```

See [Wrangler `pages` commands](https://developers.cloudflare.com/workers/wrangler/commands/pages/) for `pages deploy` and `pages download config`.

## Agent behavior

When the user asks to deploy (e.g. “deploy to Cloudflare”):

1. **First, remind the user to run `npx wrangler login` in their own terminal** before anything else. The agent shell is non-interactive and cannot complete the OAuth browser flow. Do not attempt the deploy until they confirm they're logged in (or have set `CLOUDFLARE_API_TOKEN`).
2. Use the workspace root for this game as the deploy directory.
3. Run `wrangler pages deploy` (or `npx wrangler pages deploy`) with network access; the CLI talks to Cloudflare.
4. Default Pages project name for this repo: **`dingopunks`** (`wrangler.toml` at repo root). Prefer `wrangler pages deploy .` from repo root; add `--project-name dingopunks` if the CLI does not pick up config.
5. If deploy fails with a project-name error, confirm `wrangler.toml` `name` matches the dashboard or suggest `wrangler pages project list` after login.

## What not to do

- Do not suggest zipping the folder for dashboard upload when file count exceeds 1,000.
- Do not deploy from `resource/` or other subfolders unless the user explicitly wants only that subtree published.
