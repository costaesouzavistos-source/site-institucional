import { createLPRoute } from "@/components/site/LPPage";

export const Route = createLPRoute({
  slug: "documentos-visto-americano",
  title: "Documentos para Visto Americano | Costa & Souza",
  description:
    "Saiba quais documentos são necessários para o visto americano. Organize sua documentação com segurança e evite surpresas na entrevista.",
  keywords:
    "documentos visto americano, documentação visto americano, comprovante renda visto americano, passaporte visto americano, foto visto americano",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/documentos-visto-americano",
  schemaName: "Documentos para Visto Americano - Costa & Souza",
  schemaDescription:
    "Lista completa e organizada de documentos para visto americano com atendimento remoto.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Documentos para visto americano",
  heroHighlight: "organizados e aprovados",
  heroSubtitle:
    "A documentação certa é metade do caminho. Listamos o que você precisa, o que pode reforçar seu caso e como apresentar tudo na entrevista.",
  heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80",
  heroImageAlt: "Documentos organizados para visto americano",

  problemTitle:
    "Documentação incompleta ou mal apresentada é uma das principais causas de negativa",
  problemPoints: [
    "Renda mal comprovada gera dúvida sobre a capacidade financeira.",
    "Vínculos com o Brasil precisam ser claros e documentados.",
    "Foto fora do padrão pode causar retrabalho no CASV.",
    "Documentos desatualizados ou inconsistentes prejudicam o DS-160.",
  ],

  solutionTitle: "Como montar uma documentação sólida para o visto americano",
  solutionPoints: [
    "Passaporte válido e com validade compatível com o tipo de visto.",
    "Comprovantes de renda organizados: holerites, extratos, impostos de renda.",
    "Prova de vínculos: trabalho, estudo, família, propriedades ou investimentos.",
    "Foto 5x7 no padrão consular e comprovante de pagamento da taxa MRV.",
    "Revisão cruzada de documentos para os 4 serviços da Costa & Souza: B1/B2 Turismo/Negócios, F1 Estudante, Renovação (Dropbox) e Reversão de Visto Negado (214(b)).",
  ],

  trustTitle: "Nossa revisão de documentação já evitou centenas de negativas",
  trustStats: [
    { value: "+3.300", label: "vistos aprovados" },
    { value: "97%", label: "taxa de aprovação" },
    { value: "+12", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Quer revisar sua documentação?",
  ctaSubtitle: "Fale com um especialista e saiba exatamente o que seu caso precisa.",

  faqs: [
    {
      q: "Quais documentos são obrigatórios para visto americano?",
      a: "Passaporte válido, foto no padrão consular, comprovante de pagamento da taxa MRV e o DS-160 confirmado. Documentos de renda e vínculos são altamente recomendados.",
    },
    {
      q: "Preciso comprovar renda mesmo sendo sustentado por outra pessoa?",
      a: "Sim. O ideal é apresentar a renda do sustentador e o vínculo entre vocês, como documentos que comprovem o relacionamento.",
    },
    {
      q: "A foto do visto americano tem regras específicas?",
      a: "Sim. Deve ser 5x7 cm, fundo branco, rosto neutro, sem acessórios que cubram o rosto e tirada recentemente.",
    },
  ],
});
