import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { DrawCheck } from "@/components/animations/DrawCheck";

const beforeItems = [
  "Insegurança sobre documentos",
  "Erros no formulário DS-160",
  "Dúvidas sem resposta rápida",
];

const afterItems = [
  {
    title: "Estratégia sob medida",
    desc: "Analisamos seu perfil, histórico e objetivo de viagem para definir a melhor estratégia consular. Nada de fórmula pronta.",
  },
  {
    title: "DS-160 sem margem para erro",
    desc: "Formulário oficial preenchido linha a linha e assinado por um especialista.",
  },
  {
    title: "Suporte humanizado pelo WhatsApp",
    desc: "Dúvidas respondidas por quem está cuidando do seu caso, não por um robô.",
  },
];

export function JourneyStrategy() {
  return (
    <section id="processo" className="bg-champagne py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">
            02 — Estratégia &amp; DS-160
          </div>
          <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
            Uma <span className="italic">estratégia sob medida</span>, do primeiro contato ao
            DS-160.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="h-full rounded-2xl border border-navy-deep/10 bg-cream p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-deep/10">
                <X className="h-5 w-5 text-navy-deep/60" />
              </div>
              <h3 className="font-serif text-xl text-navy-deep">Sem preparação</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-navy-deep/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="h-full rounded-2xl border border-gold/30 bg-navy-deep p-8 shadow-xl shadow-navy-deep/20"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold">
                <Check className="h-5 w-5 text-navy-deep" />
              </div>
              <h3 className="font-serif text-xl text-cream">Com a Costa &amp; Souza</h3>
            </div>
            <ul className="space-y-5">
              {afterItems.map((item, i) => (
                <li key={item.title} className="flex items-start gap-3">
                  <DrawCheck delay={0.3 + i * 0.15} className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div className="max-w-sm">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
                      {item.title}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/85">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
