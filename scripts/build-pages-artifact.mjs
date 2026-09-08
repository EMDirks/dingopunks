import { cpSync, mkdirSync, rmSync } from "node:fs";
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

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const file of rootFiles) {
  cpSync(join(root, file), join(outDir, file));
}

for (const dir of rootDirs) {
  cpSync(join(root, dir), join(outDir, dir), { recursive: true });
}

console.log(`Wrote static Pages artifact to ${outDir}`);
