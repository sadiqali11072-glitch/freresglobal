import React from "react";
import { motion } from "framer-motion";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";

const ease = [0.2, 0.8, 0.2, 1];

const POINTS = [
  {
    n: "01",
    title: "Procurement-grade process",
    body: "Built for formal procurement — clear line-item quotes, product specs and a documented request for every order.",
  },
  {
    n: "02",
    title: "Experience with the public sector",
    body: "Our founder has worked with government and non-government organisations on technology sourcing and implementation.",
  },
  {
    n: "03",
    title: "Institutions, including education",
    body: "Schools, universities and other institutions can source through the same request process as any bulk order.",
  },
];

export default function GovernmentPage() {
  return (
    <main data-testid="government-page">
      <PageHeader
        eyebrow="[ Government & Institutions ]"
        title="Technology sourcing for the public sector and institutions."
        subtitle="From single departments to institution-wide rollouts — submit your requirement and we'll scope it against a formal quote."
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="space-y-14 md:space-y-16">
            {POINTS.map((p, i) => (
              <motion.article
                key={p.n}
                data-testid={`gov-point-${p.n}`}
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
        eyebrow="Have a procurement requirement?"
        title="Submit your specification and we'll return a formal quote."
        primary={{ label: "Request a quote", to: "/request-a-quote?interest=procurement-sourcing" }}
      />
    </main>
  );
}
