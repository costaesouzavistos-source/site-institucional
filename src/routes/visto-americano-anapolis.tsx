import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "visto-americano-anapolis",
  title: "Visto Americano em Anápolis em 2026 | Costa & Souza",
  description:
    "Visto americano em Anápolis em 2026: atendimento presencial na nossa sede ou 100% online, e o caminho mais curto até o consulado em Brasília.",
  keywords:
    "visto americano anapolis, visto americano goias, assessoria visto americano anapolis, especialista visto americano goias",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-americano-anapolis",
  schemaName: "Visto Americano em Anápolis - Costa & Souza",
  schemaDescription:
    "Assessoria para visto americano em Anápolis e todo o estado de Goiás. Atendimento presencial ou online.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Visto americano em Anápolis",
  heroHighlight: "presencial na nossa sede, ou online",
  heroSubtitle:
    "Anápolis é onde a Costa & Souza está. Se você mora aqui, pode nos visitar pessoalmente ou resolver tudo pelo WhatsApp e videochamada — como preferir.",
  heroImage: "/images/lps-images/08-goiania-hero.jpg",
  heroImageAlt: "Assessoria de visto americano para moradores de Anápolis",
  problemImage: "/images/lps-images/08-goiania-problem.jpg",
  problemImageAlt: "Desafios do visto americano para quem mora no interior de Goiás",

  lastUpdated: "julho de 2026",
  summary:
    "Quem mora em Anápolis tem uma vantagem: a Costa & Souza está aqui, não só online. A entrevista consular, no entanto, é feita em Brasília, a cerca de 150 km de distância (~2h de carro pela BR-060). O planejamento da viagem até lá faz diferença, e é algo que ajudamos a organizar desde o primeiro contato.",

  quickTable: {
    title: "Visto americano para quem mora em Anápolis",
    rows: [
      { label: "Consulado de referência", value: "Brasília (~150 km, acesso pela BR-060)" },
      { label: "Atendimento da assessoria", value: "Presencial na nossa sede em Anápolis ou 100% online" },
      { label: "Região atendida", value: "Anápolis e demais cidades de Goiás, além de todo o Brasil remotamente" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer agendar um atendimento presencial aqui em Anápolis?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  mistakesTitle: "Erros comuns de quem mora no interior de Goiás",
  commonMistakes: [
    "Não considerar o tempo de deslocamento até Brasília ao escolher o horário da entrevista.",
    "Deixar a organização da viagem até o CASV/consulado para a última hora.",
    "Achar que existe um consulado exclusivo para Goiás — a escolha do posto depende da disponibilidade de vaga.",
    "Não ter um comprovante de vínculo claro com Anápolis ou a região.",
  ],

  problemTitle: "Quem mora em Anápolis precisa de um especialista que entenda a realidade local",
  problemPoints: [
    "A viagem até o consulado em Brasília exige planejamento, mesmo sendo relativamente próxima.",
    "Muitos candidatos não sabem se devem tentar outro consulado, como São Paulo ou Rio.",
    "A documentação e a comprovação de renda variam conforme o perfil profissional da região.",
    "A falta de assessoria especializada local faz muitos desistirem ou errarem no processo.",
  ],

  solutionTitle: "Como funciona a assessoria de visto americano para quem mora em Anápolis",
  solutionPoints: [
    "Atuamos com B1/B2 Turismo/Negócios, F1 Estudante, Renovação (Dropbox) e Reversão de Visto Negado (214(b)).",
    "Atendimento presencial na nossa sede em Anápolis, ou 100% online por WhatsApp e videochamada.",
    "Indicação do melhor consulado e CASV conforme sua disponibilidade e localidade.",
    "Análise do perfil profissional e financeiro comum na região de Goiás.",
    "Preenchimento do DS-160 e preparação completa para a entrevista.",
    "Acompanhamento até o dia da entrevista e liberação do visto.",
  ],

  trustTitle: "De Anápolis para o mundo: milhares de aprovações",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento Brasil" },
  ],

  ctaTitle: "Visto americano em Anápolis?",
  ctaSubtitle: "Fale com um especialista, presencialmente ou pelo WhatsApp.",

  reviewedBy: {
    name: "Lucas Philipe",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/foto-lucas.jpeg",
  },

  relatedLinks: [
    { label: "Fale com um especialista", href: "/especialista-visto-americano" },
    { label: "Visto americano para família", href: "/visto-americano-familia" },
  ],

  faqs: [
    {
      q: "Posso ser atendido presencialmente em Anápolis?",
      a: "Sim. Nossa sede está em Anápolis. Também oferecemos atendimento 100% online para quem preferir ou não estiver na cidade.",
    },
    {
      q: "Qual consulado é usado para quem mora em Anápolis?",
      a: "Geralmente o consulado em Brasília, a cerca de 150 km, mas a escolha final depende da disponibilidade de entrevista e do seu perfil.",
    },
    {
      q: "Atendem outras cidades de Goiás?",
      a: "Sim. Atendemos clientes de todas as cidades de Goiás e de todo o Brasil, presencialmente ou de forma remota.",
    },
    {
      q: "O tempo de espera por entrevista em Brasília é longo?",
      a: "Varia ao longo do ano, com picos de demanda em períodos de férias e antes de grandes eventos. Ajudamos a planejar o melhor momento para agendar.",
    },
  ],
});
