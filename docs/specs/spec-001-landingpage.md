# SPEC-021 — iShamela Landing Page

**Status:** Draft for implementation
**Deliverable:** A standalone React + Vite marketing/landing site for iShamela
**Primary CTA:** Open the web app at `https://app.ishamela.online`
**Audience of this document:** An AI coding agent (Cursor). Everything needed to build the site is in this file — tech stack, project structure, design tokens, full page copy, and legal text. Do not invent content beyond what is specified; where a placeholder is marked `TODO(owner)`, leave it clearly visible for a human to fill in.

---

## 1. Purpose & Goals

iShamela is a free, open-source, offline-first app for reading and searching the Shamela Arabic library (Islamic Sciences corpus). The landing page must:

1. Explain what iShamela is in under 10 seconds of reading.
2. Drive visitors to the web app (`https://app.ishamela.online`) as the primary action.
3. Offer platform downloads (GitHub Releases) as the secondary action.
4. Host the required legal/informational pages: Privacy Policy, Terms of Use, Acknowledgements, Support.
5. Display copyright and the current app version.
6. Feel like the product: calm, scholarly, "Warm Manuscript" — not a generic SaaS template.

Non-goals: no blog, no newsletter, no analytics dashboards, no CMS. This is a small static site.

---

## 2. Tech Stack (mandatory)

| Concern | Choice |
|---|---|
| Framework | React 18 + Vite 5, TypeScript |
| Styling | Tailwind CSS (v3.4+), design tokens defined in `tailwind.config.ts` |
| Routing | `react-router-dom` v6 (BrowserRouter) |
| Icons | `lucide-react` only |
| Fonts | Google Fonts via `<link>` in `index.html` (see §4) |
| Animations | CSS only. One page-load reveal on the hero. No scroll-triggered animation libraries. |
| Deployment target | Static hosting (assume the site will be served at `https://ishamela.online` root). Output must work as a plain static build (`vite build` → `dist/`). |
| SPA fallback | Include a `public/404.html` that redirects to `/` preserving path (GitHub-Pages-style fallback), in case it is hosted on GitHub Pages. |

Do not add: Redux, styled-components, framer-motion, analytics scripts, cookie banners (none needed — see Privacy Policy), or any tracking of any kind.

### Project structure

```
ishamela-landing/
├── index.html
├── public/
│   ├── favicon.svg          # placeholder: TODO(owner) replace with SPEC-020 logo
│   ├── og-image.png         # placeholder 1200×630, generated per §4.6
│   └── 404.html
├── src/
│   ├── main.tsx
│   ├── App.tsx              # router + layout shell
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── OpenSource.tsx
│   │   ├── Downloads.tsx
│   │   ├── CTABand.tsx
│   │   └── LegalLayout.tsx  # shared prose layout for legal pages
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Privacy.tsx
│   │   ├── Terms.tsx
│   │   ├── Acknowledgements.tsx
│   │   └── Support.tsx
│   ├── lib/
│   │   └── version.ts       # GitHub release fetch (see §6)
│   ├── content/
│   │   └── copy.ts          # ALL user-facing strings live here (see §7–§11)
│   └── styles/
│       └── index.css        # Tailwind entry + custom properties
```

Rule: **no user-facing string is hardcoded inside a component.** Everything comes from `src/content/copy.ts`. This keeps future translation (Arabic/French) trivial.

---

## 3. Routes & Page Map

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero → Features → How it works → Open Source → Downloads → CTA band → Footer |
| `/privacy` | Privacy Policy | Uses `LegalLayout` |
| `/terms` | Terms of Use | Uses `LegalLayout` |
| `/acknowledgements` | Acknowledgements | Uses `LegalLayout` |
| `/support` | Support | Uses `LegalLayout` (with contact cards) |
| `*` | Redirect to `/` | |

Header (sticky, translucent on scroll) contains: wordmark "iShamela" (left), nav links Features / Downloads / Support (anchor + route links), and a filled button **"Open the app"** → `https://app.ishamela.online` (opens in new tab, `rel="noopener"`). On mobile, nav collapses to a simple disclosure menu; the "Open the app" button stays visible.

