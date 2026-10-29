// DingoEdit UI. Vanilla JS, no build step.
//
// State lives in `state`; the working copy of the room is `state.resource`.
// Inputs write straight into that object and call changed(), which re-validates,
// refreshes the sidebar/top bar, and schedules a live-preview refresh. Panels are
// only rebuilt (render*) on structural changes so typing never loses focus.

import {
  validateRoom, deriveCode, mcLetters, parseCrosswordCell, formatCrosswordCell, crosswordWords,
} from "/editor/lib/validate.mjs";

// ===================================================================== state

const state = {
  boot: null,          // tokens, templates, themes, global assets, colors
  rooms: [],           // room summaries for the browser
  standards: [],
  room: null,          // payload from /api/room (path, status, code, game, defaults)
  resource: null,      // working copy being edited
  assets: null,        // current theme's asset lists
  sel: "room",         // "room" | "ship" | challenge index
  tab: "intro",
  dirty: false,
  issues: [],
  previewMode: "challenge",
  filter: { text: "", status: "all" },
  mode: readPref("mode", "writer"),
};

function readPref(key, fallback) {
  try { return localStorage.getItem(`roomEditor.${key}`) ?? fallback; } catch { return fallback; }
}
function writePref(key, value) {
  try { localStorage.setItem(`roomEditor.${key}`, value); } catch { /* preference only */ }
}

const $ = (id) => document.getElementById(id);
const isAdmin = () => state.mode === "admin";
const theme = () => state.room?.theme;
const challenges = () => state.resource?.challengeArray ?? [];
const isLegacy = () => state.room?.status === "legacy";

// ===================================================================== DOM helper

function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(props ?? {})) {
    if (v === undefined || v === null || v === false) continue;
    if (k === "class") el.className = Array.isArray(v) ? v.filter(Boolean).join(" ") : v;
    else if (k === "text") el.textContent = v;
    else if (k === "html") el.innerHTML = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === "value") el.value = v;
    else if (k === "checked" || k === "disabled" || k === "selected" || k === "readOnly") el[k] = v;
    else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const c of children.flat(Infinity)) {
    if (c === null || c === undefined || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

const clone = (v) => (v === undefined ? v : JSON.parse(JSON.stringify(v)));

// replaceChildren that accepts the same nested arrays / skipped values as h().
function fill(el, ...children) {
  el.replaceChildren(...children.flat(Infinity).filter((c) => c !== null && c !== undefined && c !== false));
}

function humanize(key) {
  return String(key).replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());
}

function field(label, control, help) {
  return h("div", { class: "field" }, h("span", { class: "field-label", text: label }), control, help && h("span", { class: "field-help", text: help }));
}

function button(text, onClick, cls = "") {
  return h("button", { class: `btn ${cls}`, type: "button", onClick, text });
}

// Text input bound to obj[key]. `toView`/`fromView` translate for display.
function bindText(obj, key, { multiline = false, rows = 3, placeholder = "", toView = (v) => v ?? "", fromView = (v) => v, markup = false, cls = "", quiet = false } = {}) {
  const el = multiline
    ? h("textarea", { rows, placeholder, class: cls })
    : h("input", { type: "text", placeholder, class: cls });
  el.value = toView(obj[key]);
  el.addEventListener("input", () => { obj[key] = fromView(el.value); if (!quiet) changed(); });
  return markup ? h("div", { class: "markup-field" }, markupToolbar(el), el) : el;
}

function withInput(el, fn) {
  el.addEventListener("input", fn);
  return el;
}

function bindNumber(obj, key, { step = 1, unit = "" } = {}) {
  const el = h("input", { type: "number", step, class: "num" });
  const read = () => parseFloat(String(obj[key] ?? "0")) || 0;
  el.value = read();
  el.addEventListener("input", () => {
    const n = el.value === "" ? 0 : Number(el.value);
    obj[key] = unit ? `${n}${unit}` : n;
    changed();
  });
  return el;
}

function bindSelect(obj, key, options, { allowNone = false, onSet, quiet = false } = {}) {
  const el = h("select", {},
    allowNone && h("option", { value: "", text: "—" }),
    options.map((o) => {
      const [value, label] = Array.isArray(o) ? o : [o, o];
      return h("option", { value, text: label });
    }));
  el.value = obj[key] ?? "";
  if (!allowNone && obj[key] !== undefined && !options.some((o) => (Array.isArray(o) ? o[0] : o) === obj[key])) {
    el.prepend(h("option", { value: obj[key], text: `${obj[key]} (unknown)` }));
    el.value = obj[key];
  }
  el.addEventListener("change", () => {
    if (el.value === "" && allowNone) delete obj[key];
    else obj[key] = el.value;
    onSet?.(el.value);
    if (!quiet) changed();
  });
  return el;
}

// ===================================================================== text helpers

// Writers see real line breaks; the file stores <br>.
const brToLines = (v) => String(v ?? "").replace(/\s*<br\s*\/?>\s*/gi, "\n");
const linesToBr = (v) => v.replace(/\n/g, "<br>");

const MARKUP = [
  ["Highlight", "hi", "hl"], ["Red", "sal", "red"], ["Underline", "u", "ul"], ["Italic", "i", "it"], ["Gold", "g", "gold"],
];

function markupToolbar(target) {
  const wrap = (code) => {
    const { selectionStart: s, selectionEnd: e, value } = target;
    const inner = value.slice(s, e) || "text";
    target.value = `${value.slice(0, s)}[<${code}>${inner}]${value.slice(e)}`;
    target.focus();
    target.setSelectionRange(s + code.length + 3, s + code.length + 3 + inner.length);
    target.dispatchEvent(new Event("input"));
  };
  const indent = () => {
    const { selectionStart: s, value } = target;
    const lineStart = value.lastIndexOf("\n", s - 1) + 1;
    target.value = `${value.slice(0, lineStart)}&nbsp;&nbsp; ${value.slice(lineStart)}`;
    target.dispatchEvent(new Event("input"));
  };
  return h("div", { class: "markup-bar" },
    MARKUP.map(([label, code, cls]) => h("button", { type: "button", class: `mk mk-${cls}`, title: `[<${code}>…]`, text: label, onClick: () => wrap(code) })),
    h("button", { type: "button", class: "mk", title: "Indent this paragraph (&nbsp;&nbsp;)", text: "Indent", onClick: indent }));
}

// Plain text + index of the code letter <-> stored string with {x} / [x] marker.
function splitMarked(str, open, close) {
  const s = String(str ?? "");
  const re = open === "{" ? /\{(\w)\}/ : /\[(.)\]/;
  const m = s.match(re);
  if (!m) return { plain: s, idx: -1 };
  return { plain: s.slice(0, m.index) + m[1] + s.slice(m.index + 3), idx: m.index };
}
function joinMarked(plain, idx, open, close) {
  if (!plain) return "";
  if (idx < 0 || idx >= plain.length) return plain;
  return `${plain.slice(0, idx)}${open}${plain[idx]}${close}${plain.slice(idx + 1)}`;
}
// A sensible default code letter: middle of the first word with 3+ letters.
function defaultLetter(plain) {
  const word = [...plain.matchAll(/[A-Za-z]{3,}/g)][0];
  if (word) return word.index + Math.floor(word[0].length / 2);
  const any = plain.search(/[A-Za-z]/);
  return any;
}
function nearestLetter(plain, idx) {
  if (idx >= 0 && idx < plain.length && /[A-Za-z0-9]/.test(plain[idx])) return idx;
  for (let d = 1; d < plain.length; d++) {
    for (const j of [idx - d, idx + d]) if (j >= 0 && j < plain.length && /[A-Za-z0-9]/.test(plain[j])) return j;
  }
  return defaultLetter(plain);
}

// Text box + clickable letter strip that places the code-letter marker.
function codeLetterInput(get, set, { open = "{", close = "}", placeholder = "", highlight = false } = {}) {
  let { plain, idx } = splitMarked(get(), open, close);
  const input = h("input", { type: "text", value: plain, placeholder });
  const strip = h("div", { class: "letter-strip" });
  const drawStrip = () => {
    fill(strip, ...[...plain].map((ch, j) =>
      /[A-Za-z0-9]/.test(ch)
        ? h("button", { type: "button", class: ["letter", j === idx && "on", j === idx && highlight && "code"], text: ch, title: "Make this the code letter", onClick: () => { idx = j; commit(); } })
        : h("span", { class: "letter-gap", text: ch === " " ? "·" : ch })));
  };
  const commit = () => { set(joinMarked(plain, idx, open, close)); drawStrip(); changed(); };
  input.addEventListener("input", () => {
    plain = input.value;
    idx = plain ? (idx < 0 ? defaultLetter(plain) : nearestLetter(plain, Math.min(idx, plain.length - 1))) : -1;
    commit();
  });
  drawStrip();
  return h("div", { class: "code-letter-input" }, input, strip);
}

// ===================================================================== API

async function api(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `${method} ${url} failed (${res.status})`);
  return data;
}

function toast(message, kind = "info") {
  const el = h("div", { class: `toast toast-${kind}`, text: message });
  $("toast-root").append(el);
  setTimeout(() => el.classList.add("out"), kind === "error" ? 6000 : 2600);
  setTimeout(() => el.remove(), kind === "error" ? 6600 : 3200);
}

async function guarded(fn) {
  try { return await fn(); } catch (err) { toast(err.message, "error"); console.error(err); }
}

// ===================================================================== change pipeline

let validateTimer;
function changed({ structural = false } = {}) {
  state.dirty = true;
  if (structural) renderEditor();
  clearTimeout(validateTimer);
  validateTimer = setTimeout(() => {
    revalidate();
    renderTopbar();
    renderSidebar();
  }, 120);
  schedulePreview();
}

