// Escape Room Editor — local server.
//
//   node tools/room-editor/server.mjs        (or double-click "Escape Room Editor.command")
//
// Serves the repo root (so preview.html and the real renderer work unchanged),
// the editor UI at /editor/, and a small JSON API that reads and writes room
// files and the games.js / analytics.js catalogs. Binds to localhost only.

import http from "node:http";
import { readFileSync, existsSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";
import { loadRoom, saveRoom, AI_STANDARDS_NOTE } from "./lib/room-io.mjs";
import {
  readStyleTokens, readTemplates, themeDirs, themeAssets, globalAssets, roomFiles, knownStandards,
} from "./lib/repo-data.mjs";
import {
  roomStatuses, catalogDefaults, registerRoom, makeLive, hide, clearNew, setCatalogThumbnail,
  setSkills, runExports, THUMB_COLORS, PLACEHOLDER_THUMB,
} from "./lib/catalog.mjs";
import { validateRoom } from "./lib/validate.mjs";

const toolRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(toolRoot, "../..");
const PORT = Number(process.env.PORT) || 8766;

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2",
  ".woff": "font/woff", ".ttf": "font/ttf", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".ico": "image/x-icon",
};

// Only room files and branding images can be written.
const ROOM_PATH = /^resource\/[a-z0-9-]+\/topic\/[A-Za-z0-9/_-]+\.js$/;
const BRANDING_PATH = /^resource\/[a-z0-9-]+\/assets\/branding\/[A-Za-z0-9/_-]+\.png$/;

function safeJoin(rel) {
  const abs = path.resolve(repoRoot, rel);
  if (!abs.startsWith(repoRoot + path.sep)) throw httpError(400, "Bad path.");
  return abs;
}

function httpError(status, message) {
  return Object.assign(new Error(message), { status });
}

function requireRoomPath(rel) {
  if (typeof rel !== "string" || !ROOM_PATH.test(rel) || rel.includes("..")) {
    throw httpError(400, `Not a room path: ${rel}`);
  }
  return rel;
}

// ------------------------------------------------------------------ helpers

let cache = {};
const cached = (key, fn) => (cache[key] ??= fn());
const invalidate = () => { cache = {}; };

function themeContext(theme) {
  return { tokens: cached("tokens", () => readStyleTokens(repoRoot)), assets: themeAssets(repoRoot, theme), global: globalAssets(repoRoot) };
}

function roomSummary(rel, statuses) {
  const theme = rel.split("/")[1];
  const entry = statuses.byPath.get(rel);
  let title = theme;
  let legacy = false;
  try {
    const { resource } = loadRoom(path.join(repoRoot, rel));
    title = resource.info?.title ?? theme;
    legacy = !resource.challengeArray;
  } catch { /* listed with defaults */ }
  return {
    path: rel,
    theme,
    title,
    file: rel.split("/").slice(3).join("/"),
    status: legacy ? "legacy" : entry?.status ?? "draft",
    code: statuses.codeByPath.get(rel) ?? null,
    grades: entry?.game.grades ?? null,
    gameId: entry?.game.id ?? null,
  };
}

function roomPayload(rel) {
  const { resource, prelude } = loadRoom(safeJoin(rel));
  const statuses = roomStatuses(repoRoot);
  const summary = roomSummary(rel, statuses);
  const entry = statuses.byPath.get(rel);
  return {
    ...summary,
    resource,
    hasNote: prelude.includes("NOTE"),
    game: entry?.game ?? null,
    defaults: catalogDefaults(repoRoot, rel, resource),
  };
}

