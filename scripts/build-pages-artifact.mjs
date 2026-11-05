import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "dist");

const rootFiles = [
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

const rootDirs = ["assets", "css", "js", "resource"];

// Local testing panel; never published.
const debugPanelScript = join(root, "js", "debug-panel.js");
const debugPanelTag = /[ \t]*<!-- debug-panel:start[\s\S]*?<!-- debug-panel:end -->\r?\n/;

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const file of rootFiles) {
  cpSync(join(root, file), join(outDir, file));
}

for (const dir of rootDirs) {
  cpSync(join(root, dir), join(outDir, dir), {
    recursive: true,
    filter: (source) => source !== debugPanelScript,
  });
}

const indexPath = join(outDir, "index.html");
const indexHtml = readFileSync(indexPath, "utf8").replace(debugPanelTag, "");
if (indexHtml.includes("debug-panel")) {
  throw new Error("index.html still references the debug panel after stripping it.");
}
writeFileSync(indexPath, indexHtml);

console.log(`Wrote static Pages artifact to ${outDir}`);