function revalidate() {
  if (!state.resource || !state.boot) { state.issues = []; return; }
  // Code words follow the code letters automatically.
  for (const c of challenges()) if (c.questions) syncCode(c.questions);
  state.issues = validateRoom(state.resource, { tokens: state.boot.tokens, assets: state.assets, global: state.boot.global });
}

function syncCode(q) {
  const derived = deriveCode(q);
  if (!derived || derived.includes("?")) return;
  q.code ??= {};
  if (q.code.answer !== derived || (q.code.userArray ?? []).length !== derived.length) {
    q.code.answer = derived;
    q.code.userArray = Array(derived.length).fill("");
  }
}

// ===================================================================== preview

const FRAME_W = 1280;
const FRAME_H = 800;
let previewTimer;
let previewNonce = 0;
let previewStatus = "";

function schedulePreview(delay = 700) {
  clearTimeout(previewTimer);
  previewTimer = setTimeout(reloadPreview, delay);
}

function reloadPreview() {
  if (!state.resource) return;
  previewNonce++;
  setPreviewStatus("Rendering…");
  $("preview-frame").src = `/preview.html?editor=1&n=${previewNonce}`;
}

function previewChallengeIndex() {
  if (state.previewMode === "map" || typeof state.sel !== "number") return null;
  return state.sel;
}

window.addEventListener("message", (event) => {
  if (event.origin !== location.origin) return;
  const frame = $("preview-frame");
  if (event.source !== frame.contentWindow) return;
  const { type } = event.data ?? {};
  if (type === "ready") {
    frame.contentWindow.postMessage({
      type: "room",
      resource: clone(state.resource),
      theme: theme(),
      challengeIndex: previewChallengeIndex(),
      view: { intro: "scene", activity: "activity", questions: "questions", raw: "activity" }[state.tab] ?? "scene",
    }, location.origin);
  } else if (type === "rendered") {
    setPreviewStatus("");
  } else if (type === "preview-error") {
    // Usually unfinished content (e.g. a blank code word); it clears once filled in.
    setPreviewStatus(`Preview problem — usually unfinished content, and it clears once the challenge is filled in. (${event.data.message})`, true);
  }
});

function setPreviewStatus(text, isError = false) {
  previewStatus = text;
  const el = $("preview-status");
  el.textContent = text;
  el.className = `preview-status ${isError ? "error" : ""}`;
}

function fitPreview() {
  const stage = $("preview-stage");
  const frame = $("preview-frame");
  const scale = Math.min(stage.clientWidth / FRAME_W, stage.clientHeight / FRAME_H);
  frame.style.width = `${FRAME_W}px`;
  frame.style.height = `${FRAME_H}px`;
  const top = Math.max(0, (stage.clientHeight - FRAME_H * scale) / 2);
  const left = Math.max(0, (stage.clientWidth - FRAME_W * scale) / 2);
  frame.style.transform = `translate(${left}px, ${top}px) scale(${scale})`;
}
window.addEventListener("resize", fitPreview);

function renderPreviewToolbar() {
  const bar = $("preview-toolbar");
  if (!state.resource) { fill(bar, h("span", { class: "muted", text: "Open a room to see it here." })); return; }
  const seg = (mode, label) => h("button", {
    type: "button", class: ["seg", state.previewMode === mode && "on"], text: label,
    onClick: () => { state.previewMode = mode; renderPreviewToolbar(); reloadPreview(); },
  });
  fill(bar, 
    h("div", { class: "segmented" }, seg("challenge", "Selected challenge"), seg("map", "Map")),
    button("Reload", reloadPreview, "btn-quiet"),
    state.room?.gameId && h("a", { class: "btn btn-quiet", href: `/preview.html?game=${encodeURIComponent(state.room.gameId)}`, target: "_blank", text: "Open full preview ↗", title: "Plays the saved file, from the title screen" }),
  );
}

// ===================================================================== top bar

function renderTopbar() {
  const roomEl = $("topbar-room");
  const actions = $("topbar-actions");
  const modeToggle = h("div", { class: "segmented mode" },
    ["writer", "admin"].map((m) => h("button", {
      type: "button", class: ["seg", state.mode === m && "on"], text: m === "writer" ? "Writer" : "Admin",
      title: m === "admin" ? "Shows catalog and go-live controls" : "Content editing only",
      onClick: () => { state.mode = m; writePref("mode", m); renderAll(); },
    })));
  if (!state.room) {
    fill(roomEl);
    fill(actions, modeToggle);
    return;
  }
  const errors = state.issues.filter((i) => i.level === "error").length;
  const warnings = state.issues.length - errors;
  fill(roomEl, 
    h("span", { class: "topbar-title", text: state.resource?.info?.title ?? state.room.theme }),
    h("span", { class: "topbar-file", text: state.room.file }),
    statusChip(state.room.status),
    state.room.code && h("span", { class: "code-chip", title: "Game code players type", text: `Code ${state.room.code}` }),
  );
  fill(actions, 
    h("button", {
      type: "button",
      class: ["issue-badge", errors ? "bad" : warnings ? "warn" : "good"],
      text: errors ? `${errors} to fix` : warnings ? `${warnings} note${warnings > 1 ? "s" : ""}` : "All checks pass",
      onClick: () => openIssues(),
    }),
    !isLegacy() && h("button", {
      type: "button", class: ["btn", "btn-primary", !state.dirty && "saved"], disabled: !state.dirty,
      text: state.dirty ? "Save" : "Saved", onClick: () => guarded(save),
    }),
    modeToggle,
  );
}

const STATUS_LABEL = { draft: "Draft", hidden: "Hidden", new: "Live · New", live: "Live", legacy: "Legacy" };
function statusChip(status) {
  return h("span", { class: `status status-${status}`, text: STATUS_LABEL[status] ?? status });
}

// ===================================================================== sidebar

function renderSidebar() {
  const sb = $("sidebar");
  if (!state.room) { fill(sb, roomBrowser()); return; }
  const counts = (i) => state.issues.filter((x) => x.challenge === i && x.level === "error").length;
  const roomErrors = state.issues.filter((x) => x.challenge === null && x.level === "error").length;
  const item = (sel, label, extra, opts = {}) => h("div", {
    class: ["nav-item", state.sel === sel && "on", opts.muted && "muted"],
    onClick: opts.muted ? null : () => select(sel),
  }, h("span", { class: "nav-label", text: label }), extra);

  const list = challenges().map((c, i) => {
    if (c.info?.type === "code-box") return item(`box${i}`, "Code box", h("span", { class: "nav-note", text: "automatic" }), { muted: true });
    const n = counts(i);
    return h("div", { class: ["nav-item", "nav-challenge", state.sel === i && "on"], onClick: () => select(i) },
      h("span", { class: "nav-num", text: i + 1 }),
      h("span", { class: "nav-label", text: c.info?.title || "Untitled" }),
      h("span", { class: "nav-type", text: questionTypeLabel(c) }),
      n ? h("span", { class: "nav-errors", text: n }) : h("span", { class: "nav-ok", text: "✓" }),
    );
  });

  fill(sb, 
    h("button", { type: "button", class: "back", text: "← All rooms", onClick: () => guarded(closeRoom) }),
    item("room", "Room settings", roomErrors ? h("span", { class: "nav-errors", text: roomErrors }) : null),
    h("div", { class: "nav-heading", text: "Challenges" }),
    list,
    !isLegacy() && h("div", { class: "nav-actions" },
      button("+ Add challenge", addChallenge, "btn-quiet btn-small")),
    isAdmin() && !isLegacy() && [h("div", { class: "nav-heading", text: "Publishing" }), item("ship", "Catalog & go live", statusChip(state.room.status))],
  );
}

function questionTypeLabel(c) {
  return { "multiple-choice": "MC", crossword: "Crossword", decoder: "Decoder" }[c.questions?.info?.type] ?? "";
}

function roomBrowser() {
  const { text, status } = state.filter;
  const q = text.trim().toLowerCase();
  const rooms = state.rooms.filter((r) =>
    (status === "all" || r.status === status) &&
    (!q || `${r.theme} ${r.title} ${r.file} ${r.code ?? ""}`.toLowerCase().includes(q)));
  const byTheme = new Map();
  for (const r of rooms) {
    if (!byTheme.has(r.theme)) byTheme.set(r.theme, []);
    byTheme.get(r.theme).push(r);
  }
  const search = h("input", { type: "search", placeholder: "Search rooms, files or codes", value: text });
  search.addEventListener("input", () => { state.filter.text = search.value; renderBrowserList(); });
  const statusSel = h("select", {},
    [["all", "All statuses"], ["draft", "Drafts"], ["hidden", "Hidden"], ["new", "Live · New"], ["live", "Live"], ["legacy", "Legacy"]]
      .map(([v, l]) => h("option", { value: v, text: l })));
  statusSel.value = status;
  statusSel.addEventListener("change", () => { state.filter.status = statusSel.value; renderBrowserList(); });

  const listEl = h("div", { class: "room-list", id: "room-list" },
    [...byTheme.entries()].map(([t, rs]) => h("details", { class: "theme-group", open: !!q || status !== "all" || rs.some((r) => r.status === "draft" || r.status === "hidden") },
      h("summary", {}, h("span", { text: rs[0].title }), h("span", { class: "count", text: rs.length })),
      rs.map((r) => h("div", { class: "room-row", onClick: () => guarded(() => openRoom(r.path)) },
        h("span", { class: "room-file", text: r.file }),
        statusChip(r.status),
        r.code && h("span", { class: "room-code", text: r.code }),
      )))),
    rooms.length === 0 && h("p", { class: "muted pad", text: "No rooms match." }));

  return h("div", { class: "browser" },
    h("button", { type: "button", class: "btn btn-primary btn-block", text: "+ New room", onClick: openNewRoomWizard }),
    h("div", { class: "browser-filters" }, search, statusSel),
    listEl);
}

