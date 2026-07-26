import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    title: "Consulta estratégica",
    desc: "Analisamos seu perfil, histórico e objetivo de viagem para definir a melhor estratégia consular.",
  },
  {
    n: "02",
    title: "Preenchimento do DS-160",
    desc: "Formulário oficial preenchido linha a linha e assinado por um especialista, sem margem para erro.",
  },
  {
    n: "03",
    title: "Preparação para entrevista",
    desc: "Treinamento com simulação real e material de apoio.",
  },
  {
    n: "04",
    title: "Acompanhamento ao consulado",
    desc: "Translado ao consulado com motorista particular(custos adicionais).",
  },
  {
    n: "05",
    title: "Aprovação, embarque & orientação para imigração",
    desc: "Visto na mão. Orientamos os próximos passos até a decolagem do sonho.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative bg-navy-deep py-24 text-cream lg:py-32">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— Como Funciona</div>
          <h2 className="font-serif text-4xl leading-tight text-cream text-balance sm:text-5xl">
            Um processo claro, do primeiro contato ao{" "}
            <span className="italic text-gold-soft">visto aprovado</span>.
          </h2>
        </div>

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gold/30 md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-12 md:space-y-16">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
                className={`relative grid grid-cols-[40px_1fr] gap-6 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""
                }`}
              >
                <div className={`md:contents ${i % 2 === 0 ? "" : ""}`}>
                  <div
                    className={`hidden md:block ${
                      i % 2 === 0 ? "md:text-right md:pr-16" : "md:order-2 md:pl-16"
                    }`}
                  >
                    <div className="font-serif text-6xl text-gold/30">{s.n}</div>
                    <h3 className="mt-2 font-serif text-2xl text-cream">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/70">{s.desc}</p>
                  </div>
                </div>

                {/* dot */}
                <div className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-gold/50 bg-navy-deep text-[10px] font-semibold text-gold md:left-1/2 md:-translate-x-1/2">
                  {s.n}
                </div>

                {/* mobile content */}
                <div className="md:hidden">
                  <h3 className="font-serif text-xl text-cream">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{s.desc}</p>
                </div>

                {/* desktop spacer */}
                <div className="hidden md:block" />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
