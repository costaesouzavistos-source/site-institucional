import { createLPRoute } from "@/components/site/LPPage";
import passport from "@/assets/passport.jpg";

export const Route = createLPRoute({
  slug: "visto-americano-goiania",
  title: "Visto Americano em Goiânia em 2026 | Costa & Souza",
  description:
    "Visto americano em Goiânia e região em 2026: qual consulado escolher, tempo de espera e atendimento 100% online. Assessoria especializada.",
  keywords:
    "visto americano goiania, visto americano goias, assessoria visto americano goiania, especialista visto americano goias",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-americano-goiania",
  schemaName: "Visto Americano em Goiânia - Costa & Souza",
  schemaDescription:
    "Assessoria para visto americano em Goiânia e todo o estado de Goiás. Atendimento online.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Visto americano em Goiânia",
  heroHighlight: "atendimento online, especialista real",
  heroSubtitle:
    "Você mora em Goiânia ou em qualquer cidade de Goiás e quer tirar o visto americano? Nossa assessoria é 100% remota, com acompanhamento humano do início ao fim.",
  heroImage: passport,
  heroImageAlt: "Goiânia ao entardecer, atendimento de visto americano online",

  lastUpdated: "julho de 2026",
  summary:
    "Quem mora em Goiânia normalmente faz a entrevista no consulado de Brasília, a cerca de 200 km de distância. Isso muda o planejamento: vale a pena organizar bem a viagem até lá e escolher o melhor horário de entrevista, já que o tempo de espera por vaga varia bastante ao longo do ano.",

  quickTable: {
    title: "Visto americano para quem mora em Goiânia",
    rows: [
      { label: "Consulado de referência", value: "Brasília (~200 km, acesso pela BR-060)" },
      { label: "Atendimento da assessoria", value: "100% online, sem precisar ir a Anápolis" },
      { label: "Região atendida", value: "Goiânia, Aparecida de Goiânia, Senador Canedo, Trindade e demais cidades de Goiás" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer ajuda para planejar sua entrevista em Brasília saindo de Goiânia?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  mistakesTitle: "Erros comuns de quem mora fora da capital",
  commonMistakes: [
    "Não considerar o tempo de deslocamento até Brasília ao escolher o horário da entrevista.",
    "Deixar a organização da viagem até o CASV/consulado para a última hora.",
    "Achar que existe um consulado exclusivo para Goiás — a escolha do posto depende da disponibilidade de vaga.",
    "Não ter um comprovante de vínculo claro com Goiânia ou a região metropolitana.",
  ],

  problemTitle: "Quem mora em Goiânia precisa de um especialista que entenda a realidade local",
  problemPoints: [
    "A distância até o consulado mais próximo exige planejamento.",
    "Muitos candidatos não sabem qual consulado escolher: Brasília, São Paulo ou Rio.",
    "A documentação e a comprovação de renda variam conforme o perfil profissional da região.",
    "A falta de assessoria especializada local faz muitos desistirem ou errarem no processo.",
  ],

  solutionTitle: "Como funciona a assessoria de visto americano para Goiânia",
  solutionPoints: [
    "Atuamos com B1/B2 Turismo/Negócios, F1 Estudante, Renovação (Dropbox) e Reversão de Visto Negado (214(b)).",
    "Atendimento 100% online por WhatsApp e videochamada, sem precisar ir a Anápolis.",
    "Indicação do melhor consulado e CASV conforme sua disponibilidade e localidade.",
    "Análise do perfil profissional e financeiro comum na região de Goiás.",
    "Preenchimento do DS-160 e preparação completa para a entrevista.",
    "Acompanhamento até o dia da entrevista e liberação do visto.",
  ],

  trustTitle: "De Goiânia para o mundo: milhares de aprovações",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento online" },
  ],

  ctaTitle: "Visto americano em Goiânia?",
  ctaSubtitle: "Fale com um especialista e comece seu processo sem sair de casa.",

  reviewedBy: {
    name: "Lucas Philipe",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/foto-lucas.jpeg",
  },

  relatedLinks: [
    { label: "Como funciona o processo do visto americano", href: "/como-tirar-visto-americano" },
    { label: "Assessoria de visto americano", href: "/assessoria-visto-americano" },
  ],

  faqs: [
    {
      q: "Preciso ir até Anápolis para ser atendido?",
      a: "Não. Todo o atendimento é feito online. Nossa sede está em Anápolis, mas atendemos clientes de Goiânia e de todo o Brasil remotamente.",
    },
    {
      q: "Qual consulado é melhor para quem mora em Goiânia?",
      a: "Geralmente o consulado em Brasília é o mais próximo, mas a escolha depende da disponibilidade de entrevista e do seu perfil.",
    },
    {
      q: "Atendem outras cidades de Goiás?",
      a: "Sim. Atendemos clientes de todas as cidades de Goiás e de todo o Brasil, de forma remota.",
    },
    {
      q: "O tempo de espera por entrevista em Brasília é longo?",
      a: "Varia ao longo do ano, com picos de demanda em períodos de férias e antes de grandes eventos. Ajudamos a planejar o melhor momento para agendar.",
    },
  ],
});
