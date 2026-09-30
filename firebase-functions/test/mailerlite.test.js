// Pure unit tests for the MailerLite sync — fake fetch, no emulator or network.
// Run via: npm run test:mailerlite

import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  MAILERLITE_SUBSCRIBERS_URL,
  MailerLiteError,
  subscribeToGroup,
} from "../mailerlite.js";

function fakeFetch(status, body = "") {
  const calls = [];
  const impl = async (url, init) => {
    calls.push({ url, init });
    return {
      ok: status >= 200 && status < 300,
      status,
      text: async () => body,
    };
  };
  return { impl, calls };
}

const base = { apiKey: "key-123", groupId: 987654, email: "teacher@example.com" };

describe("subscribeToGroup", () => {
  test("posts the subscriber to the group with bearer auth", async () => {
    const { impl, calls } = fakeFetch(201);
    const result = await subscribeToGroup({ ...base, name: "Ms. Frizzle", fetchImpl: impl });

    assert.deepEqual(result, { ok: true, status: 201 });
    assert.equal(calls.length, 1);
    const { url, init } = calls[0];
    assert.equal(url, MAILERLITE_SUBSCRIBERS_URL);
    assert.equal(init.method, "POST");
    assert.equal(init.headers.Authorization, "Bearer key-123");
    assert.equal(init.headers["Content-Type"], "application/json");
    assert.ok(init.signal instanceof AbortSignal);
    assert.deepEqual(JSON.parse(init.body), {
      email: "teacher@example.com",
      groups: ["987654"],
      status: "active",
      fields: { name: "Ms. Frizzle" },
    });
  });

  test("omits fields when there is no name", async () => {
    const { impl, calls } = fakeFetch(201);
    await subscribeToGroup({ ...base, fetchImpl: impl });
    assert.equal("fields" in JSON.parse(calls[0].init.body), false);
  });

  test("treats 200 (existing subscriber updated) as success", async () => {
    const { impl } = fakeFetch(200);
    const result = await subscribeToGroup({ ...base, fetchImpl: impl });
    assert.equal(result.ok, true);
  });

  test("classifies 422 as permanent", async () => {
    const { impl } = fakeFetch(422, '{"message":"The email must be a valid email address."}');
    await assert.rejects(subscribeToGroup({ ...base, fetchImpl: impl }), (error) => {
      assert.ok(error instanceof MailerLiteError);
      assert.equal(error.permanent, true);
      assert.equal(error.status, 422);
      assert.match(error.message, /valid email/);
      return true;
    });
  });

  test("classifies 429 and 5xx as transient", async () => {
    for (const status of [429, 500, 503]) {
      const { impl } = fakeFetch(status);
      await assert.rejects(subscribeToGroup({ ...base, fetchImpl: impl }), (error) => {
        assert.equal(error.permanent, false);
        assert.equal(error.status, status);
        return true;
      });
    }
  });

  test("classifies network errors and timeouts as transient", async () => {
    // AbortSignal.timeout's timer is unref'd; the interval keeps the test alive.
    const hang = (_url, init) =>
      new Promise((_resolve, reject) => {
        const keepAlive = setInterval(() => {}, 1000);
        init.signal.addEventListener("abort", () => {
          clearInterval(keepAlive);
          reject(init.signal.reason);
        });
      });
    await assert.rejects(
      subscribeToGroup({ ...base, fetchImpl: hang, timeoutMs: 10 }),
      (error) => {
        assert.ok(error instanceof MailerLiteError);
        assert.equal(error.permanent, false);
        assert.equal(error.status, null);
        return true;
      },
    );
  });
});
