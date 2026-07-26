import { createLPRoute } from "@/components/site/LPPage";
import jaqueline from "/images/optimized/IMG_5787-avatar.jpg";

export const Route = createLPRoute({
  slug: "assessoria-visto-americano",
  title: "Assessoria para Visto Americano | Costa & Souza",
  description:
    "Assessoria especializada para visto americano. +3.300 aprovações. Atendimento remoto em todo o Brasil. Fale com um especialista.",
  keywords:
    "assessoria visto americano, consultoria visto americano, especialista visto americano, ajuda para visto americano, Anápolis, Goiás",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/assessoria-visto-americano",
  schemaName: "Assessoria para Visto Americano - Costa & Souza",
  schemaDescription:
    "Assessoria especializada para visto americano. Atendimento remoto em todo o Brasil.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Assessoria para visto americano que transforma",
  heroHighlight: "ansiedade em aprovação",
  heroSubtitle:
    "Você não precisa enfrentar o processo sozinho. Nossa equipe cuida da estratégia, do DS-160 e da preparação para entrevista — do início ao carimbo no passaporte.",
  heroImage: jaqueline,
  heroImageAlt: "Consultoria de visto americano com especialista",

  problemTitle: "Sozinho, o processo de visto americano é cheio de armadilhas",
  problemPoints: [
    "O DS-160 tem dezenas de campos que, preenchidos de forma incorreta, levam à negativa.",
    "A entrevista consular exige respostas objetivas, consistentes e seguras.",
    "Cada caso é único: renda, vínculos, histórico de viagem e profissão influenciam na decisão.",
    "Muitas famílias desistem na primeira dificuldade ou perdem tempo com informações desencontradas.",
  ],

  solutionTitle: "Como nossa assessoria aumenta suas chances de aprovação",
  solutionPoints: [
    "Análise completa do seu perfil antes de qualquer envio ao consulado.",
    "Preenchimento estratégico do DS-160 sem erros ou inconsistências.",
    "Simulação de entrevista com feedback individual e ajustes de discurso.",
    "Acompanhamento humano por WhatsApp e videochamada durante todo o processo.",
    "Revisão de documentos e montagem de dossiê sólido para cada tipo de visto — B1/B2 Turismo/Negócios, F1 Estudante, Renovação (Dropbox) e Reversão de Visto Negado (214(b)).",
  ],

  trustTitle: "Por que famílias de todo o Brasil confiam na Costa & Souza",
  trustStats: [
    { value: "+3.300", label: "vistos aprovados" },
    { value: "97%", label: "taxa de aprovação" },
    { value: "+12", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Comece sua assessoria hoje",
  ctaSubtitle: "Fale com um especialista e receba um plano de ação para o seu caso.",

  faqs: [
    {
      q: "A assessoria garante a aprovação do visto?",
      a: "Nenhuma consultoria pode garantir aprovação, pois a decisão é exclusiva do consulado. O que garantimos é a melhor preparação possível do seu caso.",
    },
    {
      q: "Quanto tempo leva o processo com assessoria?",
      a: "Em média, de 30 a 90 dias, dependendo da disponibilidade de entrevista no consulado escolhido.",
    },
    {
      q: "Atendem em todo o Brasil?",
      a: "Sim. O processo é 100% remoto, por WhatsApp e videochamada, para clientes de qualquer estado.",
    },
  ],
});
