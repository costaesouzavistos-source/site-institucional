import { createFileRoute } from "@tanstack/react-router";
import { SpecialistLinkPage } from "@/components/site/SpecialistLinkPage";
import { SPECIALISTS } from "@/lib/specialists";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://costaesouzavistos.com";
const specialist = SPECIALISTS.find((s) => s.slug === "lucas")!;

export const Route = createFileRoute("/lucas")({
  head: () => ({
    meta: [
      { title: `${specialist.name} — Costa & Souza` },
      { name: "description", content: specialist.role },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/lucas` }],
  }),
  component: () => (
    <SpecialistLinkPage
      specialist={specialist}
      backgroundImage="/images/optimized/lucas-link-bg.jpg"
      backgroundPosition="object-[center_30%]"
    />
  ),
});
