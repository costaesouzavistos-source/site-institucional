import { createLPRoute } from "@/components/site/LPPage";
import imgConsulado from "/images/optimized/IMG_2270.JPG.jpg";

export const Route = createLPRoute({
  slug: "visto-negado-214b",
  title: "Visto Negado 214(b) | Costa & Souza",
  description:
    "Visto negado por 214(b)? Entenda o que significa e como fortalecer seu vínculo com o Brasil para uma nova entrevista. Fale com a Costa & Souza.",
  keywords:
    "214b, visto negado 214b, section 214b, vínculos Brasil visto americano, intenção de retorno visto americano",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-negado-214b",
  schemaName: "Visto Negado 214(b) - Costa & Souza",
  schemaDescription:
    "Entenda o motivo 214(b) e aprenda a fortalecer seu vínculo com o Brasil para nova entrevista.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Entenda o 214(b) e volte ao consulado",
  heroHighlight: "com mais força",
  heroSubtitle:
    "A seção 214(b) é a negativa mais comum. Ela indica que o consulado não ficou convencido de que você vai retornar ao Brasil. A boa notícia: isso pode ser revertido.",
  heroImage: imgConsulado,
  heroImageAlt: "Documentos de visto americano sobre a mesa",

  problemTitle: "O que leva a uma negativa por 214(b)?",
  problemPoints: [
    "Comprovação de vínculos com o Brasil considerada fraca.",
    "Renda ou patrimônio insuficiente para justificar o retorno.",
    "Histórico de viagem pouco consistente com o perfil apresentado.",
    "Respostas na entrevista que não transmitiram segurança sobre a intenção de retorno.",
  ],

  solutionTitle: "Como fortalecer seu caso contra o 214(b)",
  solutionPoints: [
    "Análise detalhada do que faltou na primeira entrevista.",
    "Montagem de dossiê de vínculos: trabalho, família, propriedades, investimentos.",
    "Estratégia de comprovação de renda e situação financeira estável.",
    "Treinamento para responder com objetividade e consistência.",
    "Reformulação do DS-160 para refletir a realidade do seu perfil.",
  ],

  trustTitle: "Já ajudamos centenas de candidatos a superar o 214(b)",
  trustStats: [
    { value: "+3.300", label: "vistos aprovados" },
    { value: "97%", label: "taxa de aprovação" },
    { value: "+12", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Análise gratuita do seu caso 214(b)",
  ctaSubtitle: "Envie o formulário e fale com um especialista sobre a sua negativa.",

  faqs: [
    {
      q: "O que significa 214(b) na prática?",
      a: "Significa que o consulado entendeu que você pode não retornar ao Brasil após a viagem. É uma negativa por falta de vínculos ou intenção de retorno.",
    },
    {
      q: "Posso tentar novamente após 214(b)?",
      a: "Sim. O ideal é só voltar ao consulado quando houver mudanças reais e comprováveis no seu caso.",
    },
    {
      q: "Quanto tempo leva para fortalecer um caso 214(b)?",
      a: "Depende da situação. Alguns casos precisam de 3 a 6 meses para organizar documentação e comprovação suficiente.",
    },
  ],
});
