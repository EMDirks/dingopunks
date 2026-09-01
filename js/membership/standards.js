import { escapeHtml } from "../membership-utils.js";
import { els } from "./context.js";

let modalGameId = null;

export function setStandardsModalGameId(gameId) {
  modalGameId = gameId;
}

export function animateStandardsBodyResize(body, inner, updateFn, { targetHeight, onComplete } = {}) {
  const finish = () => {
    if (body) body.style.height = "";
    onComplete?.();
  };

  if (!body || !inner) {
    updateFn?.();
    finish();
    return;
  }
  if (prefersReducedMotion()) {
    updateFn?.();
    finish();
    return;
  }

  const startHeight = body.offsetHeight;
  body.style.height = `${startHeight}px`;
  updateFn?.();
  const endHeight = targetHeight ?? standardsBodyHeightForInner(body, inner);
  if (startHeight === endHeight) {
    finish();
    return;
  }
  void body.offsetHeight;
  body.style.height = `${endHeight}px`;
  body.addEventListener(
    "transitionend",
    function onEnd(e) {
      if (e.target !== body || e.propertyName !== "height") return;
      body.removeEventListener("transitionend", onEnd);
      finish();
    }
  );
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const standardsCache = new Map();

function findMatchingBracket(text, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < text.length; i++) {
    const ch = text[i];
    if (ch === "[") depth += 1;
    else if (ch === "]") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function eachCommonCoreBlock(text, fn) {
  const startRe = /commonCore:\s*\[/g;
  let match;
  while ((match = startRe.exec(text))) {
    const open = match.index + match[0].length - 1;
    const close = findMatchingBracket(text, open);
    if (close < 0) continue;
    fn(text.slice(open + 1, close));
  }
}

// Legacy resources tag objects `{ subject, category, standard }`.
// Newer resources tag string codes `"RL.2.1"`. Either schema can appear
// on reading or math files — detect per commonCore array, not by subject.
function isLegacyObjectBlock(block) {
  return /standard\s*:/.test(block);
}

const STANDARD_GROUP_NAMES = {
  RL: "Reading: Literature",
  RI: "Reading: Informational Text",
  RF: "Reading: Foundational Skills",
  RH: "Reading: History/Social Studies",
  RST: "Reading: Science & Technical Subjects",
  L: "Reading: Language",
  W: "Writing",
  SL: "Speaking & Listening",
  OA: "Operations and Algebraic Thinking",
  NBT: "Number and Operations in Base Ten",
  NF: "Number and Operations Fractions",
  MD: "Measurement and Data",
  G: "Geometry",
  CC: "Counting and Cardinality",
  EE: "Expressions and Equations",
  NS: "The Number System",
  RP: "Ratios and Proportional Relationships",
  SP: "Statistics and Probability",
  F: "Functions",
  MP: "Standards for Mathematical Practice",
};

const CCRA_GROUP_NAMES = {
  R: "Anchor Standards for Reading",
  L: "Anchor Standards for Language",
  W: "Anchor Standards for Writing",
  SL: "Anchor Standards for Speaking & Listening",
};

function standardGroupFromCode(code) {
  const ccra = code.match(/^CCRA\.([A-Z]+)/);
  if (ccra) {
    return {
      key: `CCRA.${ccra[1]}`,
      name: CCRA_GROUP_NAMES[ccra[1]] || "Anchor Standards",
    };
  }
  const prefix = code.match(/^(?:\d+\.)?([A-Z]+)/);
  if (prefix && STANDARD_GROUP_NAMES[prefix[1]]) {
    return { key: prefix[1], name: STANDARD_GROUP_NAMES[prefix[1]] };
  }
  return { key: "Other", name: "Other" };
}

function entriesFromLegacyObjectBlock(block) {
  const entries = [];
  const objRe = /\{[^{}]*\}/g;
  let match;
  while ((match = objRe.exec(block))) {
    const obj = match[0];
    const standard = obj.match(/standard:\s*['"]([A-Za-z0-9.]+)['"]/);
    if (!standard) continue;
    const group = standardGroupFromCode(standard[1]);
    entries.push({ code: standard[1], key: group.key, name: group.name });
  }
  return entries;
}

function entriesFromStringBlock(block) {
  return [...block.matchAll(/['"]([A-Za-z0-9.]+)['"]/g)].map((m) => {
    const group = standardGroupFromCode(m[1]);
    return { code: m[1], key: group.key, name: group.name };
  });
}

function compareStandardGroups(a, b) {
  const aAnchor = a.startsWith("Anchor Standards");
  const bAnchor = b.startsWith("Anchor Standards");
  if (aAnchor && !bAnchor) return -1;
  if (bAnchor && !aAnchor) return 1;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function compareStandardEntries(a, b) {
  const groupOrder = compareStandardGroups(a.name, b.name);
  if (groupOrder) return groupOrder;
  return a.code.localeCompare(b.code, undefined, { numeric: true, sensitivity: "base" });
}

function extractCommonCoreEntries(text) {
  const byCode = new Map();
  eachCommonCoreBlock(text, (block) => {
    const entries = isLegacyObjectBlock(block)
      ? entriesFromLegacyObjectBlock(block)
      : entriesFromStringBlock(block);
    for (const entry of entries) {
      if (!byCode.has(entry.code)) byCode.set(entry.code, entry);
    }
  });
  return [...byCode.values()].sort(compareStandardEntries);
}

function groupStandardEntries(entries) {
  const groups = [];
  let current = null;
  for (const entry of entries) {
    if (!current || current.key !== entry.key) {
      current = { key: entry.key, name: entry.name, codes: [] };
      groups.push(current);
    }
    current.codes.push(entry.code);
  }
  return groups;
}

function standardsGroupHtml(group) {
  return `<div class="dpaam-modal-standards-group-label">${escapeHtml(group.name)}</div>
    <p class="dpaam-modal-standards-codes">${group.codes
      .map((code) => `<span class="dpaam-modal-standards-code">${escapeHtml(code)}</span>`)
      .join("")}</p>`;
}

function standardsChipsHtml(groups) {
  return groups
    .map(
      (group) =>
        `<button
          type="button"
          class="dpaam-tag dpaam-modal-standards-chip"
          data-action="select-standard-group"
          data-group-key="${escapeHtml(group.key)}"
          aria-pressed="false"
          aria-label="${escapeHtml(group.name)}"
        >${escapeHtml(group.key)}</button>`,
    )
    .join("");
}

function loadStandardsForPath(path) {
  if (!standardsCache.has(path)) {
    const request = fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.text();
      })
      .then(extractCommonCoreEntries)
      .catch((err) => {
        standardsCache.delete(path);
        throw err;
      });
    standardsCache.set(path, request);
  }
  return standardsCache.get(path);
}

let modalStandardsGroups = [];

function setModalStandardsPanelOpen(wrap, open, { animate = true } = {}) {
  const panel = wrap?.querySelector(".dpaam-modal-standards-panel");
  if (!panel) return;
  if (!animate) panel.classList.add("dpaam-modal-standards-panel--instant");
  panel.classList.toggle("dpaam-modal-standards-panel--open", open);
  panel.inert = !open;
  if (!animate) {
    void panel.offsetHeight;
    panel.classList.remove("dpaam-modal-standards-panel--instant");
  }
}

function standardsBodyHeightForInner(body, inner) {
  const style = getComputedStyle(body);
  const frame =
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom) +
    parseFloat(style.borderTopWidth) +
    parseFloat(style.borderBottomWidth);
  return inner.offsetHeight + frame;
}

function selectModalStandardsGroup(btn, { instant = false } = {}) {
  const wrap = btn.closest(".dpaam-modal-standards");
  const inner = wrap?.querySelector(".dpaam-modal-standards-inner");
  const body = wrap?.querySelector(".dpaam-modal-standards-body");
  const panel = wrap?.querySelector(".dpaam-modal-standards-panel");
  if (!wrap || !inner) return;

  const already = btn.getAttribute("aria-pressed") === "true";
  wrap.querySelectorAll(".dpaam-modal-standards-chip").forEach((chip) => {
    chip.setAttribute("aria-pressed", "false");
  });

  if (already) {
    animateStandardsBodyResize(
      body,
      inner,
      () => {
        inner.innerHTML = "";
      },
      {
        targetHeight: 0,
        onComplete: () => setModalStandardsPanelOpen(wrap, false),
      }
    );
    return;
  }

  const group = modalStandardsGroups.find((g) => g.key === btn.dataset.groupKey);
  if (!group) return;
  btn.setAttribute("aria-pressed", "true");

  const isOpen = panel?.classList.contains("dpaam-modal-standards-panel--open");
  if (isOpen) {
    animateStandardsBodyResize(body, inner, () => {
      inner.innerHTML = standardsGroupHtml(group);
    });
  } else {
    inner.innerHTML = standardsGroupHtml(group);
    setModalStandardsPanelOpen(wrap, true, { animate: !instant });
  }
}

function populateModalStandards(game) {
  const details = els.modalBody.querySelector(".dpaam-modal-standards");
  const chips = details?.querySelector(".dpaam-modal-standards-chips");
  const inner = details?.querySelector(".dpaam-modal-standards-inner");
  if (!details || !chips || !inner) return;
  modalStandardsGroups = [];
  if (!game.path) {
    details.hidden = true;
    return;
  }

  const gameId = game.id;
  loadStandardsForPath(game.path)
    .then((entries) => {
      if (modalGameId !== gameId) return;
      if (!entries.length) {
        details.hidden = true;
        return;
      }
      modalStandardsGroups = groupStandardEntries(entries);
      chips.innerHTML = standardsChipsHtml(modalStandardsGroups);
      details.hidden = false;
      const firstChip = chips.querySelector(".dpaam-modal-standards-chip");
      if (firstChip) selectModalStandardsGroup(firstChip, { instant: true });
    })
    .catch(() => {
      if (modalGameId !== gameId) return;
      chips.innerHTML = `<p class="dpaam-modal-standards-status">${escapeHtml("Couldn't load standards.")}</p>`;
      inner.innerHTML = "";
      setModalStandardsPanelOpen(details, false);
      details.hidden = false;
    });
}

export {
  animateStandardsBodyResize,
  populateModalStandards,
  selectModalStandardsGroup,
  setStandardsModalGameId,
};
