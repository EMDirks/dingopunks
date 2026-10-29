// Read-only data the editor derives from the repo itself, so it never drifts
// from what the renderer supports: style tokens (js/global.js), activity
// templates (js/reference/activity.txt), theme assets, and known standards.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { loadRoom } from "./room-io.mjs";

export function matchingBracket(text, openIndex) {
  const open = text[openIndex];
  const close = open === "[" ? "]" : "}";
  let depth = 0;
  let quote = null;
  for (let i = openIndex; i < text.length; i++) {
    const ch = text[i];
    if (quote) {
      if (ch === "\\") i++;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") quote = ch;
    else if (ch === "/" && text[i + 1] === "/") i = text.indexOf("\n", i) - 1;
    else if (ch === "/" && text[i + 1] === "*") i = text.indexOf("*/", i) + 1;
    else if (ch === open) depth++;
    else if (ch === close && --depth === 0) return i;
  }
  return -1;
}

export function evalLiteral(source) {
  return vm.runInNewContext(`(${source})`, {}, { timeout: 1000 });
}

// `let style = {...}` in js/global.js: the full dictionary of style tokens.
export function readStyleTokens(repoRoot) {
  const text = readFileSync(path.join(repoRoot, "js/global.js"), "utf8");
  const start = text.indexOf("{", text.search(/^let style = \{/m));
  return evalLiteral(text.slice(start, matchingBracket(text, start) + 1));
}

// js/reference/activity.txt: `// name` heading, then an `activity: {...}` block.
export function readTemplates(repoRoot) {
  const text = readFileSync(path.join(repoRoot, "js/reference/activity.txt"), "utf8");
  const heading = /^\/\/ (.+)$/gm;
  const templates = [];
  let m;
  while ((m = heading.exec(text))) {
    const name = m[1].trim();
    const after = text.slice(m.index + m[0].length);
    const declaration = after.match(/^\s*activity:\s*\{/);
    if (!declaration) continue;
    const open = m.index + m[0].length + declaration[0].length - 1;
    const close = matchingBracket(text, open);
    try {
      templates.push({ name, group: templateGroup(name), activity: evalLiteral(text.slice(open, close + 1)) });
    } catch {
      // A malformed reference block shouldn't take the editor down.
    }
  }
  return templates;
}

function templateGroup(name) {
  if (/^sort|puzzle/.test(name)) return "Sort & puzzle";
  if (/cryptogram/.test(name)) return "Cryptogram";
  if (/fraction|number-line|figure|angle|coordinate|shape|word-problem/.test(name)) return "Math";
  return "Reading";
}

function listFiles(dir, pattern = /\.(png|jpe?g|webp|gif|svg)$/i) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => pattern.test(f)).sort();
}

export const ASSET_KINDS = ["node", "character", "background", "passage", "local", "puzzle"];
export const MATH_IMAGE_TYPES = ["angle", "shape", "shape-partition"];

export function themeDirs(repoRoot) {
  return readdirSync(path.join(repoRoot, "resource"))
    .filter((d) => existsSync(path.join(repoRoot, "resource", d, "topic")))
    .sort();
}

export function themeAssets(repoRoot, theme) {
  const base = path.join(repoRoot, "resource", theme, "assets/activity");
  return Object.fromEntries(ASSET_KINDS.map((kind) => [kind, listFiles(path.join(base, kind))]));
}

export function globalAssets(repoRoot) {
  return {
    columnSort: listFiles(path.join(repoRoot, "assets/activity/columnSort")),
    ...Object.fromEntries(
      MATH_IMAGE_TYPES.map((t) => [t, listFiles(path.join(repoRoot, "assets/activity/math", t))])
    ),
  };
}

export function roomFiles(repoRoot) {
  const out = [];
  const walk = (dir) => {
    for (const name of readdirSync(dir)) {
      const p = path.join(dir, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith(".js")) out.push(path.relative(repoRoot, p).split(path.sep).join("/"));
    }
  };
  for (const theme of themeDirs(repoRoot)) walk(path.join(repoRoot, "resource", theme, "topic"));
  return out.sort();
}

// Every commonCore code already used in any room, with how often it's used.
export function knownStandards(repoRoot) {
  const counts = new Map();
  for (const rel of roomFiles(repoRoot)) {
    let resource;
    try { ({ resource } = loadRoom(path.join(repoRoot, rel))); } catch { continue; }
    for (const c of resource.challengeArray ?? []) {
      for (const code of c.info?.education?.commonCore ?? []) {
        if (typeof code === "string") counts.set(code, (counts.get(code) ?? 0) + 1);
      }
    }
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([code]) => code);
}
