import { motion } from "motion/react";
import {
  ArrowUpRight,
  Banknote,
  CalendarClock,
  FileText,
  Files,
  GraduationCap,
  Plane,
  ShieldAlert,
} from "lucide-react";

const guides = [
  {
    icon: FileText,
    title: "Como tirar o visto",
    href: "/como-tirar-visto-americano",
  },
  {
    icon: Banknote,
    title: "Quanto custa",
    href: "/quanto-custa-visto-americano",
  },
  {
    icon: CalendarClock,
    title: "Renovação",
    href: "/renovar-visto-americano",
  },
  {
    icon: Files,
    title: "DS-160",
    href: "/ds-160",
  },
  {
    icon: FileText,
    title: "Documentos",
    href: "/documentos-visto-americano",
  },
  {
    icon: ShieldAlert,
    title: "Visto negado",
    href: "/visto-americano-negado",
  },
  {
    icon: Plane,
    title: "Turismo e negócios",
    href: "/visto-americano-turismo-negocios",
  },
  {
    icon: GraduationCap,
    title: "Estudante",
    href: "/visto-americano-estudante",
  },
];

export function GuidesHub() {
  return (
    <section className="relative bg-champagne py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-navy-deep/70">
            — Guias sobre Visto Americano
          </div>
          <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
            Tudo o que você precisa saber, <span className="italic">num só lugar</span>.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {guides.map((g, i) => (
            <motion.a
              key={g.href}
              href={g.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col items-start gap-3 rounded-2xl border border-navy-deep/10 bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_20px_60px_-30px_var(--navy-deep)]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-navy-deep text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                <g.icon className="h-4 w-4" />
              </div>
              <span className="font-serif text-lg leading-tight text-navy-deep">{g.title}</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-gold">
                Ver guia
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
