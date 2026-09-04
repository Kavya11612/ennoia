# Ennoia website

Built against `Ennoia_Website_PRD_v2.md` and the Ennoia Brand Kit. Next.js 14 (App
Router), TypeScript, Tailwind CSS. No headless CMS wired up yet — content lives in
`lib/data/*.ts` as typed arrays, in the same shape as the PRD §10 content model, so
swapping in Sanity/Payload later is a data-layer change, not a template rewrite.

## Run it

```bash
npm install
npm run dev
```

## What's real vs. placeholder

The PRD (§14, §16) flags several assets and decisions as outstanding. This build
follows the PRD's own instruction to build against the five-stage process, not block
on them:

- **Fonts** — `app/globals.css` expects self-hosted variable WOFF2 files at
  `/public/fonts/RethinkSans-Variable.woff2` and `/public/fonts/IBMPlexMono-Variable.woff2`.
  They aren't included (no network access in this environment to fetch licensed font
  files). Until they're dropped in, both faces fall back to `system-ui` / `ui-monospace`
  — a build gap, not a design decision. The whole type scale, weight range, and the
  "Plex Mono never in running text" rule are already implemented and will look correct
  the moment the files land.
- **The mark** — `public/ennoia-mark.svg` is built to the exact construction spec in
  §6.1 (disc, embossed ring, glyph, landing stone) as a canonical, single-source SVG
  asset, since the studio's own `ennoia-mark.svg` wasn't in the upload. Swap it for the
  real file and nothing else needs to change — every component references the one asset.
  The horizontal lockup is currently live text (Rethink Sans Bold, sentence case) in
  `components/Logo.tsx`; swap in `ennoia-logo-horizontal.svg` once supplied (§14).
- **Hypothetical case studies** — Verse, Northfield, Almanac, Ferrous are original
  concept work written for this build (invented brands, invented briefs), following the
  PRD's own rule that hypotheticals carry no fabricated metrics, quotes, or press
  mentions. Replace via `lib/data/projects.ts` with real studio work as it's produced.
- **Contact form destination, WhatsApp number, CIN/GSTIN, phone** — marked
  `[TO BE SUPPLIED]` inline, matching PRD §14/§16. The form currently validates and
  shows a success state client-side; wire the `handleSubmit` in `components/ContactForm.tsx`
  to the real endpoint before launch.
- **CMS** — not implemented. §3 calls for Sanity or Payload; §16 Q7 leaves that decision
  to the studio. The data shape in `lib/data/types.ts` mirrors §10 exactly for a clean
  migration.

## Design-system enforcement

`npm run banned-check` runs the §5.6.8 grep for banned CSS (3D transforms, blur,
gradients, text-shadow, etc.) across `app/` and `components/`. No `three`, `gsap`,
`lottie-*`, `lenis`, or `locomotive-scroll` in `package.json`; no animation library is
used at all — motion is native CSS transitions/opacity plus a small IntersectionObserver
hook (`components/Reveal.tsx`), which keeps every transition on the `--dur-*` scale in
§5.6.3 and respects `prefers-reduced-motion` by construction (same `.reveal` class is
forced to its resting state in `globals.css`).

## Known gaps against the acceptance checklist (§15)

Reasonable for a first pass, worth closing before launch:
- No real Lighthouse/axe run performed in this environment.
- No CMS validation blocking publish of incomplete projects (data is hand-authored and
  already complete for all four).
- Stacked/reversed/single-colour logo lockups and the favicon-optimised mark (§14) are
  not built — `app/icon` currently has no dedicated favicon-scale asset.
- OG image (1200×630) is referenced (`/og-default.png`) but not generated.
