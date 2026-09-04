# Ennoia — Website PRD v2
## Developer handoff

**Owner:** Manreet — Founder, Ennoia
**Audience:** Web developer
**Supersedes:** `Ennoia_Website_PRD.md`
**Canonical reference:** Master Brand PRD. Where this document and the Master Brand PRD disagree, the Master Brand PRD wins.
**Date:** 31 July 2026

---

## 0. Status of the brand system

**The identity is locked.** Mark, wordmark, palette, and typography are settled decisions with recorded rationale. They are not open for reinterpretation during build.

| Element | Status |
|---|---|
| Mark — "The Knight's Move" clay seal | **Locked** |
| Wordmark — Ennoia, Rethink Sans Bold 700 | **Locked** |
| Palette — 7 named colours | **Locked** |
| Typography — Rethink Sans + IBM Plex Mono | **Locked** |
| Lockups, clearspace, minimum sizes | **Locked** |
| Positioning statement, messaging pillars | **Locked** |
| Tagline — "We find the move others miss." | Recommended, pending final lock. Build with it; it is a content string, not a structural dependency. |

**Two asset gaps** the developer will hit — flagged in §14:
1. Logo variant set is incomplete. `ennoia-mark.svg` and `ennoia-logo-horizontal.svg` exist. Stacked, reversed, single-colour ink, and a favicon-optimised simplified mark do not yet.
2. Named methodology is not built. The site has a slot for it (§9.4, S3); until it exists, that slot uses the five-stage process as written.

`[BRACKETS]` mark credentials or copy still to be supplied. They do not block development.

---

## 1. What the site is

A five-page site for **Ennoia**, a strategy-led branding studio for founders, based in Hyderabad, operating as a Private Limited.

**Category descriptor:** Brand strategy for founders.

**Positioning statement (locked):**
> For founders who need a position, not just a logo, Ennoia is the strategy-led branding studio that finds the move competitors miss and builds the brand around it — because we read the whole board before we move.

**The site's job is trust verification, not lead generation.** Ennoia is a deliberate cold start — no audience inherited from any other entity. A visitor arrives from LinkedIn, Instagram, or a referral, already knowing the name, and is deciding whether the studio is credible enough to write to.

**What this means for the build:**

- Typography and content carry the site. No hero video, no slideshow, no scroll-jacking, no cursor effects.
- **Matte, never chrome.** This is a brand-level rule and it governs the site: no gloss, no gradients on brand elements, no glassmorphism, no drop shadows on the mark. The seal is pressed clay, not polished metal.
- Mobile-first. Most traffic arrives from LinkedIn and Instagram on a phone.
- Performance budgets in §12 are requirements, not targets.

---

## 2. Routes

```
/                          Home
/hypotheticals             Project index
/hypotheticals/[slug]      Project detail — template
/studio                    Studio
/notions                   Writing index
/notions/[slug]            Article — template
/contact                   Contact

/privacy                   Privacy policy
/terms                     Terms of use
/404                       Not found
/sitemap.xml   /robots.txt
```

**Global nav:** `HYPOTHETICALS · STUDIO · NOTIONS · CONTACT`. Mark links to `/`. Four items, no dropdowns, no search.

**Two naming notes for the developer — both deliberate, neither a placeholder:**

- **Hypotheticals** is the portfolio section. The projects shown are self-initiated concept work for brands that do not exist, and this is disclosed prominently on every project page (§9.3, component `DisclosureBanner`). Do not relabel it "Work."
- **Notions** is the writing section. From *ennoia* (Gk. ἔννοια — idea, concept, strategic thought), the root of the studio name.

Both names are open to a final call from the founder (§16, Q1) but are structural in this spec.

---

## 3. Stack

| Layer | Specification |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling | CSS custom properties per §5. Tailwind or CSS Modules as preferred, provided tokens are declared once and referenced everywhere. **No hardcoded hex values in components.** |
| CMS | Headless — Sanity or Payload. Must support §10 and be editable by a non-developer. |
| Hosting | Netlify or Vercel |
| Images | Next/Image, AVIF/WebP with fallback, responsive `srcset` |
| Fonts | Self-hosted WOFF2. No Google Fonts CDN requests. |

Static generation with incremental revalidation. Project and article pages must be statically generated.

---

## 4. Domain and SEO

**Primary domain:** `ennoiabranding.com`
**Secondary:** `ennoiabranding.in`

**Critical requirement.** `ennoiabranding.in` **301-redirects to `.com` at the domain level and never serves content.** `canonical`, `og:url`, and `twitter:url` must resolve to the `.com` production domain on every page, including all CMS-generated routes. Two live domains serving identical content splits search authority and is a launch blocker.

Per-page:

- Unique `<title>` and meta description on every route. No template defaults shipped.
- One `<h1>` per page. Heading order never skips a level.
- `og:image` 1200×630, per-project and per-article override from the CMS.
- JSON-LD: `Organization` on `/`, `Article` on Notions detail, `CreativeWork` on project detail.
- Auto-generated `sitemap.xml` including all published CMS entries.
- Descriptive `alt` on every image; `alt=""` on decorative.
- Slugs lowercase, hyphenated, no dates.

---

## 5. Design system

### 5.1 Colour — locked palette

Seven named colours. Warm paper ground, clay seal, charcoal-brown ink. **Do not introduce any colour outside this set**, including for states, charts, or illustrations.

```css
:root {
  /* Brand — locked */
  --c-clay:          #C69C72;  /* clay disc; primary warm fill */
  --c-emboss:        #8E6E53;  /* embossed ring; accents */
  --c-ink:           #433E3F;  /* glyph and ALL text */
  --c-gambit:        #7A7265;  /* reserve; muted labels */
  --c-landing-stone: #C0B7B1;  /* background tint; landing stone */
  --c-open-board:    #F5F1EB;  /* canvas — page background */
  --c-card:          #FBF8F3;  /* raised surfaces, cards */

  /* Web-only accessible variants — see 5.1.2 */
  --c-gambit-text:   #746C60;  /* muted text under 24px */
  --c-emboss-link:   #87684F;  /* link/accent text on paper */
  --c-clay-on-ink:   #D0A478;  /* link/accent text on ink grounds */

  /* Structural */
  --c-rule:          #E4DED4;  /* hairlines, dividers */
  --c-error:         #8C4A3A;  /* form errors only */
}
```

#### 5.1.1 Usage rules — enforced

