# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run develop        # Start dev server (http://localhost:8000)
npm run build          # Production build (also runs postbuild to copy public-extra/)
npm run serve          # Serve production build locally
npm run clean          # Clear Gatsby cache
npm run typecheck      # TypeScript type checking (no emit)
npm run deploy         # Build and deploy to GitHub Pages
npm run fetch:articles # Fetch articles from Medium RSS into src/data/articles.json
```

There is no test suite.

## Architecture

**Gatsby 5 static site** — personal portfolio for Nikos Oikonomou. Pages are in `src/pages/`, components in `src/components/`.

### Data flow for articles

Articles come from Medium. Run `npm run fetch:articles` to pull the RSS feed, parse it, and write the result to `src/data/articles.json`. At build time, Gatsby's GraphQL layer reads that JSON (via `gatsby-transformer-json`) and remote images are optimized via `gatsby-plugin-remote-images`. The `articles.tsx` page queries this data with a GraphQL page query.

### Styling system

- Tailwind CSS with class-based dark mode
- Theme colors are CSS variables (HSL) defined in `src/styles/global.css` under `:root` and `.dark`
- shadcn/ui components live in `src/components/ui/` and use those CSS variables
- `ThemeProvider.tsx` manages light/dark/system preference via React context + localStorage

### Path aliases

`@/` maps to `src/` — configured in both `tsconfig.json` and `gatsby-node.ts` (webpack alias). Use `@/components`, `@/lib`, `@/data` in imports.

### Image imports

SVGs are inlined via `gatsby-plugin-react-svg`. PNG/JPG/JPEG imports are declared in `src/types/images.d.ts`. Country flag SVGs are in `src/images/countries/`, tech logos in `src/images/technologies/`.

### Deployment

`npm run deploy` builds and pushes the `public/` directory to GitHub Pages via `gh-pages`. The `postbuild` script copies files from `public-extra/` into `public/` after each build.
