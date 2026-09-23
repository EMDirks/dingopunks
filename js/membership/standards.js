import { gameStandardsById } from "../game-standards.js";
import { escapeHtml } from "../membership-utils.js";
import { els } from "./context.js";

let modalGameId = null;

export function setStandardsModalGameId(gameId) {
  modalGameId = gameId;
}

export function animateStandardsBodyResize(body, inner, updateFn, { targetHeight, onComplete } = {}) {
  let fallback = null;
  let finished = false;

  function onEnd(e) {
    if (e.target !== body || e.propertyName !== "height") return;
    finish();
  }

  const finish = () => {
    if (finished) return;
    finished = true;
    if (fallback) clearTimeout(fallback);
    if (body) {
      body.removeEventListener("transitionend", onEnd);
      body.removeEventListener("transitioncancel", onEnd);
      body.style.height = "";
    }
    onComplete?.();
  };

  if (!body || !inner) {
    updateFn?.();
    finish();
    return;
  }
  if (prefersReducedMotion() || body.getClientRects().length === 0) {
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
  body.addEventListener("transitionend", onEnd);
  body.addEventListener("transitioncancel", onEnd);
  fallback = setTimeout(finish, 300);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let modalStandardsGroups = [];

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

export function setCollapsiblePanelOpen(panel, open, { animate = true } = {}) {
  if (!panel) return;
  if (!animate) panel.classList.add("dpaam-modal-standards-panel--instant");
  panel.classList.toggle("dpaam-modal-standards-panel--open", open);
  panel.inert = !open;
  if (!animate) {
    void panel.offsetHeight;
    panel.classList.remove("dpaam-modal-standards-panel--instant");
  }
}

function setModalStandardsPanelOpen(wrap, open, options = {}) {
  setCollapsiblePanelOpen(wrap?.querySelector(".dpaam-modal-standards-panel"), open, options);
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
      },
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
  inner.innerHTML = "";
  setModalStandardsPanelOpen(details, false, { animate: false });

  const groups = gameStandardsById[game.id] ?? [];
  if (!groups.length) {
    chips.innerHTML = "";
    details.hidden = true;
    return;
  }

  modalStandardsGroups = groups;
  chips.innerHTML = standardsChipsHtml(modalStandardsGroups);
  details.hidden = false;

  const firstChip = chips.querySelector(".dpaam-modal-standards-chip");
  if (firstChip) selectModalStandardsGroup(firstChip, { instant: true });
}

export { populateModalStandards, selectModalStandardsGroup };