| Token | Use | Never |
|---|---|---|
| `--c-open-board` | Page background | — |
| `--c-card` | Cards, form fields, raised surfaces | As page background |
| `--c-ink` | **All text.** Headings, body, labels. Also the background of reversed sections. | — |
| `--c-clay` | The disc in the mark. Large warm fills, illustration. | **As text colour, at any size.** It is a fill. |
| `--c-emboss` | The ring in the mark. Accent fills, rules. | As small text on paper without the variant below. |
| `--c-gambit` | Muted labels at 24px+ | Body copy or captions without the variant below. |
| `--c-landing-stone` | Background tints, the landing stone | As text on paper — fails at every size |

**The governing rule from the brand system: mid-browns are fills, not type. All text is Ink `#433E3F`.** The three `--c-*-variant` tokens exist only for the narrow cases where an accent must carry text, and are documented below.

#### 5.1.2 Verified contrast — WCAG 2.1

Measured, not estimated. AA requires 4.5:1 for text under 24px (or under 18.66px bold), 3:1 above.

**On Open Board `#F5F1EB`:**

| Colour | Ratio | Verdict |
|---|---|---|
| Ink `#433E3F` | **9.33** | AAA — body, headings, everything |
| Gambit `#7A7265` | 4.22 | **Fails AA under 24px.** Large text only. |
| Emboss `#8E6E53` | 4.14 | **Fails AA under 24px.** Large text only. |
| Clay `#C69C72` | 2.22 | **Fails at all sizes. Fill only.** |
| Landing Stone `#C0B7B1` | 1.75 | **Fails at all sizes. Fill only.** |

**On Card `#FBF8F3`:** Ink 9.91 (AAA) · Gambit 4.48 (marginal fail) · Emboss 4.40 (fails).

**Reversed, on Ink `#433E3F`:**

| Colour | Ratio | Verdict |
|---|---|---|
| Open Board `#F5F1EB` | **9.33** | AAA — use for all reversed text |
| Card `#FBF8F3` | 9.91 | AAA |
| Landing Stone `#C0B7B1` | 5.33 | AA — acceptable for secondary text |
| Clay `#C69C72` | 4.20 | **Fails AA under 24px** |
| Emboss `#8E6E53` | 2.25 | **Fails** |
| Gambit `#7A7265` | 2.21 | **Fails** |

**This is the single most important finding for the build.** The palette is beautiful and correct, but three of its colours cannot legally carry small text, and the two that read as "muted grey" — Gambit and Emboss — both land just under AA at 4.22 and 4.14. A developer will reach for Gambit for captions and metadata by default. It fails.

**Resolution — three web-only variants, derived by darkening on the same hue axis:**

| Variant | Value | On Open Board | Purpose |
|---|---|---|---|
| `--c-gambit-text` | `#746C60` | **4.60** AA | Captions, metadata, form labels under 24px |
| `--c-emboss-link` | `#87684F` | **4.53** AA | Link and accent text on paper |
| `--c-clay-on-ink` | `#D0A478` | **4.63** AA on Ink | Link and accent text on reversed sections |

These are digital-accessibility derivatives, not new brand colours. They appear nowhere in print, nowhere in the mark, and never as fills. **Flag to founder for sign-off — §16, Q2.** The alternative is restricting Gambit and Emboss to 24px+ everywhere, which is workable but constrains the interface considerably.

#### 5.1.3 Reversed sections

Reversed sections use `--c-ink` as background. Within them: `--c-open-board` for primary text, `--c-landing-stone` for secondary, `--c-clay-on-ink` for links. Never Gambit, never Emboss, never Clay at body size.

**Dark mode:** out of scope. Do not build a toggle.

### 5.2 Typography — locked

Two families. No third face, no serif, no system-font fallback in the design.

```css
:root {
  --font-sans: 'Rethink Sans', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, 'SF Mono', monospace;
}
```

| Family | Role | Weights |
|---|---|---|
| **Rethink Sans** | The voice. Wordmark, all headings, **all running text and body copy.** | 400, 500, 600, 700, 800 + italics (variable) |
| **IBM Plex Mono** | The instrument. Eyebrows, labels, data, metadata, tabular figures. | 400, 500 |

**Hard rule, enforced in code review: IBM Plex Mono is never used for running text.** Not for body copy, not for standfirsts, not for paragraphs of any length, not for "a technical feel." Labels, eyebrows, data, and metadata only. This is a locked brand constraint and the most likely place for the system to drift on a website.

Both are SIL Open Font License. Rethink Sans has no Reserved Font Name — freely self-hostable and modifiable. IBM Plex Mono is OFL. Self-hosting is clear for both; no licence purchase required.

**Loading:**
- Self-host WOFF2 only. No external font requests.
- `font-display: swap`
- Preload the Rethink Sans variable file. Preload Plex Mono only on templates that use it above the fold.
- Prefer variable font files — one file per family covers the full weight range.

#### Type scale — from the brand book

Values are locked. Sizes are desktop; scale fluidly to the mobile column shown.

| Style | Family | Weight | Size / LH / Tracking | Mobile | Use |
|---|---|---|---|---|---|
| Display | Rethink | 700 | 60 / 1.02 / −0.025em | 40 | Hero statement only |
| H1 | Rethink | 700 | 44 / 1.06 / −0.02em | 32 | Page titles |
| H2 | Rethink | 600 | 32 / 1.12 / −0.015em | 26 | Section heads |
| H3 | Rethink | 600 | 23 / 1.2 / −0.01em | 20 | Subsections |
| Body L | Rethink | 400 | 19 / 1.6 | 18 | Standfirsts, lead paragraphs |
| Body | Rethink | 400 | 16 / 1.65 | 16 | Default running text |
| Body S | Rethink | 400 | 14 / 1.5 | 14 | Captions |
| Eyebrow | **Plex Mono** | 500 | 12 / 1.4 / +0.16em, uppercase | 12 | Section kickers |
| Label / Meta | **Plex Mono** | 400–500 | 13 · 15 · 12 | — | Labels, data, metadata |

```css
--t-display: clamp(2.5rem, 1.5rem + 4.4vw, 3.75rem);
--t-h1:      clamp(2rem,  1.5rem + 2.2vw, 2.75rem);
--t-h2:      clamp(1.625rem, 1.4rem + 1vw, 2rem);
--t-h3:      clamp(1.25rem, 1.15rem + 0.5vw, 1.4375rem);
--t-body:    1rem;
```

**Wordmark:** "Ennoia", Rethink Sans Bold 700, tracking −0.015em, **sentence case. Never all-caps as the primary wordmark.** In the supplied horizontal lockup SVG the wordmark is already outlined to paths — do not re-set it as live text.

