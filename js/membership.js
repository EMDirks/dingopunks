// Dingo Punks: All-Access Membership — teacher dashboard
//
// Vanilla ES module. State lives only in memory. Render functions read from
// `state`; mutations go through the named action functions below — those
// are the seams a real backend will plug into later.

import { games } from "./games.js";
import { thumbHtml } from "./thumbnails.js";

// ---------- constants ----------

const MAX_ACTIVE_CODES = 20;
const CODE_LENGTH = 5;
const CODE_CHARS = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789"; // no O, no 0
const CODE_TTL_MS = 168 * 60 * 60 * 1000; // 7 days
const QUICK_START_STATE_KEY = "dpaam-quick-start-state";
const QUICK_START_LEGACY_DISMISS_KEY = "dpaam-quick-start-dismissed";

// ---------- state ----------

const state = {
  favorites: [],            // ordered array of game ids
  activeCodes: [],          // [{ gameId, code, expiresAt }]
  filters: { season: "all", grade: "all", subject: "all" },
  favoritesOpen: true,
};

// ---------- DOM refs ----------

const els = {
  activeSection: document.getElementById("dpaam-active-section"),
  activeCount: document.getElementById("dpaam-active-count"),
  activeList: document.getElementById("dpaam-active-list"),
  favoritesSection: document.getElementById("dpaam-favorites-section"),
  favoritesToggle: document.getElementById("dpaam-favorites-toggle"),
  favoritesList: document.getElementById("dpaam-favorites-list"),
  favoritesCount: document.getElementById("dpaam-favorites-count"),
  filters: {
    season: document.getElementById("dpaam-filter-season"),
    grade: document.getElementById("dpaam-filter-grade"),
    subject: document.getElementById("dpaam-filter-subject"),
  },
  libraryList: document.getElementById("dpaam-library-list"),
  libraryCount: document.getElementById("dpaam-library-count"),
  libraryEmpty: document.getElementById("dpaam-library-empty"),
  modal: document.getElementById("dpaam-modal"),
  modalTitle: document.getElementById("dpaam-modal-title"),
  modalBody: document.getElementById("dpaam-modal-body"),
  modalAdd: document.getElementById("dpaam-modal-add"),
  modalPreview: document.getElementById("dpaam-modal-preview"),
  shareModal: document.getElementById("dpaam-share-modal"),
  shareModalBody: document.getElementById("dpaam-share-modal-body"),
  shareModalClose: document.getElementById("dpaam-share-modal-close"),
  limitModal: document.getElementById("dpaam-limit-modal"),
  limitModalDismiss: document.getElementById("dpaam-limit-modal-dismiss"),
  quickStart: document.getElementById("dpaam-quick-start"),
  quickStartClose: document.getElementById("dpaam-quick-start-close"),
  helpBtn: document.getElementById("dpaam-help-btn"),
};

// ---------- helpers ----------

