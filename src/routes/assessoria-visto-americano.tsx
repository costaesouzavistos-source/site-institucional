import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "assessoria-visto-americano",
  title: "Assessoria para Visto Americano em 2026 | Costa & Souza",
  description:
    "Assessoria completa para visto americano em 2026: diagnóstico, DS-160, documentos e preparação para entrevista. +16.300 aprovações. Fale com um especialista.",
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
    "Você não precisa enfrentar o processo sozinho. Nossa equipe cuida da parte estratégica, tanto no DS-160 quanto na preparação para a entrevista — do início ao fim do processo.",
  heroImage: "/images/lps-images/01-assessoria-hero.jpg",
  heroImageAlt: "Assessoria especializada em visto americano com atendimento premium",
  problemImage: "/images/lps-images/01-assessoria-problem.jpg",
  problemImageAlt: "Desafios do processo de visto americano sem orientação especializada",

  lastUpdated: "julho de 2026",
  summary:
    "Assessoria de visto americano é o acompanhamento humano de todo o processo: do diagnóstico do tipo de visto certo até a preparação para a entrevista consular. Não substitui a decisão do consulado, mas reduz erros que custam tempo e dinheiro — e ajudam ou prejudicam a percepção do seu caso.",

  quickTable: {
    title: "O que está incluso na assessoria",
    rows: [
      { label: "Diagnóstico do tipo de visto", value: "B1/B2, F1, J1, renovação ou reversão de negativa" },
      { label: "Revisão de documentos", value: "Renda, vínculos e documentação específica do seu caso" },
      { label: "Formulário DS-160", value: "Revisão cruzada com os demais documentos" },
      { label: "Preparação para entrevista", value: "Simulação com feedback individual" },
      { label: "Atendimento", value: "100% remoto, por WhatsApp e videochamada" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer saber qual assessoria faz sentido para o seu caso?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  mistakesTitle: "Erros que a assessoria existe para evitar",
  commonMistakes: [
    "Preencher o DS-160 sem revisar a consistência com os demais documentos.",
    "Comprovar renda ou vínculos de forma genérica, sem estratégia para o seu perfil.",
    "Ir para a entrevista sem simulação prévia das perguntas mais difíceis.",
    "Não considerar todas as taxas aplicáveis ao planejar o orçamento.",
  ],

  problemTitle: "Sozinho, o processo de visto americano é cheio de armadilhas",
  problemPoints: [
    "O DS-160 tem dezenas de campos que, preenchidos de forma incorreta, levam à negativa.",
    "A entrevista consular exige respostas objetivas, consistentes e seguras.",
    "Cada caso é único: estratégia, renda, vínculos, histórico de viagem e profissão influenciam na decisão.",
    "Muitas pessoas desistem na primeira dificuldade ou perdem tempo com informações desencontradas.",
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
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Comece sua assessoria hoje",
  ctaSubtitle: "Fale com um especialista e receba um plano de ação para o seu caso.",

  reviewedBy: {
    name: "Jaqueline Costa",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/IMG_5787-avatar.jpg",
  },

  relatedLinks: [
    { label: "Fale com um especialista", href: "/especialista-visto-americano" },
    { label: "Visto americano negado: o que fazer", href: "/visto-americano-negado" },
  ],

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
    {
      q: "Vocês são uma empresa de visto confiável?",
      a: "A Costa & Souza é uma consultoria especializada, com mais de 10 anos de atuação e milhares de casos acompanhados. Somos uma empresa privada e independente, sem vínculo com o consulado ou o governo americano.",
    },
    {
      q: "Quanto custa a assessoria de visto americano?",
      a: "O investimento na assessoria varia conforme o perfil do solicitante, o tipo de visto e o suporte necessário. Antes de informar qualquer valor, fazemos uma análise inicial para entender seu caso e indicar a solução mais adequada.",
    },
  ],
});
