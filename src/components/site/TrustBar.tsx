import { motion } from "motion/react";
import { Award, MapPin, Shield, Users } from "lucide-react";
import { CountUp } from "@/components/animations/CountUp";

interface TrustItem {
  icon: typeof Award;
  label: string;
  value?: string;
  end?: number;
  prefix?: string;
  suffix?: string;
}

const items: TrustItem[] = [
  { icon: Users, end: 16300, prefix: "+", label: "vistos aprovados" },
  { icon: Award, end: 10, prefix: "+", label: "anos de experiência" },
  { icon: Shield, end: 98, suffix: "%", label: "taxa de aprovação" },
  { icon: MapPin, value: "Brasil | EUA | Europa", label: "atendimento presencial ou 100% remoto" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-cream">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x md:grid-cols-4 md:divide-y-0">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex items-center gap-4 px-8 py-8"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-deep text-gold">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="font-serif text-2xl text-navy-deep sm:text-3xl">
                {it.end !== undefined ? (
                  <CountUp end={it.end} prefix={it.prefix} suffix={it.suffix} />
                ) : (
                  it.value
                )}
              </div>
              <div className="text-sm text-muted-foreground">{it.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
