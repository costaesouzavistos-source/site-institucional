import { createLPRoute } from "@/components/site/LPPage";
import passport from "@/assets/passport.jpg";

export const Route = createLPRoute({
  slug: "renovar-visto-americano",
  title: "Renovar Visto Americano | Costa & Souza",
  description:
    "Renove seu visto americano com segurança. Atendemos renovação sem entrevista (dropbox) e casos que precisam de nova entrevista. Fale conosco.",
  keywords:
    "renovar visto americano, renovação visto americano, dropbox visto americano, interview waiver, visto vencido",
  ogImage: "https://costaesouza.com.br/og-image.jpg",
  canonical: "https://costaesouza.com.br/renovar-visto-americano",
  schemaName: "Renovar Visto Americano - Costa & Souza",
  schemaDescription:
    "Renovação de visto americano com atendimento remoto em todo o Brasil. Dropbox e entrevista.",
  telephone: "+55-62-99285-6373",

  heroTitle: "Renove seu visto americano",
  heroHighlight: "sem complicação",
  heroSubtitle:
    "Seu visto venceu ou está prestes a vencer? Cuidamos da renovação completa, incluindo casos elegíveis ao dropbox (sem entrevista) e aqueles que exigem novo agendamento.",
  heroImage: passport,
  heroImageAlt: "Avião e passaporte para renovação de visto americano",

  problemTitle: "Renovar o visto americano pode ter pegadinhas",
  problemPoints: [
    "Elegibilidade ao dropbox muda conforme o tempo e o histórico do candidato.",
    "Passaporte novo com visto antigo exige atenção especial.",
    "Informações inconsistentes entre o pedido anterior e o atual geram suspeita.",
    "Muitos deixam para renovar em cima da hora e perdem a viagem.",
  ],

  solutionTitle: "Como funciona a renovação de visto americano com a Costa & Souza",
  solutionPoints: [
    "Avaliação de elegibilidade ao dropbox (Interview Waiver) no primeiro contato.",
    "Revisão do novo DS-160 comparado ao pedido anterior.",
    "Orientação sobre envio e devolução segura do passaporte.",
    "Preparação para entrevista quando o dropbox não for possível.",
    "Acompanhamento até a liberação do novo visto.",
  ],

  trustTitle: "Renovações aprovadas com agilidade e segurança",
  trustStats: [
    { value: "+3.300", label: "vistos aprovados" },
    { value: "97%", label: "taxa de aprovação" },
    { value: "+12", label: "anos de experiência" },
    { value: "100%", label: "atendimento remoto" },
  ],

  ctaTitle: "Renove seu visto com quem entende do assunto",
  ctaSubtitle: "Envie seus dados e descubra se você pode usar o dropbox.",

  faqs: [
    {
      q: "Posso renovar o visto sem entrevista?",
      a: "Depende do seu perfil e da regra vigente. Muitos candidatos com visto anterior válido ou vencido recentemente podem ser elegíveis ao dropbox.",
    },
    {
      q: "Meu visto venceu há anos. Ainda posso renovar?",
      a: "Sim, em muitos casos é possível. A elegibilidade ao dropbox pode variar, mas o processo de renovação continua válido.",
    },
    {
      q: "Quanto tempo leva a renovação?",
      a: "O dropbox costuma ser mais rápido, mas o prazo varia conforme a demanda do consulado. Entrevistas podem levar mais tempo devido à fila.",
    },
  ],
});
