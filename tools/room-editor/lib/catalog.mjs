// Reads and edits the two hand-maintained catalogs a room must be wired into:
//   js/games.js      — the membership catalog; hidden rooms are wrapped in /* { … }, */
//   js/analytics.js  — per-theme resources; the digits of googleAnalyticsID are the
//                      5-digit game code players type on the splash screen
// Edits are text insertions in the files' existing format so diffs stay small.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { matchingBracket, evalLiteral } from "./repo-data.mjs";

const GAMES = "js/games.js";
const ANALYTICS = "js/analytics.js";
export const PLACEHOLDER_THUMB = "assets/branding/placeholder/need-image.png";
export const THUMB_COLORS = [
  "beige", "blue", "blush", "cyan", "lime", "gold", "gray", "green", "lavender",
  "orange", "pink", "purple", "salmon", "tan", "teal",
];

const read = (root, rel) => readFileSync(path.join(root, rel), "utf8");
const write = (root, rel, text) => writeFileSync(path.join(root, rel), text);

// --------------------------------------------------------------------------
// games.js
// --------------------------------------------------------------------------

// Every entry in `games`, including hidden (commented-out) ones, with the
// character range it occupies so it can be edited in place.
export function gameEntries(text) {
  // Blank out the hidden-entry comment markers (same length) so the entries
  // inside them parse like any other.
  const unwrapped = text.replace(/^( {2})\/\* \{/gm, "$1   {").replace(/^( {2})\}, \*\//gm, "$1},   ");
  const listStart = unwrapped.indexOf("[", unwrapped.indexOf("export const games"));
  const listEnd = matchingBracket(unwrapped, listStart);
  const entries = [];
  for (let i = listStart + 1; i < listEnd; i++) {
    const ch = unwrapped[i];
    if (ch === "/" && unwrapped[i + 1] === "/") { i = unwrapped.indexOf("\n", i); continue; }
    if (ch !== "{") continue;
    const close = matchingBracket(unwrapped, i);
    const lineStart = text.lastIndexOf("\n", i) + 1;
    const lineEnd = text.indexOf("\n", close);
    entries.push({
      game: evalLiteral(unwrapped.slice(i, close + 1)),
      hidden: text.slice(lineStart, i + 1).includes("/*"),
      start: lineStart,
      end: lineEnd,
    });
    i = close;
  }
  return { entries, listEnd };
}

// --------------------------------------------------------------------------
// analytics.js
// --------------------------------------------------------------------------

function readAnalytics(root) {
  const text = read(root, ANALYTICS);
  const start = text.indexOf("[", text.indexOf("const analyticsArray"));
  return evalLiteral(text.slice(start, matchingBracket(text, start) + 1));
}

const digits = (id) => (String(id).match(/\d/g) || []).join("");

export function usedCodes(root) {
  return new Set(readAnalytics(root).flatMap((t) => t.resources.map((r) => digits(r.googleAnalyticsID))));
}

// Matches the light obfuscation used throughout analytics.js: three groups of
// seven mixed-case letters, the five code digits scattered across all three.
export function obfuscatedId(code) {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  let slots;
  do {
    slots = [...Array(21).keys()].sort(() => Math.random() - 0.5).slice(0, 5).sort((a, b) => a - b);
  } while ([0, 1, 2].some((g) => !slots.some((s) => Math.floor(s / 7) === g)));
  const chars = [...Array(21)].map(() => letters[Math.floor(Math.random() * letters.length)]);
  slots.forEach((s, i) => (chars[s] = code[i]));
  return [0, 7, 14].map((i) => chars.slice(i, i + 7).join("")).join("-");
}

export function newCode(root) {
  const used = usedCodes(root);
  let code;
  do code = String(10000 + Math.floor(Math.random() * 90000));
  while (used.has(code));
  return code;
}

// --------------------------------------------------------------------------
// room status
// --------------------------------------------------------------------------

const ORD = { 1: "1st", 2: "2nd", 3: "3rd" };
const ordinal = (n) => ORD[n] ?? `${n}th`;

export function gradesFromFile(rel) {
  const m = path.basename(rel).match(/(\d)(?:st|nd|rd|th)(?:(\d)(?:st|nd|rd|th))?Grade/i);
  if (!m) return [];
  return m[2] ? [Number(m[1]), Number(m[2])] : [Number(m[1])];
}

const kebab = (s) => s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
const titleCase = (slug) => slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");

// Status of every room path: draft (no catalog entry), hidden, new, live.
export function roomStatuses(root) {
  const { entries } = gameEntries(read(root, GAMES));
  const analytics = readAnalytics(root);
  const codeByPath = new Map();
  for (const theme of analytics) {
    for (const r of theme.resources) {
      codeByPath.set(`resource/${theme.path}/${r.resourceJS}`, digits(r.googleAnalyticsID));
    }
  }
  const byPath = new Map();
  for (const e of entries) {
    byPath.set(e.game.path, {
      status: e.hidden ? "hidden" : e.game.isNew ? "new" : "live",
      game: e.game,
    });
  }
  return { byPath, codeByPath };
}

// --------------------------------------------------------------------------
// defaults for a new catalog entry, inferred from the theme's other rooms
// --------------------------------------------------------------------------

export function expectedThumbnail(root, rel) {
  const parts = rel.split("/");
  const [theme, subject, dir] = [parts[1], parts[3], parts[4]];
  const grades = gradesFromFile(rel);
  const suffix = `thumbnail-${grades.map(ordinal).join("-")}-grade.png`;
  const branding = `resource/${theme}/assets/branding`;
  let folder;
  if (subject === "reading" && dir === "all") folder = `${branding}/reading/all`;
  else if (subject === "math" && dir === "all") folder = `${branding}/math/all-standards`;
  else if (subject === "social-emotional-learning") folder = `${branding}/social-emotional-learning/growth-mindset`;
  else folder = `${branding}/${subject}/${kebab(dir)}`;
  const thumb = `${folder}/${suffix}`;
  const preview = thumb.replace("thumbnail-", "preview-");
  if (!existsSync(path.join(root, thumb)) && existsSync(path.join(root, preview))) return preview;
  return thumb;
}

export function catalogDefaults(root, rel, resource) {
  const { entries } = gameEntries(read(root, GAMES));
  const [, theme, , subject, dir] = rel.split("/");
  const siblings = entries.filter((e) => e.game.path.startsWith(`resource/${theme}/`)).map((e) => e.game);
  const sample = siblings[0] ?? {};
  const sameDir = entries.map((e) => e.game).find((g) => g.path.includes(`/topic/${subject}/${dir}/`));
  const topic = sameDir?.topic ?? kebab(dir);
  const grades = gradesFromFile(rel);

  // id prefix: strip "-<topic>-<grades>" from any sibling id.
  let idPrefix = theme;
  const withSuffix = siblings.find((g) => g.id?.endsWith(`-${g.topic}-${(g.grades ?? []).join("-")}`));
  if (withSuffix) idPrefix = withSuffix.id.slice(0, -`-${withSuffix.topic}-${withSuffix.grades.join("-")}`.length);

  const ids = new Set(entries.map((e) => e.game.id));
  let id = `${idPrefix}-${topic}-${grades.join("-")}`;
  for (let n = 2; ids.has(id); n++) id = `${idPrefix}-${topic}-${grades.join("-")}-${n}`;

  // analytics label for this topic, borrowed from another room in the same topic dir
  const analytics = readAnalytics(root);
  let analyticsTopic = null;
  for (const t of analytics) {
    const hit = t.resources.find((r) => r.resourceJS.includes(`topic/${subject}/${dir}/`));
    if (hit) { analyticsTopic = hit.topic; break; }
  }
  const thumb = expectedThumbnail(root, rel);
  return {
    id,
    title: sample.title ?? resource?.info?.title ?? titleCase(theme),
    color: sample.color ?? "blue",
    season: sample.season ?? "all-year",
    grades,
    subject,
    topic,
    skills: (resource?.challengeArray ?? [])
      .filter((c) => c.info?.type !== "code-box")
      .map((c) => c.info?.education?.topic)
      .filter(Boolean),
    thumbnail: existsSync(path.join(root, thumb)) ? thumb : PLACEHOLDER_THUMB,
    expectedThumbnail: thumb,
    badguy: sample.badguy ?? `resource/${theme}/assets/cutscene/badguy.png`,
    main: sample.main ?? `resource/${theme}/assets/cutscene/main.png`,
    analyticsTopic: analyticsTopic ?? titleCase(topic),
    level: grades.map(ordinal),
  };
}

// --------------------------------------------------------------------------
// mutations
// --------------------------------------------------------------------------

const q = JSON.stringify;
const sq = (s) => `'${String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;

function gameEntryText(g, hidden) {
  const lines = [
    `    id: ${q(g.id)},`,
    `    isNew: true,`,
    `    title: ${q(g.title)},`,
    `    color: ${q(g.color)},`,
    `    season: ${q(g.season)},`,
    `    grades: [${g.grades.join(", ")}],`,
    `    subject: ${q(g.subject)},`,
    `    topic: ${q(g.topic)},`,
    `    skills: [`,
    ...g.skills.map((s) => `      ${q(s)},`),
    `    ],`,
    `    thumbnail: ${q(g.thumbnail)},`,
    `    path: ${q(g.path)},`,
    `    badguy: ${q(g.badguy)},`,
    `    main: ${q(g.main)},`,
  ];
  return `  ${hidden ? "/* " : ""}{\n${lines.join("\n")}\n  }${hidden ? ", */" : ","}`;
}

function analyticsEntryText(level, topic, resourceJS, id) {
  return [
    `            {`,
    `                level: [${level.map(sq).join(", ")}],`,
    `                topic: ${sq(topic)},`,
    `                resourceJS: ${sq(resourceJS)},`,
    `                googleAnalyticsID: ${sq(id)}`,
    `            },`,
  ].join("\n");
}

// Adds the room to games.js (hidden) and analytics.js with a fresh code.
// Returns { code, snippets } — snippets are non-empty only for a file whose
// insertion point couldn't be found, so the caller can show them to paste.
export function registerRoom(root, rel, meta) {
  const theme = rel.split("/")[1];
  const snippets = {};

  let games = read(root, GAMES);
  const { entries, listEnd } = gameEntries(games);
  if (entries.some((e) => e.game.path === rel)) throw new Error("This room is already in js/games.js.");
  const entryText = gameEntryText({ ...meta, path: rel }, true);
  const lastSibling = entries.filter((e) => e.game.path.startsWith(`resource/${theme}/`)).at(-1);
  if (lastSibling) {
    games = games.slice(0, lastSibling.end) + "\n" + entryText + games.slice(lastSibling.end);
  } else {
    const at = games.lastIndexOf("\n", listEnd);
    games = games.slice(0, at) + `\n\n${entryText}` + games.slice(at);
  }

  let analytics = read(root, ANALYTICS);
  const code = newCode(root);
  const resourceJS = rel.split("/").slice(2).join("/");
  const entry = analyticsEntryText(meta.level, meta.analyticsTopic, resourceJS, obfuscatedId(code));
  const themeAt = analytics.indexOf(`path: '${theme}'`);
  const listOpen = themeAt < 0 ? -1 : analytics.indexOf("[", analytics.indexOf("resources:", themeAt));
  if (listOpen < 0) {
    snippets[ANALYTICS] = entry;
  } else {
    const close = matchingBracket(analytics, listOpen);
    let at = analytics.lastIndexOf("\n", close);
    // The theme's last entry may not have a trailing comma.
    const prev = analytics.slice(0, at).trimEnd();
    if (prev.endsWith("}")) {
      analytics = `${prev},${analytics.slice(prev.length)}`;
      at += 1;
    }
    analytics = analytics.slice(0, at) + `\n\n${entry}` + analytics.slice(at);
  }

  write(root, GAMES, games);
  if (!snippets[ANALYTICS]) write(root, ANALYTICS, analytics);
  return { code, snippets };
}

function editEntry(root, rel, fn) {
  const games = read(root, GAMES);
  const entry = gameEntries(games).entries.find((e) => e.game.path === rel);
  if (!entry) throw new Error("This room isn't in js/games.js yet — register it first.");
  const before = games.slice(entry.start, entry.end);
  const after = fn(before, entry);
  write(root, GAMES, games.slice(0, entry.start) + after + games.slice(entry.end));
}

export function makeLive(root, rel) {
  editEntry(root, rel, (text, entry) => {
    let out = entry.hidden ? text.replace(/^( {2})\/\* \{/, "$1{").replace(/\}, \*\/$/, "},") : text;
    if (!/\n\s*isNew: true,/.test(out)) out = out.replace(/(\n\s*id: [^\n]+)/, "$1\n    isNew: true,");
    return out;
  });
}

export function hide(root, rel) {
  editEntry(root, rel, (text, entry) =>
    entry.hidden ? text : text.replace(/^( {2})\{/, "$1/* {").replace(/\},$/, "}, */")
  );
}

export function clearNew(root, rel) {
  editEntry(root, rel, (text) => text.replace(/\n\s*isNew: true,/, ""));
}

export function setCatalogThumbnail(root, rel, thumb) {
  editEntry(root, rel, (text) => text.replace(/thumbnail: "[^"]*"/, `thumbnail: ${q(thumb)}`));
}

export function setSkills(root, rel, skills) {
  editEntry(root, rel, (text) =>
    text.replace(/skills: \[[\s\S]*?\n {4}\],/, `skills: [\n${skills.map((s) => `      ${q(s)},`).join("\n")}\n    ],`)
  );
}

export function runExports(root) {
  const out = [];
  for (const script of ["scripts/export-game-ids.mjs", "scripts/export-game-standards.mjs"]) {
    try {
      out.push(execFileSync(process.execPath, [script], { cwd: root, encoding: "utf8", stdio: "pipe" }).trim());
    } catch (err) {
      throw new Error(`${script} failed:\n${(err.stderr || err.stdout || err.message).trim()}`);
    }
  }
  return out.filter(Boolean).join("\n");
}
