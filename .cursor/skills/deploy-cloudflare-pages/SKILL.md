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

1. **Working directory**: repository root (the folder that contains `index.html`), not a subfolder.

2. **Project name**: **`puzzle-punks-game`** (Cloudflare Pages project). The repo root `wrangler.toml` sets this via `name` for Wrangler.

3. **Run** (either form works):

```bash
wrangler pages deploy .
```

```bash
wrangler pages deploy . --project-name puzzle-punks-game
```

Use `npx wrangler` instead of `wrangler` if Wrangler is not installed globally.

4. **Optional flags** (when useful):
   - `--commit-message "short description"` — label the deployment in the dashboard
   - `--branch BRANCH_NAME` — preview branch (omit for production default)

## If the project name changes

Default for this repo is **`puzzle-punks-game`** (see `wrangler.toml`). If it ever differs from the dashboard, update `wrangler.toml` `name` and/or pass `--project-name`. You can also run `wrangler pages project list` (after `wrangler login`) to confirm names.

## Optional: refresh config from the dashboard

```bash
wrangler pages download config puzzle-punks-game
```

See [Wrangler `pages` commands](https://developers.cloudflare.com/workers/wrangler/commands/pages/) for `pages deploy` and `pages download config`.

## Agent behavior

When the user asks to deploy (e.g. “deploy to Cloudflare”):

1. Use the workspace root for this game as the deploy directory.
2. Run `wrangler pages deploy` (or `npx wrangler pages deploy`) with network access; the CLI talks to Cloudflare.
3. Default Pages project name for this repo: **`puzzle-punks-game`** (`wrangler.toml` at repo root). Prefer `wrangler pages deploy .` from repo root; add `--project-name puzzle-punks-game` if the CLI does not pick up config.
4. If deploy fails with a project-name error, confirm `wrangler.toml` `name` matches the dashboard or suggest `wrangler pages project list` after login.

## What not to do

- Do not suggest zipping the folder for dashboard upload when file count exceeds 1,000.
- Do not deploy from `resource/` or other subfolders unless the user explicitly wants only that subtree published.
