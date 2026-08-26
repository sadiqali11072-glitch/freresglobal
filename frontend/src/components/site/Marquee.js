import React from "react";
import FastMarquee from "react-fast-marquee";

const WORDS = [
  "One Partner. Multiple Technology Solutions.",
  "Ghana · Dubai · West Africa",
  "Computing · Servers · Storage · Networking",
  "In-Stock supply. Back-to-Back sourcing.",
  "Lenovo · Dell · HP · ASUS · Cisco · Samsung",
  "Corporate. Government. Institutions. Dealers.",
];

export default function Marquee() {
  return (
    <section
      data-testid="marquee-section"
      className="relative py-10 md:py-14 border-y border-white/[0.06] bg-[#070707]"
      aria-label="Brand statement marquee"
    >
      <FastMarquee speed={38} gradient={false} pauseOnHover>
        {WORDS.map((w, i) => (
          <span key={i} className="ticker-word text-3xl md:text-5xl lg:text-6xl">
            {w}
            <span className="ticker-star">✦</span>
          </span>
        ))}
      </FastMarquee>
    </section>
  );
}
