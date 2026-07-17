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
  guideFaqOpen: false,
};

// ---------- DOM refs ----------

const els = {
  activeSection: document.getElementById("dpaam-active-section"),
  activeCount: document.getElementById("dpaam-active-count"),
  activeList: document.getElementById("dpaam-active-list"),
  favoritesSection: document.getElementById("dpaam-favorites-section"),
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
  accountBtn: document.getElementById("dpaam-account-btn"),
  accountBtnMobile: document.getElementById("dpaam-account-btn-mobile"),
  mobileMenuToggle: document.getElementById("dpaam-mobile-menu-toggle"),
  mobileMenu: document.getElementById("dpaam-mobile-menu"),
  mobileMenuBackdrop: document.getElementById("dpaam-mobile-menu-backdrop"),
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

  els.activeCount.textContent = `${state.activeCodes.length} / ${MAX_ACTIVE_CODES} active`;

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
}

function renderFavorites() {
  const expiredRemoved = pruneExpiredCodes();
  const hasFavorites = state.favorites.length > 0;

  els.favoritesSection.hidden = !hasFavorites;

  // No favorites → section hidden; keep list state ready for first add
  if (!hasFavorites) {
    els.favoritesList.innerHTML = "";
    return;
  }

  els.favoritesCount.textContent = `${state.favorites.length} ${state.favorites.length === 1 ? "favorite" : "favorites"}`;

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
        ? `<button type="button" class="dpaam-btn dpaam-btn-done dpaam-code-generated-mark dpaam-btn-revert" data-action="cancel-code" aria-label="Cancel game code">Activated</button>`
        : `<button type="button" class="dpaam-btn dpaam-btn-activate" data-action="generate-code">Activate</button>`;

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
              ${codeOrGenerate}
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
        ? `<button type="button" class="dpaam-btn dpaam-btn-done dpaam-saved-mark dpaam-btn-revert" data-action="remove-favorite" aria-label="Remove from favorites">Added</button>`
        : `<button type="button" class="dpaam-btn dpaam-btn-add" data-action="save-favorite">Add</button>`;
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
              <button type="button" class="dpaam-btn dpaam-btn-secondary" data-action="open-details">Info</button>
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
  els.modalTitle.textContent = "Escape Room Info";
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
      btn.className = "dpaam-btn dpaam-btn-done dpaam-code-generated-mark dpaam-btn-revert";
      btn.textContent = "Activated";
      btn.disabled = false;
      btn.setAttribute("aria-label", "Cancel game code");
    } else {
      btn.className = "dpaam-btn dpaam-btn-activate";
      btn.textContent = "Activate";
      btn.disabled = false;
      btn.removeAttribute("aria-label");
    }
    return;
  }

  if (isFavorite(modalGameId)) {
    btn.className = "dpaam-btn dpaam-btn-done dpaam-saved-mark dpaam-btn-revert";
    btn.textContent = "Added";
    btn.disabled = false;
    btn.setAttribute("aria-label", "Remove from favorites");
  } else {
    btn.className = "dpaam-btn dpaam-btn-add";
    btn.textContent = "Add";
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
  const directLink = "https://play.dingopunks.com/?" + encodeURIComponent(code);
  const directLinkLabel = "play.dingopunks.com/?" + code;
  const dlHtml = `
      <dd>
        <strong>Option 1:</strong>&nbsp; Have students enter the game code <strong class="dpaam-share-code" aria-label="${escapeHtml(code)}">${escapeHtml(code).split("").map(ch => `<span class="dpaam-share-code-char">${ch}</span>`).join("")}</strong><br> at the website <a href="https://play.dingopunks.com" target="_blank" rel="noopener">play.dingopunks.com</a>
        <div class="dpaam-share-copy-actions">
          <button type="button" class="dpaam-btn dpaam-btn-tertiary" id="dpaam-share-copy" data-action="copy-share-code">Copy Game Code</button>
          <button type="button" class="dpaam-btn dpaam-btn-tertiary" id="dpaam-share-copy-link" data-action="copy-share-link">Copy Website</button>
        </div>
      </dd>
      <div class="dpaam-modal-dl-divider" role="separator"></div>
      <dd>
        <strong>Option 2:</strong>&nbsp; Have students visit the link <a href="${escapeHtml(directLink)}" target="_blank" rel="noopener">${escapeHtml(directLinkLabel)}</a>. This will launch the game automatically.
        <div class="dpaam-share-copy-actions">
          <button type="button" class="dpaam-btn dpaam-btn-tertiary" data-action="copy-direct-link">Copy Link</button>
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
  toast.textContent = message;
  toast.classList.add("dpaam-toast--visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("dpaam-toast--visible");
  }, 2500);
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

  if (typeof els.shareModal.showModal === "function") {
    els.shareModal.showModal();
  } else {
    els.shareModal.setAttribute("open", "");
  }
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
  if (typeof els.accountModal.showModal === "function") {
    els.accountModal.showModal();
  } else {
    els.accountModal.setAttribute("open", "");
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
  });
}

// ---------- event wiring ----------

function renderGuideFaq() {
  if (!els.guideFaqToggle || !els.guideFaqList) return;
  els.guideFaqToggle.setAttribute("aria-expanded", String(state.guideFaqOpen));
  els.guideFaqList.hidden = !state.guideFaqOpen;
}

function wireEvents() {
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
      case "generate-code":
        generateCode(gameId);
        break;
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

  // Library — row click opens modal; + Add button adds to favorites only.
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

  // Modal "View Preview"
  els.modalPreview.addEventListener("click", () => {
    if (!modalGameId) return;
    window.open(
      window.location.origin + "/preview.html?game=" + encodeURIComponent(modalGameId),
      "_blank",
      "noopener"
    );
  });

  // Modal footer action — + Add / × Remove from library; Activate / × Cancel from favorites
  els.modalAdd.addEventListener("click", () => {
    if (!modalGameId) return;

    if (modalContext === "favorites") {
      if (activeCodeFor(modalGameId)) {
        cancelCode(modalGameId);
      } else {
        generateCode(modalGameId);
      }
      refreshModalActionButton();
      return;
    }

    if (isFavorite(modalGameId)) {
      removeFavorite(modalGameId);
    } else {
      addFavorite(modalGameId);
    }
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
  });
  els.shareModalClose.addEventListener("click", () => {
    closeAnimatedModal(els.shareModal);
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
  return true;
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
  initQuickStartGuide();
  populateFilters();
  wireEvents();
  renderGuideFaq();
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
