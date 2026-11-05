# Focused portfolio polish

## Direction

- **Product:** Help hiring teams assess Richard's frontend engineering through actual work.
- **Character:** Precise, assured, personal.
- **World:** An engineer's annotated project index, not an agency sales page.
- **Moments:** Public project evidence and the red contact section.
- **Signature:** Consistent source-linked architecture explanations across case studies.

## Approved changes

Preserve the black/white/red palette, Manrope, section order, asymmetric layout, CSS motion and explicitly approved placeholder thumbnails.

- Normalize repeated spacing to a 4px rhythm without forcing font sizes or icon geometry onto that grid.
- Raise metadata, navigation and captions to at least 12px, and supporting prose to at least 14px. Remove negative tracking from small headings.
- Replace generic headings with specific frontend, performance and professional context in both dictionaries. The owner rejected tenure as a headline; keep it in the supporting paragraph. Hero: “Frontend engineering / Built for performance”; Portuguese: “Engenharia frontend / Foco em performance”. Social cards use the same dictionary copy.
- Reuse the existing SVG arrow in header, hero, footer, case-study navigation and recovery actions. No icon dependency is added.
- Return Portuguese 404 content and language in the initial server-rendered response, not only after JavaScript runs.

## Portuguese error delivery

Calling `notFound()` beneath the separate Portuguese root layout produced Next.js's client-only error fallback in verification: the initial response used `__next_error__`, and the pre-paint theme script did not execute. A nested boundary did not correct it.

The small Proxy runs only for `/pt-br` requests. Known routes are derived from the existing project list and pass through. Unknown paths rewrite to the static Portuguese recovery page with HTTP 404, preserving the requested URL. That page has noindex metadata and is not in the sitemap. Its direct URL also returns 404. English continues to use the global recovery page. No browser-language detection is introduced.

Regression tests check the initial HTML language/content, 404 status, browser language, system-dark theme and recovery destination. Separate checks cover metadata sizes and small-heading tracking in both languages and viewport classes.

## Boundaries

No fabricated project imagery, new claims, new sections, animation library, tracking, or visual rebrand. Earlier Lighthouse results describe the original implementation baseline, not new measurements of this polish pass.

Audit method adapted from **unslop by Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), CC BY 4.0**.
