import { motion } from "motion/react";
import { Globe2, HeartHandshake, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Estratégia sob medida",
    desc: "Cada perfil é analisado individualmente. Nada de fórmula pronta — a preparação é feita para o seu caso.",
  },
  {
    icon: UserCheck,
    title: "Atendimento humanizado",
    desc: "Você fala sempre com a mesma consultora do primeiro contato à aprovação. Sem robôs, sem terceirização.",
  },
  {
    icon: HeartHandshake,
    title: "Foco na família",
    desc: "Preparamos você ou sua família com o mesmo cuidado. O sonho é coletivo — mas a estratégia individual.",
  },
  {
    icon: Sparkles,
    title: "Do DS-160 ao embarque",
    desc: "Preenchimento do formulário, equipe de suporte, simulação e treinamento para entrevista e orientações de viagem.",
  },
  {
    icon: Globe2,
    title: "Suporte no Brasil e nos EUA",
    desc: "Assessoria de um especialista tanto para quem está solicitando o visto no Brasil quanto para quem já está nos Estados Unidos durante o processo.",
  },
];

export function WhyUs() {
  return (
    <section id="sobre" className="relative bg-champagne py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-4xl">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-navy-deep/70">
            — Por que Costa & Souza
          </div>
          <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
            Uma consultoria que trata seu processo de visto com{" "}
            <span className="italic">seriedade e compromisso</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-navy-deep/10 bg-cream p-7"
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-navy-deep text-gold">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-navy-deep">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
