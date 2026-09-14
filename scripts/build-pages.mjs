import { cp, mkdir, rm } from "node:fs/promises";
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

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const directory of publicDirectories) {
  await cp(path.join(repoRoot, directory), path.join(outputDir, directory), {
    recursive: true,
  });
}

for (const file of publicFiles) {
  await cp(path.join(repoRoot, file), path.join(outputDir, file));
}

console.log(
  `Prepared Cloudflare Pages assets in ${outputDir} (${publicDirectories.length} directories, ${publicFiles.length} root files).`,
);
