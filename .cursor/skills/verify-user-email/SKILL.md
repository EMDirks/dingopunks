---
name: verify-user-email
description: >-
  Manually marks a DPAAM user's email as verified in production Firebase Auth
  (dpaam-8864d) when their verification email never arrived. Use when the user
  asks to verify a user manually, says a customer didn't get their verification
  email, or provides a UID/email to verify.
---

# Verify a user's email manually

Verification is a soft gate: unverified email/password users can sign in, use the dashboard, and pay. Only share-code creation and printables wait on `emailVerified`. Google sign-in accounts are always treated as verified.

## Before verifying

Only verify when the owner confirms the customer contacted support **from the exact address on the account**. If the user hasn't said so, ask. If they have, don't ask again.

Suggest the self-serve fixes first if the owner hasn't tried them: check spam/junk/promotions, use the Resend button on the dashboard banner, or fix a mistyped address from the banner.

## Workflow

Run from `firebase-functions/`. This writes to **production** Auth, so use `required_permissions: ["all"]` (needs network + gcloud credentials outside the sandbox).

1. **Dry run** (accepts a UID or an email address):

```bash
cd firebase-functions && node scripts/verify-email.js <uid-or-email>
```

2. **Check the output** before applying:
   - `email` matches the address the customer wrote from, character for character. If the owner gave only a UID, show them the email and confirm it matches before applying.
   - `providers` includes `password`. If it's only `google.com`, the account doesn't need verifying, so look for another cause.
   - `emailVerified: true` means it's already done. Stop and say so.
   - `disabled: true` means stop and ask the owner.

3. **Apply**:

```bash
cd firebase-functions && node scripts/verify-email.js <uid-or-email> --apply
```

4. **Report**: the email that was verified, and tell the owner to have the customer reload the page (an open dashboard tab picks it up within a few seconds).

## Errors

- **Credential errors** (`Could not load the default credentials`, `invalid_grant`, `invalid_rapt`): the owner needs to run `gcloud auth application-default login` in their own terminal (interactive browser login), then retry.
- **`No Firebase Auth user found`**: wrong UID or email. Ask the owner to check Firebase Console → Authentication.

## Side effects

- On the customer's next profile load, `ensureUserProfile` subscribes them to MailerLite, same as a normal verification.
- Nothing else changes: no Firestore writes, no entitlement changes.
