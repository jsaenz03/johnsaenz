# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Australian general-practice decision-makers — practice managers, GPs, and practice nurses — evaluating whether ClinicIQ Solutions can remove administrative burden from their clinic. Secondary: potential partners. They arrive with no prior knowledge of John and need credibility fast.

## Product Purpose

A personal portfolio site for John Saenz (Registered Nurse and software founder) that establishes trust through lived clinical experience and routes visitors to ClinicIQ Solutions (cliniciq.com.au). Success = a clinic decision-maker clicks through to contact ClinicIQ.

## Positioning

Healthcare automation designed and tested inside real GP clinics by a nurse who works in them — the tools come from lived workflow pain, not a brief.

## Operating Context

Single-page static site (one `index.html`), served as-is; no build step. English (Australian spellings). Visitors browse on desktop and mobile; contact happens off-site at cliniciq.com.au or LinkedIn.

## Capabilities and Constraints

- Sections: hero, sponsor/partner logo marquee, thesis, five products (NursEpod, cIQventory, Docsert AI, PIPQI, Camog), approach, credentials, contact.
- Product cards link to each app's own landing page (nursepod3.jsaenz.au, stock.jsaenz.au, docsert.jsaenz.au, pipqi.jsaenz.au, camog.jsaenz.au — never the legacy nursepod.jsaenz.au / docuwhisper.jsaenz.au hosts); the cliniciq.com.au product pages remain the canonical marketing home for schema and llms.txt references. Brand spellings follow the canonical forms NursEpod / cIQventory / Docsert AI / PIPQI / Camog.
- Docsert AI (formerly branded MedPlan AI) must always carry the "decision support, not a diagnostic or therapeutic device" qualifier wherever the product is described in full (product card, schema description); short list mentions may use "with clinician sign-off".
- No forms, no backend, no analytics — external links only.

## Brand Commitments

- Name and business: John Saenz / ClinicIQ Solutions, Wollongong NSW, ABN 55 882 511 758.
- All facts on the site are confirmed correct by the owner (founding June 2026, 5 products, 5+ yrs in GP clinics, BIS, Golden Key) and binding.
- The dark clinical theme (near-black teal surfaces, single aqua accent) is locked; future work refines within it.

## Evidence on Hand

- Portrait photos in `photos/` (hero cutout: `hero-side.png` → `hero-side.webp`).
- Product screenshots in `photos/apps/` (1440×900 landing captures shared with the cliniciq.com.au product pages).
- Partner logos in `public/sponsors/`.
- No testimonials, case studies, or metrics beyond the stat row; do not fabricate any.

## Product Principles

1. Credibility through lived experience — every claim traces to John's actual clinical work.
2. One accent, one voice — restraint signals clinical professionalism.
3. Route to conversation, not conversion tricks — the site's job is a credible introduction.

## Accessibility & Inclusion

WCAG-conscious dark theme; maintain contrast ratios and `prefers-reduced-motion` support in all future work.
