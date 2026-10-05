// Pure unit tests for the MailerLite sync — fake fetch, no emulator or network.
// Run via: npm run test:mailerlite

import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  MAILERLITE_SUBSCRIBERS_URL,
  MailerLiteError,
  planFieldValue,
  planSyncForChange,
  subscribeToGroup,
  syncPlanField,
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
      fields: { plan: "starter", name: "Ms. Frizzle" },
    });
  });

  test("sends only the plan field when there is no name", async () => {
    const { impl, calls } = fakeFetch(201);
    await subscribeToGroup({ ...base, fetchImpl: impl });
    assert.deepEqual(JSON.parse(calls[0].init.body).fields, { plan: "starter" });
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

describe("planFieldValue", () => {
  test("maps all-access exactly and defaults everything else to starter", () => {
    assert.equal(planFieldValue("all-access"), "all-access");
    assert.equal(planFieldValue("free"), "starter");
    assert.equal(planFieldValue(undefined), "starter");
    assert.equal(planFieldValue("lifetime"), "starter");
  });
});

describe("syncPlanField", () => {
  test("updates the plan field without changing status or groups", async () => {
    const { impl, calls } = fakeFetch(200);
    const result = await syncPlanField({
      apiKey: "key-123",
      email: "teacher@example.com",
      plan: "all-access",
      fetchImpl: impl,
    });

    assert.deepEqual(result, { ok: true, status: 200 });
    assert.equal(calls.length, 1);
    const { url, init } = calls[0];
    assert.equal(url, MAILERLITE_SUBSCRIBERS_URL);
    assert.equal(init.method, "POST");
    assert.equal(init.headers.Authorization, "Bearer key-123");
    const body = JSON.parse(init.body);
    assert.deepEqual(body, {
      email: "teacher@example.com",
      fields: { plan: "all-access" },
    });
    assert.equal("status" in body, false);
    assert.equal("groups" in body, false);
  });

  test("treats 201 as success", async () => {
    const { impl } = fakeFetch(201);
    const result = await syncPlanField({ ...base, plan: "free", fetchImpl: impl });
    assert.equal(result.ok, true);
  });

  test("classifies 422 as permanent and 5xx as transient", async () => {
    const permanent = fakeFetch(422);
    await assert.rejects(
      syncPlanField({ ...base, plan: "free", fetchImpl: permanent.impl }),
      (error) => {
        assert.equal(error.permanent, true);
        assert.equal(error.status, 422);
        return true;
      },
    );

    const transient = fakeFetch(503);
    await assert.rejects(
      syncPlanField({ ...base, plan: "free", fetchImpl: transient.impl }),
      (error) => {
        assert.equal(error.permanent, false);
        assert.equal(error.status, 503);
        return true;
      },
    );
  });
});

describe("planSyncForChange", () => {
  const subscribed = {
    email: "teacher@example.com",
    mailerliteStatus: "subscribed",
  };

  test("returns updates for upgrades and lapses", () => {
    assert.deepEqual(
      planSyncForChange(
        { ...subscribed, plan: "free" },
        { ...subscribed, plan: "all-access" },
      ),
      { email: "teacher@example.com", plan: "all-access" },
    );
    assert.deepEqual(
      planSyncForChange(
        { ...subscribed, plan: "all-access" },
        { ...subscribed, plan: "free" },
      ),
      { email: "teacher@example.com", plan: "free" },
    );
  });

  test("ignores changes that do not alter the mapped plan", () => {
    assert.equal(
      planSyncForChange(
        { ...subscribed, plan: "all-access", status: "active" },
        { ...subscribed, plan: "all-access", status: "canceling" },
      ),
      null,
    );
  });

  test("ignores accounts that are not subscribed in MailerLite", () => {
    for (const mailerliteStatus of ["pending", "rejected", undefined]) {
      assert.equal(
        planSyncForChange(
          { ...subscribed, plan: "free" },
          { ...subscribed, plan: "all-access", mailerliteStatus },
        ),
        null,
      );
    }
  });

  test("ignores accounts without an email", () => {
    assert.equal(
      planSyncForChange(
        { ...subscribed, plan: "free" },
        { ...subscribed, plan: "all-access", email: null },
      ),
      null,
    );
  });
});
