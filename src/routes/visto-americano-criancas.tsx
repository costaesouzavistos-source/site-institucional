import { createLPRoute } from "@/components/site/LPPage";
import heroFamily from "@/assets/hero-family.jpg";

export const Route = createLPRoute({
  slug: "visto-americano-criancas",
  title: "Visto Americano para Crianças e Bebês em 2026 | Costa & Souza",
  description:
    "Visto americano para crianças e bebês em 2026: documentos, autorização de viagem e quando é preciso entrevista. Fale com um especialista.",
  keywords:
    "visto americano crianças, visto americano bebê, visto americano menor, autorização visto americano menor, visto americano infantil",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-americano-criancas",
  schemaName: "Visto Americano para Crianças - Costa & Souza",
  schemaDescription: "Assessoria para visto americano de crianças e bebês com atendimento remoto.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Visto americano para crianças",
  heroHighlight: "do bebê ao adolescente",
  heroSubtitle:
    "Crianças e bebês também precisam de visto para os Estados Unidos. Cuidamos da documentação específica, autorizações e todo o acompanhamento dos responsáveis.",
  heroImage: heroFamily,
  heroImageAlt: "Criança com passaporte para viagem aos Estados Unidos",

  lastUpdated: "julho de 2026",
  summary:
    "Todo viajante, independente da idade, precisa de visto próprio para entrar nos Estados Unidos — não existe isenção para bebês ou crianças. O que muda é a comprovação: como não têm renda ou vínculo profissional próprio, o caso da criança é avaliado junto ao dos responsáveis, e há documentos extras quando um dos pais não acompanha a viagem.",

  quickTable: {
    title: "Visto de criança em resumo",
    rows: [
      { label: "Visto próprio", value: "Obrigatório para qualquer idade, inclusive bebês" },
      { label: "Entrevista", value: "Bebês e crianças pequenas costumam ser dispensados" },
      { label: "Se um dos pais não viaja", value: "Autorização de viagem assinada é necessária" },
      { label: "Comprovação financeira", value: "Baseada nos responsáveis, não na criança" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer ajuda para organizar o visto do seu filho?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  documentsTitle: "Documentos específicos para crianças",
  documents: [
    "Passaporte próprio da criança",
    "Certidão de nascimento",
    "Autorização de viagem do pai ou mãe que não acompanha",
    "Documentos que comprovem o vínculo parental",
    "Comprovação de renda e vínculos dos responsáveis",
  ],

  mistakesTitle: "Erros comuns no visto de crianças",
  commonMistakes: [
    "Achar que criança pequena não precisa de visto próprio.",
    "Esquecer a autorização do responsável que não vai viajar.",
    "Preencher o DS-160 da criança com dados que não conferem com os dos pais.",
    "Deixar a certidão de nascimento ou documentos de guarda para a última hora.",
  ],

  problemTitle: "O visto de crianças exige cuidados especiais",
  problemPoints: [
    "Autorização de viagem é obrigatória quando um dos pais não acompanha.",
    "Certidões de nascimento e documentos dos responsáveis precisam estar em dia.",
    "Crianças maiores podem precisar comparecer ao consulado.",
    "O DS-160 infantil deve ser preenchido com dados precisos dos pais.",
  ],

  solutionTitle: "Como a Costa & Souza cuida do visto das crianças",
  solutionPoints: [
    "Verificação da documentação obrigatória: passaporte, certidão e autorizações.",
    "Preenchimento do DS-160 com dados consistentes dos pais ou responsáveis.",
    "Orientação sobre a necessidade de entrevista e comparecimento.",
    "Preparação dos responsáveis para responder sobre a viagem da criança.",
    "Acompanhamento até a aprovação e recebimento do passaporte.",
  ],

  trustTitle: "Crianças e bebês aprovados com segurança",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Visto para criança ou bebê?",
  ctaSubtitle: "Fale com um especialista e entenda a documentação necessária.",

  reviewedBy: {
    name: "Jaqueline Costa",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/IMG_5787-avatar.jpg",
  },

  relatedLinks: [
    { label: "Visto americano para família", href: "/visto-americano-familia" },
    { label: "Documentos necessários para o visto", href: "/documentos-visto-americano" },
  ],

  faqs: [
    {
      q: "Bebê precisa de visto para os EUA?",
      a: "Sim. Todo viajante, independente da idade, precisa de visto ou ESTA para entrar nos Estados Unidos.",
    },
    {
      q: "Criança precisa ir à entrevista no consulado?",
      a: "Depende da idade. Bebês e crianças pequenas geralmente não precisam. Crianças maiores podem ser convocadas.",
    },
    {
      q: "O que é a autorização de viagem para menor?",
      a: "É um documento assinado pelo pai ou mãe que não acompanha a criança na viagem, autorizando a saída do país.",
    },
    {
      q: "A taxa do visto é mais barata para crianças?",
      a: "Não. A taxa MRV é a mesma para qualquer idade, inclusive bebês.",
    },
  ],
});
