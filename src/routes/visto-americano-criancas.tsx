import { createLPRoute } from "@/components/site/LPPage";
import heroFamily from "@/assets/hero-family.jpg";

export const Route = createLPRoute({
  slug: "visto-americano-criancas",
  title: "Visto Americano para Crianças | Costa & Souza",
  description:
    "Visto americano para crianças e bebês. Documentação, autorização, entrevista e acompanhamento completo. Fale com um especialista.",
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
    { value: "+3.300", label: "vistos aprovados" },
    { value: "97%", label: "taxa de aprovação" },
    { value: "+12", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Visto para criança ou bebê?",
  ctaSubtitle: "Fale com um especialista e entenda a documentação necessária.",

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
  ],
});
