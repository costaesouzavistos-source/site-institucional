import { motion } from "motion/react";
// Foto real de família aprovada no consulado americano.
import img from "/images/optimized/familia-consulado.jpg";

const stats = [
  { value: "16.300+", label: "Vistos aprovados" },
  { value: "1.100+", label: "Famílias embarcadas" },
  { value: "42", label: "Estados americanos visitados" },
  { value: "98%", label: "Índice de aprovação" },
];

export function DreamInNumbers() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <img
            src={img}
            alt="Família brasileira aprovada no Consulado Americano"
            width={742}
            height={860}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 font-serif text-lg italic text-cream">
            “Deu tudo certo. Os conselhos foram assertivos na validação do nosso visto e trouxeram
            leveza na hora da ansiedade.”
            <div className="mt-1 text-xs not-italic uppercase tracking-[0.2em] text-gold-soft">
              — Família atendida pela Costa & Souza
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">
              — O Sonho em Números
            </div>
            <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
              Cada aprovação é uma <span className="italic">memória</span> guardada para a vida
              toda.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Cada sonho realizado começa aqui e termina em algum lugar mágico dos Estados Unidos.
              Estas são as histórias que ajudamos a escrever diariamente.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-l-2 border-gold pl-5"
              >
                <div className="font-serif text-4xl text-navy-deep sm:text-5xl">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
