import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Services } from "@/components/site/Services";
import { GuidesHub } from "@/components/site/GuidesHub";
import { JourneyStrategy } from "@/components/site/JourneyStrategy";
import { JourneyInterview } from "@/components/site/JourneyInterview";
import { JourneyApproval } from "@/components/site/JourneyApproval";
import { Packages } from "@/components/site/Packages";
import { FAQ, faqs } from "@/components/site/FAQ";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { WhatsAppModal } from "@/components/site/WhatsAppModal";
import { WhatsAppModalProvider } from "@/contexts/WhatsAppModalContext";

const siteUrl = import.meta.env.VITE_SITE_URL || "https://costaesouzavistos.com";
const ogImage = `${siteUrl}/og-image.jpg`;

import { FadeInSection } from "@/components/animations/FadeInSection";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Costa & Souza Especialistas em Vistos Americanos",
  description:
    "Especialistas em vistos americanos (B1/B2, F1, J1, negócios e renovação). Sede em Anápolis - GO, atendimento remoto em todo o Brasil.",
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Juscelino Kubitschek, 500, Sala 404 - Jundiaí",
    addressLocality: "Anápolis",
    addressRegion: "GO",
    postalCode: "75110-390",
    addressCountry: "BR",
  },
  telephone: "+55-62-99285-6373",
  url: siteUrl,
  image: `${siteUrl}/og-image.jpg`,
  priceRange: "$$",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Costa & Souza — Especialistas em Visto Americano | Anápolis",
      },
      {
        name: "description",
        content:
          "Especialistas em visto americano (B1/B2, F1, J1). +16.300 vistos aprovados. Sede em Anápolis-GO, atendimento remoto em todo o Brasil.",
      },
      {
        name: "keywords",
        content:
          "visto americano, especialistas em visto EUA, visto B1/B2, visto F1, visto de turismo Estados Unidos, DS-160, entrevista consular, Anápolis, Goiás",
      },
      {
        property: "og:title",
        content: "Costa & Souza — Especialistas em Visto Americano",
      },
      {
        property: "og:description",
        content:
          "Seu visto aprovado. A viagem dos sonhos começa aqui. +16.300 aprovações. Atendimento em todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: siteUrl },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <WhatsAppModalProvider>
      <div className="bg-cream text-navy-deep">
        <Header />
        <main>
          <Hero />
          <FadeInSection>
            <TrustBar />
          </FadeInSection>
          <FadeInSection>
            <Services />
          </FadeInSection>
          <FadeInSection>
            <JourneyStrategy />
          </FadeInSection>
          <FadeInSection>
            <JourneyInterview />
          </FadeInSection>
          <FadeInSection>
            <JourneyApproval />
          </FadeInSection>
          <FadeInSection>
            <Packages />
          </FadeInSection>
          <FadeInSection>
            <GuidesHub />
          </FadeInSection>
          <FadeInSection>
            <FAQ />
          </FadeInSection>
          <FadeInSection>
            <ContactCTA />
          </FadeInSection>
        </main>
        <Footer />
        <WhatsAppFloat />
        <WhatsAppModal />
        <Toaster position="top-center" richColors />
      </div>
    </WhatsAppModalProvider>
  );
}
