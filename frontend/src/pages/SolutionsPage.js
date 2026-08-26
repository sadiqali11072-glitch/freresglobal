import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";
import { SOLUTIONS } from "@/lib/site-data";

const ease = [0.2, 0.8, 0.2, 1];

export default function SolutionsPage() {
  return (
    <main data-testid="solutions-page">
      <PageHeader
        eyebrow="[ Solutions ]"
        title="Organised by what you're trying to solve."
        subtitle="Not just a product list — solutions grouped around the business need behind the purchase."
      />

      <section className="relative pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.07]">
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.slug}
                data-testid={`solution-${s.slug}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease, delay: (i % 3) * 0.05 }}
                className="border-b border-r border-white/[0.07] p-8 md:p-10 hover:bg-white/[0.02] transition-colors flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <span className="mono-label">0{i + 1}</span>
                  <h3 className="font-display text-2xl tracking-tight mt-5">{s.title}</h3>
                  <p className="text-zinc-400 text-[15px] leading-relaxed mt-3">{s.blurb}</p>
                </div>
                <Link
                  to={`/request-a-quote?interest=${s.slug}`}
                  className="ul-link text-[13px] mt-6 inline-flex items-center gap-1.5 w-fit"
                >
                  Request a quote <ArrowUpRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Segment-specific paths */}
          <div className="mt-16 grid md:grid-cols-2 gap-4 md:gap-5">
            <Link
              to="/dealers"
              data-testid="solutions-dealers-link"
              className="border border-white/[0.08] bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors flex items-center justify-between gap-6"
            >
              <div>
                <div className="mono-label mb-3">Dealers & Resellers</div>
                <h3 className="font-display text-2xl tracking-tight">Become a partner</h3>
              </div>
              <ArrowUpRight size={22} className="shrink-0" />
            </Link>
            <Link
              to="/government"
              data-testid="solutions-government-link"
              className="border border-white/[0.08] bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors flex items-center justify-between gap-6"
            >
              <div>
                <div className="mono-label mb-3">Government & Institutions</div>
                <h3 className="font-display text-2xl tracking-tight">Procurement sourcing</h3>
              </div>
              <ArrowUpRight size={22} className="shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which solution fits?"
        subtitle="Describe the requirement and we'll scope it against the right category."
      />
    </main>
  );
}