function gameById(id) {
  return games.find((g) => g.id === id);
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function activeCodeFor(id) {
  return state.activeCodes.find((c) => c.gameId === id);
}

function formatExpiresLabel(expiresAt) {
  const remaining = expiresAt - Date.now();
  if (remaining <= 0) return "Expired";

  const totalMinutes = Math.floor(remaining / 60000);
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function pruneExpiredCodes() {
  const before = state.activeCodes.length;
  const now = Date.now();
  state.activeCodes = state.activeCodes.filter((c) => c.expiresAt > now);
  return state.activeCodes.length !== before;
}

function generateCodeString() {
  let out = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    out += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  }
  return out;
}

// kebab-case / array values -> sentence-case display strings
const LABEL_OVERRIDES = {
  "all-year": "All Year",
  "valentines-day": "Valentine's Day",
  "st-patricks-day": "St. Patrick's Day",
  "end-of-year": "End of Year",
  "back-to-school": "Back to School",
  "authors-purpose": "Author's Purpose",
};

function formatLabel(value) {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.join(", ");
  const key = String(value);
  if (LABEL_OVERRIDES[key]) return LABEL_OVERRIDES[key];
  return key
    .replace(/-/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function gradeLabel(grades) {
  if (!grades || grades.length === 0) return "";
  if (grades.length === 1) return `Grade ${grades[0]}`;
  return `Grades ${grades.join(", ")}`;
}

function modalGradeLabel(grades) {
  if (!grades || grades.length === 0) return "";
  const nums = grades.map(String);
  if (nums.length === 1) return `Grade ${nums[0]}`;
  if (nums.length === 2) return `Grades ${nums[0]} and ${nums[1]}`;
  return `Grades ${nums.slice(0, -1).join(", ")}, and ${nums[nums.length - 1]}`;
}

function tagsHtml(game) {
  const tags = [];
  if (game.topic) tags.push(formatLabel(game.topic));
  if (game.grades && game.grades.length) tags.push(gradeLabel(game.grades));
  return `<div class="dpaam-tags">${tags
    .map((t) => `<span class="dpaam-tag">${escapeHtml(t)}</span>`)
    .join("")}</div>`;
}

function libThemeHtml(game) {
  const gradeHtml =
    game.grades && game.grades.length
      ? `<div class="dpaam-tags">${game.grades
          .map(
            (g) =>
              `<span class="dpaam-tag dpaam-tag--grade-${escapeHtml(String(g))}">Grade ${escapeHtml(String(g))}</span>`,
          )
          .join("")}</div>`
      : "";
  const season = game.season
    ? `<span class="dpaam-lib-meta-season">${escapeHtml(formatLabel(game.season))}</span>`
    : "";
  const theme = game.title
    ? `<span class="dpaam-lib-meta-theme">${escapeHtml(game.title)}</span>`
    : "";
  const metaPart =
    season && theme
      ? `${season}<span class="dpaam-lib-meta-sep" aria-hidden="true">·</span>${theme}`
      : season || theme;
  if (!gradeHtml && !metaPart) return "";
  return [
    metaPart ? `<div class="dpaam-lib-meta">${metaPart}</div>` : "",
    gradeHtml,
  ].join("");
}

function libTagsHtml(game) {
  if (!game.grades || game.grades.length === 0) return "";
  return `<div class="dpaam-tags">${game.grades
    .map((g) => `<span class="dpaam-tag dpaam-tag--grade-${escapeHtml(String(g))}">Grade ${escapeHtml(String(g))}</span>`)
    .join("")}</div>`;
}

function activeCardTagsRowHtml(game, expiresAt) {
  const gradeTags =
    game.grades && game.grades.length
      ? game.grades
          .map(
            (g) =>
              `<span class="dpaam-tag dpaam-tag--grade-${escapeHtml(String(g))}">Grade ${escapeHtml(String(g))}</span>`,
          )
          .join("")
      : "";
  return `<div class="dpaam-tags dpaam-active-card-tags-row">${gradeTags}<span class="dpaam-active-card-timer">${escapeHtml(formatExpiresLabel(expiresAt))}</span></div>`;
}

// During a live drag-reorder, decide which sibling row the dragged element
// should land *before*. Returns null to mean "append to the end". The
// currently-dragged element is skipped so it can never displace itself.
function rowAfterPointer(listEl, clientY, dragEl) {
  const rows = Array.from(listEl.querySelectorAll(".dpaam-fav-row")).filter(
    (el) => el !== dragEl,
  );
  for (const row of rows) {
    const rect = row.getBoundingClientRect();
    if (clientY < rect.top + rect.height / 2) return row;
  }
  return null;
}

// FLIP reorder: record each non-dragged row's pre-mutation top, run the
// DOM mutation, then animate each row from its old position to its new
// position via the Web Animations API. Any in-flight animation on a row
// is cancelled so rapid dragover events don't queue up.
const flipAnims = new WeakMap();
function flipReorder(listEl, dragEl, mutate) {
  const rows = Array.from(listEl.querySelectorAll(".dpaam-fav-row"));
  const firstTops = new Map();
  for (const r of rows) {
    if (r === dragEl) continue;
    firstTops.set(r, r.getBoundingClientRect().top);
  }

  mutate();

  for (const r of rows) {
    if (r === dragEl) continue;
    const newTop = r.getBoundingClientRect().top;
    const delta = firstTops.get(r) - newTop;
    if (!delta) continue;

    const prev = flipAnims.get(r);
    if (prev) prev.cancel();

    const anim = r.animate(
      [
        { transform: `translateY(${delta}px)` },
        { transform: "translateY(0)" },
      ],
      { duration: 180, easing: "ease" },
    );
    flipAnims.set(r, anim);
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return ch;
    }
  });
}

function codeDisplayHtml(code, rootClass, charClass) {
  const safe = escapeHtml(code);
  const chars = [...code]
    .map((ch) => `<span class="${charClass}" aria-hidden="true">${escapeHtml(ch)}</span>`)
    .join("");
  return `<span class="${rootClass}" data-code="${safe}" aria-label="Game code ${safe}">${chars}</span>`;
}

function favCodeDisplayHtml(code) {
  return codeDisplayHtml(code, "dpaam-fav-code", "dpaam-fav-code-char");
}

// ---------- action functions (the seams a backend plugs into) ----------

function addFavorite(gameId) {
  if (!gameById(gameId)) return;
  if (isFavorite(gameId)) return;
  state.favorites.push(gameId);
  renderFavorites();
  renderLibrary();
}

function removeFavorite(gameId) {
  state.favorites = state.favorites.filter((id) => id !== gameId);
  // Removing a favorite also cancels any active code for that game.
  state.activeCodes = state.activeCodes.filter((c) => c.gameId !== gameId);
  renderFavorites();
  renderActiveCodes();
  renderLibrary();
}

function setFavoritesOrder(orderedIds) {
  // Only accept reorderings of the exact existing set.
  if (orderedIds.length !== state.favorites.length) return;
  const current = new Set(state.favorites);
  if (!orderedIds.every((id) => current.has(id))) return;
  state.favorites = orderedIds.slice();
}

function generateCode(gameId) {
  if (activeCodeFor(gameId)) return;
  if (state.activeCodes.length >= MAX_ACTIVE_CODES) {
    openLimitModal();
    return;
  }
  if (!isFavorite(gameId)) addFavorite(gameId);
  state.activeCodes.push({
    gameId,
    code: generateCodeString(),
    expiresAt: Date.now() + CODE_TTL_MS,
  });
  renderActiveCodes();
  renderFavorites();
}

function cancelCode(gameId) {
  state.activeCodes = state.activeCodes.filter((c) => c.gameId !== gameId);
  renderActiveCodes();
  renderFavorites();
}

// ---------- renderers ----------

function renderActiveCodes() {
  const expiredRemoved = pruneExpiredCodes();
  els.activeSection.hidden = state.activeCodes.length === 0;

  if (state.activeCodes.length === 0) {
    els.activeList.innerHTML = "";
    if (expiredRemoved) renderFavorites();
    return;
  }

  els.activeCount.textContent = `${state.activeCodes.length} / ${MAX_ACTIVE_CODES} active games`;

  els.activeList.innerHTML = state.activeCodes
    .map((entry) => {
      const game = gameById(entry.gameId);
      if (!game) return "";
      const topic = game.topic ? formatLabel(game.topic) : game.title;
      return `
        <article class="dpaam-active-card" role="listitem" data-game-id="${escapeHtml(game.id)}">
          ${thumbHtml(game)}
          <div class="dpaam-lib-main">
            <h3 class="dpaam-active-card-title">${escapeHtml(topic)}</h3>
            ${activeCardTagsRowHtml(game, entry.expiresAt)}
          </div>
          <div class="dpaam-active-card-actions">
            <button type="button" class="dpaam-btn dpaam-btn-primary" data-action="share-code">Share</button>
            <button
              type="button"
              class="dpaam-fav-remove"
              data-action="cancel-code"
              aria-label="Cancel code"
            >×</button>
          </div>
        </article>`;
    })
    .join("");
}

function renderFavorites() {
  const expiredRemoved = pruneExpiredCodes();
  const hasFavorites = state.favorites.length > 0;

  els.favoritesSection.hidden = !hasFavorites;

  // No favorites → section hidden; keep list state ready for first add
  if (!hasFavorites) {
    state.favoritesOpen = true;
    els.favoritesList.innerHTML = "";
    return;
  }

  els.favoritesToggle.disabled = false;

  els.favoritesCount.textContent = `${state.favorites.length} ${state.favorites.length === 1 ? "favorite" : "favorites"}`;
  // Active count in header — removed for now; restore when needed.
  // const activeCount = state.activeCodes.length;
  // els.activeCount.hidden = activeCount === 0;
  // if (activeCount > 0) {
  //   els.activeCount.textContent = `${activeCount} / ${MAX_ACTIVE_CODES} game codes`;
  // }
  els.favoritesToggle.setAttribute("aria-expanded", String(state.favoritesOpen));
  els.favoritesList.hidden = !state.favoritesOpen;

  els.favoritesList.innerHTML = state.favorites
    .map((id) => {
      const game = gameById(id);
      if (!game) return "";
      const active = activeCodeFor(id);

      // dpaam-fav-code-footer hidden for now; restore when needed.
      // `<div class="dpaam-fav-code-footer">
      //   <span class="dpaam-fav-timer">${escapeHtml(active.expiresLabel)}</span>
      //   <button type="button" class="dpaam-fav-cancel-code" data-action="cancel-code">
      //     Cancel
      //   </button>
      //   <button type="button" class="dpaam-fav-cancel-code dpaam-fav-share-code" data-action="share-code">
      //     Share
      //   </button>
      // </div>`

      const codeOrGenerate = active
        ? `<button type="button" class="dpaam-btn dpaam-btn-done dpaam-code-generated-mark" disabled aria-label="Activated">✓ &nbsp;Activated</button>`
        : `
          <button type="button" class="dpaam-btn dpaam-btn-primary" data-action="generate-code">
            Activate
          </button>`;

      const actionBlock = `
        <div class="dpaam-fav-code-actions">
          <button type="button" class="dpaam-btn dpaam-btn-details" data-action="open-details">Details</button>
          ${codeOrGenerate}
        </div>`;

      const topic = game.topic ? formatLabel(game.topic) : game.title;
      return `
        <li
          class="dpaam-fav-row"
          data-game-id="${escapeHtml(game.id)}"
        >
          <span class="dpaam-fav-handle" draggable="true" aria-hidden="true">⋮⋮</span>
          ${thumbHtml(game)}
          <div class="dpaam-fav-row-body">
            <div class="dpaam-lib-main">
              <div class="dpaam-lib-topic-row">
                <h3 class="dpaam-lib-topic">${escapeHtml(topic)}</h3>
              </div>
              ${libThemeHtml(game)}
            </div>
            <div class="dpaam-fav-actions">
              ${actionBlock}
              <button
                type="button"
                class="dpaam-fav-remove"
                data-action="remove-favorite"
                aria-label="Remove from favorites"
              >×</button>
            </div>
          </div>
        </li>`;
    })
    .join("");

  if (expiredRemoved) renderActiveCodes();
}

function renderLibrary() {
  const f = state.filters;

  const filtered = games.filter((g) => {
    if (f.season !== "all" && g.season !== f.season) return false;
    if (f.subject !== "all" && g.subject !== f.subject) return false;
    if (f.grade !== "all") {
      const wanted = Number(f.grade);
      if (!g.grades || !g.grades.includes(wanted)) return false;
    }
    return true;
  });

  els.libraryCount.textContent = `${filtered.length} escape room${filtered.length === 1 ? "" : "s"}`;
  els.libraryEmpty.hidden = filtered.length !== 0;

  els.libraryList.innerHTML = filtered
    .map((game) => {
      const saved = isFavorite(game.id);
      const addAction = saved
        ? `<button type="button" class="dpaam-btn dpaam-btn-done dpaam-saved-mark" disabled aria-label="Already in favorites">✓ &nbsp;Added</button>`
        : `<button type="button" class="dpaam-btn dpaam-btn-add" data-action="save-favorite">+ Add</button>`;
      const topic = game.topic ? formatLabel(game.topic) : game.title;
      return `
        <li
          class="dpaam-lib-row"
          data-game-id="${escapeHtml(game.id)}"
          tabindex="0"
          aria-label="${escapeHtml(game.title)} — ${escapeHtml(topic)}"
        >
          ${thumbHtml(game)}
          <div class="dpaam-lib-row-body">
            <div class="dpaam-lib-main">
              <div class="dpaam-lib-topic-row">
                <h3 class="dpaam-lib-topic">${escapeHtml(topic)}</h3>
              </div>
              ${libThemeHtml(game)}
            </div>
            <div class="dpaam-lib-actions">
              <button type="button" class="dpaam-btn dpaam-btn-details" data-action="open-details">Details</button>
              ${addAction}
            </div>
          </div>
        </li>`;
    })
    .join("");
}

// ---------- filter dropdown setup ----------

function populateFilters() {
  const seasons = uniqueSorted(games.map((g) => g.season));
  const subjects = uniqueSorted(games.map((g) => g.subject));
  const grades = uniqueSorted(games.flatMap((g) => g.grades || [])).sort(
    (a, b) => Number(a) - Number(b),
  );

  fillSelect(els.filters.season, seasons, formatLabel, "All seasons");
  fillSelect(els.filters.grade, grades, (n) => `Grade ${n}`, "All grades");
  fillSelect(els.filters.subject, subjects, formatLabel, "All subjects");
}

function uniqueSorted(values) {
  return Array.from(new Set(values.filter((v) => v !== undefined && v !== null && v !== "")));
}

function fillSelect(selectEl, values, labelFn, allLabel = "All") {
  const opts = [`<option value="all">${escapeHtml(allLabel)}</option>`].concat(
    values.map((v) => `<option value="${escapeHtml(String(v))}">${escapeHtml(labelFn(v))}</option>`),
  );
  selectEl.innerHTML = opts.join("");
}

// ---------- modal ----------

const SHOW_STANDARD_IN_MODAL = false;

let modalGameId = null;
let modalContext = "library"; // "library" | "favorites"

function openLimitModal() {
  if (typeof els.limitModal.showModal === "function") {
    els.limitModal.showModal();
  } else {
    els.limitModal.setAttribute("open", "");
  }
}

function openModal(gameId, context = "library") {
  const game = gameById(gameId);
  if (!game) return;
  modalGameId = gameId;
  modalContext = context;
  els.modalTitle.textContent = "Escape Room Details";
  const skillsHtml =
    game.skills && game.skills.filter((s) => s).length
      ? `<dt>Skills</dt><dd class="dpaam-modal-skills"><ul class="dpaam-modal-skills-list">${game.skills
          .filter((s) => s)
          .map((s) => `<li>${escapeHtml(s)}</li>`)
          .join("")}</ul></dd>`
      : "";

  const standardHtml = SHOW_STANDARD_IN_MODAL
    ? `<dt>Standard</dt><dd>${
        game.standards && game.standards.length
          ? escapeHtml(game.standards.join(", "))
          : "None listed"
      }</dd>`
    : "";

  const dlHtml = `
      ${game.topic ? `<dt>Topic</dt><dd>${escapeHtml(formatLabel(game.topic))}</dd>` : ""}
      <dt>Grade</dt><dd>${escapeHtml(modalGradeLabel(game.grades))}</dd>
      ${skillsHtml}
      <div class="dpaam-modal-dl-divider" role="separator"></div>
      <dt>Season</dt><dd>${escapeHtml(formatLabel(game.season))}</dd>
      <dt>Theme</dt><dd>${escapeHtml(game.title)}</dd>
      ${standardHtml}`;
  els.modalBody.innerHTML = modalBodyHtml(game, dlHtml);

  refreshModalActionButton();

  if (typeof els.modal.showModal === "function") {
    els.modal.showModal();
  } else {
    els.modal.setAttribute("open", "");
  }
}

function refreshModalActionButton() {
  if (!modalGameId) return;
  const btn = els.modalAdd;

  if (modalContext === "favorites") {
    if (activeCodeFor(modalGameId)) {
      btn.className = "dpaam-btn dpaam-btn-done dpaam-code-generated-mark";
      btn.innerHTML = "✓ &nbsp;Activated";
      btn.disabled = true;
      btn.setAttribute("aria-label", "Activated");
    } else {
      btn.className = "dpaam-btn dpaam-btn-primary";
      btn.textContent = "Activate";
      btn.disabled = false;
      btn.removeAttribute("aria-label");
    }
    return;
  }

  if (isFavorite(modalGameId)) {
    btn.className = "dpaam-btn dpaam-btn-done dpaam-saved-mark";
    btn.innerHTML = "✓ &nbsp;Added";
    btn.disabled = true;
    btn.setAttribute("aria-label", "Already in favorites");
  } else {
    btn.className = "dpaam-btn dpaam-btn-add";
    btn.textContent = "+ Add";
    btn.disabled = false;
    btn.removeAttribute("aria-label");
  }
}

function closeAnimatedModal(modal) {
  if (!modal.open) return;
  if (modal.classList.contains("is-closing")) return;

  modal.classList.add("is-closing");

  function finish() {
    modal.removeEventListener("animationend", onAnimEnd);
    modal.classList.remove("is-closing");
    if (typeof modal.close === "function") modal.close();
    else modal.removeAttribute("open");
  }

  function onAnimEnd(e) {
    if (e.animationName !== "dpaam-modal-out") return;
    clearTimeout(fallback);
    finish();
  }

  const fallback = setTimeout(finish, 300);
  modal.addEventListener("animationend", onAnimEnd);
}

let shareGameId = null;
let shareCode = null;

function modalThumbHtml(game) {
  return game.thumbnail
    ? `<img class="dpaam-modal-thumb" src="${escapeHtml(game.thumbnail)}" alt="" loading="lazy" decoding="async" />`
    : `<span class="dpaam-modal-thumb dpaam-modal-thumb--empty"></span>`;
}

function modalBodyHtml(game, dlInner) {
  return `${modalThumbHtml(game)}<dl class="dpaam-modal-dl">${dlInner}</dl>`;
}

function shareModalHtml(game, code) {
  const dlHtml = `
      <dt><strong>Option 1</strong><br>Game Code + URL</dt>
      <dd>
        Have your students enter the game code <strong class="dpaam-share-code">${escapeHtml(code)}</strong> at <a href="https://play.dingopunks.com" target="_blank" rel="noopener">play.dingopunks.com</a>.
      </dd>
      <div class="dpaam-modal-dl-divider" role="separator"></div>
      <dt><strong>Option 2</strong><br>Google Classroom</dt>
      <dd class="dpaam-modal-share-classroom">
        <div id="classroom-share-btn"></div>
        <span class="dpaam-classroom-share-label">← Click to share to your classroom.</span>
      </dd>`;
  return modalBodyHtml(game, dlHtml);
}

function resetShareCopyButtons() {
  const body = els.shareModalBody;
  if (!body) return;
  restoreShareCopyButton(body, "dpaam-share-copy-link", "copy-share-link", "Copy Link");
  restoreShareCopyButton(body, "dpaam-share-copy", "copy-share-code", "Copy Code");
}

function restoreShareCopyButton(container, id, action, label) {
  if (container.querySelector("#" + id)) return;
  const mark = container.querySelector(`.dpaam-share-copied[data-for="${action}"]`);
  if (!mark) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "dpaam-btn dpaam-btn-primary";
  btn.id = id;
  btn.dataset.action = action;
  btn.textContent = label;
  mark.replaceWith(btn);
}

function classroomShareTitle(game) {
  if (!game?.topic) return "Dingo Punks Escape Room";
  return `Dingo Punks Escape Room • ${formatLabel(game.topic)}`;
}

const CLASSROOM_SHARE_BODY = "Click the link to play your escape room!";

function openShareModal(gameId) {
  const game = gameById(gameId);
  const active = activeCodeFor(gameId);
  if (!game || !active) return;

  shareGameId = gameId;
  shareCode = active.code;
  resetShareCopyButtons();
  els.shareModalBody.innerHTML = shareModalHtml(game, active.code);

  const classroomBtnEl = document.getElementById("classroom-share-btn");
  if (classroomBtnEl) {
    classroomBtnEl.innerHTML = "";
    if (window.gapi?.sharetoclassroom) {
      gapi.sharetoclassroom.render("classroom-share-btn", {
        url: "https://game.dingopunks.com?code=" + active.code,
        title: classroomShareTitle(game),
        body: CLASSROOM_SHARE_BODY,
        itemtype: "material",
        size: 32,
        theme: "classic",
      });
    }
  }

  if (typeof els.shareModal.showModal === "function") {
    els.shareModal.showModal();
  } else {
    els.shareModal.setAttribute("open", "");
  }
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}

function showShareCopied(btn) {
  const mark = document.createElement("button");
  mark.type = "button";
  mark.className = "dpaam-btn dpaam-btn-done dpaam-share-copied";
  mark.dataset.for = btn.dataset.action;
  mark.disabled = true;
  mark.setAttribute("aria-live", "polite");
  mark.innerHTML = "✓ &nbsp;Copied";
  btn.replaceWith(mark);
}

async function copyShareCode(btn) {
  if (!shareCode) return;
  await copyToClipboard(shareCode);
  showShareCopied(btn);
}

async function copyShareLink(btn) {
  if (!shareCode) return;
  const link = "https://play.dingopunks.com?code=" + encodeURIComponent(shareCode);
  await copyToClipboard(link);
  showShareCopied(btn);
}

function shareToGoogleClassroom() {
  if (!shareCode) return;
  const game = shareGameId ? gameById(shareGameId) : null;
  const title = game ? classroomShareTitle(game) : "Dingo Punks Escape Room";
  const shareUrl =
    "https://classroom.google.com/share?url=" +
    encodeURIComponent("https://play.dingopunks.com") +
    "&title=" +
    encodeURIComponent(title) +
    "&body=" +
    encodeURIComponent(CLASSROOM_SHARE_BODY);
  window.open(shareUrl, "_blank", "noopener");
}

function wireAnimatedModal(modal, onClose) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeAnimatedModal(modal);
  });

  modal.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeAnimatedModal(modal);
  });

  modal.querySelector(".dpaam-modal-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    closeAnimatedModal(modal);
  });

  modal.addEventListener("close", () => {
    onClose?.();
  });
}