Footer (on every page) contains, in this order:
1. Wordmark + one-line description ("An open-source library for the students of knowledge.")
2. Column **Product**: Open the web app, Downloads, GitHub repository.
3. Column **Legal**: Privacy Policy, Terms of Use, Acknowledgements.
4. Column **Support**: Support page, Report an issue (GitHub Issues link).
5. Bottom bar: `© {currentYear} iShamela contributors · Released under the project license` + version badge (see §6). Compute the year in JS.

GitHub links:
- Repository: `https://github.com/YasserCherfaoui/iShamela`
- Releases: `https://github.com/YasserCherfaoui/iShamela/releases`
- Issues: `https://github.com/YasserCherfaoui/iShamela/issues`

---

## 4. Design System — "Warm Manuscript"

The app's established design direction (DESIGN-001) is called **Warm Manuscript**: the feel of aged paper, ink, and quiet scholarship. The landing page extends it. The design must be grounded in the subject — classical Arabic books — not in SaaS conventions.

### 4.1 Color tokens (define in Tailwind as a `manuscript` palette)

| Token | Hex | Role |
|---|---|---|
| `paper` | `#F7F2E7` | Page background |
| `paper-deep` | `#EFE6D4` | Alternate section background |
| `ink` | `#2B241C` | Primary text |
| `ink-soft` | `#6B5F4E` | Secondary text |
| `gold` | `#B8860B` (use sparingly) | Fine rules, ornament strokes |
| `madder` | `#8C3B2E` | Primary action color (buttons, links) — a deep manuscript-rubrication red, **not** orange/terracotta |
| `madder-deep` | `#6E2C22` | Button hover |
| `sage` | `#5C6B54` | Success/quiet accent (used rarely) |

Dark mode is **not** required for v1.

### 4.2 Typography

- **Display / headlines:** `Fraunces` (Google Fonts), weight 500–600, optical size axis on. Slightly tightened letter-spacing on large sizes.
- **Body:** `Source Serif 4`, 17px base, line-height 1.65, max line length ~68ch.
- **Arabic accents:** `Amiri` — used only for short decorative Arabic phrases specified in the copy (§7). All Arabic strings get `dir="rtl"` and `lang="ar"`.
- No monospace anywhere. No all-caps labels. Do not color or italicize a single word inside a headline.

### 4.3 Ornament & texture

One signature visual element, used with restraint: a **thin double-rule frame** (1px gold outer, 1px ink inner, 4px apart) echoing classical manuscript page borders. Use it:
- around the hero's app-preview block,
- as the top border of the footer,
- around blockquote-style callouts on legal pages.

Optionally add a very subtle paper-grain background (CSS noise via inline SVG `feTurbulence` at ~3% opacity). No gradients as decoration. No drop-shadow card grids — features are separated by rules and spacing, not identical rounded cards.

### 4.4 Layout principles

- Content column max-width 1080px; legal pages 720px.
- Left-aligned text throughout, including the hero (centered heroes read templated). The hero pairs left-aligned copy with a right-side visual on desktop; stacks on mobile.
- Section separation via generous whitespace (96–128px) and single hairline rules in `gold` at 30% opacity — not background-color stripes on every section. Only §Downloads uses `paper-deep` as a background band.
- Border-radius: 6px on buttons and inputs, 10px on the app-preview frame. Nothing else rounded.

### 4.5 Motion

Exactly one animation: on first load, the hero headline, subline, and CTA fade in and rise 8px, staggered 80ms, 500ms total, honoring `prefers-reduced-motion`. Nothing else animates on scroll. Hover states change color/underline only.

### 4.6 Assets

- `favicon.svg`: placeholder — an "ش" (Arabic sheen) glyph in `madder` on `paper`, until the SPEC-020 logo is dropped in. Mark with a code comment `// TODO(owner): replace with final SPEC-020 logo`.
- `og-image.png`: 1200×630, `paper` background, double-rule frame, "iShamela" in Fraunces with the Arabic subtitle from §7.1. Generate it as a static asset (an HTML file screenshot or hand-built PNG is fine).
- App preview in hero: build a lightweight **stylized mock** of the reader UI in pure HTML/CSS inside the double-rule frame (a book page with Arabic placeholder text in Amiri + a search bar). Do not fetch or fabricate real screenshots. Add comment `// TODO(owner): replace mock with real app screenshot`.