**Reading rules:**
- Long-form measure `max-width: 68ch`. Body text never full-bleed.
- Body never below 16px anywhere, including mobile captions.
- Eyebrows are uppercase with +0.16em tracking — for kickers and labels only, never sentences.
- No justified text. No hyphenation on headings. `text-wrap: balance` on h1–h3.
- Tabular figures (`font-variant-numeric: tabular-nums`) on all Plex Mono numeric data.

### 5.3 Spacing

8px base. Tokens only.

```css
--s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:24px;
--s-6:32px; --s-7:48px; --s-8:64px; --s-9:96px; --s-10:128px; --s-11:160px;
```

Section rhythm: `--s-9` mobile, `--s-11` desktop.

### 5.4 Grid and breakpoints

```css
--bp-sm:390px; --bp-md:768px; --bp-lg:1024px; --bp-xl:1440px; --bp-2xl:1920px;
```

| Breakpoint | Cols | Gutter | Margin | Max width |
|---|---|---|---|---|
| < 768 | 4 | 16px | 20px | — |
| 768–1023 | 8 | 24px | 40px | — |
| ≥ 1024 | 12 | 32px | 64px | 1440px centred |

Text never exceeds 1440px. Full-bleed imagery may.

### 5.5 Radii, borders, elevation

```css
--r-sm: 2px;   /* form fields, tags */
--r-md: 6px;   /* cards, buttons */
--r-full: 999px;
--border: 1px solid var(--c-rule);
```

**Elevation: the site is flat.** No drop shadows on cards, buttons, or sections. This follows directly from the matte-not-chrome rule. The only permitted "shadow" is a hairline under the sticky nav on scroll:

```css
--shadow-nav: 0 1px 0 0 var(--c-rule);
```

### 5.6 Visual treatment — the flatness rule

**Governing principle, from the brand system: the mark is a seal pressed into wet clay. Matte, always. Never chrome.**

A pressed seal has no gloss, no reflection, no cast shadow, and no depth beyond the impression itself. The website is the same material. Everything below follows from that single fact, and it is stated exhaustively because "make it feel premium" is the instinct that breaks it — and in this brand, gloss reads as the opposite of premium.

#### 5.6.1 Banned CSS — hard list

These properties and values must not appear anywhere in the codebase, in any component, at any opacity. This list is enforceable by grep (§5.6.8).

**Depth and 3D — banned entirely**

| Property / value | Status |
|---|---|
| `perspective`, `perspective-origin` | Banned |
| `transform-style: preserve-3d` | Banned |
| `rotate3d()`, `rotateX()`, `rotateY()`, `rotateZ()` | Banned |
| `translateZ()`, `translate3d()` with a non-zero Z | Banned |
| `scale3d()` with a non-uniform Z | Banned |
| `backface-visibility` | Banned (no element ever has a back face) |
| WebGL, `<canvas>` 3D, three.js, react-three-fiber, Spline, Rive 3D | Banned |
| CSS 3D card flips, cubes, carousels, tilt-on-hover | Banned |
| Any library whose purpose is depth, tilt, or parallax | Banned |

`translate3d(x, y, 0)` is permitted **only** as a GPU-compositing hint where Z is exactly zero. It must never produce visible depth.

**Shadow — banned with one exception**

| Property | Status |
|---|---|
| `box-shadow` — any blur radius > 0 | Banned |
| `box-shadow` — any spread > 0 | Banned |
| `text-shadow` | Banned, all instances, no exception |
| `filter: drop-shadow()` | Banned |
| Shadow inside SVG assets (`<feDropShadow>`, `<feGaussianBlur>` used for shading) | Banned |
| Layered or "soft UI" / neumorphic shadows | Banned |

**The single permitted exception** is the sticky-header hairline, which is a zero-blur zero-spread offset line, not a shadow:

```css
--shadow-nav: 0 1px 0 0 var(--c-rule);
```

Rule: any `box-shadow` in the codebase must have blur `0` and spread `0`. If it has blur, it is wrong.

**Gradient — banned entirely on brand elements**

| Value | Status |
|---|---|
| `linear-gradient()` | Banned |
| `radial-gradient()` | Banned |
| `conic-gradient()` | Banned |
| `repeating-*-gradient()` | Banned |
| Gradient text (`background-clip: text` with a gradient) | Banned |
| Gradient borders, gradient overlays on imagery | Banned |
| Mesh gradients, animated gradient backgrounds, "aurora" effects | Banned |
| Gradient fills or `<linearGradient>` inside any brand SVG | Banned |

The brand book states this explicitly under Misuse: *don't apply gradients*. Colour transitions are made by placing two flat blocks adjacent, never by blending.

**Blur, glass, and glow — banned**

| Property / effect | Status |
|---|---|
| `backdrop-filter` — any value | Banned. No frosted glass, no translucent nav. |
| `filter: blur()` | Banned on all UI and brand elements |
| Glow, halo, bloom, or `box-shadow` used as a light source | Banned |
| Semi-transparent panels over imagery to force legibility | Banned — use a solid ground instead |
| Noise, grain, or texture overlays | Banned. Clay is matte, not gritty. |

**Other banned visual devices**

- Bevels, embosses, or inner shadows applied in CSS. The mark's emboss is drawn into the SVG; it is never simulated by the browser.
- Outlines or strokes added to the mark or wordmark.
- Skew (`skewX`, `skewY`) on any element.
- Non-uniform scale — `scaleX` and `scaleY` must always be equal. This is the stretch/distort prohibition expressed in code.
- Overlapping blend modes (`mix-blend-mode`, `background-blend-mode`) other than `normal`.
- Animated SVG filters.

#### 5.6.2 What is permitted

The complete list of visual effects available to this site:

1. Flat fills from the seven-colour palette
2. 1px hairline rules in `--c-rule`
3. Border radius from the token set
4. Opacity changes
5. Uniform scale, between `1` and `1.02`
6. Translation on X and Y
7. Colour transitions between two palette values

That is the whole vocabulary. If an effect is not on this list, it does not ship.

#### 5.6.3 Motion — timing and easing

The mark's character is **deliberate, pressed, calm**. Motion follows the same three words: things arrive and settle. Nothing bounces, overshoots, springs, or oscillates.

```css
:root {
  --ease-out:  cubic-bezier(0.22, 1, 0.36, 1);   /* default — decelerating */
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1); /* symmetrical, for reversible states */

  --dur-instant: 100ms;  /* colour-only changes */
  --dur-fast:    150ms;  /* hover, focus */
  --dur-base:    250ms;  /* menu, disclosure, reveal */
  --dur-slow:    400ms;  /* entrance on scroll */
}
```