function renderBrowserList() {
  const fresh = roomBrowser();
  fill($("sidebar"), fresh);
  const input = fresh.querySelector("input[type=search]");
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
}

function select(sel) {
  state.sel = sel;
  if (typeof sel === "number" && !["intro", "activity", "questions", "raw"].includes(state.tab)) state.tab = "intro";
  renderSidebar();
  renderEditor();
  reloadPreview();
}

// ===================================================================== rooms

async function loadRooms() {
  state.rooms = await api("GET", "/api/rooms");
}

async function openRoom(path) {
  if (state.dirty && !confirm("You have unsaved changes. Discard them?")) return;
  const room = await api("GET", `/api/room?path=${encodeURIComponent(path)}`);
  state.room = room;
  state.resource = room.resource;
  state.assets = await api("GET", `/api/theme?theme=${encodeURIComponent(room.theme)}`);
  state.dirty = false;
  const first = challenges().findIndex((c) => c.info?.type !== "code-box");
  state.sel = isLegacy() ? "room" : first >= 0 ? first : "room";
  state.tab = "intro";
  revalidate();
  writePref("lastRoom", path);
  history.replaceState(null, "", `#${encodeURIComponent(path)}`);
  renderAll();
  reloadPreview();
}

async function closeRoom() {
  if (state.dirty && !confirm("You have unsaved changes. Discard them?")) return;
  state.room = null;
  state.resource = null;
  state.dirty = false;
  state.issues = [];
  history.replaceState(null, "", location.pathname);
  await loadRooms();
  renderAll();
  $("preview-frame").removeAttribute("src");
  setPreviewStatus("");
}

async function save() {
  revalidate();
  const { issues } = await api("PUT", "/api/room", { path: state.room.path, resource: state.resource });
  state.dirty = false;
  state.issues = issues;
  const errors = issues.filter((i) => i.level === "error").length;
  toast(errors ? `Saved — ${errors} thing${errors > 1 ? "s" : ""} still to fix before it can go live.` : "Saved.", errors ? "warn" : "ok");
  renderTopbar();
  renderSidebar();
  if (state.sel === "ship") renderEditor();
}

// ===================================================================== editor panel

function renderEditor() {
  const ed = $("editor");
  const scroll = ed.scrollTop;
  if (!state.room) { fill(ed, welcome()); return; }
  let body;
  if (isLegacy()) body = legacyPanel();
  else if (state.sel === "room") body = roomPanel();
  else if (state.sel === "ship") body = shipPanel();
  else if (typeof state.sel === "number" && challenges()[state.sel]) body = challengePanel(state.sel);
  else body = roomPanel();
  fill(ed, body);
  ed.scrollTop = scroll;
}

function welcome() {
  return h("div", { class: "welcome" },
    h("h1", { text: "DingoEdit" }),
    h("p", { text: "Open a room on the left, or start a new one. Everything you type shows up in the preview on the right, rendered by the real game." }),
    h("ol", {},
      h("li", { text: "Write each challenge: who the character is, what they say, the documents to read, and the questions." }),
      h("li", { text: "Click letters in the answers to choose the code word — the editor keeps it in sync." }),
      h("li", { text: "Fix anything flagged in red, then Save." })),
    h("p", { class: "muted", text: "Saved rooms are written straight into the project folder." }));
}

function legacyPanel() {
  return h("div", { class: "panel" },
    h("h2", { text: "Legacy room (read-only)" }),
    h("p", { text: "This room uses the older activityArray format, which the editor doesn't edit. The preview on the right still shows its map." }),
    h("textarea", { class: "raw", rows: 30, readOnly: true, value: JSON.stringify(state.resource, null, 2) }));
}

// ---------------------------------------------------------------- room settings

function roomPanel() {
  const info = state.resource.info ??= {};
  const roomIssues = state.issues.filter((i) => i.challenge === null);
  return h("div", { class: "panel" },
    h("h2", { text: "Room settings" }),
    field("Room title", bindText(info, "title"), "Shown on the title screen. Normally the theme's name."),
    field("Timer label", bindText(info, "timerLabel"), "The countdown caption, e.g. YETI AWAKES."),
    field("File", h("code", { class: "path", text: state.room.path })),
    field("Logo / thumbnail", h("div", { class: "logo-row" },
      h("img", { class: "logo-thumb", src: `/${info.logo}`, alt: "" }),
      h("code", { class: "path", text: info.logo ?? "" })),
      isAdmin() ? "Set the real thumbnail from Catalog & go live." : "An admin adds the final thumbnail."),
    issueList(roomIssues, "Room checks"));
}

// ---------------------------------------------------------------- challenge

function challengePanel(i) {
  const c = challenges()[i];
  const tabs = [["intro", "Intro"], ["activity", "Activity"], ["questions", "Questions"], ["raw", "Raw"]];
  const errorsIn = (tab) => state.issues.filter((x) => x.challenge === i && x.tab === tab && x.level === "error").length;
  return h("div", { class: "panel" },
    h("div", { class: "challenge-head" },
      h("h2", { text: c.info?.title || `Challenge ${i + 1}` }),
      h("div", { class: "challenge-tools" },
        button("↑", () => moveChallenge(i, -1), "btn-quiet btn-small"),
        button("↓", () => moveChallenge(i, 1), "btn-quiet btn-small"),
        button("Delete", () => deleteChallenge(i), "btn-quiet btn-small btn-danger"))),
    h("div", { class: "tabs" }, tabs.map(([t, label]) => {
      const n = errorsIn(t);
      return h("button", { type: "button", class: ["tab", state.tab === t && "on"], onClick: () => { state.tab = t; renderEditor(); reloadPreview(); } },
        label, n ? h("span", { class: "tab-errors", text: n }) : null);
    })),
    state.tab === "intro" ? introTab(c)
      : state.tab === "activity" ? activityTab(c)
      : state.tab === "questions" ? questionsTab(c)
      : rawTab(i),
    issueList(state.issues.filter((x) => x.challenge === i && (x.tab === state.tab || state.tab === "raw")), "Checks for this tab"));
}

function issueList(issues, title) {
  if (!issues.length) return null;
  return h("div", { class: "issues" },
    h("div", { class: "issues-title", text: title }),
    issues.map((x) => h("div", { class: `issue issue-${x.level}`, text: x.message })));
}

function addChallenge() {
  const list = challenges();
  const at = list.findIndex((c) => c.info?.type === "code-box");
  const insert = at < 0 ? list.length : at;
  const base = typeof state.sel === "number" ? list[state.sel] : list.find((c) => c.info?.type !== "code-box");
  const fresh = {
    info: {
      type: "challenge", title: "New challenge", asset: base?.info?.asset ?? "", state: "incomplete",
      hint: { text: "", isUsed: false }, education: { topic: "", commonCore: [] },
    },
    intro: { character: base?.intro?.character ?? "", asset: base?.intro?.asset ?? "", dialogue: { incomplete: "", complete: "" } },
    activity: blankActivity(base?.activity?.info?.asset),
    questions: blankQuestions("multiple-choice"),
  };
  list.splice(insert, 0, fresh);
  state.sel = insert;
  state.tab = "intro";
  changed({ structural: true });
  renderSidebar();
}

function moveChallenge(i, dir) {
  const list = challenges();
  const j = i + dir;
  if (j < 0 || j >= list.length || list[j].info?.type === "code-box") return;
  [list[i], list[j]] = [list[j], list[i]];
  state.sel = j;
  changed({ structural: true });
  renderSidebar();
}

function deleteChallenge(i) {
  if (!confirm(`Delete "${challenges()[i].info?.title}"? This can't be undone after you save.`)) return;
  challenges().splice(i, 1);
  state.sel = "room";
  changed({ structural: true });
  renderSidebar();
}

// ---------------------------------------------------------------- intro tab

function assetUrl(kind, file) {
  if (!file) return "";
  if (kind === "columnSort") return `/assets/activity/columnSort/${file}`;
  if (["angle", "shape", "shape-partition"].includes(kind)) return `/assets/activity/math/${kind}/${file}`;
  return `/resource/${theme()}/assets/activity/${kind}/${file}`;
}

function assetFiles(kind) {
  if (state.boot.global[kind]) return state.boot.global[kind];
  return state.assets?.[kind] ?? [];
}

function assetPicker(obj, key, kind, { onSet } = {}) {
  const files = assetFiles(kind);
  const img = h("img", { class: "asset-thumb", alt: "" });
  const show = () => {
    if (obj[key]) { img.src = assetUrl(kind, obj[key]); img.hidden = false; } else img.hidden = true;
  };
  const sel = bindSelect(obj, key, files, { allowNone: true, onSet: () => { show(); onSet?.(); } });
  show();
  return h("div", { class: "asset-picker" }, sel, img,
    files.length === 0 && h("span", { class: "field-help", text: `No images in this theme's ${kind} folder.` }));
}

const HINTS = {
  "multiple-choice": (n) => `Read the passage, then answer the multiple-choice questions. The yellow letters, in order, spell out the secret ${n}-letter code word.`,
  crossword: (n) => `Answer the questions to fill in the crossword. The yellow letters, in order, spell out the secret ${n}-letter code word.`,
  decoder: (n) => `Answer each question, then fill in the missing letters. The yellow letters, in order, spell out the secret ${n}-letter code word.`,
};
const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six"];

