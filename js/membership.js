// Dingo Punks: All-Access Membership — teacher dashboard
//
// Vanilla ES module. State lives only in memory. Render functions read from
// `state`; mutations go through the named action functions below — those
// are the seams a real backend will plug into later.

import { games, themes } from "./games.js";
import { thumbHtml } from "./thumbnails.js";

// ---------- constants ----------

const MAX_ACTIVE_CODES = 20;
const CODE_LENGTH = 5;
const CODE_CHARS = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789"; // no O, no 0
const CODE_TTL_MS = 168 * 60 * 60 * 1000; // 7 days
const QUICK_START_STATE_KEY = "dpaam-quick-start-state";
const QUICK_START_LEGACY_DISMISS_KEY = "dpaam-quick-start-dismissed";
const DASHBOARD_TABS = ["library", "favorites", "active"];

// ---------- state ----------

const state = {
  favorites: [],            // ordered array of game ids
  activeCodes: [],          // [{ gameId, code, expiresAt }]
  filters: { season: "all", grade: "all", subject: "all" },
  guideFaqOpen: false,
  activeTab: null,
};

// ---------- DOM refs ----------

const els = {
  tabbar: document.getElementById("dpaam-tabbar"),
  tabButtons: Array.from(document.querySelectorAll(".dpaam-tab[data-tab]")),
  tabFavorites: document.getElementById("dpaam-tab-favorites"),
  tabFavoritesCount: document.getElementById("dpaam-tab-favorites-count"),
  tabActive: document.getElementById("dpaam-tab-active"),
  tabActiveCount: document.getElementById("dpaam-tab-active-count"),
  activeSection: document.getElementById("dpaam-active-section"),
  activeCount: document.getElementById("dpaam-active-count"),
  activeList: document.getElementById("dpaam-active-list"),
  activeEmpty: document.getElementById("dpaam-active-empty"),
  favoritesSection: document.getElementById("dpaam-favorites-section"),
  favoritesList: document.getElementById("dpaam-favorites-list"),
  favoritesCount: document.getElementById("dpaam-favorites-count"),
  favoritesEmpty: document.getElementById("dpaam-favorites-empty"),
  librarySection: document.getElementById("dpaam-library-section"),
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
  themeModal: document.getElementById("dpaam-theme-modal"),
  themeModalTitle: document.getElementById("dpaam-theme-modal-title"),
  themeModalBody: document.getElementById("dpaam-theme-modal-body"),
  themeModalBack: document.getElementById("dpaam-theme-modal-back"),
  shareModal: document.getElementById("dpaam-share-modal"),
  shareModalBody: document.getElementById("dpaam-share-modal-body"),
  limitModal: document.getElementById("dpaam-limit-modal"),
  limitModalDismiss: document.getElementById("dpaam-limit-modal-dismiss"),
  accountBtn: document.getElementById("dpaam-account-btn"),
  accountBtnMobile: document.getElementById("dpaam-account-btn-mobile"),
  mobileMenuToggle: document.getElementById("dpaam-mobile-menu-toggle"),
  mobileMenu: document.getElementById("dpaam-mobile-menu"),
  mobileMenuBackdrop: document.getElementById("dpaam-mobile-menu-backdrop"),
  modalBackdrop: document.getElementById("dpaam-modal-backdrop"),
  accountModal: document.getElementById("dpaam-account-modal"),
  accountChangePassword: document.getElementById("dpaam-account-change-password"),
  accountPasswordForm: document.getElementById("dpaam-account-password-form"),
  accountPasswordCancel: document.getElementById("dpaam-account-password-cancel"),
  accountPasswordSave: document.getElementById("dpaam-account-password-save"),
  accountManageSubscription: document.getElementById("dpaam-account-manage-subscription"),
  quickStart: document.getElementById("dpaam-quick-start"),
  quickStartClose: document.getElementById("dpaam-quick-start-close"),
  guideFaqToggle: document.getElementById("dpaam-guide-faq-toggle"),
  guideFaqList: document.getElementById("dpaam-guide-faq-list"),
};

// ---------- helpers ----------

function gameById(id) {
  return games.find((g) => g.id === id);
}