**No easing curve may have a control point outside the 0–1 range on the Y axis.** That is what produces overshoot and bounce. `cubic-bezier(.68,-.55,.27,1.55)` and every variant of it is banned. No spring physics libraries (Framer Motion `type: "spring"`, react-spring) — use duration-and-easing tweens only.

**Maximum duration for any transition: 400ms.** Anything longer reads as sluggish rather than deliberate.

#### 5.6.4 Per-element motion specification

Exhaustive. If an element is not listed, it does not animate.

| Element | Trigger | Property | From → To | Duration | Easing |
|---|---|---|---|---|---|
| **Page sections** | Scroll into view at 15% intersection | `opacity` + `translateY` | `0, 12px` → `1, 0` | 400ms | `--ease-out` |
| | | Fires **once**. Never re-triggers on scroll up. Never staggers by more than 60ms between siblings. Maximum 3 staggered items. | | | |
| **Header background** | Scroll > 8px | `background-color` + `border-bottom-color` | transparent → `--c-open-board`, transparent → `--c-rule` | 150ms | `--ease-out` |
| **Nav link** | Hover / focus | `color` | `--c-ink` → `--c-emboss-link` | 150ms | `--ease-out` |
| **Nav active underline** | Route change | `transform: scaleX` | `0` → `1`, origin left | 250ms | `--ease-out` |
| **Mobile menu overlay** | Tap | `opacity` | `0` → `1` | 250ms | `--ease-out` |
| | | No slide-in from edge. No scale. Fade only. | | | |
| **Button, filled** | Hover | `background-color` | base → 8% darker | 150ms | `--ease-out` |
| | | **No translate, no scale, no shadow.** The button does not lift. | | | |
| **Button, secondary** | Hover | `border-color`, `color` | `--c-rule` → `--c-ink` | 150ms | `--ease-out` |
| **Text link** | Hover | `text-decoration-color` | 40% → 100% opacity | 150ms | `--ease-out` |
| **`ProjectCard` image** | Hover on card | `transform: scale` | `1` → `1.02` | 250ms | `--ease-out` |
| | | Contained by `overflow: hidden` on the wrapper. **Scale X and Y equal.** The card itself does not move, tilt, or shadow. | | | |
| **`ProjectCard` title** | Hover on card | `color` | `--c-ink` → `--c-emboss-link` | 150ms | `--ease-out` |
| **Image load** | Decode complete | `opacity` | `0` → `1` | 250ms | `--ease-out` |
| | | Placeholder is a flat `--c-landing-stone` block at 25% opacity. **No blur-up, no shimmer, no skeleton pulse.** | | | |
| **Form field** | Focus | `border-color` + `box-shadow` ring | `--c-rule` → `--c-ink`, ring 0 → 2px | 150ms | `--ease-out` |
| | | The focus ring is a `0 0 0 2px` shadow — zero blur. Permitted under the exception in §5.6.1. | | | |
| **Form error** | Validation fail | `opacity` | `0` → `1` | 150ms | `--ease-out` |
| | | **No shake, no wobble, no red flash.** The message appears. | | | |
| **Form success** | Submit | `opacity` | `0` → `1` | 250ms | `--ease-out` |
| | | No confetti, no checkmark draw-on, no celebration. | | | |
| **Filter change** | Click | `opacity` on grid | `1` → `0` → `1` | 150ms each | `--ease-out` |
| | | No FLIP reordering animation, no layout-shift choreography. | | | |
| **Accordion / disclosure** | Click | `height`, `opacity` | auto-height, 0 → 1 | 250ms | `--ease-in-out` |

**Everything else is static.**

#### 5.6.5 The mark on the web — static, always

**The logomark does not animate on the website.** Not on page load, not on hover, not on scroll, not on route change.

- No draw-on / path-tracing of the glyph.
- No rotation of the disc.
- No pulse, breathe, or scale loop on the landing stone.
- No hover state on the header logo beyond a 150ms opacity shift to 80%.
- No animated favicon.
- No loading spinner built from the mark. If a loader is unavoidable, it is a 2px `--c-emboss` progress bar at the top of the viewport — not the seal.

The animated logo concepts developed for Veo — *Read the Board*, *Raking-Light Emboss* — are **video assets for social and presentation openers only**. They are not to be reimplemented as web animation. Raking light in particular implies a specular highlight, which is the chrome behaviour this brand explicitly rejects; it works as a filmed material study and fails as a page element.

#### 5.6.6 Scroll behaviour

- Native scroll only. **No smooth-scroll libraries** (Lenis, Locomotive, GSAP ScrollSmoother). `scroll-behavior: smooth` permitted for in-page anchor jumps only.
- No scroll-jacking, section snapping, or scroll-driven timelines.
- No horizontal scroll sections.
- No pinned or sticky sections other than the header.
- No progress indicators, reading bars, or scroll-percentage displays.
- No elements that reveal, scrub, or transform continuously as a function of scroll position. Reveal is a one-shot intersection trigger, not a scroll-linked timeline.

#### 5.6.7 Additionally banned, site-wide

Cursor followers, custom cursors, magnetic buttons · marquee or ticker text · count-up numbers · typewriter or text-scramble effects · page-transition overlays, curtains, or wipes · auto-playing carousels or sliders of any kind · Lottie animations · animated background patterns · particle effects · light/dark toggle animation · hover tilt · scroll-triggered video · animated gradients · "sparkle," "shine," or sweep effects across buttons or cards · looping ambient motion of any description.

#### 5.6.8 Enforcement

Add to the CI pipeline. A failing grep blocks the merge.

```bash
# Must return zero matches across src/
grep -rniE 'perspective|preserve-3d|rotate[XYZ]|rotate3d|backface|skew[XY]|\
backdrop-filter|drop-shadow|text-shadow|linear-gradient|radial-gradient|\
conic-gradient|mix-blend-mode|filter:\s*blur' src/

# box-shadow: permitted only with zero blur and zero spread
grep -rn 'box-shadow' src/   # review every hit by hand
```

Also: no `three`, `@react-three/*`, `spline`, `lottie-*`, `lenis`, `locomotive-scroll`, `gsap` in `package.json`. Framer Motion is permitted **only** with `type: "tween"`; `type: "spring"` is banned.

#### 5.6.9 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Scroll-reveal elements must render at `opacity: 1, translateY(0)` under reduced motion — never left invisible because the trigger was suppressed. **Test by loading every page with the OS setting on and confirming nothing is missing.** This is the most common way a reveal-animation site becomes unusable, and it is a launch blocker.

