import React from "react";
import { motion } from "framer-motion";

const CHAPTERS = [
  {
    n: "01",
    title: "Procurement, engineered.",
    body:
      "Freres Global exists because West Africa deserves better than fragmented distribution. We treat every fleet, every rack and every serial as if it were our own datacenter.",
  },
  {
    n: "02",
    title: "Two hubs. One pipeline.",
    body:
      "Dubai buys, consolidates and stages. Ghana warehouses, supports and delivers. It is the fastest path from a tier-1 OEM to your loading bay anywhere in the region.",
  },
  {
    n: "03",
    title: "Authorised. Accountable.",
    body:
      "Every unit is sourced through authorised OEM channels — Lenovo, Dell, HP, HPE, ASUS, Orderman, Western Digital, SanDisk, Kingston. Authentic, warranty-eligible, tracked to serial.",
  },
  {
    n: "04",
    title: "Systems, not just SKUs.",
    body:
      "Any distributor can sell a box. We architect the stack — compute, storage, POS, networking, imaging, deployment — so the tools disappear and the work happens.",
  },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28">
          <div className="md:col-span-4">
            <div className="mono-label mb-6">[ 02 · Manifesto ]</div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="md:col-span-8"
          >
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tighter">
              Four principles.
              <br />
              <span className="text-zinc-500">Zero compromise.</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {CHAPTERS.map((c, i) => (
            <motion.article
              key={c.n}
              data-testid={`manifesto-chapter-${c.n}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.05 }}
              className="grid md:grid-cols-12 gap-8 md:gap-14 items-start border-t border-white/[0.07] pt-10 md:pt-14"
            >
              <div className="md:col-span-3">
                <div className="font-display text-6xl md:text-8xl leading-none tracking-tighter text-white/90">
                  {c.n}
                </div>
                <div className="mono-label mt-3">Chapter {c.n}</div>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                  {c.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-zinc-400 leading-relaxed text-base md:text-[17px]">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