function themeByTitle(title) {
  return themes.find((t) => t.title === title);
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
  "social-emotional-learning": "SEL",
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

function tagsHtml(game) {
  const tags = [];
  if (game.topic) tags.push(formatLabel(game.topic));
  if (game.grades && game.grades.length) tags.push(gradeLabel(game.grades));
  return `<div class="dpaam-tags">${tags
    .map((t) => `<span class="dpaam-tag">${escapeHtml(t)}</span>`)
    .join("")}</div>`;
}

function gradeTagHtml(g) {
  const grade = escapeHtml(String(g));
  return `<span class="dpaam-tag dpaam-tag--grade-${grade}" aria-label="Grade ${grade}"><span class="dpaam-tag-label dpaam-tag-label--full">Grade ${grade}</span><span class="dpaam-tag-label dpaam-tag-label--short" aria-hidden="true">${grade}</span></span>`;
}

function libThemeHtml(game) {
  const gradeHtml =
    game.grades && game.grades.length
      ? `<div class="dpaam-tags">${game.grades.map((g) => gradeTagHtml(g)).join("")}</div>`
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
  return `<div class="dpaam-tags">${game.grades.map((g) => gradeTagHtml(g)).join("")}</div>`;
}

function removeIconSvg() {
  return `<svg class="dpaam-fav-remove-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path class="dpaam-fav-remove-x" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" d="M6 6l12 12M18 6l-12 12"/></svg>`;
}

function heartIconSvg({ filled = false } = {}) {
  const heartClass = filled ? "dpaam-fav-heart dpaam-fav-heart--filled" : "dpaam-fav-heart";
  const fill = filled ? "currentColor" : "none";
  return `<svg class="dpaam-fav-heart-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path class="${heartClass}" fill="${fill}" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M12 20.84l-1.45-1.32C5.4 15.04 2 12.08 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.58-3.4 6.54-8.55 11.04L12 20.84z"/></svg>`;
}

function activeCardTimerHtml(expiresAt) {
  const expiresLabel = formatExpiresLabel(expiresAt);
  if (expiresLabel === "Expired") {
    return `<div class="dpaam-card__label"><span class="dpaam-active-card-timer">${escapeHtml(expiresLabel)}</span></div>`;
  }
  return `<div class="dpaam-card__label">Expires in <span class="dpaam-active-card-timer">${escapeHtml(expiresLabel)}</span></div>`;
}

// During a live drag-reorder, decide which sibling card the dragged element
// should land *before*, walking the grid in reading order (left-to-right,
// then top-to-bottom row by row). Returns null to mean "append to the end".
// The currently-dragged element is skipped so it can never displace itself.
function rowAfterPointer(listEl, clientX, clientY, dragEl) {
  const rows = Array.from(listEl.querySelectorAll(".dpaam-card--favorite")).filter(
    (el) => el !== dragEl,
  );
  for (const row of rows) {
    const rect = row.getBoundingClientRect();
    if (clientY >= rect.bottom) continue; // pointer is below this card's row entirely
    const aboveRow = clientY < rect.top;
    const beforeMidpoint = clientX < rect.left + rect.width / 2;
    if (aboveRow || beforeMidpoint) return row;
  }
  return null;
}

// FLIP reorder: record each non-dragged card's pre-mutation position, run
// the DOM mutation, then animate each card from its old position to its
// new position (both axes, since cards wrap in a grid) via the Web
// Animations API. Any in-flight animation on a card is cancelled so rapid
// dragover events don't queue up.
const flipAnims = new WeakMap();
function flipReorder(listEl, dragEl, mutate) {
  const rows = Array.from(listEl.querySelectorAll(".dpaam-card--favorite"));
  const firstRects = new Map();
  for (const r of rows) {
    if (r === dragEl) continue;
    const rect = r.getBoundingClientRect();
    firstRects.set(r, { top: rect.top, left: rect.left });
  }

  mutate();

  for (const r of rows) {
    if (r === dragEl) continue;
    const newRect = r.getBoundingClientRect();
    const first = firstRects.get(r);
    const dx = first.left - newRect.left;
    const dy = first.top - newRect.top;
    if (!dx && !dy) continue;

    const prev = flipAnims.get(r);
    if (prev) prev.cancel();

    const anim = r.animate(
      [
        { transform: `translate(${dx}px, ${dy}px)` },
        { transform: "translate(0, 0)" },
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

function addFavorite(gameId, { toast = true } = {}) {
  if (!gameById(gameId)) return;
  if (isFavorite(gameId)) return;
  const wasEmpty = state.favorites.length === 0;
  state.favorites.push(gameId);
  updateLibraryFavoriteButton(gameId);
  if (wasEmpty) {
    renderFavorites();
  } else {
    appendFavoriteCard(gameId);
  }
  pulseTabCount("favorites");
  if (toast) showToast("✓ \u00A0 Favorited");
}

function removeFavorite(gameId) {
  state.favorites = state.favorites.filter((id) => id !== gameId);
  updateLibraryFavoriteButton(gameId);
  if (state.favorites.length === 0) {
    renderFavorites();
  } else {
    removeFavoriteCard(gameId);
  }
  pulseTabCount("favorites", "remove");
}

function setFavoritesOrder(orderedIds) {
  // Only accept reorderings of the exact existing set.
  if (orderedIds.length !== state.favorites.length) return;
  const current = new Set(state.favorites);
  if (!orderedIds.every((id) => current.has(id))) return;
  state.favorites = orderedIds.slice();
}

function generateCode(gameId) {
  if (activeCodeFor(gameId)) return true;
  if (state.activeCodes.length >= MAX_ACTIVE_CODES) {
    openLimitModal();
    return false;
  }
  state.activeCodes.push({
    gameId,
    code: generateCodeString(),
    expiresAt: Date.now() + CODE_TTL_MS,
  });
  renderActiveCodes();
  renderFavorites();
  renderLibrary();
  pulseTabCount("active");
  showToast("✓ \u00A0 Ready to share");
  return true;
}

function cancelCode(gameId) {
  state.activeCodes = state.activeCodes.filter((c) => c.gameId !== gameId);
  renderActiveCodes();
  renderFavorites();
  renderLibrary();
  pulseTabCount("active", "remove");
}

function pulseTabCount(tab, variant = "add") {
  const el = tab === "favorites" ? els.tabFavoritesCount : tab === "active" ? els.tabActiveCount : null;
  if (!el) return;
  const cls = variant === "remove" ? "dpaam-tab-count--pulse-remove" : "dpaam-tab-count--pulse";
  el.classList.remove("dpaam-tab-count--pulse", "dpaam-tab-count--pulse-remove");
  void el.offsetWidth;
  el.classList.add(cls);
  el.addEventListener("animationend", () => el.classList.remove(cls), { once: true });
}

function pickDefaultTab() {
  if (state.activeCodes.length > 0) return "active";
  if (state.favorites.length > 0) return "favorites";
  return "library";
}

function setActiveTab(tab) {
  if (!DASHBOARD_TABS.includes(tab)) return;
  state.activeTab = tab;

  els.tabButtons.forEach((btn) => {
    const selected = btn.dataset.tab === tab;
    btn.setAttribute("aria-selected", String(selected));
  });

  els.librarySection.hidden = tab !== "library";
  els.favoritesSection.hidden = tab !== "favorites";
  els.activeSection.hidden = tab !== "active";
}

function renderTabCounts() {
  const favoritesCount = state.favorites.length;
  const activeCount = state.activeCodes.length;

  if (els.tabFavoritesCount) {
    els.tabFavoritesCount.textContent = String(favoritesCount);
  }
  if (els.tabActiveCount) {
    els.tabActiveCount.textContent = String(activeCount);
  }
  if (els.tabFavorites) {
    els.tabFavorites.setAttribute(
      "aria-label",
      `Favorites, ${favoritesCount} ${favoritesCount === 1 ? "item" : "items"}`
    );
  }
  if (els.tabActive) {
    els.tabActive.setAttribute(
      "aria-label",
      `Ready to share, ${activeCount} ${activeCount === 1 ? "item" : "items"}`
    );
  }
}

// ---------- renderers ----------

function renderActiveCodes() {
  const expiredRemoved = pruneExpiredCodes();
  const isEmpty = state.activeCodes.length === 0;

  els.activeCount.textContent = `${state.activeCodes.length} / ${MAX_ACTIVE_CODES} active`;
  els.activeEmpty.hidden = !isEmpty;

  if (isEmpty) {
    els.activeList.innerHTML = "";
    if (expiredRemoved) renderFavorites();
    renderTabCounts();
    return;
  }

  els.activeList.innerHTML = state.activeCodes
    .map((entry) => {
      const game = gameById(entry.gameId);
      if (!game) return "";
      return `
        <article class="dpaam-card dpaam-card--active" role="listitem" data-game-id="${escapeHtml(game.id)}">
          <div class="dpaam-card__thumb-wrap">
            ${thumbHtml(game)}
          </div>
          <div class="dpaam-card__body">
            <div class="dpaam-card__actions">
              <button
                type="button"
                class="dpaam-btn dpaam-btn-secondary dpaam-btn-favorite"
                data-action="cancel-code"
                aria-label="Cancel code"
              >${removeIconSvg()}</button>
              <button type="button" class="dpaam-btn dpaam-btn-secondary" data-action="open-preview">Answers</button>
              <button type="button" class="dpaam-btn dpaam-btn-activate" data-action="share-code">Share</button>
            </div>
          </div>
          ${activeCardTimerHtml(entry.expiresAt)}
        </article>`;
    })
    .join("");
  renderTabCounts();
}

function favoriteCardHtml(game) {
  const shareAction = `<button type="button" class="dpaam-btn dpaam-btn-activate dpaam-btn-favorite-activate" data-action="share-code">Share</button>`;
  return `
    <li
      class="dpaam-card dpaam-card--favorite"
      data-game-id="${escapeHtml(game.id)}"
      draggable="true"
    >
      <div class="dpaam-card__thumb-wrap">
        ${thumbHtml(game)}
      </div>
      <div class="dpaam-card__body">
        <div class="dpaam-card__actions">
          <button
            type="button"
            class="dpaam-btn dpaam-btn-secondary dpaam-btn-favorite"
            data-action="remove-favorite"
            aria-label="Remove from favorites"
          >${removeIconSvg()}</button>
          <button type="button" class="dpaam-btn dpaam-btn-secondary" data-action="open-details">Info</button>
          ${shareAction}
        </div>
      </div>
    </li>`;
}

function libraryFavoriteButtonHtml(saved) {
  return saved
    ? `<button type="button" class="dpaam-btn dpaam-btn-secondary dpaam-btn-favorite" data-action="remove-favorite" aria-label="Remove from favorites">${heartIconSvg({ filled: true })}</button>`
    : `<button type="button" class="dpaam-btn dpaam-btn-secondary dpaam-btn-favorite" data-action="save-favorite" aria-label="Add to favorites">${heartIconSvg()}</button>`;
}

function updateFavoritesChrome() {
  const count = state.favorites.length;
  const hasFavorites = count > 0;
  els.favoritesEmpty.hidden = hasFavorites;
  els.favoritesCount.textContent = `${count} ${count === 1 ? "favorite" : "favorites"}`;
  renderTabCounts();
}

function updateLibraryFavoriteButton(gameId) {
  const row = els.libraryList.querySelector(
    `.dpaam-card--library[data-game-id="${CSS.escape(gameId)}"]`,
  );
  if (!row) return;
  const btn = row.querySelector(".dpaam-btn-favorite");
  if (!btn) return;
  const saved = isFavorite(gameId);
  btn.dataset.action = saved ? "remove-favorite" : "save-favorite";
  btn.setAttribute("aria-label", saved ? "Remove from favorites" : "Add to favorites");
  btn.innerHTML = heartIconSvg({ filled: saved });
}

function appendFavoriteCard(gameId) {
  const game = gameById(gameId);
  if (!game) return;
  els.favoritesList.insertAdjacentHTML("beforeend", favoriteCardHtml(game));
  updateFavoritesChrome();
}

function removeFavoriteCard(gameId) {
  const row = els.favoritesList.querySelector(
    `.dpaam-card--favorite[data-game-id="${CSS.escape(gameId)}"]`,
  );
  row?.remove();
  updateFavoritesChrome();
}

function renderFavorites() {
  const expiredRemoved = pruneExpiredCodes();
  const hasFavorites = state.favorites.length > 0;

  els.favoritesEmpty.hidden = hasFavorites;
  els.favoritesCount.textContent = `${state.favorites.length} ${state.favorites.length === 1 ? "favorite" : "favorites"}`;

  if (!hasFavorites) {
    els.favoritesList.innerHTML = "";
    renderTabCounts();
    return;
  }

  els.favoritesList.innerHTML = state.favorites
    .map((id) => {
      const game = gameById(id);
      if (!game) return "";
      return favoriteCardHtml(game);
    })
    .join("");

  if (expiredRemoved) renderActiveCodes();
  else renderTabCounts();
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
      const favoriteAction = libraryFavoriteButtonHtml(isFavorite(game.id));
      const shareAction = `<button type="button" class="dpaam-btn dpaam-btn-activate" data-action="share-code">Share</button>`;
      // const topic = game.topic ? formatLabel(game.topic) : game.title;
      // const libMainHtml = `
      //   <div class="dpaam-lib-main">
      //     <div class="dpaam-lib-topic-row">
      //       <h3 class="dpaam-lib-topic">${escapeHtml(topic)}</h3>
      //     </div>
      //     ${libThemeHtml(game)}
      //   </div>`;
      return `
        <li
          class="dpaam-card dpaam-card--library"
          data-game-id="${escapeHtml(game.id)}"
          tabindex="0"
          aria-label="${escapeHtml(game.title)}"
        >
          <div class="dpaam-card__thumb-wrap">
            ${thumbHtml(game)}
          </div>
          <div class="dpaam-card__body">
            <div class="dpaam-card__actions">
              ${favoriteAction}
              <button type="button" class="dpaam-btn dpaam-btn-secondary" data-action="open-details">Info</button>
              ${shareAction}
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
let pendingThemeOpen = null;
let themeModalReturn = null;
let pendingInfoReopen = null;

const DPAAM_MODALS = [
  els.modal,
  els.themeModal,
  els.shareModal,
  els.limitModal,
  els.accountModal,
];

let modalBackdropVisible = false;
let modalBackdropHideTimer = null;
let modalSwapInProgress = false;

function isAnyModalOpen() {
  return DPAAM_MODALS.some((m) => m?.open);
}

function isModalTransitionPending() {
  return Boolean(pendingThemeOpen || pendingInfoReopen);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function showModalBackdrop({ animate = true } = {}) {
  const backdrop = els.modalBackdrop;
  if (!backdrop) return;

  clearTimeout(modalBackdropHideTimer);
  backdrop.classList.remove("is-exiting");

  if (modalBackdropVisible) {
    backdrop.hidden = false;
    return;
  }

  modalBackdropVisible = true;
  backdrop.hidden = false;
  backdrop.setAttribute("aria-hidden", "false");

  if (animate && !prefersReducedMotion()) {
    backdrop.classList.add("is-entering");
    backdrop.addEventListener(
      "animationend",
      (e) => {
        if (e.animationName === "dpaam-backdrop-in") backdrop.classList.remove("is-entering");
      },
      { once: true },
    );
  } else {
    backdrop.classList.remove("is-entering");
  }
}

function hideModalBackdrop({ animate = true } = {}) {
  const backdrop = els.modalBackdrop;
  if (!backdrop || !modalBackdropVisible) return;

  backdrop.classList.remove("is-entering");

  const finish = () => {
    clearTimeout(modalBackdropHideTimer);
    backdrop.classList.remove("is-exiting");
    backdrop.hidden = true;
    backdrop.setAttribute("aria-hidden", "true");
    modalBackdropVisible = false;
  };

  if (!animate || prefersReducedMotion()) {
    finish();
    return;
  }

  backdrop.classList.add("is-exiting");
  backdrop.addEventListener(
    "animationend",
    (e) => {
      if (e.animationName === "dpaam-backdrop-out") finish();
    },
    { once: true },
  );
  modalBackdropHideTimer = setTimeout(finish, 200);
}

function syncModalBackdrop() {
  if (modalSwapInProgress || isAnyModalOpen() || isModalTransitionPending()) {
    showModalBackdrop({ animate: false });
    return;
  }
  hideModalBackdrop({ animate: true });
}

function closeOtherModals(keep) {
  pendingThemeOpen = null;
  pendingInfoReopen = null;

  for (const m of DPAAM_MODALS) {
    if (!m || m === keep || !m.open) continue;
    if (m === els.themeModal) themeModalReturn = null;
    m.classList.remove("is-closing");
    if (typeof m.close === "function") m.close();
    else m.removeAttribute("open");
  }
}

function showExclusiveModal(modal) {
  if (!modal) return;
  modalSwapInProgress = true;
  const animateBackdrop = !modalBackdropVisible;
  closeOtherModals(modal);
  showModalBackdrop({ animate: animateBackdrop });
  if (typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open", "");
  modalSwapInProgress = false;
  syncModalBackdrop();
}

function openLimitModal() {
  showExclusiveModal(els.limitModal);
}

function openModal(gameId, context = "library") {
  const game = gameById(gameId);
  if (!game) return;
  modalGameId = gameId;
  modalContext = context;
  els.modalTitle.textContent = "Escape Room Info";
  const skillsHtml =
    game.skills && game.skills.filter((s) => s).length
      ? `<dt>Skills</dt><dd class="dpaam-modal-skills"><div class="dpaam-tags">${game.skills
          .filter((s) => s)
          .map((s) => `<span class="dpaam-tag">${escapeHtml(s)}</span>`)
          .join("")}</div></dd>`
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
      <dt>Season</dt><dd>${escapeHtml(formatLabel(game.season))}</dd>
      <dt>Theme</dt><dd><button type="button" class="dpaam-modal-theme-link" data-action="open-theme" data-theme-title="${escapeHtml(game.title)}"><span class="dpaam-modal-theme-link-text">${escapeHtml(game.title)}</span><span class="dpaam-modal-theme-link-arrow" aria-hidden="true">→</span></button></dd>
      <dt>Grade</dt><dd class="dpaam-modal-grades">${libTagsHtml(game)}</dd>
      ${skillsHtml}
      ${standardHtml}`;
  els.modalBody.innerHTML = modalBodyHtml(game, dlHtml);

  refreshModalActionButton();

  showExclusiveModal(els.modal);
}

function showThemeModal(theme) {
  els.themeModalTitle.textContent = theme.title;
  els.themeModalBody.innerHTML = `
    ${theme.body ? `<p class="dpaam-theme-modal-body">${escapeHtml(theme.body)}</p>` : ""}
    <div class="dpaam-theme-modal-hero">
      <img class="dpaam-theme-modal-image" src="${escapeHtml(theme.main)}" alt="" loading="lazy" decoding="async" />
      ${theme.badguy ? `<div class="dpaam-theme-modal-badguy-wrap"><img class="dpaam-theme-modal-badguy" src="${escapeHtml(theme.badguy)}" alt="" loading="lazy" decoding="async" /></div>` : ""}
      <div class="splash-tv-overlay splash-tv-overlay--visible" aria-hidden="true"></div>
    </div>`;
  els.themeModalBack.hidden = !themeModalReturn?.gameId;

  showExclusiveModal(els.themeModal);
}

function returnFromThemeModal() {
  if (!themeModalReturn?.gameId) return;
  pendingInfoReopen = { gameId: themeModalReturn.gameId, context: themeModalReturn.context };
  themeModalReturn = null;
  closeAnimatedModal(els.themeModal);
}

function openThemeModal(title) {
  const theme = themeByTitle(title);
  if (!theme) return;

  if (els.modal.open) {
    themeModalReturn = { gameId: modalGameId, context: modalContext };
    pendingThemeOpen = theme;
    closeAnimatedModal(els.modal);
    return;
  }

  themeModalReturn = null;
  showThemeModal(theme);
}

function refreshModalActionButton() {
  if (!modalGameId) return;
  const btn = els.modalAdd;
  btn.className = "dpaam-btn dpaam-btn-activate";
  btn.textContent = "Share";
  btn.disabled = false;
  btn.removeAttribute("aria-label");
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
  const directLink = "https://play.dingopunks.com/?" + encodeURIComponent(code);
  const directLinkLabel = "play.dingopunks.com/?" + code;
  const dlHtml = `
      <dd>
        <strong>Option 1:</strong>&nbsp; Have students enter the game code <strong class="dpaam-share-code" aria-label="${escapeHtml(code)}">${escapeHtml(code).split("").map(ch => `<span class="dpaam-share-code-char">${ch}</span>`).join("")}</strong><br> at the website <a href="https://play.dingopunks.com" target="_blank" rel="noopener">play.dingopunks.com</a>
        <div class="dpaam-share-copy-actions">
          <button type="button" class="dpaam-btn dpaam-btn-tertiary" id="dpaam-share-copy" data-action="copy-share-code">Copy game code</button>
          <button type="button" class="dpaam-btn dpaam-btn-tertiary" id="dpaam-share-copy-link" data-action="copy-share-link">Copy website</button>
        </div>
      </dd>
      <div class="dpaam-modal-dl-divider" role="separator"></div>
      <dd>
        <strong>Option 2:</strong>&nbsp; Have students visit <a href="${escapeHtml(directLink)}" target="_blank" rel="noopener">${escapeHtml(directLinkLabel)}</a>.<br>This link will launch the game directly.
        <div class="dpaam-share-copy-actions">
          <button type="button" class="dpaam-btn dpaam-btn-tertiary" data-action="copy-direct-link">Copy link</button>
        </div>
      </dd>
      <div class="dpaam-modal-dl-divider" role="separator"></div>
      <dd>
        <strong>Option 3:</strong>&nbsp; Share to Google Classroom.
        <div class="dpaam-share-copy-actions">
          <button type="button" class="dpaam-btn dpaam-btn-tertiary" data-action="share-google-classroom">Share to Google Classroom</button>
        </div>
      </dd>`;
  return modalBodyHtml(game, dlHtml);
}

let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById("dpaam-toast");
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;

  const isOpen = toast.classList.contains("dpaam-toast--visible");

  if (isOpen) {
    toast.classList.remove("dpaam-toast--pulse");
    void toast.offsetWidth;
    toast.classList.add("dpaam-toast--pulse");
    toast.addEventListener(
      "animationend",
      (e) => {
        if (e.animationName === "dpaam-toast-pulse") {
          toast.classList.remove("dpaam-toast--pulse");
        }
      },
      { once: true }
    );
  } else {
    toast.classList.remove("dpaam-toast--entering", "dpaam-toast--pulse");
    toast.classList.add("dpaam-toast--visible", "dpaam-toast--entering");
    toast.addEventListener(
      "animationend",
      (e) => {
        if (e.animationName === "dpaam-toast-in") {
          toast.classList.remove("dpaam-toast--entering");
        }
      },
      { once: true }
    );
  }

  toastTimer = setTimeout(() => {
    toast.classList.remove("dpaam-toast--visible", "dpaam-toast--entering", "dpaam-toast--pulse");
  }, 1000);
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
  els.shareModalBody.innerHTML = shareModalHtml(game, active.code);

  showExclusiveModal(els.shareModal);
}

function activateAndShare(gameId) {
  if (!generateCode(gameId)) return;
  openShareModal(gameId);
}

function setAccountPasswordFormOpen(open) {
  if (!els.accountPasswordForm || !els.accountChangePassword) return;
  els.accountPasswordForm.hidden = !open;
  els.accountChangePassword.setAttribute("aria-expanded", String(open));
  if (!open) {
    els.accountPasswordForm
      .querySelectorAll("input")
      .forEach((input) => {
        input.value = "";
      });
  }
}

function openAccountModal() {
  setAccountPasswordFormOpen(false);
  showExclusiveModal(els.accountModal);
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

async function copyShareCode() {
  if (!shareCode) return;
  await copyToClipboard(shareCode);
  showToast("✓ \u00A0 Game code copied");
}

async function copyShareLink() {
  if (!shareCode) return;
  const link = "https://play.dingopunks.com";
  await copyToClipboard(link);
  showToast("✓ \u00A0 Website copied");
}

async function copyDirectLink() {
  if (!shareCode) return;
  const link = "https://play.dingopunks.com/?" + encodeURIComponent(shareCode);
  await copyToClipboard(link);
  showToast("✓ \u00A0 Link copied");
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
    syncModalBackdrop();
  });
}

// ---------- event wiring ----------

function renderGuideFaq() {
  if (!els.guideFaqToggle || !els.guideFaqList) return;
  els.guideFaqToggle.setAttribute("aria-expanded", String(state.guideFaqOpen));
  els.guideFaqList.hidden = !state.guideFaqOpen;
}

function wireEvents() {
  els.tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setActiveTab(btn.dataset.tab);
    });
  });

  // Guide FAQ toggle (open/close)
  els.guideFaqToggle?.addEventListener("click", () => {
    state.guideFaqOpen = !state.guideFaqOpen;
    renderGuideFaq();
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
      case "open-preview":
        window.open(
          window.location.origin + "/preview.html?game=" + encodeURIComponent(gameId) + "&answers=1",
          "_blank",
          "noopener"
        );
        break;
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
      case "share-code": activateAndShare(gameId); break;
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
    if (e.target.closest("button, a, input, select, textarea")) {
      e.preventDefault();
      return;
    }
    const row = e.target.closest(".dpaam-card--favorite");
    if (!row) return;
    dragEl = row;

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
      els.favoritesList.querySelectorAll(".dpaam-card--favorite"),
    ).map((el) => el.dataset.gameId);
    setFavoritesOrder(newOrder);
  });

  els.favoritesList.addEventListener("dragover", (e) => {
    if (!dragEl) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    const after = rowAfterPointer(els.favoritesList, e.clientX, e.clientY, dragEl);
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

  // Library — row click opens modal; Share activates (if needed) and opens sharing options.
  els.libraryList.addEventListener("click", (e) => {
    const actionBtn = e.target.closest("button[data-action]");
    if (actionBtn) {
      const row = actionBtn.closest(".dpaam-card--library");
      if (!row) return;
      const gameId = row.dataset.gameId;
      switch (actionBtn.dataset.action) {
        case "save-favorite":
          addFavorite(gameId);
          break;
        case "remove-favorite": removeFavorite(gameId); break;
        case "share-code": activateAndShare(gameId); break;
        case "open-details": openModal(gameId); break;
      }
      return;
    }
    const row = e.target.closest(".dpaam-card--library");
    if (!row) return;
    openModal(row.dataset.gameId);
  });
  // Keyboard support for library rows.
  els.libraryList.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    if (e.target.closest("button[data-action]")) return;
    const row = e.target.closest(".dpaam-card--library");
    if (!row || e.target !== row) return;
    e.preventDefault();
    openModal(row.dataset.gameId);
  });

  // Modal theme link
  els.modalBody.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='open-theme']");
    if (!btn) return;
    openThemeModal(btn.dataset.themeTitle);
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

  // Modal footer action — Share activates (if needed) and opens sharing options.
  els.modalAdd.addEventListener("click", () => {
    if (!modalGameId) return;
    activateAndShare(modalGameId);
  });

  wireAnimatedModal(els.modal, () => {
    if (pendingThemeOpen) {
      showThemeModal(pendingThemeOpen);
      pendingThemeOpen = null;
    }
    modalGameId = null;
    modalContext = "library";
  });

  wireAnimatedModal(els.themeModal, () => {
    if (pendingInfoReopen) {
      const { gameId, context } = pendingInfoReopen;
      pendingInfoReopen = null;
      openModal(gameId, context);
      return;
    }
    themeModalReturn = null;
  });
  els.themeModalBack.addEventListener("click", () => {
    returnFromThemeModal();
  });

  wireAnimatedModal(els.limitModal);
  els.limitModalDismiss.addEventListener("click", () => {
    closeAnimatedModal(els.limitModal);
  });

  wireAnimatedModal(els.shareModal, () => {
    shareGameId = null;
    shareCode = null;
  });

  els.shareModal.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    switch (btn.dataset.action) {
      case "copy-share-link": copyShareLink(); break;
      case "copy-share-code": copyShareCode(); break;
      case "copy-direct-link": copyDirectLink(); break;
      case "share-google-classroom": shareToGoogleClassroom(); break;
    }
  });

  // My Account modal
  wireAnimatedModal(els.accountModal, () => {
    setAccountPasswordFormOpen(false);
  });
  els.accountBtn?.addEventListener("click", () => {
    openAccountModal();
  });
  els.accountBtnMobile?.addEventListener("click", () => {
    setMobileMenuOpen(false);
    openAccountModal();
  });
  els.accountChangePassword?.addEventListener("click", () => {
    const open = els.accountPasswordForm?.hidden !== false;
    setAccountPasswordFormOpen(open);
  });
  els.accountPasswordCancel?.addEventListener("click", () => {
    setAccountPasswordFormOpen(false);
  });
  els.accountPasswordSave?.addEventListener("click", () => {
    // Placeholder — wire to auth backend later.
    setAccountPasswordFormOpen(false);
    showToast("✓ \u00A0 Password updated");
  });
  els.accountManageSubscription?.addEventListener("click", () => {
    // Placeholder — route to Stripe customer billing portal later.
    showToast("Opening billing portal…");
  });
}

