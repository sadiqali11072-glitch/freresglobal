import React from "react";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Manifesto from "@/components/site/Manifesto";
import Products from "@/components/site/Products";
import Services from "@/components/site/Services";
import Partners from "@/components/site/Partners";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="relative overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Products />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
