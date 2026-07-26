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

  solutionTitle: string;
  solutionPoints: string[];

  trustTitle: string;
  trustStats: { value: string; label: string }[];

  ctaTitle: string;
  ctaSubtitle: string;

  faqs: { q: string; a: string }[];
}

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

export function createLPRoute(config: LPConfig) {
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
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(buildLocalBusinessSchema(config)),
        },
      ],
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
          <LPProblem config={config} />
          <LPSolution config={config} />
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
              src={config.heroImage}
              alt={config.heroImageAlt}
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
