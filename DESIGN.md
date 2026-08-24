---
name: Costa & Souza Especialistas em Vistos Americanos
description: Boutique US-visa consultancy site — consulate-navy authority warmed by boarding-gold accents, Fraunces serif editorial voice, and real family photography.
colors:
  consulate-navy-deep: "oklch(0.22 0.055 260)"
  consulate-navy: "oklch(0.3 0.07 260)"
  boarding-gold: "oklch(0.78 0.11 82)"
  boarding-gold-soft: "oklch(0.86 0.07 85)"
  champagne: "oklch(0.97 0.004 260)"
  cream: "oklch(0.995 0.001 260)"
  card-white: "oklch(1 0 0)"
  ink: "oklch(0.18 0.02 260)"
  border-sand: "oklch(0.9 0.015 85)"
  muted-sand: "oklch(0.95 0.015 85)"
  slate-muted: "oklch(0.45 0.02 260)"
  alert-red: "oklch(0.55 0.2 27)"
typography:
  display:
    fontFamily: "Fraunces, Playfair Display, ui-serif, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, Playfair Display, ui-serif, Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, Playfair Display, ui-serif, Georgia, serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Inter, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.25em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  container-max: "1440px"
  container-px-mobile: "1.5rem"
  container-px-desktop: "2.5rem"
  section-y-mobile: "6rem"
  section-y-desktop: "8rem"
  gap-md: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.boarding-gold}"
    textColor: "{colors.consulate-navy-deep}"
    rounded: "{rounded.full}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.boarding-gold-soft}"
    textColor: "{colors.consulate-navy-deep}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.full}"
    padding: "16px 28px"
  card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.consulate-navy-deep}"
    rounded: "{rounded.2xl}"
    padding: "32px"
  icon-badge:
    backgroundColor: "{colors.consulate-navy-deep}"
    textColor: "{colors.boarding-gold}"
    rounded: "{rounded.full}"
    size: "44px"
---

# Design System: Costa & Souza Especialistas em Vistos Americanos

## Overview

**Creative North Star: "The Private Consulate Lounge"**

Costa & Souza sells reassurance for one of the most anxious purchases a family makes: the right to enter the United States. The system's job is to feel like stepping out of a government waiting room and into a private advisory lounge — the same authority and gravity, none of the cold bureaucracy. Consulate Navy carries that authority: it is the dominant surface across the hero, the process timeline, and every high-stakes moment (the WhatsApp specialist picker, the final CTA). Boarding Gold is rationed against it — an eyebrow label, a badge, a CTA, an italic word — so that when it appears, it reads as a moment of warmth and forward motion rather than decoration. Cream and Champagne hold the in-between, editorial-magazine-like sections (services, guides, FAQ) where the navy would be too heavy to sustain.

The voice is warm and reassuring first, with calm authority, premium confidence, and aspirational emotion all present but none allowed to dominate — the same balance the copy strikes between "we are serious professionals" and "we are the people who get your family to the theme park." Fraunces' high-contrast serif with true italics does the emotional work (softening headlines with an italicized phrase — "a viagem dos sonhos", "seriedade e compromisso") while Inter carries the procedural, trustworthy detail (FAQ answers, document lists, cost tables) in a plain, legible voice. Real client photography — a family at the consulate, a castle at dusk, a phone full of WhatsApp screenshots — keeps the system anchored in lived experience rather than stock-photo travel fantasy.

**Confirmed anti-reference:** this system must never drift toward a government portal, a generic law-firm template, or a cold SaaS dashboard. Sharp corners, gray neutral shadows, dense bureaucratic tables without warmth, and monospace/utilitarian type are all signals of that failure mode and are excluded on sight.

**Key Characteristics:**
- Consulate Navy as the dominant, authority-carrying surface; Boarding Gold rationed to eyebrows, badges, CTAs, and single italic words.
- Fraunces serif display type with italic emphasis phrases, paired with plain-spoken Inter for procedural content.
- Flat, bordered surfaces at rest; depth only appears as a large, soft, tinted glow on hover or emphasis — never a neutral gray shadow.
- Every clickable CTA is a full pill or a perfect circle; content containers are generously rounded (16px); nothing in the system is a sharp rectangle.
- Real family/travel photography, cinematic navy gradient overlays, and a legal disclaimer that is treated as a first-class trust signal, not fine print.

