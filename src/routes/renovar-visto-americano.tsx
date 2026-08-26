import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "renovar-visto-americano",
  title: "Renovar Visto Americano em 2026: Regras do Dropbox | Costa & Souza",
  description:
    "Renovação de visto americano em 2026: veja as regras atuais do dropbox (sem entrevista) e o que fazer se seu caso não for elegível. Fale com um especialista.",
  keywords:
    "renovar visto americano, renovação visto americano, dropbox visto americano, interview waiver, visto vencido",
  ogImage: "https://costaesouzavistos.com/og-image.jpg",
  canonical: "https://costaesouzavistos.com/renovar-visto-americano",
  schemaName: "Renovar Visto Americano - Costa & Souza",
  schemaDescription:
    "Renovação de visto americano com atendimento remoto em todo o Brasil, Europa e Estados Unidos. Dropbox e entrevista.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Renove seu visto americano",
  heroHighlight: "sem complicação",
  heroSubtitle:
    "Seu visto venceu ou está prestes a vencer? As regras do dropbox (renovação sem entrevista) mudaram — veja se você ainda se encaixa antes de perder tempo.",
  heroImage: "/images/lps-images/05-renovar-hero.jpg",
  heroImageAlt: "Renovação de visto americano com assessoria especializada",
  problemImage: "/images/lps-images/05-renovar-problem.jpg",
  problemImageAlt: "Pegadinhas comuns ao renovar o visto americano",

  lastUpdated: "julho de 2026",
  summary:
    "O programa que permite renovar o visto americano sem entrevista (conhecido como dropbox ou Interview Waiver) ficou mais restrito recentemente. Desde outubro de 2025, apenas quem já tem visto B1/B2 se qualifica, e a janela de elegibilidade caiu de 48 para 12 meses após o vencimento do visto anterior. Quem não se encaixa mais nessas regras precisa passar por entrevista normal — mas isso não significa começar do zero.",

  quickTable: {
    title: "Regras atuais do dropbox (Interview Waiver)",
    rows: [
      { label: "Categoria elegível", value: "Somente B1/B2, desde outubro de 2025" },
      { label: "Janela de elegibilidade", value: "Visto anterior válido ou vencido há no máximo 12 meses" },
      { label: "Idade na emissão do visto anterior", value: "18 anos ou mais" },
      { label: "Validade do visto anterior", value: "Precisa ter sido emitido pelo período de validade padrão" },
      { label: "Negativas recentes", value: "Não pode ter tido visto negado nos últimos 12 meses" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer confirmar se você ainda se qualifica para o dropbox?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  costNote:
    "As taxas de renovação seguem as mesmas regras de qualquer solicitação: taxa MRV obrigatória e, se aprovado, a Taxa de Integridade de Visto. Veja o detalhamento completo em nossa página de custos.",

  mistakesTitle: "Erros comuns na hora de renovar",
  commonMistakes: [
    "Assumir que ainda vale a regra antiga de 48 meses de janela para o dropbox.",
    "Deixar para renovar em cima da hora da viagem, sem considerar a fila de entrevista quando ela é necessária.",
    "Preencher o novo DS-160 de forma inconsistente com o pedido anterior.",
    "Não perceber que o visto atual não é mais elegível ao dropbox e perder tempo tentando o caminho errado.",
  ],

  problemTitle: "Renovar o visto americano pode ter pegadinhas",
  problemPoints: [
    "As regras de elegibilidade ao dropbox mudaram e ficaram mais restritas em 2025.",
    "Passaporte novo com visto antigo exige atenção especial.",
    "Informações inconsistentes entre o pedido anterior e o atual geram suspeita.",
    "Muitos deixam para renovar em cima da hora e perdem a viagem.",
  ],

  solutionTitle: "Como funciona a renovação de visto americano com a Costa & Souza",
  solutionPoints: [
    "Avaliação de elegibilidade ao dropbox (Interview Waiver) com base nas regras vigentes.",
    "Revisão do novo DS-160 comparado ao pedido anterior.",
    "Orientação sobre envio e devolução segura do passaporte.",
    "Preparação para entrevista quando o dropbox não for possível.",
    "Acompanhamento até a liberação do novo visto.",
  ],

  trustTitle: "Renovações aprovadas com agilidade e segurança",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Renove seu visto com quem entende do assunto",
  ctaSubtitle: "Envie seus dados e descubra se você pode usar o dropbox.",

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
      q: "Posso renovar o visto sem entrevista?",
      a: "Só se você já tem visto B1/B2, ele está válido ou venceu há no máximo 12 meses, foi emitido com validade padrão, você tinha 18 anos ou mais na emissão e não teve visto negado nos últimos 12 meses. Fora disso, a renovação exige entrevista normal.",
    },
    {
      q: "Meu visto venceu há mais de 12 meses. Ainda posso renovar?",
      a: "Sim, mas provavelmente não pelo dropbox — o processo de renovação continua válido, só que com entrevista presencial no consulado.",
    },
    {
      q: "Quanto tempo leva a renovação?",
      a: "O dropbox costuma ser mais rápido, mas o prazo varia conforme a demanda do consulado. Entrevistas podem levar mais tempo devido à fila.",
    },
    {
      q: "As regras do dropbox podem mudar de novo?",
      a: "Sim. As regras são definidas pelo Departamento de Estado dos EUA e já mudaram mais de uma vez nos últimos anos. Sempre confirme a regra vigente antes de planejar sua renovação.",
    },
    {
      q: "Mesmo pelo dropbox, preciso ir ao CASV?",
      a: "Depende do consulado e da sua idade. Alguns solicitantes ainda precisam comparecer ao CASV para coleta de biometria, mesmo quando dispensados da entrevista.",
    },
    {
      q: "Vocês garantem a aprovação do visto?",
      a: "Nenhuma consultoria séria pode garantir aprovação — a decisão é sempre do consulado americano. O que garantimos é a melhor preparação possível: estratégia individual, DS-160 sem erros e treinamento real para a entrevista.",
    },
  ],
});
