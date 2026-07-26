import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês garantem a aprovação do visto?",
    a: "Nenhuma consultoria séria pode garantir aprovação — a decisão é sempre do consulado americano. O que garantimos é a melhor preparação possível: estratégia individual, DS-160 sem erros e treinamento real para a entrevista.",
  },
  {
    q: "Preciso ir até Anápolis para ser atendido?",
    a: "Não. Todo o processo é 100% remoto, por videochamada e WhatsApp, para clientes em qualquer estado do Brasil.",
  },
  {
    q: "Quanto tempo leva o processo completo?",
    a: "Depende da disponibilidade da entrevista no consulado escolhido. Em média, do início do processo à entrevista, o cliente leva de 30 a 90 dias.",
  },
  {
    q: "Trabalham com renovação sem entrevista (dropbox)?",
    a: "Sim, atendemos renovações elegíveis ao Interview Waiver com envio e devolução segura de passaportes.",
  },
  {
    q: "E se meu visto for negado?",
    a: "Fazemos análise completa do motivo da negativa, ajustamos a estratégia e preparamos você para uma nova tentativa com muito mais robustez.",
  },
  {
    q: "Atendem crianças e bebês?",
    a: "Sim. Preparamos o dossiê da família inteira, incluindo bebês e crianças, com documentação completa.",
  },
  {
    q: "Vocês são um órgão do governo americano?",
    a: "Não. Somos uma consultoria privada, independente, sem qualquer vínculo com o Consulado, Embaixada ou governo dos Estados Unidos.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— FAQ</div>
          <h2 className="font-serif text-4xl leading-tight text-navy-deep text-balance sm:text-5xl">
            Perguntas <span className="italic">frequentes</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Se ficar qualquer dúvida, fale com um especialista pelo WhatsApp — respondemos em poucos
            minutos.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-5 text-left font-serif text-lg text-navy-deep hover:text-gold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