function introTab(c) {
  c.info ??= {};
  c.intro ??= { dialogue: {} };
  c.intro.dialogue ??= {};
  c.info.hint ??= { text: "", isUsed: false };
  c.info.education ??= { topic: "", commonCore: [] };
  const hintArea = bindText(c.info.hint, "text", { multiline: true, rows: 3 });
  const suggestHint = () => {
    const type = c.questions?.info?.type;
    const len = String(c.questions?.code?.answer ?? "").length || 4;
    const textarea = hintArea.querySelector?.("textarea") ?? hintArea;
    textarea.value = (HINTS[type] ?? HINTS["multiple-choice"])(NUMBER_WORDS[len] ?? len);
    textarea.dispatchEvent(new Event("input"));
  };
  return h("div", { class: "tab-body" },
    h("div", { class: "grid-2" },
      field("Title on the map", bindText(c.info, "title", { placeholder: "e.g. Pippo's Cell" })),
      field("Map image", assetPicker(c.info, "asset", "node"))),
    h("div", { class: "grid-2" },
      field("Character", bindText(c.intro, "character", { placeholder: "e.g. Pippo Fizzlepop" })),
      field("Character image", assetPicker(c.intro, "asset", "character"))),
    field("What they say first", bindText(c.intro.dialogue, "incomplete", { multiline: true, rows: 3 }), "Shown before the challenge is solved."),
    field("What they say after", bindText(c.intro.dialogue, "complete", { multiline: true, rows: 2 }), "Shown once the code is cracked."),
    field("Skill (shown to teachers)", bindText(c.info.education, "topic", { placeholder: "e.g. Context Clues as Definitions" })),
    field("Common Core standards", standardsEditor(c.info.education)),
    field("Hint", h("div", {}, hintArea, button("Use the standard hint", suggestHint, "btn-quiet btn-small"))));
}

function standardsEditor(education) {
  if (!Array.isArray(education.commonCore)) education.commonCore = [];
  const list = education.commonCore;
  const chips = h("div", { class: "chips" });
  const draw = () => fill(chips, ...list.map((code, k) =>
    h("span", { class: "chip" }, typeof code === "string" ? code : JSON.stringify(code),
      h("button", { type: "button", class: "chip-x", text: "×", title: "Remove", onClick: () => { list.splice(k, 1); draw(); changed(); } }))));
  const input = h("input", { type: "text", list: "standards-list", placeholder: "Type a code (e.g. RL.3.2) and press Enter — paste several at once" });
  const add = () => {
    const codes = input.value.split(/[\s,;]+/).map((s) => s.trim()).filter(Boolean);
    for (const code of codes) if (!list.includes(code)) list.push(code);
    input.value = "";
    draw();
    changed();
  };
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); add(); } });
  input.addEventListener("change", () => { if (state.standards.includes(input.value.trim())) add(); });
  draw();
  return h("div", { class: "standards" }, chips, input);
}

// ---------------------------------------------------------------- activity tab

const STYLED = ["title", "subtitle", "passage", "fraction"];
const KIND_DEFAULTS = {
  title: { text: "" },
  subtitle: { text: "" },
  passage: { text: "" },
  image: { type: "theme", file: "" },
  backgroundImage: { file: "" },
  fraction: { text: "1/2" },
  numberLine: { measurement: { fraction: 4, dot: 1 }, label: { start: "0", end: "1" } },
  figure: { measurement: { width: 4, height: 3 }, label: { top: "", left: "" } },
  coordinatePlane: { key: [{ color: "salmon", image: "", text: "", coordinate: [1, 1] }] },
};
const KIND_LABEL = {
  title: "Title", subtitle: "Subtitle / author", passage: "Passage", image: "Image", backgroundImage: "Puzzle piece image",
  fraction: "Fraction", numberLine: "Number line", figure: "Figure", coordinatePlane: "Coordinate plane",
  cryptogram: "Cryptogram", dimension: "Size override",
};

function isPlaceholderText(s) {
  return /^\s*lorem\b|^\s*(N\/N|header|<asset>)\s*$/i.test(String(s));
}
function blankPlaceholders(v) {
  if (Array.isArray(v)) return v.map((x) => (typeof x === "string" && isPlaceholderText(x) ? "" : blankPlaceholders(x)));
  if (v && typeof v === "object") {
    for (const k of Object.keys(v)) {
      if (typeof v[k] === "string" && isPlaceholderText(v[k]) && k !== "asset") v[k] = k === "path" ? v[k] : "";
      else v[k] = blankPlaceholders(v[k]);
    }
  }
  return v;
}

function blankActivity(background) {
  const tpl = state.boot.templates.find((t) => t.name === "passage-medium + title (1x)") ?? state.boot.templates[0];
  const activity = blankPlaceholders(clone(tpl.activity));
  activity.info.asset = typeof background === "string" ? background : "";
  scatter(activity);
  return activity;
}

function activityTab(c) {
  c.activity ??= blankActivity();
  const a = c.activity;
  a.info ??= { type: "dynamic" };
  const dragDrop = a.info.functionality === "drag-and-drop";
  return h("div", { class: "tab-body" },
    h("div", { class: "activity-head" },
      h("div", {},
        h("strong", { text: `${(a.blockArray ?? []).length} block${(a.blockArray ?? []).length === 1 ? "" : "s"}` }),
        dragDrop && h("span", { class: "pill", text: (a.info.columnArray?.length ?? 0) > 1 ? "Sort into columns" : "Put in order" })),
      button("Start from a layout…", () => openTemplatePicker(c), "btn")),
    backgroundField(a),
    dragDrop && columnsEditor(a),
    h("div", { class: "blocks" }, (a.blockArray ?? []).map((b, bi) => blockCard(a, b, bi))),
    h("div", { class: "row" },
      button("+ Add block", () => addBlock(a), "btn-quiet"),
      button("Scatter blocks", () => { scatter(a); changed({ structural: true }); }, "btn-quiet"),
    ),
    stylesSection(a));
}

function backgroundField(a) {
  const bg = a.info.asset;
  if (bg && typeof bg === "object") {
    const kind = bg.scope === "global" ? "columnSort" : "local";
    return field("Background", assetPicker(bg, "path", kind), bg.scope === "global" ? "Shared column-sort background." : "From the theme's local folder.");
  }
  return field("Background", assetPicker(a.info, "asset", "background"));
}

function columnsEditor(a) {
  a.info.columnArray ??= [];
  const cols = a.info.columnArray;
  return field(cols.length > 1 ? "Column headers" : "Instruction above the list",
    h("div", { class: "columns-edit" },
      cols.map((_, k) => h("div", { class: "row" },
        withInput(bindText(cols, k, { placeholder: cols.length > 1 ? `Column ${k + 1}` : "e.g. Put the story in order:" }), () => refreshSortLabels(a)),
        cols.length > 1 && button("×", () => { cols.splice(k, 1); changed({ structural: true }); }, "btn-quiet btn-small"))),
      cols.length < 3 && button("+ Column", () => { cols.push(""); changed({ structural: true }); }, "btn-quiet btn-small")));
}

function blockCard(a, b, bi) {
  const blocks = a.blockArray;
  const dragDrop = a.info.functionality === "drag-and-drop";
  const cols = a.info.columnArray?.length ?? 0;
  b.contentArray ??= [];
  return h("div", { class: "card block-card" },
    h("div", { class: "card-head" },
      h("strong", { text: `Block ${bi + 1}` }),
      h("div", { class: "card-tools" },
        button("↑", () => moveItem(blocks, bi, -1), "btn-quiet btn-small"),
        button("↓", () => moveItem(blocks, bi, 1), "btn-quiet btn-small"),
        button("Duplicate", () => { blocks.splice(bi + 1, 0, clone(b)); changed({ structural: true }); }, "btn-quiet btn-small"),
        button("Delete", () => { blocks.splice(bi, 1); changed({ structural: true }); }, "btn-quiet btn-small btn-danger"))),
    b.tag
      ? field("Tag", h("div", { class: "row" }, bindText(b.tag, "text", { placeholder: "e.g. A" }), button("Remove tag", () => { delete b.tag; changed({ structural: true }); }, "btn-quiet btn-small")))
      : button("+ Tag", () => { b.tag = { text: "" }; changed({ structural: true }); }, "btn-quiet btn-small"),
    b.contentArray.map((item, j) => itemEditor(a, b, item, j)),
    button("+ Add item", () => { b.contentArray.push({ passage: { text: "" } }); ensureStyles(a); changed({ structural: true }); }, "btn-quiet btn-small"),
    dragDrop && cols > 1 && field("Sorts into", sortSelect(a, b)),
    b.style?.transform && transformRow(b.style.transform));
}

const columnLabel = (a, k) => a.info.columnArray[k] || `Column ${k + 1}`;

function sortSelect(a, b) {
  const el = bindSelect(b, "correctIndex", a.info.columnArray.map((_, k) => [String(k), columnLabel(a, k)]), {
    allowNone: true, onSet: (v) => { if (v !== "") b.correctIndex = Number(v); },
  });
  el.classList.add("sort-select");
  return el;
}

// Keeps every "Sorts into" dropdown in step with the column headers as they're typed.
function refreshSortLabels(a) {
  for (const sel of document.querySelectorAll(".sort-select")) {
    for (const opt of sel.options) if (opt.value !== "") opt.textContent = columnLabel(a, Number(opt.value));
  }
}

function moveItem(list, i, dir) {
  const j = i + dir;
  if (j < 0 || j >= list.length) return;
  [list[i], list[j]] = [list[j], list[i]];
  changed({ structural: true });
}

function transformRow(t) {
  return h("div", { class: "transform-row" },
    h("span", { class: "field-label", text: "Position" }),
    h("label", {}, "Left/right ", bindNumber(t, "translateX", { unit: "%" }), "%"),
    h("label", {}, "Up/down ", bindNumber(t, "translateY", { unit: "%" }), "%"),
    h("label", {}, "Tilt ", bindNumber(t, "rotate", { unit: "deg" }), "°"));
}

