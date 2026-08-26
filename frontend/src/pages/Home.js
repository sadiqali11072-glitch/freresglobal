import React from "react";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Manifesto from "@/components/site/Manifesto";
import Segments from "@/components/site/Segments";
import Products from "@/components/site/Products";
import Services from "@/components/site/Services";
import Partners from "@/components/site/Partners";
import Footprint from "@/components/site/Footprint";
import CTASection from "@/components/site/CTASection";

export default function Home() {
  return (
    <main data-testid="landing-page">
      <Hero />
      <Marquee />
      <Manifesto />
      <Segments />
      <Products />
      <Services />
      <Partners />
      <Footprint />
      <CTASection
        eyebrow="Ready when you are"
        title="Have a technology requirement? We can probably supply it."
        subtitle="Send us a rough spec — one line item or a hundred — and hear back from a real person on our team."
      />
    </main>
  );
}
