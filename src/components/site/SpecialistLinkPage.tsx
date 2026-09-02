import { motion } from "motion/react";
import { MessageCircle, ArrowUpRight, Globe } from "lucide-react";
import { type Specialist, buildWhatsAppUrl } from "@/lib/specialists";
import { trackWhatsAppClick, trackEvent } from "@/lib/analytics";
// Fundo padrão: mesma imagem e tratamento (opacidade + gradiente navy) do ContactCTA / /links.
import defaultBg from "@/assets/final-cta.jpg";

export function SpecialistLinkPage({
  specialist,
  backgroundImage = defaultBg,
  backgroundPosition = "object-center",
}: {
  specialist: Specialist;
  backgroundImage?: string;
  backgroundPosition?: string;
}) {
  const firstName = specialist.name.split(" ")[0].toLowerCase();

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-navy-deep px-6 py-16 text-cream">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className={`h-full w-full object-cover opacity-70 ${backgroundPosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/35 to-navy-deep/90" />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-gold/40 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)]">
            <img
              src={specialist.photo}
              alt={specialist.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-5 text-xs uppercase tracking-[0.25em] text-gold">
            Costa &amp; Souza
          </div>
          <h1 className="mt-2 font-serif text-3xl text-cream">{specialist.name}</h1>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/75">{specialist.role}</p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-4">
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            href={buildWhatsAppUrl(specialist.phone)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick(`personal_${firstName}`)}
            className="group flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy-deep shadow-lg shadow-gold/20 transition-all hover:scale-[1.03] hover:bg-gold-soft hover:shadow-xl hover:shadow-gold/30 active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar comigo no WhatsApp
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            href="/"
            onClick={() => trackEvent("cta_click", { source: `personal_${firstName}_site` })}
            className="group flex items-center gap-3 rounded-full border border-cream/25 bg-navy-deep/70 px-6 py-4 text-sm font-semibold text-cream backdrop-blur-md transition-all hover:scale-[1.02] hover:border-gold/50 hover:bg-navy-deep/80 active:scale-[0.98]"
          >
            <Globe className="h-4 w-4 shrink-0 text-gold" />
            <span className="flex-1">Site completo</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-cream/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.38 }}
            href="/links"
            onClick={() => trackEvent("cta_click", { source: `personal_${firstName}_links` })}
            className="group flex items-center gap-3 rounded-full border border-cream/25 bg-navy-deep/70 px-6 py-4 text-sm font-semibold text-cream backdrop-blur-md transition-all hover:scale-[1.02] hover:border-gold/50 hover:bg-navy-deep/80 active:scale-[0.98]"
          >
            <ArrowUpRight className="h-4 w-4 shrink-0 text-gold" />
            <span className="flex-1">Ver toda a equipe</span>
          </motion.a>
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-cream/40">
          A Costa & Souza é uma consultoria privada, sem vínculo com o Consulado, a Embaixada dos
          Estados Unidos ou o governo americano.
        </p>
      </div>
    </div>
  );
}
