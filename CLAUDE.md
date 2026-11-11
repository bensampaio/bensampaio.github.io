# CLAUDE.md

This file gives Claude Code (claude.ai/code) guidance for working in this repository.

## Overview

Personal website/résumé for Bruno Sampaio, deployed to GitHub Pages at https://bensampaio.github.io. Built with Next.js 15 (App Router) + React 19 + TypeScript, styled with Tailwind CSS v4 (via SCSS), and exported as a fully static site.

## Commands

Uses Yarn 4 (via corepack, `nodeLinker: node-modules`) and Node from `.nvmrc`.

- `yarn dev` — dev server (Turbopack)
- `yarn build` — static export to `dist/`
- `yarn lint:js` — ESLint on `{app,src}/**/*.{ts,tsx}`
- `yarn lint:css` — Stylelint on `{app,src}/**/*.{css,scss}`
- `yarn format:check` / `yarn format` — Prettier
- `yarn tsc` — type-check (there's no script; CI runs this directly)

There is no test suite. CI (CircleCI) runs lint, format check, `tsc` and build; run these before considering a change done.

## Architecture

- **`app/`** — Next.js App Router routes. Each `page.tsx` is thin: it exports `metadata` and re-exports a screen component as default. `layout.tsx` renders the `Menu` and `<main>`; `layout.scss` holds global styles and the Tailwind `@theme`.
- **`src/screens/<Name>Screen/`** — one screen per route (Info, Experience, Education, Projects, About, Error, NotFound). Screens read data from `db/` and compose shared components.
- **`src/shared/`** — reusable UI components (`Screen`, `Text`, `Anchor`, `ExternalLink`, `Period`, `VerticalList`, `HorizontalList`, `Icon`, `ExpandCollapse`, etc.) and `constants.ts` (`LOCALE`, `ROUTES` enum).
- **`src/layout/Menu/`** — top navigation (client component).
- **`db/<section>/index.ts`** — the site's content as typed TS data, with images co-located and imported as `StaticImageData`. Editing site content almost always means editing these files. `db/` is excluded from ESLint.

### Content formatting

Long text fields in `db/` (e.g. `summary`) are template strings rendered by `src/shared/Text`, a tiny markdown-ish parser that supports only:

- paragraphs (one per non-empty line),
- list items starting with `* `,
- links as `[name](https://url)` (rendered as external links).

Anything else is rendered literally.

## Conventions

- **Named exports only** (no default exports), except where Next.js requires a default (`app/**/page.tsx`, `layout.tsx`, `error.tsx`, `not-found.tsx`, config files).
- Each component lives in `Folder/Folder.tsx` with an `index.ts` barrel that re-exports it; import from the folder (`'../../shared/Anchor'`).
- Components are typed as `FC<Props>` with a local `type Props`.
- Imports use relative paths (no path aliases).
- Styling: Tailwind utility classes, combined with `classnames` (`cn`). Use the custom theme tokens from `app/layout.scss` — spacing is named (`2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`…`8xl`), not numeric, and colors include `gray-1`…`gray-e`, `primary`, and per-section colors (`info`, `experience`, `education`, `projects`, `about`).
- Add `'use client'` only when a component needs interactivity (currently `Menu`, `ExpandCollapse`, `app/error.tsx`).
- Icons come from Font Awesome (`@fortawesome/*`), with `config.autoAddCss = false` set in the root layout.
- Prettier: single quotes, semicolons, trailing commas, 2-space indent.

## Deployment

`next.config.js` sets `output: 'export'`, `distDir: 'dist'`, and unoptimized images, so no server-only Next.js features (API routes, SSR-dynamic rendering, image optimization) are available. Pushing to `master` triggers `.github/workflows/nextjs.yml`, which builds and deploys `dist/` to GitHub Pages.