### 4.7 Accessibility floor

Visible keyboard focus rings (2px `madder` offset ring), all interactive elements reachable by keyboard, color contrast AA minimum against `paper`, `alt` text on all images, semantic landmarks (`header/main/footer/nav`), skip-to-content link.

---

## 5. SEO & Meta

In `index.html`:

```html
<title>iShamela — The Shamela library, offline and in your pocket</title>
<meta name="description" content="iShamela is a free, open-source app for reading and searching thousands of classical Arabic and Islamic Sciences books from the Shamela library — offline-first, on web, mobile, and desktop." />
<meta property="og:title" content="iShamela — The Shamela library, offline and in your pocket" />
<meta property="og:description" content="A free, open-source, offline-first reader and search engine for the Shamela Islamic Sciences corpus." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<html lang="en">
```

Per-route `<title>` updates via a tiny `useDocumentTitle` hook (no helmet library needed):
- `/privacy` → "Privacy Policy — iShamela"
- `/terms` → "Terms of Use — iShamela"
- `/acknowledgements` → "Acknowledgements — iShamela"
- `/support` → "Support — iShamela"

---

## 6. Version Display (footer badge)

`src/lib/version.ts` exports `useAppVersion()`:

1. On mount, `fetch("https://api.github.com/repos/YasserCherfaoui/iShamela/releases/latest")`.
2. On success, read `tag_name` (e.g. `v1.3.0`) and render footer badge: `App version v1.3.0`.
3. Cache in `sessionStorage` (key `ishamela:latest-release`) to avoid rate limits on navigation.
4. On any failure (network, rate limit, no releases), silently fall back to the constant `FALLBACK_VERSION = "v1.0.0"` defined at the top of the file with comment `// TODO(owner): bump fallback on each release`.
5. The badge links to the Releases page.

No loading spinner — render the fallback immediately and swap when the fetch resolves.

---

## 7. Home Page Copy (verbatim — place in `copy.ts`)

### 7.1 Hero

- **Arabic accent line** (Amiri, small, above headline, `dir="rtl"`): `اقرأ وابحث في تراث الأمة`
  *(rendered as decorative text; provide `aria-label="Read and search the heritage of the ummah"`)*
- **Headline:** `The Shamela library, offline and in your pocket.`
- **Subline:** `iShamela is a free, open-source app for reading and searching thousands of classical Arabic books in the Islamic Sciences — tafsīr, ḥadīth, fiqh, ʿaqīdah, and more. Download the books you need once, then read and search them instantly, even without a connection.`
- **Primary CTA button:** `Open the web app` → `https://app.ishamela.online` (new tab)
- **Secondary CTA (ghost/outline):** `Download for your device` → anchor `#downloads`
- **Trust line under CTAs (small, ink-soft):** `Free forever · Open source · No account required`

### 7.2 Features (section title: `Built for the student of knowledge`)

Six features, laid out as a two-column list separated by hairline rules (not cards). Each has a lucide icon, a short title, and one sentence.

1. **Offline-first** (icon: `BookOpen`) — `Every book you install lives on your device as a fast local database. Airplane mode changes nothing.`
2. **Instant full-text search** (icon: `Search`) — `Search inside a book or across your whole library with millisecond results, powered by SQLite FTS5 tuned for Arabic text.`
3. **A reader made for Arabic** (icon: `AlignRight`) — `Right-to-left layout, careful Arabic typography, and page numbering that matches the printed editions.`
4. **Your study, remembered** (icon: `Bookmark`) — `Reading history and bookmarks keep your place across every book, so you pick up exactly where you left off.`
5. **A growing catalog** (icon: `Library`) — `Books are packaged as compact bundles hosted on Hugging Face. Browse the catalog, tap install, and start reading.`
6. **Everywhere you study** (icon: `MonitorSmartphone`) — `One app for web, Android, iOS, Windows, macOS, and Linux — built with Flutter from a single open codebase.`

### 7.3 How it works (section title: `From catalog to first search in three steps`)

This *is* a genuine sequence, so numbered steps are appropriate here (1 / 2 / 3, set in Fraunces):

