import { createFileRoute } from "@tanstack/react-router";
import { SpecialistLinkPage } from "@/components/site/SpecialistLinkPage";
import { SPECIALISTS } from "@/lib/specialists";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://costaesouzavistos.com";
const specialist = SPECIALISTS.find((s) => s.slug === "jacqueline")!;

// Redirecionamento temporário (apenas neste link pessoal): Jacqueline está
// sobrecarregada de mensagens enquanto foca em passagens dos clientes, então
// o WhatsApp deste link específico recebe as mensagens no número do Lucas.
// O restante do site (modal de WhatsApp, /links, etc.) continua mostrando o
// número real dela. Reverter para specialist.phone quando ela voltar a atender.
const jacquelineForLink = { ...specialist, phone: "5562992856373" };

export const Route = createFileRoute("/jacqueline")({
  head: () => ({
    meta: [
      { title: `${specialist.name} — Costa & Souza` },
      { name: "description", content: specialist.role },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/jacqueline` }],
  }),
  component: () => (
    <SpecialistLinkPage
      specialist={jacquelineForLink}
      backgroundImage="/images/optimized/jacqueline-link-bg-v2.jpg"
    />
  ),
});
