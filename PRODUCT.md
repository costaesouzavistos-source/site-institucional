# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Brazilian individuals and families applying for US visas — tourism/business (B1/B2), student (F1), and exchange (J1) — including applicants with a prior visa denial (214(b)) who need a reversal strategy, and applicants who are already in the United States mid-process. They come looking for done-for-you guidance through the entire process: profile analysis, the DS-160 form, document preparation, interview simulation, and travel-day support.

## Product Purpose

Costa & Souza is a boutique US visa consultancy. It walks each client through diagnosis → DS-160 → document dossier → mock interviews → embassy day, with the same consultant from first contact to approval (and, for Premium clients, a partner lawyer for strategy). The site's job is to build trust with an anxious, high-stakes audience, present the three service tiers, and route qualified leads into a WhatsApp conversation — currently the sole conversion and communication channel.

## Positioning

"Seriedade e compromisso" — a personalized strategy per case (no generic templates), one dedicated consultant end to end (no bots, no outsourcing), support that follows the client physically in Brazil and continues remotely once they've traveled to the US, and a stated track record of +16,300 visas guided and approved. Physically based in Anápolis, GO, but serves clients remotely nationwide.

## Operating Context

- WhatsApp is the entire conversion and communication funnel today (`WhatsAppModalContext`, floating WhatsApp CTA on every section). There is no other lead-capture mechanism live yet.
- Acquisition is organic-search-first: each route targets one real visa-process query (DS-160, document requirements, cost, renewal, denial/214(b), children, students, family, Anápolis-local) rather than funneling everything through one generic page.
- Three tiers: **Essencial**, **Completo** (marked "mais escolhido"), **Premium** (concierge, adds a partner lawyer). Pricing is never published on-site ("Consulte valores") — price is always disclosed in the WhatsApp conversation.

## Capabilities and Constraints

- **Hard constraint: never imply guaranteed visa approval.** The outcome is a US government decision the consultancy does not control. Marketing may cite track record and process quality, never a promised result.
- Lead handling is WhatsApp-redirect only; there is no backend lead storage or CRM webhook yet. `docs/INFRAESTRUTURA.md` documents a planned `/api/lead` (Zod validation → CRM/Zapier), Turnstile spam protection, and GA4/GTM/Meta Pixel — none of these are wired up yet; treat them as roadmap, not current capability.
- Deploy target is Cloudflare Pages/Workers via Nitro (TanStack Start build); the exact build-output directory is still unconfirmed per the infra doc.

## Brand Commitments

- Legal/marketing name: **Costa & Souza Especialistas em Vistos Americanos**.
- Based in Anápolis, GO, Brasil; contact phone +55 62 99285-6373.
- Two named specialists appear by name and photo: Lucas Philipe and Jacqueline Costa.

## Evidence on Hand

- **"+16.300 vistos acompanhados e aprovados"** is the headline proof point, reused across Hero, AboutTeam, and the LocalBusiness schema — treat as the one load-bearing stat.
- Team bios in `AboutTeam.tsx` (years of experience, education) are marked `PLACEHOLDER` in source and are confirmed still provisional, not final client data. Do not extend, round up, or invent further credentials for Lucas Philipe or Jacqueline Costa until the client supplies real data.
- `Testimonials.tsx` exists with client quotes already in place — real evidence to preserve, not a section to pad with invented testimonials.
- `public/images/` holds raw client-provided family/travel photos (HEIC originals plus converted PNG/JPEG), not stock photography — future work should keep sourcing real client photos rather than substituting stock.

## Product Principles

1. Never imply guaranteed approval — always frame around preparation quality and track record, never outcome.
2. One dedicated consultant per case, start to finish, is the core service promise; future features (ticketing, round-robin routing, chatbots) must not fragment that continuity.
3. WhatsApp is the trust-building conversion surface; new capabilities (forms, backend lead capture) should feed into or sit alongside the WhatsApp conversation, not replace it.
4. Content stays SEO-first, one real search query per page; new pages should extend that keyword-per-route pattern rather than consolidating into fewer generic pages.
5. Client-provided proof (numbers, bios, photos) is real but partially unconfirmed — represent placeholders as placeholders rather than smoothing them into confident copy.