---

### 5.7 Imagery, iconography, and graphic devices

#### 5.7.1 Photography

- **No stock photography anywhere on the site.** No laptops, no coffee cups, no sticky notes, no diverse-team-in-a-meeting, no abstract tech backgrounds.
- Real work only, or nothing. An empty section is better than a purchased one.
- No colour grading toward the palette — do not tint photography clay or sepia to force brand cohesion. Photograph honestly and let the surrounding paper ground do the work.
- No duotone treatments.
- No photographic overlays behind text.

#### 5.7.2 Mockups

- Rendered as mockups, presented as mockups.
- **Nothing may imply real-world distribution or press coverage.** No product on a real retail shelf, no "as featured in," no magazine spread photography, no packaging in a real hand in a real store.
- No environmental compositing that suggests a physical location the brand does not occupy.
- Flat-lay and straight-on presentation preferred over perspective renders — consistent with §5.6.1's prohibition on depth.

#### 5.7.3 Iconography

- **Banned as subject matter, brand-level: chess pieces used literally, compasses, lightbulbs, gears.** This applies to icons, illustrations, favicons, 404 art, empty states, loading states, social meta images, and any decorative element.
- Also avoid: rockets, target-and-arrow, jigsaw pieces, handshakes, magnifying glasses over documents.
- Where icons are necessary — social links, form states, menu toggle — use a single 1.5px monoline set at 20px or 24px, `--c-ink` or `--c-gambit-text`, no fill, round caps and joins to echo the glyph. One set only; do not mix sources.
- **Do not use icons decoratively.** The five process stages are numbered, not illustrated (§9.1, H5). A label is clearer than a pictogram, and clarity over cleverness is a locked constraint.

#### 5.7.4 Graphic devices

The permitted set:

1. **The 1px hairline rule** in `--c-rule` — the primary structural device
2. **The 24px `--c-emboss` kicker rule** above section eyebrows
3. **Flat colour blocks** from the palette, used as section grounds
4. **The mark**, at approved sizes, in approved lockups

Nothing else. No blobs, no abstract shapes, no dot grids, no line art, no background patterns, no oversized watermark glyphs, no cropped-mark decorative elements.

**Specifically: the glyph must not be extracted from the mark and used as a decorative motif** — no giant faded Γ behind text, no glyph as a bullet point, no glyph as a section divider. The mark is a seal. A seal appears where it is pressed, once, deliberately.

#### 5.7.5 Data visualisation and frameworks

A strategy studio's core output format. House style, consistent with everything above:

- Flat fills only. No gradients, no 3D bars, no pie charts with depth, no glossy segments.
- Palette order for categorical series: Ink → Clay → Gambit → Emboss → Landing Stone. **Never more than five series** — beyond that the palette cannot differentiate accessibly.
- All labels and all numeric values in **IBM Plex Mono**, tabular figures. All prose annotation in Rethink Sans.
- Axis lines and gridlines: 1px `--c-rule`. Gridlines only where genuinely needed for reading values.
- **Label data directly on the element** rather than using a legend, wherever the layout allows.
- No chart animates on load. No count-up, no bar-grow, no line-draw.
- 2×2 matrices and positioning maps: flat quadrants, hairline axes, Ink labels. No shading, no glow on the "winning" quadrant.
- Charts must be legible in single-colour ink — test by converting to greyscale. If two series become indistinguishable, differentiate by pattern or direct labelling, not by adding a colour.

#### 5.7.6 Technical requirements

- Aspect ratios: project cards 4:3, project heroes 16:9, article heroes 2:1.
- Explicit `width`/`height` or `aspect-ratio` on every image. CLS budget is 0.1 and images are the usual cause.
- Below-fold images lazy-load; hero images do not and should be preloaded.
- AVIF with WebP fallback, responsive `srcset` at 400 / 800 / 1200 / 1600 / 2000px.
- Source assets supplied at 2× target minimum.
- SVGs optimised through SVGO, `viewBox` retained, no embedded raster, **no `<filter>` elements** (see §5.6.1).
- Every image has meaningful `alt`, or explicit `alt=""` if decorative.

---

## 6. The mark — implementation

### 6.1 Construction (reference only — always use the supplied SVG)

The Knight's Move clay seal. A circular medallion with an abstracted bent monoline glyph and a landing stone.

| # | Element | Spec |
|---|---|---|
| 1 | Disc | Filled circle, `--c-clay`, diameter D |
| 2 | Embossed ring | Stroke `--c-emboss`, r ≈ 0.90 × D/2, width ≈ 1.2% D |
| 3 | Glyph | Monoline bent stroke, `--c-ink`, round caps and joins, width ≈ 4% D, ~⅓ of disc, optically positioned up-left |
| 4 | Landing stone | Filled circle, `--c-landing-stone`, r ≈ 4.5% D, at the stroke end |

**Never reconstruct the mark in CSS, canvas, or inline paths written by hand.** Use `ennoia-mark.svg` (200×200 viewBox) as supplied.

### 6.2 Lockups

| Lockup | Use | Asset |
|---|---|---|
| Horizontal | Primary — header, letterhead, email | `ennoia-logo-horizontal.svg` (799×216, wordmark outlined) |
| Stacked | Constrained widths, social | **Missing — §14** |
| Mark only | Favicon, avatar, tight spaces | `ennoia-mark.svg` |
| Wordmark only | Where the mark already appears | **Missing — §14** |

**Header behaviour:** horizontal lockup at ≥768px; mark alone below.

### 6.3 Clearspace and minimum size

- **Clearspace: 1× glyph height on all four sides.** Nothing intrudes — not text, not rules, not image edges.
- **Minimum sizes:** mark alone **24px**; full lockup **120px wide**. Enforce in CSS; never render below these.
- Favicon at 32px and 16px requires the **simplified favicon-optimised mark**, not a scaled-down primary — the embossed ring and landing stone collapse to mud at that size. Currently missing (§14).

### 6.4 Misuse — enforce in review

From the brand book, non-negotiable:

- **Don't stretch or distort.** Lock aspect ratio in every implementation.
- **Don't recolour off-palette.** The disc is Clay, the ring is Emboss, the glyph is Ink, the stone is Landing Stone. Reversed and single-colour variants are the only permitted alternates.
- **Don't add shadows or 3D.**
- **Don't apply gradients.** Matte always, never chrome.
- Don't rotate, outline, or place on a busy image without a solid ground.

---

## 7. Verbal system

