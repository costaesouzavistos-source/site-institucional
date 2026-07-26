import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "visto-americano-familia",
  title: "Visto Americano para Família em 2026 | Costa & Souza",
  description:
    "Visto americano para família em 2026: pais, filhos e bebês. Documentação por membro da família, autorizações e custo total. Atendimento Brasil.",
  keywords:
    "visto americano família, visto americano casal, visto americano crianças, visto para família inteira, bebê visto americano",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-americano-familia",
  schemaName: "Visto Americano para Família - Costa & Souza",
  schemaDescription:
    "Assessoria para visto americano de família, casal e crianças com atendimento remoto.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Visto americano para família",
  heroHighlight: "todos juntos, todos aprovados",
  heroSubtitle:
    "Viajar em família para os Estados Unidos exige planejamento. Cada membro tem seu próprio DS-160 e sua própria taxa — mas a estratégia pode ser pensada em conjunto.",
  heroImage: "/images/lps-images/07-familia-hero.jpg",
  heroImageAlt: "Família brasileira planejando viagem para os Estados Unidos",
  problemImage: "/images/lps-images/07-familia-problem.jpg",
  problemImageAlt: "Particularidades do visto americano para famílias",

  lastUpdated: "julho de 2026",
  summary:
    "Não existe um 'visto de família' único — cada pessoa, inclusive bebês, precisa do seu próprio DS-160 e da sua própria taxa MRV. O que muda é a estratégia: como apresentar renda e vínculos considerando a unidade familiar, e como organizar entrevistas e autorizações quando nem todos os responsáveis viajam.",

  quickTable: {
    title: "O que muda por membro da família",
    rows: [
      { label: "DS-160", value: "Um formulário por pessoa, inclusive bebês" },
      { label: "Taxa MRV", value: "US$185 por pessoa, sem desconto para grupo" },
      { label: "Entrevista", value: "Bebês e crianças pequenas costumam ser dispensados" },
      { label: "Pai/mãe que não viaja", value: "Autorização de viagem + comprovação de vínculo" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer um plano único para toda a família?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  documentsTitle: "Documentos por perfil familiar",
  documents: [
    "Passaporte de cada membro da família, inclusive bebês",
    "Certidão de nascimento dos filhos menores",
    "Autorização de viagem do pai ou mãe que não acompanha",
    "Comprovação de renda e vínculos da unidade familiar",
    "Documentos de casamento ou união, quando relevantes",
  ],

  mistakesTitle: "Erros comuns no visto em família",
  commonMistakes: [
    "Achar que existe desconto ou isenção de taxa para crianças ou bebês.",
    "Esquecer a autorização do responsável que não vai viajar.",
    "Preencher o DS-160 de um filho com dados inconsistentes em relação ao dos pais.",
    "Deixar a documentação de vínculo familiar (certidões) por conta do último momento.",
  ],

  problemTitle: "O visto em família tem particularidades que não podem ser ignoradas",
  problemPoints: [
    "Crianças e bebês precisam de documentação específica.",
    "A comprovação de vínculos e renda deve considerar toda a unidade familiar.",
    "Entrevistas podem ocorrer de forma conjunta ou individual, dependendo da idade.",
    "Um erro no DS-160 de um membro afeta o pedido de todos.",
  ],

  solutionTitle: "Como a Costa & Souza prepara a viagem da sua família",
  solutionPoints: [
    "Análise conjunta do perfil familiar e definição da melhor estratégia.",
    "Preenchimento individualizado do DS-160 para cada membro da família.",
    "Organização da documentação: renda, vínculos, certidões e autorizações.",
    "Preparação para entrevista dos responsáveis e orientação sobre menores.",
    "Acompanhamento até a aprovação de todos os passaportes.",
  ],

  trustTitle: "Famílias de todo o Brasil já realizaram o sonho americano com a gente",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Planeje o visto da sua família agora",
  ctaSubtitle: "Fale com um especialista e receba um plano para toda a família.",

  reviewedBy: {
    name: "Jaqueline Costa",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/IMG_5787-avatar.jpg",
  },

  relatedLinks: [
    { label: "Visto americano para crianças", href: "/visto-americano-criancas" },
    { label: "Fale com um especialista", href: "/especialista-visto-americano" },
  ],

  faqs: [
    {
      q: "Menores de idade precisam fazer entrevista?",
      a: "Depende da idade. Bebês e crianças pequenas geralmente não precisam. Menores maiores podem ser convocados conforme a regra do consulado.",
    },
    {
      q: "Posso fazer o visto de todo o grupo familiar junto?",
      a: "Sim. Os pedidos podem ser vinculados e as entrevistas agendadas de forma conjunta, quando possível.",
    },
    {
      q: "E se um dos pais não viajar?",
      a: "É necessário apresentar autorização do pai ou mãe que não viaja, além de documentos que comprovem o vínculo parental.",
    },
    {
      q: "Existe desconto na taxa para famílias grandes?",
      a: "Não. A taxa MRV é cobrada individualmente, inclusive para bebês, sem desconto por quantidade de pessoas.",
    },
  ],
});
