---
name: cainelli.dev
description: Personal portfolio and writing surface for Vinicius Cainelli, Staff Product Engineer
colors:
  warm-stone-bg: "#f5f5f4"
  warm-stone-surface: "#ffffff"
  warm-stone-text: "#1c1917"
  warm-stone-muted: "#57534e"
  warm-stone-border: "#d6d3d1"
  link-border: "#000000"
  accent: "#ffb000"
  accent-text: "#1c1917"
  dark-bg: "#282c34"
  dark-surface: "#2f3440"
  dark-text: "#e6e9ef"
  dark-muted: "#b3bac7"
  dark-border: "#3a3f4b"
typography:
  mono:
    fontFamily: "IBM Plex Mono, Courier New, Courier, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  heading-1:
    fontFamily: "IBM Plex Mono, Courier New, Courier, monospace"
    fontSize: "clamp(1.875rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.025em"
  heading-2:
    fontFamily: "IBM Plex Mono, Courier New, Courier, monospace"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    textTransform: "uppercase"
  body:
    fontFamily: "IBM Plex Mono, Courier New, Courier, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  small:
    fontFamily: "IBM Plex Mono, Courier New, Courier, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "2px"
  md: "6px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "80px"
components:
  card:
    backgroundColor: "{colors.warm-stone-surface}"
    textColor: "{colors.warm-stone-text}"
    rounded: "{rounded.md}"
    padding: "16px"
    border: "1px solid {colors.warm-stone-border}"
  card-hover:
    border: "1px solid {colors.warm-stone-border}"
    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)"
  inline-link:
    textColor: "{colors.warm-stone-text}"
    borderBottom: "1px solid {colors.link-border}"
---

# Design System: cainelli.dev

## 1. Overview

**Creative North Star: "The Developer's Notebook"**

This is a monospace-first design system for a personal portfolio and writing surface. The aesthetic is honest, technical, and clear — a developer's notebook rendered as a website. IBM Plex Mono carries the entire system, from headings to body text, creating a unified technical character that reads as confident rather than constrained.

The system rejects decoration for its own sake. Every element earns its place through function or clarity. Spacing is generous, hierarchy is explicit, and the warm stone neutrals (not cold grays, not cream) ground the interface in something approachable. This is not a terminal cosplay — it's a crafted object that happens to speak the language of code.

**Key Characteristics:**
- Monospace as identity, not limitation
- Warm stone neutrals over cold grays or saturated backgrounds
- Borders over shadows for surface separation
- Explicit typographic hierarchy with uppercase H2s
- Content max-width 768px for focused reading
- Light/dark theme support with system preference detection

## 2. Colors

The palette is warm stone neutrals — approachable, readable, never sterile.

