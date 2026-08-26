import React from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";

const ease = [0.2, 0.8, 0.2, 1];

const PILLARS = [
  {
    n: "01",
    title: "Purpose",
    body:
      "Freres Global exists to be a single technology hardware partner for West Africa — not a computer shop, but a supplier and sourcing partner that can meet a requirement across categories, brands and buyer types.",
  },
  {
    n: "02",
    title: "Approach",
    body:
      "Two ways to supply: In-Stock for what's ready now, and Back-to-Back sourcing — through our Dubai office — for what has to be found specifically for you. One process for a single laptop and for a fleet-wide rollout.",
  },
  {
    n: "03",
    title: "Market",
    body:
      "Home base in Accra, Ghana, with a sourcing office in Dubai, UAE giving direct reach to global manufacturers. We serve corporate, government, institutional, dealer/reseller, retail and individual buyers.",
  },
  {
    n: "04",
    title: "Vision",
    body:
      "To become a leading supplier of global technology systems in Ghana, and in time, across Africa.",
  },
];

export default function AboutPage() {
  return (
    <main data-testid="about-page">
      <PageHeader
        eyebrow="[ About ]"
        title="One partner. Multiple technology solutions."
        subtitle="Freres Global Systems is a Ghanaian technology hardware supply and sourcing partner — built to be the one call a business, government office or institution needs to make."
      />

      <section className="relative pb-20 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-14 md:space-y-20">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.n}
              data-testid={`about-pillar-${p.n}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.05 }}
              className="grid md:grid-cols-12 gap-8 md:gap-14 items-start border-t border-white/[0.07] pt-10 md:pt-14"
            >
              <div className="md:col-span-3">
                <div className="font-display text-6xl md:text-7xl leading-none tracking-tighter text-white/90">
                  {p.n}
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-zinc-400 leading-relaxed text-base md:text-[17px]">
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section
        data-testid="founder-section"
        className="relative py-24 md:py-32 border-t border-white/[0.06] bg-[#070707]"
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="mono-label mb-8">[ Founder ]</div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="grid md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="font-display text-4xl md:text-5xl tracking-tighter leading-[0.98]">
                Nihal Abbas
              </h2>
              <div className="mono-label mt-4 text-zinc-500">Founder</div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-zinc-300 leading-relaxed text-lg">
                Nihal Abbas founded Freres Global in 2026, bringing over ten
                years in the technology and computer hardware industry —
                including more than six years operating in Ghana. Before
                founding Freres Global, he led CodeX Computer in Ghana, and
                has worked with both government and non-government
                organisations on technology sourcing and implementation.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-6">
                His vision for Freres Global is straightforward: build a
                leading supplier of global technology systems for Ghana —
                and, over time, for Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Have a requirement? Let's scope it."
      />
    </main>
  );
}