// ---------- init ----------

function readQuickStartVisible() {
  const saved = localStorage.getItem(QUICK_START_STATE_KEY);
  if (saved === "open") return true;
  if (saved === "closed" || saved === "minimized") return false;
  if (localStorage.getItem(QUICK_START_LEGACY_DISMISS_KEY) === "1") return false;
  return false;
}

function setQuickStartVisible(visible) {
  localStorage.setItem(QUICK_START_STATE_KEY, visible ? "open" : "closed");
  localStorage.removeItem(QUICK_START_LEGACY_DISMISS_KEY);
}

function applyQuickStartVisible(visible) {
  if (!els.quickStart) return;
  els.quickStart.hidden = !visible;
}

const MOBILE_MENU_MQL = window.matchMedia("(max-width: 720px)");

function setMobileMenuOpen(open) {
  if (!els.mobileMenuToggle || !els.mobileMenu) return;
  els.mobileMenuToggle.setAttribute("aria-expanded", String(open));
  els.mobileMenuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  els.mobileMenu.hidden = !open;
  if (els.mobileMenuBackdrop) els.mobileMenuBackdrop.hidden = !open;
  document.documentElement.classList.toggle("dpaam-mobile-menu-open", open);
}

function initStickyTabbar() {
  const tabbar = els.tabbar;
  if (!tabbar) return;

  const sentinel = document.createElement("div");
  sentinel.className = "dpaam-tabbar-sentinel";
  sentinel.setAttribute("aria-hidden", "true");
  tabbar.before(sentinel);

  const observer = new IntersectionObserver(
    ([entry]) => {
      tabbar.classList.toggle("is-stuck", !entry.isIntersecting);
    },
    { threshold: [1] },
  );
  observer.observe(sentinel);
}

