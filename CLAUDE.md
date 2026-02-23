# Cainelli.dev — AI Coding Agent Instructions

## Project Overview

This is a personal website built with [Astro](https://astro.build/), using TypeScript and Tailwind CSS. The codebase is organized for clarity and modularity, with content and data separated from presentation components.

## Architecture & Structure

- **Astro-based**: Pages and layouts are `.astro` files in `src/pages/` and `src/layouts/`.
- **Components**: Reusable UI components are in `src/components/`, with further organization into `molecules/` and `widgets/` for more complex elements.
- **Content**: Markdown/MDX content lives in `src/content/` (e.g., TIL posts), with dynamic routing for `[slug].astro`.
- **Data**: Static data (e.g., concerts, social links) is in `src/data/` as TypeScript modules.
- **Styles**: Global styles are in `src/styles/global.css`, with Tailwind configuration in `tailwind.config.cjs`.

## Developer Workflows

- **Install dependencies**: `bun install`
- **Start dev server**: `bun run dev`
- **Build for production**: `bun run build`
- **Preview production build**: `bun run preview`
- **Linting**: Uses [Biome](https://biomejs.dev/) (`biome.json`). Run: `bun run lin`
- **Type checking**: TypeScript config in `tsconfig.json`. Run: `npx tsc --noEmit`

## Project-Specific Patterns

- **Content-Driven Routing**: Dynamic routes (e.g., `/me/til/[slug]`) are powered by Astro's file-based routing and content config (`src/content.config.ts`).
- **Data Import**: Data files in `src/data/` are imported directly into pages/components for rendering lists, cards, etc.
- **Component Usage**: Prefer using components from `src/components/` for UI consistency. Example: `ArtistCard.astro` for concert listings.
- **No client-side JS by default**: Astro renders static HTML unless explicitly using client directives.
- **TIL Length Constraint**: TIL (Today I Learned) posts in `src/content/til/` must not exceed 800 characters. Keep them concise and focused.

## Integration Points

- **Tailwind CSS**: Configured via `tailwind.config.cjs` and used in all components/pages.
- **Biome**: For linting and formatting, see `biome.json`.
- **Markdown/MDX**: Content in `src/content/til/` is rendered via Astro's MDX support.

## Key Files & Directories

- `src/pages/` — Main site pages
- `src/components/` — UI components
- `src/data/` — Static data sources
- `src/content/` — Markdown/MDX content
- `src/layouts/` — Layout templates
- `tailwind.config.cjs` — Tailwind setup
- `biome.json` — Linting/formatting rules

## Example: Adding a Concert

1. Add concert data to `src/data/concerts.ts`.
2. Update rendering logic in `src/pages/me/concerts.astro` if needed.
3. Use `ArtistCard.astro` for consistent display.

---

For questions or unclear conventions, review the README or ask for clarification.
