import React from "react";
import { motion } from "framer-motion";
import { Plane, Warehouse } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";

const ease = [0.2, 0.8, 0.2, 1];

const HUBS = [
  {
    icon: Warehouse,
    tag: "Home Base",
    city: "Accra, Ghana",
    body:
      "Ghana is our main business presence and headquarters — where our team works directly with clients across West Africa.",
  },
  {
    icon: Plane,
    tag: "Sourcing Office",
    city: "Dubai, UAE",
    body:
      "Dubai is our international trading and sourcing hub, giving us a direct line to global manufacturers beyond what's available locally.",
  },
];

export default function GlobalSourcingPage() {
  return (
    <main data-testid="global-sourcing-page">
      <PageHeader
        eyebrow="[ Global Sourcing ]"
        title="Ghanaian market expertise, international sourcing reach."
        subtitle="Two ways to supply: In-Stock for what's ready now, and Back-to-Back sourcing — through our Dubai office — for a requirement that has to be found specifically for you."
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid md:grid-cols-2 gap-4 md:gap-6">
          {HUBS.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.city}
                data-testid={`sourcing-hub-${h.city.toLowerCase().split(",")[0]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease, delay: i * 0.08 }}
                className="border border-white/[0.08] p-8 md:p-10 bg-[#080808]"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="mono-label">{h.tag}</span>
                  <Icon size={22} strokeWidth={1.4} className="text-white/85" />
                </div>
                <div className="font-display text-3xl md:text-4xl tracking-tighter leading-none">
                  {h.city}
                </div>
                <p className="text-zinc-400 leading-relaxed mt-6">{h.body}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-[1400px] px-6 md:px-12 mt-14 md:mt-20"
        >
          <div className="border-t border-white/[0.08] pt-14 grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <div className="mono-label mb-4 text-brand-blue">In-Stock</div>
              <p className="text-zinc-300 leading-relaxed">
                Products already held for supply, quoted and moved without
                waiting on an international sourcing cycle.
              </p>
            </div>
            <div>
              <div className="mono-label mb-4 text-brand-gold">Back-to-Back Sourcing</div>
              <p className="text-zinc-300 leading-relaxed">
                Sourced against your specific requirement through our Dubai
                office — for brands, models or volumes not held locally.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <CTASection
        eyebrow="Have a sourcing requirement?"
        title="Tell us what you need — we'll tell you which route gets it to you."
      />
    </main>
  );
}
