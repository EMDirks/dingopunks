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

// Local testing panel; never published.
const debugPanelScript = path.join(repoRoot, "js", "debug-panel.js");
const debugPanelTag = /[ \t]*<!-- debug-panel:start[\s\S]*?<!-- debug-panel:end -->\r?\n/;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const directory of publicDirectories) {
  await cp(path.join(repoRoot, directory), path.join(outputDir, directory), {
    recursive: true,
    filter: (source) => source !== debugPanelScript,
  });
}

for (const file of publicFiles) {
  await cp(path.join(repoRoot, file), path.join(outputDir, file));
}

const indexPath = path.join(outputDir, "index.html");
const indexHtml = (await readFile(indexPath, "utf8")).replace(debugPanelTag, "");
if (indexHtml.includes("debug-panel")) {
  throw new Error("index.html still references the debug panel after stripping it.");
}
await writeFile(indexPath, indexHtml);

console.log(
  `Prepared Cloudflare Pages assets in ${outputDir} (${publicDirectories.length} directories, ${publicFiles.length} root files).`,
);
