#!/usr/bin/env node
// One-off cleanup: remove MailerLite subscribers whose Firebase email address
// was never verified, and reset their Firestore sync state so they are added
// again automatically once they verify.
//
// Dry run (default) reads Firebase Auth + Firestore only and writes nothing:
//   node scripts/mailerlite-unverified-cleanup.js
//
// Apply (deletes from MailerLite, resets mailerlite* fields in Firestore):
//   MAILERLITE_API_KEY=... node scripts/mailerlite-unverified-cleanup.js --apply
//
// Credentials: Application Default Credentials for project dpaam-8864d
// (gcloud auth application-default login, or GOOGLE_APPLICATION_CREDENTIALS).
//
// Only the three mailerlite* fields are ever written. No other user field and
// no Firebase Auth record is modified.

import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

import { deleteSubscriber, findSubscriber } from "../mailerlite.js";

const PROJECT_ID = process.env.GCLOUD_PROJECT || "dpaam-8864d";
const APPLY = process.argv.includes("--apply");
const AUTH_BATCH = 100; // getUsers() hard limit
const MAILERLITE_DELAY_MS = 250; // stay well under MailerLite's 120 req/min

function maskEmail(email) {
  if (typeof email !== "string" || !email.includes("@")) return "(no email)";
  const [local, domain] = email.split("@");
  const head = local.slice(0, 2);
  return `${head}${"*".repeat(Math.max(1, local.length - 2))}@${domain}`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (APPLY && !apiKey) {
    console.error("MAILERLITE_API_KEY is required with --apply.");
    process.exit(2);
  }

  initializeApp({ credential: applicationDefault(), projectId: PROJECT_ID });
  const db = getFirestore();
  const auth = getAuth();

  console.log(`${APPLY ? "APPLY" : "DRY RUN"} against project ${PROJECT_ID}\n`);

  const snapshot = await db.collection("users").where("mailerliteStatus", "==", "subscribed").get();
  const subscribed = snapshot.docs.map((doc) => ({
    uid: doc.id,
    email: doc.get("email") ?? null,
    plan: doc.get("plan") ?? "free",
  }));

  const authByUid = new Map();
  for (let i = 0; i < subscribed.length; i += AUTH_BATCH) {
    const batch = subscribed.slice(i, i + AUTH_BATCH).map(({ uid }) => ({ uid }));
    const result = await auth.getUsers(batch);
    for (const user of result.users) authByUid.set(user.uid, user);
  }

  const verified = [];
  const unverified = [];
  const missingAuth = [];
  for (const account of subscribed) {
    const user = authByUid.get(account.uid);
    if (!user) {
      missingAuth.push(account);
    } else if (user.emailVerified) {
      verified.push(account);
    } else {
      unverified.push({ ...account, authEmail: user.email ?? null });
    }
  }

  console.log(`users with mailerliteStatus=subscribed : ${subscribed.length}`);
  console.log(`  verified (left alone)                : ${verified.length}`);
  console.log(`  unverified (to remove)               : ${unverified.length}`);
  console.log(`  no Firebase Auth user (to remove)    : ${missingAuth.length}\n`);

  const targets = [...unverified, ...missingAuth];
  if (targets.length === 0) {
    console.log("Nothing to do.");
    return;
  }

  console.log("Accounts selected:");
  for (const account of targets) {
    const reason = authByUid.has(account.uid) ? "unverified" : "no-auth-user";
    console.log(`  ${account.uid}  ${maskEmail(account.email)}  plan=${account.plan}  ${reason}`);
  }
  console.log("");

  if (!APPLY) {
    console.log("Dry run complete. Re-run with --apply to remove these from MailerLite.");
    return;
  }

  let deleted = 0;
  let alreadyGone = 0;
  let failed = 0;
  let reset = 0;

  for (const account of targets) {
    const email = account.email ?? account.authEmail;
    try {
      if (email) {
        const subscriber = await findSubscriber({ apiKey, email });
        await sleep(MAILERLITE_DELAY_MS);
        if (subscriber) {
          await deleteSubscriber({ apiKey, subscriberId: subscriber.id });
          await sleep(MAILERLITE_DELAY_MS);
          deleted += 1;
        } else {
          alreadyGone += 1;
        }
      } else {
        alreadyGone += 1;
      }

      await db.collection("users").doc(account.uid).update({
        mailerliteStatus: "pending",
        mailerlitePlan: FieldValue.delete(),
        mailerliteSubscribedAt: FieldValue.delete(),
      });
      reset += 1;
      console.log(`  ok   ${account.uid}  ${maskEmail(email)}`);
    } catch (error) {
      failed += 1;
      console.error(`  FAIL ${account.uid}  ${maskEmail(email)}  ${error?.message ?? error}`);
      if (error?.status === 429) await sleep(5000);
    }
  }

  console.log("");
  console.log(`MailerLite deleted      : ${deleted}`);
  console.log(`MailerLite already gone : ${alreadyGone}`);
  console.log(`Firestore reset         : ${reset}`);
  console.log(`failed                  : ${failed}`);
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error?.message ?? error);
  process.exit(1);
});
