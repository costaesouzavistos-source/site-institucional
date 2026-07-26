import { createLPRoute } from "@/components/site/LPPage";
import heroFamily from "@/assets/hero-family.jpg";

export const Route = createLPRoute({
  slug: "visto-americano-familia",
  title: "Visto Americano para Família | Costa & Souza",
  description:
    "Visto americano para família: pais, filhos e bebês. Preparamos a documentação de toda a família com estratégia e segurança. Atendimento Brasil.",
  keywords:
    "visto americano família, visto americano casal, visto americano crianças, visto para família inteira, bebê visto americano",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-americano-familia",
  schemaName: "Visto Americano para Família - Costa & Souza",
  schemaDescription:
    "Assessoria para visto americano de família, casal e crianças com atendimento remoto.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Visto americano para família",
  heroHighlight: "todos juntos, todos aprovados",
  heroSubtitle:
    "Viajar em família para os Estados Unidos exige planejamento. Cuidamos da documentação de pais, filhos e bebês, com estratégia pensada para cada membro da família.",
  heroImage: heroFamily,
  heroImageAlt: "Família brasileira planejando viagem para os Estados Unidos",

  problemTitle: "O visto em família tem particularidades que não podem ser ignoradas",
  problemPoints: [
    "Crianças e bebês precisam de documentação específica.",
    "A comprovação de vínculos e renda deve considerar toda a unidade familiar.",
    "Entrevistas podem ocorrer de forma conjunta ou individual, dependendo da idade.",
    "Um erro no DS-160 de um membro afeta o pedido de todos.",
  ],

  solutionTitle: "Como a Costa & Souza prepara a viagem da sua família",
  solutionPoints: [
    "Análise conjunta do perfil familiar e definição da melhor estratégia.",
    "Preenchimento individualizado do DS-160 para cada membro da família.",
    "Organização da documentação: renda, vínculos, certidões e autorizações.",
    "Preparação para entrevista dos responsáveis e orientação sobre menores.",
    "Acompanhamento até a aprovação de todos os passaportes.",
  ],

  trustTitle: "Famílias de todo o Brasil já realizaram o sonho americano com a gente",
  trustStats: [
    { value: "+3.300", label: "vistos aprovados" },
    { value: "97%", label: "taxa de aprovação" },
    { value: "+12", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Planeje o visto da sua família agora",
  ctaSubtitle: "Fale com um especialista e receba um plano para toda a família.",

  faqs: [
    {
      q: "Crianças precisam fazer entrevista?",
      a: "Depende da idade. Bebês e crianças pequenas geralmente não precisam. Crianças maiores podem ser convocadas conforme a regra do consulado.",
    },
    {
      q: "Posso fazer o visto da família toda junto?",
      a: "Sim. Os pedidos podem ser vinculados e as entrevistas agendadas de forma conjunta, quando possível.",
    },
    {
      q: "E se um dos pais não viajar?",
      a: "É necessário apresentar autorização do pai ou mãe que não viaja, além de documentos que comprovem o vínculo parental.",
    },
  ],
});
