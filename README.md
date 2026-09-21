# iShamela Website

Marketing and legal landing site for [iShamela](https://app.ishamela.online) — a free, open-source, offline-first reader for the Shamela Arabic library.

Built with React 18, Vite 5, TypeScript, Tailwind CSS, and `react-router-dom`. Static output suitable for any static host (including GitHub Pages).

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output lands in `dist/`. Preview with `npm run preview`.

## Where copy lives

All user-facing strings are in [`src/content/copy.ts`](src/content/copy.ts). Do not hardcode UI text in components — this keeps future translation (Arabic/French) straightforward.

## Assets to replace

| File | Notes |
|---|---|
| `public/favicon.svg` / `public/assets/logo.svg` | Brand mark from SPEC-020. |
| `public/assets/*.png` | App Store screenshots used in hero and “See it in use”. |
| `public/og-image.png` | 1200×630 social preview. Regenerate if brand copy changes. |

## Version badge

The footer badge fetches the latest GitHub release tag. If the request fails (or there are no releases), it uses:

```ts
// src/lib/version.ts
FALLBACK_VERSION = 'v1.0.0'
```

Bump `FALLBACK_VERSION` on each app release (also marked `TODO(owner)` in that file).

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/acknowledgements` | Acknowledgements |
| `/support` | Support |

Unknown routes redirect home. `public/404.html` provides a GitHub Pages–style SPA fallback.

## Spec

Implementation follows [`docs/specs/spec-001-landingpage.md`](docs/specs/spec-001-landingpage.md).
