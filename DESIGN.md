---
name: Richard Schmidt — Engineering Index
description: A minimalist black, white and red engineering portfolio.
colors:
  background: "#fafafa"
  surface: "#f0f0f1"
  foreground: "#19191c"
  muted: "#626268"
  line: "#dcdcdf"
  primary: "#c92029"
  accent-hover: "#ab1520"
  on-accent: "#ffffff"
  panel-black: "#202024"
  dark-background: "#141416"
  dark-surface: "#1e1e21"
  dark-foreground: "#f3f3f4"
  dark-muted: "#aaaab2"
  dark-line: "#36363b"
  dark-accent: "#ff696e"
  dark-accent-hover: "#ff8b8f"
  dark-on-accent: "#221014"
  preview-performance: "#e9e9ec"
  screenshot-matte: "#09090b"
  preview-performance-ink: "#35353c"
  preview-architecture: "#252529"
  preview-architecture-ink: "#f5f5f5"
  preview-state: "#eadbdd"
  preview-state-ink: "#58272d"
  preview-visualization: "#dcdde1"
  preview-visualization-ink: "#383840"
  dark-preview-performance: "#2c2c32"
  dark-preview-performance-ink: "#e6e6eb"
  dark-preview-state: "#3d2529"
  dark-preview-state-ink: "#f3c8cc"
  dark-preview-visualization: "#303138"
  dark-preview-visualization-ink: "#e0e1e8"
  contact: "#b91f28"
  contact-copy: "#ffe0e2"
  contact-button-ink: "#991923"
  contact-rule: "#e17379"
  contact-button-hover: "#ffe5e7"
  social-background: "#171719"
  social-accent: "#ff6767"
  social-muted: "#b8b8bf"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(46px, 5.9vw, 82px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(30px, 3.6vw, 46px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "15px"
    lineHeight: 1.7
  intro:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    lineHeight: 1.85
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 650
    lineHeight: 1.7
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.7
  supporting:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.7
  preview:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(27px, 3vw, 44px)"
    fontWeight: 650
    lineHeight: 1.16
    letterSpacing: "-0.04em"
rounded:
  focus: "3px"
  control: "8px"
  small-panel: "8px"
  preview: "12px"
spacing:
  micro: "6px"
  small: "12px"
  compact: "16px"
  mobile-gutter: "20px"
  group: "24px"
  grid: "32px"
  mobile-section: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-dark:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-on-accent}"
  button-primary-dark-hover:
    backgroundColor: "{colors.dark-accent-hover}"
  button-contact:
    backgroundColor: "{colors.on-accent}"
    textColor: "{colors.contact-button-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-contact-hover:
    backgroundColor: "{colors.contact-button-hover}"
  header-resume:
    rounded: "{rounded.control}"
    padding: "12px 16px"
  text-link:
    typography: "{typography.label}"
  preview-performance:
    backgroundColor: "{colors.preview-performance}"
    textColor: "{colors.preview-performance-ink}"
    rounded: "{rounded.preview}"
    padding: "40px"
    height: "336px"
  case-status:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.preview}"
    padding: "32px"
---

# Design System: Richard Schmidt

## Overview

**Creative North Star: "Engineering Index"**

A confident, minimalist editorial system makes engineering work easy to scan. Large open letterforms, generous margins, crisp rules and asymmetric project panels give the portfolio its identity. Black, white and purposeful red are personal brand commitments, not a borrowed corporate identity.

The interface stays flat and readable; interaction adds only a small directional cue. Public project evidence and professional experience remain visually distinct. The same system serves English and Brazilian Portuguese without shortening either language to fit the composition.

**Key Characteristics:**

- Open Manrope typography with tightly tracked headings.
- Neutral surfaces, purposeful red accents and a solid red contact band.
- Asymmetric desktop project grid and linear mobile reading order.
- Real owner-authorized, uncensored project screenshots; never simulated product imagery.
- Native navigation semantics, visible focus and reduced-motion support.

