import React from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";

const ease = [0.2, 0.8, 0.2, 1];

const POINTS = [
  {
    n: "01",
    title: "One sourcing partner",
    body: "Across computing, servers, storage, networking and more — one relationship instead of many suppliers.",
  },
  {
    n: "02",
    title: "In-Stock and Back-to-Back",
    body: "Draw on what's already available, or have us source a specific brand, model or volume through our Dubai office.",
  },
  {
    n: "03",
    title: "Multi-line quoting",
    body: "Send a full order — multiple products and quantities — as a single quote request.",
  },
];

export default function DealersPage() {
  return (
    <main data-testid="dealers-page">
      <PageHeader
        eyebrow="[ Dealers & Resellers ]"
        title="Become a partner."
        subtitle="A sourcing partner for businesses that resell hardware to their own customers. Tell us your typical order profile and we'll scope how we can work together."
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="space-y-14 md:space-y-16">
            {POINTS.map((p, i) => (
              <motion.article
                key={p.n}
                data-testid={`dealer-point-${p.n}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.05 }}
                className="grid md:grid-cols-12 gap-8 items-start border-t border-white/[0.07] pt-10"
              >
                <div className="md:col-span-2">
                  <div className="font-display text-5xl leading-none tracking-tighter text-white/90">{p.n}</div>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-zinc-400 leading-relaxed">{p.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to talk partnership?"
        title="Tell us about your business and how you sell — we'll take it from there."
        primary={{ label: "Become a partner", to: "/request-a-quote?interest=procurement-sourcing" }}
      />
    </main>
  );
}