// ---------- event wiring ----------

function wireEvents() {
  // Favorites toggle (open/close)
  els.favoritesToggle.addEventListener("click", () => {
    state.favoritesOpen = !state.favoritesOpen;
    renderFavorites();
  });

  // Active codes — delegated
  els.activeList.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const card = btn.closest("[data-game-id]");
    if (!card) return;
    const gameId = card.dataset.gameId;
    switch (btn.dataset.action) {
      case "cancel-code": cancelCode(gameId); break;
      case "share-code": openShareModal(gameId); break;
    }
  });

  // Favorites — delegated
  els.favoritesList.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const row = btn.closest("[data-game-id]");
    if (!row) return;
    const gameId = row.dataset.gameId;
    switch (btn.dataset.action) {
      case "generate-code": generateCode(gameId); break;
      case "cancel-code": cancelCode(gameId); break;
      case "share-code": openShareModal(gameId); break;
      case "open-details": openModal(gameId, "favorites"); break;
      case "remove-favorite": removeFavorite(gameId); break;
    }
  });

  // Favorites — live drag-and-drop reorder.
  //
  // While the user drags, we move the actual <li> in the DOM on every
  // dragover, so neighboring rows visibly slide out of the way to make
  // room. We avoid re-rendering during the drag (which would destroy the
  // node the browser is dragging). On dragend we sync state from the DOM.
  let dragEl = null;

  els.favoritesList.addEventListener("dragstart", (e) => {
    if (!e.target.closest(".dpaam-fav-handle")) return;
    const row = e.target.closest(".dpaam-fav-row");
    if (!row) return;
    dragEl = row;

    // Drag starts on the handle, so the default ghost is only the grip icon.
    // Use the in-list row (still under .dpaam) so tokens and styles match exactly.
    const rect = row.getBoundingClientRect();
    e.dataTransfer.setDragImage(
      row,
      e.clientX - rect.left,
      e.clientY - rect.top,
    );
    // Defer placeholder styling until after the browser snapshots the drag image.
    requestAnimationFrame(() => row.classList.add("is-dragging"));

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", row.dataset.gameId || "");
  });

  els.favoritesList.addEventListener("dragend", () => {
    if (!dragEl) return;
    dragEl.classList.remove("is-dragging");
    dragEl = null;
    const newOrder = Array.from(
      els.favoritesList.querySelectorAll(".dpaam-fav-row"),
    ).map((el) => el.dataset.gameId);
    setFavoritesOrder(newOrder);
  });

  els.favoritesList.addEventListener("dragover", (e) => {
    if (!dragEl) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    const after = rowAfterPointer(els.favoritesList, e.clientY, dragEl);
    if (after == null) {
      if (els.favoritesList.lastElementChild !== dragEl) {
        flipReorder(els.favoritesList, dragEl, () => {
          els.favoritesList.appendChild(dragEl);
        });
      }
    } else if (after !== dragEl && after !== dragEl.nextElementSibling) {
      flipReorder(els.favoritesList, dragEl, () => {
        els.favoritesList.insertBefore(dragEl, after);
      });
    }
  });

  els.favoritesList.addEventListener("drop", (e) => {
    if (dragEl) e.preventDefault();
  });

  // Filters
  Object.entries(els.filters).forEach(([key, sel]) => {
    sel.addEventListener("change", () => {
      state.filters[key] = sel.value;
      renderLibrary();
    });
  });

  // Library — row click opens modal; + Add button adds to favorites only.
  els.libraryList.addEventListener("click", (e) => {
    const addBtn = e.target.closest("button[data-action='save-favorite']");
    if (addBtn) {
      const row = addBtn.closest(".dpaam-lib-row");
      if (row) addFavorite(row.dataset.gameId);
      return;
    }
    const row = e.target.closest(".dpaam-lib-row");
    if (!row) return;
    openModal(row.dataset.gameId);
  });
  // Keyboard support for library rows.
  els.libraryList.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    if (e.target.closest("button[data-action='save-favorite']")) return;
    const row = e.target.closest(".dpaam-lib-row");
    if (!row || e.target !== row) return;
    e.preventDefault();
    openModal(row.dataset.gameId);
  });

  // Modal "View Preview"
  els.modalPreview.addEventListener("click", () => {
    if (!modalGameId) return;
    window.open(
      window.location.origin + "/preview.html?game=" + encodeURIComponent(modalGameId),
      "_blank",
      "noopener"
    );
  });

  // Modal footer action — + Add from library, Activate from favorites
  els.modalAdd.addEventListener("click", () => {
    if (!modalGameId) return;
    if (modalContext === "favorites") {
      if (activeCodeFor(modalGameId)) return;
      generateCode(modalGameId);
      refreshModalActionButton();
      return;
    }
    addFavorite(modalGameId);
    refreshModalActionButton();
  });

  wireAnimatedModal(els.modal, () => {
    modalGameId = null;
    modalContext = "library";
  });

  wireAnimatedModal(els.limitModal);
  els.limitModalDismiss.addEventListener("click", () => {
    closeAnimatedModal(els.limitModal);
  });

  wireAnimatedModal(els.shareModal, () => {
    shareGameId = null;
    shareCode = null;
    resetShareCopyButtons();
  });
  els.shareModalClose.addEventListener("click", () => {
    closeAnimatedModal(els.shareModal);
  });

  els.shareModal.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    switch (btn.dataset.action) {
      case "copy-share-link": copyShareLink(btn); break;
      case "copy-share-code": copyShareCode(btn); break;
      case "share-google-classroom": shareToGoogleClassroom(); break;
    }
  });
}

