// Dingo Punks: All-Access Membership — teacher dashboard
//
// Vanilla ES module. State lives only in memory. Render functions read from
// `state`; mutations go through the named action functions below — those
// are the seams a real backend will plug into later.

import { games } from "./games.js";
import { thumbHtml } from "./thumbnails.js";

// ---------- constants ----------

const MAX_ACTIVE_CODES = 12;
const CODE_LENGTH = 5;
const CODE_CHARS = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789"; // no O, no 0
const STATIC_TIMER_LABEL = "Expires in 23h 47m";

// ---------- state ----------

const state = {
  favorites: [],            // ordered array of game ids
  activeCodes: [],          // [{ gameId, code, expiresLabel }]
  filters: { season: "all", grade: "all", subject: "all" },
  favoritesOpen: false,
};

// ---------- DOM refs ----------

const els = {
  activeSection: document.getElementById("dpaam-active-section"),
  activeCount: document.getElementById("dpaam-active-count"),
  activeList: document.getElementById("dpaam-active-list"),
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
};

function formatLabel(value) {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.join(", ");
  const key = String(value);
  if (LABEL_OVERRIDES[key]) return LABEL_OVERRIDES[key];
  const str = key.replace(/-/g, " ");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function gradeLabel(grades) {
  if (!grades || grades.length === 0) return "";
  if (grades.length === 1) return `Grade ${grades[0]}`;
  return `Grades ${grades.join(", ")}`;
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
  const season = game.season
    ? `<span class="dpaam-lib-meta-season">${escapeHtml(formatLabel(game.season))}</span>`
    : "";
  const theme = game.title
    ? `<span class="dpaam-lib-meta-theme">${escapeHtml(game.title)}</span>`
    : "";
  if (!season && !theme) return "";
  const inner =
    season && theme
      ? `${season}<span class="dpaam-lib-meta-sep" aria-hidden="true">·</span>${theme}`
      : season || theme;
  return `<div class="dpaam-lib-meta">${inner}</div>`;
}

function libTagsHtml(game) {
  if (!game.grades || game.grades.length === 0) return "";
  return `<div class="dpaam-tags">${game.grades
    .map((g) => `<span class="dpaam-tag dpaam-tag--grade-${escapeHtml(String(g))}">Grade ${escapeHtml(String(g))}</span>`)
    .join("")}</div>`;
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
    alert(`You have ${MAX_ACTIVE_CODES} active codes — deactivate one to continue`);
    return;
  }
  if (!isFavorite(gameId)) addFavorite(gameId);
  state.activeCodes.push({
    gameId,
    code: generateCodeString(),
    expiresLabel: STATIC_TIMER_LABEL,
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
  els.activeSection.hidden = state.activeCodes.length === 0;

  if (state.activeCodes.length === 0) {
    els.activeList.innerHTML = "";
    return;
  }

  els.activeCount.textContent = `${state.activeCodes.length} / ${MAX_ACTIVE_CODES} active`;

  els.activeList.innerHTML = state.activeCodes
    .map((entry) => {
      const game = gameById(entry.gameId);
      if (!game) return "";
      return `
        <article class="dpaam-active-card" role="listitem" data-game-id="${escapeHtml(game.id)}">
          <h3 class="dpaam-active-card-title">${escapeHtml(game.title)}</h3>
          <div class="dpaam-active-card-code">${escapeHtml(entry.code)}</div>
          <div class="dpaam-active-card-timer">${escapeHtml(entry.expiresLabel)}</div>
          <div class="dpaam-active-card-actions">
            <button type="button" class="dpaam-btn dpaam-btn-danger" data-action="cancel-code">
              Cancel
            </button>
          </div>
        </article>`;
    })
    .join("");
}

function renderFavorites() {
  els.favoritesCount.textContent = `${state.favorites.length} favorites`;
  els.favoritesToggle.setAttribute("aria-expanded", String(state.favoritesOpen));
  els.favoritesList.hidden = !state.favoritesOpen;

  if (state.favorites.length === 0) {
    els.favoritesList.innerHTML = `
      <li><p class="dpaam-empty">
        To get started, add escape rooms from the Library.
      </p></li>`;
    return;
  }

  els.favoritesList.innerHTML = state.favorites
    .map((id) => {
      const game = gameById(id);
      if (!game) return "";
      const active = activeCodeFor(id);

      const actionBlock = active
        ? `
          <div class="dpaam-fav-active">
            <span class="dpaam-fav-code">${escapeHtml(active.code)}</span>
            <span class="dpaam-fav-timer">${escapeHtml(active.expiresLabel)}</span>
            <button type="button" class="dpaam-btn dpaam-btn-danger" data-action="cancel-code">
              Cancel
            </button>
          </div>`
        : `
          <button type="button" class="dpaam-btn dpaam-btn-primary" data-action="generate-code">
            Generate code
          </button>`;

      const topic = game.topic ? formatLabel(game.topic) : game.title;
      return `
        <li
          class="dpaam-fav-row"
          data-game-id="${escapeHtml(game.id)}"
          draggable="true"
        >
          ${thumbHtml(game)}
          <div class="dpaam-fav-row-body">
            <span class="dpaam-fav-handle" aria-hidden="true">⋮⋮</span>
            <div class="dpaam-lib-main">
              <div class="dpaam-lib-topic-row">
                <h3 class="dpaam-lib-topic">${escapeHtml(topic)}</h3>
                ${libTagsHtml(game)}
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
        ? `<span class="dpaam-saved-mark" aria-label="Already in favorites">✓ &nbsp;Favorited</span>`
        : `<button type="button" class="dpaam-btn dpaam-btn-add" data-action="save-favorite">+ Favorite</button>`;
      const topic = game.topic ? formatLabel(game.topic) : game.title;
      return `
        <li
          class="dpaam-lib-row"
          data-game-id="${escapeHtml(game.id)}"
          aria-label="${escapeHtml(game.title)} — ${escapeHtml(topic)}"
        >
          ${thumbHtml(game)}
          <div class="dpaam-lib-row-body">
            <div class="dpaam-lib-main">
              <div class="dpaam-lib-topic-row">
                <h3 class="dpaam-lib-topic">${escapeHtml(topic)}</h3>
                ${libTagsHtml(game)}
              </div>
              ${libThemeHtml(game)}
            </div>
            <div class="dpaam-lib-actions">
              <button type="button" class="dpaam-btn dpaam-btn-details" data-action="open-details">More info</button>
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

function openModal(gameId) {
  const game = gameById(gameId);
  if (!game) return;
  modalGameId = gameId;
  els.modalTitle.textContent = formatLabel(game.topic);
  const skillsHtml =
    game.skills && game.skills.filter((s) => s).length
      ? `<dt>Skills</dt><dd class="dpaam-modal-skills"><ul class="dpaam-modal-skills-list">${game.skills
          .filter((s) => s)
          .map((s) => `<li>${escapeHtml(s)}</li>`)
          .join("")}</ul></dd>`
      : "";

  els.modalBody.innerHTML = `
    <dt>Season</dt><dd>${escapeHtml(formatLabel(game.season))}</dd>
    <dt>Theme</dt><dd>${escapeHtml(game.title)}</dd>
    <dt>Grades</dt><dd>${escapeHtml(gradeLabel(game.grades))}</dd>${
    SHOW_STANDARD_IN_MODAL
      ? `<dt>Standard</dt><dd>${
          game.standards && game.standards.length
            ? escapeHtml(game.standards.join(", "))
            : "None listed"
        }</dd>`
      : ""
  }${skillsHtml}`;

  refreshModalAddButton();

  if (typeof els.modal.showModal === "function") {
    els.modal.showModal();
  } else {
    els.modal.setAttribute("open", "");
  }
}

function refreshModalAddButton() {
  if (!modalGameId) return;
  if (isFavorite(modalGameId)) {
    els.modalAdd.textContent = "✓ Favorited";
    els.modalAdd.disabled = true;
  } else {
    els.modalAdd.textContent = "+ Favorite";
    els.modalAdd.disabled = false;
  }
}

function closeModal() {
  modalGameId = null;
  if (typeof els.modal.close === "function" && els.modal.open) {
    els.modal.close();
  } else {
    els.modal.removeAttribute("open");
  }
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
    if (btn.dataset.action === "cancel-code") cancelCode(gameId);
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
    const row = e.target.closest(".dpaam-fav-row");
    if (!row) return;
    dragEl = row;
    // Defer to next frame so the browser captures the original element
    // bitmap as the drag image before we mark it transparent.
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

  // Library — delegated. Details button opens modal; + Add button adds to favorites.
  els.libraryList.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const row = btn.closest(".dpaam-lib-row");
    if (!row) return;
    const gameId = row.dataset.gameId;
    if (btn.dataset.action === "open-details") openModal(gameId);
    else if (btn.dataset.action === "save-favorite") addFavorite(gameId);
  });
  // Keyboard support for library rows (activates the Details button).
  els.libraryList.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const row = e.target.closest(".dpaam-lib-row");
    if (!row) return;
    e.preventDefault();
    openModal(row.dataset.gameId);
  });

  // Modal "Add to favorites"
  els.modalAdd.addEventListener("click", () => {
    if (!modalGameId) return;
    addFavorite(modalGameId);
    refreshModalAddButton();
  });

  // Modal close via ESC / backdrop close — sync our local id state.
  els.modal.addEventListener("close", () => {
    modalGameId = null;
  });
}

// ---------- init ----------

function init() {
  populateFilters();
  wireEvents();
  renderActiveCodes();
  renderFavorites();
  renderLibrary();
}

init();
