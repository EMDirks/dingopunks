import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const repoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const gamesPath = path.join(repoRoot, "js/games.js");
const outputPath = path.join(repoRoot, "js/game-standards.js");

function findMatchingBracket(text, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < text.length; i++) {
    const ch = text[i];
    if (ch === "[") depth += 1;
    else if (ch === "]") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function eachCommonCoreBlock(text, fn) {
  const startRe = /commonCore:\s*\[/g;
  let match;
  while ((match = startRe.exec(text))) {
    const open = match.index + match[0].length - 1;
    const close = findMatchingBracket(text, open);
    if (close < 0) {
      throw new Error(`Malformed commonCore array in ${text.slice(0, 80)}…`);
    }
    fn(text.slice(open + 1, close), match.index);
  }
}

function isLegacyObjectBlock(block) {
  return /standard\s*:/.test(block);
}

const STANDARD_GROUP_NAMES = {
  RL: "Reading: Literature",
  RI: "Reading: Informational Text",
  RF: "Reading: Foundational Skills",
  RH: "Reading: History/Social Studies",
  RST: "Reading: Science & Technical Subjects",
  L: "Reading: Language",
  W: "Writing",
  SL: "Speaking & Listening",
  OA: "Operations and Algebraic Thinking",
  NBT: "Number and Operations in Base Ten",
  NF: "Number and Operations Fractions",
  MD: "Measurement and Data",
  G: "Geometry",
  CC: "Counting and Cardinality",
  EE: "Expressions and Equations",
  NS: "The Number System",
  RP: "Ratios and Proportional Relationships",
  SP: "Statistics and Probability",
  F: "Functions",
  MP: "Standards for Mathematical Practice",
};

const CCRA_GROUP_NAMES = {
  R: "Anchor Standards for Reading",
  L: "Anchor Standards for Language",
  W: "Anchor Standards for Writing",
  SL: "Anchor Standards for Speaking & Listening",
};

function standardGroupFromCode(code) {
  const ccra = code.match(/^CCRA\.([A-Z]+)/);
  if (ccra) {
    return {
      key: `CCRA.${ccra[1]}`,
      name: CCRA_GROUP_NAMES[ccra[1]] || "Anchor Standards",
    };
  }
  const prefix = code.match(/^(?:\d+\.)?([A-Z]+)/);
  if (prefix && STANDARD_GROUP_NAMES[prefix[1]]) {
    return { key: prefix[1], name: STANDARD_GROUP_NAMES[prefix[1]] };
  }
  return { key: "Other", name: "Other" };
}

function entriesFromLegacyObjectBlock(block) {
  const entries = [];
  const objRe = /\{[^{}]*\}/g;
  let match;
  while ((match = objRe.exec(block))) {
    const obj = match[0];
    const standard = obj.match(/standard:\s*['"]([A-Za-z0-9.]+)['"]/);
    if (!standard) continue;
    const group = standardGroupFromCode(standard[1]);
    entries.push({ code: standard[1], key: group.key, name: group.name });
  }
  return entries;
}

function entriesFromStringBlock(block) {
  return [...block.matchAll(/['"]([A-Za-z0-9.]+)['"]/g)].map((m) => {
    const group = standardGroupFromCode(m[1]);
    return { code: m[1], key: group.key, name: group.name };
  });
}

function compareStandardGroups(a, b) {
  const aAnchor = a.startsWith("Anchor Standards");
  const bAnchor = b.startsWith("Anchor Standards");
  if (aAnchor && !bAnchor) return -1;
  if (bAnchor && !aAnchor) return 1;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function compareStandardEntries(a, b) {
  const groupOrder = compareStandardGroups(a.name, b.name);
  if (groupOrder) return groupOrder;
  return a.code.localeCompare(b.code, undefined, { numeric: true, sensitivity: "base" });
}

function extractCommonCoreEntries(text, resourcePath) {
  const byCode = new Map();
  eachCommonCoreBlock(text, (block) => {
    const entries = isLegacyObjectBlock(block)
      ? entriesFromLegacyObjectBlock(block)
      : entriesFromStringBlock(block);
    for (const entry of entries) {
      if (!byCode.has(entry.code)) byCode.set(entry.code, entry);
    }
  });
  return [...byCode.values()].sort(compareStandardEntries);
}

function groupStandardEntries(entries) {
  const groups = [];
  let current = null;
  for (const entry of entries) {
    if (!current || current.key !== entry.key) {
      current = { key: entry.key, name: entry.name, codes: [] };
      groups.push(current);
    }
    current.codes.push(entry.code);
  }
  return groups;
}

function parseGamesFromCatalog(content) {
  const games = [];
  const blockRe = /\{\s*\n\s*id:\s*"([^"]+)"([\s\S]*?)\n\s*\},?\s*\n/g;
  let match;
  while ((match = blockRe.exec(content))) {
    const id = match[1];
    const body = match[2];
    const pathMatch = body.match(/path:\s*"([^"]+)"/);
    games.push({ id, path: pathMatch ? pathMatch[1] : null });
  }
  return games;
}

function serializeGroups(groups) {
  const lines = ["  ["];
  for (const group of groups) {
    lines.push("    {");
    lines.push(`      key: ${JSON.stringify(group.key)},`);
    lines.push(`      name: ${JSON.stringify(group.name)},`);
    lines.push(`      codes: ${JSON.stringify(group.codes)},`);
    lines.push("    },");
  }
  lines.push("  ]");
  return lines.join("\n");
}

const gamesContent = fs.readFileSync(gamesPath, "utf8");
const games = parseGamesFromCatalog(gamesContent);

if (games.length === 0) {
  console.error("No games found in js/games.js");
  process.exit(1);
}

const standardsById = {};
const missingFiles = [];
const emptyGames = [];
let withStandards = 0;

for (const game of games) {
  if (!game.path) {
    standardsById[game.id] = [];
    emptyGames.push(`${game.id} (no path)`);
    continue;
  }

  const resourcePath = path.join(repoRoot, game.path);
  if (!fs.existsSync(resourcePath)) {
    missingFiles.push({ id: game.id, path: game.path });
    continue;
  }

  const text = fs.readFileSync(resourcePath, "utf8");
  let entries;
  try {
    entries = extractCommonCoreEntries(text, game.path);
  } catch (err) {
    console.error(`Failed to parse standards for ${game.id} (${game.path}):`, err.message);
    process.exit(1);
  }

  const groups = groupStandardEntries(entries);
  standardsById[game.id] = groups;
  if (groups.length === 0) emptyGames.push(`${game.id} (${game.path})`);
  else withStandards += 1;
}

if (missingFiles.length) {
  console.error("Missing resource files:");
  for (const item of missingFiles) console.error(`  ${item.id}: ${item.path}`);
  process.exit(1);
}

const sortedIds = Object.keys(standardsById).sort();
const bodyLines = sortedIds.map(
  (id) => `  ${JSON.stringify(id)}: ${serializeGroups(standardsById[id])},`,
);

const output = `// Generated by scripts/export-game-standards.mjs — do not edit manually.
// Re-run: node scripts/export-game-standards.mjs

/** @type {Record<string, Array<{ key: string, name: string, codes: string[] }>>} */
export const gameStandardsById = {
${bodyLines.join("\n")}
};
`;

fs.writeFileSync(outputPath, output);

console.log(`Wrote ${outputPath}`);
console.log(`Games in catalog: ${games.length}`);
console.log(`Games with standards: ${withStandards}`);
console.log(`Games without standards: ${emptyGames.length}`);
if (emptyGames.length) {
  console.log("No standards found for:");
  for (const line of emptyGames) console.log(`  ${line}`);
}
