# Implementation verification

## Scope

Implementation on `new-version`, not deployed or pushed. Nine owner-supplied screenshots replace the initially approved placeholders; all five Lenovo images have explicit public-use authorization, including an explicit request to retain uncensored content. Public project evidence was checked against source files; case-study pages link to those files. Lenovo summaries stay at their public-purpose level.

## Local checks

### Screenshot integration — November 5, 2026

- Production build, lint, TypeScript and `git diff --check` passed.
- All 20 desktop/mobile Playwright tests passed against the production server, including nine loaded homepage screenshots per locale, exact localized alt text, uncropped case-study aspect ratios, full-width 16:9 Lenovo panels, responsive overflow and automated accessibility in both themes.
- Desktop/light and mobile/dark captures confirmed the larger uncensored Lenovo screenshots (598px and 350px wide at the inspected viewports). Originals remain untouched; public assets are resized WebP copies with input metadata stripped.
- Lighthouse and network-dependent external checks were not rerun for this image-only integration. The earlier scores and external checks below remain historical baselines.

### Prior implementation and polish

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; homepages, case studies and social images are statically generated.
- All 24 Playwright checks passed against the optimized production server after the focused polish: both locales, eight case studies, language switching, metadata, navigation, 320–1496 px overflow checks, readable metadata and supporting text, small-heading tracking, theme persistence/system changes/storage denial, automated accessibility, server-rendered Portuguese 404s, sitemap/robots, social images, resume redirect, and an actual browser PDF download.
- External checks: public repositories and cited source files responded; Google returned an actual PDF. LinkedIn blocks automation with HTTP 999, so its availability is not independently established by that check.
- Independent visual review: both requested corrections (Portuguese role titles and redundant category labels) scored resolved; disposition `ship` at that correction-review scope.
- The original implementation's mechanical detector reported no findings. The polish rerun produced design-documentation advisories for optical/component font-size variants; these are not runtime or accessibility failures. Metadata/supporting text roles and social-image colors are now explicitly documented; unchanged optical sizes remain described in the design narrative.
- Final in-app production audit: accessibility, best practices and SEO each scored 100, with no reported failing audits. Accessible-name corrections use native text instead of overriding visible labels.
- `npm audit --omit=dev`: zero vulnerabilities at verification time. The full development dependency audit still reports eight moderate transitive findings through the ESLint toolchain's minimatch dependency. No forced downgrade or untested major-version override was applied.

## Lighthouse lab measurements — original implementation baseline

One local run per profile, on the optimized production server, November 4, 2026. Lighthouse 13.5.0 with headless Chromium and the standard mobile/desktop profiles. These are lab observations, not field Core Web Vitals, not deployment guarantees, and not claims displayed on the portfolio.

| Profile | Performance | Accessibility | Best practices | SEO | LCP   | CLS | TBT    |
| ------- | ----------- | ------------- | -------------- | --- | ----- | --- | ------ |
| Mobile  | 95          | 100           | 100            | 100 | 2.4 s | 0   | 200 ms |
| Desktop | 100         | 100           | 100            | 100 | 0.6 s | 0   | 30 ms  |

INP requires real interactions and field traffic; it was not established by these runs. Re-measure after adding actual screenshots and after deployment. Raw local reports and screenshots are ignored under `.impeccable/review/`.

## Known limits

- The resume depends on Google's public export endpoint and sharing permissions.
- Nine actual screenshots are included; no generated screenshots are presented as real projects. See `project-images.md` for publication approval. Replacements require clearance and privacy review.
- Automated accessibility is not a substitute for manual assistive-technology testing. No physical iOS/Android or screen-reader certification is claimed.
- Next.js's experimental global 404 option handles English recovery because the languages have separate root layouts. Portuguese unknown URLs are rewritten, with HTTP 404, to a statically rendered localized recovery page; regression checks cover initial server HTML as well as browser content and theme.
- No real-user monitoring, analytics, deployment, external-service configuration or licensing changes were performed.
