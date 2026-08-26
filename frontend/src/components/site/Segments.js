import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SEGMENTS } from "@/lib/site-data";

const ease = [0.2, 0.8, 0.2, 1];

export default function Segments() {
  return (
    <section
      id="segments"
      data-testid="segments-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06] bg-[#070707]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="md:col-span-6">
            <div className="mono-label mb-6">[ 03 · Who we work with ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              Built for procurement.
              <br />
              <span className="text-zinc-500">Simple for one order.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex md:items-end">
            <p className="text-zinc-400 leading-relaxed text-lg">
              A strong B2B backbone for bulk orders, procurement and
              recurring supply — kept just as easy for a single laptop.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.07]">
          {SEGMENTS.map((s, i) => (
            <motion.div
              key={s.slug}
              data-testid={`segment-${s.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.05 }}
              className="border-b border-r border-white/[0.07] p-8 md:p-10 hover:bg-white/[0.02] transition-colors flex flex-col justify-between min-h-[210px]"
            >
              <div>
                <span className="mono-label">0{i + 1}</span>
                <h3 className="font-display text-2xl tracking-tight mt-5">{s.title}</h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed mt-3">{s.blurb}</p>
              </div>
              {s.to && (
                <Link to={s.to} className="ul-link text-[13px] mt-6 inline-flex items-center gap-1.5 w-fit">
                  Learn more <ArrowUpRight size={13} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
