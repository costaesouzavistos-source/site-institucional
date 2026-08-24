import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Como tirar o visto americano?",
    a: "O processo passa pelo formulário DS-160, pagamento da taxa MRV, agendamento da biometria no CASV e a entrevista consular. Cada etapa tem detalhes que pesam na aprovação.",
    link: { label: "Ver o passo a passo completo", href: "/como-tirar-visto-americano" },
  },
  {
    q: "Quais documentos são necessários?",
    a: "Passaporte, foto no padrão consular, comprovante da taxa MRV e o DS-160 confirmado são a base. Comprovantes de renda e vínculo com o Brasil reforçam o caso.",
    link: { label: "Ver a lista completa de documentos", href: "/documentos-visto-americano" },
  },
  {
    q: "Quanto custa o visto americano?",
    a: "A taxa MRV (US$185) é obrigatória para qualquer solicitação. Há ainda a Taxa de Integridade de Visto, cobrada só quando o visto é aprovado, e taxas específicas para alguns tipos de visto.",
    link: { label: "Ver a tabela completa de custos", href: "/quanto-custa-visto-americano" },
  },
  {
    q: "O que é o formulário DS-160?",
    a: "É o formulário eletrônico oficial do Departamento de Estado dos EUA, obrigatório para qualquer visto de não imigrante. Sem ele, não é possível pagar a taxa nem agendar entrevista.",
    link: { label: "Entenda o DS-160 em detalhes", href: "/ds-160" },
  },
  {
    q: "Vocês garantem a aprovação do visto?",
    a: "Nenhuma consultoria séria pode garantir aprovação — a decisão é sempre do consulado americano. O que garantimos é a melhor preparação possível: estratégia individual, DS-160 sem erros e treinamento real para a entrevista.",
    link: { label: "Conheça a assessoria completa", href: "/assessoria-visto-americano" },
  },
  {
    q: "Preciso ir até Anápolis para ser atendido?",
    a: "Não. Todo o processo pode ser 100% remoto, por videochamada e WhatsApp, para clientes em qualquer estado do Brasil — ou presencial na nossa sede, para quem mora na região.",
    link: { label: "Atendimento em Anápolis", href: "/visto-americano-anapolis" },
  },
  {
    q: "Trabalham com renovação sem entrevista (dropbox)?",
    a: "Sim, quando o caso é elegível ao Interview Waiver. As regras de elegibilidade mudaram recentemente e vale confirmar antes de planejar a renovação.",
    link: { label: "Ver as regras atuais do dropbox", href: "/renovar-visto-americano" },
  },
  {
    q: "E se meu visto for negado?",
    a: "Fazemos análise completa do motivo da negativa, ajustamos a estratégia e preparamos você para uma nova tentativa com muito mais robustez.",
    link: { label: "O que fazer após uma negativa", href: "/visto-americano-negado" },
  },
  {
    q: "Atendem crianças e bebês?",
    a: "Sim. Preparamos o dossiê da família inteira, incluindo bebês e crianças, com documentação completa.",
    link: { label: "Visto americano para crianças", href: "/visto-americano-criancas" },
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

        <Accordion type="single" collapsible className="w-full max-w-2xl">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-5 text-left font-serif text-lg text-navy-deep hover:text-gold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground max-w-[65ch]">
                {f.a}
                {f.link && (
                  <>
                    {" "}
                    <a href={f.link.href} className="font-medium text-gold underline hover:text-gold-soft">
                      {f.link.label}
                    </a>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
