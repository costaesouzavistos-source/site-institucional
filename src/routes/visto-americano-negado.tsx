import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "visto-americano-negado",
  title: "Visto Americano Negado em 2026: O Que Fazer Agora | Costa & Souza",
  description:
    "Seu visto americano foi negado? Entenda os motivos mais comuns e o que avaliar antes de tentar novamente. Análise honesta do seu caso com um especialista.",
  keywords:
    "visto americano negado, visto negado eua, reverter visto negado, segunda tentativa visto americano, 214b",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-americano-negado",
  schemaName: "Visto Americano Negado - Costa & Souza",
  schemaDescription:
    "Análise e estratégia para visto americano negado. Segunda tentativa com mais segurança.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Visto americano negado?",
  heroHighlight: "Vamos entender o que aconteceu",
  heroSubtitle:
    "Negativa não é o fim. Analisamos o motivo da recusa, corrigimos os pontos fracos e preparamos você para retornar ao consulado com um caso muito mais sólido.",
  heroImage: "/images/lps-images/09-negado-hero.jpg",
  heroImageAlt: "Pessoa avaliando os próximos passos após visto negado",
  problemImage: "/images/lps-images/09-negado-problem.jpg",
  problemImageAlt: "Motivos comuns de negativa de visto americano",

  lastUpdated: "julho de 2026",
  summary:
    "Uma negativa de visto americano não é permanente e não impede novas tentativas. Mas voltar ao consulado sem entender o motivo real da recusa costuma repetir o mesmo resultado. O primeiro passo é identificar qual foi a base legal da negativa — na maioria dos casos, a seção 214(b) — e o que mudou (ou precisa mudar) no seu perfil desde então.",

  quickTable: {
    title: "Motivos mais comuns de negativa",
    rows: [
      { label: "214(b)", value: "Consulado não convencido da intenção de retorno ao Brasil (motivo mais comum)" },
      { label: "Documentação insuficiente", value: "Renda ou vínculos mal comprovados" },
      { label: "Inconsistências no DS-160", value: "Respostas que não conferem com os documentos" },
      { label: "212(a)", value: "Motivos específicos de inelegibilidade (menos comum, mais técnico)" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer entender exatamente por que seu visto foi negado?",
    buttonText: "Falar com um especialista",
  },

  mistakesTitle: "Erros comuns depois de uma negativa",
  commonMistakes: [
    "Tentar de novo rapidamente sem mudar nada no caso.",
    "Não guardar ou não entender o que foi escrito na carta de negativa.",
    "Repetir exatamente as mesmas respostas na próxima entrevista.",
    "Achar que o motivo foi 'aleatório', quando geralmente há um padrão identificável.",
  ],

  problemTitle: "Uma negativa de visto pode acontecer por diversos motivos",
  problemPoints: [
    "Respostas inconsistentes durante a entrevista consular.",
    "Comprovação de vínculos ou renda considerada insuficiente.",
    "DS-160 preenchido de forma genérica ou com erros.",
    "Falta de clareza sobre o objetivo real da viagem.",
  ],

  solutionTitle: "Como avaliamos uma negativa de visto americano",
  solutionPoints: [
    "Diagnóstico da seção 214(b) ou outra razão declarada na recusa.",
    "Reformulação do DS-160 com evidências mais claras e consistentes.",
    "Estratégia de comprovação de vínculos, renda e intenção de retorno.",
    "Simulação de entrevista focada nas objeções do seu caso específico.",
    "Planejamento do timing ideal para nova solicitação.",
  ],

  trustTitle: "Já analisamos negativas de centenas de brasileiros",
  trustStats: [
    { value: "+16.300", label: "casos de sucesso" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Fale com um especialista sobre sua negativa",
  ctaSubtitle: "Conte o que aconteceu na entrevista e receba uma análise honesta do seu caso.",

  reviewedBy: {
    name: "Lucas Philipe",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/foto-lucas.jpeg",
  },

  relatedLinks: [
    { label: "Entenda a negativa por 214(b)", href: "/visto-negado-214b" },
    { label: "Fale com um especialista", href: "/especialista-visto-americano" },
  ],

  faqs: [
    {
      q: "Posso solicitar o visto novamente após uma negativa?",
      a: "Sim. Não existe prazo mínimo obrigatório para reaplicar, mas é importante só retornar ao consulado quando o caso estiver realmente mais forte.",
    },
    {
      q: "Quanto tempo devo esperar para tentar de novo?",
      a: "Depende do motivo da negativa. Muitos casos precisam de mudanças concretas nos vínculos, renda ou documentação antes de uma nova entrevista.",
    },
    {
      q: "Vocês garantem a reversão da negativa?",
      a: "Não. Nenhuma assessoria pode garantir esse resultado, pois a decisão é do oficial consular. O que fazemos é uma análise honesta do que pode ter pesado contra você e uma estratégia para o próximo passo.",
    },
    {
      q: "Como saber qual foi o motivo exato da minha negativa?",
      a: "A carta ou o aviso entregue no consulado normalmente cita a base legal (como 214(b)). Analisamos esse documento junto com o relato da sua entrevista para entender o que mais pesou.",
    },
  ],
});
