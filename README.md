# Richard Schmidt — Portfolio

A bilingual engineering portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS v4 and React Compiler. English is the default; Brazilian Portuguese has its own statically generated routes, metadata and date formatting.

## Run locally

Use Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). For an optimized build:

```sh
npm run build
npm start
```

No environment variables, API keys, analytics, database or external form service are needed.

## Content and routes

| Location                              | Purpose                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------- |
| `src/data/portfolio.ts`               | Project identifiers, source citations, technology lists and dates         |
| `src/data/en.ts`, `src/data/pt-br.ts` | Typed English and Brazilian Portuguese copy, including case studies       |
| `src/lib/site.ts`                     | Production origin, public contact links, metadata and locale/date helpers |
| `src/app/(english)`                   | English homepage and four generated case studies                          |
| `src/app/pt-br`                       | Matching Portuguese routes                                                |
| `src/components`                      | Server-rendered sections and small, scoped interactive components         |
| `src/app/globals.css`                 | Tailwind import, light/dark tokens and responsive presentation            |

The `Dictionary` interface requires both locales to implement every copy key and every featured project. English URLs stay unprefixed; Portuguese mirrors them under `/pt-br`. The language switch preserves the current case study. Explicit language selection is intentional: no browser-language redirects.

Separate root layouts set the correct HTML language. A small Proxy limited to `/pt-br` passes through the homepage and project routes, and rewrites unknown Portuguese URLs to a statically rendered Portuguese recovery page with HTTP 404. This avoids Next.js's client-only error fallback, so language, content and theme work before hydration. Next.js's experimental `globalNotFound` option handles other unknown URLs in English. The recovery page is excluded from the sitemap and marked noindex.

## Design and rendering

The owner's black, white and red identity carries both themes. A small pre-paint script applies the saved or system theme. The toggle persists explicit selection, responds to system changes when no choice is saved, and tolerates unavailable browser storage.

Page content stays in Server Components. The theme toggle is the only authored Client Component. Mobile navigation uses native `details`; project interactions use CSS with reduced-motion support. There is no animation-library runtime, scroll handler or tracking script.

Fonts are self-hosted through `next/font`. The favicon is authored SVG; localized social cards are generated with `next/og`. Canonicals, language alternates, sitemap, robots and Person structured data use the production origin in `src/lib/site.ts`.

## Project images

Nine owner-supplied screenshots are served as optimized WebP copies under `public/projects`. The owner explicitly authorized public use of all five Lenovo screenshots and requested that their displayed content remain uncensored. Originals remain untouched outside the repository; public copies are only resized and encoded.

Image paths and intrinsic dimensions live in `src/data/portfolio.ts`; English and Portuguese alt text live in their dictionaries. `ProjectPreview` uses `next/image`: contained images in reserved-size cards and uncropped intrinsic-height images on case-study pages. Lenovo screenshots fill large 16:9 panels above their summaries. See `docs/project-images.md` for provenance and publication approval.

The five Lenovo summaries describe only public product purposes. Replacements still require public-use clearance and privacy review before entering `public/`. Never commit internal code, architecture, client data, license keys, private endpoints or unapproved screenshots.

## Resume

`/resume.pdf` temporarily redirects (307) to the owner's public Google Docs PDF export. Changes to the document require no redeploy. Google sets the PDF filename. The document must remain accessible to anyone with the link; download availability and generation time depend on Google. The same English PDF is used in both locales.

## Verification

```sh
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
npm audit --omit=dev
```

Tests cover desktop/mobile, both languages, all eight case-study routes, metadata, source citations, keyboard navigation, narrow layouts, theme storage/system behavior, automated accessibility, 404s, social images, sitemap/robots and the resume redirect. External checks also verify repository/source URLs and the actual PDF signature. LinkedIn may block automation with 999/403/429; that is reported as a blocked check, not proof of a working profile.

`npm run test:external` runs only network-dependent checks. Run offline-capable checks with `npx playwright test --project=desktop --project=mobile`. Local tests reuse the running development server; CI builds and starts the application. To test an already-running production server, set `PLAYWRIGHT_BASE_URL` to its local origin before running tests. Reports and screenshot evidence are gitignored.

Lighthouse lab scores are not field Core Web Vitals. No performance measurements are displayed on the site. Recheck the deployed application after real screenshots are added; they can materially change loading performance.

## Deployment and maintenance

Deploy to a Next.js-compatible host, using the build command `npm run build`. The canonical origin is `https://portfolio-rschmidt.vercel.app`; update the single constant in `src/lib/site.ts` if the domain changes. No deployment or external-service changes are performed by this implementation.

Keep dates and claims aligned with the current resume and LinkedIn. Public-project case studies cite the implementations and explicitly acknowledge limitations rather than presenting experiments as commercial production products.

Product truth is in `PRODUCT.md`; visual rules are in `DESIGN.md`; decisions are in `docs/adr`. These are public-facing repository documents: do not add private exports or secrets. A Next.js-generated `AGENTS.md` points coding agents to the installed framework documentation.

No license grant is implied for the portfolio's copy, design or personal assets.
