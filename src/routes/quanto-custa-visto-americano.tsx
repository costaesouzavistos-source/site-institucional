import { createLPRoute } from "@/components/site/LPPage";
import passport from "@/assets/passport.jpg";

export const Route = createLPRoute({
  slug: "quanto-custa-visto-americano",
  title: "Quanto Custa o Visto Americano em 2026: Tabela Completa | Costa & Souza",
  description:
    "Quanto custa tirar ou renovar o visto americano em 2026: taxa MRV, SEVIS e entrega premium. Fale grátis com um especialista.",
  keywords:
    "quanto custa visto americano, preço visto americano, taxa visto americano, valor visto americano, taxa MRV, taxa consular",
  ogImage: "https://costaesouzavistos.com/og-image.jpg",
  canonical: "https://costaesouzavistos.com/quanto-custa-visto-americano",
  schemaName: "Quanto Custa o Visto Americano - Costa & Souza",
  schemaDescription:
    "Guia de custos do visto americano com atendimento remoto em todo o Brasil, Europa e Estados Unidos.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Quanto custa o visto americano",
  heroHighlight: "em 2026, com todas as taxas",
  heroSubtitle:
    "Veja o que é obrigatório, quais taxas se aplicam a cada tipo de visto e quanto custa receber o passaporte em casa.",
  heroImage: passport,
  heroImageAlt: "Cálculo do custo do visto americano",

  lastUpdated: "julho de 2026",
  summary:
    "O custo do visto americano varia conforme a categoria solicitada. Toda solicitação exige o pagamento da taxa consular MRV, enquanto vistos de estudante e intercâmbio também exigem a taxa SEVIS. A entrega premium pelos Correios é opcional. Este guia resume o que pagar, quando pagar e como evitar surpresas no orçamento.",

  quickTable: {
    title: "Total estimado por tipo de visto",
    rows: [
      { label: "B1/B2 (turismo ou negócios)", value: "US$185 — taxa consular MRV" },
      { label: "F1 (estudante)", value: "US$185 + US$350 (SEVIS)" },
      { label: "J1 (intercâmbio)", value: "US$185 + US$220 (SEVIS)" },
      { label: "Renovação", value: "Mesma taxa consular MRV do visto original" },
      { label: "Entrega premium (opcional)", value: "R$ 64 por pessoa" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer saber exatamente quanto vai pagar no seu caso?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  costTitle: "Detalhamento de cada taxa",
  costItems: [
    {
      label: "Taxa MRV (taxa consular)",
      value: "US$185",
      note: "Obrigatória para qualquer solicitação de visto de não imigrante. Paga antes de agendar e não é reembolsável, mesmo em caso de negativa.",
    },
    {
      label: "SEVIS (F1)",
      value: "US$350",
      note: "Exclusiva de vistos de estudante, paga antes do DS-160.",
    },
    {
      label: "SEVIS (J1)",
      value: "US$220",
      note: "Exclusiva de vistos de intercâmbio, paga antes do DS-160.",
    },
    {
      label: "Taxa de entrega premium",
      value: "R$ 64 por pessoa",
      note: "Opcional, para receber o passaporte com o visto pelos Correios na comodidade da sua residência.",
    },
  ],
  costNote:
    "Valores em dólar conforme tabela oficial do Departamento de Estado dos EUA (travel.state.gov), com dados atualizados em julho de 2026. Outras cobranças podem ser aplicáveis dependendo das regras vigentes no momento da sua solicitação — consulte sempre as informações oficiais antes de efetuar qualquer pagamento.",

  inlineCtaAfterCost: {
    text: "Quer entender qual investimento faz sentido para o seu caso?",
    buttonText: "Falar com um especialista",
  },

  mistakesTitle: "Erros comuns ao calcular o custo do visto",
  commonMistakes: [
    "Achar que só paga se o visto for aprovado — a taxa MRV é cobrada mesmo em caso de negativa.",
    "Esquecer a taxa SEVIS em vistos de estudante (F1) e intercâmbio (J1).",
    "Não considerar a variação do dólar e o IOF do cartão no valor final em reais.",
    "Pagar por sites de terceiros que cobram para preencher o DS-160, que é gratuito no portal oficial.",
  ],

  problemTitle: "",
  problemPoints: [],

  solutionTitle: "Como a Costa & Souza evita surpresas no seu orçamento",
  solutionPoints: [
    "Diagnóstico do tipo de visto certo antes de qualquer pagamento.",
    "Checklist de todas as taxas aplicáveis ao seu caso específico.",
    "Orientação sobre onde pagar oficialmente, sem intermediários que cobram taxas extras.",
    "Acompanhamento durante todas as etapas do processo.",
  ],

  trustTitle: "Milhares de brasileiros já organizaram o orçamento do visto com a gente",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento Brasil" },
  ],

  ctaTitle: "Quer saber quanto vai custar o seu visto?",
  ctaSubtitle:
    "Fale com um especialista: fazemos uma análise inicial do seu caso antes de indicar a solução mais adequada.",

  reviewedBy: {
    name: "Lucas Philipe",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/foto-lucas.jpeg",
  },

  relatedLinks: [
    { label: "Visto americano negado: o que fazer", href: "/visto-americano-negado" },
    { label: "Fale com um especialista", href: "/especialista-visto-americano" },
  ],

  faqs: [
    {
      q: "Preciso pagar se o visto for negado?",
      a: "A taxa MRV (US$185) já é paga antes da entrevista e não é reembolsável, independente do resultado.",
    },
    {
      q: "O formulário DS-160 tem custo para preencher?",
      a: "Não. O DS-160 é gratuito no portal oficial (ceac.state.gov). A cobrança acontece na taxa MRV, paga separadamente antes do agendamento.",
    },
    {
      q: "Quanto custa contratar uma assessoria para o visto americano?",
      a: "O investimento na assessoria varia conforme o perfil do solicitante, o tipo de visto e o suporte necessário. Antes de informar qualquer valor, fazemos uma análise inicial para entender seu caso e indicar a solução mais adequada.",
    },
    {
      q: "As taxas do visto americano podem mudar?",
      a: "Sim, são definidas pelo Departamento de Estado dos EUA e podem ser reajustadas sem aviso prévio. Sempre confirme o valor vigente antes de pagar.",
    },
    {
      q: "Vocês garantem a aprovação do visto?",
      a: "Nenhuma consultoria séria pode garantir aprovação — a decisão é sempre do consulado americano. O que garantimos é a melhor preparação possível: estratégia individual, DS-160 sem erros e treinamento real para a entrevista.",
    },
  ],
});
