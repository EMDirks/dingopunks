---
name: push-github
description: >-
  Commits local changes and pushes branch main to the dingopunks GitHub repo
  (remote dingopunks). Use when the user asks to push to GitHub, back up the
  repo, sync dingopunks, publish commits, or mentions push-github.
---

# Push to GitHub (dingopunks)

## Context

| Remote | URL | Use |
|--------|-----|-----|
| `dingopunks` | `https://github.com/EMDirks/dingopunks.git` | **Default push target** — backup / canonical GitHub for this project |
| `origin` | `https://github.com/EMDirks/puzzle-punks.git` | Legacy name; **do not push** unless the user explicitly asks |

- **Branch**: `main`
- **Repo root**: workspace root (folder with `index.html`)

If `dingopunks` remote is missing, add it:

```bash
git remote add dingopunks https://github.com/EMDirks/dingopunks.git
```

Do **not** create a new GitHub repo; `EMDirks/dingopunks` already exists.

## Workflow

Run from the repository root. Use `git_write` and `full_network` (or `all` if `.git/config` writes fail in sandbox).

1. **Check state**

```bash
git status
git remote -v
```

2. **Commit uncommitted work** (so GitHub has the latest)

If there are modified or untracked files the user intends to ship:

```bash
git add <paths>   # or git add . when the user wants everything
git commit -m "$(cat <<'EOF'
Short summary in plain English.

Optional second sentence if needed.
EOF
)"
```

- Write commit messages like recent history: complete sentences, focus on *why*.
- Do not commit unless the user wants changes saved (push/back up/sync implies yes).
- Never commit secrets (`.env`, credentials, tokens).
- Do not amend or force-push unless the user explicitly asks.

3. **Auth** (only if push fails with auth errors)

```bash
gh auth status
```

If invalid, tell the user to run `gh auth login -h github.com` in their terminal, then retry.

4. **Push**

```bash
git push dingopunks main
```

5. **Verify** (local `main` matches remote)

```bash
git rev-parse main
git ls-remote dingopunks refs/heads/main
```

SHAs must match. Report the GitHub URL: https://github.com/EMDirks/dingopunks

## Agent behavior

When the user invokes this skill or asks to push / back up to GitHub:

1. Run the workflow above without asking for confirmation at each step (unless the working tree has unexpected sensitive files).
2. Prefer `dingopunks` remote — never push to `origin` unless explicitly requested.
3. After success, give a one-line summary: what was committed (if anything) and that `main` is on GitHub.
4. If already up to date (clean tree, matching SHAs), say so and skip commit/push.

## What not to do

- Do not run `gh repo create` for dingopunks.
- Do not change `git config`.
- Do not push to `origin` / puzzle-punks unless the user asks.
- Do not push other branches unless the user names them.