Copy is supplied by the founder, but the developer will write microcopy — buttons, form states, errors, empty states, alt text. These rules apply to all of it.

**Voice:** precise, calm, confident, plain-spoken. Short declarative sentences.

**The studio does the work.** Never phrase the promise as the client doing it. "We find the move others miss" — not "find your move" in body copy. (`Find your move` is the locked CTA label and is the one permitted exception.)

**Board vocabulary — board, position, move, leap — is seasoning, not a crutch.** Do not extend it into UI microcopy. A 404 page does not say "you've moved off the board." It says the page doesn't exist.

**Messaging pillars, for section framing:**
1. Positioning over decoration — *"A logo is not a strategy."*
2. Clarity over cleverness — *"Distinctive, but always clear."*
3. The indirect advantage — *"Win from the angle they don't guard."*

**Primary CTA label:** `Find your move`
**Tagline:** *We find the move others miss.* (pending final lock)

**Banned from all copy:** "insight to impact," "we tell your brand's story," "authentic," "passionate," "crafted with love," "we're not an agency." Also banned as imagery or iconography: **chess pieces used literally, compasses, lightbulbs, gears.** This applies to icon sets, illustrations, and 404 art.

**Mission and vision statements are deliberately not set.** The brand is kept client-centric. Do not add an "our mission" section.

---

## 8. Components

All use §5 tokens exclusively.

**`Header`** — Sticky. Transparent over hero on `/`, `--c-open-board` elsewhere and on scroll. Hairline bottom border on scroll only. Lockup left, nav right. Below 768px: mark left, menu button right, full-screen overlay on `--c-ink` with `--c-open-board` links at H3. Active route: 2px `--c-emboss-link` underline, 4px offset. Focus-trapped when open; Escape closes.

**`Footer`** — `--c-ink` background. Four zones: mark plus positioning line; nav repeat; contact; legal and entity. Entity block in Plex Mono at 12px, `--c-landing-stone`. Social icons 20px, `--c-landing-stone`, `--c-clay-on-ink` on hover.

**`Button`**

| Variant | Ground | Fill | Text | Border |
|---|---|---|---|---|
| Primary | paper | `--c-ink` | `--c-open-board` | none |
| Primary | ink | `--c-open-board` | `--c-ink` | none |
| Secondary | paper | transparent | `--c-ink` | `--border` |
| Text | any | none | `--c-emboss-link` | underline 1px, 3px offset |

Padding `--s-3` `--s-5`, `--r-md`, Rethink Sans 600 at 14px. Hover: 8% darken on fill — no movement, no shadow. Focus: 2px `--c-ink` ring at 2px offset. Minimum tap target 44×44px.

**`ProjectCard`** — Image 4:3, `HypotheticalTag`, brand name, sector, practices, one-line problem. Whole card is one link. Hover: image scales 1.02 within `overflow: hidden`. Nothing else moves.

**`HypotheticalTag`** — Pill. `--c-emboss-link` text on `--c-card`, 1px `--c-emboss` border at 30% opacity, `--r-full`, Plex Mono 12px +0.16em uppercase, padding `--s-1` `--s-3`. Reads `HYPOTHETICAL`.

**Travels with the card everywhere, including Home. Not decorative; must not be removed for visual balance.**

**`DisclosureBanner`** — Full-width, above the hero on every hypothetical project page. `--c-landing-stone` background at 40% over `--c-open-board`, `--c-ink` text at 16px, padding `--s-5` desktop / `--s-4` mobile, 3px left border in `--c-emboss`.

Content: *"[Brand] is not a real company. This is a self-initiated project by Ennoia."*

Requirements: visible without scrolling on all viewports; **never collapsible, dismissible, or animated**; never below 16px; never in a muted colour. Brand name from the CMS `brand_name` field.

This exists for accuracy. Its prominence is a hard requirement, not a design preference — a studio selling verified claims cannot let a visitor believe an invented client was real.

**`ArticleCard`** — Title, standfirst, date, category, reading time. Text only in list view. Hairline separator between entries.

**`FormField`** — Label above input in Plex Mono 12px uppercase, `--c-gambit-text`. Input on `--c-card`, `--border`, `--r-sm`, padding `--s-3`, 16px Rethink Sans, min-height 48px. Focus: `--c-ink` border plus 2px ring at 2px offset. Error: `--c-error` border, message below at 14px, linked via `aria-describedby`. Real `<label>` elements always — placeholder-only labelling is not acceptable.

**`SectionKicker`** — Plex Mono eyebrow, uppercase +0.16em, `--c-gambit-text`, with a 24px `--c-emboss` rule above.

**`PageHeader`** — Kicker, H1 title, Body L standfirst at max 60ch. Padding `--s-9` top, `--s-8` bottom.

---

## 9. Pages

### 9.1 Home — `/`

| # | Section | Notes |
|---|---|---|
| H1 | Hero | Display statement, max 20 words. Text renders before any image. No video, no slideshow. Tagline as supporting line. |
| H2 | Positioning | 40–60 words at Body L, max 60ch. Draws on the locked positioning statement. |
| H3 | Selected hypotheticals | 4 `ProjectCard`s, 2×2 desktop / 1-col mobile. **Opens with a required one-line frame:** *"Self-initiated projects. The brands are invented; the problems are not."* A visitor who never leaves Home must still understand what they are seeing. |
| H4 | What we do | Four practices, one line each → `/studio` |
| H5 | How we work | Five stages, numbered, one line each → `/studio`. **No icons** — see §7 banned imagery. |
| H6 | Proof | Reversed section on `--c-ink`. The verified-naming differentiator with one worked example. |
| H7 | Sectors | Text list |
| H8 | Writing | Three most recent `ArticleCard`s |
| H9 | Close | One line plus primary button to `/contact` |

### 9.2 Hypotheticals — `/hypotheticals`

| # | Section | Notes |
|---|---|---|
| W1 | `PageHeader` | Premise in the standfirst, above any imagery |
| W2 | Explainer | 40–60 words on the working method |
| W3 | Filter | Practice and sector. Client-side, URL query param for shareable state. **Render only if ≥8 published projects** — otherwise hide the row entirely. |
| W4 | Grid | `ProjectCard`s, 2-col desktop / 1-col mobile. Ordered by `featured_order` ascending, **never by date.** Lazy-load below fold. |
| W5 | Close | Contact CTA |

**Grouping:** when `project_type: client` entries exist, render them in a separate block above hypotheticals, each under its own `SectionKicker` (`CLIENT WORK` / `HYPOTHETICALS`). Never interleaved.