This is a scan-mode record of `src/app/globals.css` and the built components, informed by `PRODUCT.md` and `docs/surface-brief.md`. Frontmatter values are normative; the sidecar contains extensions and representative standalone component snippets. Extracted spacing and radius names are documentation labels, not newly introduced CSS variables. The source stylesheet remains authoritative when the implementation changes.

## Colors

### Primary

Personal-brand red (`primary`, mapped to CSS `--accent`) marks the hero emphasis, primary work action, availability dot and focus outline. Its hover companion is `accent-hover`; `on-accent` supplies legible text. Dark mode uses the corresponding `dark-accent`, `dark-accent-hover` and `dark-on-accent` tokens rather than reusing light-mode red.

The contact band has its own stable red and pale supporting colors (`contact`, `contact-copy`, `contact-button-ink`, `contact-rule`, `contact-button-hover`). It retains these assignments in both themes. Its heading and button background use white (`on-accent`), not the dark theme's `dark-on-accent`.

### Neutral

`background` is the page canvas; `surface` separates the experience band and status panel. `foreground` carries headings and main text, `muted` carries prose and metadata, and `line` defines rules and borders. Each has an exact `dark-` counterpart in frontmatter, applied by `:root[data-theme="dark"]`. The declared `panel-black` variable is unchanged across themes but is not assigned to a component in the current stylesheet.

The four placeholder families pair background and ink tokens: performance, architecture, state and visualization. Performance, state and visualization have explicit dark overrides. Architecture retains its dark panel and light ink in both themes. These fields distinguish projects without introducing a second brand accent.

**The Theme Pair Rule.** Use each theme's foreground/background and accent/on-accent pair together; the fixed contact palette is a separate composition.

Selection uses the active accent and on-accent pair. Scrollbars use muted against background. No generated tonal ramps are production tokens.

## Typography

**Display and body font:** Manrope, provided by `next/font/google` with the Latin subset, `display: "swap"` and CSS variable `--font-manrope`; the application stack is `var(--font-manrope), sans-serif`. There is no second branded typeface. Source-file names in case studies use native `<code>` typography, with no custom monospace family declared.

### Hierarchy

- **Display:** The `display` token is the default hero heading; its second line uses the accent. At widths up to 1100px it becomes `clamp(44px, 5.8vw, 70px)`; up to 720px, `clamp(38px, 7.9vw, 56px)` with line-height 1.12; up to 360px, 35px.
- **Headline:** The `headline` token defines section headings. Contact headings instead use `clamp(34px, 4vw, 54px)`, line-height 1.15, then 37px at 720px and 32px at 360px.
- **Title:** The base `title` token describes h3. Project titles are 22px on desktop and 21px on mobile. Base h4 is 18px, weight 600, line-height 1.2, tracking -0.02em; component overrides provide smaller career/project titles.
- **Body:** The `body` token is the page default. Project descriptions are 14px, then 13px on mobile. Hero introduction uses `intro`, max-width 590px; on mobile it becomes 14px with line-height 1.9. About prose is 15px/1.95, then 14px on mobile.
- **Label:** The `label` token describes action text. Navigation is 13px; header tools, project metadata, dates, placeholder labels and captions are at least 12px in both viewport classes. Supporting prose is at least 14px. Career titles and small education/language headings have zero letter-spacing. Dates use tabular numerals. Labels are not globally uppercase.
- **Preview:** The `preview` token describes the centered placeholder name, max-width 400px; mobile uses 34px. Note tracking is 0.03em, with opacity 0.85; captions have opacity 0.8.
- **Case study:** Heading size is `clamp(40px, 5.5vw, 76px)`, max-width 900px; mobile uses 41px. Intro is 20px, max-width 720px, then 17px on mobile. Section headings are 28px, then 26px; body is 14px/1.9 with max-width 72ch. The status copy permits 90ch.

Headings are balanced (`text-wrap: balance`), default to weight 600, and start with zero margins. h1/h2 have negative tracking; the hero intentionally uses the lighter weight in `display`. The wordmark is 38px/800 with tracking -0.08em, reduced to 31px on mobile.