## Colors

The palette is a two-color system — Consulate Navy and Boarding Gold — laid over near-white paper tones, with Fraunces-serif italics doing double duty as a third "color" of emphasis.

### Primary
- **Consulate Navy Deep** (`oklch(0.22 0.055 260)`): the system's dominant surface. Hero background, Process section, footer, WhatsApp specialist modal, every "we take this seriously" moment. Also doubles as the primary text color on cream backgrounds (via `--foreground`/`--ink`).
- **Consulate Navy** (`oklch(0.3 0.07 260)`): a lighter step of the same hue, used only inside the navy-deep gradient (`bg-navy-gradient`) to add depth to large navy fields — never used standalone as a flat fill.

### Secondary
- **Boarding Gold** (`oklch(0.78 0.11 82)`): the accent of forward motion — every primary CTA, every eyebrow label, every icon badge accent, every italicized emphasis word in a headline. Rationed deliberately: it should read as rare and earned, never as a background color.
- **Boarding Gold Soft** (`oklch(0.86 0.07 85)`): the hover/lighter step of Boarding Gold, and the color used for italic emphasis phrases set against the dark navy hero (`text-gold-soft`) where full-saturation gold would be too loud against a dark ground.

### Neutral
- **Cream** (`oklch(0.995 0.001 260)`): the default page background — a warm near-white, not a stark white.
- **Champagne** (`oklch(0.97 0.004 260)`): a slightly deeper warm off-white used to alternate section backgrounds (Guides, Why Us, Comparison's "before" panel) so cream sections don't run together edge-to-edge.
- **Card White** (`oklch(1 0 0)`): true white, reserved specifically for card surfaces sitting on cream/champagne (Services cards, Testimonials cards) so they lift slightly off the warmer page background.
- **Ink** (`oklch(0.18 0.02 260)`): primary body text color on light backgrounds — a near-black with the same faint blue cast as Consulate Navy, keeping text and brand navy visually related rather than a generic gray.
- **Border Sand** (`oklch(0.9 0.015 85)`): the default hairline border/divider color on light surfaces (tables, dividers, FAQ accordion rules).
- **Muted Sand** (`oklch(0.95 0.015 85)`) / **Slate Muted** (`oklch(0.45 0.02 260)`): background/foreground pair for de-emphasized UI (form field chrome, muted body copy via `text-muted-foreground`).
- **Alert Red** (`oklch(0.55 0.2 27)`): reserved for the shadcn `destructive` role; in practice, warning bullets (denied-visa risk lists) use a plain small red dot rather than this token — see Do's and Don'ts.

### Named Rules
**The Rationed Gold Rule.** Boarding Gold never fills a large surface. It lives in eyebrow labels, icon-badge fills, CTA fills, thin borders (`gold/10`–`gold/40`), and single italicized words. If gold is covering more than a button or a badge, it has drifted out of system.

**The Whisper Border Rule.** Borders on light surfaces are either Border Sand or Consulate Navy Deep at 10% opacity (`border-navy-deep/10`); borders on dark surfaces are Boarding Gold at 10–30% opacity (`border-gold/10`–`/30`). No pure black, pure white, or neutral gray border ever appears.

## Typography

**Display/Headline Font:** Fraunces (with Playfair Display, ui-serif, Georgia, serif as fallbacks) — loaded from Google Fonts across its full optical/italic range (`ital,wght@0,300..900;1,300..900`).
**Body Font:** Inter (with Manrope, ui-sans-serif, system-ui, sans-serif as fallbacks), weights 300–700.

**Character:** Fraunces' high-contrast strokes and genuine italics give every headline a moment of editorial warmth against Inter's plain, procedural clarity — the pairing is what lets the same page hold "a viagem dos sonhos começa aqui" and a DS-160 cost table without either feeling out of place.

### Hierarchy
- **Display** (weight 400, `text-4xl` → `text-7xl` / 2.25rem–4.5rem, line-height 1.15): hero H1 only. Always Fraunces, always includes one italicized line or phrase in Boarding Gold Soft.
- **Headline** (weight 400, `text-3xl` → `text-5xl` / 1.875rem–3rem, line-height tight): section H2s. Convention: a short eyebrow label above (`— Section Name`, uppercase, Boarding Gold, tracked +0.25em) and one italicized word or clause inside the headline itself.
- **Title** (weight 400, `text-xl`/`text-2xl` / 1.25–1.5rem): card titles, step titles, FAQ questions — still Fraunces, never Inter.
- **Body** (weight 400, `text-base`/`text-lg` / 1–1.125rem, line-height relaxed): paragraph copy, FAQ answers, table cells. Inter, `text-muted-foreground` for secondary/supporting copy.
- **Label** (weight 400–600, `text-xs`, letter-spacing 0.25em, uppercase): eyebrow section labels and stat/nav microcopy. Nav links step up to `font-medium` at `text-sm` with no uppercase treatment.

### Named Rules
**The Em-Dash Eyebrow Rule.** Every major section opens with a small uppercase Inter label prefixed by an em dash (`— Tipos de Visto`, `— Como Funciona`), set in Boarding Gold at 0.25em tracking. This is the system's consistent "you are entering a new topic" signal — do not replace it with a plain label, badge, or icon.

**The One Italic Rule.** Every H1/H2 carries exactly one italicized clause or word (in Fraunces, colored Boarding Gold Soft on dark backgrounds or styled `italic` inline on light backgrounds). Headlines with zero or multiple italic passages both break the rhythm.

## Layout

The page is a stack of full-bleed sections, each centered on a `max-w-[1440px]` container with `px-6` (24px) on mobile widening to `lg:px-10` (40px) on desktop — this container/padding pair is constant across the homepage and every landing page and should not be varied per-section. Vertical rhythm between sections is heavy and consistent: `py-24` (96px) on mobile, `lg:py-32` (128px) on desktop, which is what gives the site its unhurried, editorial pace rather than a dense marketing-page feel.

Within sections, content grids step from 1 column on mobile to 2–5 columns at `sm`/`lg` breakpoints depending on content type (2-col comparison, 4-col trust stats, 5-col process steps, 2–4-col service/guide cards), always with a `gap-6` (24px) or tighter rhythm. Two-column "story" layouts (Problem/Solution, DreamInNumbers) alternate text and image/card panels and animate in from opposite horizontal directions.

The Hero is the one deliberate departure from the grid: `min-h-[120svh]` (taller than the viewport) with content pinned to the bottom via `flex flex-col justify-end`, so the parallax image has room to breathe above the headline. Parallax and image-scale-on-scroll are desktop-only (`useIsMobile` gates them to fixed values on mobile) — a deliberate simplification for touch scroll performance, not an oversight.

Landing pages (`LPPage.tsx`, all 14 `/visto-*`, `/ds-160`, `/documentos-*`, etc. routes) reuse the homepage's Header/Footer/WhatsApp chrome but narrow their content column to `max-w-3xl` for everything below the hero/trust-stats band — tables, step lists, document checklists, and FAQ read as long-form articles, not a repeated marketing scroll. Only the hero and trust-stats strip keep the full `max-w-[1440px]` width.

## Elevation & Depth

Flat at rest, ambient glow on interaction — confirmed. Surfaces carry a border, not a resting shadow. Depth is introduced only as a response to state: hover on a card, a primary CTA at rest, or a floating action button.

### Shadow Vocabulary
- **Structural hover lift** (`box-shadow: 0 20px 60px -30px var(--navy-deep)`): large, heavily-negative-spread, low-opacity navy glow under a card on hover (Services, GuidesHub cards), paired with `-translate-y-1`. Reads as the card lifting off the page, not a hard-edged shadow.
- **Gold interactive glow** (`box-shadow: 0 10px 30px -5px var(--gold)` / Tailwind `shadow-gold/20`–`/30`): sits under every primary CTA at rest and intensifies on hover — this is what marks an element as "the thing to click," distinct from the navy structural glow used on passive cards.
- **Dark panel elevation** (`shadow-xl shadow-navy-deep/20`): used sparingly for a single emphasized panel per section (the "with us" side of the Comparison block) to visually outrank its neutral sibling.

### Named Rules
**The Ambient Glow Rule.** No neutral gray shadow ever appears. Every shadow is tinted — navy for structural/passive elevation, gold for interactive/action elevation — and always large, soft, and heavily negative-spread rather than tight and hard-edged.

## Shapes

Two form languages coexist by role. **Anything clickable that carries a call to action is a full pill (`rounded-full`) or a perfect circle** — every button, the WhatsApp float, icon badges, carousel dot indicators, pagination arrows. **Anything that contains content is generously rounded at 16px (`rounded-2xl`)** — cards, images, the WhatsApp modal, inline CTA banners, tables. shadcn's own primitives (Dialog default corners, Input, the base `--radius` scale) sit at a tighter 8px (`rounded-lg`) and are only visible where the system hasn't already overridden them with a bespoke `rounded-2xl`/`rounded-full` treatment — see Do's and Don'ts.

### Named Rules
**The Pill-or-Circle Rule.** No clickable CTA element is ever a squared or gently-rounded rectangle; it is either a full pill or a perfect circle, always.

## Components

Buttons, cards, and inputs all read as **soft-edged and unhurried**: generous radii, gentle scale transitions (never abrupt), and glows instead of hard shadows — nothing in the system snaps or feels mechanical.

### Buttons
- **Shape:** full pill (`rounded-full`, 9999px) for every marketing CTA, from the header's "Fale com um Especialista" to inline FAQ/table CTAs. shadcn's `button.tsx` primitive defaults to `rounded-md` (6px) but is not used for any visible marketing CTA in the audited pages — treat the pill as the system convention, the shadcn default as a spare primitive.
- **Primary:** Boarding Gold fill, Consulate Navy Deep text, `px-7 py-4` (28px/16px), `shadow-lg shadow-gold/20` at rest, gold-soft fill + deeper shadow + `scale-[1.03]` on hover, `scale-[0.98]` on active. Always paired with a `MessageCircle` icon, always sends to WhatsApp.
- **Secondary (on dark):** transparent fill, `border border-cream/30`, cream text, `bg-cream/5` wash, hover brightens border to `cream/60` and background to `cream/10`. Same pill shape and scale transitions as primary.
- **Secondary (on light):** transparent fill, `border border-navy-deep` (solid, not translucent), navy text, hover **inverts** to navy fill + cream text (Packages plan CTAs) — the one place the system uses a full color-swap hover instead of a lighten/glow.

### Cards / Containers
- **Corner Style:** `rounded-2xl` (16px), no exceptions among marketing cards.
- **Background:** Card White on Cream/Champagne page backgrounds (Services, Testimonials); Cream at 3% opacity over Navy Deep for dark-section cards (Process steps, Solution points) — never a flat gray card.
- **Shadow Strategy:** none at rest; Structural hover lift on interactive cards (Services, GuidesHub); static (no hover) for display-only cards (Process steps, Testimonials).
- **Border:** Border Sand or `border-navy-deep/10` on light cards; `border-gold/10`–`/30` on dark cards.
- **Internal Padding:** `p-6`–`p-8` (24–32px); icon badges and eyebrow labels sit inside this padding, never touching the card edge.

### Inputs / Fields
- **Style:** the marketing contact form (`ContactCTA.tsx`) uses **bespoke dark-glass fields**, not the shadcn `Input` primitive: `bg-navy-deep/40`, `border-cream/15`, `rounded-lg` (8px, not the pill/2xl convention — inputs are the one component category that stays at the tighter shadcn radius), cream text, cream/40 placeholder.
- **Focus:** border shifts to solid Boarding Gold (`focus:border-gold`), no ring/glow — a quieter focus treatment than the button glows.
- **Error/Disabled:** validation is handled via Zod + toast (Sonner), not inline field error states — there is no established visual error state for individual fields yet.

### Navigation
- **Header:** fixed, transparent over the hero until `scrollY > 24`, then crossfades to `bg-navy-deep/95` with backdrop blur and a gold-tinted bottom border/shadow. Nav links are Inter `text-sm font-medium`, cream at 85% opacity, gold on hover — no underline, no active-state indicator beyond the color shift. Mobile collapses to a full-width navy dropdown panel with the same link list plus the primary CTA repeated at the bottom.
- **Footer:** always Consulate Navy Deep, gold eyebrow labels per column, cream/80 body links that go to full gold on hover. The legal disclaimer sits in its own hairline-bordered strip below the link grid — treated as a permanent, visible trust signal, not buried fine print.

### WhatsApp Float & Modal (signature component)
The floating WhatsApp button (`WhatsAppFloat.tsx`) is the site's one persistent, always-visible action: a gold circle, fixed bottom-right, with a continuous `animate-ping` gold ring at 60% opacity signaling "this is alive and waiting." Clicking it (or any other WhatsApp CTA site-wide) opens a shared modal (`WhatsAppModal.tsx`) — not a raw `wa.me` link — styled as a small navy "lounge": two specialist cards (photo, name, role) that each deep-link to that specialist's own WhatsApp number. This modal is the system's most literal expression of the North Star: a private room where you pick the person you're about to talk to, not a chat widget.

### Tables (landing-page signature pattern)
Quick-fact, cost, and timeline tables on landing pages share one treatment: `rounded-2xl` container with a Border Sand outline, a Consulate Navy Deep caption bar in Fraunces when titled, and zebra striping between Cream and `navy-deep/[0.03]` rows rather than a hard gray stripe — keeping even a comparison table inside the warm palette instead of reading as a generic data table.

## Do's and Don'ts

### Do:
- **Do** ration Boarding Gold to eyebrows, CTAs, icon-badge fills, thin borders, and single italic words — never a large fill.
- **Do** give every H1/H2 exactly one italicized Fraunces phrase and, for H2s, an em-dash eyebrow label above it.
- **Do** keep clickable CTAs as full pills or perfect circles, and content containers at `rounded-2xl` (16px).
- **Do** tint every shadow — navy for passive/structural elevation, gold for interactive/action elevation — large, soft, and heavily negative-spread.
- **Do** route every "talk to us" action through the shared WhatsAppModal specialist picker, not a bare `wa.me` link, so the "choose your specialist" moment stays consistent site-wide.
- **Do** keep the legal/no-guarantee disclaimer visible in the footer of every page (it is both a compliance requirement and a trust signal per [[PRODUCT.md]]'s hard constraint against implying guaranteed approval).
- **Do** hold landing-page long-form content (tables, steps, documents, FAQ) to a `max-w-3xl` column even though the hero/trust band stays full-width.

### Don't:
- **Don't** use a neutral gray shadow, border, or background anywhere — every shadow and border in this system is tinted navy, gold, or warm sand.
- **Don't** let gold cover a large surface (a full section background, a large card fill) — it stops reading as an accent the moment it does.
- **Don't** use a sharp or gently-rounded rectangle for a clickable CTA — buttons are pills, icon targets are circles.
- **Don't** default to the shadcn `Button`/`Input` primitives' native `rounded-md` styling for visible marketing surfaces; the pill/dark-glass conventions above are the system's actual voice, the shadcn defaults are spare unstyled primitives.
- **Don't** drift toward a government-portal, generic law-firm, or cold SaaS-dashboard look — no monospace type, no dense ungenerous tables, no neutral-gray UI chrome.
- **Don't** run the hero parallax/scale-on-scroll effect on mobile — it is deliberately disabled below the `md` breakpoint for scroll performance, not an inconsistency to "fix."
