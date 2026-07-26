import { createLPRoute } from "@/components/site/LPPage";
import passport from "@/assets/passport.jpg";

export const Route = createLPRoute({
  slug: "visto-americano-estudante",
  title: "Visto Americano de Estudante (F1) em 2026 | Costa & Souza",
  description:
    "Visto F1 em 2026: o que é o I-20, a taxa SEVIS e o que avaliar antes de estudar nos EUA. Fale com um especialista em visto de estudante.",
  keywords:
    "visto f1, visto de estudante americano, visto para estudar nos eua, I-20, taxa SEVIS",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/visto-americano-estudante",
  schemaName: "Visto Americano de Estudante F1 - Costa & Souza",
  schemaDescription:
    "Assessoria para visto americano de estudante (F1) com atendimento remoto em todo o Brasil.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Visto americano de estudante",
  heroHighlight: "F1, para intercâmbio e universidade",
  heroSubtitle:
    "Curso de idioma, high school, graduação ou pós: o visto F1 tem uma etapa que a maioria esquece — o I-20, que precisa vir antes até do DS-160.",
  heroImage: passport,
  heroImageAlt: "Estudante brasileiro se preparando para estudar nos Estados Unidos",

  lastUpdated: "julho de 2026",
  summary:
    "O F1 é o visto para quem vai estudar nos Estados Unidos em curso de tempo integral — de cursos de idioma a programas de graduação e pós-graduação. Diferente do B1/B2, o processo começa antes do DS-160: é preciso ter o formulário I-20, emitido pela instituição de ensino americana, e pagar a taxa SEVIS.",

  quickTable: {
    title: "Visto F1 em resumo",
    rows: [
      { label: "Para que serve", value: "Cursos de idioma, high school, graduação e pós-graduação em tempo integral" },
      { label: "Pré-requisito", value: "Formulário I-20, emitido pela instituição de ensino americana" },
      { label: "Taxa extra", value: "SEVIS (US$350), paga antes do DS-160" },
      { label: "Trabalho nos EUA", value: "Permitido só em situações específicas (CPT/OPT), não como emprego comum" },
    ],
  },

  inlineCtaAfterTable: {
    text: "Já tem o I-20 ou está começando o processo agora?",
    buttonText: "Fazer diagnóstico gratuito",
  },

  mistakesTitle: "Erros comuns no visto F1",
  commonMistakes: [
    "Tentar agendar a entrevista antes de ter o I-20 em mãos.",
    "Esquecer de pagar a taxa SEVIS antes de preencher o DS-160.",
    "Não comprovar vínculos com o Brasil — mesmo sendo estudante, o consulado avalia a intenção de retorno.",
    "Achar que o F1 permite trabalhar livremente nos EUA durante o curso.",
  ],

  problemTitle: "O visto F1 tem uma etapa que muita gente esquece",
  problemPoints: [
    "Sem o I-20 da instituição de ensino, não é possível avançar no processo.",
    "A taxa SEVIS é separada da MRV e precisa ser paga antes do DS-160.",
    "O consulado quer entender a intenção de retorno ao Brasil após o curso.",
    "Cursos diferentes (idioma, high school, graduação) têm exigências diferentes.",
  ],

  solutionTitle: "Como a Costa & Souza organiza o processo do F1",
  solutionPoints: [
    "Verificação do I-20 e da taxa SEVIS antes de qualquer outro passo.",
    "Preenchimento do DS-160 alinhado com o curso e a instituição de destino.",
    "Organização de comprovantes financeiros e vínculos com o Brasil.",
    "Preparação para a entrevista com foco nas perguntas sobre o plano de estudo e retorno.",
  ],

  trustTitle: "Estudantes brasileiros aprovados para universidades e intercâmbios nos EUA",
  trustStats: [
    { value: "+16.300", label: "vistos aprovados" },
    { value: "98%", label: "taxa de aprovação" },
    { value: "+10", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Vai estudar nos Estados Unidos?",
  ctaSubtitle: "Fale com um especialista e organize o F1 sem perder tempo.",

  reviewedBy: {
    name: "Lucas Philipe",
    role: "Especialista em Vistos Americanos, Costa & Souza",
    credential: "+10 anos de experiência",
    photo: "/images/optimized/foto-lucas.jpeg",
  },

  relatedLinks: [
    { label: "Fale com um especialista", href: "/especialista-visto-americano" },
    { label: "Visto americano para crianças", href: "/visto-americano-criancas" },
  ],

  faqs: [
    {
      q: "O que é o I-20?",
      a: "É o formulário emitido pela instituição de ensino americana que aceitou o estudante. Ele é pré-requisito para pagar a taxa SEVIS e preencher o DS-160 do visto F1.",
    },
    {
      q: "Preciso pagar a taxa SEVIS?",
      a: "Sim. É uma taxa de US$350, obrigatória para vistos F1, paga antes do DS-160 e separada da taxa MRV.",
    },
    {
      q: "Posso trabalhar com visto F1?",
      a: "Só em situações específicas previstas pelo programa de estudo (como CPT e OPT), não como um emprego comum e irrestrito.",
    },
    {
      q: "O F1 permite ficar nos EUA depois de formado?",
      a: "Depende do programa e da elegibilidade a extensões como o OPT. Fora dessas regras específicas, a permanência está ligada à duração do curso.",
    },
  ],
});
