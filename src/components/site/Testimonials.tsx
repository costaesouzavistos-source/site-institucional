import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback } from "react";

const items = [
  {
    quote:
      "A ansiedade era enorme, mas a Costa & Souza transformou o processo em algo tranquilo. Voltamos dos EUA com os filhos dizendo que foi a melhor viagem da vida.",
    name: "Família Ribeiro",
    city: "Goiânia — GO",
    visa: "B1/B2 · Turismo em família",
  },
  {
    quote:
      "Simulei a entrevista com a consultora mais de 5 vezes. No dia, entrei confiante e saí com o visto aprovado em minutos.",
    name: "Camila Andrade",
    city: "Brasília — DF",
    visa: "F1 · Estudante",
  },
  {
    quote:
      "Renovei o meu, do meu marido e das duas crianças pelo dropbox. Impecável do início ao fim. Recomendo de olhos fechados.",
    name: "Família Nogueira",
    city: "Anápolis — GO",
    visa: "Renovação",
  },
  {
    quote:
      "Já tinha sido negado antes. Refizeram minha estratégia do zero e conseguimos a aprovação. Gratidão eterna.",
    name: "Rafael Menezes",
    city: "Uberlândia — MG",
    visa: "B1/B2 · Negócios",
  },
];

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section id="depoimentos" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— Depoimentos</div>
            <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
              Famílias reais. <span className="italic">Viagens</span> reais.
            </h2>
          </motion.div>

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo"
              className="grid h-11 w-11 place-items-center rounded-full border border-navy-deep/20 text-navy-deep transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {items.map((t) => (
              <div
                key={t.name}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_60%] lg:flex-[0_0_42%]"
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <Quote className="h-8 w-8 text-gold" />
                  <p className="mt-4 font-serif text-xl leading-relaxed text-navy-deep">
                    “{t.quote}”
                  </p>
                  <div className="mt-8 border-t border-border pt-5">
                    <div className="font-semibold text-navy-deep">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.city}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                      {t.visa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
