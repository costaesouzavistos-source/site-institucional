import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MessageCircle, MapPin, Instagram, ArrowUpRight, Globe } from "lucide-react";
import { CountUp } from "@/components/animations/CountUp";
import { trackWhatsAppClick, trackEvent } from "@/lib/analytics";
import { SPECIALISTS, buildWhatsAppUrl } from "@/lib/specialists";
// Mesma imagem e tratamento (opacidade + gradiente navy) do ContactCTA.
import bg from "@/assets/final-cta.jpg";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://costaesouzavistos.com";

const MAPS_QUERY = encodeURIComponent(
  "Av. Juscelino Kubitschek, 500, Sala 404, Jundiaí, Anápolis - GO, 75110-390",
);

const OTHER_LINKS = [
  {
    label: "Conheça nossos serviços",
    href: "/#servicos",
    icon: ArrowUpRight,
    external: false,
    source: "links_services",
  },
  {
    label: "Como chegar até nós",
    href: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
    icon: MapPin,
    external: true,
    source: "links_maps",
  },
  {
    label: "Site completo",
    href: "/",
    icon: Globe,
    external: false,
    source: "links_home",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/costaesouza.vistoamericano/",
    icon: Instagram,
    external: true,
    source: "links_instagram",
  },
];

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "Costa & Souza — Links" },
      {
        name: "description",
        content:
          "Fale com um especialista em visto americano, veja nossos serviços, localização e redes sociais.",
      },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/links` }],
  }),
  component: LinksPage,
});

function LinksPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-navy-deep px-6 py-16 text-cream">
      <div className="absolute inset-0">
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/35 to-navy-deep/90" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3" style={{ perspective: "200px" }}>
            <svg viewBox="0 0 8 56" className="h-14 w-auto shrink-0" aria-hidden="true">
              <defs>
                <linearGradient id="pole-gradient-links" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8A6A28" />
                  <stop offset="45%" stopColor="#F4D98B" />
                  <stop offset="100%" stopColor="#B8902E" />
                </linearGradient>
              </defs>
              <circle cx="4" cy="4" r="4" fill="url(#pole-gradient-links)" />
              <rect x="2.5" y="7" width="3" height="47" rx="1.5" fill="url(#pole-gradient-links)" />
            </svg>
            <img
              src="/bandeira-topo-site-transparente.png"
              alt=""
              aria-hidden="true"
              width="467"
              height="287"
              className="h-11 w-auto origin-left animate-flag-wave"
            />
          </div>
          <h1 className="mt-4 font-serif text-2xl uppercase leading-none tracking-wide text-cream sm:text-3xl">
            Costa <span className="text-gold">&amp;</span> Souza
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/75">
            Especialistas em vistos americanos — B1/B2, F1, J1, negócios e renovação. Atendimento
            em todo o Brasil, Europa e Estados Unidos.
          </p>
          <div className="mt-4 font-serif text-lg text-gold-soft">
            <CountUp end={16300} prefix="+" /> vistos aprovados
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4">
          {SPECIALISTS.map((contact, i) => (
            <motion.a
              key={contact.phone}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              href={buildWhatsAppUrl(contact.phone)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`links_${contact.name.split(" ")[0].toLowerCase()}`)}
              className="group flex items-start gap-4 rounded-2xl border border-gold/25 bg-navy-deep/70 p-5 backdrop-blur-md transition-all hover:scale-[1.02] hover:border-gold/50 hover:bg-navy-deep/80 active:scale-[0.98]"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                <img src={contact.photo} alt={contact.name} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1 pt-1">
                <div className="font-serif text-lg text-cream group-hover:text-gold">
                  {contact.name}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-cream/70">{contact.role}</div>
              </div>
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep transition-transform group-hover:scale-110">
                <MessageCircle className="h-4 w-4" />
              </div>
            </motion.a>
          ))}

          {OTHER_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => trackEvent("cta_click", { source: link.source })}
              className="group flex items-center gap-3 rounded-full border border-cream/25 bg-navy-deep/70 px-6 py-4 text-sm font-semibold text-cream backdrop-blur-md transition-all hover:scale-[1.02] hover:border-gold/50 hover:bg-navy-deep/80 active:scale-[0.98]"
            >
              <link.icon className="h-4 w-4 shrink-0 text-gold" />
              <span className="flex-1">{link.label}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-cream/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-cream/40">
          A Costa & Souza é uma consultoria privada, sem vínculo com o Consulado, a Embaixada dos
          Estados Unidos ou o governo americano.
        </p>
      </div>
    </div>
  );
}
