// Play-page bridge between splash-new.js and the membership share-code system.
//
// splash-new.js is a classic script, so it can't import the Firebase modules
// directly. It dynamic-imports this file the first time someone actually uses a
// membership code — legacy purchase codes never load it, which is deliberate:
// if Firebase, gstatic, or the network is unreachable, the legacy code path is
// completely unaffected.

import { resolveGameCode } from "./firebase-init.js";
import { games } from "./games.js";

const gamesById = new Map(games.map((game) => [game.id, game]));

// games.js stores one full script path; splash-new.js loads a resource by its
// theme folder plus the path within it, the same shape the legacy catalog uses.
const RESOURCE_PATH_PATTERN = /^resource\/([^/]+)\/(.+)$/;

function notFound(reason, context) {
  console.error(reason, context);
  const error = new Error(reason);
  // Same generic code the server returns: a student must never be able to tell
  // "expired" from "never existed" from "our catalog drifted".
  error.code = "functions/not-found";
  return error;
}

/**
 * Resolve a membership share code to the resource the play page should load.
 *
 * @param {string} code Uppercased 5-character share code.
 * @returns {Promise<{gameId: string, theme: string, script: string}>}
 */
export async function lookupShareCode(code) {
  const response = await resolveGameCode({ code });
  const gameId = response?.data?.gameId;
  const game = gamesById.get(gameId);

  if (!game) {
    throw notFound("Share code resolved to a game missing from js/games.js", gameId);
  }

  const parts = RESOURCE_PATH_PATTERN.exec(game.path ?? "");
  if (!parts) {
    throw notFound("Game has an unusable resource path", game.path);
  }

  return { gameId, theme: parts[1], script: parts[2] };
}
