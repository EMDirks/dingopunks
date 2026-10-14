#!/usr/bin/env node
// Show or set Identity Platform reCAPTCHA for email/password sign-up and
// log-in. The Firebase console has no switch for this; it is set through the
// Identity Toolkit admin API.
//
//   node scripts/recaptcha-mode.js           # show the current setting
//   node scripts/recaptcha-mode.js audit     # score every attempt, block nothing
//   node scripts/recaptcha-mode.js enforce   # block attempts scoring below 0.3
//   node scripts/recaptcha-mode.js off
//
// Requires the reCAPTCHA Enterprise API to be enabled on the project.
// Credentials: Application Default Credentials for project dpaam-8864d
// (gcloud auth application-default login, or GOOGLE_APPLICATION_CREDENTIALS).

import { applicationDefault } from "firebase-admin/app";

const PROJECT_ID = process.env.GCLOUD_PROJECT || "dpaam-8864d";
const CONFIG_URL = `https://identitytoolkit.googleapis.com/admin/v2/projects/${PROJECT_ID}/config`;
const BLOCK_BELOW_SCORE = 0.3;

const MODES = {
  audit: "AUDIT",
  enforce: "ENFORCE",
  off: "OFF",
};

async function request(method, url, body) {
  const { access_token: token } = await applicationDefault().getAccessToken();
  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      // User ADC credentials need an explicit quota project.
      "x-goog-user-project": PROJECT_ID,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${method} ${response.status}: ${text.slice(0, 800)}`);
  }
  return text ? JSON.parse(text) : {};
}

function describe(config) {
  const recaptcha = config.recaptchaConfig ?? {};
  return JSON.stringify(
    {
      emailPasswordEnforcementState: recaptcha.emailPasswordEnforcementState ?? "OFF",
      managedRules: recaptcha.managedRules ?? [],
      recaptchaKeys: (recaptcha.recaptchaKeys ?? []).map((key) => key.type),
    },
    null,
    2,
  );
}

async function main() {
  const arg = process.argv[2]?.toLowerCase();

  if (!arg) {
    const config = await request("GET", CONFIG_URL);
    console.log(`reCAPTCHA config for ${PROJECT_ID}:\n${describe(config)}`);
    return;
  }

  const state = MODES[arg];
  if (!state) {
    console.error(`Unknown mode "${arg}". Use one of: ${Object.keys(MODES).join(", ")}.`);
    process.exit(2);
  }

  const config = await request(
    "PATCH",
    `${CONFIG_URL}?updateMask=recaptchaConfig.emailPasswordEnforcementState,recaptchaConfig.managedRules`,
    {
      recaptchaConfig: {
        emailPasswordEnforcementState: state,
        managedRules: [{ endScore: BLOCK_BELOW_SCORE, action: "BLOCK" }],
      },
    },
  );
  console.log(`Set ${PROJECT_ID} email/password reCAPTCHA to ${state}:\n${describe(config)}`);
}

main().catch((error) => {
  console.error(error?.message ?? error);
  process.exit(1);
});