### 9.3 Project detail — `/hypotheticals/[slug]`

The most important template on the site.

| # | Section | Field |
|---|---|---|
| C1 | `DisclosureBanner` | `brand_name` — renders only when `project_type: hypothetical` |
| C2 | Hero | `hero_image`, `brand_name`, `sector` |
| C3 | The brief we set ourselves | `self_set_brief` |
| C4 | The category | `category_research` — supports tables and figures |
| C5 | What we found | `findings` |
| C6 | The direction | `direction` |
| C7 | The system | `system_body` — image-heavy, full-bleed figures permitted |
| C8 | Applied | `applied_body` — gallery |
| C9 | What we'd measure | `what_we_would_measure` |
| C10 | Scope | `scope[]` |
| C11 | Next project | By `featured_order`, wrapping |

**Constraints enforced in the CMS, not left to editorial discipline:**

- No numeric performance metrics, revenue figures, testimonials, client quotes, or press mentions on any `hypothetical`. `quote` and `outcome` fields are conditionally hidden when `project_type` is `hypothetical`.
- No image may imply real retail presence or media coverage.
- **Publishing blocked unless `self_set_brief`, `category_research`, and `what_we_would_measure` are all populated.** CMS validation rule.

Prose in Rethink Sans at 16px, max 68ch. Image sections may go full-bleed.

### 9.4 Studio — `/studio`

`PageHeader`, then:

| # | Section |
|---|---|
| S1 | What Ennoia is — three sentences |
| S2 | What we do — four practices expanded |
| S3 | **How we work** — the five stages. Reserved for the named methodology once built (§14). |
| S4 | How we engage — project / retainer / sprint |
| S5 | People — founder bio |
| S6 | Sectors |
| S7 | Entity block — registered Pvt Ltd name, CIN, GSTIN, Hyderabad registered address. Plex Mono 12px. |
| S8 | Contact CTA |

S7 is small but required. For institutional and funded-startup prospects it is often the deciding element.

### 9.5 Notions — `/notions`

`PageHeader`, featured article, `ArticleCard` list reverse-chronological, category filter, pagination at 10.

**Date display is conditional.** A `show_dates` boolean in site settings controls whether dates render in list and article views. Build it; default on.

### 9.6 Article — `/notions/[slug]`

Title, standfirst, date (conditional), category, reading time (auto at 200wpm), body, author, two related articles, quiet contact CTA at foot.

Body in Rethink Sans, max 68ch, no sidebar. Supports h2/h3, pull quotes, captioned images, lists, blockquotes. **No newsletter modal or pop-up of any kind.**

### 9.7 Contact — `/contact`

`PageHeader` with low-barrier framing · form (§11) · direct email, phone, WhatsApp deep link `https://wa.me/[NUMBER]` · what happens next, three lines with response time · fit note, the work taken and not taken · studio address · social links.

The fit note should filter honestly against the anti-ICP: price-shoppers, one-off logo seekers, anyone unwilling to engage with strategy.

### 9.8 Utility

`/404` styled, linking to `/` and `/hypotheticals`. No board metaphors (§7). `/privacy` and `/terms` as CMS-editable prose.

---

## 10. Content model

| Collection | Fields |
|---|---|
| **Project** | `title`, `slug`, `brand_name`, `project_type` (`hypothetical` \| `client`), `sector` (ref), `practices` (multi-ref), `self_set_brief`, `category_research`, `findings`, `direction`, `system_body`, `applied_body`, `what_we_would_measure`, `scope[]`, `hero_image`, `gallery[]`, `featured_order`, `published`, `seo{title, description, og_image}` |
| | Conditional, `client` only: `client_name`, `year`, `outcome`, `quote{text, name, role}` |
| **Notion** | `title`, `slug`, `standfirst`, `body`, `date`, `category` (ref), `author`, `hero_image`, `featured`, `published`, `seo{}`. `reading_time` computed. |
| **Sector** | `name`, `slug`, `description` |
| **Practice** | `name`, `slug`, `one_liner`, `description`, `services[]` |
| **Person** | `name`, `role`, `bio`, `photo`, `order`, `linkedin` |
| **Site settings** | `positioning_line`, `tagline`, `email`, `phone`, `whatsapp`, `address`, `entity{name, cin, gstin}`, `socials[]`, `show_dates`, `response_time_days` |

`project_type` exists from day one so real client work can be added without a schema migration. It drives the disclosure banner, the card tag, grid grouping, and conditional field visibility.

---

## 11. Contact form

| Field | Type | Required |
|---|---|---|
| Name | text | Yes |
| Email | email | Yes |
| Company / brand | text | No |
| Phone / WhatsApp | tel | No |
| What are you trying to solve? | textarea | Yes |
| What kind of help? | multi-select | No |
| Stage | select — Pre-launch / Raised, early-stage / Scaling / Established | No |
| Indicative budget | select, with "prefer not to say" | No |
| How did you find us? | select | No |
| Consent | checkbox | Yes |

**Behaviour:** inline validation on blur, not per keystroke · honeypot plus server-side rate limiting, **no CAPTCHA** · success state renders in place restating response time, no redirect or modal · submits to `[ADDRESS]`, logs to `[SHEET/CRM]` · auto-acknowledgement to sender · server-side validation duplicates all client rules.

**DPDP Act 2023 — legal requirement:**
- Consent checkbox **unticked by default**. A pre-ticked box is non-compliant.
- Adjacent text states purpose of collection and links `/privacy`.
- Enquiry data used only to respond. No marketing list or tool without separate explicit consent.
- Retention period and erasure process documented in the privacy policy.
- No third-party tracking fires before consent.

---

## 12. Performance, accessibility, security

| Metric | Requirement |
|---|---|
| Lighthouse Performance, mobile | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| LCP, mobile 4G | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Home page weight | < 1.5MB |
| Font files, whole site | ≤ 4 (2 variable files preferred) |

**Accessibility — WCAG 2.1 AA**

- Contrast per §5.1.2. **This is where the build is most likely to fail** — the palette's mid-browns sit just under threshold.
- Visible focus on every interactive element. Never `outline: none` without a replacement.
- Full keyboard operability including mobile menu and filters. Logical tab order.
- Skip-to-content as first focusable element.
- Semantic landmarks: `header`, `nav`, `main`, `footer`.
- Real labels; errors via `aria-describedby`; `aria-live` on form success and error.
- `prefers-reduced-motion` fully respected.
- Content readable with JavaScript disabled.

