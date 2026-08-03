import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  "Dell Technologies",
  "HPE",
  "Lenovo",
  "Apple",
  "Cisco",
  "NetApp",
  "Pure Storage",
  "Supermicro",
  "Synology",
  "NVIDIA",
];

const STATS = [
  { k: "18k+", v: "Units shipped globally" },
  { k: "42", v: "Countries served" },
  { k: "99.4%", v: "On-time delivery" },
  { k: "4h", v: "Critical-parts SLA" },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Partners() {
  return (
    <section
      data-testid="partners-section"
      className="relative py-24 md:py-32 border-t border-white/[0.06] bg-[#070707]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-4">
            <div className="mono-label mb-4">[ 05 · Alliances ]</div>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">
              Authorised across the tier-1 stack.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-zinc-400 leading-relaxed">
              We hold direct partner status with the world&apos;s primary OEMs,
              so every unit shipped is authentic, warranty-eligible and
              backed by manufacturer support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-white/[0.07]">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p}
              data-testid={`partner-${i}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.03 }}
              className="border-b border-r border-white/[0.07] py-8 md:py-10 px-4 flex items-center justify-center"
            >
              <span className="font-display text-lg md:text-xl tracking-tight text-zinc-300 hover:text-white transition-colors">
                {p}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              data-testid={`stat-${i}`}
            >
              <div className="font-display text-5xl md:text-6xl tracking-tighter leading-none">
                {s.k}
              </div>
              <div className="mono-label mt-4">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
