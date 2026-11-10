import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(repoRoot, "dist");

const publicDirectories = ["assets", "css", "js", "resource"];
const publicFiles = [
  "404.html",
  "_headers",
  "answer-key.html",
  "debrief.html",
  "enter-the-undermurk.html",
  "free-play.html",
  "index.html",
  "membership.html",
  "preview.html",
];

// Local testing panels; never published.
const debugPanelScripts = new Set(
  ["debug-panel.js", "undermurk-debug-panel.js"].map((file) => path.join(repoRoot, "js", file)),
);
const debugPanelPages = ["index.html", "enter-the-undermurk.html"];
const debugPanelTag = /[ \t]*<!-- debug-panel:start[\s\S]*?<!-- debug-panel:end -->\r?\n/;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const directory of publicDirectories) {
  await cp(path.join(repoRoot, directory), path.join(outputDir, directory), {
    recursive: true,
    filter: (source) => !debugPanelScripts.has(source),
  });
}

for (const file of publicFiles) {
  await cp(path.join(repoRoot, file), path.join(outputDir, file));
}

for (const page of debugPanelPages) {
  const pagePath = path.join(outputDir, page);
  const html = (await readFile(pagePath, "utf8")).replace(debugPanelTag, "");
  if (html.includes("debug-panel")) {
    throw new Error(`${page} still references a debug panel after stripping it.`);
  }
  await writeFile(pagePath, html);
}

console.log(
  `Prepared Cloudflare Pages assets in ${outputDir} (${publicDirectories.length} directories, ${publicFiles.length} root files).`,
);
