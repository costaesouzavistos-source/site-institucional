import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect, type ReactNode } from "react";
import { MessageCircle, ArrowRight, Star } from "lucide-react";
// PLACEHOLDER: imagem gerada via IA — substituir por versão final Higgsfield quando disponível.
import heroImg from "@/assets/castelo-disney-familia-larga.png";
import { trackWhatsAppClick, trackEvent } from "@/lib/analytics";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const DEFAULT_WHATSAPP_URL =
  "https://wa.me/5562992856373?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20em%20vistos%20americanos.";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}

interface HeroProps {
  badge?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  ratingLabel?: string;
  trustLabel?: string;
}

export function Hero({
  badge = "Consultoria em vistos americanos",
  title = (
    <>
      Seu visto aprovado.
      <br />
      <span className="italic text-gold-soft">A viagem dos sonhos</span>
      <br />
      começa aqui.
    </>
  ),
  subtitle = (
    <>
      Mais de <strong className="text-gold-soft">16.300 vistos aprovados</strong> em todo o País.
      Cuidamos de todas as etapas — preenchimento estratégico e assinatura do DS-160,
      documentação correta, agendamento da coleta de biometria, foto no CASV e entrevista
      consular — com consultoria especializada de Anápolis para todo o Brasil, 100% remota.
    </>
  ),
  ctaText = "Fale com um Especialista",
  ctaHref = DEFAULT_WHATSAPP_URL,
  secondaryCtaText = "Ver Pacotes",
  secondaryCtaHref = "#pacotes",
  imageSrc = heroImg,
  imageAlt = "Família brasileira chegando a um parque temático nos EUA ao entardecer",
  ratingLabel = "4.9 no Google",
  trustLabel = "Atendimento humano · 100% online ou presencial",
}: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const { open: openWhatsAppModal } = useWhatsAppModal();

  // Desktop: parallax + zoom; mobile: valores fixos para evitar bugs de scroll
  const y = useTransform(scrollY, [0, 1000], isMobile ? [0, 0] : [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], isMobile ? [1, 1] : [1, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[120svh] w-full overflow-hidden bg-navy-deep"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 will-change-transform brightness-[1.15] contrast-[1.15]"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          width={1920}
          height={1280}
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </motion.div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-navy-deep/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/30 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_50%_at_50%_100%,transparent,var(--navy-deep)_90%)] opacity-60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-6 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {badge}
          </div>

          <h1 className="font-serif text-4xl leading-[1.15] text-cream text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => {
                trackWhatsAppClick("hero_primary");
                openWhatsAppModal();
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy-deep shadow-lg shadow-gold/20 transition-all hover:scale-[1.03] hover:bg-gold-soft hover:shadow-xl hover:shadow-gold/30 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" />
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href={secondaryCtaHref}
              onClick={() => trackEvent("cta_click", { source: "hero_secondary" })}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-7 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:scale-[1.03] hover:border-cream/60 hover:bg-cream/10 active:scale-[0.98]"
            >
              {secondaryCtaText}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 hidden flex-wrap items-center gap-4 text-xs text-cream/70 sm:mt-14 sm:flex sm:gap-6"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="uppercase tracking-[0.2em] text-cream/80">{ratingLabel}</span>
          </div>
          <span className="h-3 w-px bg-cream/30" />
          <span className="uppercase tracking-[0.2em]">{trustLabel}</span>
        </motion.div>
      </div>
    </section>
  );
}
