import { createLPRoute } from "@/components/site/LPPage";
import passport from "@/assets/passport.jpg";

export const Route = createLPRoute({
  slug: "quanto-custa-visto-americano",
  title: "Quanto Custa o Visto Americano em 2026: Tabela Completa | Costa & Souza",
  description:
    "Quanto custa tirar ou renovar o visto americano em 2026: taxa MRV, nova Taxa de Integridade, SEVIS e taxas extras por tipo de visto. Fale grátis com um especialista.",
  keywords:
    "quanto custa visto americano, preço visto americano, taxa visto americano, valor visto americano, taxa MRV, taxa de integridade de visto",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/quanto-custa-visto-americano",
  schemaName: "Quanto Custa o Visto Americano - Costa & Souza",
  schemaDescription:
    "Guia de custos do visto americano com atendimento remoto em todo o Brasil.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Quanto custa o visto americano",
  heroHighlight: "em 2026, com todas as taxas",
  heroSubtitle:
    "Nem todo custo aparece de primeira. Veja o que é obrigatório, o que só é cobrado se o visto for aprovado, e o que muda por tipo de visto.",
  heroImage: passport,
  heroImageAlt: "Cálculo do custo do visto americano",

  lastUpdated: "julho de 2026",
  summary:
    "O custo do visto americano varia por tipo de visto e por decisão do consulado. Toda solicitação exige o pagamento de uma taxa obrigatória (a MRV), mas há cobranças adicionais que só valem para quem tem o visto aprovado ou para categorias específicas, como estudante e intercâmbio. Este guia resume o que pagar, quando pagar e como evitar surpresas no orçamento.",

  quickTable: {
    title: "Total estimado por tipo de visto",
    rows: [
      { label: "B1/B2 (turismo ou negócios)", value: "US$185 na solicitação + US$250 se aprovado" },
      { label: "F1 (estudante)", value: "US$185 + US$350 (SEVIS) + US$250 se aprovado" },
      { label: "J1 (intercâmbio)", value: "US$185 + US$220 (SEVIS) + US$250 se aprovado" },
      { label: "Renovação (Dropbox)", value: "Mesma taxa MRV do visto original + US$250 se aprovado" },
      { label: "Agendamento expresso (opcional)", value: "+ US$750, quando disponível no seu consulado" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer saber exatamente quanto vai pagar no seu caso?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  costTitle: "Detalhamento de cada taxa",
  costItems: [
    {
      label: "Taxa MRV",
      value: "US$185",
      note: "Obrigatória para qualquer solicitação de visto de não imigrante. Paga antes de agendar e não é reembolsável, mesmo em caso de negativa.",
    },
    {
      label: "Taxa de Integridade de Visto",
      value: "US$250",
      note: "Criada por lei em 2025, cobrada apenas quando o visto é aprovado. O rollout entre consulados ainda é irregular em 2026.",
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
      label: "Agendamento expresso (B1/B2)",
      value: "US$750",
      note: "Programa temporário (jul.–dez. 2026) para interview em até 10 dias úteis, onde disponível.",
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
    "Ignorar a nova Taxa de Integridade de Visto ao planejar o orçamento da viagem.",
  ],

  problemTitle: "Custo mal calculado atrasa o planejamento da viagem",
  problemPoints: [
    "Taxas em dólar variam com a cotação no dia do pagamento.",
    "Cada tipo de visto tem uma combinação diferente de taxas obrigatórias.",
    "Sites não oficiais cobram por serviços que já são gratuitos no site do governo.",
    "A nova Taxa de Integridade de Visto ainda confunde quem já pesquisou antes de 2025.",
  ],

  solutionTitle: "Como a Costa & Souza evita surpresas no seu orçamento",
  solutionPoints: [
    "Diagnóstico do tipo de visto certo antes de qualquer pagamento.",
    "Checklist de todas as taxas aplicáveis ao seu caso específico.",
    "Orientação sobre onde pagar oficialmente, sem intermediários que cobram taxas extras.",
    "Acompanhamento até a aprovação, incluindo a taxa cobrada nesse momento.",
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
      q: "O visto americano tem uma taxa separada só para quem é aprovado?",
      a: "Sim. Desde 2025, existe a Taxa de Integridade de Visto de US$250, cobrada apenas quando o visto é emitido. Ela é separada da taxa MRV, que todo solicitante paga.",
    },
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
  ],
});
