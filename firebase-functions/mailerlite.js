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

async function upsertSubscriber({
  apiKey,
  body,
  fetchImpl = fetch,
  timeoutMs = MAILERLITE_TIMEOUT_MS,
}) {
  let response;
  try {
    response = await fetchImpl(MAILERLITE_SUBSCRIBERS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (error) {
    throw new MailerLiteError(`MailerLite request failed: ${error?.message}`, {
      permanent: false,
    });
  }

  if (response.ok) return { ok: true, status: response.status };

  const permanent = response.status >= 400 && response.status < 500 && response.status !== 429;
  let detail = "";
  try {
    detail = (await response.text()).slice(0, 500);
  } catch {
    // Body is diagnostic only.
  }
  throw new MailerLiteError(`MailerLite responded ${response.status}: ${detail}`, {
    permanent,
    status: response.status,
  });
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
