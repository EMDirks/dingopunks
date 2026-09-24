# Firestore backup and recovery

Production Firestore protection for `dpaam-8864d`:

- Database: `(default)`
- Location: `nam5` (United States multi-region)
- Daily backups: kept for 14 days
- Weekly backups: run Sunday and are kept for 98 days (14 weeks)
- Point-in-time recovery (PITR): enabled, with a rolling 7-day window
- Database delete protection: enabled

Managed backups and PITR incur Firestore storage and operation charges. At the
current database size, these should remain small.

## Check backup health

Run these commands from any terminal with an authenticated Firebase CLI:

```bash
firebase firestore:backups:schedules:list \
  --project dpaam-8864d \
  --database "(default)"

firebase firestore:backups:list \
  --project dpaam-8864d \
  --location nam5
```

The first command should show one `DAILY` schedule with retention `1209600s`
(14 days) and one `WEEKLY (SUNDAY)` schedule with retention `8467200s`
(98 days). The second command lists completed backups and their state.

Confirm PITR and delete protection with:

```bash
firebase firestore:databases:get "(default)" --project dpaam-8864d
```

Expected values are `POINT_IN_TIME_RECOVERY_ENABLED`,
`DELETE_PROTECTION_ENABLED`, and a version retention period of `604800s`
(7 days).

## Restore a managed backup

A managed backup can only be restored to a **new database ID**. It cannot
overwrite `(default)`.

1. List backups and copy the full backup name:

   ```bash
   firebase firestore:backups:list \
     --project dpaam-8864d \
     --location nam5
   ```

2. Restore it to a temporary database:

   ```bash
   firebase firestore:databases:restore \
     --project dpaam-8864d \
     --backup "projects/dpaam-8864d/locations/nam5/backups/BACKUP_ID" \
     --database "restore-YYYYMMDD"
   ```

3. Inspect the restored database before copying any needed documents back or
   changing application configuration.

The restored database includes documents and index configuration. Reapply
Firebase Security Rules and TTL policies separately if the restored database
will be used by the application.

## Recover from a recent bad write with PITR

PITR can export the database as it existed at a whole-minute timestamp in the
last 7 days. This path requires the Google Cloud CLI and a Cloud Storage bucket:

```bash
gcloud firestore export gs://BUCKET_NAME \
  --project=dpaam-8864d \
  --database="(default)" \
  --snapshot-time=YYYY-MM-DDTHH:MM:00Z
```

The timestamp cannot be earlier than the database's `Earliest Version Time`
shown by `firebase firestore:databases:get`. Inspect the export before importing
or copying data back.

Official references:

- [Back up and restore Firestore data](https://cloud.google.com/firestore/docs/backups)
- [Export data from a PITR timestamp](https://cloud.google.com/firestore/docs/manage-data/export-import#export_from_a_pitr_timestamp)

## Change log

- 2026-09-24: Created the daily and weekly schedules; enabled PITR and database
  delete protection. First scheduled backup is pending.
