import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero, About, Facilities, Training, WhyUs, Gallery, Reviews, Membership, Contact, Faq, Footer, FloatingWhatsApp } from "@/components/site/Sections";
import { GYM } from "@/data/gym";

const title = "Muntazim's Ultimate Gym | Fitness Center in Vishala, Ahmedabad";
const description =
  "Discover Muntazim's Ultimate Gym in Vishala, Ahmedabad. Contact us to explore gym facilities, available training options, and membership plans.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ExerciseGym",
          name: GYM.name,
          telephone: GYM.phoneE164,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. 7, Circle, Unit Hills Society, Rehnuma Society, Vishala",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            postalCode: "380055",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 btn-lime">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Facilities />
        <Training />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Membership />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
