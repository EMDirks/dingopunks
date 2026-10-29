// Load a room file (`const resource = {...}`) into a plain object, and write one
// back out in the house style used across resource/**: 4-space indent, double
// quotes, trailing commas, and a `// ⭐ Title` header above each challenge.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";

export const AI_STANDARDS_NOTE =
  "// NOTE: education.commonCore standards in this file were auto-added and distributed by AI and might need manual review at some future point.\n";

const DECLARATION = /const\s+resource\s*=\s*\{/;

// Evaluate room source in an isolated context and return the resource object as
// plain JSON data, plus whatever text preceded the declaration (usually the
// AI-standards NOTE comment) so a save can keep it.
export function parseRoomSource(source, filename = "room.js") {
  const match = source.match(DECLARATION);
  if (!match) throw new Error(`${filename}: no "const resource = {" declaration`);
  const prelude = source.slice(0, match.index);

  const context = vm.createContext({});
  vm.runInContext(`${source}\n;globalThis.__resource = resource;`, context, {
    filename,
    timeout: 1000,
  });
  const raw = context.__resource;
  return { resource: JSON.parse(JSON.stringify(raw)), raw, prelude };
}

export function loadRoom(absPath) {
  return parseRoomSource(readFileSync(absPath, "utf8"), absPath);
}

export function saveRoom(absPath, resource, prelude = AI_STANDARDS_NOTE) {
  mkdirSync(path.dirname(absPath), { recursive: true });
  writeFileSync(absPath, serializeRoom(resource, prelude));
}

// --------------------------------------------------------------------------
// serializer
// --------------------------------------------------------------------------

const INDENT = "    ";
const INLINE_ARRAY_MAX = 80;
const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

function key(k) {
  return IDENTIFIER.test(k) ? k : JSON.stringify(k);
}

function primitive(value) {
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return "null";
}

function isPrimitive(value) {
  return value === null || typeof value !== "object";
}

function value(v, depth) {
  if (isPrimitive(v)) return primitive(v);
  if (Array.isArray(v)) return array(v, depth);
  return object(v, depth);
}

function array(arr, depth) {
  if (arr.length === 0) return "[]";
  if (arr.every(isPrimitive)) {
    const inline = `[${arr.map(primitive).join(", ")}]`;
    if (inline.length <= INLINE_ARRAY_MAX) return inline;
  }
  const pad = INDENT.repeat(depth + 1);
  const items = arr.map((item) => `${pad}${value(item, depth + 1)},`);
  return `[\n${items.join("\n")}\n${INDENT.repeat(depth)}]`;
}

function object(obj, depth) {
  const keys = Object.keys(obj).filter((k) => obj[k] !== undefined);
  if (keys.length === 0) return "{}";
  const pad = INDENT.repeat(depth + 1);
  const lines = keys.map((k) => `${pad}${key(k)}: ${value(obj[k], depth + 1)},`);
  return `{\n${lines.join("\n")}\n${INDENT.repeat(depth)}}`;
}

function challengeHeader(challenge) {
  if (challenge?.info?.type === "code-box") return "// code box";
  const title = challenge?.info?.title ?? challenge?.title ?? "Challenge";
  return `// ⭐ ${String(title).replace(/\s+/g, " ")}`;
}

function challengeList(list, depth) {
  const pad = INDENT.repeat(depth + 1);
  const blocks = list.map(
    (challenge) => `${pad}${challengeHeader(challenge)}\n\n${pad}${value(challenge, depth + 1)},`
  );
  return `[\n\n${blocks.join("\n\n")}\n\n${INDENT.repeat(depth)}]`;
}

export function serializeRoom(resource, prelude = AI_STANDARDS_NOTE) {
  const sections = Object.keys(resource)
    .filter((k) => resource[k] !== undefined)
    .map((k) => {
      const v = resource[k];
      const body =
        (k === "challengeArray" || k === "activityArray") && Array.isArray(v)
          ? challengeList(v, 1)
          : value(v, 1);
      return `${INDENT}${key(k)}: ${body},`;
    });
  return `${prelude}const resource = {\n\n${sections.join("\n\n")}\n\n};\n`;
}
