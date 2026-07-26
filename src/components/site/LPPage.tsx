import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactCTA } from "@/components/site/ContactCTA";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { WhatsAppModal } from "@/components/site/WhatsAppModal";
import { WhatsAppModalProvider } from "@/contexts/WhatsAppModalContext";
import { Toaster } from "sonner";
import { motion } from "motion/react";
import { MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

export interface LPConfig {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  canonical: string;
  schemaName?: string;
  schemaDescription?: string;
  telephone?: string;

  heroTitle: string;
  heroHighlight?: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;

  problemTitle: string;
  problemPoints: string[];
  problemImage?: string;
  problemImageAlt?: string;

  solutionTitle: string;
  solutionPoints: string[];

  trustTitle: string;
  trustStats: { value: string; label: string }[];

  ctaTitle: string;
  ctaSubtitle: string;

  faqs: { q: string; a: string }[];

  lastUpdated?: string;
  summary?: string;

  quickTable?: { title: string; rows: { label: string; value: string }[] };

  steps?: { title: string; description: string }[];

  costTitle?: string;
  costItems?: { label: string; value: string; note?: string }[];
  costNote?: string;

  timelineTitle?: string;
  timelineItems?: { label: string; value: string }[];
  timelineNote?: string;

  documentsTitle?: string;
  documents?: string[];

  mistakesTitle?: string;
  commonMistakes?: string[];

  inlineCtaAfterTable?: { text: string; buttonText?: string };
  inlineCtaAfterCost?: { text: string; buttonText?: string };

  reviewedBy?: { name: string; role: string; credential?: string; photo?: string };

  relatedLinks?: { label: string; href: string }[];
}

const CORE_CLUSTER: { label: string; href: string; slug: string }[] = [
  { label: "Assessoria de visto americano", href: "/assessoria-visto-americano", slug: "assessoria-visto-americano" },
  { label: "Como tirar o visto americano", href: "/como-tirar-visto-americano", slug: "como-tirar-visto-americano" },
  { label: "Renovar o visto americano", href: "/renovar-visto-americano", slug: "renovar-visto-americano" },
  { label: "O que é o DS-160", href: "/ds-160", slug: "ds-160" },
  { label: "Quanto custa o visto americano", href: "/quanto-custa-visto-americano", slug: "quanto-custa-visto-americano" },
  { label: "Documentos necessários para o visto", href: "/documentos-visto-americano", slug: "documentos-visto-americano" },
];

function buildLocalBusinessSchema(cfg: LPConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: cfg.schemaName ?? "Costa & Souza Especialistas em Vistos Americanos",
    description:
      cfg.schemaDescription ??
      "Especialistas em vistos americanos (B1/B2, F1, J1, negócios e renovação). Sede em Anápolis - GO, atendimento remoto em todo o Brasil.",
    areaServed: "BR",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anápolis",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    telephone: cfg.telephone ?? "+55-62-99285-6373",
    url: cfg.canonical,
    priceRange: "$$",
  };
}

