// Proves the editor can save any room without losing data: every room file is
// loaded, serialized, re-evaluated, and compared field-for-field with the
// original. Also flags values JSON can't carry (undefined, functions, NaN).
//
// Usage: node tools/dingoedit/test/roundtrip.mjs

import { readdirSync, statSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRoomSource, serializeRoom } from "../lib/room-io.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");

function roomFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) out.push(...roomFiles(p));
    else if (name.endsWith(".js")) out.push(p);
  }
  return out;
}

function lossy(v, at = "resource", found = []) {
  if (v === undefined || typeof v === "function" || Number.isNaN(v)) found.push(at);
  else if (v && typeof v === "object") {
    for (const [k, child] of Object.entries(v)) lossy(child, `${at}.${k}`, found);
  }
  return found;
}

const files = readdirSync(path.join(repoRoot, "resource"))
  .map((theme) => path.join(repoRoot, "resource", theme, "topic"))
  .filter((dir) => { try { return statSync(dir).isDirectory(); } catch { return false; } })
  .flatMap(roomFiles);

let pass = 0;
const failures = [];
for (const file of files) {
  const rel = path.relative(repoRoot, file);
  try {
    const { resource, raw, prelude } = parseRoomSource(readFileSync(file, "utf8"), rel);
    const lost = lossy(raw);
    const again = parseRoomSource(serializeRoom(resource, prelude), rel).resource;
    if (JSON.stringify(again) !== JSON.stringify(resource)) failures.push(`${rel}: data changed on round trip`);
    else if (lost.length) failures.push(`${rel}: non-JSON values at ${lost.slice(0, 3).join(", ")}`);
    else pass++;
  } catch (err) {
    failures.push(`${rel}: ${err.message.split("\n")[0]}`);
  }
}

console.log(`round trip: ${pass}/${files.length} rooms pass`);
for (const f of failures) console.log("  ✗ " + f);
process.exit(failures.length ? 1 : 0);
