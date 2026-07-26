import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const beforeItems = [
  "Insegurança sobre documentos",
  "Erros no formulário DS-160",
  "Falta de preparação para entrevista",
  "Dúvidas sem resposta rápida",
  "Grande chance de negativa do visto",
];

const afterItems = [
  "Processo personalizado do início ao fim",
  "Formulário preenchido e assinado por um especialista",
  "Simulação e treinamento para entrevista consular",
  "Suporte humanizado pelo WhatsApp",
  "Maior segurança em cada etapa com alto percentual de aprovação",
];

export function Comparison() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-14 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">
            — A diferença de uma assessoria
          </div>
          <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
            Por que contratar um <span className="italic">especialista</span>?
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="h-full rounded-2xl border border-navy-deep/10 bg-champagne p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-deep/10">
                <X className="h-5 w-5 text-navy-deep/60" />
              </div>
              <h3 className="font-serif text-xl text-navy-deep">
                Sem uma consultoria especializada
              </h3>
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
              <h3 className="font-serif text-xl text-cream">Com nossa consultoria especializada</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-cream/85">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
