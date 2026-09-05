// Reads js/games.js (browser ES module, pure data) and emits
// firebase-functions/game-ids.json — the server-side game catalog used by
// createShareCode to validate gameIds. Wired as a functions predeploy hook in
// firebase.json so a stale catalog can't ship; the generated file is committed.
//
// Usage: node scripts/export-game-ids.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const gamesPath = path.join(repoRoot, "js/games.js");
const outputPath = path.join(repoRoot, "firebase-functions/game-ids.json");

// games.js has no package.json marking it as an ES module, so import it via a
// data: URL. It's self-contained data — no relative imports to break.
const source = readFileSync(gamesPath, "utf8");
const moduleUrl =
  "data:text/javascript;base64," + Buffer.from(source).toString("base64");
const { games } = await import(moduleUrl);

if (!Array.isArray(games) || games.length === 0) {
  throw new Error("js/games.js exported no games — refusing to write an empty catalog.");
}

const ids = games.map((game, index) => {
  if (typeof game.id !== "string" || game.id.length === 0) {
    throw new Error(`games[${index}] has a missing or invalid id.`);
  }
  return game.id;
});

const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicates.length > 0) {
  throw new Error(`Duplicate game ids in js/games.js: ${[...new Set(duplicates)].join(", ")}`);
}

writeFileSync(outputPath, JSON.stringify(ids.sort(), null, 2) + "\n");
console.log(`Wrote ${ids.length} game ids to ${path.relative(repoRoot, outputPath)}`);
