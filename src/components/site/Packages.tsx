import { motion } from "motion/react";
import { Check } from "lucide-react";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const plans = [
  {
    name: "Essencial",
    tag: "Para quem quer suporte no essencial",
    features: [
      "Análise inicial de perfil",
      "Preenchimento do DS-160",
      "Agendamento da entrevista",
      "1 sessão de orientação",
    ],
    highlight: false,
  },
  {
    name: "Completo",
    tag: "O mais escolhido pelas famílias",
    features: [
      "Tudo do Essencial",
      "Dossiê documental personalizado",
      "3 simulações de entrevista",
      "Acompanhamento até a aprovação",
      "Suporte via WhatsApp priorizado",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    tag: "Assessoria completa e concierge",
    features: [
      "Tudo do Completo",
      "Estratégia com advogado parceiro",
      "Simulações ilimitadas em PT/EN",
      "Acompanhamento até o embarque",
      "Roteiro de viagem sugerido",
    ],
    highlight: false,
  },
];

function PlanCard({ p, i }: { p: (typeof plans)[0]; i: number }) {
  const { open } = useWhatsAppModal();

  return (
    <motion.div
      key={p.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      className={`relative flex flex-col rounded-2xl border p-8 lg:p-10 ${
        p.highlight
          ? "border-gold bg-navy-deep text-cream shadow-[0_30px_80px_-40px_var(--navy-deep)] lg:-my-4 lg:py-14"
          : "border-navy-deep/10 bg-cream text-navy-deep"
      }`}
    >
      {p.highlight && (
        <div className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-deep">
          Mais escolhido
        </div>
      )}
      <div className="text-xs uppercase tracking-[0.25em] text-gold">{p.name}</div>
      <h3 className={`mt-3 font-serif text-3xl ${p.highlight ? "text-cream" : "text-navy-deep"}`}>
        {p.tag}
      </h3>
      <div
        className={`mt-2 font-serif text-2xl italic ${
          p.highlight ? "text-gold-soft" : "text-navy-deep/60"
        }`}
      >
        Consulte valores
      </div>

      <ul className="mt-8 space-y-3.5 text-sm">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${p.highlight ? "text-gold" : "text-gold"}`}
            />
            <span className={p.highlight ? "text-cream/85" : "text-navy-deep/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={open}
        className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
          p.highlight
            ? "bg-gold text-navy-deep hover:bg-gold-soft"
            : "border border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-cream"
        }`}
      >
        Solicitar proposta
      </button>
    </motion.div>
  );
}

export function Packages() {
  return (
    <section id="pacotes" className="relative bg-champagne py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-navy-deep/70">
            — Pacotes
          </div>
          <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
            Escolha o nível de <span className="italic">acompanhamento</span> ideal.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Valores personalizados de acordo com o perfil e o número de solicitantes da família.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <PlanCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