**Security:** HTTPS enforced, HSTS, CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`. Form endpoint rate-limited. No secrets client-side.

**Analytics:** `[GA4 OR PLAUSIBLE — TBC]`. Events: `project_open`, `project_scroll_75`, `contact_form_submit`, `email_click`, `whatsapp_click`, `article_read_complete`. GA4 requires a consent banner and must not fire before consent.

**Browsers:** last two versions of Chrome, Safari, Firefox, Edge. iOS Safari and Chrome Android on real devices.

---

## 13. Out of scope for v1

Client portal · pricing calculator · multilingual · dark mode · newsletter platform · careers page with live listings · project PDF downloads · live chat · testimonial carousel · animated page transitions · CRM integration beyond form logging · site search

---

## 14. Assets and dependencies

**Available:**

| Asset | Notes |
|---|---|
| `ennoia-mark.svg` | 200×200 viewBox |
| `ennoia-logo-horizontal.svg` | 799×216, wordmark outlined to paths |
| `Ennoia_Brand_Kit_PRD.md` | Reference |
| Master Brand PRD | Canonical source of truth |

**Missing — blocks specific components:**

| Asset | Blocks |
|---|---|
| Stacked lockup SVG | Constrained-width layouts, social meta |
| Reversed lockup SVG | Footer, reversed sections (H6) |
| Single-colour ink lockup | Print, single-colour contexts |
| **Favicon-optimised simplified mark** | Favicon at 32px and 16px. A scaled primary will not survive — the ring and landing stone collapse. |
| Apple touch icon 180×180 PNG | iOS home screen |
| Default OG image 1200×630 | Social sharing on every page without an override |

**To be supplied:**

Registered Pvt Ltd name, CIN, GSTIN, Hyderabad registered address · contact email, phone, WhatsApp number · Instagram (`@ennoia.studio`) and LinkedIn (`linkedin.com/company/ennoiabranding`) URLs · form destination and CRM/sheet target · analytics decision and property ID · privacy policy and terms copy · all page copy · all project content.

---

## 15. Acceptance criteria

- [ ] All routes live; nav and footer correct on every page
- [ ] Every colour sourced from tokens; **zero hardcoded hex in components**
- [ ] IBM Plex Mono appears only in eyebrows, labels, data, and metadata — **never in running text**
- [ ] All text renders in Ink `#433E3F` or an approved variant; Clay and Landing Stone never used as text
- [ ] Contrast verified against §5.1.2 on every text/background pair actually shipped
- [ ] ≤4 font files, all self-hosted WOFF2, no external font requests in the network tab
- [ ] `ennoiabranding.in` 301s to `.com`; canonical, `og:url`, `twitter:url` correct on every route including CMS pages
- [ ] Mark never rendered below 24px; full lockup never below 120px wide; 1× glyph clearspace respected
- [ ] Mark never stretched, recoloured, shadowed, or gradient-filled
- [ ] **§5.6.8 grep returns zero matches** — no perspective, 3D rotation, skew, backdrop-filter, drop-shadow, text-shadow, gradient, blend mode, or blur anywhere in `src/`
- [ ] Every `box-shadow` in the codebase has blur `0` and spread `0`
- [ ] `package.json` contains no three.js, Spline, Lottie, Lenis, Locomotive, or GSAP; Framer Motion uses `tween` only, never `spring`
- [ ] No easing curve has a Y control point outside 0–1 — no overshoot or bounce anywhere
- [ ] No transition exceeds 400ms
- [ ] The logomark is static on every page — no draw-on, rotation, pulse, or animated favicon
- [ ] No scroll-jacking, smooth-scroll library, pinned section, or scroll-linked timeline
- [ ] Every page loads correctly with `prefers-reduced-motion: reduce` — **no element left invisible** because its reveal trigger was suppressed
- [ ] `DisclosureBanner` above the fold on every hypothetical, on every viewport, not dismissible
- [ ] `HypotheticalTag` on every project card everywhere it appears, including Home
- [ ] CMS blocks publishing a project missing brief, category research, or measurement sections
- [ ] `quote` and `outcome` hidden when `project_type` is `hypothetical`
- [ ] No fabricated metric, testimonial, quote, or press mention anywhere
- [ ] No chess pieces, compasses, lightbulbs, or gears in any icon, illustration, favicon, 404 art, empty state, or social image
- [ ] The glyph is never extracted from the mark as a decorative motif
- [ ] Charts use flat fills only, ≤5 series, and remain legible converted to greyscale
- [ ] Form submits, logs, auto-replies, rejects spam; consent unticked by default; privacy policy live
- [ ] Lighthouse ≥ 90 Performance / ≥ 95 Accessibility, mobile
- [ ] Keyboard-only navigation of the whole site including menu and filters
- [ ] Tested on real iOS and real Android devices
- [ ] Functional under `prefers-reduced-motion: reduce`
- [ ] Every image has meaningful or explicitly empty alt text
- [ ] `/404` styled; sitemap generated and submitted; analytics firing

---

## 16. Open decisions

**Q1 — Section names.** Confirm **Hypotheticals** and **Notions**. Both are structural in this spec; changing either is a global find-and-replace plus route change. *Alternative worth considering for Notions: "The Board" welds to the locked vocabulary, but adds a second coined term to a four-item nav and slightly strains clarity-over-cleverness. My lean is to keep Notions — the etymological tie to* ennoia *is real and it reads plainly.*

**Q2 — Accessible colour variants.** Sign off on the three web-only derivatives in §5.1.2 (`#746C60`, `#87684F`, `#D0A478`). They are digital-only, never appear in print or the mark, and exist because Gambit and Emboss land at 4.22 and 4.14 against a 4.5 requirement. The alternative — restricting both to 24px+ — is legitimate but constrains captions, metadata, and form labels significantly.

**Q3 — Missing logo variants.** The favicon-optimised simplified mark is the urgent one. At 32px the embossed ring at 1.2% D and the landing stone at 4.5% D will not resolve. This needs to be drawn as a distinct simplified asset, not exported small.

**Q4 — Tagline lock.** "We find the move others miss." is still marked pending. It appears in the hero, the footer, and social meta. Not a build blocker, but it should be settled before copy is written twice.

**Q5 — Methodology.** The Studio S3 slot is reserved for the named method ("The Board Read → The Move"). Until it exists, S3 uses the five-stage process. Confirm that's acceptable for launch, or hold the section.

**Q6 — Analytics platform.** GA4 requires a consent banner and cookie handling; Plausible does not. Affects the build.

**Q7 — Who builds it.** In-house or outsourced? Determines CMS choice between Sanity and Payload.
