# Supabase Blog Go-Live Checklist

## 1) Create Supabase project

- Open Supabase dashboard and create a new project.
- Copy `Project URL`, `anon public` key and `service_role` key.

## 2) Apply SQL schema

- Open SQL Editor in Supabase.
- Run the full SQL from `supabase/schema.sql`.

## 2.1) Create Storage bucket

- Open Supabase Storage.
- Create a bucket named `blog-images`.
- Set bucket visibility to public (for blog cover images).

## 3) Add app environment variables

Create `.env.local` for local and `.env` on VPS with:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
SUPABASE_STORAGE_BUCKET=blog-images

ADMIN_USERNAME=
ADMIN_PASSWORD=
ADMIN_SESSION_SECRET=

SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
SMTP_TO=
```

## 4) Start app and verify

- Start app and open `/blog`.
- Open `/admin/login` and sign in.
- Create one post as `draft`.
- Publish it and confirm it appears on `/blog` and homepage card section.

## 5) Security checks

- Use a long random `ADMIN_SESSION_SECRET` (32+ chars).
- Keep `SUPABASE_SERVICE_ROLE_KEY` only on server env.
- Never expose service role key in client code.

## 5.1) Free-tier expectation

- Supabase has a free plan and it is free until your project usage crosses free-tier limits.
- Typical limits include storage, bandwidth and database usage quotas and may change over time.
- Check current pricing page before production launch and set usage alerts in dashboard.

## 6) Optional initial seed

In Supabase table editor, add first post manually if needed.

## 7) VPS deploy

- Build and start app.
- Restart process manager (pm2/systemd/docker) after env changes.

## 8) If blog does not update

- Re-login to admin and save/publish once.
- Check API responses from `/api/admin/posts` and `/api/admin/posts/:id`.
- Confirm `status = published` in Supabase row.