1. **Open the app** — `Use it right in your browser at app.ishamela.online, or install it on your device.`
2. **Install the books you need** — `Pick titles from the catalog. Each one downloads once as an optimized, searchable bundle.`
3. **Read and search offline** — `From then on, everything is local: open, read, search, bookmark — no connection needed.`

### 7.4 Open source (section title: `Open by design`)

Body copy:

> `iShamela ships code, not content. The app is fully open source on GitHub, and the books themselves remain with their public sources on Hugging Face — the app simply downloads them to your device. Anyone can read the code, report an issue, package a new book bundle, or contribute a feature. The “i” in iShamela stands for intelligent: our ambition is to keep making it easier to learn, with the community and, over time, with thoughtful AI assistance.`

Buttons: `Star on GitHub` (outline, → repo) and `Read the docs` (text link, → repo).

### 7.5 Downloads (section id `downloads`, background `paper-deep`, title: `Get iShamela`)

Grid of platform entries, each a simple row: icon + platform name + `Download` link. **All links point to the Releases page** (`https://github.com/YasserCherfaoui/iShamela/releases`) — do not deep-link to individual asset files, which change every release.

Platforms: Web (`Open in browser` → `https://app.ishamela.online`), Android, iOS, Windows, macOS, Linux.
Under the grid, small line: `All builds are published on the GitHub Releases page. The web app always runs the latest version.`

### 7.6 CTA band (bottom of page, framed by the double rule)

- Arabic accent (Amiri, `dir="rtl"`): `طلب العلم فريضة`
- Line: `Your library is one click away.`
- Button: `Open the web app` → `https://app.ishamela.online`

---

## 8. Support Page (`/support`) — copy verbatim

Title: `Support`
Intro: `iShamela is a community project. The fastest way to get help — and to help us — is through the channels below.`

Three entries (rows, not cards):

1. **Report a bug or request a feature** — `Open an issue on GitHub with what you expected and what happened. Screenshots and book names help a lot.` Link: `Open an issue` → Issues URL.
2. **Questions & discussion** — `For usage questions or ideas, start a discussion on the GitHub repository.` Link: `Go to the repository` → repo URL.
3. **Email** — `For anything you'd rather not post publicly:` `TODO(owner): support email address` (render the placeholder visibly, styled as an unfinished field).

Closing note: `iShamela is maintained by volunteers. We read everything, but responses can take a few days — jazākum Allāhu khayran for your patience.`

---

## 9. Privacy Policy (`/privacy`) — full text, use verbatim

