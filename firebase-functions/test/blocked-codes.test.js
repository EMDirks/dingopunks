// Pure unit tests for the share-code blocklist — no emulator required.
// Run via: npm run test:blocked

import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  BLOCKED_TERMS,
  isCodeBlocked,
  normalizeLeet,
} from "../blocked-code-terms.js";
import {
  CODE_ALPHABET,
  CODE_PATTERN,
  generateCandidateCode,
} from "../share-codes.js";

describe("normalizeLeet", () => {
  test("maps leet digits to their letters", () => {
    assert.equal(normalizeLeet("41357"), "AIEST");
    assert.equal(normalizeLeet("8UTT9"), "BUTT9");
  });

  test("leaves unmapped characters alone", () => {
    assert.equal(normalizeLeet("QWX26"), "QWX26");
  });
});

describe("isCodeBlocked", () => {
  test("blocks plain terms", () => {
    for (const code of ["XASSY", "SHIT2", "2NAZI", "GOONX"]) {
      assert.equal(isCodeBlocked(code), true, code);
    }
  });

  test("blocks leet spellings", () => {
    for (const code of ["N1GGA", "A55BC", "5H1T2", "8UTT4"]) {
      assert.equal(isCodeBlocked(code), true, code);
    }
  });

  test("blocks raw number patterns", () => {
    for (const code of ["X1312", "AB69C", "666QQ", "1488Z"]) {
      assert.equal(isCodeBlocked(code), true, code);
    }
  });

  test("blocks digit-bearing terms that normalization would erase", () => {
    assert.equal(isCodeBlocked("AK47X"), true);
    assert.equal(isCodeBlocked("AR15Q"), true);
  });

  test("allows clean codes", () => {
    for (const code of ["QX2WK", "MZ9PR", "BRAVE", "J4DE2"]) {
      assert.equal(isCodeBlocked(code), false, code);
    }
  });

  test("is case-insensitive", () => {
    assert.equal(isCodeBlocked("xassy"), true);
  });
});

describe("BLOCKED_TERMS hygiene", () => {
  test("every term is uppercase and alphanumeric", () => {
    for (const term of BLOCKED_TERMS) {
      assert.match(term, /^[A-Z0-9]+$/, term);
    }
  });

  test("has no duplicates", () => {
    assert.equal(new Set(BLOCKED_TERMS).size, BLOCKED_TERMS.length);
  });
});

describe("generateCandidateCode", () => {
  test("never emits a blocked or all-numeric code", () => {
    for (let i = 0; i < 5000; i++) {
      const code = generateCandidateCode();
      assert.match(code, CODE_PATTERN);
      assert.match(code, /[A-Z]/);
      assert.equal(isCodeBlocked(code), false, code);
    }
  });

  test("still covers the whole alphabet", () => {
    const seen = new Set();
    for (let i = 0; i < 5000; i++) {
      for (const char of generateCandidateCode()) seen.add(char);
    }
    assert.equal(seen.size, CODE_ALPHABET.length);
  });
});
