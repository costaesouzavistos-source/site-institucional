import { motion } from "motion/react";
import {
  Plane,
  GraduationCap,
  ShieldAlert,
  Briefcase,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    tag: "B1/B2",
    title: "Turismo | Negócios",
    desc: "Visto americano para viagem em família, férias, compras ou negócios a curto prazo. Preenchimento estratégico e assinatura do DS-160, treinamento com simulação real para a entrevista.",
    href: "/visto-americano-turismo-negocios",
  },
  {
    icon: RefreshCw,
    tag: "+10 anos de visto",
    title: "Renovação",
    desc: "Processo de renovação de visto americano com representação e isenção de entrevista, quando elegível. Envio e devolução do passaporte com acompanhamento seguro.",
    href: "/renovar-visto-americano",
  },
  {
    icon: ShieldAlert,
    tag: "214(B)",
    title: "Reversão de Visto Negado",
    desc: "Análise do motivo da negativa, estruturação estratégica do perfil e defesa de reversão para retornar ao consulado com muito mais segurança.",
    href: "/visto-negado-214b",
  },
  {
    icon: GraduationCap,
    tag: "F1",
    title: "Estudante",
    desc: "Universidades, high school, intercâmbio e cursos de idiomas. Suporte completo do formulário I-20 ao treinamento para a entrevista consular.",
    href: "/visto-americano-estudante",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— Tipos de Visto</div>
          <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
            Para cada sonho, <span className="italic">um caminho</span> até os Estados Unidos.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Atendemos todas as categorias de visto não-imigrante com estratégia e acompanhamento
            humano do início ao fim.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_60px_-30px_var(--navy-deep)]"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-navy-deep text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-6 min-h-[3.5rem] font-serif text-2xl leading-tight text-navy-deep line-clamp-2">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-deep">
                Saiba mais
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
