# Implementation verification

## Scope

Implementation on `new-version`, not deployed or pushed. The owner approved placeholder thumbnails. Public project evidence was checked against source files; case-study pages link to those files. Lenovo summaries stay at their public-purpose level.

## Local checks

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; homepages, case studies and social images are statically generated.
- All 18 Playwright checks passed against the optimized production server: both locales, eight case studies, language switching, metadata, navigation, 320–1496 px overflow checks, theme persistence/system changes/storage denial, automated accessibility, 404s, sitemap/robots, social images, resume redirect, and an actual browser PDF download.
- External checks: public repositories and cited source files responded; Google returned an actual PDF. LinkedIn blocks automation with HTTP 999, so its availability is not independently established by that check.
- Independent visual review: both requested corrections (Portuguese role titles and redundant category labels) scored resolved; disposition `ship` at that correction-review scope.
- Impeccable mechanical detector: no findings on the changed UI targets.
- Final in-app production audit: accessibility, best practices and SEO each scored 100, with no reported failing audits. Accessible-name corrections use native text instead of overriding visible labels.
- `npm audit --omit=dev`: zero vulnerabilities at verification time. The full development dependency audit still reports eight moderate transitive findings through the ESLint toolchain's minimatch dependency. No forced downgrade or untested major-version override was applied.

## Lighthouse lab measurements

One local run per profile, on the optimized production server, November 4, 2026. Lighthouse 13.5.0 with headless Chromium and the standard mobile/desktop profiles. These are lab observations, not field Core Web Vitals, not deployment guarantees, and not claims displayed on the portfolio.

| Profile | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mobile | 95 | 100 | 100 | 100 | 2.4 s | 0 | 200 ms |
| Desktop | 100 | 100 | 100 | 100 | 0.6 s | 0 | 30 ms |

INP requires real interactions and field traffic; it was not established by these runs. Re-measure after adding actual screenshots and after deployment. Raw local reports and screenshots are ignored under `.impeccable/review/`.

## Known limits

- The resume depends on Google's public export endpoint and sharing permissions.
- Thumbnails intentionally remain placeholders; no generated screenshots are presented as real projects.
- Lenovo screenshots require explicit public-use clearance before addition.
- Automated accessibility is not a substitute for manual assistive-technology testing. No physical iOS/Android or screen-reader certification is claimed.
- Next.js's experimental global 404 option is used because the languages have separate root layouts. The global recovery page is English with a Portuguese link.
- No real-user monitoring, analytics, deployment, external-service configuration or licensing changes were performed.
