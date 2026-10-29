#!/bin/bash
# Double-click to start DingoEdit. Leave the window open while you work.
cd "$(dirname "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  echo "Node.js isn't installed. Install it from https://nodejs.org (LTS), then double-click this again."
  read -r -p "Press Return to close."
  exit 1
fi
node tools/dingoedit/server.mjs --open