// A starter room for the New Room wizard: the theme's characters, node images,
// titles and hints, with empty content to fill in.
function scaffoldRoom(theme, subject) {
  const rooms = roomFiles(repoRoot).filter((r) => r.startsWith(`resource/${theme}/`));
  let source = null;
  for (const pref of [`/topic/${subject}/`, "/topic/"]) {
    for (const rel of rooms.filter((r) => r.includes(pref))) {
      const { resource } = loadRoom(path.join(repoRoot, rel));
      if (resource.challengeArray) { source = resource; break; }
    }
    if (source) break;
  }
  if (!source) throw httpError(400, "This theme has no current-format room to copy characters from.");

  const template = readTemplates(repoRoot).find((t) => t.name === "passage-medium + title (1x)") ?? readTemplates(repoRoot)[0];
  const challenges = source.challengeArray.filter((c) => c.info.type !== "code-box").map((c) => ({
    info: {
      type: "challenge",
      title: c.info.title,
      asset: c.info.asset,
      state: "incomplete",
      hint: { text: "", isUsed: false },
      education: { topic: "", commonCore: [] },
    },
    intro: {
      character: c.intro.character,
      asset: c.intro.asset,
      dialogue: { incomplete: "", complete: "" },
    },
    activity: {
      ...structuredClone(template.activity),
      info: { ...structuredClone(template.activity.info), asset: c.activity?.info?.asset && typeof c.activity.info.asset === "string" ? c.activity.info.asset : c.info.asset },
    },
    questions: blankMultipleChoice(),
  }));
  const codeBox = source.challengeArray.find((c) => c.info.type === "code-box") ?? {
    info: { type: "code-box", asset: "node-background-codeBox.png", title: "Code Box", state: "incomplete" },
    content: { codeBox: null },
  };
  return {
    info: { title: source.info.title, path: theme, logo: PLACEHOLDER_THUMB, timerLabel: source.info.timerLabel },
    challengeArray: [...challenges, structuredClone(codeBox)],
  };
}

function blankMultipleChoice() {
  return {
    info: { type: "multiple-choice" },
    contentArray: [1, 2, 3, 4].map((n) => ({ title: `[<g>${n}.] `, correctIndex: 0, paragraph: ["", "", ""] })),
    code: { answer: "", userArray: ["", "", "", ""] },
  };
}

function gradeLabel(grades) {
  const ord = (n) => ({ 1: "1st", 2: "2nd", 3: "3rd" })[n] ?? `${n}th`;
  return grades.map(ord).join("");
}

// ------------------------------------------------------------------ API

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const text = Buffer.concat(chunks).toString("utf8");
  return text ? JSON.parse(text) : {};
}

const api = {
  "GET /api/bootstrap": () => ({
    tokens: cached("tokens", () => readStyleTokens(repoRoot)),
    templates: cached("templates", () => readTemplates(repoRoot)),
    themes: themeDirs(repoRoot),
    global: globalAssets(repoRoot),
    colors: THUMB_COLORS,
    placeholder: PLACEHOLDER_THUMB,
  }),

  "GET /api/standards": () => cached("standards", () => knownStandards(repoRoot)),

  "GET /api/rooms": () => {
    const statuses = roomStatuses(repoRoot);
    return roomFiles(repoRoot).map((rel) => roomSummary(rel, statuses));
  },

  "GET /api/room": (_, url) => roomPayload(requireRoomPath(url.searchParams.get("path"))),

  "GET /api/theme": (_, url) => {
    const theme = url.searchParams.get("theme");
    if (!themeDirs(repoRoot).includes(theme)) throw httpError(404, "Unknown theme.");
    return themeAssets(repoRoot, theme);
  },

  "PUT /api/room": async (req) => {
    const { path: rel, resource } = await readBody(req);
    requireRoomPath(rel);
    const abs = safeJoin(rel);
    let prelude = AI_STANDARDS_NOTE;
    if (existsSync(abs)) prelude = loadRoom(abs).prelude;
    saveRoom(abs, resource, prelude);
    invalidate();
    const issues = validateRoom(resource, themeContext(rel.split("/")[1]));
    return { ok: true, issues };
  },

  "POST /api/new-room": async (req) => {
    const { theme, subject, dir, stem, grades } = await readBody(req);
    if (!themeDirs(repoRoot).includes(theme)) throw httpError(400, "Pick a theme.");
    if (!/^[a-z-]+$/.test(subject)) throw httpError(400, "Pick a subject.");
    if (!/^[A-Za-z0-9-]+$/.test(dir) || !/^[A-Za-z0-9]+$/.test(stem)) throw httpError(400, "Topic folder and file name may only use letters, numbers and dashes.");
    if (!Array.isArray(grades) || grades.length === 0) throw httpError(400, "Pick at least one grade.");
    const rel = requireRoomPath(`resource/${theme}/topic/${subject}/${dir}/${stem}_${gradeLabel(grades)}Grade.js`);
    if (existsSync(safeJoin(rel))) throw httpError(409, `${rel} already exists — open it from the room list instead.`);
    const resource = scaffoldRoom(theme, subject);
    saveRoom(safeJoin(rel), resource);
    invalidate();
    return { path: rel };
  },

  "POST /api/catalog": async (req) => {
    const { action, path: rel, meta, skills } = await readBody(req);
    requireRoomPath(rel);
    let result = {};
    if (action === "register") result = registerRoom(repoRoot, rel, meta);
    else if (action === "make-live") makeLive(repoRoot, rel);
    else if (action === "hide") hide(repoRoot, rel);
    else if (action === "clear-new") clearNew(repoRoot, rel);
    else if (action === "sync-skills") setSkills(repoRoot, rel, skills);
    else if (action !== "exports") throw httpError(400, `Unknown action ${action}`);
    const exportLog = runExports(repoRoot);
    invalidate();
    return { ...result, exportLog, room: roomPayload(rel) };
  },

  // Saves a dropped PNG as the room's branding thumbnail and points the room
  // (info.logo) and its catalog entry (thumbnail) at it.
  "POST /api/thumbnail": async (req) => {
    const { path: rel, target, dataUrl } = await readBody(req);
    requireRoomPath(rel);
    if (!BRANDING_PATH.test(target) || target.includes("..")) throw httpError(400, "Thumbnail must live under the theme's assets/branding folder.");
    const m = /^data:image\/png;base64,(.+)$/.exec(dataUrl ?? "");
    if (!m) throw httpError(400, "Thumbnail must be a PNG.");
    const abs = safeJoin(target);
    mkdirSync(path.dirname(abs), { recursive: true });
    writeFileSync(abs, Buffer.from(m[1], "base64"));

    const roomAbs = safeJoin(rel);
    const { resource, prelude } = loadRoom(roomAbs);
    resource.info.logo = target;
    saveRoom(roomAbs, resource, prelude);
    if (roomStatuses(repoRoot).byPath.has(rel)) setCatalogThumbnail(repoRoot, rel, target);
    invalidate();
    return { room: roomPayload(rel) };
  },
};