## Layout

The centered wrapper is `min(1240px, calc(100% - 112px))`. It becomes `calc(100% - 72px)` at 1100px and `calc(100% - 40px)` at 720px. This creates desktop side margins of at least 56px, tablet margins of 36px and mobile margins of 20px. Spacing is contextual, not a strict mathematical scale; frontmatter lists recurring observed values only.

- **Header:** 104px minimum height, bottom rule, horizontally distributed wordmark/navigation/tools. Mobile minimum height is 80px with wrapping enabled. The header is not sticky.
- **Hero:** Main column plus a 230px index, gap 64px, padding-block 80px. At 1550px and above, vertical padding becomes 96px. At 1100px and below the index is 200px, gap 32px, padding 64px. Mobile stacks the main content and index with gap 40px and padding 40px 32px; the index itself remains two columns. The headline states the frontend/performance focus; tenure stays in the supporting paragraph, not the headline.
- **Sections:** Default vertical padding uses `section`, reduced to `mobile-section` at 720px. Section headings use two equal columns, gap 60px, bottom margin 40px; mobile uses one column, gap 16px and bottom margin 28px. Repeated spacing follows a 4px rhythm; optical sizing and icon geometry remain separate.
- **Selected work:** Twelve columns with gap 64px 32px. Cards one and four span seven columns; the others span five. Mobile becomes a single flex column with gap 40px. Preview heights are 336px, 280px at 1100px, and 260px at 720px; padding changes from 40px to 32px on mobile.
- **Experience:** Career uses 1:2 columns, gap 60px; at 1100px it uses 1:3 and gap 32px. Timeline rows have a 220px label column (190px at 1100px). Mobile stacks career and timeline. Professional projects form two columns with gap 44px, then one column on mobile. Full-width 16:9 screenshots sit above each summary with gap 24px, then 16px on mobile.
- **Expertise:** Three equal columns, gap 44px (28px at 1100px); one column at 720px.
- **About and contact:** 1.2:1 columns with gap 120px, reduced to 60px at 1100px. Mobile stacks these with gaps 36px and 40px respectively. Contact padding is 80px vertically, then 56px on mobile.
- **Case study:** Two equal content columns, gap and padding-block 64px; full-width rows hold architecture, decisions, status and sources. Decisions have three columns with gap 36px. Mobile uses one column, content gap 40px and padding 48px; decisions gap 24px. The architecture list changes from horizontal to vertical. Case preview height is 400px, then 272px on mobile; preview title is 56px, then 36px.
- **Small screens:** At 360px the wordmark name can wrap within 70px, hero actions gap becomes 16px, and contact email size becomes 15px. Mobile footer uses a two-column grid with its return link spanning both rows.

English (`src/app/(english)/layout.tsx`) and Portuguese (`src/app/pt-br/layout.tsx`) are separate root layouts sharing `Document`, which sets `lang="en"` or `lang="pt-BR"`. English lives at `/`, Portuguese at `/pt-br`. Server-only dictionaries provide the content: there are no runtime translations or automatic locale detection. The language link preserves the corresponding case-study path. Both languages point to the same English resume.

## Elevation & Depth

Flat by default: borders, neutral bands, type hierarchy and colored preview fields separate content. Project cards have no resting shadow or enclosing card border. The only declared box shadow is the mobile navigation popover (`0 16px 40px #00000015`). Its surface is background with a line border, above the page at z-index 10. The keyboard skip link is fixed at z-index 100.

Pointer hover lifts a linked preview by 4px; this is feedback, not permanent elevation. There are no blur materials, gradients or entrance animations in the built interface.

## Shapes

Controls use `control` corners; skip link, mobile menu and professional thumbnails use `small-panel`; project previews and case-status panels use `preview`. One-pixel rules provide most grouping. Focus outlines use `focus` corners. Theme control and the 6px availability dot are circular (`border-radius: 50%`), not a pill-token scale. Cards remain open content groups rather than rounded enclosing shells.

## Components

### Actions and focus