// ---------- init ----------

function readQuickStartVisible() {
  const saved = localStorage.getItem(QUICK_START_STATE_KEY);
  if (saved === "open") return true;
  if (saved === "closed" || saved === "minimized") return false;
  if (localStorage.getItem(QUICK_START_LEGACY_DISMISS_KEY) === "1") return false;
  return true;
}

function setQuickStartVisible(visible) {
  localStorage.setItem(QUICK_START_STATE_KEY, visible ? "open" : "closed");
  localStorage.removeItem(QUICK_START_LEGACY_DISMISS_KEY);
}

function applyQuickStartVisible(visible) {
  if (!els.quickStart || !els.helpBtn) return;
  els.quickStart.hidden = !visible;
  els.helpBtn.hidden = visible;
}

function initQuickStartGuide() {
  if (!els.quickStart || !els.quickStartClose || !els.helpBtn) return;
  let visible = readQuickStartVisible();
  applyQuickStartVisible(visible);
  els.quickStartClose.addEventListener("click", () => {
    visible = false;
    applyQuickStartVisible(visible);
    setQuickStartVisible(visible);
  });
  els.helpBtn.addEventListener("click", () => {
    visible = true;
    applyQuickStartVisible(visible);
    setQuickStartVisible(visible);
  });
}

function init() {
  initQuickStartGuide();
  populateFilters();
  wireEvents();
  renderActiveCodes();
  renderFavorites();
  renderLibrary();
  setInterval(() => {
    if (state.activeCodes.length === 0) return;
    const expiredRemoved = pruneExpiredCodes();
    renderActiveCodes();
    if (expiredRemoved) renderFavorites();
  }, 60_000);
}

init();
