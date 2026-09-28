import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/site-header";
import { PurchaseDialog } from "@/components/landing/purchase-dialog";
import { FaqSection } from "@/components/landing/faq-section";
import { Benefits, ClosingCTA, CredibilityStrip, Hero, Offer, SiteFooter, Story, Testimonials } from "@/components/landing/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PataFeliz | Mais alegria na rotina do seu pet" },
      { name: "description", content: "Conheça o Kit PataFeliz, uma proposta demonstrativa para transformar passeios, brincadeiras e cuidados em momentos especiais com seu pet." },
      { property: "og:title", content: "PataFeliz | Mais alegria na rotina do seu pet" },
      { property: "og:description", content: "Uma proposta cheia de carinho para transformar a rotina do seu pet em mais momentos juntos. Conheça o Kit PataFeliz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const openCheckout = () => setCheckoutOpen(true);

  return <>
    <SiteHeader onBuy={openCheckout} />
    <main>
      <Hero />
      <CredibilityStrip />
      <Benefits />
      <Story />
      <Offer onBuy={openCheckout} />
      <Testimonials />
      <FaqSection />
      <ClosingCTA />
    </main>
    <SiteFooter />
    <PurchaseDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
  </>;
}