function initMobileMenu() {
  if (!els.mobileMenuToggle || !els.mobileMenu) return;

  els.mobileMenuToggle.addEventListener("click", () => {
    const open = els.mobileMenuToggle.getAttribute("aria-expanded") !== "true";
    setMobileMenuOpen(open);
  });

  els.mobileMenuBackdrop?.addEventListener("click", () => {
    setMobileMenuOpen(false);
  });

  els.mobileMenu.querySelectorAll(".dpaam-btn").forEach((btn) => {
    if (btn === els.accountBtnMobile) return;
    btn.addEventListener("click", () => setMobileMenuOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.mobileMenu.hidden) setMobileMenuOpen(false);
  });

  MOBILE_MENU_MQL.addEventListener("change", () => {
    if (!MOBILE_MENU_MQL.matches) setMobileMenuOpen(false);
  });
}

function initQuickStartGuide() {
  if (!els.quickStart || !els.quickStartClose) return;
  let visible = readQuickStartVisible();
  applyQuickStartVisible(visible);
  els.quickStartClose.addEventListener("click", () => {
    visible = false;
    applyQuickStartVisible(visible);
    setQuickStartVisible(visible);
  });
}

function init() {
  initMobileMenu();
  initStickyTabbar();
  initQuickStartGuide();
  populateFilters();
  wireEvents();
  renderGuideFaq();
  renderActiveCodes();
  renderFavorites();
  renderLibrary();
  setActiveTab(pickDefaultTab());
  setInterval(() => {
    if (state.activeCodes.length === 0) return;
    const expiredRemoved = pruneExpiredCodes();
    renderActiveCodes();
    if (expiredRemoved) renderFavorites();
  }, 60_000);
}

init();