function itemEditor(a, b, item, j) {
  const kinds = Object.keys(item);
  const addable = Object.keys(KIND_LABEL).filter((k) => !kinds.includes(k) && k !== "dimension");
  const addSel = h("select", {}, h("option", { value: "", text: "+ Add to this item…" }), addable.map((k) => h("option", { value: k, text: KIND_LABEL[k] })));
  addSel.addEventListener("change", () => {
    const k = addSel.value;
    if (!k) return;
    item[k] = clone(kindDefault(k));
    ensureStyles(a);
    changed({ structural: true });
  });
  return h("div", { class: "item" },
    h("div", { class: "item-head" },
      h("span", { class: "item-label", text: b.contentArray.length > 1 ? `Item ${j + 1}` : "Content" }),
      b.contentArray.length > 1 && button("Remove item", () => { b.contentArray.splice(j, 1); changed({ structural: true }); }, "btn-quiet btn-small btn-danger")),
    kinds.map((k) => kindEditor(item, k)),
    addSel);
}

function kindDefault(kind) {
  for (const t of state.boot.templates) {
    for (const b of t.activity.blockArray ?? []) {
      for (const item of b.contentArray ?? []) {
        if (item[kind] !== undefined) return blankPlaceholders(clone(item[kind]));
      }
    }
  }
  return KIND_DEFAULTS[kind] ?? {};
}

function kindEditor(item, kind) {
  const v = item[kind];
  const remove = h("button", { type: "button", class: "btn btn-quiet btn-small", text: "×", title: `Remove ${KIND_LABEL[kind] ?? kind}`, onClick: () => { delete item[kind]; changed({ structural: true }); } });
  const head = h("div", { class: "kind-head" }, h("span", { class: "kind-label", text: KIND_LABEL[kind] ?? humanize(kind) }), remove);
  let body;
  if (kind === "passage" && v && typeof v === "object") {
    body = [
      bindText(v, "text", { multiline: true, rows: Math.min(14, Math.max(3, brToLines(v.text).split("\n").length + 1)), toView: brToLines, fromView: linesToBr, markup: true }),
      objectEditor(v, { skip: ["text"] }),
    ];
  } else if ((kind === "title" || kind === "subtitle" || kind === "fraction") && v && typeof v === "object") {
    body = [bindText(v, "text", { markup: kind !== "fraction", placeholder: kind === "fraction" ? "3/4" : "" }), objectEditor(v, { skip: ["text"] })];
  } else if (kind === "image" && v && typeof v === "object") {
    body = [
      field("Image from", bindSelect(v, "type", [["theme", "Theme passage images"], ["local", "Theme local images"], ["angle", "Math: angles"], ["shape", "Math: shapes"], ["shape-partition", "Math: shape partitions"]], {
        onSet: () => { v.file = ""; changed({ structural: true }); },
      })),
      field("File", assetPicker(v, "file", v.type === "theme" ? "passage" : v.type)),
      objectEditor(v, { skip: ["type", "file"] }),
    ];
  } else if (kind === "backgroundImage" && v && typeof v === "object") {
    body = [field("Piece image", assetPicker(v, "file", "puzzle")), objectEditor(v, { skip: ["file"] })];
  } else if (v && typeof v === "object") {
    body = objectEditor(v);
  } else {
    body = h("span", { class: "muted", text: JSON.stringify(v) });
  }
  return h("div", { class: `kind kind-${kind}` }, head, body);
}

// Generic editor for nested objects (number lines, figures, coordinate planes,
// style blocks…). Keys that name a style token get a dropdown of valid values.
function objectEditor(obj, { skip = [], tokens = false } = {}) {
  const rows = [];
  for (const key of Object.keys(obj)) {
    if (skip.includes(key)) continue;
    const v = obj[key];
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      rows.push(h("fieldset", { class: "nested" }, h("legend", { text: humanize(key) }), objectEditor(v, { tokens })));
    } else if (Array.isArray(v)) {
      rows.push(arrayEditor(obj, key, { tokens }));
    } else {
      rows.push(h("div", { class: "kv" }, h("span", { class: "kv-key", text: humanize(key) }), scalarControl(obj, key, tokens)));
    }
  }
  return rows.length ? h("div", { class: "object-editor" }, rows) : null;
}

function tokenOptions(key) {
  const t = state.boot.tokens;
  return ({
    size: Object.keys(t.text.size), align: Object.keys(t.text.align), font: Object.keys(t.text.font),
    brSplit: Object.keys(t.text.brSplit), indent: Object.keys(t.text.indent),
    material: Object.keys(t.misc.material), padding: [...new Set([...Object.keys(t.misc.padding), ...Object.keys(t.text.padding)])],
    width: Object.keys(t.dimension.width), height: Object.keys(t.dimension.height),
    justifyContent: Object.keys(t.flexbox.justifyContent), alignItems: Object.keys(t.flexbox.alignItems),
    alignContent: Object.keys(t.flexbox.alignContent), flexDirection: Object.keys(t.flexbox.flexDirection),
    flexGrow: Object.keys(t.flexbox.flexGrow), color: Object.keys(t.background.color),
  })[key];
}

function scalarControl(obj, key, tokens) {
  const v = obj[key];
  const options = tokens && typeof v === "string" ? tokenOptions(key) : key === "color" ? tokenOptions("color") : null;
  if (options) return bindSelect(obj, key, options);
  if (typeof v === "number") return bindNumber(obj, key, { step: "any" });
  if (typeof v === "boolean") {
    const el = h("input", { type: "checkbox", checked: v });
    el.addEventListener("change", () => { obj[key] = el.checked; changed(); });
    return el;
  }
  return bindText(obj, key);
}

function arrayEditor(obj, key, { tokens }) {
  const arr = obj[key];
  const allPrimitive = arr.every((x) => x === null || typeof x !== "object");
  const items = arr.map((x, k) => {
    const removeBtn = button("×", () => { arr.splice(k, 1); changed({ structural: true }); }, "btn-quiet btn-small");
    if (allPrimitive) return h("span", { class: "arr-item" }, scalarControl(arr, k, tokens), removeBtn);
    return h("div", { class: "arr-card" }, h("div", { class: "arr-head" }, h("span", { text: `${humanize(key)} ${k + 1}` }), removeBtn), objectEditor(x, { tokens }));
  });
  const add = button("+", () => { arr.push(clone(arr.at(-1) ?? "")); changed({ structural: true }); }, "btn-quiet btn-small");
  return h("div", { class: ["kv", "kv-array", !allPrimitive && "kv-stack"] }, h("span", { class: "kv-key", text: humanize(key) }), h("div", { class: allPrimitive ? "arr-inline" : "arr-stack" }, items, add));
}

function addBlock(a) {
  a.blockArray ??= [];
  const last = a.blockArray.at(-1);
  const b = last ? blankPlaceholders(clone(last)) : { contentArray: [{ passage: { text: "" } }], style: { transform: { translateX: "0%", translateY: "0%", rotate: "-2deg" } } };
  // Clear text so the new block doesn't silently repeat the last one.
  for (const item of b.contentArray ?? []) for (const k of STYLED) if (item[k]) item[k].text = "";
  if (b.tag) b.tag.text = "";
  a.blockArray.push(b);
  ensureStyles(a);
  changed({ structural: true });
}

// Ensures style.contentArray has an entry for every styled content kind used at
// each position (the renderer throws otherwise).
function ensureStyles(a) {
  if (!a.style) return;
  a.style.contentArray ??= [];
  const styles = a.style.contentArray;
  for (const b of a.blockArray ?? []) {
    (b.contentArray ?? []).forEach((item, j) => {
      styles[j] ??= {};
      for (const k of STYLED) {
        if (!item[k] || styles[j][k]) continue;
        const donor = styles.find((s) => s?.[k])?.[k];
        styles[j][k] = donor ? clone(donor) : { font: "default", size: k === "title" ? "medium" : "small", align: "left" };
      }
    });
  }
}

// Slight tilt and offset on every positioned block, alternating sides.
function scatter(a) {
  const blocks = (a.blockArray ?? []).filter((b) => b.style?.transform);
  const n = blocks.length;
  blocks.forEach((b, k) => {
    const sign = k % 2 ? 1 : -1;
    const tilt = 1 + Math.floor(Math.random() * 3);
    const t = b.style.transform;
    t.rotate = `${sign * tilt}deg`;
    if (n === 1) { t.translateX = "0%"; t.translateY = "2%"; }
    else if (n <= 4) { t.translateX = `${sign * (4 + Math.floor(Math.random() * 6))}%`; t.translateY = `${Math.floor(Math.random() * 7) - 3}%`; }
    else { t.translateX = `${Math.floor(Math.random() * 5) - 2}%`; t.translateY = `${Math.floor(Math.random() * 5) - 2}%`; }
  });
}

const GRADE_SIZES = {
  young: { title: "medium", subtitle: "small", passage: "mediumSmall" },
  older: { title: "mediumSmall", subtitle: "small", passage: "small" },
};

function stylesSection(a) {
  if (!a.style) return null;
  const apply = (preset) => {
    for (const s of a.style.contentArray ?? []) {
      for (const [k, size] of Object.entries(GRADE_SIZES[preset])) if (s?.[k]) s[k].size = size;
    }
    changed({ structural: true });
  };
  const open = readPref("stylesOpen", "0") === "1";
  const details = h("details", { class: "styles", open },
    h("summary", { text: "Styles & layout" }),
    h("div", { class: "row" },
      button("Text sizes for grades 2–3", () => apply("young"), "btn-quiet btn-small"),
      button("Text sizes for grades 4–5", () => apply("older"), "btn-quiet btn-small"),
      button("Fix missing styles", () => { ensureStyles(a); changed({ structural: true }); }, "btn-quiet btn-small")),
    a.style.block && h("fieldset", { class: "nested" }, h("legend", { text: "Every block" }), objectEditor(a.style.block, { tokens: true })),
    (a.style.contentArray ?? []).map((s, j) => h("fieldset", { class: "nested" },
      h("legend", { text: `Item ${j + 1} in each block` }), objectEditor(s ?? {}, { tokens: true }))),
    objectEditor(a.style, { skip: ["block", "contentArray"], tokens: true }));
  details.addEventListener("toggle", () => writePref("stylesOpen", details.open ? "1" : "0"));
  return details;
}

