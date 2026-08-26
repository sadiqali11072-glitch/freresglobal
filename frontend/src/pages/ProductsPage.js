import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/site/PageHeader";
import CTASection from "@/components/site/CTASection";
import { PRODUCT_CATEGORIES } from "@/lib/site-data";

const ease = [0.2, 0.8, 0.2, 1];

export default function ProductsPage() {
  return (
    <main data-testid="products-page">
      <PageHeader
        eyebrow="[ Products ]"
        title="Ten categories, one partner to bring it all through."
        subtitle="In-stock for what's ready now. Sourced back-to-back through our Dubai office for what has to be found specifically for you. Every category below can be requested as a quote — single unit or fleet."
      />

      <section className="relative pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-4 md:space-y-5">
          {PRODUCT_CATEGORIES.map((c, i) => (
            <motion.article
              key={c.slug}
              id={c.slug}
              data-testid={`category-${c.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: (i % 4) * 0.04 }}
              className="border border-white/[0.08] bg-[#080808] p-8 md:p-12 scroll-mt-32"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="max-w-2xl">
                  <span className="mono-label">{c.n} / {c.kicker}</span>
                  <h2 className="font-display text-3xl md:text-4xl tracking-tighter mt-4">{c.title}</h2>
                  <p className="mt-4 text-zinc-400 leading-relaxed">{c.blurb}</p>

                  {c.families && (
                    <div className="mt-8 flex flex-wrap gap-6">
                      {c.families.map((f) => (
                        <div key={f.brand}>
                          <div className="mono-label text-zinc-500 mb-2">{f.brand}</div>
                          <div className="flex flex-wrap gap-2">
                            {f.lines.map((l) => (
                              <span key={l} className="chip">
                                <span className="chip-dot bg-brand-blue" />
                                {l}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to={`/request-a-quote?interest=${c.slug}`}
                  data-testid={`quote-${c.slug}`}
                  className="btn-solid shrink-0"
                >
                  Request a quote <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Not sure where it fits?"
        title="Tell us the requirement — we'll place it in the right category."
        subtitle="A multi-line quote can carry more than one category at once."
      />
    </main>
  );
}
