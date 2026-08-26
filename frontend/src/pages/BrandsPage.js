import React from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";
import { BRAND_GROUPS, ALL_BRANDS } from "@/lib/site-data";

const ease = [0.2, 0.8, 0.2, 1];

export default function BrandsPage() {
  return (
    <main data-testid="brands-page">
      <PageHeader
        eyebrow="[ Brands ]"
        title={`${ALL_BRANDS.length}+ brands we supply.`}
        subtitle="Whatever the technology requirement, we can probably supply it. This list keeps growing — if the brand you need isn't listed, ask us anyway."
      />

      <section className="relative pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-14">
          {BRAND_GROUPS.map((group, gi) => (
            <div key={group.title}>
              <div className="mono-label mb-5 text-zinc-500">{group.title}</div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-white/[0.07]">
                {group.brands.map((p, i) => (
                  <motion.div
                    key={p}
                    data-testid={`brand-${p.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 12) * 0.03 }}
                    className="border-b border-r border-white/[0.07] h-24 md:h-28 flex items-center justify-center px-4 group hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="font-display text-lg md:text-xl tracking-tight text-zinc-300 group-hover:text-white transition-colors text-center">
                      {p}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Looking for something specific?"
        title="Tell us the brand and model — we'll quote it."
      />
    </main>
  );
}
