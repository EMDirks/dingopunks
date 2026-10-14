// MailerLite subscriber sync. Kept separate from index.js so it can be unit
// tested with a fake fetch — no emulator, no network.

export const MAILERLITE_SUBSCRIBERS_URL = "https://connect.mailerlite.com/api/subscribers";
export const MAILERLITE_TIMEOUT_MS = 5000;
export const MAILERLITE_PLAN_FIELD = "plan";

/**
 * Thrown for any failed sync. `permanent` is true when retrying can't help
 * (4xx other than 429, e.g. an address MailerLite rejects as invalid).
 */
export class MailerLiteError extends Error {
  constructor(message, { permanent, status = null } = {}) {
    super(message);
    this.name = "MailerLiteError";
    this.permanent = Boolean(permanent);
    this.status = status;
  }
}

export function planFieldValue(plan) {
  return plan === "all-access" ? "all-access" : "starter";
}

/**
 * Whether an account should be added to MailerLite right now. Only accounts
 * still pending and whose address Firebase reports as verified qualify; an
 * unverified address stays pending and is retried on a later profile load.
 */
export function shouldSubscribe({ mailerliteStatus, emailVerified, email }) {
  return (
    mailerliteStatus === "pending" &&
    emailVerified === true &&
    typeof email === "string" &&
    email.length > 0
  );
}

function classifyResponse(response) {
  return response.status >= 400 && response.status < 500 && response.status !== 429;
}

async function responseDetail(response) {
  try {
    return (await response.text()).slice(0, 500);
  } catch {
    return "";
  }
}

async function mailerliteRequest({ apiKey, url, method, body, fetchImpl, timeoutMs }) {
  try {
    return await fetchImpl(url, {
      method,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (error) {
    throw new MailerLiteError(`MailerLite request failed: ${error?.message}`, {
      permanent: false,
    });
  }
}

/**
 * Look up a subscriber by email. Resolves to `{ id, email, status }` or null
 * when MailerLite has no record of the address.
 */
export async function findSubscriber({
  apiKey,
  email,
  fetchImpl = fetch,
  timeoutMs = MAILERLITE_TIMEOUT_MS,
}) {
  const response = await mailerliteRequest({
    apiKey,
    url: `${MAILERLITE_SUBSCRIBERS_URL}/${encodeURIComponent(email)}`,
    method: "GET",
    fetchImpl,
    timeoutMs,
  });
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new MailerLiteError(
      `MailerLite responded ${response.status}: ${await responseDetail(response)}`,
      { permanent: classifyResponse(response), status: response.status },
    );
  }
  const payload = await response.json();
  const data = payload?.data ?? payload;
  if (!data?.id) return null;
  return { id: String(data.id), email: data.email ?? email, status: data.status ?? null };
}

/**
 * Delete a subscriber by MailerLite id. A 404 means they are already gone and
 * is treated as success.
 */
export async function deleteSubscriber({
  apiKey,
  subscriberId,
  fetchImpl = fetch,
  timeoutMs = MAILERLITE_TIMEOUT_MS,
}) {
  const response = await mailerliteRequest({
    apiKey,
    url: `${MAILERLITE_SUBSCRIBERS_URL}/${encodeURIComponent(subscriberId)}`,
    method: "DELETE",
    fetchImpl,
    timeoutMs,
  });
  if (response.ok || response.status === 404) {
    return { ok: true, status: response.status };
  }
  throw new MailerLiteError(
    `MailerLite responded ${response.status}: ${await responseDetail(response)}`,
    { permanent: classifyResponse(response), status: response.status },
  );
}

async function upsertSubscriber({
  apiKey,
  body,
  fetchImpl = fetch,
  timeoutMs = MAILERLITE_TIMEOUT_MS,
}) {
  const response = await mailerliteRequest({
    apiKey,
    url: MAILERLITE_SUBSCRIBERS_URL,
    method: "POST",
    body,
    fetchImpl,
    timeoutMs,
  });

  if (response.ok) return { ok: true, status: response.status };

  throw new MailerLiteError(
    `MailerLite responded ${response.status}: ${await responseDetail(response)}`,
    { permanent: classifyResponse(response), status: response.status },
  );
}

/**
 * Add (or upsert) a subscriber and put them in one group. MailerLite upserts
 * by email, so calling this for an existing subscriber just adds the group.
 */
export async function subscribeToGroup({
  apiKey,
  groupId,
  email,
  name = null,
  plan,
  fetchImpl = fetch,
  timeoutMs = MAILERLITE_TIMEOUT_MS,
}) {
  const fields = { [MAILERLITE_PLAN_FIELD]: planFieldValue(plan) };
  if (name) fields.name = name;

  return upsertSubscriber({
    apiKey,
    body: {
      email,
      groups: [String(groupId)],
      status: "active",
      fields,
    },
    fetchImpl,
    timeoutMs,
  });
}

/**
 * Update only the plan field. Omitting status preserves unsubscribed state,
 * and omitting groups leaves all group membership unchanged.
 */
export async function syncPlanField({
  apiKey,
  email,
  plan,
  fetchImpl = fetch,
  timeoutMs = MAILERLITE_TIMEOUT_MS,
}) {
  return upsertSubscriber({
    apiKey,
    body: {
      email,
      fields: { [MAILERLITE_PLAN_FIELD]: planFieldValue(plan) },
    },
    fetchImpl,
    timeoutMs,
  });
}

/**
 * Return the MailerLite update implied by a user-document change, if any.
 */
export function planSyncForChange(before, after) {
  if (planFieldValue(before?.plan) === planFieldValue(after?.plan)) return null;
  if (after?.mailerliteStatus !== "subscribed") return null;
  if (typeof after?.email !== "string" || !after.email) return null;
  return { email: after.email, plan: after.plan };
}
