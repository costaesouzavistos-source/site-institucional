import { createLPRoute } from "@/components/site/LPPage";
import passport from "@/assets/passport.jpg";

export const Route = createLPRoute({
  slug: "ds-160",
  title: "DS-160: O Que É e Por Que Erros Custam Caro no Visto Americano | Costa & Souza",
  description:
    "Entenda o que é o DS-160 e por que pequenos erros no formulário podem atrasar ou negar seu visto americano. Peça a revisão de um especialista.",
  keywords: "DS-160, formulário DS-160, DS-160 visto americano, erro DS-160",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/ds-160",
  schemaName: "DS-160 - Costa & Souza",
  schemaDescription:
    "Orientação sobre o formulário DS-160 com atendimento remoto em todo o Brasil.",
  telephone: "+55-62-99285-6373",

  heroTitle: "DS-160: o formulário que decide",
  heroHighlight: "antes mesmo da entrevista",
  heroSubtitle:
    "O DS-160 é o primeiro passo obrigatório de qualquer visto americano. Uma inconsistência aqui pode pesar contra você na entrevista — e não é possível editar depois de enviado.",
  heroImage: passport,
  heroImageAlt: "Formulário DS-160 do visto americano",

  lastUpdated: "julho de 2026",
  summary:
    "O DS-160 é o formulário eletrônico oficial do Departamento de Estado dos EUA, obrigatório para qualquer visto de não imigrante. Ele não tem custo para preencher — a cobrança acontece separadamente, na taxa MRV — mas cada resposta precisa ser consistente com o restante da sua documentação. Como não é possível corrigir depois de enviado, vale a pena ter alguém revisando antes de você confirmar.",

  quickTable: {
    title: "DS-160 em resumo",
    rows: [
      { label: "Custo do formulário", value: "Gratuito (a taxa MRV é paga separadamente)" },
      { label: "Pode editar depois de enviado?", value: "Não" },
      { label: "Obrigatório para", value: "Qualquer visto de não imigrante (B1/B2, F1, J1 e outros)" },
      { label: "Pré-requisito para", value: "Pagar a taxa MRV e agendar a entrevista" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Quer que um especialista revise seu DS-160 antes de enviar?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  mistakesTitle: "O que mais pesa contra o solicitante no DS-160",
  commonMistakes: [
    "Inconsistências entre o DS-160 e o passaporte ou os demais documentos.",
    "Respostas genéricas nos campos sobre viagem e vínculos.",
    "Erros que só são percebidos depois do envio, quando não é mais possível corrigir.",
    "Pagar por sites de terceiros que prometem preencher o formulário por você.",
  ],

  problemTitle: "Por que vale revisar o DS-160 com um especialista",
  problemPoints: [
    "Não é possível editar o formulário depois de enviado.",
    "Inconsistências entre o DS-160 e a documentação geram perguntas na entrevista.",
    "Cada tipo de visto tem particularidades que mudam como as perguntas devem ser respondidas.",
    "Um formulário revisado chega mais seguro ao dia da entrevista.",
  ],

  solutionTitle: "Como a Costa & Souza cuida do seu DS-160",
  solutionPoints: [
    "Preenchimento ou revisão completa do formulário pelo nosso time.",
    "Revisão cruzada entre o DS-160 e os documentos que você vai apresentar.",
    "Orientação sobre o que cada pergunta realmente está avaliando.",
    "Acompanhamento até o pagamento da taxa e o agendamento da entrevista.",
  ],

  trustTitle: "Já cuidamos do DS-160 de milhares de brasileiros",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento Brasil" },
  ],

  ctaTitle: "Não arrisque o DS-160 sozinho",
  ctaSubtitle: "Fale com um especialista antes de enviar o formulário.",

  reviewedBy: {
    name: "Jaqueline Costa",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/IMG_5787-avatar.jpg",
  },

  relatedLinks: [
    { label: "Fale com um especialista", href: "/especialista-visto-americano" },
    { label: "Visto americano negado: o que fazer", href: "/visto-americano-negado" },
  ],

  faqs: [
    {
      q: "O que é o DS-160?",
      a: "É o formulário eletrônico obrigatório do Departamento de Estado dos EUA para qualquer visto de não imigrante. Sem ele, não é possível pagar a taxa nem agendar entrevista.",
    },
    {
      q: "O DS-160 tem custo?",
      a: "Não. O formulário em si é gratuito. A cobrança obrigatória é a taxa MRV, paga separadamente.",
    },
    {
      q: "Posso corrigir um erro depois de enviado?",
      a: "Não diretamente. Um erro relevante identificado após o envio costuma exigir um novo formulário — por isso a revisão antes de enviar é tão importante.",
    },
    {
      q: "O DS-160 substitui a entrevista consular?",
      a: "Não. Ele é um pré-requisito para agendar a entrevista, mas a decisão final sobre o visto acontece na entrevista com o oficial consular.",
    },
    {
      q: "Vale a pena preencher o DS-160 sem ajuda?",
      a: "É possível, mas como não há segunda chance depois do envio, muitos preferem ter uma revisão especializada antes de confirmar.",
    },
  ],
});
