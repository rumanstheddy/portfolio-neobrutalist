# Copilot Instructions for AI Coding Agents

## Project Overview
- This is a Next.js project using the `/src/app` directory structure, bootstrapped with `create-next-app`.
- The main entry point is `src/app/page.tsx`. Global styles are in `src/app/globals.css`.
- Utility functions are located in `src/lib/utils.ts`.
- The project uses TypeScript (`tsconfig.json`), ESLint (`eslint.config.mjs`), and PostCSS (`postcss.config.mjs`).

## Developer Workflows
- **Start development server:**
  - `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
  - App runs at [http://localhost:3000](http://localhost:3000)
- **Edit main page:**
  - Modify `src/app/page.tsx` for homepage changes. Edits auto-update in dev mode.
- **Global styles:**
  - Use `src/app/globals.css` for CSS affecting the whole app.
- **TypeScript:**
  - All source files use TypeScript. Strict typing is enforced by `tsconfig.json`.
- **Linting:**
  - Run `npx eslint .` to check code quality. Configured via `eslint.config.mjs`.

## Project-Specific Patterns
- **App Directory:**
  - Follows Next.js 13+ app directory conventions. Pages and layouts are in `src/app/`.
- **Utilities:**
  - Shared logic should go in `src/lib/utils.ts`.
- **Component Organization:**
  - Place reusable components in `src/app/` or create a `src/components/` directory if needed.
- **Font Optimization:**
  - Uses `next/font` for optimized font loading (see Next.js docs for details).

## External Integrations
- No custom API routes or external service integrations detected in the current codebase.
- Deployment is recommended via Vercel (see README for details).

## Conventions & Recommendations
- Prefer TypeScript for all new files.
- Use Next.js file-based routing in `src/app/`.
- Keep global styles in `src/app/globals.css`.
- Place shared logic in `src/lib/utils.ts`.
- Follow ESLint rules for code consistency.

## Key Files & Directories
- `src/app/page.tsx` — Main page
- `src/app/layout.tsx` — App layout
- `src/app/globals.css` — Global styles
- `src/lib/utils.ts` — Utility functions
- `tsconfig.json` — TypeScript config
- `eslint.config.mjs` — ESLint config
- `README.md` — Basic project info and workflow

---

For questions or missing conventions, check the README or Next.js documentation. If a pattern is unclear, ask for clarification or review recent commits for examples.