function openTemplatePicker(c) {
  const groups = new Map();
  for (const t of state.boot.templates) {
    if (!groups.has(t.group)) groups.set(t.group, []);
    groups.get(t.group).push(t);
  }
  const choose = (t) => {
    if ((c.activity?.blockArray ?? []).length && !confirm("Replace this activity's blocks with the new layout? Text you've written in the activity will be cleared.")) return;
    const old = c.activity?.info?.asset;
    const activity = blankPlaceholders(clone(t.activity));
    if (typeof activity.info.asset === "string") activity.info.asset = typeof old === "string" ? old : "";
    scatter(activity);
    c.activity = activity;
    closeModal();
    changed({ structural: true });
  };
  openModal("Start from a layout", h("div", { class: "template-groups" },
    [...groups.entries()].map(([g, ts]) => h("div", { class: "template-group" },
      h("h3", { text: g }),
      ts.map((t) => h("button", { type: "button", class: "template", onClick: () => choose(t) },
        h("span", { class: "template-name", text: t.name }),
        h("span", { class: "template-meta", text: templateSummary(t) })))))));
}

function templateSummary(t) {
  const blocks = t.activity.blockArray ?? [];
  const kinds = new Set(blocks.flatMap((b) => (b.contentArray ?? []).flatMap((i) => Object.keys(i))));
  const extra = t.activity.info.functionality === "drag-and-drop" ? " · drag & drop" : "";
  return `${blocks.length} block${blocks.length === 1 ? "" : "s"} · ${[...kinds].map((k) => KIND_LABEL[k] ?? k).join(", ")}${extra}`;
}

// ---------------------------------------------------------------- questions tab

function blankQuestions(type) {
  if (type === "crossword") {
    return {
      info: { type: "crossword" },
      contentArray: {
        title: "Answer the questions to fill in the crossword.",
        paragraph: ["A. ", "B. ", "C. ", "D. "],
        puzzle: [...Array(6)].map(() => Array(7).fill("0")),
      },
      code: { answer: "", userArray: [] },
    };
  }
  if (type === "decoder") {
    return {
      info: { type: "decoder" },
      contentArray: [1, 2, 3, 4].map((n) => ({ title: `[<g>${n}.] `, word: "" })),
      code: { answer: "", userArray: ["", "", "", ""] },
    };
  }
  return {
    info: { type: "multiple-choice" },
    contentArray: [1, 2, 3, 4].map((n) => ({ title: `[<g>${n}.] `, correctIndex: 0, paragraph: ["", "", ""] })),
    code: { answer: "", userArray: ["", "", "", ""] },
  };
}

function questionsTab(c) {
  c.questions ??= blankQuestions("multiple-choice");
  const q = c.questions;
  const type = q.info?.type;
  const typeSel = h("div", { class: "segmented" },
    [["multiple-choice", "Multiple choice"], ["crossword", "Crossword"], ["decoder", "Decoder"]].map(([t, label]) =>
      h("button", {
        type: "button", class: ["seg", type === t && "on"], text: label,
        onClick: () => {
          if (t === type) return;
          if (!confirm("Switch question type? The current questions will be cleared.")) return;
          c.questions = blankQuestions(t);
          changed({ structural: true });
        },
      })));
  return h("div", { class: "tab-body" },
    h("div", { class: "questions-head" }, typeSel, codeWordDisplay(q)),
    type === "multiple-choice" ? mcEditor(q)
      : type === "crossword" ? crosswordEditor(q)
      : type === "decoder" ? decoderEditor(q)
      : h("p", { class: "muted", text: `"${type}" questions can be edited in the Raw tab.` }));
}

function codeWordDisplay(q) {
  const derived = deriveCode(q);
  const el = h("div", { class: "code-word", title: "Spelled by the code letters, in order" },
    h("span", { class: "code-word-label", text: "Code word" }),
    [...(derived || "????")].map((ch) => h("span", { class: ["code-cell", ch === "?" && "missing"], text: ch })));
  return el;
}

function refreshCodeWord() {
  const c = challenges()[state.sel];
  const old = document.querySelector(".code-word");
  if (c?.questions && old) old.replaceWith(codeWordDisplay(c.questions));
}

const titleText = (t) => String(t ?? "").replace(/^\s*\[<g>\d+\.\]\s*/, "");

function mcEditor(q) {
  q.contentArray ??= [];
  return h("div", { class: "mc" },
    q.contentArray.map((item, k) => {
      item.paragraph ??= ["", "", ""];
      const options = item.paragraph.map((opt, j) => h("div", { class: ["mc-option", item.correctIndex === j && "correct"] },
        h("label", { class: "mc-correct", title: "Correct answer" },
          h("input", { type: "radio", name: `correct-${state.sel}-${k}`, checked: item.correctIndex === j, onChange: () => { item.correctIndex = j; changed({ structural: true }); } }),
          item.correctIndex === j ? "Correct" : ""),
        codeLetterInput(() => item.paragraph[j], (v) => { item.paragraph[j] = v; refreshCodeWordSoon(); }, { placeholder: `Option ${j + 1}`, highlight: item.correctIndex === j }),
        item.paragraph.length > 2 && button("×", () => {
          item.paragraph.splice(j, 1);
          if (item.correctIndex >= item.paragraph.length) item.correctIndex = 0;
          changed({ structural: true });
        }, "btn-quiet btn-small")));
      const titleInput = h("input", { type: "text", value: titleText(item.title), placeholder: "Question" });
      titleInput.addEventListener("input", () => { item.title = `[<g>${k + 1}.] ${titleInput.value}`; changed(); });
      const cols = h("input", { type: "checkbox", checked: item.columns === 2 });
      cols.addEventListener("change", () => { if (cols.checked) item.columns = 2; else delete item.columns; changed(); });
      return h("div", { class: "card mc-question" },
        h("div", { class: "card-head" }, h("strong", { text: `Question ${k + 1}` }),
          h("label", { class: "inline", title: "For short answers like True / False" }, cols, " Two columns")),
        titleInput,
        h("div", { class: "mc-options" }, options),
        item.paragraph.length < 4 && button("+ Option", () => { item.paragraph.push(""); changed({ structural: true }); }, "btn-quiet btn-small"),
        h("p", { class: "field-help", text: "Click a letter to choose the yellow code letter. The correct answer's letter becomes part of the code word." }));
    }));
}

let codeWordTimer;
function refreshCodeWordSoon() {
  clearTimeout(codeWordTimer);
  codeWordTimer = setTimeout(refreshCodeWord, 30);
}

function decoderEditor(q) {
  q.contentArray ??= [];
  return h("div", { class: "decoder" },
    q.contentArray.map((item, k) => {
      const titleInput = h("input", { type: "text", value: titleText(item.title), placeholder: "Clue, e.g. Using context clues, 'dazzling' means:" });
      titleInput.addEventListener("input", () => { item.title = `[<g>${k + 1}.] ${titleInput.value}`; changed(); });
      return h("div", { class: "card" },
        h("div", { class: "card-head" }, h("strong", { text: `Word ${k + 1}` }),
          q.contentArray.length > 1 && button("×", () => { q.contentArray.splice(k, 1); renumber(q.contentArray); changed({ structural: true }); }, "btn-quiet btn-small")),
        titleInput,
        field("Answer word", codeLetterInput(() => item.word, (v) => { item.word = v.toUpperCase(); refreshCodeWordSoon(); }, { open: "[", close: "]", placeholder: "BRIGHT", highlight: true })));
    }),
    q.contentArray.length < 6 && button("+ Word", () => { q.contentArray.push({ title: `[<g>${q.contentArray.length + 1}.] `, word: "" }); changed({ structural: true }); }, "btn-quiet"));
}

function renumber(items) {
  items.forEach((it, k) => { it.title = `[<g>${k + 1}.] ${titleText(it.title)}`; });
}

let crosswordTool = "letters";