function buildFaqSchema(config: LPConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function buildHowToSchema(config: LPConfig) {
  if (!config.steps || config.steps.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: config.title,
    step: config.steps.map((s) => ({
      "@type": "HowToStep",
      name: s.title,
      text: s.description,
    })),
  };
}

export function createLPRoute(config: LPConfig) {
  const schemas = [
    buildLocalBusinessSchema(config),
    buildFaqSchema(config),
    buildHowToSchema(config),
  ].filter(Boolean);

  return createFileRoute(`/${config.slug}`)({
    head: () => ({
      meta: [
        { title: config.title },
        { name: "description", content: config.description },
        { name: "keywords", content: config.keywords },
        { property: "og:title", content: config.title },
        { property: "og:description", content: config.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: config.canonical },
        { property: "og:image", content: config.ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: config.ogImage },
      ],
      links: [
        { rel: "canonical", href: config.canonical },
        { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      ],
      scripts: schemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    }),
    component: () => <LPPage config={config} />,
  });
}

function LPPage({ config }: { config: LPConfig }) {
  return (
    <WhatsAppModalProvider>
      <div className="bg-cream text-navy-deep">
        <Header />
        <main>
          <LPHero config={config} />
          <LPTrust config={config} />
          <LPSummary config={config} />
          <LPQuickTable config={config} />
          {config.inlineCtaAfterTable && <LPInlineCTA {...config.inlineCtaAfterTable} />}
          <LPSteps config={config} />
          <LPCost config={config} />
          {config.inlineCtaAfterCost && <LPInlineCTA {...config.inlineCtaAfterCost} />}
          <LPTimeline config={config} />
          <LPDocuments config={config} />
          <LPMistakes config={config} />
          <LPProblem config={config} />
          <LPSolution config={config} />
          <LPRelatedLinks config={config} />
          <LPReviewedBy config={config} />
          <LPFAQ config={config} />
          <ContactCTA />
        </main>
        <Footer />
        <WhatsAppFloat />
        <WhatsAppModal />
        <Toaster position="top-center" richColors />
      </div>
    </WhatsAppModalProvider>
  );
}

function LPHero({ config }: { config: LPConfig }) {
  const { open: openWhatsAppModal } = useWhatsAppModal();

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy-deep pt-24">
      <div className="absolute inset-0">
        <img
          src={config.heroImage}
          alt={config.heroImageAlt}
          className="h-full w-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Costa & Souza
            </div>
            <h1 className="font-serif text-4xl leading-[1.1] text-cream text-balance sm:text-5xl lg:text-6xl">
              {config.heroTitle}{" "}
              {config.heroHighlight && (
                <span className="italic text-gold-soft">{config.heroHighlight}</span>
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80 sm:text-xl">
              {config.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openWhatsAppModal}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy-deep shadow-lg shadow-gold/20 transition-all hover:bg-gold-soft hover:shadow-gold/30"
              >
                <MessageCircle className="h-4 w-4" />
                Falar com um Especialista
              </button>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold text-cream transition-all hover:border-gold hover:text-gold"
              >
                Ver como funciona
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LPTrust({ config }: { config: LPConfig }) {
  return (
    <section className="border-y border-gold/10 bg-navy-deep py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-2xl text-cream text-balance sm:text-3xl">
            {config.trustTitle}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {config.trustStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-3xl text-gold sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-cream/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LPSummary({ config }: { config: LPConfig }) {
  if (!config.summary) return null;
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="text-lg leading-relaxed text-muted-foreground">{config.summary}</p>
        {config.lastUpdated && (
          <p className="mt-4 text-xs uppercase tracking-wider text-gold">
            Atualizado em {config.lastUpdated}
          </p>
        )}
      </div>
    </section>
  );
}

function LPQuickTable({ config }: { config: LPConfig }) {
  if (!config.quickTable) return null;
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <caption className="bg-navy-deep px-5 py-3 text-left font-serif text-base text-cream">
              {config.quickTable.title}
            </caption>
            <tbody className="divide-y divide-border">
              {config.quickTable.rows.map((row, i) => (
                <tr key={i} className="odd:bg-cream even:bg-navy-deep/[0.03]">
                  <th scope="row" className="w-1/2 px-5 py-3 font-medium text-navy-deep">
                    {row.label}
                  </th>
                  <td className="px-5 py-3 text-muted-foreground">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function LPSteps({ config }: { config: LPConfig }) {
  if (!config.steps || config.steps.length === 0) return null;
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-serif text-3xl leading-tight text-navy-deep text-balance sm:text-4xl">
          Passo a passo
        </h2>
        <ol className="mt-8 space-y-6">
          {config.steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-deep font-serif text-gold">
                {i + 1}
              </span>
              <div>
                <p className="font-serif text-lg text-navy-deep">{step.title}</p>
                <p className="mt-1 leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LPCost({ config }: { config: LPConfig }) {
  if (!config.costItems || config.costItems.length === 0) return null;
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-serif text-3xl leading-tight text-navy-deep text-balance sm:text-4xl">
          {config.costTitle ?? "Quanto custa"}
        </h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-border">
              {config.costItems.map((item, i) => (
                <tr key={i} className="odd:bg-cream even:bg-navy-deep/[0.03]">
                  <th scope="row" className="w-1/2 px-5 py-3 font-medium text-navy-deep">
                    {item.label}
                    {item.note && (
                      <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                        {item.note}
                      </span>
                    )}
                  </th>
                  <td className="px-5 py-3 text-gold">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {config.costNote && (
          <p className="mt-4 text-sm text-muted-foreground">{config.costNote}</p>
        )}
      </div>
    </section>
  );
}

function LPTimeline({ config }: { config: LPConfig }) {
  if (!config.timelineItems || config.timelineItems.length === 0) return null;
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-serif text-3xl leading-tight text-navy-deep text-balance sm:text-4xl">
          {config.timelineTitle ?? "Quanto demora"}
        </h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-border">
              {config.timelineItems.map((item, i) => (
                <tr key={i} className="odd:bg-cream even:bg-navy-deep/[0.03]">
                  <th scope="row" className="w-1/2 px-5 py-3 font-medium text-navy-deep">
                    {item.label}
                  </th>
                  <td className="px-5 py-3 text-muted-foreground">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {config.timelineNote && (
          <p className="mt-4 text-sm text-muted-foreground">{config.timelineNote}</p>
        )}
      </div>
    </section>
  );
}

function LPDocuments({ config }: { config: LPConfig }) {
  if (!config.documents || config.documents.length === 0) return null;
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-serif text-3xl leading-tight text-navy-deep text-balance sm:text-4xl">
          {config.documentsTitle ?? "Documentos necessários"}
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {config.documents.map((doc, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {doc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LPMistakes({ config }: { config: LPConfig }) {
  if (!config.commonMistakes || config.commonMistakes.length === 0) return null;
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-serif text-3xl leading-tight text-navy-deep text-balance sm:text-4xl">
          {config.mistakesTitle ?? "Erros comuns"}
        </h2>
        <ul className="mt-8 space-y-4">
          {config.commonMistakes.map((mistake, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
              {mistake}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LPInlineCTA({ text, buttonText }: { text: string; buttonText?: string }) {
  const { open: openWhatsAppModal } = useWhatsAppModal();
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/20 bg-navy-deep/[0.03] px-6 py-5 sm:flex-row">
          <p className="text-sm font-medium text-navy-deep">{text}</p>
          <button
            onClick={openWhatsAppModal}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-soft"
          >
            <MessageCircle className="h-4 w-4" />
            {buttonText ?? "Falar com um especialista"}
          </button>
        </div>
      </div>
    </section>
  );
}

function LPReviewedBy({ config }: { config: LPConfig }) {
  if (!config.reviewedBy) return null;
  const { name, role, credential, photo } = config.reviewedBy;
  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="flex items-center gap-4 rounded-2xl border border-border p-5">
          {photo && (
            <img
              src={photo}
              alt={name}
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
          )}
          <div>
            <p className="text-xs uppercase tracking-wider text-gold">Conteúdo revisado por</p>
            <p className="font-serif text-lg text-navy-deep">{name}</p>
            <p className="text-sm text-muted-foreground">
              {role}
              {credential ? ` — ${credential}` : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LPRelatedLinks({ config }: { config: LPConfig }) {
  const core = CORE_CLUSTER.filter((c) => c.slug !== config.slug);
  const contextual = config.relatedLinks ?? [];
  if (core.length === 0 && contextual.length === 0) return null;

  return (
    <section className="bg-cream pb-16 lg:pb-20">
      <div className="mx-auto max-w-3xl space-y-4 px-6 lg:px-10">
        {core.length > 0 && (
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-navy-deep">Conteúdos principais:</span>{" "}
            {core.map((l, i) => (
              <span key={l.href}>
                <a href={l.href} className="text-gold underline hover:text-gold-soft">
                  {l.label}
                </a>
                {i < core.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        )}
        {contextual.length > 0 && (
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-navy-deep">Veja também:</span>{" "}
            {contextual.map((l, i) => (
              <span key={l.href}>
                <a href={l.href} className="text-gold underline hover:text-gold-soft">
                  {l.label}
                </a>
                {i < contextual.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}

function LPProblem({ config }: { config: LPConfig }) {
  return (
    <section id="como-funciona" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— O problema</div>
            <h2 className="font-serif text-3xl leading-tight text-navy-deep text-balance sm:text-4xl">
              {config.problemTitle}
            </h2>
            <ul className="mt-8 space-y-4">
              {config.problemPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative overflow-hidden rounded-2xl bg-navy-deep"
          >
            <img
              src={config.problemImage ?? config.heroImage}
              alt={config.problemImageAlt ?? config.heroImageAlt}
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-serif text-xl italic text-cream">
                "A diferença entre aprovação e negativa muitas vezes está na preparação."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LPSolution({ config }: { config: LPConfig }) {
  const { open: openWhatsAppModal } = useWhatsAppModal();

  return (
    <section className="bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-12 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— Nossa solução</div>
          <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-cream text-balance sm:text-4xl">
            {config.solutionTitle}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.solutionPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-gold/10 bg-cream/[0.03] p-6 backdrop-blur-sm"
            >
              <CheckCircle className="mb-4 h-6 w-6 text-gold" />
              <p className="text-cream/90">{point}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={openWhatsAppModal}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-soft"
          >
            <MessageCircle className="h-4 w-4" />
            Quero falar com um especialista
          </button>
        </div>
      </div>
    </section>
  );
}

function LPFAQ({ config }: { config: LPConfig }) {
  return (
    <section id="faq" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-12 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— FAQ</div>
          <h2 className="font-serif text-3xl leading-tight text-navy-deep text-balance sm:text-4xl">
            Perguntas <span className="italic">frequentes</span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-border">
          {config.faqs.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-lg text-navy-deep hover:text-gold">
                {f.q}
                <span className="ml-4 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
