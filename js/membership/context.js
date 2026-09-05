import { games } from "../games.js";

// ---------- constants ----------

const QUICK_START_STATE_KEY = "dpaam-quick-start-state";
const QUICK_START_LEGACY_DISMISS_KEY = "dpaam-quick-start-dismissed";
const DASHBOARD_TABS = ["library", "favorites", "active"];
const SUBSCRIBE_URL = "https://dingopunks.com/shop";
const CARD_LOCKED_BADGE_ICON = "assets/dpaam/card-locked.png";
const BUTTON_LOCKED_ICON = "assets/dpaam/button-locked.png";

function libraryThemeSlug(game) {
  const match = game.path?.match(/^resource\/([^/]+)\//);
  return match?.[1] ?? "";
}

const LIBRARY_SEASON_ORDER = games.reduce((order, game) => {
  if (!order.includes(game.season)) order.push(game.season);
  return order;
}, []);

const LIBRARY_THEME_ORDER_BY_SEASON = games.reduce((map, game) => {
  const slug = libraryThemeSlug(game);
  if (!slug) return map;
  if (!map.has(game.season)) map.set(game.season, []);
  const order = map.get(game.season);
  if (!order.includes(slug)) order.push(slug);
  return map;
}, new Map());

// ---------- state ----------

const state = {
  favorites: [],            // ordered array of game ids
  activeCodes: [],          // [{ gameId, code, expiresAt, createdAt }]
  filters: { season: "all", grade: "all", subject: "all", newThisMonth: false },
  guideFaqOpen: false,
  activeTab: null,
  membershipAccess: "free", // "member" | "free" — derived from users/{uid}.plan
};

// ---------- DOM refs ----------

const els = {
  dashboard: document.getElementById("dpaam-dashboard"),
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
  libraryNewFilter: document.getElementById("dpaam-library-new-filter"),
  libraryEmpty: document.getElementById("dpaam-library-empty"),
  modal: document.getElementById("dpaam-modal"),
  modalTitle: document.getElementById("dpaam-modal-title"),
  modalBody: document.getElementById("dpaam-modal-body"),
  modalAdd: document.getElementById("dpaam-modal-add"),
  modalPreview: document.getElementById("dpaam-modal-preview"),
  themeModal: document.getElementById("dpaam-theme-modal"),
  themeModalTitle: document.getElementById("dpaam-theme-modal-title"),
  themeModalSeason: document.getElementById("dpaam-theme-modal-season"),
  themeModalBody: document.getElementById("dpaam-theme-modal-body"),
  themeModalBack: document.getElementById("dpaam-theme-modal-back"),
  shareModal: document.getElementById("dpaam-share-modal"),
  shareModalBody: document.getElementById("dpaam-share-modal-body"),
  memberOnlyModal: document.getElementById("dpaam-member-only-modal"),
  memberOnlyBody: document.getElementById("dpaam-member-only-body"),
  accountBtn: document.getElementById("dpaam-account-btn"),
  accountBtnMobile: document.getElementById("dpaam-account-btn-mobile"),
  mobileMenuToggle: document.getElementById("dpaam-mobile-menu-toggle"),
  mobileMenu: document.getElementById("dpaam-mobile-menu"),
  mobileMenuBackdrop: document.getElementById("dpaam-mobile-menu-backdrop"),
  mobileUpgradeBtn: document.getElementById("dpaam-upgrade-btn-mobile"),
  modalBackdrop: document.getElementById("dpaam-modal-backdrop"),
  accountModal: document.getElementById("dpaam-account-modal"),
  accountEmail: document.getElementById("dpaam-account-email"),
  accountSendReset: document.getElementById("dpaam-account-send-reset"),
  accountGoogleNote: document.getElementById("dpaam-account-google-note"),
  accountLogout: document.getElementById("dpaam-account-logout"),
  accountPlanFree: document.getElementById("dpaam-account-plan-free"),
  accountPlanMember: document.getElementById("dpaam-account-plan-member"),
  topbarPlanPill: document.getElementById("dpaam-topbar-plan-pill"),
  topbarUpgradeBtn: document.getElementById("dpaam-topbar-upgrade-btn"),
  quickStart: document.getElementById("dpaam-quick-start"),
  quickStartClose: document.getElementById("dpaam-quick-start-close"),
  guideFaqToggle: document.getElementById("dpaam-guide-faq-toggle"),
  guideFaqList: document.getElementById("dpaam-guide-faq-list"),
};

export {
  BUTTON_LOCKED_ICON,
  CARD_LOCKED_BADGE_ICON,
  DASHBOARD_TABS,
  LIBRARY_SEASON_ORDER,
  LIBRARY_THEME_ORDER_BY_SEASON,
  QUICK_START_LEGACY_DISMISS_KEY,
  QUICK_START_STATE_KEY,
  SUBSCRIBE_URL,
  els,
  libraryThemeSlug,
  state,
};
