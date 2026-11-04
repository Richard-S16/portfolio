# English at `/`, Brazilian Portuguese under `/pt-br`, no i18n library

The site ships in English (default) and Brazilian Portuguese, partly to demonstrate internationalization done properly. English keeps the clean, already-shared URLs (`/`, `/work/[slug]`); Portuguese mirrors them under `/pt-br`. Both are statically generated, the language is never chosen automatically from `Accept-Language` (a recruiter's browser should not decide what they read), and pages cross-link via a visible switcher and `hreflang` alternates. Copy lives in typed dictionaries in the repo so a missing translation fails the build; `next-intl` was rejected as unnecessary for two static locales.

## Consequences

- Moving English under `/en` later would break shared links and search rankings.
- Every user-visible string, including Case Studies and Lenovo Project descriptions, exists in both languages; proper nouns and stack names are not translated.
- The Resume is English-only in both locales.