function crosswordEditor(q) {
  const cw = q.contentArray ??= {};
  cw.paragraph ??= [];
  cw.puzzle ??= [...Array(6)].map(() => Array(7).fill("0"));
  const grid = cw.puzzle;
  const toolSeg = h("div", { class: "segmented" },
    [["letters", "Type letters"], ["label", "Mark clue starts"], ["code", "Pick code letters"]].map(([t, label]) =>
      h("button", { type: "button", class: ["seg", crosswordTool === t && "on"], text: label, onClick: () => { crosswordTool = t; renderEditor(); } })));

  const cellAt = (r, c) => parseCrosswordCell(grid[r][c]);
  const setCell = (r, c, cell) => { grid[r][c] = cell ? formatCrosswordCell(cell) : "0"; };
  const nextDigit = () => Math.max(0, ...grid.flat().map(parseCrosswordCell).filter((p) => p?.digit).map((p) => p.digit)) + 1;

  const table = h("div", { class: ["cw-grid", `tool-${crosswordTool}`], style: { gridTemplateColumns: `repeat(${grid[0]?.length ?? 7}, 2.4rem)` } });
  grid.forEach((row, r) => row.forEach((_, c) => {
    const p = cellAt(r, c);
    const cell = h("div", { class: ["cw-cell", p && "filled", p?.digit && "code"] });
    if (p?.label) cell.append(h("span", { class: "cw-label", text: p.label }));
    if (p?.digit) cell.append(h("span", { class: "cw-digit", text: p.digit }));
    if (crosswordTool === "letters") {
      const input = h("input", { type: "text", maxlength: 1, value: p?.letter ?? "" });
      input.addEventListener("input", () => {
        const letter = input.value.replace(/[^A-Za-z]/g, "").toUpperCase();
        input.value = letter;
        const cur = cellAt(r, c);
        setCell(r, c, letter ? { ...(cur ?? { label: null, digit: null }), letter } : null);
        cell.classList.toggle("filled", !!letter);
        changed();
        refreshWords();
        refreshCodeWordSoon();
        if (letter) {
          // Move along the row so typing a word across feels natural.
          const next = table.children[r * row.length + c + 1]?.querySelector("input");
          next?.focus();
          next?.select();
        }
      });
      input.addEventListener("keydown", (e) => {
        const moves = { ArrowRight: [0, 1], ArrowLeft: [0, -1], ArrowDown: [1, 0], ArrowUp: [-1, 0] };
        const m = moves[e.key];
        if (!m) return;
        e.preventDefault();
        table.children[(r + m[0]) * row.length + (c + m[1])]?.querySelector("input")?.focus();
      });
      cell.append(input);
    } else {
      cell.append(h("span", { class: "cw-letter", text: p?.letter ?? "" }));
      cell.addEventListener("click", () => {
        const cur = cellAt(r, c);
        if (!cur) return;
        if (crosswordTool === "label") {
          const order = [null, "A", "B", "C", "D", "E", "F"];
          cur.label = order[(order.indexOf(cur.label) + 1) % order.length];
        } else if (cur.digit) {
          const removed = cur.digit;
          cur.digit = null;
          setCell(r, c, cur);
          grid.forEach((rr, ri) => rr.forEach((_, ci) => {
            const o = cellAt(ri, ci);
            if (o?.digit > removed) { o.digit -= 1; setCell(ri, ci, o); }
          }));
          changed({ structural: true });
          return;
        } else {
          const d = nextDigit();
          if (d > 6) { toast("Crossword codes can use at most 6 letters.", "warn"); return; }
          cur.digit = d;
        }
        setCell(r, c, cur);
        changed({ structural: true });
      });
    }
    table.append(cell);
  }));

  const wordsEl = h("div", { class: "cw-words" });
  const refreshWords = () => fill(wordsEl, 
    h("span", { class: "field-label", text: "Words in the grid" }),
    ...crosswordWords(grid).map((w) => h("span", { class: ["cw-word", !w.label && "unlabeled"], title: w.label ? "" : "Not a clue — a player will see this as an extra word", text: `${w.label ? `${w.label} ` : ""}${w.dir === "across" ? "→" : "↓"} ${w.word}` })));
  refreshWords();

  return h("div", { class: "crossword" },
    field("Instructions", bindText(cw, "title")),
    h("div", { class: "cw-clues" }, cw.paragraph.map((_, k) => field(`Clue ${String.fromCharCode(65 + k)}`, h("div", { class: "row" },
      bindText(cw.paragraph, k, { markup: false, toView: (v) => String(v ?? "").replace(/^[A-Z]\.\s*/, ""), fromView: (v) => `${String.fromCharCode(65 + k)}. ${v}` }),
      cw.paragraph.length > 1 && button("×", () => { cw.paragraph.splice(k, 1); cw.paragraph.forEach((p, n) => { cw.paragraph[n] = `${String.fromCharCode(65 + n)}. ${String(p).replace(/^[A-Z]\.\s*/, "")}`; }); changed({ structural: true }); }, "btn-quiet btn-small")))),
      cw.paragraph.length < 6 && button("+ Clue", () => { cw.paragraph.push(`${String.fromCharCode(65 + cw.paragraph.length)}. `); changed({ structural: true }); }, "btn-quiet btn-small")),
    h("div", { class: "cw-toolbar" }, toolSeg, button("Clear grid", () => { if (confirm("Clear every cell?")) { cw.puzzle = [...Array(6)].map(() => Array(7).fill("0")); changed({ structural: true }); } }, "btn-quiet btn-small")),
    h("p", { class: "field-help", text: {
      letters: "Type answers into the grid. Arrow keys move between cells.",
      label: "Click the first cell of each answer to cycle its clue letter (A, B, C…).",
      code: "Click cells in code-word order: first click is letter 1, then 2… Click again to remove.",
    }[crosswordTool] }),
    table,
    wordsEl);
}

// ---------------------------------------------------------------- raw tab

function rawTab(i) {
  const area = h("textarea", { class: "raw", rows: 30, spellcheck: "false", value: JSON.stringify(challenges()[i], null, 2) });
  const msg = h("span", { class: "muted" });
  return h("div", { class: "tab-body" },
    h("p", { class: "field-help", text: "The challenge exactly as it's stored. Edit carefully, then Apply." }),
    area,
    h("div", { class: "row" },
      button("Apply", () => {
        try {
          challenges()[i] = JSON.parse(area.value);
          changed({ structural: true });
          renderSidebar();
          toast("Applied.", "ok");
        } catch (err) { msg.textContent = `Not valid JSON: ${err.message}`; }
      }, "btn"),
      msg));
}

// ---------------------------------------------------------------- ship panel

function shipPanel() {
  const room = state.room;
  const d = room.defaults;
  const errors = state.issues.filter((i) => i.level === "error");
  const steps = ["draft", "hidden", "new", "live"];
  const at = steps.indexOf(room.status);
  const stepper = h("ol", { class: "stepper" },
    [["Draft", "Saved file, not in the catalog"], ["Hidden", "Playable by code, not listed"], ["Live · New", "Listed with a New badge"], ["Live", "Settled in the catalog"]]
      .map(([label, help], k) => h("li", { class: [k < at && "done", k === at && "current"] }, h("strong", { text: label }), h("span", { text: help }))));

  const unsaved = state.dirty && h("p", { class: "notice warn", text: "Save your changes first — catalog actions use the saved file." });
  const thumbSection = thumbnailSection();

  let actions;
  if (room.status === "draft") actions = registerForm(d, errors);
  else {
    const testLinks = h("div", { class: "test-links" },
      h("div", { class: "big-code" }, h("span", { text: "Game code" }), h("strong", { text: room.code ?? "—" })),
      h("div", { class: "col" },
        h("a", { href: `/preview.html?game=${encodeURIComponent(room.gameId)}`, target: "_blank", text: "Open the full preview ↗" }),
        h("a", { href: "/index.html", target: "_blank", text: "Play it like a student (type the code) ↗" })));
    const skills = challenges().filter((c) => c.info?.type !== "code-box").map((c) => c.info?.education?.topic).filter(Boolean);
    const skillsDiffer = JSON.stringify(skills) !== JSON.stringify(room.game?.skills ?? []);
    const blockedReason = errors.length ? `${errors.length} check${errors.length > 1 ? "s" : ""} still failing` : /placeholder/.test(room.game?.thumbnail ?? "") ? "the thumbnail is still the placeholder" : null;
    const override = h("input", { type: "checkbox" });
    actions = h("div", { class: "ship-actions" },
      testLinks,
      skillsDiffer && h("div", { class: "notice" },
        h("span", { text: `The catalog lists skills as: ${(room.game?.skills ?? []).join(", ") || "none"}. The challenges now say: ${skills.join(", ")}.` }),
        button("Update catalog skills", () => guarded(() => catalog("sync-skills", { skills })), "btn btn-small")),
      room.status === "hidden" && h("div", { class: "card" },
        h("strong", { text: "Make it live" }),
        h("p", { text: "Lists the room in the catalog with a New badge." }),
        blockedReason && h("p", { class: "notice warn", text: `Not ready: ${blockedReason}.` }),
        blockedReason && h("label", { class: "inline" }, override, " Make it live anyway"),
        button("Make live", () => {
          if (blockedReason && !override.checked) { toast(`Not ready: ${blockedReason}.`, "warn"); return; }
          guarded(() => catalog("make-live"));
        }, "btn btn-primary")),
      room.status === "new" && h("div", { class: "card" },
        h("strong", { text: "Remove the New badge" }),
        h("p", { text: "Do this once the room has been out for a while." }),
        button("Clear New", () => guarded(() => catalog("clear-new")), "btn")),
      (room.status === "new" || room.status === "live") && h("div", { class: "row" },
        button("Hide from catalog", () => { if (confirm("Hide this room from the catalog? Its code keeps working.")) guarded(() => catalog("hide")); }, "btn-quiet btn-small")));
  }

  return h("div", { class: "panel" },
    h("h2", { text: "Catalog & go live" }),
    stepper,
    unsaved,
    actions,
    thumbSection,
    publishChecklist(),
    state.lastExportLog && h("details", { class: "export-log" }, h("summary", { text: "Export script output" }), h("pre", { text: state.lastExportLog })));
}

function registerForm(d, errors) {
  const meta = clone(d);
  const skills = challenges().filter((c) => c.info?.type !== "code-box").map((c) => c.info?.education?.topic).filter(Boolean);
  meta.skills = skills;
  return h("div", { class: "card" },
    h("strong", { text: "Add to the catalog (hidden)" }),
    h("p", { text: "Creates a game code and a hidden catalog entry so you can test the room by code. Nothing appears in the catalog until you make it live." }),
    errors.length > 0 && h("p", { class: "notice warn", text: `${errors.length} check${errors.length > 1 ? "s" : ""} still failing — fine for testing, but fix them before going live.` }),
    h("div", { class: "grid-2" },
      field("Catalog id", bindText(meta, "id", { quiet: true }), "Used in preview links. Don't change after launch."),
      field("Color", bindSelect(meta, "color", state.boot.colors, { quiet: true }))),
    h("div", { class: "grid-2" },
      field("Topic label (analytics)", bindText(meta, "analyticsTopic", { quiet: true })),
      field("Grades", h("code", { text: meta.grades.join(", ") || "—" }), "From the file name.")),
    field("Skills listed in the catalog", h("div", { class: "chips" }, skills.length ? skills.map((s) => h("span", { class: "chip", text: s })) : h("span", { class: "muted", text: "Fill in each challenge's Skill first." }))),
    button("Register as hidden", () => {
      if (state.dirty) { toast("Save first.", "warn"); return; }
      guarded(() => catalog("register", { meta }));
    }, "btn btn-primary"));
}