// ------------------------------------------------------------------ static

function serveStatic(url, res) {
  let rel = decodeURIComponent(url.pathname);
  if (rel === "/" || rel === "/editor") { res.writeHead(302, { Location: "/editor/" }); return res.end(); }
  let abs;
  if (rel.startsWith("/editor/lib/")) abs = path.join(toolRoot, "lib", rel.slice("/editor/lib/".length));
  else if (rel.startsWith("/editor/")) abs = path.join(toolRoot, "public", rel.slice("/editor/".length) || "index.html");
  else abs = path.resolve(repoRoot, "." + rel);
  if (!abs.startsWith(repoRoot + path.sep)) { res.writeHead(403); return res.end(); }
  if (existsSync(abs) && statSync(abs).isDirectory()) abs = path.join(abs, "index.html");
  if (!existsSync(abs)) { res.writeHead(404); return res.end("Not found"); }
  const ext = path.extname(abs).toLowerCase();
  // Code and pages are always re-read so the preview picks up edits; media can cache briefly.
  const fresh = [".html", ".js", ".mjs", ".css", ".json"].includes(ext);
  res.writeHead(200, {
    "Content-Type": MIME[ext] ?? "application/octet-stream",
    "Cache-Control": fresh ? "no-store" : "max-age=300",
  });
  res.end(readFileSync(abs));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const handler = api[`${req.method} ${url.pathname}`];
  if (!handler) {
    if (url.pathname.startsWith("/api/")) { res.writeHead(404); return res.end("{}"); }
    try { return serveStatic(url, res); } catch (err) { res.writeHead(500); return res.end(String(err)); }
  }
  try {
    const result = await handler(req, url);
    res.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store" });
    res.end(JSON.stringify(result));
  } catch (err) {
    res.writeHead(err.status ?? 500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(PORT, "127.0.0.1", () => {
  const address = `http://localhost:${PORT}/editor/`;
  console.log(`Escape Room Editor running at ${address}`);
  console.log("Leave this window open while you work. Close it (or press Ctrl+C) to stop.");
  if (process.argv.includes("--open")) exec(`open ${address}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`The editor is already running — opening http://localhost:${PORT}/editor/`);
    if (process.argv.includes("--open")) exec(`open http://localhost:${PORT}/editor/`);
    process.exit(0);
  }
  throw err;
});
