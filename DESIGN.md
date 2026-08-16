---
name: John Saenz — ClinicIQ Solutions
description: Dark clinical portfolio for a nurse-built healthcare software practice.
colors:
  bg: "#0a1011"
  bg-elev: "#0e1719"
  surface: "#121d1f"
  surface-2: "#182528"
  line: "rgba(180, 205, 215, 0.10)"
  line-strong: "rgba(180, 205, 215, 0.20)"
  ink: "#eaf2f4"
  ink-soft: "#c9d6d9"
  muted: "#8ea1a6"
  muted-2: "#6b7e83"
  vitals-teal: "#5fd4c3"
  vitals-teal-deep: "#2fae9d"
  on-accent: "#06110f"
  warm: "#e8b87a"
typography:
  display:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 4.7rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.2vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Sora, system-ui, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  accent-serif:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "inherit"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0"
rounded:
  sm: "10px"
  md: "16px"
  lg: "22px"
  pill: "999px"
spacing:
  sm: "18px"
  md: "30px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.vitals-teal}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "#7ee0d1"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "30px"
  stat:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "26px"
---

# Design System: John Saenz — ClinicIQ Solutions

## Overview

**Creative North Star: "The Clinical Instrument"**

The site reads like a well-made medical instrument: near-black teal surfaces, hairline borders, and a single luminous aqua that behaves like a vitals readout — precise, purposeful, never decorative. Restraint is the register of clinical credibility; the design earns trust by not performing.

Density is comfortable and editorial rather than dashboard-like. One motion grammar (a quiet scroll-reveal) and one accent family carry the whole page. The serif italic accent (Instrument Serif) is the human voice inside the instrument — a nurse's handwriting on a chart, used sparingly inside sans headings and pull quotes.

**Key Characteristics:**
- Deep near-black teal field; colour arrives only as Vitals Teal and the text ramp.
- Sora display / Geist body / Instrument Serif italic accents.
- Hairline borders and tonal surfaces instead of shadows for most depth.
- Cutout hero portrait standing flush on the sponsor marquee.
- Flat, quiet surfaces; state changes are border/colour/opacity only, no lifts or glows.

## Colors

One accent family locked to the palette; everything else is the neutral text ramp.

