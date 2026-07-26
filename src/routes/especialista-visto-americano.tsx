import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "especialista-visto-americano",
  title: "Especialista em Visto Americano | Costa & Souza",
  description:
    "Fale com um especialista em visto americano. Atendimento personalizado, remoto e focado em aprovação. +3.300 casos aprovados.",
  keywords:
    "especialista visto americano, consultor visto americano, assessor visto americano, visto americano aprovação, Brasil",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/especialista-visto-americano",
  schemaName: "Especialista em Visto Americano - Costa & Souza",
  schemaDescription:
    "Especialista em visto americano com atendimento personalizado em todo o Brasil.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Especialista em visto americano ao seu lado",
  heroHighlight: "em todas as etapas",
  heroSubtitle:
    "Nossos especialistas analisam seu perfil, montam a estratégia e preparam você para a entrevista consular. Atendimento humano, direto e sem enrolação.",
  heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1920&q=80",
  heroImageAlt: "Especialista em visto americano atendendo cliente",

  problemTitle: "Falta de orientação especializada custa caro no visto americano",
  problemPoints: [
    "Uma resposta mal formulada na entrevista pode mudar o resultado.",
    "O perfil do candidato precisa ser apresentado de forma clara e coerente.",
    "Regras mudam e informações desatualizadas geram erros no DS-160.",
    "Sem um especialista, pequenos detalhes se tornam grandes problemas.",
  ],

  solutionTitle: "O que um especialista da Costa & Souza faz pelo seu caso",
  solutionPoints: [
    "Diagnóstico inicial completo para B1/B2 Turismo/Negócios, F1 Estudante, Renovação (Dropbox) ou Reversão de Visto Negado (214(b)).",
    "Plano de ação personalizado para aumentar a confiança do consulado no seu perfil.",
    "Treinamento para entrevista com as perguntas mais frequentes e como responder.",
    "Revisão cruzada de documentos, DS-160 e comprovação de vínculos.",
    "Suporte contínuo até o dia da entrevista e após a decisão.",
  ],

  trustTitle: "Especialistas que já ajudaram milhares de brasileiros",
  trustStats: [
    { value: "+3.300", label: "casos atendidos" },
    { value: "97%", label: "taxa de aprovação" },
    { value: "+12", label: "anos de atuação" },
    { value: "4.9", label: "nota no Google" },
  ],

  ctaTitle: "Fale com um especialista agora",
  ctaSubtitle: "Escolha o atendente e inicie sua avaliação personalizada.",

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
  ],
});
