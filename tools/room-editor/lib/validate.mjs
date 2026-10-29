// Room validation, shared by the editor UI (live, on every edit) and the server
// (on save). Encodes the rules from .cursor/skills/create-escape-room/SKILL.md and
// the renderer constraints behind them. No Node or DOM imports.
//
// validateRoom(resource, ctx) → [{ level: "error" | "warning", challenge, tab, message }]
//   ctx.tokens  — the `style` dictionary from js/global.js
//   ctx.assets  — { node, character, background, passage, local, puzzle } file lists for the theme
//   ctx.global  — { columnSort, angle, shape, "shape-partition" } file lists

// ---------------------------------------------------------------- code letters

export const MC_LETTER = /\{(\w)\}/g;

export function mcLetters(option) {
  return [...String(option).matchAll(MC_LETTER)].map((m) => m[1]);
}

export function parseCrosswordCell(cell) {
  const s = String(cell);
  if (s === "0") return null;
  const label = s.match(/^\(([A-Z])\)/);
  const rest = label ? s.slice(3) : s;
  const digit = rest.match(/^[1-6]/);
  return { label: label ? label[1] : null, digit: digit ? Number(digit[0]) : null, letter: digit ? rest.slice(1) : rest };
}

export function formatCrosswordCell({ label, digit, letter }) {
  if (!letter) return "0";
  return `${label ? `(${label})` : ""}${digit ?? ""}${letter.toUpperCase()}`;
}

// The code a player would read off the questions, with "?" where it's missing.
export function deriveCode(questions) {
  const type = questions?.info?.type;
  if (type === "multiple-choice") {
    return (questions.contentArray ?? [])
      .map((q) => mcLetters(q.paragraph?.[q.correctIndex] ?? "")[0] ?? "?")
      .join("")
      .toUpperCase();
  }
  if (type === "decoder") {
    return (questions.contentArray ?? [])
      .map((q) => (String(q.word ?? "").match(/\[(.)\]/) ?? [, "?"])[1])
      .join("")
      .toUpperCase();
  }
  if (type === "crossword") {
    const slots = {};
    for (const cell of (questions.contentArray?.puzzle ?? []).flat()) {
      const c = parseCrosswordCell(cell);
      if (c?.digit) slots[c.digit] = c.letter;
    }
    const n = Math.max(0, ...Object.keys(slots).map(Number));
    return [...Array(n)].map((_, i) => slots[i + 1] ?? "?").join("").toUpperCase();
  }
  return "";
}

// Runs of 2+ filled cells, read across and down. Each run is a word a player sees.
export function crosswordWords(puzzle) {
  const grid = (puzzle ?? []).map((row) => row.map(parseCrosswordCell));
  const words = [];
  const scan = (get, rows, cols, dir) => {
    for (let r = 0; r < rows; r++) {
      let run = [];
      for (let c = 0; c <= cols; c++) {
        const cell = c < cols ? get(r, c) : null;
        if (cell) run.push(cell);
        else {
          if (run.length > 1) words.push({ word: run.map((x) => x.letter).join(""), label: run[0].label, dir });
          run = [];
        }
      }
    }
  };
  const rows = grid.length;
  const cols = Math.max(0, ...grid.map((r) => r.length));
  scan((r, c) => grid[r]?.[c], rows, cols, "across");
  scan((c, r) => grid[r]?.[c], cols, rows, "down");
  return words;
}

// ---------------------------------------------------------------- validation

const PLACEHOLDER = /\blorem\b|\bipsum\b|<asset>|\bTODO\b/i;

const CONTENT_KINDS = [
  "title", "subtitle", "passage", "image", "backgroundImage", "figure",
  "numberLine", "fraction", "coordinatePlane", "cryptogram", "dimension",
];
// Content kinds that dynamic.js styles via style.contentArray[j][kind].
const STYLED_KINDS = ["title", "subtitle", "passage", "fraction"];

