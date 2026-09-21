// Dingo Punks: All-Access Membership — teacher dashboard
//
// Vanilla ES module. Render functions read from `state`; mutations go through
// the named action functions below.

import { games, themes } from "./games.js";
import { thumbHtml } from "./thumbnails.js";
import {
  authErrorMessage,
  initAuth,
  userCanAccessDashboard,
} from "./membership-auth.js";
import { escapeHtml, setButtonLoading } from "./membership-utils.js";
import {
  auth,
  createCheckoutSession,
  createPortalSession,
  getUserProfile,
  getUserProfileForBootstrap,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  subscribeToUserProfile,
} from "./firebase-init.js";
import {
  BUTTON_LOCKED_ICON,
  CARD_LOCKED_BADGE_ICON,
  DASHBOARD_TABS,
  LIBRARY_SEASON_ORDER,
  LIBRARY_THEME_ORDER_BY_SEASON,
  QUICK_START_LEGACY_DISMISS_KEY,
  QUICK_START_STATE_KEY,
  els,
  libraryThemeSlug,
  state,
} from "./membership/context.js";
import {
  animateStandardsBodyResize,
  populateModalStandards,
  selectModalStandardsGroup,
  setCollapsiblePanelOpen,
  setStandardsModalGameId,
} from "./membership/standards.js";
import { initDebugView } from "./membership/debug.js";
import {
  completeAuthOfferAndEnterDashboard,
  configureAuthOffer,
  isAuthOfferViewVisible,
  markAuthOfferStepComplete,
} from "./membership/auth-offer.js";
import { showToast } from "./membership/toast.js";
import {
  loadUserPrefs,
  resetUserPrefs,
  scheduleFavoritesSave,
} from "./membership/user-prefs.js";
import {
  invokeCancelShareCodeRemote,
  invokeCreateShareCode,
  loadActiveCodes,
  removeActiveCodeLocal,
  resetShareCodes,
  restoreActiveCode,
  isShareCodeLimitError,
  shareCodeErrorMessage,
} from "./membership/share-codes.js";

// ---------- helpers ----------

const MEMBERSHIP_ACCESS_BY_PLAN = Object.freeze({
  free: "free",
  "all-access": "member",
});

const REBATE_PLATFORM_PATTERNS = Object.freeze({
  tpt: /^\d{9}$/,
  shopify: /^\d{4,5}$/,
});

let planMembershipAccess = "free";
let userBillingProfile = null;
let unsubscribeUserProfile = null;
let debugMembershipAccessOverride = null;
let checkoutReturnStatus = new URLSearchParams(window.location.search).get("checkout");

if (checkoutReturnStatus !== "success" && checkoutReturnStatus !== "cancel") {
  checkoutReturnStatus = null;
}

function consumeCheckoutReturn() {
  const status = checkoutReturnStatus;
  if (!status) return;
  checkoutReturnStatus = null;

  const url = new URL(window.location.href);
  url.searchParams.delete("checkout");
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);

  window.setTimeout(() => {
    if (status === "success") {
      showToast(
        state.membershipAccess === "member"
          ? "Welcome to All-Access"
          : "Checkout complete",
      );
      return;
    }
    showToast("Checkout canceled");
  }, 0);
}

function membershipAccessFromPlan(plan) {
  const access = MEMBERSHIP_ACCESS_BY_PLAN[plan];
  if (!access) {
    console.warn("Unknown membership plan; defaulting to free access", plan);
  }
  return access ?? "free";
}

function applyUserProfile(profile) {
  planMembershipAccess = membershipAccessFromPlan(profile.plan);
  userBillingProfile = {
    status: profile.status ?? null,
    currentPeriodEnd: profile.currentPeriodEnd ?? null,
  };
  applyMembershipAccess();
}

async function loadDashboardState(user) {
  let [profile] = await Promise.all([
    getUserProfileForBootstrap(user.uid),
    loadUserPrefs(user.uid),
    loadActiveCodes(user.uid),
  ]);

  // Checkout completion and webhook delivery are independent. Re-read here
  // rather than trusting the profile loaded during initial dashboard setup.
  if (checkoutReturnStatus === "success") {
    profile = (await getUserProfile(user.uid)) ?? profile;
  }

  if (!profile) {
    throw new Error(`Missing user profile for ${user.uid}`);
  }

  applyUserProfile(profile);
  consumeCheckoutReturn();
}

function gameById(id) {
  return games.find((g) => g.id === id);
}

const preloadedImages = new Set();

function preloadImages(paths) {
  for (const path of paths) {
    if (!path || preloadedImages.has(path)) continue;
    preloadedImages.add(path);
    const img = new Image();
    img.decoding = "async";
    img.src = path;
  }
}

