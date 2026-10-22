#!/usr/bin/env node
// Support tool: mark one Firebase Auth account's email as verified, for users
// whose verification email never arrived (spam filters, school mail systems).
//
// Dry run (default) looks the account up and prints it, writes nothing:
//   node scripts/verify-email.js <uid-or-email>
//
// Apply:
//   node scripts/verify-email.js <uid-or-email> --apply
//
// Credentials: Application Default Credentials for project dpaam-8864d
// (gcloud auth application-default login, or GOOGLE_APPLICATION_CREDENTIALS).
//
// Only the emailVerified flag on the Auth record is changed. Firestore and
// MailerLite are left alone; ensureUserProfile subscribes the user to
// MailerLite on their next profile load, as it would after a normal verify.

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const PROJECT_ID = process.env.GCLOUD_PROJECT || "dpaam-8864d";
const APPLY = process.argv.includes("--apply");
const target = process.argv.slice(2).find((arg) => !arg.startsWith("--"));

function describe(user) {
  const providers = user.providerData.map((p) => p.providerId).join(", ") || "(none)";
  return [
    `  uid:           ${user.uid}`,
    `  email:         ${user.email ?? "(no email)"}`,
    `  emailVerified: ${user.emailVerified}`,
    `  providers:     ${providers}`,
    `  disabled:      ${user.disabled}`,
    `  created:       ${user.metadata.creationTime}`,
    `  last sign-in:  ${user.metadata.lastSignInTime ?? "(never)"}`,
  ].join("\n");
}

async function main() {
  if (!target) {
    console.error("Usage: node scripts/verify-email.js <uid-or-email> [--apply]");
    process.exit(2);
  }

  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const auth = getAuth();

  let user;
  try {
    user = target.includes("@")
      ? await auth.getUserByEmail(target)
      : await auth.getUser(target);
  } catch (error) {
    if (error?.code === "auth/user-not-found") {
      console.error(`No Firebase Auth user found for ${target} in ${PROJECT_ID}.`);
      process.exit(1);
    }
    throw error;
  }

  console.log(`Project ${PROJECT_ID}\n${describe(user)}`);

  if (!user.email) {
    console.error("\nThis account has no email address; nothing to verify.");
    process.exit(1);
  }
  if (user.emailVerified) {
    console.log("\nAlready verified. Nothing to do.");
    return;
  }
  if (!APPLY) {
    console.log("\nDry run. Re-run with --apply to mark this email verified.");
    return;
  }

  const updated = await auth.updateUser(user.uid, { emailVerified: true });
  console.log(`\nDone. ${updated.email} emailVerified: ${updated.emailVerified}`);
}

main().catch((error) => {
  console.error(error?.message ?? error);
  process.exit(1);
});
