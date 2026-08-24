import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "como-tirar-visto-americano",
  title: "Como Tirar Visto Americano em 2026: Guia Completo (7 Passos) | Costa & Souza",
  description:
    "Passo a passo para tirar o visto americano em 2026: DS-160, taxa consular, tempo de espera por consulado e documentos. Fale grátis com um especialista.",
  keywords:
    "como tirar visto americano, passo a passo visto americano, documentos visto americano, entrevista visto americano, DS-160, CASV, quanto custa visto americano",
  ogImage: "https://costaesouzavistos.com/og-image.jpg",
  canonical: "https://costaesouzavistos.com/como-tirar-visto-americano",
  schemaName: "Como Tirar Visto Americano - Costa & Souza",
  schemaDescription:
    "Guia passo a passo para tirar visto americano com atendimento remoto em todo o Brasil.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Como tirar visto americano em 2026",
  heroHighlight: "guia completo em 7 passos",
  heroSubtitle:
    "Do formulário DS-160 à entrevista consular: entenda cada etapa, quanto custa e quanto tempo demora antes de começar o processo.",
  heroImage: "/images/lps-images/02-como-tirar-hero.jpg",
  heroImageAlt: "Planejamento do processo de visto americano passo a passo",
  problemImage: "/images/lps-images/02-como-tirar-problem.jpg",
  problemImageAlt: "Etapas do processo de visto americano que exigem atenção",

  lastUpdated: "julho de 2026",
  summary:
    "Tirar o visto americano envolve 3 etapas: preencher o formulário online DS-160, pagar a taxa consular obrigatória e comparecer à entrevista em um consulado americano no Brasil. Os prazos de entrevista variam entre São Paulo, Rio de Janeiro, Brasília, Recife e Porto Alegre. Este guia resume o processo e o que costuma pesar mais na hora da aprovação.",

  quickTable: {
    title: "Visto americano em resumo",
    rows: [
      { label: "Custo mínimo (obrigatório)", value: "US$185 — taxa MRV" },
      { label: "Onde é feito", value: "DS-160 online + biometria no CASV + entrevista no consulado" },
      { label: "Tempo médio de espera por entrevista", value: "70 a 90 dias" },
      { label: "Validade típica (B1/B2 aprovado)", value: "Até 10 anos, múltiplas entradas" },
    ],
  },

  steps: [
    {
      title: "1. Defina o tipo de visto certo para o seu caso",
      description:
        "B1/B2 (turismo ou negócios), F1 (estudante), J1 (intercâmbio), renovação via Dropbox ou reversão de negativa 214(b). O tipo errado atrasa o processo inteiro.",
    },
    {
      title: "2. Preencha o formulário DS-160",
      description:
        "É o formulário oficial para análise de informações sobre o solicitante.",
    },
    {
      title: "3. Pague a taxa MRV (US$185)",
      description:
        "Taxa obrigatória para qualquer solicitação, paga antes do agendamento. Não é reembolsável, mesmo se o visto for negado.",
    },
    {
      title: "4. Agende a biometria no CASV e a entrevista no consulado",
      description:
        "O CASV (Central de Atendimento ao Solicitante de Visto) coleta digitais e foto. A disponibilidade de datas varia muito entre São Paulo, Rio, Brasília, Recife e Porto Alegre.",
    },
    {
      title: "5. Organize a documentação",
      description:
        "Passaporte, comprovação de renda, vínculos com o Brasil e documentos específicos do seu tipo de visto. É aqui que a maioria dos erros acontece.",
    },
    {
      title: "6. Compareça à entrevista consular",
      description:
        "Costuma durar poucos minutos. O oficial consular decide com base nas respostas, na documentação e na percepção de vínculo com o Brasil.",
    },
    {
      title: "7. Aguarde o resultado e retire o passaporte",
      description:
        "Se aprovado, o passaporte com o visto impresso é devolvido em alguns dias úteis. O prazo pode ser maior em caso de revisão administrativa, o chamado 221(g).",
    },
  ],

  costTitle: "Quanto custa tirar o visto americano",
  costItems: [
    {
      label: "Taxa MRV (taxa consular)",
      value: "US$185",
      note: "Obrigatória para qualquer solicitação. Não é reembolsável, mesmo em caso de negativa.",
    },
    {
      label: "SEVIS (somente F1 / J1)",
      value: "US$350 (F1) / US$220 (J1)",
      note: "Paga antes do DS-160, exclusiva de vistos de estudante e intercâmbio.",
    },
    {
      label: "Taxa de entrega premium",
      value: "R$ 64 por pessoa",
      note: "Opcional, para receber o passaporte com o visto pelos Correios na comodidade da sua residência.",
    },
  ],
  costNote:
    "Valores em dólar conforme tabela oficial do Departamento de Estado dos EUA (travel.state.gov), com dados atualizados em julho de 2026. Outras cobranças podem ser aplicáveis dependendo das regras vigentes no momento da sua solicitação — consulte sempre as informações oficiais antes de efetuar qualquer pagamento.",

  inlineCtaAfterTable: {
    text: "Quer confirmar qual visto e quais taxas se aplicam ao seu caso?",
    buttonText: "Fazer diagnóstico gratuito",
  },
  inlineCtaAfterCost: {
    text: "Quer evitar erros no DS-160 e pagar só o que é necessário?",
    buttonText: "Falar com um especialista",
  },

  reviewedBy: {
    name: "Lucas Philipe",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/foto-lucas.jpeg",
  },

  relatedLinks: [
    { label: "Fale com um especialista", href: "/especialista-visto-americano" },
    { label: "Visto americano negado: o que fazer", href: "/visto-americano-negado" },
  ],

  timelineTitle: "Quanto tempo demora",
  timelineItems: [
    {
      label: "São Paulo e Brasília",
      value: "30 a 90 dias",
    },
    { label: "Rio de Janeiro e Recife", value: "30 a 90 dias" },
    { label: "Porto Alegre", value: "30 a 90 dias" },
    {
      label: "Processamento pós-entrevista",
      value: "7 a 10 dias úteis",
    },
  ],
  timelineNote:
    "Estimativas de julho de 2026, com base em dados públicos do Departamento de Estado. Os prazos mudam com frequência — picos de demanda antes de feriados e da Copa do Mundo 2026 tendem a alongar a fila.",

  documentsTitle: "Documentos necessários",
  documents: [
    "Passaporte válido",
    "Confirmação do formulário DS-160 impressa",
    "Comprometimento de Agendamento",
    "Comprovantes de vínculo com o Brasil (emprego, imóvel, família)",
    "Comprovantes de renda ou patrimônio",
    "Documentos específicos do visto (ex.: carta de admissão para F1, carta da empresa para negócios)",
  ],

  mistakesTitle: "Erros comuns que atrasam ou reprovam o visto",
  commonMistakes: [
    "Preencher o DS-160 com informações incoerentes ou não verdadeiras",
    "Demonstrar insegurança na entrevista, não responder com precisão ou dar respostas incoerentes com as informações do DS-160",
    "Não comprovar vínculos suficientes com o Brasil (trabalho, família, patrimônio)",
  ],

  problemTitle: "O processo de visto americano parece complexo porque realmente exige atenção",
  problemPoints: [
    "O DS-160 tem perguntas que exigem precisão e consistência.",
    "O agendamento da entrevista pode variar muito entre consulados.",
    "A documentação precisa comprovar renda, vínculos e intenção de viagem.",
    "A entrevista consular é curta e cada resposta conta.",
  ],

  solutionTitle: "Como a Costa & Souza reduz o risco de negativa",
  solutionPoints: [
    "Definição do tipo de visto ideal para o seu objetivo: B1/B2 Turismo/Negócios, F1 Estudante, Renovação (Dropbox) ou Reversão de Visto Negado (214(b)).",
    "Preenchimento correto do DS-160 com revisão cruzada de dados.",
    "Pagamento da taxa MRV e agendamento da entrevista no CASV/consulado.",
    "Organização da documentação: passaporte, renda, vínculos e comprovantes.",
    "Preparação para a entrevista consular com simulação e ajustes finais.",
  ],

  trustTitle: "Milhares de brasileiros já tiraram o visto com nosso acompanhamento",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento Brasil" },
  ],

  ctaTitle: "Quer tirar o visto sem erros?",
  ctaSubtitle: "Fale com um especialista e receba um passo a passo personalizado.",

  faqs: [
    {
      q: "Quais documentos preciso para tirar visto americano?",
      a: "Passaporte válido, comprovante de renda, vínculos com o Brasil, foto e o comprovante do DS-160. Dependendo do caso, outros documentos podem ser necessários.",
    },
    {
      q: "Quanto custa tirar o visto americano em 2026?",
      a: "A taxa consular obrigatória (MRV) é de US$185. Vistos de estudante (F1) e intercâmbio (J1) também têm a taxa SEVIS. A entrega premium custa R$ 64 por pessoa.",
    },
    {
      q: "Quanto tempo demora para tirar visto americano?",
      a: "O prazo de espera por entrevista costuma ficar entre 70 e 90 dias. Depois da entrevista, o processamento normalmente leva alguns dias úteis, salvo revisão administrativa.",
    },
    {
      q: "O que é o CASV?",
      a: "É a Central de Atendimento ao Solicitante de Visto, onde é feita a coleta de biometria (digitais e foto) antes ou no mesmo dia da entrevista, dependendo do consulado.",
    },
    {
      q: "O que é o DS-160?",
      a: "É o formulário eletrônico obrigatório do Departamento de Estado dos EUA. Nenhum solicitante de visto de não imigrante consegue pagar a taxa ou agendar entrevista sem ele.",
    },
    {
      q: "O que acontece se meu visto for negado (214(b))?",
      a: "É a negativa mais comum, aplicada quando o oficial consular não fica convencido dos vínculos do candidato com o Brasil. É possível reaplicar, mas vale entender o motivo antes de tentar de novo.",
    },
    {
      q: "Posso tirar visto americano sozinho?",
      a: "Sim, é possível. Mas a assessoria reduz erros no DS-160 e prepara você para a entrevista, aumentando as chances de aprovação.",
    },
    {
      q: "Vocês garantem a aprovação do visto?",
      a: "Nenhuma consultoria séria pode garantir aprovação — a decisão é sempre do consulado americano. O que garantimos é a melhor preparação possível: estratégia individual, DS-160 sem erros e treinamento real para a entrevista.",
    },
  ],
});
