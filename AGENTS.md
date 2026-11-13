# Repository Guidelines

## Project Structure

This Next.js 16 gallery uses React, TypeScript, SWR, Zustand, and CSS Modules. Routes and the museum API proxies live in `app/`. The live UI is in `components/gallery/`: `GalleryShell` provides theme and navigation, `GalleryPage` handles collection, search, and favorites, `ArtworkGrid` arranges the Bento layout, and `ArtworkDetail` handles individual works. `hooks/` and `api/` fetch paginated data; `store/useStore.ts` persists preferences and favorites for the browser session.

## Portable Design System

`design-system/` is deliberately independent of gallery content. Import `design-system/global.css` once at the root. Set `data-theme="light"` or `data-theme="dark"` on the application shell. Use the `--ds-` semantic variables from `tokens.css` for colors, type, spacing, and motion. Compose layout and control classes from `primitives.module.css`; keep gallery-specific composition in colocated CSS Modules. Read `design-system/README.md` before changing shared primitives. Avoid hardcoded colors and new global utility classes in feature code.

## Commands and Checks

- `npm ci` installs the lockfile with Node.js 24.
- `npm run dev` starts the local app.
- `npm run lint` runs Next.js and TypeScript ESLint rules.
- `npm run typecheck` checks types without output.
- `npm run build` creates and validates a production build; `npm start` serves it.

No automated test suite or coverage threshold exists. Before a PR, run lint, type checking, and a build. Manually verify the collection grid, search, artwork details, favorites, language and theme toggles, and narrow screens. Check that `/api/artic/` and `/api/image/` return data when diagnosing empty artwork or image views.

## Code and PR Conventions

Use strict types for API data and component props. Name React components in PascalCase and hooks with `use` plus camelCase. Prefer `@/` imports for shared code. Follow the formatting of the file you edit; no formatter is configured. Git history uses short action-oriented subjects rather than a formal convention. PRs should describe visible changes, link relevant issues, include validation results, and show screenshots for UI work.