### Primary
- **Warm Stone Text** (#1c1917): Body text, headings, primary interactive elements. High contrast against warm-stone-bg (12.6:1 ratio). Not pure black — the warmth matters.

### Neutral
- **Warm Stone Background** (#f5f5f4): Page background. Warm without being cream or parchment. The subtle warmth (not cool gray, not saturated beige) is the system's character.
- **Warm Stone Surface** (#ffffff): Cards, elevated surfaces. Pure white for contrast against the warm background.
- **Warm Stone Muted** (#57534e): Secondary text, captions, metadata. 4.5:1 contrast ratio against warm-stone-bg — meets WCAG AA for body text.
- **Warm Stone Border** (#d6d3d1): Borders, dividers, subtle separators. Low-contrast but present.

### Accent
- **Link Border** (#000000): Inline link underlines. Pure black for maximum clarity on bordered links. Used sparingly — only on inline links within content, not on navigation or buttons.
- **Amber Terminal** (#ffb000): The brand accent. Used sparingly for emphasis — the current job card border, the "Let's talk" CTA button, and interactive highlights. The amber carries the terminal-inspired personality without overwhelming the warm neutrals. Dark text (#1c1917) on amber for WCAG contrast.

### Dark Theme
The dark theme inverts the warmth: dark-bg (#282c34) is a blue-gray, not pure black. Dark-text (#e6e9ef) is off-white, not pure white. The warmth is in the light theme; the dark theme is functional and neutral.

### Named Rules
**The Warmth Rule.** The light theme background is warm-stone (#f5f5f4), never cool gray, never cream, never saturated beige. The warmth is subtle but non-negotiable — it's what makes the site feel approachable rather than clinical.

**The Muted-Text Rule.** Secondary text uses warm-stone-muted (#57534e), never a lighter gray. If the contrast drops below 4.5:1 against the background, bump it darker. Readability over aesthetics.

**The Amber Rule.** Amber terminal (#ffb000) is the single accent color. It appears on ≤10% of any given surface — the current job card, the CTA button, interactive highlights. Its rarity is the point. Never use amber for body text or large backgrounds.

## 3. Typography

**Monospace Font:** IBM Plex Mono (with Courier New fallback)
**Display Font:** VT323 (defined but commented out — not active)

**Character:** IBM Plex Mono carries the entire system. The monospace choice is deliberate: it signals technical credibility, creates visual consistency across headings and body, and avoids the mixed-font problem. The weight is in the restraint, not in pairing.

### Hierarchy
- **Heading 1** (semibold, clamp(1.875rem, 5vw, 3rem), line-height 1.2, letter-spacing 0.025em): Page titles. Responsive scale from 30px to 48px. The letter-spacing is positive (not negative) because monospace at large sizes needs room to breathe.
- **Heading 2** (semibold, 1.5rem, line-height 1.3, uppercase): Section headings. Always uppercase — this is the system's signature move. The uppercase treatment creates clear visual separation between sections without relying on size alone.
- **Body** (regular, 1rem, line-height 1.75): Paragraphs, descriptions. The 1.75 line-height is generous for monospace, which needs more vertical space than sans-serif. Max line length is 768px (content max-width), which keeps lines at 65-75ch — readable, not sprawling.
- **Small** (regular, 0.875rem, line-height 1.5): Captions, metadata, secondary information. Uses warm-stone-muted color.
- **Code/Pre/Kbd** (regular, 0.875rem): Inline code, code blocks. Slightly smaller than body text to distinguish from prose.

### Named Rules
**The Uppercase-H2 Rule.** Section headings (H2) are always uppercase. This is not optional — it's the system's visual rhythm. If you need a non-uppercase heading, it's an H1 or H3, not an H2.

**The Monospace-Only Rule.** IBM Plex Mono is the only active font. VT323 is defined but commented out. Don't introduce new fonts without removing monospace first — the system's identity is monospace-forward.

## 4. Elevation

This system is **flat by default**. Surfaces are separated by borders, not shadows. Shadows appear only as a response to interaction (hover states), never as ambient depth.

The elevation model is simple:
- **Resting state**: Flat surface with 1px border (warm-stone-border). No shadow.
- **Hover state**: Shadow appears (hover:shadow-xl on cards). The shadow is the system's way of saying "this is interactive."
- **Images**: shadow-lg on work card images. This is the one exception — images get ambient shadow to lift them from the surface.

### Shadow Vocabulary
- **Card Hover** (`box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1)`): Appears on card hover. Large, diffuse shadow for clear feedback. Not subtle — the interaction should be obvious.
- **Image Shadow** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1)`): Work card cover images. Lifts the image from the card surface. Dark theme uses explicit shadow: `0 4px 8px rgba(0,0,0,0.5)`.

### Named Rules
**The Flat-By-Default Rule.** Cards and surfaces have no shadow at rest. Shadows appear only on hover. If you're tempted to add an ambient shadow "for depth," don't — the border is the separator.

**The Shadow-As-Feedback Rule.** Shadows are interaction feedback, not decoration. If an element isn't interactive (hoverable, clickable), it doesn't get a shadow. Images are the one exception — they're visual content, not UI surfaces.

## 5. Components

### Cards
- **Shape:** Gently rounded corners (6px radius). Not pill-shaped, not sharp — a subtle curve that softens the monospace rigidity.
- **Background:** warm-stone-surface (#ffffff) for light theme. Creates clear separation from warm-stone-bg.
- **Border:** 1px solid warm-stone-border (#d6d3d1). The primary separator. Always present at rest.
- **Shadow:** None at rest. hover:shadow-xl on interactive cards. The shadow is the hover state.
- **Internal Padding:** 16px (1rem). Consistent across all card variants.
- **Hover:** Shadow appears (0 20px 25px -5px rgba(0,0,0,0.1)). Transition: 400ms ease-in-out. The slow transition is deliberate — it feels considered, not snappy.

### Inline Links
- **Style:** Text color (warm-stone-text) with 1px solid bottom border (link-border, #000000). No color change on hover — the border is the indicator.
- **Hover:** Border color transitions to warm-stone-text. Subtle but present.
- **Context:** Used only within content (articles, paragraphs). Not for navigation or buttons.

### Navigation (Header)
- **Style:** Simple flex layout. Logo/greeting on left, actions on right.
- **Typography:** Bold, 1.25rem for greeting. Uppercase not used here — the header is functional, not a section heading.
- **Spacing:** my-2 (8px vertical). Tight, not generous — the header is a utility, not a statement.
- **Theme Switcher:** Icon button, 16px icons. Opacity transition (0.8 → 1.0) on hover.

### Work Cards
- **Shape:** rounded-sm (2px radius). Tighter than standard cards — these are content containers, not interactive surfaces.
- **Layout:** Image on top (border-b separated), content below. Image container has fixed height (72.5 = 290px) with overflow clip.
- **Hover:** Shadow appears on the parent link, not the card itself. The card is the clickable surface.

### Content Wrapper
- **Max Width:** 768px (max-w-3xl). This is the system's reading measure. Don't exceed it for prose content.
- **Horizontal Padding:** 16px (px-4). Consistent across all pages.

## 6. Do's and Don'ts

### Do:
- **Do** use IBM Plex Mono for everything. The monospace identity is non-negotiable.
- **Do** make H2 headings uppercase. This is the system's visual rhythm.
- **Do** use warm-stone-bg (#f5f5f4) as the page background. Never cool gray, never cream.
- **Do** use borders for surface separation. Cards have 1px borders at rest, not shadows.
- **Do** keep content max-width at 768px. This is the reading measure — don't exceed it for prose.
- **Do** use shadows only as hover feedback. Cards get shadow on hover, not at rest.
- **Do** maintain 4.5:1 contrast ratio for body text. warm-stone-muted (#57534e) on warm-stone-bg (#f5f5f4) is the minimum.
- **Do** use amber terminal (#ffb000) as the single accent color. Use it on ≤10% of any surface — the current job card, CTA buttons, interactive highlights.

### Don't:
- **Don't** use generic AI-generated portfolio patterns: cream/beige backgrounds, gradient text, eyebrow+kicker patterns, identical card grids. If it looks like every AI output of 2025-2026, it's wrong.
- **Don't** use corporate LinkedIn energy: stock-photo vibes, buzzword-heavy, template layouts, safe-to-the-point-of-bland.
- **Don't** use over-designed SaaS landing pages: glassmorphism, hero metrics, feature grids, dark-mode-by-default-for-coolness. This is a person, not a product launch.
- **Don't** introduce new fonts without removing monospace first. The system's identity is monospace-forward.
- **Don't** add ambient shadows to non-interactive surfaces. Shadows are hover feedback, not decoration.
- **Don't** use border-left or border-right greater than 1px as a colored accent. Side-stripe borders are prohibited.
- **Don't** use gradient text (background-clip: text with gradient background). Use solid colors.
- **Don't** use glassmorphism as default. Blurs and glass cards are rare and purposeful, or nothing.
- **Don't** use the hero-metric template (big number, small label, supporting stats, gradient accent). This is a portfolio, not a SaaS dashboard.
- **Don't** use identical card grids (same-sized cards with icon + heading + text, repeated endlessly). Vary the layout.
- **Don't** use tiny uppercase tracked eyebrows above every section. One named kicker as a deliberate brand system is voice; an eyebrow on every section is AI grammar.
