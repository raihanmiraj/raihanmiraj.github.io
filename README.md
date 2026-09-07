# Raihan Miraj — Portfolio & CMS

A production-oriented personal site for Raihan Islam Miraj: public portfolio, project case studies, technical journal, contact inbox, and a protected MongoDB-backed CMS. The public application uses Next.js Server Components and reads through an internal data layer rather than calling its own HTTP APIs.

## Stack

- Next.js 16, React 19, TypeScript, Tailwind CSS 4
- MongoDB and Mongoose
- `jose` JWT sessions in an HttpOnly cookie, bcrypt password hashing
- Editor.js structured article content
- Zod request validation

## Local development

1. Install Node.js 20.9 or newer and MongoDB (local or Atlas).
2. Copy `.env.example` to `.env.local` and replace every placeholder.
3. Run `npm install`.
4. Create the admin with `npm run create-admin`.
5. Optionally add/update the six supplied case studies with `npm run seed-projects`.
6. Start with `npm run dev` and open `http://localhost:3000`.

Never commit `.env` or `.env.local`. `JWT_SECRET` must be a random value of at least 32 characters.

## Admin and CMS

`/login` creates a seven-day HttpOnly session. There is intentionally no public admin seed endpoint. Administrative API reads/writes verify the session at the route level in addition to the dashboard proxy.

Projects are created and ordered in `/dashboard/projects`. Only published projects appear publicly; featured projects lead the homepage. The seed script upserts by slug/title and never deletes unrelated records.

Articles are authored in `/dashboard/blogs` using Editor.js. New content is stored as structured JSON (`contentFormat: editorjs`). Existing string content remains publicly readable as sanitized plain text until deliberately converted. Drafts never appear in public queries or the sitemap.

Editor.js supports headings, lists, checklists, quotes, code, delimiters, tables, inline code, markers, URL-based images, and YouTube embeds. Large uploads are not stored in MongoDB. Connect a media provider before enabling file upload; the app builds without one.

## Data compatibility

Schemas add fields without replacing `_id` or timestamps. Data normalization supports legacy `published`, `image`, and string `content` fields. Run the project seed only after taking a database backup. It updates matching flagship records and leaves other documents intact.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

## Deployment

Configure `MONGODB_URI`, optional `MONGODB_DB`, and `JWT_SECRET` in the hosting environment. Run `npm run create-admin` from a trusted machine with temporary `ADMIN_*` variables; remove those variables afterward. Ensure MongoDB network access permits the deployment. The self-contained MongoDB TTL rate limiter works across server instances; TTL cleanup is asynchronous, while application checks enforce expiry immediately.

The canonical production origin is `https://www.raihanmiraj.com`. Remote image hosts are restricted in `next.config.ts`. Add any future trusted CMS image host there before publishing its URL.