Primary work and contact actions are native anchors styled as buttons, not click-handler substitutes. Shared action treatment: minimum height 48px, gap 28px, frontmatter padding and label typography; mobile uses 12px text, horizontal padding 16px and gap 20px. Pressing applies `scale(0.98)`. The header resume is a bordered anchor with weight 600, hidden at 1100px and below; resume access remains elsewhere. Text links have minimum height 44px and gap 12px. The authored SVG arrow is shared across header, hero, footer, case-study recovery and navigation; directional variants rotate the same geometry.

Anchors, buttons and summaries use a 2px solid active-accent `:focus-visible` outline, offset 5px. The skip link moves from top -100px to 16px on focus. Disabled buttons use opacity 0.5 and a not-allowed cursor; no product-specific disabled flow is currently present. There are no text fields, form submissions, chips or custom select controls to document.

### Navigation and theme

Desktop navigation is muted text; current locale text is foreground within a single EN/PT link, not two radio buttons. At 720px and below, native `<details>`/`<summary>` replaces desktop navigation. The summary has a visible plus character and minimum height 44px; the native marker is hidden. Its absolutely positioned menu is 230px wide, placed below the header with top 100%, right 0, padded 16px 20px. Opening uses native disclosure behavior, not a modal or a focus trap.

The theme toggle is a native button with an accessible label and title plus a decorative split-circle SVG. It measures 44px square; mobile width becomes 36px while height remains 44px. Its pre-paint script chooses a saved explicit theme or system preference; storage errors fall back to system selection. System and storage changes are observed when no saved explicit selection overrides them. A click updates the theme immediately and attempts to persist it.

### Project cards and screenshots

Each project is an article with a linked preview, a separately linked title, description, plain-text stack and separate case-study/repository actions. Do not make the entire article a nested-link click target. Real WebP screenshots use `next/image`, explicit dimensions and bilingual alt text. Cards contain the complete image against a dark matte in the existing fixed-height panels; case studies show the full image at intrinsic height. No generated imagery is used.

Professional screenshots are owner-authorized, uncensored images in full-width 16:9 panels above their summaries, contained without distortion. The grid has two desktop columns and one mobile column. They have localized descriptive alt text and never link to internal case studies. See `docs/project-images.md` for publication approval. The former placeholder colors remain legacy palette tokens, not permission to invent product UI.

### Motion and affordances

Hover styling is restricted to `(hover: hover) and (pointer: fine)`: navigation and ordinary text links become accent; the primary action changes to accent-hover; the contact action changes to contact-button-hover; the theme button gains surface fill; the resume border becomes foreground; contact links underline. Linked previews lift; index/title/text/next-project arrows move `translate(3px, -2px)` where implemented.

Buttons transition background-color and transform over 160ms ease; the theme toggle transitions background-color over 160ms ease. Arrows use 180ms `cubic-bezier(0.2, 0.8, 0.2, 1)`; previews use 240ms with that same curve. Focus is immediate. Under `prefers-reduced-motion: reduce`, animations and transitions are disabled for all elements and pseudo-elements and scroll behavior becomes auto. There is no animation dependency or smooth-scroll behavior to preserve.

## Do's and Don'ts

### Do:

- **Do** use the active theme's paired colors and retain the fixed contact palette.
- **Do** keep native anchors, buttons and disclosures, visible focus, and reduced-motion behavior.
- **Do** preserve full English and Brazilian Portuguese content in their separate root layouts.
- **Do** use owner-cleared screenshots with localized alt text and preserved proportions; retain the explicitly approved uncensored content.
- **Do** preserve the asymmetric desktop grid and stacked mobile reading order.

### Don't:

- **Don't** add a second brand accent, decorative gradients or glass effects to this flat system.
- **Don't** replace explicit placeholders with fabricated product screenshots or confidential imagery.
- **Don't** turn whole project articles into nested-link interactive containers.
- **Don't** add a headshot, corporate logo or unsupported metrics.
- **Don't** infer inputs, validation states or additional motion patterns that are not implemented.