> **Privacy Policy**
> *Last updated: `TODO(owner): date of publication`*
>
> iShamela is designed so that we know as little about you as possible.
>
> **What we collect: nothing.** iShamela has no accounts, no sign-up, no analytics, no advertising, and no tracking of any kind. We do not collect, store, or share personal information. The landing page you are reading sets no cookies.
>
> **Where your data lives.** Your reading history, bookmarks, notes, and installed books are stored locally on your device (or in your browser's local storage when using the web app). They never leave your device, and we cannot see them. Uninstalling the app or clearing your browser data deletes them.
>
> **Network requests the app makes.** The app connects to the internet only to (a) download the book catalog and book bundles, which are hosted on Hugging Face, and (b) check GitHub for app updates and release information. These requests go directly from your device to those services, which may log standard technical data (such as your IP address) under their own privacy policies: the Hugging Face Privacy Policy and the GitHub Privacy Statement. We receive nothing from these requests.
>
> **Children.** Because we collect no data, there is no additional processing of children's data. The app is suitable for all ages.
>
> **Changes.** If a future feature ever requires collecting any data, we will update this policy first and state clearly what is collected and why. Material changes will be noted in the app's release notes.
>
> **Contact.** Questions about privacy: open an issue on our GitHub repository or write to `TODO(owner): support email address`.

Link the phrases "Hugging Face Privacy Policy" → `https://huggingface.co/privacy` and "GitHub Privacy Statement" → `https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement`.

---

## 10. Terms of Use (`/terms`) — full text, use verbatim

> **Terms of Use**
> *Last updated: `TODO(owner): date of publication`*
>
> By using iShamela — the web app, the desktop and mobile apps, or this website — you agree to these terms.
>
> **1. What iShamela is.** iShamela is free, open-source software for reading and searching publicly available Arabic-language books in the Islamic Sciences. The application code is provided under the license published in the project repository (`TODO(owner): confirm license name per LICENSING.md`).
>
> **2. The books are not ours.** iShamela distributes software, not content. The books available in the catalog are drawn from publicly available collections (including the Shamela library and related archives) hosted on third-party platforms such as Hugging Face. The rights to each work belong to their respective authors, editors, and publishers. If you are a rights holder and believe a work is included in a source dataset improperly, please contact the dataset maintainers, and open an issue with us so we can remove it from our catalog.
>
> **3. Acceptable use.** Use iShamela for reading, study, and research. Do not use it to misrepresent the texts, to violate applicable law, or to attack the services the app relies on (for example, by abusive automated downloading).
>
> **4. No warranty.** iShamela is provided "as is", without warranty of any kind. Texts may contain digitization errors; always verify against printed editions before relying on a passage for scholarship, rulings, or citation. To the maximum extent permitted by law, the contributors are not liable for any damages arising from the use of the software or the texts it displays.
>
> **5. Availability.** The app, the catalog, and this website may change or become unavailable at any time. Because the app is offline-first, books you have installed remain on your device regardless.
>
> **6. Changes to these terms.** We may update these terms; the "Last updated" date will change accordingly. Continued use after an update means you accept the revised terms.
>
> **Contact.** Open an issue on our GitHub repository or write to `TODO(owner): support email address`.

---

## 11. Acknowledgements (`/acknowledgements`) — full text, use verbatim

> **Acknowledgements**
>
> iShamela stands on the shoulders of people and projects who did the hard work of preserving and digitizing this heritage. Jazāhum Allāhu khayran.
>
> **Al-Maktaba al-Shamela (المكتبة الشاملة).** The Shamela project digitized and structured thousands of classical works and made them freely available. iShamela exists because of this effort.
>
> **Dataset maintainers on Hugging Face.** The book data used by iShamela comes from publicly available datasets, including:
> - `ieasybooks-org/shamela-waqfeya-library`
> - `ieasybooks-org/waqfeya-library`
> - `ieasybooks-org/prophet-mosque-library`
> - `AuthenticIlm/Shamela4_Full_DB`
>
> Thank you to the iEasyBooks team, AuthenticIlm, the Waqfeya project, and the Prophet's Mosque library digitization efforts for keeping this knowledge open.
>
> **Open-source foundations.** iShamela is built with Flutter, SQLite and its FTS5 full-text engine, and many other open-source libraries listed in the repository.
>
> **Contributors.** Everyone who has filed an issue, tested a build, or contributed code — you are part of this. The full list lives on the GitHub contributors page.

Link each dataset name to its Hugging Face page (`https://huggingface.co/datasets/<name>`), and "GitHub contributors page" → `https://github.com/YasserCherfaoui/iShamela/graphs/contributors`.

---

## 12. Definition of Done

- [ ] `npm create vite@latest` scaffold with TypeScript, builds clean with `npm run build`, zero TS errors, zero console warnings.
- [ ] All five routes render with correct titles; unknown routes redirect home.
- [ ] All copy comes from `src/content/copy.ts`; grep confirms no user-facing strings in components.
- [ ] Every external link uses `target="_blank" rel="noopener"`; internal navigation uses router links.
- [ ] Version badge shows GitHub latest release, falls back gracefully offline.
- [ ] Lighthouse (desktop): Performance ≥ 95, Accessibility ≥ 95, SEO ≥ 95. No third-party scripts besides Google Fonts.
- [ ] Responsive from 360px to 1440px; hero stacks on mobile; header collapses correctly.
- [ ] `prefers-reduced-motion` disables the hero animation.
- [ ] All `TODO(owner)` placeholders are present, visible, and greppable.
- [ ] README in the repo explains: install, dev, build, where copy lives, how to replace the logo/og-image, and how to bump `FALLBACK_VERSION`.

---

## 13. Open items for the owner (not blockers)

1. Support email address (§8, §9, §10).
2. Final license name for §10.1 — confirm against `LICENSING.md` in the main repo.
3. Final logo + og-image from SPEC-020 brand boards.
4. Real app screenshot to replace the hero mock.
5. Decide hosting for `ishamela.online` root (the build is host-agnostic static output).