function themeByTitle(title) {
  return themes.find((t) => t.title === title);
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function isGameLockedForAccess(gameId) {
  if (state.membershipAccess !== "free") return false;
  return !gameById(gameId)?.isFree;
}

function shareButtonLockedIconHtml() {
  return `<img class="dpaam-share-locked-icon" src="${BUTTON_LOCKED_ICON}" alt="" width="14" height="14" decoding="async" />`;
}

function shareButtonInnerHtml(gameId) {
  if (isGameLockedForAccess(gameId)) {
    return `${shareButtonLockedIconHtml()}Share`;
  }
  return "Share";
}

function shareButtonHtml(gameId) {
  return `<button type="button" class="dpaam-btn dpaam-btn-activate" data-action="share-code">${shareButtonInnerHtml(gameId)}</button>`;
}

function libraryTopicPriority(game) {
  if (game.topic === "mixed-reading-skills") return 0;
  if (game.topic === "mixed-math-skills") return 1;
  return 2;
}

function libraryLowestGrade(game) {
  if (!game.grades?.length) return Number.POSITIVE_INFINITY;
  return Math.min(...game.grades);
}

function libraryThemeRank(game) {
  const order = LIBRARY_THEME_ORDER_BY_SEASON.get(game.season);
  if (!order?.length) return 0;
  const rank = order.indexOf(libraryThemeSlug(game));
  return rank === -1 ? order.length : rank;
}

function sortLibraryGames(gamesList) {
  const indexed = gamesList.map((game, index) => ({ game, index }));

  indexed.sort((a, b) => {
    const seasonDiff =
      LIBRARY_SEASON_ORDER.indexOf(a.game.season) -
      LIBRARY_SEASON_ORDER.indexOf(b.game.season);
    if (seasonDiff !== 0) return seasonDiff;

    const themeDiff = libraryThemeRank(a.game) - libraryThemeRank(b.game);
    if (themeDiff !== 0) return themeDiff;

    const topicDiff = libraryTopicPriority(a.game) - libraryTopicPriority(b.game);
    if (topicDiff !== 0) return topicDiff;

    if (libraryTopicPriority(a.game) < 2) {
      const gradeDiff = libraryLowestGrade(a.game) - libraryLowestGrade(b.game);
      if (gradeDiff !== 0) return gradeDiff;
    }

    return a.index - b.index;
  });

  return indexed.map(({ game }) => game);
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

function shareButtonForGameId(gameId) {
  return document.querySelector(
    `[data-game-id="${CSS.escape(gameId)}"] button[data-action="share-code"]`,
  );
}

function cancelButtonForGameId(gameId) {
  return document.querySelector(
    `[data-game-id="${CSS.escape(gameId)}"] button[data-action="cancel-code"]`,
  );
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

function gradeTagHtml(g) {
  const grade = escapeHtml(String(g));
  return `<span class="dpaam-tag dpaam-tag--grade-${grade}" aria-label="Grade ${grade}"><span class="dpaam-tag-label dpaam-tag-label--full">Grade ${grade}</span><span class="dpaam-tag-label dpaam-tag-label--short" aria-hidden="true">${grade}</span></span>`;
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
  return `<svg class="dpaam-fav-heart-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path class="${heartClass}" fill="${fill}" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round" d="M12 20.84l-1.45-1.32C5.4 15.04 2 12.08 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.58-3.4 6.54-8.55 11.04L12 20.84z"/></svg>`;
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



function pulseFavoriteHeart(btn) {
  if (!btn || prefersReducedMotion()) return;
  const icon = btn.querySelector(".dpaam-fav-heart-icon");
  if (!icon) return;
  icon.classList.remove("dpaam-fav-heart-icon--pop");
  void icon.offsetWidth;
  icon.classList.add("dpaam-fav-heart-icon--pop");
  icon.addEventListener(
    "animationend",
    () => icon.classList.remove("dpaam-fav-heart-icon--pop"),
    { once: true },
  );
}

function addFavorite(gameId, { toast = true } = {}) {
  if (!gameById(gameId)) return;
  if (isFavorite(gameId)) return;
  const wasEmpty = state.favorites.length === 0;
  state.favorites.push(gameId);
  updateLibraryFavoriteButton(gameId);
  const libraryBtn = els.libraryList.querySelector(
    `.dpaam-card--library[data-game-id="${CSS.escape(gameId)}"] .dpaam-btn-favorite`,
  );
  pulseFavoriteHeart(libraryBtn);
  if (wasEmpty) {
    renderFavorites();
  } else {
    appendFavoriteCard(gameId);
  }
  pulseTabCount("favorites");
  scheduleFavoritesSave();
  if (toast) showToast("Favorited");
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
  scheduleFavoritesSave();
}

function setFavoritesOrder(orderedIds) {
  // Only accept reorderings of the exact existing set.
  if (orderedIds.length !== state.favorites.length) return;
  const current = new Set(state.favorites);
  if (!orderedIds.every((id) => current.has(id))) return;
  state.favorites = orderedIds.slice();
  scheduleFavoritesSave();
}

async function generateCode(gameId) {
  if (activeCodeFor(gameId)) return true;

  try {
    await invokeCreateShareCode(gameId);
    renderActiveCodes();
    renderFavorites();
    renderLibrary();
    pulseTabCount("active");
    return true;
  } catch (error) {
    console.error("createShareCode failed", error);
    if (isShareCodeLimitError(error)) {
      openShareCodeLimitModal();
      return false;
    }
    showToast(shareCodeErrorMessage(error));
    return false;
  }
}

async function cancelCode(gameId) {
  const entry = removeActiveCodeLocal(gameId);
  if (!entry) return;

  renderActiveCodes();
  renderFavorites();
  renderLibrary();
  pulseTabCount("active", "remove");

  try {
    await invokeCancelShareCodeRemote(entry.code);
  } catch (error) {
    console.error("cancelShareCode failed", error);
    restoreActiveCode(entry);
    renderActiveCodes();
    renderFavorites();
    renderLibrary();
    pulseTabCount("active");
    showToast(shareCodeErrorMessage(error));
  }
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

  els.activeCount.textContent = `${state.activeCodes.length} shared`;
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
          ${cardNewBadgeHtml(game)}
          <div class="dpaam-card__thumb-wrap">
            ${cardAllAccessBadgeHtml(game)}
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
              <button type="button" class="dpaam-btn dpaam-btn-secondary" data-action="open-details">Info</button>
              ${shareButtonHtml(game.id)}
            </div>
          </div>
          ${activeCardTimerHtml(entry.expiresAt)}
        </article>`;
    })
    .join("");
  renderTabCounts();
}

function favoriteCardHtml(game) {
  const shareAction = shareButtonHtml(game.id);
  return `
    <li
      class="dpaam-card dpaam-card--favorite"
      data-game-id="${escapeHtml(game.id)}"
      draggable="${isGameLockedForAccess(game.id) ? "false" : "true"}"
    >
      ${cardNewBadgeHtml(game)}
      <div class="dpaam-card__thumb-wrap">
        ${cardAllAccessBadgeHtml(game)}
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

function cardNewBadgeHtml(game) {
  return game.isNew ? '<span class="dpaam-card-badge dpaam-card-new-badge">New</span>' : "";
}

function cardAllAccessBadgeHtml(game) {
  if (!isGameLockedForAccess(game.id)) return "";
  return `<span class="dpaam-card-badge dpaam-card-all-access-badge" aria-label="All-Access plan required"><img class="dpaam-card-all-access-badge__icon" src="${CARD_LOCKED_BADGE_ICON}" alt="" width="10" height="10" decoding="async" />All-Access</span>`;
}

function libraryFavoriteButtonHtml(saved, gameId) {
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

function newGamesCount() {
  return games.filter((g) => g.isNew).length;
}

function updateLibraryNewFilter() {
  const btn = els.libraryNewFilter;
  if (!btn) return;
  const count = newGamesCount();
  if (count === 0) {
    btn.hidden = true;
    state.filters.newThisMonth = false;
    return;
  }
  btn.hidden = false;
  btn.textContent = `${count} new this month →`;
  btn.setAttribute("aria-pressed", String(state.filters.newThisMonth));
  btn.setAttribute(
    "aria-label",
    `Show ${count} new escape room${count === 1 ? "" : "s"} this month`,
  );
}

function resetLibraryDropdownFilters() {
  state.filters.season = "all";
  state.filters.grade = "all";
  state.filters.subject = "all";
  els.filters.season.value = "all";
  els.filters.grade.value = "all";
  els.filters.subject.value = "all";
}

function renderLibrary() {
  const f = state.filters;

  const filtered = games.filter((g) => {
    if (f.newThisMonth) return Boolean(g.isNew);
    if (f.season === "free") {
      if (!g.isFree) return false;
    } else if (f.season !== "all" && g.season !== f.season) return false;
    if (f.subject !== "all" && g.subject !== f.subject) return false;
    if (f.grade !== "all") {
      const wanted = Number(f.grade);
      if (!g.grades || !g.grades.includes(wanted)) return false;
    }
    return true;
  });

  const sorted = sortLibraryGames(filtered);

  els.libraryCount.textContent = `${filtered.length} escape room${filtered.length === 1 ? "" : "s"}`;
  els.libraryEmpty.hidden = filtered.length !== 0;
  updateLibraryNewFilter();

  els.libraryList.innerHTML = sorted
    .map((game) => {
      const favoriteAction = libraryFavoriteButtonHtml(isFavorite(game.id), game.id);
      const shareAction = shareButtonHtml(game.id);
      return `
        <li
          class="dpaam-card dpaam-card--library"
          data-game-id="${escapeHtml(game.id)}"
          tabindex="0"
          aria-label="${escapeHtml(game.title)}"
        >
          ${cardNewBadgeHtml(game)}
          <div class="dpaam-card__thumb-wrap">
            ${cardAllAccessBadgeHtml(game)}
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

  const prevSeason = els.filters.season.value || state.filters.season;

  fillSelect(els.filters.season, seasons, formatLabel, "All seasons");
  if (state.membershipAccess === "free") {
    const freeSeasonOption = document.createElement("option");
    freeSeasonOption.value = "free";
    freeSeasonOption.textContent = "Free";
    els.filters.season.insertBefore(freeSeasonOption, els.filters.season.options[1] ?? null);
  }

  let seasonValue = prevSeason;
  if (state.membershipAccess !== "free" && seasonValue === "free") seasonValue = "all";
  if ([...els.filters.season.options].some((option) => option.value === seasonValue)) {
    els.filters.season.value = seasonValue;
  } else {
    els.filters.season.value = "all";
    seasonValue = "all";
  }
  state.filters.season = seasonValue;
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

let modalGameId = null;
let modalContext = "library"; // "library" | "favorites" | "active"
let pendingModalOpen = null;
let themeModalReturn = null;
let memberOnlyGameId = null;

function queueModalOpen(openFn) {
  pendingModalOpen = openFn;
}

function runPendingModalOpen() {
  const openFn = pendingModalOpen;
  pendingModalOpen = null;
  if (openFn) openFn();
}

function transitionToModal(fromModal, openFn) {
  if (fromModal?.open) {
    queueModalOpen(openFn);
    closeAnimatedModal(fromModal);
  } else {
    openFn();
  }
}

const DPAAM_MODALS = [
  els.modal,
  els.themeModal,
  els.shareModal,
  els.shareCodeLimitModal,
  els.memberOnlyModal,
  els.upgradeModal,
  els.accountModal,
];

let modalBackdropVisible = false;
let modalBackdropHideTimer = null;
let modalSwapInProgress = false;

function isAnyModalOpen() {
  return DPAAM_MODALS.some((m) => m?.open);
}

function isModalTransitionPending() {
  return Boolean(pendingModalOpen);
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
  pendingModalOpen = null;

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

function periodEndMs(value) {
  if (!value) return null;
  if (typeof value.toMillis === "function") return value.toMillis();
  if (typeof value.seconds === "number") return value.seconds * 1000;
  return null;
}

function formatPlanDate(ms) {
  return new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(ms));
}

function normalizeClientRebate(orderRaw) {
  const orderNumber = typeof orderRaw === "string" ? orderRaw.trim().replace(/^#/, "") : "";
  if (!orderNumber) return { rebate: null };

  const platform = Object.entries(REBATE_PLATFORM_PATTERNS).find(([, pattern]) =>
    pattern.test(orderNumber),
  )?.[0];
  if (!platform) {
    return { error: "Invalid order number." };
  }
  return { rebate: { platform, orderNumber } };
}

function readRebateFromPanel(panel) {
  const orderEl = panel?.querySelector("[data-rebate-order]");
  return normalizeClientRebate(orderEl?.value ?? "");
}

function freeGamesCount() {
  return games.filter((game) => game.isFree).length;
}

function planPanelTierPillHtml(tierName, planNameId = "") {
  const idAttr = planNameId ? ` id="${escapeHtml(planNameId)}"` : "";
  return `<p class="dpaam-plan-panel__tagline"><span class="dpaam-pill dpaam-plan-panel__summary-pill"${idAttr}>${escapeHtml(tierName)}</span></p>`;
}

function currentPlanStatusHtml() {
  return `
    <div class="dpaam-plan-status">
      <h4 class="dpaam-plan-status__title">You're on the <strong>Starter Plan</strong></h4>
      <div class="dpaam-plan-panel__pricing">
        ${planPanelTierPillHtml("Starter")}
      </div>
    </div>`;
}

function starterPlanFeaturesHtml() {
  const freeCount = freeGamesCount();
  return `
    <div class="dpaam-plan-panel__features">
      <ul class="dpaam-plan-panel__features-list">
        <li><strong>${freeCount} escape rooms</strong> — the starter set</li>
      </ul>
    </div>`;
}

function starterOfferPlanPanelHtml({ cta = "select", showYourPlanUnit = false } = {}) {
  const yourPlanUnitHtml = showYourPlanUnit
    ? `<span class="dpaam-plan-price-unit">(<strong>Your Plan</strong>)</span>`
    : "";
  const actionHtml =
    cta === "none"
      ? ""
      : `<button
        type="button"
        class="dpaam-btn dpaam-btn-secondary dpaam-auth-submit dpaam-plan-panel__action"
        data-action="complete-auth-offer"
        aria-label="Select"
      >
        <span class="dpaam-responsive-label dpaam-responsive-label--full">Select</span><span class="dpaam-responsive-label dpaam-responsive-label--short" aria-hidden="true">Select</span>
      </button>`;

  // Restore under Select: <p class="dpaam-plan-panel__post-action-note">Upgrade anytime</p>
  return `
    <div class="dpaam-plan-panel dpaam-plan-panel--offer-starter">
      <div class="dpaam-plan-panel__hero">
        ${planPanelTierPillHtml("Starter")}
      </div>
      <div class="dpaam-plan-panel__body">
        <div class="dpaam-plan-panel__pricing">
          <p class="dpaam-plan-panel__price">Free${yourPlanUnitHtml}</p>
          <p class="dpaam-plan-panel__billing">always & forever</p>
        </div>
        ${starterPlanFeaturesHtml()}
      </div>
      ${actionHtml}
    </div>`;
}

function authOfferFreePlanPanelHtml() {
  return starterOfferPlanPanelHtml({ cta: "select" });
}

function accountStarterPlanPanelHtml() {
  return starterOfferPlanPanelHtml({ cta: "none", showYourPlanUnit: true });
}

function allAccessPlanFeaturesHtml() {
  const libraryCount = games.length;
  return `
    <div class="dpaam-plan-panel__features">
      <ul class="dpaam-plan-panel__features-list">
        <li><strong>${libraryCount} escape rooms</strong> — the whole library</li>
        <li><strong>Every new escape room</strong> we create</li>
        <li><strong>Bonus missions</strong> for fast-finishers</li>
      </ul>
    </div>`;
}

function allAccessPlanPricingHtml() {
  return `
    <div class="dpaam-plan-panel__pricing">
      <p class="dpaam-plan-panel__price">$2.99<span class="dpaam-plan-price-unit">/<strong>month</strong></span></p>
      <p class="dpaam-plan-panel__billing">billed annually at $35.88/year</p>
    </div>`;
}

function memberPlanPricingHtml(billingProfile) {
  const endMs = periodEndMs(billingProfile?.currentPeriodEnd);
  const dateLabel = endMs ? formatPlanDate(endMs) : null;
  const status = billingProfile?.status;
  let renewalLine = "billed annually at $35.88/year";
  if (status === "canceling" && dateLabel) {
    renewalLine = `Cancels on ${dateLabel}`;
  } else if (dateLabel) {
    renewalLine = `Renews on ${dateLabel}`;
  }
  return `
    <div class="dpaam-plan-panel__pricing">
      <p class="dpaam-plan-panel__price">$2.99<span class="dpaam-plan-price-unit">/<strong>month</strong></span></p>
      <p class="dpaam-plan-panel__billing">${escapeHtml(renewalLine)}</p>
    </div>`;
}

function upgradeRebateFieldsHtml() {
  return `
    <div class="dpaam-upgrade-rebate">
      <button
        type="button"
        class="dpaam-upgrade-rebate__summary"
        data-action="toggle-upgrade-rebate"
        aria-expanded="false"
      >
        <span class="dpaam-upgrade-rebate__summary-lead">Already bought an escape room?</span> <span class="dpaam-upgrade-rebate__summary-link">Apply your $8.99 purchase toward All-Access.</span>
      </button>
      <div class="dpaam-modal-standards-panel" inert>
        <div class="dpaam-modal-standards-body">
          <div class="dpaam-modal-standards-inner dpaam-upgrade-rebate__content">
            <p class="dpaam-upgrade-rebate__hint">Enter your order number for $8.99 off your first year of All-Access. For purchases made on dingopunks.com, your order number is in the email titled "Your Dingo Punks Receipt." For TPT, open <a href="https://www.teacherspayteachers.com/My-Purchases" target="_blank">My Purchases</a> and click "View Receipt."</p>
            <div class="dpaam-upgrade-rebate__row">
              <label class="dpaam-upgrade-rebate__field">
                <span class="dpaam-visually-hidden">Order number</span>
                <input
                  type="text"
                  class="dpaam-auth-input"
                  data-rebate-order
                  placeholder="Order number"
                  aria-label="Order number"
                  inputmode="numeric"
                  autocomplete="off"
                />
              </label>
              <button type="button" class="dpaam-btn dpaam-btn-secondary dpaam-upgrade-rebate__apply" data-action="apply-purchase-credit">Apply your $8.99 purchase</button>
            </div>
            <p class="dpaam-upgrade-rebate__status" data-rebate-status role="status" aria-live="polite"></p>
          </div>
        </div>
      </div>
    </div>`;
}

function upgradeCheckoutButtonHtml({ label = "Select" } = {}) {
  const cta = escapeHtml(label);
  return `<button type="button" class="dpaam-btn dpaam-btn-primary dpaam-auth-submit dpaam-plan-panel__action" data-action="start-checkout" aria-label="${cta}">
        <span class="dpaam-responsive-label dpaam-responsive-label--full">${cta}</span><span class="dpaam-responsive-label dpaam-responsive-label--short" aria-hidden="true">${cta}</span>
      </button>`;
}

function unlimitedPlanPanelHtml({
  action = "upgrade",
  planNameId = "",
  billingProfile = null,
  includeRebate = false,
  includeOfferImage,
  checkoutCta = "select",
} = {}) {
  const isManage = action === "manage";
  const showOfferImage = includeOfferImage ?? !isManage;
  const eyebrowHtml = isManage ? `<p class="dpaam-plan-panel__eyebrow">Your plan</p>` : "";
  const taglineHtml = planPanelTierPillHtml("All-Access", planNameId);
  const pricingHtml = isManage
    ? memberPlanPricingHtml(billingProfile)
    : allAccessPlanPricingHtml();
  const rebateHtml = !isManage && includeRebate ? upgradeRebateFieldsHtml() : "";
  const isCanceling = billingProfile?.status === "canceling";
  const manageCtaLabel = isCanceling ? "Renew subscription" : "Manage subscription";
  const manageCtaShort = isCanceling ? "Renew" : "Manage";
  const ctaHtml = isManage
    ? `<button type="button" class="dpaam-btn dpaam-btn-primary dpaam-auth-submit dpaam-plan-panel__action" data-action="manage-subscription" aria-label="${escapeHtml(manageCtaLabel)}">
        <span class="dpaam-responsive-label dpaam-responsive-label--full">${escapeHtml(manageCtaLabel)}</span><span class="dpaam-responsive-label dpaam-responsive-label--short" aria-hidden="true">${escapeHtml(manageCtaShort)}</span>
      </button>`
    : upgradeCheckoutButtonHtml({
        label: checkoutCta === "upgrade" ? "Upgrade" : "Select",
      });

  const panelInner = `
      <div class="dpaam-plan-panel__hero">
        ${eyebrowHtml}
        ${taglineHtml}
      </div>
      <div class="dpaam-plan-panel__body">
        ${pricingHtml}
        ${allAccessPlanFeaturesHtml()}
      </div>
      ${ctaHtml}`;

  const panelClass = isManage
    ? "dpaam-plan-panel dpaam-plan-panel--unlimited dpaam-plan-panel--member"
    : "dpaam-plan-panel dpaam-plan-panel--unlimited";
  const panelClassWithOffer = showOfferImage
    ? `${panelClass} dpaam-plan-panel--with-offer-image`
    : panelClass;
  const panelHtml = showOfferImage
    ? `<div class="${panelClassWithOffer}">
      <div class="dpaam-plan-panel__offer-media" aria-hidden="true">
        <img
          class="dpaam-plan-panel__offer-image"
          src="assets/dpaam/offer-image.png"
          alt=""
          decoding="async"
        />
      </div>
      <div class="dpaam-plan-panel__offer-content">${panelInner}</div>
    </div>`
    : `<div class="${panelClass}">${panelInner}</div>`;

  return rebateHtml
    ? `<div class="dpaam-all-access-offer">${panelHtml}${rebateHtml}</div>`
    : panelHtml;
}

function allAccessFreePlanPanelHtml({
  showPlanStatus = false,
  includeRebate = false,
  includeOfferImage,
  checkoutCta = "upgrade",
} = {}) {
  return `
    ${showPlanStatus ? currentPlanStatusHtml() : ""}
    ${unlimitedPlanPanelHtml({ includeRebate, includeOfferImage, checkoutCta })}`;
}

function syncMembershipAccessChrome() {
  const isFree = state.membershipAccess === "free";
  els.dashboard?.classList.toggle("dpaam-dashboard--free", isFree);
  if (els.topbarPlanPill) {
    els.topbarPlanPill.hidden = isFree;
  }
  if (els.topbarUpgradeBtn) {
    els.topbarUpgradeBtn.hidden = !isFree || MOBILE_MENU_MQL.matches;
  }
  if (els.mobileUpgradeBtn) {
    els.mobileUpgradeBtn.hidden = !isFree;
  }
}

function applyAccountPlanPanelContent() {
  const isFree = state.membershipAccess === "free";
  if (isFree) {
    if (els.accountPlanUpgrade) {
      els.accountPlanUpgrade.hidden = false;
      els.accountPlanUpgrade.innerHTML = unlimitedPlanPanelHtml({
        includeRebate: true,
        includeOfferImage: !MOBILE_MENU_MQL.matches,
        checkoutCta: "upgrade",
      });
    }
    if (els.accountPlanFree) {
      els.accountPlanFree.hidden = false;
      els.accountPlanFree.innerHTML = accountStarterPlanPanelHtml();
    }
    if (els.accountPlanMember) {
      els.accountPlanMember.hidden = true;
      els.accountPlanMember.innerHTML = "";
    }
    return;
  }

  if (els.accountPlanUpgrade) {
    els.accountPlanUpgrade.hidden = true;
    els.accountPlanUpgrade.innerHTML = "";
  }
  if (els.accountPlanFree) {
    els.accountPlanFree.hidden = true;
    els.accountPlanFree.innerHTML = "";
  }
  if (els.accountPlanMember) {
    els.accountPlanMember.hidden = false;
    els.accountPlanMember.innerHTML = unlimitedPlanPanelHtml({
      action: "manage",
      planNameId: "dpaam-account-plan-name",
      billingProfile: userBillingProfile,
      includeOfferImage: !MOBILE_MENU_MQL.matches,
    });
  }
}

function renderAccountPlanPanel() {
  syncMembershipAccessChrome();
  const accountBody = els.accountModal?.open
    ? els.accountModal.querySelector(".dpaam-account-body")
    : null;
  const accountInner = els.accountBodyInner;
  if (accountBody && accountInner) {
    animateStandardsBodyResize(accountBody, accountInner, applyAccountPlanPanelContent);
    return;
  }
  applyAccountPlanPanelContent();
}

function setUpgradeRebateOpen(wrap, open, { animate = true } = {}) {
  const panel = wrap?.querySelector(".dpaam-modal-standards-panel");
  const summary = wrap?.querySelector(".dpaam-upgrade-rebate__summary");
  setCollapsiblePanelOpen(panel, open, { animate });
  summary?.setAttribute("aria-expanded", open ? "true" : "false");
  wrap?.classList.toggle("dpaam-upgrade-rebate--open", open);
}

function toggleUpgradeRebate(btn) {
  const wrap = btn.closest(".dpaam-upgrade-rebate");
  const panel = wrap?.querySelector(".dpaam-modal-standards-panel");
  if (!wrap || !panel) return;

  const isOpen = panel.classList.contains("dpaam-modal-standards-panel--open");
  setUpgradeRebateOpen(wrap, !isOpen);
}

function openUpgradeModal() {
  if (!els.upgradeModal || !els.upgradeModalBody) return;
  els.upgradeModalBody.innerHTML = unlimitedPlanPanelHtml({
    includeRebate: true,
    includeOfferImage: !MOBILE_MENU_MQL.matches,
    checkoutCta: "upgrade",
  });
  showExclusiveModal(els.upgradeModal);
}

function memberOnlyModalBodyHtml() {
  return `<div class="dpaam-modal-content">${allAccessFreePlanPanelHtml({
    includeRebate: true,
    includeOfferImage: !MOBILE_MENU_MQL.matches,
  })}</div>`;
}

function populateMemberOnlyModal(gameId) {
  if (!els.memberOnlyBody) return;
  if (gameId) memberOnlyGameId = gameId;
  els.memberOnlyBody.innerHTML = memberOnlyModalBodyHtml();
}

function openMemberOnlyModal(gameId) {
  if (gameId) memberOnlyGameId = gameId;
  populateMemberOnlyModal(memberOnlyGameId);
  if (els.modal.open) {
    const paywallGameId = memberOnlyGameId;
    transitionToModal(els.modal, () => {
      modalGameId = null;
      modalContext = "library";
      populateMemberOnlyModal(paywallGameId);
      showExclusiveModal(els.memberOnlyModal);
    });
    return;
  }
  showExclusiveModal(els.memberOnlyModal);
}

function openShareCodeLimitModal() {
  const fromModal = [els.shareModal, els.modal].find((m) => m?.open);
  if (fromModal) {
    transitionToModal(fromModal, () => {
      if (fromModal === els.modal) {
        modalGameId = null;
        modalContext = "library";
      }
      showExclusiveModal(els.shareCodeLimitModal);
    });
    return;
  }
  showExclusiveModal(els.shareCodeLimitModal);
}

function viewActiveCodesFromLimitModal() {
  closeAnimatedModal(els.shareCodeLimitModal);
  setActiveTab("active");
}

function openModal(gameId, context = "library") {
  const game = gameById(gameId);
  if (!game) return;
  preloadImages([game.main, game.badguy]);
  modalGameId = gameId;
  setStandardsModalGameId(gameId);
  modalContext = context;
  els.modalTitle.textContent = "Escape Room Info";
  const skillsHtml =
    game.skills && game.skills.filter((s) => s).length
      ? `<dt>Skills</dt><dd class="dpaam-modal-skills"><div class="dpaam-tags">${game.skills
          .filter((s) => s)
          .map((s) => `<span class="dpaam-tag">${escapeHtml(s)}</span>`)
          .join("")}</div></dd>`
      : "";

  const metaHtml = `
      ${game.topic ? `<dt>Topic</dt><dd>${escapeHtml(formatLabel(game.topic))}</dd>` : ""}
      <dt>Season</dt><dd>${escapeHtml(formatLabel(game.season))}</dd>
      <dt>Theme</dt><dd><button type="button" class="dpaam-modal-theme-link" data-action="open-theme" data-theme-title="${escapeHtml(game.title)}"><span class="dpaam-modal-theme-link-text">${escapeHtml(game.title)}</span><span class="dpaam-modal-theme-link-arrow" aria-hidden="true">→</span></button></dd>`;
  const tagsHtml = `
      <dt>Grade</dt><dd class="dpaam-modal-grades">${libTagsHtml(game)}</dd>
      ${skillsHtml}`;
  els.modalBody.innerHTML = modalBodyHtml(game, metaHtml, tagsHtml);
  populateModalStandards(game);

  refreshModalActionButton();
  refreshModalPreviewButton();

  showExclusiveModal(els.modal);
}

function showThemeModal(theme) {
  els.themeModalTitle.textContent = theme.title;
  if (els.themeModalSeason) {
    const seasonText = theme.season ? formatLabel(theme.season) : "";
    els.themeModalSeason.textContent = seasonText;
    els.themeModalSeason.hidden = !seasonText;
  }
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
  const { gameId, context } = themeModalReturn;
  themeModalReturn = null;
  transitionToModal(els.themeModal, () => openModal(gameId, context));
}

function openThemeModal(title) {
  const theme = themeByTitle(title);
  if (!theme) return;

  if (els.modal.open) {
    themeModalReturn = { gameId: modalGameId, context: modalContext };
    transitionToModal(els.modal, () => showThemeModal(theme));
    return;
  }

  themeModalReturn = null;
  showThemeModal(theme);
}

function refreshModalActionButton() {
  if (!modalGameId) return;
  const btn = els.modalAdd;
  btn.className = "dpaam-btn dpaam-btn-activate";
  btn.innerHTML = shareButtonInnerHtml(modalGameId);
  btn.disabled = false;
  btn.removeAttribute("aria-label");
}

function refreshModalPreviewButton() {
  if (!modalGameId || !els.modalPreview) return;
  const btn = els.modalPreview;
  const locked = isGameLockedForAccess(modalGameId);
  btn.hidden = locked;
  if (locked) return;
  if (modalContext === "active") {
    btn.textContent = "Answer key";
  } else {
    btn.textContent = "Preview";
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
  const thumb = game.thumbnail
    ? `<img class="dpaam-modal-thumb" src="${escapeHtml(game.thumbnail)}" alt="" loading="lazy" decoding="async" />`
    : `<span class="dpaam-modal-thumb dpaam-modal-thumb--empty"></span>`;
  return `<div class="dpaam-modal-thumb-wrap">${cardNewBadgeHtml(game)}${cardAllAccessBadgeHtml(game)}${thumb}</div>`;
}

function modalBodyHtml(game, metaInner, tagsInner) {
  return `${modalThumbHtml(game)}<div class="dpaam-modal-content">
    <dl class="dpaam-modal-dl">${metaInner}
      <div class="dpaam-modal-dl-tags">${tagsInner}
        <dt>Standards</dt>
        <dd class="dpaam-modal-standards">
          <div class="dpaam-tags dpaam-modal-standards-chips" role="group" aria-label="Standards categories"></div>
          <div class="dpaam-modal-standards-panel" id="dpaam-modal-standards-panel" inert>
            <div class="dpaam-modal-standards-body">
              <div class="dpaam-modal-standards-inner"></div>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  </div>`;
}

function shareCodeCharsHtml(code) {
  return [...code]
    .map((ch) => `<span class="dpaam-share-code-char">${escapeHtml(ch)}</span>`)
    .join("");
}

const SHARE_CLASSROOM_ICON = `<svg class="dpaam-share-classroom-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="8" height="6" rx="1" fill="#0F9D58"/><rect x="13" y="5" width="8" height="6" rx="1" fill="#F4B400"/><rect x="3" y="13" width="8" height="6" rx="1" fill="#4285F4"/><rect x="13" y="13" width="8" height="6" rx="1" fill="#DB4437"/></svg>`;

function shareModalHtml(game, { pending = false } = {}) {
  const chipDisabled = pending ? " disabled" : "";
  const optionsHtml = `
    <div class="dpaam-share-options">
      <div class="dpaam-share-more">
        <div class="dpaam-tags dpaam-share-more-chips" role="group" aria-label="Sharing options">
          <button
            type="button"
            class="dpaam-tag dpaam-share-more-chip"
            data-action="select-share-more"
            data-share-more="direct"
            aria-pressed="false"${chipDisabled}
          >Direct Link</button>
          <button
            type="button"
            class="dpaam-tag dpaam-share-more-chip"
            data-action="select-share-more"
            data-share-more="code"
            aria-pressed="false"${chipDisabled}
          >Game Code</button>
          <button
            type="button"
            class="dpaam-tag dpaam-share-more-chip"
            data-action="select-share-more"
            data-share-more="classroom"
            aria-pressed="false"${chipDisabled}
          >Google Classroom</button>
        </div>
        <div class="dpaam-share-more-panel" id="dpaam-share-more-panel" inert>
          <div class="dpaam-share-more-body">
            <div class="dpaam-share-more-inner"></div>
          </div>
        </div>
      </div>
    </div>`;
  return `${modalThumbHtml(game)}${optionsHtml}`;
}

function shareModalSkeletonPanelHtml() {
  return `<section class="dpaam-share-panel-skeleton" aria-busy="true" aria-label="Loading sharing options">
    <div class="dpaam-skeleton-block dpaam-share-panel-skeleton__title"></div>
    <div class="dpaam-share-panel-skeleton__body">
      <div class="dpaam-skeleton-block dpaam-share-panel-skeleton__line"></div>
      <div class="dpaam-skeleton-block dpaam-share-panel-skeleton__line dpaam-share-panel-skeleton__line--short"></div>
    </div>
    <div class="dpaam-skeleton-block dpaam-share-panel-skeleton__btn"></div>
  </section>`;
}

function showShareModalSkeleton() {
  const wrap = els.shareModalBody.querySelector(".dpaam-share-more");
  const inner = wrap?.querySelector(".dpaam-share-more-inner");
  const firstChip = wrap?.querySelector(".dpaam-share-more-chip");
  if (!wrap || !inner || !firstChip) return;

  firstChip.setAttribute("aria-pressed", "true");
  inner.innerHTML = shareModalSkeletonPanelHtml();
  setShareMorePanelOpen(wrap, true, { animate: false });
}

function populateShareModal(gameId) {
  if (shareGameId !== gameId || !els.shareModal.open) return;
  const active = activeCodeFor(gameId);
  if (!active) return;

  shareCode = active.code;
  const wrap = els.shareModalBody.querySelector(".dpaam-share-more");
  const inner = wrap?.querySelector(".dpaam-share-more-inner");
  const firstChip = wrap?.querySelector('.dpaam-share-more-chip[data-share-more="direct"]');
  if (!wrap || !inner || !firstChip) return;

  wrap.querySelectorAll(".dpaam-share-more-chip").forEach((chip) => {
    chip.disabled = false;
  });
  inner.innerHTML = shareMoreGroupHtml("direct");
  firstChip.setAttribute("aria-pressed", "true");
  setShareMorePanelOpen(wrap, true, { animate: false });
}

function classroomShareTitle(game) {
  if (!game?.topic) return "Dingo Punks Escape Room";
  return `Dingo Punks Escape Room • ${formatLabel(game.topic)}`;
}

function classroomShareBody(code) {
  const directLink = "https://play.dingopunks.com/?" + encodeURIComponent(code);
  return "Click this link to play your escape room:\n" + directLink;
}

function shareMoreGroupHtml(key) {
  const code = shareCode || "";
  if (key === "direct") {
    const directLink = "https://play.dingopunks.com/?" + encodeURIComponent(code);
    const directLinkLabel = "play.dingopunks.com/?" + code;
    return `<section class="dpaam-share-more-option" aria-labelledby="dpaam-share-option-1-title">
      <h4 class="dpaam-share-option-title" id="dpaam-share-option-1-title">Send students a direct link</h4>
      <p class="dpaam-share-option-desc">Students can visit <a href="${escapeHtml(directLink)}" target="_blank" rel="noopener">${escapeHtml(directLinkLabel)}</a> to start the escape room automatically.</p>
      <div class="dpaam-share-option-actions dpaam-share-option-actions--stack">
        <button type="button" class="dpaam-btn dpaam-btn-primary" data-action="copy-direct-link">Copy direct link</button>
      </div>
    </section>`;
  }
  if (key === "code") {
    return `<section class="dpaam-share-more-option" aria-labelledby="dpaam-share-option-2-title">
      <h4 class="dpaam-share-option-title" id="dpaam-share-option-2-title">Have students enter a game code</h4>
      <p class="dpaam-share-option-desc">Students can visit <a href="https://play.dingopunks.com" target="_blank" rel="noopener">play.dingopunks.com</a> and enter the game code <span class="dpaam-share-code-inline" aria-label="Game code ${escapeHtml(code)}">${shareCodeCharsHtml(code)}</span> to start the escape room.</p>
      <div class="dpaam-share-option-actions">
        <button type="button" class="dpaam-btn dpaam-btn-primary" id="dpaam-share-copy-link" data-action="copy-share-link">Copy website</button>
        <button type="button" class="dpaam-btn dpaam-btn-primary" id="dpaam-share-copy" data-action="copy-share-code">Copy game code</button>
      </div>
    </section>`;
  }
  if (key === "classroom") {
    return `<section class="dpaam-share-more-option" aria-labelledby="dpaam-share-option-3-title">
      <h4 class="dpaam-share-option-title" id="dpaam-share-option-3-title">Share to Google Classroom</h4>
      <p class="dpaam-share-option-desc">Students can start the escape room from a Google Classroom assignment.</p>
      <div class="dpaam-share-option-actions dpaam-share-option-actions--stack">
        <button type="button" class="dpaam-btn dpaam-btn-primary dpaam-share-classroom-btn" data-action="share-google-classroom">${SHARE_CLASSROOM_ICON}Share to Google Classroom</button>
      </div>
    </section>`;
  }
  return "";
}

function setShareMorePanelOpen(wrap, open, { animate = true } = {}) {
  const panel = wrap?.querySelector(".dpaam-share-more-panel");
  if (!panel) return;
  if (!animate) panel.classList.add("dpaam-share-more-panel--instant");
  panel.classList.toggle("dpaam-share-more-panel--open", open);
  panel.inert = !open;
  if (!animate) {
    void panel.offsetHeight;
    panel.classList.remove("dpaam-share-more-panel--instant");
  }
}

function selectShareMoreGroup(btn, { instant = false } = {}) {
  const wrap = btn.closest(".dpaam-share-more");
  const inner = wrap?.querySelector(".dpaam-share-more-inner");
  const body = wrap?.querySelector(".dpaam-share-more-body");
  const panel = wrap?.querySelector(".dpaam-share-more-panel");
  if (!wrap || !inner) return;

  const already = btn.getAttribute("aria-pressed") === "true";
  wrap.querySelectorAll(".dpaam-share-more-chip").forEach((chip) => {
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
        onComplete: () => setShareMorePanelOpen(wrap, false),
      }
    );
    return;
  }

  const html = shareMoreGroupHtml(btn.dataset.shareMore);
  if (!html) return;
  btn.setAttribute("aria-pressed", "true");

  const isOpen = panel?.classList.contains("dpaam-share-more-panel--open");
  if (isOpen) {
    animateStandardsBodyResize(body, inner, () => {
      inner.innerHTML = html;
    });
  } else {
    inner.innerHTML = html;
    setShareMorePanelOpen(wrap, true, { animate: !instant });
  }
}

function showShareModal(gameId, { pending = false } = {}) {
  const game = gameById(gameId);
  const active = activeCodeFor(gameId);
  if (!game || (!pending && !active)) return;

  shareGameId = gameId;
  shareCode = pending ? null : active.code;
  els.shareModalBody.innerHTML = shareModalHtml(game, { pending });

  if (pending) {
    showShareModalSkeleton();
  } else {
    const firstChip = els.shareModalBody.querySelector(".dpaam-share-more-chip");
    if (firstChip) selectShareMoreGroup(firstChip, { instant: true });
  }
  showExclusiveModal(els.shareModal);
}

function openShareModal(gameId, { pending = false } = {}) {
  if (isGameLockedForAccess(gameId)) {
    openMemberOnlyModal(gameId);
    return;
  }
  const game = gameById(gameId);
  const active = activeCodeFor(gameId);
  if (!game || (!pending && !active)) return;

  if (els.modal.open) {
    transitionToModal(els.modal, () => {
      modalGameId = null;
      modalContext = "library";
      showShareModal(gameId, { pending });
    });
    return;
  }

  showShareModal(gameId, { pending });
}

async function activateAndShare(gameId) {
  if (isGameLockedForAccess(gameId)) {
    openMemberOnlyModal(gameId);
    return;
  }

  const needsCreate = !activeCodeFor(gameId);

  if (needsCreate) {
    openShareModal(gameId, { pending: true });
    const ok = await generateCode(gameId);
    if (!ok) {
      if (shareGameId === gameId && els.shareModal.open && !isModalTransitionPending()) {
        closeAnimatedModal(els.shareModal);
      }
      return;
    }
    populateShareModal(gameId);
    return;
  }

  openShareModal(gameId);
}

function handleCancelCode(gameId) {
  void cancelCode(gameId);
}

let currentUser = null;

function isLocalMembershipDev() {
  const host = location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

function userHasPasswordProvider(user) {
  return Boolean(user?.providerData?.some((provider) => provider.providerId === "password"));
}


function updateAccountModal(user) {
  const localDevPreview = isLocalMembershipDev() && !user;

  if (els.accountEmail) {
    if (user?.email) {
      els.accountEmail.textContent = user.email;
    } else if (localDevPreview) {
      els.accountEmail.textContent = "you@example.com";
    } else {
      els.accountEmail.textContent = "—";
    }
  }

  const hasPassword = userHasPasswordProvider(user) || localDevPreview;
  if (els.accountSendReset) {
    els.accountSendReset.hidden = !hasPassword;
    els.accountSendReset.disabled = !user?.email && !localDevPreview;
  }
  renderAccountPlanPanel();
}

function openAccountModal() {
  updateAccountModal(currentUser);
  showExclusiveModal(els.accountModal);
}

async function sendAccountPasswordReset() {
  const email = currentUser?.email;
  if (!email || !els.accountSendReset) return;

  setButtonLoading(els.accountSendReset, true, "Sending…");
  try {
    await sendPasswordResetEmail(auth, email);
    showToast("Reset email sent");
  } catch (error) {
    showToast(authErrorMessage(error));
  } finally {
    setButtonLoading(els.accountSendReset, false, "Sending…");
  }
}

async function logoutAccount() {
  if (!els.accountLogout) return;

  setButtonLoading(els.accountLogout, true, "Logging out…");
  try {
    await signOut(auth);
    closeAnimatedModal(els.accountModal);
    showToast("Logged out");
  } catch (error) {
    showToast(authErrorMessage(error));
  } finally {
    setButtonLoading(els.accountLogout, false, "Logging out…");
  }
}

function billingErrorMessage(error) {
  if (error?.code === "functions/failed-precondition") {
    return "No billing account on file.";
  }
  if (error?.code === "functions/unauthenticated") {
    return "Sign in to manage billing.";
  }
  return "Couldn't open billing. Try again.";
}

function checkoutErrorMessage(error) {
  if (error?.code === "functions/invalid-argument") {
    return error.message || "Check order number and try again.";
  }
  if (error?.code === "functions/already-exists") {
    return "That order number was already used.";
  }
  if (error?.code === "functions/failed-precondition") {
    return "You already have All-Access.";
  }
  if (error?.code === "functions/resource-exhausted") {
    return "Too many attempts. Try again in an hour.";
  }
  if (error?.code === "functions/unauthenticated") {
    return "Sign in to upgrade.";
  }
  return "Couldn't start checkout. Try again.";
}

function applyPurchaseCredit(button) {
  const rebate = button.closest(".dpaam-upgrade-rebate");
  const status = rebate?.querySelector("[data-rebate-status]");
  const parsed = readRebateFromPanel(rebate);
  const message = parsed.error
    ? parsed.error
    : parsed.rebate
      ? "$8.99 credit at checkout."
      : "Enter an order number.";

  if (status) {
    status.textContent = message;
    status.classList.toggle("dpaam-upgrade-rebate__status--error", !parsed.rebate);
  }
}

async function startCheckout(button) {
  const panel = button.closest(".dpaam-plan-panel");
  const rebateScope =
    button.closest(".dpaam-all-access-offer") ??
    (isAuthOfferViewVisible() ? document.getElementById("dpaam-auth-offer-rebate") : null) ??
    panel;
  const parsed = readRebateFromPanel(rebateScope);
  if (parsed.error) {
    showToast(parsed.error);
    return;
  }

  if (isAuthOfferViewVisible()) {
    markAuthOfferStepComplete(auth.currentUser?.uid);
  }

  setButtonLoading(button, true, "Redirecting…", { useHtml: true });
  try {
    const payload = { returnOrigin: window.location.origin };
    if (parsed.rebate) {
      payload.rebatePlatform = parsed.rebate.platform;
      payload.rebateOrderNumber = parsed.rebate.orderNumber;
    }
    const result = await createCheckoutSession(payload);
    const checkoutUrl = result.data?.url;
    if (typeof checkoutUrl !== "string" || !checkoutUrl) {
      throw new Error("Checkout did not return a URL.");
    }
    window.location.assign(checkoutUrl);
  } catch (error) {
    console.error("createCheckoutSession failed", error);
    showToast(checkoutErrorMessage(error));
    setButtonLoading(button, false, "Redirecting…", { useHtml: true });
  }
}

async function openBillingPortal(button) {
  setButtonLoading(button, true, "Opening…", { useHtml: true });
  try {
    const result = await createPortalSession({
      returnOrigin: window.location.origin,
    });
    const portalUrl = result.data?.url;
    if (typeof portalUrl !== "string" || !portalUrl) {
      throw new Error("Billing portal did not return a URL.");
    }
    window.location.assign(portalUrl);
  } catch (error) {
    console.error("createPortalSession failed", error);
    showToast(billingErrorMessage(error));
    setButtonLoading(button, false, "Opening…", { useHtml: true });
  }
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

async function copyShareCode() {
  if (!shareCode) return;
  if (!(await copyToClipboard(shareCode))) {
    showToast("Couldn't copy.");
    return;
  }
  showToast("Game code copied");
}

async function copyShareLink() {
  if (!shareCode) return;
  const link = "https://play.dingopunks.com";
  if (!(await copyToClipboard(link))) {
    showToast("Couldn't copy.");
    return;
  }
  showToast("Website copied");
}

async function copyDirectLink() {
  if (!shareCode) return;
  const link = "https://play.dingopunks.com/?" + encodeURIComponent(shareCode);
  if (!(await copyToClipboard(link))) {
    showToast("Couldn't copy.");
    return;
  }
  showToast("Link copied");
}

function shareToGoogleClassroom() {
  if (!shareCode) return;
  const game = shareGameId ? gameById(shareGameId) : null;
  const title = game ? classroomShareTitle(game) : "Dingo Punks Escape Room";
  const directLink = "https://play.dingopunks.com/?" + encodeURIComponent(shareCode);
  const shareUrl =
    "https://classroom.google.com/share?url=" +
    encodeURIComponent(directLink) +
    "&title=" +
    encodeURIComponent(title) +
    "&body=" +
    encodeURIComponent(classroomShareBody(shareCode)) +
    "&itemtype=assignment";
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
      case "cancel-code": void handleCancelCode(gameId); break;
      case "share-code": openShareModal(gameId); break;
      case "open-details": openModal(gameId, "active"); break;
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
      case "share-code": void activateAndShare(gameId); break;
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
  els.libraryNewFilter?.addEventListener("click", () => {
    const nextActive = !state.filters.newThisMonth;
    state.filters.newThisMonth = nextActive;
    if (nextActive) resetLibraryDropdownFilters();
    renderLibrary();
  });

  Object.entries(els.filters).forEach(([key, sel]) => {
    sel.addEventListener("change", () => {
      state.filters.newThisMonth = false;
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
        case "share-code": void activateAndShare(gameId); break;
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

  // Modal theme link + standards toggle
  els.modalBody.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    switch (btn.dataset.action) {
      case "open-theme":
        openThemeModal(btn.dataset.themeTitle);
        break;
      case "select-standard-group":
        selectModalStandardsGroup(btn);
        break;
    }
  });

  function openPreview(gameId, { answers = false } = {}) {
    if (!gameId) return;
    const answersQuery = answers ? "&answers=1" : "";
    const previewUrl =
      window.location.origin + "/preview.html?game=" + encodeURIComponent(gameId) + answersQuery;
    const previewWindow = window.open("", "_blank");
    if (!previewWindow) return;

    previewWindow.document.documentElement.style.background = "rgb(51, 41, 37)";
    previewWindow.document.body.style.background = "rgb(51, 41, 37)";
    previewWindow.opener = null;
    previewWindow.location.replace(previewUrl);
  }

  // Modal Preview / Answer Key
  els.modalPreview.addEventListener("click", () => {
    openPreview(modalGameId, { answers: modalContext === "active" });
  });

  // Modal footer action — Share activates (if needed) and opens sharing options.
  els.modalAdd.addEventListener("click", () => {
    if (!modalGameId) return;
    void activateAndShare(modalGameId);
  });

  wireAnimatedModal(els.modal, () => {
    if (pendingModalOpen) {
      runPendingModalOpen();
      return;
    }
    modalGameId = null;
    setStandardsModalGameId(null);
    modalContext = "library";
  });

  wireAnimatedModal(els.themeModal, () => {
    runPendingModalOpen();
    if (!pendingModalOpen) themeModalReturn = null;
  });
  els.themeModalBack.addEventListener("click", () => {
    returnFromThemeModal();
  });

  wireAnimatedModal(els.memberOnlyModal);
  wireAnimatedModal(els.upgradeModal);

  wireAnimatedModal(els.shareCodeLimitModal);
  els.shareCodeLimitViewActive?.addEventListener("click", () => {
    viewActiveCodesFromLimitModal();
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
      case "open-answer-key": openPreview(shareGameId, { answers: true }); break;
      case "share-google-classroom": shareToGoogleClassroom(); break;
      case "select-share-more": selectShareMoreGroup(btn); break;
    }
  });

  // My Account modal
  wireAnimatedModal(els.accountModal);
  els.accountBtn?.addEventListener("click", () => {
    openAccountModal();
  });
  els.accountBtnMobile?.addEventListener("click", () => {
    dashboardMobileMenu?.setOpen(false);
    openAccountModal();
  });
  els.accountSendReset?.addEventListener("click", () => {
    sendAccountPasswordReset();
  });
  els.accountLogout?.addEventListener("click", () => {
    logoutAccount();
  });

  document.addEventListener("click", (e) => {
    const rebateToggle = e.target.closest("[data-action='toggle-upgrade-rebate']");
    if (rebateToggle) {
      toggleUpgradeRebate(rebateToggle);
      return;
    }

    const applyCreditBtn = e.target.closest("[data-action='apply-purchase-credit']");
    if (applyCreditBtn) {
      applyPurchaseCredit(applyCreditBtn);
      return;
    }

    const checkoutBtn = e.target.closest("[data-action='start-checkout']");
    if (checkoutBtn) {
      void startCheckout(checkoutBtn);
      return;
    }

    const completeOfferBtn = e.target.closest("[data-action='complete-auth-offer']");
    if (completeOfferBtn) {
      void completeAuthOfferAndEnterDashboard();
      return;
    }

    const upgradeBtn = e.target.closest("[data-action='upgrade-all-access']");
    if (upgradeBtn) {
      dashboardMobileMenu?.setOpen(false);
      openUpgradeModal();
      return;
    }

    const manageBtn = e.target.closest("[data-action='manage-subscription']");
    if (manageBtn) {
      void openBillingPortal(manageBtn);
    }
  });

  document.addEventListener("input", (e) => {
    if (!e.target.matches("[data-rebate-order]")) return;
    const rebate = e.target.closest(".dpaam-upgrade-rebate");
    const status = rebate?.querySelector("[data-rebate-status]");
    if (status) {
      status.textContent = "";
      status.classList.remove("dpaam-upgrade-rebate__status--error");
    }
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

const MOBILE_MENU_MQL = window.matchMedia("(max-width: 768px)");
const MOBILE_MENU_TRANSITION_MS = 200;
const mobileMenuControllers = [];
let dashboardMobileMenu = null;

function wireMobileMenu({ toggle, menu, backdrop, skipCloseOn = [] }) {
  if (!toggle || !menu) return null;

  const state = { closeTimer: null };

  function finishClose() {
    clearTimeout(state.closeTimer);
    state.closeTimer = null;
    menu.hidden = true;
    menu.classList.remove("is-closing");
    if (backdrop) {
      backdrop.hidden = true;
      backdrop.classList.remove("is-open");
    }
    if (!mobileMenuControllers.some((controller) => controller.isOpen())) {
      document.documentElement.classList.remove("dpaam-mobile-menu-open");
    }
  }

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function setOpen(open) {
    const animate = !prefersReducedMotion();
    clearTimeout(state.closeTimer);

    if (open) {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      menu.hidden = false;
      menu.classList.remove("is-closing");
      if (backdrop) backdrop.hidden = false;
      document.documentElement.classList.add("dpaam-mobile-menu-open");

      if (animate) {
        requestAnimationFrame(() => {
          menu.classList.add("is-open");
          backdrop?.classList.add("is-open");
        });
      } else {
        menu.classList.add("is-open");
        backdrop?.classList.add("is-open");
      }
      return;
    }

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    menu.classList.remove("is-open");
    backdrop?.classList.remove("is-open");

    if (!animate || menu.hidden) {
      finishClose();
      return;
    }

    menu.classList.add("is-closing");
    const onTransitionEnd = (e) => {
      if (e.target !== menu || e.propertyName !== "transform") return;
      menu.removeEventListener("transitionend", onTransitionEnd);
      if (menu.classList.contains("is-closing")) finishClose();
    };
    menu.addEventListener("transitionend", onTransitionEnd);
    state.closeTimer = setTimeout(() => {
      menu.removeEventListener("transitionend", onTransitionEnd);
      if (menu.classList.contains("is-closing")) finishClose();
    }, MOBILE_MENU_TRANSITION_MS + 50);
  }

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  backdrop?.addEventListener("click", () => {
    setOpen(false);
  });

  menu.querySelectorAll(".dpaam-btn").forEach((btn) => {
    if (skipCloseOn.includes(btn)) return;
    btn.addEventListener("click", () => setOpen(false));
  });

  const controller = { setOpen, isOpen };
  mobileMenuControllers.push(controller);
  return controller;
}

function initMobileMenus() {
  dashboardMobileMenu = wireMobileMenu({
    toggle: els.mobileMenuToggle,
    menu: els.mobileMenu,
    backdrop: els.mobileMenuBackdrop,
    skipCloseOn: els.accountBtnMobile ? [els.accountBtnMobile] : [],
  });

  if (mobileMenuControllers.length === 0) return;

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    mobileMenuControllers.forEach((controller) => {
      if (controller.isOpen()) controller.setOpen(false);
    });
  });

  MOBILE_MENU_MQL.addEventListener("change", () => {
    syncMembershipAccessChrome();
    applyAccountPlanPanelContent();
    if (els.upgradeModal?.open && els.upgradeModalBody) {
      els.upgradeModalBody.innerHTML = unlimitedPlanPanelHtml({
        includeRebate: true,
        includeOfferImage: !MOBILE_MENU_MQL.matches,
        checkoutCta: "upgrade",
      });
    }
    if (els.memberOnlyModal?.open) {
      populateMemberOnlyModal();
    }
    if (!MOBILE_MENU_MQL.matches) {
      mobileMenuControllers.forEach((controller) => {
        if (controller.isOpen()) controller.setOpen(false);
      });
    }
  });
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

function initDebugAccessToggle() {
  if (!isLocalMembershipDev()) return;

  const options = Array.from(document.querySelectorAll("[data-debug-access]"));
  if (options.length === 0) return;

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const access = option.dataset.debugAccess;
      if (access !== "plan" && access !== "free" && access !== "member") return;
      debugMembershipAccessOverride = access === "plan" ? null : access;
      applyMembershipAccess();
    });
  });
}

function initDebugActions() {
  if (!isLocalMembershipDev()) return;

  document.querySelector("[data-debug-action='share-code-limit']")?.addEventListener("click", () => {
    openShareCodeLimitModal();
  });
}

function applyMembershipAccess() {
  state.membershipAccess = debugMembershipAccessOverride ?? planMembershipAccess;

  document.querySelectorAll("[data-debug-access]").forEach((option) => {
    const selectedAccess = debugMembershipAccessOverride ?? "plan";
    const selected = option.dataset.debugAccess === selectedAccess;
    option.classList.toggle("is-selected", selected);
    option.setAttribute("aria-checked", String(selected));
  });

  syncMembershipAccessChrome();
  populateFilters();
  renderAccountPlanPanel();
  renderLibrary();
  renderFavorites();
  renderActiveCodes();
}

function attachUserProfileSubscription(user) {
  unsubscribeUserProfile?.();
  unsubscribeUserProfile = null;
  if (!userCanAccessDashboard(user)) return;

  unsubscribeUserProfile = subscribeToUserProfile(
    user.uid,
    (profile) => {
      if (currentUser?.uid === user.uid && profile) applyUserProfile(profile);
    },
    (error) => {
      console.error("Failed to watch user profile", error);
      showToast("Couldn't refresh plan.");
    },
  );
}

function init() {
  configureAuthOffer({
    renderPanels(freeHost, paidHost) {
      freeHost.innerHTML = authOfferFreePlanPanelHtml();
      paidHost.innerHTML = unlimitedPlanPanelHtml({
        includeRebate: false,
        includeOfferImage: false,
      });
      const rebateHost = document.getElementById("dpaam-auth-offer-rebate");
      if (rebateHost) {
        rebateHost.innerHTML = upgradeRebateFieldsHtml();
      }
    },
  });

  initAuth({
    loadDashboardState,
    onDashboardLoaded: attachUserProfileSubscription,
  });
  initDebugView();
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    if (!user) {
      unsubscribeUserProfile?.();
      unsubscribeUserProfile = null;
      resetUserPrefs();
      resetShareCodes();
      planMembershipAccess = "free";
      userBillingProfile = null;
      applyMembershipAccess();
    } else {
      attachUserProfileSubscription(user);
    }
    updateAccountModal(user);
  });
  initMobileMenus();
  initStickyTabbar();
  initQuickStartGuide();
  initDebugAccessToggle();
  initDebugActions();
  populateFilters();
  renderAccountPlanPanel();
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
