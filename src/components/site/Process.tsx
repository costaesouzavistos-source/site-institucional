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
    desc: "Translado ao consulado com motorista particular (custos adicionais).",
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
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— Como Funciona</div>
          <h2 className="font-serif text-4xl leading-tight text-cream text-balance sm:text-5xl">
            Um processo claro, do início ao{" "}
            <span className="italic text-gold-soft">visto aprovado</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-gold/10 bg-cream/[0.03] p-7"
            >
              <div className="font-serif text-4xl text-gold/40">{s.n}</div>
              <h3 className="mt-4 font-serif text-xl text-cream">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
