import { createLPRoute } from "@/components/site/LPPage";
import imgConsulado from "/images/optimized/IMG_2270.JPG.jpg";

export const Route = createLPRoute({
  slug: "visto-americano-negado",
  title: "Visto Americano Negado? | Costa & Souza",
  description:
    "Seu visto americano foi negado? A Costa & Souza analisa o motivo, ajusta a estratégia e prepara você para uma nova tentativa com mais segurança.",
  keywords:
    "visto americano negado, visto negado eua, reverter visto negado, segunda tentativa visto americano, 214b",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-americano-negado",
  schemaName: "Visto Americano Negado - Costa & Souza",
  schemaDescription:
    "Análise e estratégia para visto americano negado. Segunda tentativa com mais segurança.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Visto americano negado?",
  heroHighlight: "Vamos reverter esse cenário",
  heroSubtitle:
    "Negativa não é o fim. Analisamos o motivo da recusa, corrigimos os pontos fracos e preparamos você para retornar ao consulado com um caso muito mais sólido.",
  heroImage: imgConsulado,
  heroImageAlt: "Pessoa preocupada com documentos de visto negado",

  problemTitle: "Uma negativa de visto pode acontecer por diversos motivos",
  problemPoints: [
    "Respostas inconsistentes durante a entrevista consular.",
    "Comprovação de vínculos ou renda considerada insuficiente.",
    "DS-160 preenchido de forma genérica ou com erros.",
    "Falta de clareza sobre o objetivo real da viagem.",
  ],

  solutionTitle: "Como reverter uma negativa de visto americano",
  solutionPoints: [
    "Diagnóstico da seção 214(b) ou outra razão declarada na recusa.",
    "Reformulação do DS-160 com evidências mais claras e consistentes.",
    "Estratégia de comprovação de vínculos, renda e intenção de retorno.",
    "Simulação de entrevista focada nas objeções do seu caso específico.",
    "Planejamento do timing ideal para nova solicitação.",
  ],

  trustTitle: "Já ajudamos centenas de brasileiros a reverter a negativa",
  trustStats: [
    { value: "+3.300", label: "casos de sucesso" },
    { value: "97%", label: "taxa de aprovação" },
    { value: "+12", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Fale com um especialista sobre sua negativa",
  ctaSubtitle: "Conte o que aconteceu na entrevista e receba uma análise honesta do seu caso.",

  faqs: [
    {
      q: "Posso solicitar o visto novamente após uma negativa?",
      a: "Sim. Não existe prazo mínimo obrigatório, mas é importante só retornar ao consulado quando o caso estiver realmente mais forte.",
    },
    {
      q: "Quanto tempo devo esperar para tentar de novo?",
      a: "Depende do motivo da negativa. Muitos casos precisam de mudanças concretas nos vínculos, renda ou documentação antes de uma nova entrevista.",
    },
    {
      q: "A Costa & Souza já reverteu casos de visto negado?",
      a: "Sim. Trabalhamos com análise de negativas e montagem de estratégia para nova tentativa com maior segurança.",
    },
  ],
});
