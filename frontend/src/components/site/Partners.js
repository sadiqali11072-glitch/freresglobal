import React from "react";
import { motion } from "framer-motion";

// Grouped brand partners. Logos are rendered as clean wordmarks for a
// consistent, high-trust grid (no mismatched image logos).
const GROUPS = [
  {
    title: "Hardware & Systems",
    partners: ["Lenovo", "Dell", "HP", "HPE", "ASUS", "Orderman"],
  },
  {
    title: "Storage & Memory",
    partners: ["Western Digital", "SanDisk", "Kingston"],
  },
];

const STATS = [
  { k: "9+", v: "Authorised OEM partners" },
  { k: "2", v: "Regional hubs · Ghana + Dubai" },
  { k: "24h", v: "Quote turnaround" },
  { k: "100%", v: "Authentic, warranty-eligible units" },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Partners() {
  return (
    <section
      id="partners"
      data-testid="partners-section"
      className="relative py-28 md:py-36 border-t border-white/[0.06] bg-[#070707]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <div className="mono-label mb-6">[ 04 · Brand Partners ]</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter leading-[0.98]">
              Authorised across the
              <br />
              <span className="text-zinc-500">tier-1 stack.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-zinc-400 leading-relaxed text-lg">
              Direct sourcing relationships with the world&apos;s leading
              hardware manufacturers — so every unit shipped is authentic,
              warranty-eligible and backed by manufacturer support.
            </p>
          </div>
        </div>

        {GROUPS.map((group, gi) => (
          <div key={group.title} className={gi === 0 ? "" : "mt-14"}>
            <div className="mono-label mb-5 text-zinc-500">{group.title}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-white/[0.07]">
              {group.partners.map((p, i) => (
                <motion.div
                  key={p}
                  data-testid={`partner-${p.toLowerCase().replace(/\s+/g, "-")}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
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

        <p className="mt-10 text-center md:text-left text-zinc-400 max-w-2xl">
          Authorised sourcing and deployment across{" "}
          <span className="text-white">Ghana</span>,{" "}
          <span className="text-white">UAE</span> and West Africa.
        </p>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-white/[0.07] pt-14">
          {STATS.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.05 }}
              data-testid={`stat-${i}`}
            >
              <div className="font-display text-4xl md:text-6xl tracking-tighter leading-none">
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
