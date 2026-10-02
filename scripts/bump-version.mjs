import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const htmlFiles = [
  "404.html",
  "answer-key.html",
  "debrief.html",
  "enter-the-undermurk.html",
  "free-play.html",
  "index.html",
  "membership.html",
  "preview.html",
];
const versionConstFiles = ["js/splash-new.js", "js/debrief.js"];

// Only these two shapes are version strings. A bare X.Y.Z search also matches
// SVG path data like "4 0 7" and silently corrupts icons.
const CACHE_BUST = /([?&]version=)\d+\.\d+\.\d+(?![\d.])/g;
const VERSION_CONST = /(const version = ')\d+\.\d+\.\d+(?=')/g;

const canonicalPath = path.join(repoRoot, "js/splash-new.js");
const canonical = (await readFile(canonicalPath, "utf8")).match(/const version = '(\d+)\.(\d+)\.(\d+)'/);
if (!canonical) {
  console.error("Could not read const version from js/splash-new.js");
  process.exit(1);
}

const [, major, minor, patch] = canonical;
const oldVersion = `${major}.${minor}.${patch}`;
const newVersion = process.argv[2] || `${major}.${minor}.${Number(patch) + 1}`;
if (!/^\d+\.\d+\.\d+$/.test(newVersion)) {
  console.error(`Invalid version: ${newVersion}`);
  process.exit(1);
}

let failed = false;

async function bump(relativePath, pattern, expectMatch) {
  const filePath = path.join(repoRoot, relativePath);
  const before = await readFile(filePath, "utf8");
  let count = 0;
  const after = before.replace(pattern, (match, prefix) => {
    count += 1;
    return `${prefix}${newVersion}`;
  });

  if (expectMatch && count === 0) {
    console.error(`${relativePath}: no version strings found`);
    failed = true;
  }

  return { relativePath, filePath, before, after, count };
}

const results = [
  ...(await Promise.all(htmlFiles.map((file) => bump(file, CACHE_BUST, false)))),
  ...(await Promise.all(versionConstFiles.map((file) => bump(file, VERSION_CONST, true)))),
];

if (failed) {
  console.error("Version bump aborted; no files were written.");
  process.exit(1);
}

for (const { filePath, before, after } of results) {
  if (after !== before) await writeFile(filePath, after);
}

for (const { relativePath, count } of results) {
  console.log(`${relativePath}: ${count} updated`);
}
console.log(`Bumped ${oldVersion} -> ${newVersion}`);
