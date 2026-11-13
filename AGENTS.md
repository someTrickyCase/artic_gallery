# Repository Guidelines

## Project Structure & Module Organization

This gallery uses Next.js, React 19, TypeScript, Tailwind CSS, CSS Modules, SWR, and Zustand to display Art Institute of Chicago artwork.

- `app/` defines routes, the root layout, and global styles. Gallery routes live under `app/arts/`, including `[artid]`, `search`, and `favorites`.
- `screens/` contains screen components composed by the app routes.
- `components/` holds artwork cards, feeds, navigation, shared controls, and UI primitives.
- `api/` contains API fetchers; `hooks/` contains data and preference hooks; `store/useStore.ts` manages state persisted in session storage.
- `types/`, `settings/dictionary.ts`, and `lib/` contain shared types, translations, and utilities.
- `app/tokens.css` defines design tokens; `*.module.css` files scope screen and component styles.
- Artwork images are fetched remotely; there is no dedicated local asset or test directory.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start the development server with Turbopack.
- `npm run build`: create a production build.
- `npm start`: serve the production build after building.
- `npm run lint`: run ESLint using `eslint.config.mjs`.
- `npm run typecheck`: check TypeScript types without emitting JavaScript.

## Coding Style & Naming Conventions

Use strict TypeScript and explicit types for API data and component props. Follow surrounding formatting: application code generally uses four-space indentation, semicolons, double-quoted TypeScript strings, and single-quoted JSX attributes. Configuration files may use two spaces. No formatter is configured. Put reusable values in `app/tokens.css` and new component styles in colocated CSS Modules.

Use PascalCase for component files, `use`-prefixed camelCase for hooks, and Next.js route filenames such as `page.tsx`. Prefer `@/` imports for shared modules. Keep translated text in `settings/dictionary.ts`. ESLint applies Next.js Core Web Vitals and TypeScript rules.

## Testing Guidelines

No test runner, test naming convention, or coverage threshold is configured. Run lint, type checks, and a production build before submitting changes. Manually verify browsing, pagination, search, artwork details, favorites, language switching, and themes. Check session persistence and narrow-screen layouts when relevant. Describe validation performed in the pull request.

## Commit & Pull Request Guidelines

Existing history uses short, plain-language subjects such as `Update README.md`; no formal commit convention is established. Write concise, action-oriented subjects and keep commits focused.

Pull requests should explain the change, link relevant issues, and list validation results and known limitations. Include screenshots for visible UI changes. Avoid unrelated formatting or lockfile changes.
