// resolveGameCode: the one public, unauthenticated endpoint. Students paste a
// membership share code on the play page and get back the gameId to launch.
//
// Kept separate from index.js so the logic can be tested against the Firestore
// emulator without the functions emulator.

import { logger } from "firebase-functions";
import { HttpsError } from "firebase-functions/v2/https";

import { CODE_PATTERN, VALID_GAME_IDS, isCodeActive } from "./share-codes.js";
import { enforceRateLimit } from "./rate-limit.js";

// 30 lookups / 10 min per IP. Brute force is already pointless (33M
// combinations); this only stops someone pointing a script at the endpoint.
export const RESOLVE_RATE_LIMIT_SCOPE = "resolveGameCode";
export const RESOLVE_RATE_LIMIT = 30;
export const RESOLVE_RATE_WINDOW_MS = 10 * 60 * 1000;

// One message for expired, deleted, never-existed, and someone-else's codes —
// a lookup must never confirm that a code exists.
const NOT_FOUND_MESSAGE = "That code has expired or doesn't exist.";

// Every request without a usable IP shares one counter. Erring toward
// over-limiting is correct here: an attacker must not be able to escape the
// limit by suppressing whatever we key on.
const UNKNOWN_IP_BUCKET = "unknown";

/**
 * The client IP we're willing to rate-limit on.
 *
 * `X-Forwarded-For` is a client-writable header, and the functions framework
 * does not enable Express `trust proxy`, so `req.ip` is the Google front end,
 * not the caller. Google's front end *appends* `<client-ip>, <lb-ip>` to
 * whatever the client already put in the header, so the rightmost entry is the
 * load balancer and the one before it is the only IP Google actually observed.
 * Taking the leftmost entry instead would let an attacker rotate a fake IP per
 * request and bypass the limit entirely — or aim it at a real user's IP.
 *
 * With fewer than two entries we're not behind the expected proxy chain
 * (local emulator, direct connection), so nothing in the header is verified
 * and we fall back to the socket address.
 */
export function clientIpFromRequest(rawRequest) {
  const forwarded = rawRequest?.headers?.["x-forwarded-for"];
  const chain = (Array.isArray(forwarded) ? forwarded.join(",") : forwarded ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  const observed =
    chain.length >= 2
      ? chain[chain.length - 2]
      : rawRequest?.ip || rawRequest?.socket?.remoteAddress || "";

  return normalizeIp(observed);
}

/**
 * Collapse an address to its rate-limit bucket. IPv6 is truncated to its /64
 * prefix — a single subscriber routinely holds a whole /64, so limiting full
 * IPv6 addresses would limit nothing.
 */
export function normalizeIp(rawIp) {
  if (typeof rawIp !== "string") return UNKNOWN_IP_BUCKET;

  let ip = rawIp.trim().toLowerCase();

  // Peel off the shapes proxies add: [v6]:port, v4:port, and a %zone index.
  const bracketed = /^\[([^\]]+)\](?::\d+)?$/.exec(ip);
  if (bracketed) ip = bracketed[1];
  const ipv4WithPort = /^(\d{1,3}(?:\.\d{1,3}){3}):\d+$/.exec(ip);
  if (ipv4WithPort) ip = ipv4WithPort[1];
  ip = ip.split("%")[0];

  // ::ffff:203.0.113.5 is an IPv4 client arriving over an IPv6 socket.
  const mapped = /^::ffff:(\d{1,3}(?:\.\d{1,3}){3})$/.exec(ip);
  if (mapped) ip = mapped[1];

  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(ip)) return ip;

  const expanded = expandIpv6(ip);
  return expanded ? `${expanded.slice(0, 4).join(":")}::/64` : UNKNOWN_IP_BUCKET;
}

/** IPv6 address to its 8 hextets, or null if it isn't parseable. */
function expandIpv6(ip) {
  const halves = ip.split("::");
  if (halves.length > 2) return null;

  const head = halves[0] ? halves[0].split(":") : [];
  const tail = halves.length === 2 && halves[1] ? halves[1].split(":") : [];
  const groups =
    halves.length === 2
      ? [...head, ...Array(Math.max(0, 8 - head.length - tail.length)).fill("0"), ...tail]
      : head;

  if (groups.length !== 8 || groups.some((group) => !/^[0-9a-f]{1,4}$/.test(group))) {
    return null;
  }
  // Zero-pad so 2001:db8:: and 2001:0db8:: land in the same bucket.
  return groups.map((group) => group.padStart(4, "0"));
}

/**
 * Resolve a share code to its gameId.
 *
 * Format is checked before the rate limit is charged: malformed input costs no
 * Firestore work, and a brute-force attempt has to send well-formed codes, so
 * it can't dodge the counter this way.
 *
 * @returns {Promise<{gameId: string}>}
 */
export async function resolveGameCode(db, rawCode, clientIp, options = {}) {
  const {
    now = Date.now(),
    limit = RESOLVE_RATE_LIMIT,
    windowMs = RESOLVE_RATE_WINDOW_MS,
  } = options;

  if (typeof rawCode !== "string") {
    throw new HttpsError("invalid-argument", "A code is required.");
  }

  const code = rawCode.trim().toUpperCase();
  // All-numeric codes belong to the legacy client-side purchase-code space and
  // can never match a membership code, so they never reach Firestore.
  if (!CODE_PATTERN.test(code) || !/[A-Z]/.test(code)) {
    throw new HttpsError("invalid-argument", "That code isn't valid.");
  }

  await enforceRateLimit(db, RESOLVE_RATE_LIMIT_SCOPE, clientIp || UNKNOWN_IP_BUCKET, {
    limit,
    windowMs,
    now,
    message: "Too many code attempts. Wait a few minutes and try again.",
  });

  const snap = await db.collection("codes").doc(code).get();
  if (!snap.exists || !isCodeActive(snap, now)) {
    throw new HttpsError("not-found", NOT_FOUND_MESSAGE);
  }

  const gameId = snap.get("gameId");
  if (typeof gameId !== "string" || !VALID_GAME_IDS.has(gameId)) {
    // The code was valid when created, so the catalog has drifted: either a
    // room was retired or game-ids.json shipped stale.
    logger.warn("Share code points at a gameId missing from the catalog", {
      code,
      gameId,
    });
    throw new HttpsError("not-found", NOT_FOUND_MESSAGE);
  }

  return { gameId };
}