### Primary
- **Vitals Teal** (#5fd4c3): the single accent. Links' hover state, primary button, focus rings, selection, numerals, heading accent words. Rarity is the point.
- **Vitals Teal, Deep** (#2fae9d): the accent's readable-text form on dark surfaces (brand surname, role pill emphasis, tag labels).

### Neutral
- **Instrument Black** (#0a1011): page background.
- **Panel Deep** (#0e1719) / **Panel** (#121d1f) / **Panel Raised** (#182528): tonal surface ladder for cards, marquee strip, stat tiles.
- **Ink** (#eaf2f4) → **Ink Soft** (#c9d6d9) → **Muted** (#8ea1a6): text ramp.
- **Hairline** (rgba(180,205,215,0.10)) and **Hairline Strong** (0.20): the only border colours.
- **Chart Amber** (#e8b87a): a sparing warm counterpoint; currently unused at rest and available only for genuine emphasis.

### Named Rules
**The One Readout Rule.** Vitals Teal appears as fill on at most one element per viewport region (the primary button); everywhere else it is hairline weight or text.

**The Flat Field Rule.** No gradient washes, glows, or mesh pools. The background is a solid Instrument Black; imagery blends by matching it exactly.

## Typography

**Display Font:** Sora (system-ui fallback)
**Body Font:** Geist (system-ui fallback)
**Accent Font:** Instrument Serif italic (Georgia fallback)

**Character:** Geometric, instrument-precise sans for structure; the serif italic supplies warmth in short phrases only.

### Hierarchy
- **Display** (600, clamp(2.5rem, 6.4vw, 4.7rem), 1.04): hero H1 only.
- **Headline** (600, clamp(1.9rem, 4.2vw, 3.1rem), 1.04): section H2s.
- **Title** (600, 1.22rem, 1.2): card and principle H3s.
- **Body** (400, 1rem / lead 1.08–1.14rem, 1.65): paragraphs; leads capped at 54–56ch.
- **Label** (600, 0.72rem, 0.16em, uppercase): product tags only — no eyebrow/kicker labels above headings.

### Named Rules
**The Chart Margin Rule.** Instrument Serif italic appears at most once per heading, as one short phrase — the accent is a signature, not a pattern to scale.

## Layout

Single page, single column flow. Container 1180px with 28px inline padding. Sections use `padding-block: clamp(72px, 10vw, 124px)`. The hero is a two-column even grid (text / portrait); the portrait's feet land flush on the sponsor marquee below (hero bottom padding 0). Bento grid for products (7/5 columns, 1-column below 820px). Approach uses a sticky left column at ≥880px. Stats are a 4-up grid (2-up below 820px). Breakpoints: 880px, 820px, 760px.

## Elevation & Depth

Hybrid: tonal layering does the everyday work (bg → surface → surface-2); shadows appear only as two ambient values on the largest floating surfaces (`--shadow-lg` on hero/contact-scale elements). No zero-offset glows, no colored halos.

### Shadow Vocabulary
- **Ambient Large** (`0 1px 0 rgba(255,255,255,0.04) inset, 0 40px 80px -40px rgba(0,0,0,0.75)`): contact card and hero-scale elements only.

## Shapes

Pills for buttons and the role chip; generous rounded rectangles for cards (22px), thumbs (16px), inner details (10px). Hairline 1px borders throughout. Portrait photography is presented as an honest rectangle whose background matches Instrument Black exactly, or as a clean alpha cutout — never gradient-melted into the page.

## Components

### Buttons
- **Shape:** full pill (999px), padding 13px 22px, Sora 600 0.96rem.
- **Primary:** Vitals Teal fill, on-accent ink; hover brightens to #7ee0d1. No lift, no glow.
- **Ghost:** transparent, Hairline Strong border, ink text; hover border and text go teal.
- **Focus:** 2px teal outline, 3px offset.

### Cards
- **Corner:** 22px radius, 30px padding, Panel background, Hairline border.
- **Hover:** border strengthens to Hairline Strong only.
- **Featured card** (MedPlan AI): Panel Raised background with teal-tinted icon tile; no gradient.

### Stat Tiles
- 26px padding, Panel background, Hairline border; Sora 700 large numeral with teal unit.

### Navigation
- Sticky, 70px, translucent bg-blur background that gains a Hairline border on scroll. Links are muted, teal underline wipe on hover. Mobile shows brand + CTA only.

### Marquee / Sponsor Strip
- Full-width Panel Raised band with hairline block borders; logos greyscale-inverted at 0.8 opacity, full opacity on hover; pauses on hover.

### Hero Portrait
- Photography anchored to the section bottom, aspect preserved (never stretched), sized `max-height: clamp(460px, 70vh, 640px)`; background flattened to Instrument Black so it dissolves into the page.

## Do's and Don'ts

### Do:
- **Do** keep Vitals Teal rare: one filled element per region, otherwise hairlines and text.
- **Do** match photographic backgrounds to Instrument Black exactly when flattening cutouts.
- **Do** preserve aspect ratio on the hero portrait; size via max-height with auto width.
- **Do** keep `prefers-reduced-motion` handling on any motion added.

### Don't:
- **Don't** add gradient washes, mesh backgrounds, grain overlays, glows, or glass pills.
- **Don't** place eyebrow/kicker labels above headings; the heading carries its own weight.
- **Don't** animate numbers (count-ups) or add scroll-progress/spotlight chrome.
- **Don't** use any second accent hue; Chart Amber requires an explicit user request.
- **Don't** use more than one serif-italic phrase per heading.
