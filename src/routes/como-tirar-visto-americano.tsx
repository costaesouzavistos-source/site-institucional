import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "como-tirar-visto-americano",
  title: "Como Tirar Visto Americano em 2026: Guia Completo (7 Passos) | Costa & Souza",
  description:
    "Passo a passo para tirar o visto americano em 2026: DS-160, taxas (US$185 + nova taxa de integridade), tempo de espera por consulado e documentos. Fale grátis com um especialista.",
  keywords:
    "como tirar visto americano, passo a passo visto americano, documentos visto americano, entrevista visto americano, DS-160, CASV, quanto custa visto americano",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/como-tirar-visto-americano",
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
    "Tirar o visto americano envolve 3 partes: um formulário online (DS-160), o pagamento de taxas obrigatórias e uma entrevista em um consulado americano no Brasil. Nos últimos anos o processo ganhou uma taxa extra para quem tem o visto aprovado e os prazos de entrevista variam bastante entre São Paulo, Rio de Janeiro, Brasília, Recife e Porto Alegre. Este guia resume o que muda em 2026 e o que costuma pesar mais na hora da aprovação.",

  quickTable: {
    title: "Visto americano em resumo",
    rows: [
      { label: "Custo mínimo (obrigatório)", value: "US$185 — taxa MRV" },
      { label: "Custo se o visto for aprovado", value: "+ US$250 — Taxa de Integridade de Visto" },
      { label: "Onde é feito", value: "DS-160 online + biometria no CASV + entrevista no consulado" },
      { label: "Tempo médio de espera por entrevista", value: "30 dias a 6 meses, dependendo do consulado" },
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
        "É o formulário eletrônico oficial do Departamento de Estado dos EUA. Sem ele, não é possível pagar a taxa nem agendar entrevista. Cada resposta deve ser consistente com seus documentos.",
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
        "Se aprovado, o passaporte com o visto carimbado é devolvido em alguns dias úteis (pode levar mais tempo em caso de revisão administrativa, o chamado 221(g)). É neste momento que passa a valer a nova Taxa de Integridade de Visto, quando já estiver em vigor no seu consulado.",
    },
  ],

  costTitle: "Quanto custa tirar o visto americano",
  costItems: [
    {
      label: "Taxa MRV (DS-160)",
      value: "US$185",
      note: "Obrigatória para qualquer solicitação. Não é reembolsável, mesmo em caso de negativa.",
    },
    {
      label: "Taxa de Integridade de Visto",
      value: "+ US$250",
      note: "Nova taxa criada em 2025, cobrada só se o visto for aprovado. Implementação ainda irregular entre consulados em 2026.",
    },
    {
      label: "SEVIS (somente F1 / J1)",
      value: "US$350 (F1) / US$220 (J1)",
      note: "Paga antes do DS-160, exclusiva de vistos de estudante e intercâmbio.",
    },
    {
      label: "Agendamento expresso (opcional, B1/B2)",
      value: "US$750",
      note: "Programa temporário (jul.–dez. 2026) para conseguir entrevista em até 10 dias úteis.",
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
      value: "~1 mês para vagas recorrentes; 4 a 6 meses para o primeiro agendamento disponível",
    },
    { label: "Rio de Janeiro e Recife", value: "Normalmente menos de 30 dias" },
    { label: "Porto Alegre", value: "Cerca de 2,5 meses" },
    {
      label: "Processamento pós-entrevista",
      value: "Alguns dias úteis; pode levar semanas em caso de revisão administrativa (221(g))",
    },
  ],
  timelineNote:
    "Estimativas de julho de 2026, com base em dados públicos do Departamento de Estado. Os prazos mudam com frequência — picos de demanda antes de feriados e da Copa do Mundo 2026 tendem a alongar a fila.",

  documentsTitle: "Documentos necessários",
  documents: [
    "Passaporte válido por pelo menos 6 meses além da data da viagem",
    "Confirmação do formulário DS-160",
    "Recibo de pagamento da taxa MRV",
    "1 fotografia recente dentro do padrão exigido",
    "Comprovantes de vínculo com o Brasil (emprego, imóvel, família)",
    "Comprovantes de renda ou patrimônio",
    "Itinerário ou motivo da viagem, quando aplicável",
    "Documentos específicos do visto (ex.: carta de admissão para F1, carta da empresa para negócios)",
  ],

  mistakesTitle: "Erros comuns que atrasam ou reprovam o visto",
  commonMistakes: [
    "Preencher o DS-160 com informações que não conferem com os demais documentos",
    "Memorizar respostas para a entrevista em vez de responder com naturalidade",
    "Não comprovar vínculos suficientes com o Brasil (trabalho, família, patrimônio)",
    "Deixar o agendamento da entrevista para última hora, sem considerar a fila do consulado",
    "Ignorar a nova Taxa de Integridade de Visto ao planejar o orçamento da viagem",
    "Usar comprovantes de renda desatualizados ou incompatíveis com a declaração de IR",
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
      a: "A taxa obrigatória (MRV) é de US$185, paga por qualquer solicitante. Se o visto for aprovado, também há a nova Taxa de Integridade de Visto de US$250, criada em 2025. Vistos de estudante (F1) e intercâmbio (J1) têm ainda a taxa SEVIS.",
    },
    {
      q: "Quanto tempo demora para tirar visto americano?",
      a: "Varia bastante por consulado: de menos de 30 dias no Rio e Recife a até 6 meses para o primeiro agendamento disponível em São Paulo. Depois da entrevista, o resultado costuma sair em poucos dias úteis.",
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
  ],
});