export function validateRoom(resource, ctx = {}) {
  const issues = [];
  const add = (level, challenge, tab, message) => issues.push({ level, challenge, tab, message });
  const err = (c, tab, msg) => add("error", c, tab, msg);
  const warn = (c, tab, msg) => add("warning", c, tab, msg);

  if (!resource || typeof resource !== "object") return [{ level: "error", challenge: null, tab: "room", message: "Room is empty." }];
  if (resource.activityArray && !resource.challengeArray) {
    return [{ level: "warning", challenge: null, tab: "room", message: "Legacy activityArray room — read-only in the editor." }];
  }

  const info = resource.info ?? {};
  if (!info.title) err(null, "room", "Room title is empty.");
  if (!info.path) err(null, "room", "Room info.path (theme folder) is empty.");
  if (!info.timerLabel) warn(null, "room", "Timer label is empty.");
  if (!info.logo || /placeholder/.test(info.logo)) warn(null, "room", "Logo is still the placeholder image.");

  const list = resource.challengeArray ?? [];
  const codeBoxes = list.filter((c) => c?.info?.type === "code-box").length;
  if (codeBoxes !== 1) err(null, "room", `Room needs exactly one code box (has ${codeBoxes}).`);
  else if (list.at(-1)?.info?.type !== "code-box") err(null, "room", "The code box must be the last challenge.");
  const count = list.length - codeBoxes;
  if (count < 4 || count > 5) warn(null, "room", `Rooms usually have 4 or 5 challenges (this one has ${count}).`);

  const has = (kind, file) => !ctx.assets || (ctx.assets[kind] ?? []).includes(file);
  const tok = ctx.tokens;

  list.forEach((c, i) => {
    if (c?.info?.type === "code-box") return;
    const label = c?.info?.title || `Challenge ${i + 1}`;
    const E = (tab, msg) => err(i, tab, `${label}: ${msg}`);
    const W = (tab, msg) => warn(i, tab, `${label}: ${msg}`);

    // ---- intro / info
    const ci = c.info ?? {};
    if (!ci.title) E("intro", "map title is empty.");
    if (!ci.asset) E("intro", "map node image is not set.");
    else if (!has("node", ci.asset)) E("intro", `map node image "${ci.asset}" doesn't exist in this theme.`);
    if (!ci.hint?.text) E("intro", "hint is empty.");
    // Left blank on purpose when naming the skill would give away the answer (e.g. text structures).
    if (!ci.education?.topic) W("intro", "skill/topic is empty — fine if naming it would give away the answer.");
    const cc = ci.education?.commonCore;
    if (!Array.isArray(cc) || cc.length === 0) W("intro", "no Common Core standards.");
    else if (cc.some((s) => typeof s !== "string")) W("intro", "standards use the older nested format; new rooms use plain codes like \"RL.3.2\".");

    const intro = c.intro ?? {};
    if (!intro.character) E("intro", "character name is empty.");
    if (!intro.asset) E("intro", "character image is not set.");
    else if (!has("character", intro.asset)) E("intro", `character image "${intro.asset}" doesn't exist in this theme.`);
    if (!intro.dialogue?.incomplete) E("intro", "opening dialogue is empty.");
    if (!intro.dialogue?.complete) E("intro", "completed dialogue is empty.");

    // ---- activity
    const a = c.activity;
    if (!a?.info) { E("activity", "has no activity."); }
    else {
      if (a.info.type !== "dynamic") W("activity", `activity type "${a.info.type}" isn't editable here; use Raw.`);
      const bg = a.info.asset;
      if (!bg) E("activity", "background image is not set.");
      else if (typeof bg === "string" && !has("background", bg)) E("activity", `background "${bg}" doesn't exist in this theme.`);
      else if (bg?.scope === "global" && ctx.global && !ctx.global.columnSort.includes(bg.path)) E("activity", `sort background "${bg.path}" doesn't exist.`);
      else if (bg?.scope === "local" && !has("local", bg.path)) E("activity", `background "${bg.path}" doesn't exist in this theme's local folder.`);

      const blocks = a.blockArray ?? [];
      if (blocks.length === 0) E("activity", "has no blocks.");
      const dragDrop = a.info.functionality === "drag-and-drop";
      const columns = a.info.columnArray?.length ?? 0;
      const styles = a.style?.contentArray ?? [];
      const maxItems = Math.max(0, ...blocks.map((b) => b.contentArray?.length ?? 0));
      if (a.style && styles.length < maxItems) E("activity", `style.contentArray has ${styles.length} entries but a block has ${maxItems} items.`);

      blocks.forEach((b, bi) => {
        const where = `block ${bi + 1}`;
        (b.contentArray ?? []).forEach((item, j) => {
          const kinds = Object.keys(item);
          if (kinds.length === 0) W("activity", `${where}, item ${j + 1} is empty.`);
          for (const k of kinds) if (!CONTENT_KINDS.includes(k)) W("activity", `${where}: unknown content "${k}".`);
          for (const k of STYLED_KINDS) {
            if (item[k] && a.style && !styles[j]?.[k]) E("activity", `${where}: ${k} at position ${j + 1} has no style (add it under Styles).`);
          }
          if (item.backgroundImage && a.style && !styles[j]?.background && !dragDrop) W("activity", `${where}: background image at position ${j + 1} has no background style.`);
          for (const k of ["title", "subtitle", "passage", "fraction"]) {
            const text = item[k]?.text;
            if (item[k] && !text) E("activity", `${where}: ${k} text is empty.`);
            if (text && PLACEHOLDER.test(text)) E("activity", `${where}: ${k} still has placeholder text.`);
          }
          if (item.image) {
            const { type, file } = item.image;
            if (!file) E("activity", `${where}: image file is not set.`);
            else if (type === "theme" && !has("passage", file)) E("activity", `${where}: image "${file}" isn't in the theme's passage folder.`);
            else if (type === "local" && !has("local", file)) E("activity", `${where}: image "${file}" isn't in the theme's local folder.`);
            else if (ctx.global?.[type] && !ctx.global[type].includes(file)) E("activity", `${where}: ${type} image "${file}" doesn't exist.`);
          }
          if (item.backgroundImage?.file && !has("puzzle", item.backgroundImage.file)) {
            E("activity", `${where}: puzzle image "${item.backgroundImage.file}" isn't in the theme's puzzle folder.`);
          }
        });
        if (b.tag && !b.tag.text) E("activity", `${where}: tag text is empty.`);
        if (b.tag?.text && PLACEHOLDER.test(b.tag.text)) E("activity", `${where}: tag still has placeholder text.`);
        if (dragDrop && columns > 1 && !(Number.isInteger(b.correctIndex) && b.correctIndex >= 0 && b.correctIndex < columns)) {
          E("activity", `${where}: pick which column it sorts into.`);
        }
        const rot = b.style?.transform?.rotate;
        if (rot !== undefined && /^-?0(\.0+)?deg$/.test(rot) && !dragDrop) W("activity", `${where}: rotation is 0° — documents look better tilted 1–4°.`);
      });

      if (dragDrop) (a.info.columnArray ?? []).forEach((h, k) => {
        if (!h || /^header$/i.test(h)) E("activity", `sort column ${k + 1} header is still blank.`);
      });

      if (tok && a.style) {
        const check = (val, dict, what) => {
          if (typeof val === "string" && dict && !(val in dict)) E("activity", `unknown ${what} "${val}".`);
        };
        const blk = a.style.block ?? {};
        check(blk.misc?.material, tok.misc.material, "material");
        check(blk.misc?.padding, tok.misc.padding, "padding");
        check(blk.dimension?.width, tok.dimension.width, "width");
        check(blk.dimension?.height, tok.dimension.height, "height");
        styles.forEach((s) => {
          for (const k of ["title", "subtitle", "passage", "fraction"]) {
            if (!s?.[k]) continue;
            check(s[k].size, tok.text.size, "font size");
            check(s[k].align, tok.text.align, "alignment");
            check(s[k].font, tok.text.font, "font");
          }
        });
      }
    }

    // ---- questions
    const q = c.questions;
    if (!q?.info) { E("questions", "has no questions."); return; }
    const answer = String(q.code?.answer ?? "");
    if (!answer) E("questions", "code word is empty.");
    if ((q.code?.userArray ?? []).length !== answer.length) E("questions", "code length and input boxes don't match.");
    const derived = deriveCode(q);

    if (q.info.type === "multiple-choice") {
      const items = q.contentArray ?? [];
      if (items.length !== 4) E("questions", `needs exactly 4 multiple-choice questions (has ${items.length}).`);
      items.forEach((it, k) => {
        const n = k + 1;
        if (!it.title || /^\s*\[<g>\d+\.\]\s*$/.test(it.title)) E("questions", `question ${n} has no text.`);
        if (PLACEHOLDER.test(it.title ?? "")) E("questions", `question ${n} still has placeholder text.`);
        const opts = it.paragraph ?? [];
        if (opts.length < 2) E("questions", `question ${n} needs at least 2 options.`);
        if (it.columns === 2 && opts.length > 4) E("questions", `question ${n}: 2 columns fit at most 4 options.`);
        if (!(it.correctIndex >= 0 && it.correctIndex < opts.length)) E("questions", `question ${n}: pick the correct answer.`);
        opts.forEach((o, j) => {
          const letters = mcLetters(o);
          if (!String(o).replace(MC_LETTER, "$1").trim()) E("questions", `question ${n}, option ${j + 1} is empty.`);
          else if (letters.length !== 1) E("questions", `question ${n}, option ${j + 1} needs exactly one code letter (has ${letters.length}).`);
        });
      });
    } else if (q.info.type === "crossword") {
      const cw = q.contentArray ?? {};
      const pz = cw.puzzle ?? [];
      if (pz.length === 0 || pz.some((r) => r.length !== pz[0].length)) E("questions", "crossword rows must all be the same length.");
      else if (pz.length !== 6 || pz[0].length !== 7) W("questions", `crossword grid is ${pz.length}×${pz[0].length}; the standard is 6×7.`);
      for (const cell of pz.flat()) {
        const p = parseCrosswordCell(cell);
        if (p && p.letter.length !== 1) E("questions", `crossword cell "${cell}" is malformed.`);
      }
      const labels = new Set(pz.flat().map(parseCrosswordCell).filter((p) => p?.label).map((p) => p.label));
      (cw.paragraph ?? []).forEach((clue, k) => {
        const L = String.fromCharCode(65 + k);
        if (!clue || PLACEHOLDER.test(clue)) E("questions", `clue ${L} is empty or placeholder.`);
        if (!labels.has(L)) E("questions", `clue ${L} has no starting cell in the grid.`);
      });
      for (const w of crosswordWords(pz)) {
        if (!w.label) W("questions", `grid shows an unlabeled ${w.dir} word "${w.word}".`);
      }
    } else if (q.info.type === "decoder") {
      (q.contentArray ?? []).forEach((it, k) => {
        if (!it.title) E("questions", `decoder clue ${k + 1} is empty.`);
        const marks = (String(it.word ?? "").match(/\[.\]/g) ?? []).length;
        if (marks !== 1) E("questions", `decoder word ${k + 1} needs exactly one [code letter] (has ${marks}).`);
      });
    } else {
      W("questions", `question type "${q.info.type}" isn't checked by the editor.`);
    }

    if (derived && answer && derived !== answer.toUpperCase()) {
      E("questions", `code letters spell "${derived}" but the code word is "${answer}".`);
    }
  });

  return issues;
}
