import { motion } from "motion/react";
import { CountUp } from "@/components/animations/CountUp";
import { ProofCarousel } from "@/components/site/ProofCarousel";

const stats = [
  { end: 16300, prefix: "+", suffix: "", label: "Vistos aprovados" },
  { end: 1100, prefix: "+", suffix: "", label: "Famílias embarcadas" },
  { end: 42, prefix: "", suffix: "", label: "Estados americanos visitados" },
  { end: 98, prefix: "", suffix: "%", label: "Índice de aprovação" },
];

export function JourneyApproval() {
  return (
    <section id="depoimentos" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">
            04 — Acompanhamento &amp; aprovação
          </div>
          <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
            Maior segurança em cada etapa, até a <span className="italic">aprovação</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Translado ao consulado com motorista particular e orientação completa até a
            decolagem do sonho. Cada aprovação é uma memória guardada para a vida toda — estas
            são as histórias que ajudamos a escrever diariamente.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="border-l-2 border-gold pl-5 text-center sm:text-left"
            >
              <div className="font-serif text-3xl text-navy-deep sm:text-5xl">
                <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <ProofCarousel />
        </div>
      </div>
    </section>
  );
}
