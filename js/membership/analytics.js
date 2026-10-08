// Dingo Punks: membership dashboard analytics (GA4 via gtag.js).
//
// Thin wrapper around window.gtag. Every call is fire-and-forget: if the tag
// is blocked, missing, or throws, the dashboard must behave exactly the same.
// Only whitelisted, non-identifying params are forwarded.

const ALLOWED_PARAMS = new Set([
  "game_id",
  "tab",
  "method",
  "source",
  "locked",
  "rebate",
  "value",
  "currency",
  "transport_type",
]);

export const ALL_ACCESS_PRICE_USD = 35.88;

function gtagAvailable() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

function sanitizeParams(params) {
  const out = {};
  for (const [key, value] of Object.entries(params ?? {})) {
    if (!ALLOWED_PARAMS.has(key)) continue;
    if (value === undefined || value === null) continue;
    const type = typeof value;
    if (type !== "string" && type !== "number" && type !== "boolean") continue;
    out[key] = value;
  }
  return out;
}

/** Send a GA4 event. Never throws. */
export function track(eventName, params = {}) {
  if (!gtagAvailable() || typeof eventName !== "string" || !eventName) return;
  try {
    window.gtag("event", eventName, sanitizeParams(params));
  } catch (error) {
    console.warn("analytics track failed", error);
  }
}

/** Set the user-scoped `plan` property: "free" | "member". Never throws. */
export function setAnalyticsPlan(plan) {
  if (!gtagAvailable()) return;
  if (plan !== "free" && plan !== "member") return;
  try {
    window.gtag("set", "user_properties", { plan });
  } catch (error) {
    console.warn("analytics user property failed", error);
  }
}