function thumbnailSection() {
  const room = state.room;
  const current = room.game?.thumbnail ?? state.resource.info?.logo;
  const target = room.defaults.expectedThumbnail;
  const input = h("input", { type: "file", accept: "image/png" });
  const drop = h("label", { class: "dropzone" },
    h("img", { class: "thumb-preview", src: `/${current}`, alt: "" }),
    h("div", {},
      h("strong", { text: /placeholder/.test(current ?? "") ? "Add the thumbnail" : "Replace the thumbnail" }),
      h("p", { class: "field-help", text: `Drop a PNG here or click to choose. It's saved as ${target}.` })),
    input);
  const upload = async (file) => {
    if (!file || file.type !== "image/png") { toast("Thumbnails must be PNG files.", "warn"); return; }
    if (state.dirty) { toast("Save first.", "warn"); return; }
    const dataUrl = await new Promise((resolve) => { const r = new FileReader(); r.onload = () => resolve(r.result); r.readAsDataURL(file); });
    const { room: fresh } = await api("POST", "/api/thumbnail", { path: room.path, target, dataUrl });
    applyFreshRoom(fresh);
    toast("Thumbnail saved.", "ok");
  };
  input.addEventListener("change", () => guarded(() => upload(input.files[0])));
  drop.addEventListener("dragover", (e) => { e.preventDefault(); drop.classList.add("over"); });
  drop.addEventListener("dragleave", () => drop.classList.remove("over"));
  drop.addEventListener("drop", (e) => { e.preventDefault(); drop.classList.remove("over"); guarded(() => upload(e.dataTransfer.files[0])); });
  return h("div", { class: "card" }, h("strong", { text: "Thumbnail" }), drop);
}

function publishChecklist() {
  const items = [
    [!state.dirty, "All changes saved"],
    [!state.issues.some((i) => i.level === "error"), "All checks pass"],
    [!/placeholder/.test(state.room.game?.thumbnail ?? state.resource.info?.logo ?? "placeholder"), "Real thumbnail in place"],
  ];
  return h("div", { class: "card" },
    h("strong", { text: "Publishing" }),
    h("p", { text: "The editor writes files; publishing stays in your usual flow. When you're ready, run the publish skill — it re-runs the exports, bumps the version, commits, and uploads." }),
    h("ul", { class: "checklist" }, items.map(([ok, label]) => h("li", { class: ok ? "ok" : "todo", text: label }))),
    h("p", { class: "field-help", text: "Adding, hiding or making a room live changes js/games.js, so the share-code Firebase functions need redeploying after the publish (the publish skill covers this)." }));
}

async function catalog(action, extra = {}) {
  const res = await api("POST", "/api/catalog", { action, path: state.room.path, ...extra });
  state.lastExportLog = res.exportLog;
  applyFreshRoom(res.room);
  if (res.snippets && Object.keys(res.snippets).length) {
    openModal("Paste this by hand", h("div", {},
      h("p", { text: "The editor couldn't find where this belongs, so nothing was written to these files. Paste each snippet into the right place:" }),
      Object.entries(res.snippets).map(([file, text]) => h("div", {}, h("code", { text: file }), h("pre", { class: "snippet", text })))));
  }
  const done = { register: `Registered. Game code ${res.code}.`, "make-live": "Live in the catalog.", "clear-new": "New badge removed.", hide: "Hidden from the catalog.", "sync-skills": "Catalog skills updated." };
  toast(done[action] ?? "Done.", "ok");
}

function applyFreshRoom(fresh) {
  const keepResource = state.resource;
  state.room = fresh;
  // Server-side edits (thumbnail) touch info.logo; take theirs for that field only.
  if (keepResource && !state.dirty) state.resource = fresh.resource;
  else if (keepResource) keepResource.info.logo = fresh.resource.info.logo;
  revalidate();
  renderAll();
}

// ===================================================================== issues & modal

function openIssues() {
  if (!state.issues.length) { toast("Everything checks out.", "ok"); return; }
  const go = (x) => {
    closeModal();
    if (x.challenge === null) select("room");
    else { state.tab = x.tab; select(x.challenge); }
  };
  openModal("Checks", h("div", { class: "issues-modal" },
    state.issues.map((x) => h("button", { type: "button", class: `issue issue-${x.level} clickable`, text: x.message, onClick: () => go(x) }))));
}

function openModal(title, body) {
  const root = $("modal-root");
  const close = h("button", { type: "button", class: "modal-x", text: "×", onClick: closeModal });
  fill(root, h("div", { class: "modal-backdrop", onClick: closeModal }),
    h("div", { class: "modal", role: "dialog", "aria-label": title }, h("div", { class: "modal-head" }, h("h2", { text: title }), close), h("div", { class: "modal-body" }, body)));
  root.classList.add("open");
}

function closeModal() {
  $("modal-root").classList.remove("open");
  fill($("modal-root"));
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
    e.preventDefault();
    if (state.room && state.dirty && !isLegacy()) guarded(save);
  }
});

window.addEventListener("beforeunload", (e) => {
  if (state.dirty) { e.preventDefault(); e.returnValue = ""; }
});

// ===================================================================== new room wizard

function openNewRoomWizard() {
  const topicsBySubject = new Map();
  for (const r of state.rooms) {
    const [, , , subject, dir, file] = r.path.split("/");
    if (!file) continue;
    const stem = file.replace(/_.*$/, "");
    if (!topicsBySubject.has(subject)) topicsBySubject.set(subject, new Map());
    topicsBySubject.get(subject).set(`${dir}|${stem}`, { dir, stem });
  }
  const form = { theme: state.boot.themes[0], subject: "reading", topic: "", dir: "", stem: "", grades: new Set([2, 3]) };
  const themeSel = h("select", {}, state.boot.themes.map((t) => h("option", { value: t, text: t })));
  const subjectSel = h("select", {}, [...topicsBySubject.keys()].sort().map((s) => h("option", { value: s, text: humanize(s.replace(/-/g, " ")) })));
  subjectSel.value = form.subject;
  const topicSel = h("select", {});
  const dirInput = h("input", { type: "text", placeholder: "folder, e.g. text-features" });
  const stemInput = h("input", { type: "text", placeholder: "file stem, e.g. textFeatures" });
  const custom = h("div", { class: "grid-2", hidden: true }, field("Topic folder", dirInput), field("File name start", stemInput));
  const pathOut = h("code", { class: "path" });
  const gradeBoxes = [2, 3, 4, 5].map((g) => {
    const box = h("input", { type: "checkbox", checked: form.grades.has(g) });
    box.addEventListener("change", () => { box.checked ? form.grades.add(g) : form.grades.delete(g); update(); });
    return h("label", { class: "inline" }, box, ` ${g}${{ 2: "nd", 3: "rd" }[g] ?? "th"}`);
  });
  const fillTopics = () => {
    const topics = [...(topicsBySubject.get(subjectSel.value)?.values() ?? [])].sort((a, b) => a.dir.localeCompare(b.dir));
    fill(topicSel, ...topics.map((t) => h("option", { value: `${t.dir}|${t.stem}`, text: `${t.dir} (${t.stem}_…)` })), h("option", { value: "__new", text: "New topic…" }));
  };
  const ord = (n) => ({ 1: "1st", 2: "2nd", 3: "3rd" })[n] ?? `${n}th`;
  const update = () => {
    form.theme = themeSel.value;
    form.subject = subjectSel.value;
    custom.hidden = topicSel.value !== "__new";
    if (topicSel.value === "__new") { form.dir = dirInput.value.trim(); form.stem = stemInput.value.trim(); }
    else [form.dir, form.stem] = topicSel.value.split("|");
    const grades = [...form.grades].sort();
    pathOut.textContent = `resource/${form.theme}/topic/${form.subject}/${form.dir || "…"}/${form.stem || "…"}_${grades.map(ord).join("")}Grade.js`;
  };
  for (const el of [themeSel, subjectSel, topicSel, dirInput, stemInput]) el.addEventListener("input", () => { if (el === subjectSel) fillTopics(); update(); });
  fillTopics();
  update();

  openModal("New room", h("div", { class: "wizard" },
    field("Theme", themeSel),
    h("div", { class: "grid-2" }, field("Subject", subjectSel), field("Topic", topicSel)),
    custom,
    field("Grades", h("div", { class: "row" }, gradeBoxes)),
    field("Will be saved as", pathOut),
    h("p", { class: "field-help", text: "The new room starts with this theme's characters and map images. You fill in everything else." }),
    button("Create room", () => guarded(async () => {
      const grades = [...form.grades].sort();
      const { path } = await api("POST", "/api/new-room", { theme: form.theme, subject: form.subject, dir: form.dir, stem: form.stem, grades });
      closeModal();
      await loadRooms();
      await openRoom(path);
      toast("Room created.", "ok");
    }), "btn btn-primary")));
}

// ===================================================================== boot

function renderAll() {
  renderTopbar();
  renderSidebar();
  renderEditor();
  renderPreviewToolbar();
  fitPreview();
}

async function boot() {
  try {
    [state.boot, state.rooms, state.standards] = await Promise.all([
      api("GET", "/api/bootstrap"), api("GET", "/api/rooms"), api("GET", "/api/standards"),
    ]);
  } catch (err) {
    fill(document.body, h("p", { class: "pad", text: `Couldn't reach the editor server: ${err.message}` }));
    return;
  }
  document.body.append(h("datalist", { id: "standards-list" }, state.standards.map((s) => h("option", { value: s }))));
  renderAll();
  const fromHash = decodeURIComponent(location.hash.slice(1));
  if (fromHash && state.rooms.some((r) => r.path === fromHash)) await guarded(() => openRoom(fromHash));
}

boot();
