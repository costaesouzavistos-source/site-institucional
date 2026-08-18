import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "especialista-visto-americano",
  title: "Especialista em Visto Americano | Costa & Souza",
  description:
    "Fale com um especialista em visto americano. Atendimento personalizado, remoto e focado em aprovação. +16.300 casos aprovados.",
  keywords:
    "especialista visto americano, consultor visto americano, assessor visto americano, visto americano aprovação, Brasil",
  ogImage: "https://costaesouzavistos.com/og-image.jpg",
  canonical: "https://costaesouzavistos.com/especialista-visto-americano",
  schemaName: "Especialista em Visto Americano - Costa & Souza",
  schemaDescription:
    "Especialista em visto americano com atendimento personalizado em todo o Brasil.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Especialista em visto americano ao seu lado",
  heroHighlight: "em todas as etapas",
  heroSubtitle:
    "Nossos especialistas analisam seu perfil, montam a estratégia e preparam você para a entrevista consular. Atendimento humano, direto e sem enrolação.",
  heroImage: "/images/lps-images/04-especialista-hero.jpg",
  heroImageAlt: "Especialista em visto americano atendendo cliente",
  problemImage: "/images/lps-images/04-especialista-problem.jpg",
  problemImageAlt: "Falta de orientação especializada custando caro no processo de visto",

  lastUpdated: "julho de 2026",
  summary:
    "A Costa & Souza é formada por Lucas Philipe e Jaqueline Costa, especialistas em vistos americanos com mais de 10 anos de atuação. O trabalho é dividido entre estratégia de caso (perfil, DS-160, preparação para entrevista) e atendimento humano (organização documental, suporte emocional para a entrevista). Nenhum dos dois substitui a decisão do consulado — o papel é preparar o seu caso da forma mais sólida possível.",

  quickTable: {
    title: "Quem atende o seu caso",
    rows: [
      { label: "Lucas Philipe e Jaqueline Costa", value: "Estratégia de caso, DS-160, preparação para entrevista, atendimento humano e organização documental" },
      { label: "Atuação", value: "+10 anos, atendimento 100% remoto em todo o Brasil" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer saber qual especialista é mais indicado para o seu caso?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  problemTitle: "Falta de orientação especializada custa caro no visto americano",
  problemPoints: [
    "Uma resposta mal formulada na entrevista pode mudar o resultado.",
    "O perfil do candidato precisa ser apresentado de forma clara e coerente.",
    "Regras mudam e informações desatualizadas geram erros no DS-160.",
    "Sem um especialista, pequenos detalhes se tornam grandes problemas.",
  ],

  solutionTitle: "O que um especialista da Costa & Souza faz pelo seu caso",
  solutionPoints: [
    "Análise de perfil completa para B1/B2 Turismo/Negócios, F1 Estudante, Renovação (Dropbox) ou Reversão de Visto Negado (214(b)).",
    "Plano de ação personalizado para aumentar a confiança do consulado no seu perfil.",
    "Treinamento para entrevista com as perguntas mais frequentes e como responder.",
    "Revisão do DS-160 cruzada com os documentos e a comprovação de vínculos.",
    "Suporte contínuo até o dia da entrevista e após a decisão.",
  ],

  trustTitle: "Especialistas que já ajudaram milhares de brasileiros",
  trustStats: [
    { value: "+16.300", label: "casos atendidos" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de atuação" },
    { value: "4.9", label: "nota no Google" },
  ],

  ctaTitle: "Fale com um especialista agora",
  ctaSubtitle: "Escolha o atendente e inicie sua avaliação personalizada.",

  reviewedBy: {
    name: "Lucas Philipe",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/foto-lucas.jpeg",
  },

  relatedLinks: [
    { label: "Visto americano negado: o que fazer", href: "/visto-americano-negado" },
    { label: "Atendimento em Anápolis", href: "/visto-americano-anapolis" },
  ],

  faqs: [
    {
      q: "Quem vai atender meu caso?",
      a: "Você será atendido por um dos especialistas da Costa & Souza, com experiência real em vistos americanos.",
    },
    {
      q: "A consulta inicial é paga?",
      a: "Entre em contato pelo WhatsApp para conhecer nossos pacotes e a forma de atendimento.",
    },
    {
      q: "O especialista me acompanha até a entrevista?",
      a: "Sim. O acompanhamento é contínuo, desde o primeiro formulário até o dia da entrevista consular.",
    },
    {
      q: "O especialista garante a aprovação do visto?",
      a: "Não. A decisão final é sempre do oficial consular. O especialista prepara o seu caso da forma mais sólida possível, mas não pode garantir o resultado.",
    },
  ],
});
