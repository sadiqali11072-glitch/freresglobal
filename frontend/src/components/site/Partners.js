import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { BRAND_GROUPS, ALL_BRANDS, BRAND_LOGOS } from "@/lib/site-data";

// Featured slice of the full brand list — the complete, grouped directory
// lives on /brands.
const FEATURED_GROUPS = BRAND_GROUPS.slice(0, 2);

const STATS = [
  { k: `${ALL_BRANDS.length}+`, v: "Brands we supply" },
  { k: "2", v: "Regional hubs · Ghana + Dubai" },
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
            <div className="mono-label mb-6">[ 06 · Brands ]</div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tighter leading-[0.98]">
              Brands we
              <br />
              <span className="text-zinc-500">supply, and keep expanding.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-zinc-400 leading-relaxed text-lg">
              Whatever the technology requirement, we can probably supply
              it — sourced across the world&apos;s leading hardware and
              software manufacturers.
            </p>
          </div>
        </div>

        {FEATURED_GROUPS.map((group, gi) => (
          <div key={group.title} className={gi === 0 ? "" : "mt-14"}>
            <div className="mono-label mb-5 text-zinc-500">{group.title}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-white/[0.07]">
              {group.brands.map((p, i) => {
                const logo = BRAND_LOGOS[p];
                return (
                  <motion.div
                    key={p}
                    data-testid={`partner-${p.toLowerCase().replace(/\s+/g, "-")}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="border-b border-r border-white/[0.07] h-24 md:h-28 flex items-center justify-center px-4 group hover:bg-white/[0.03] transition-colors"
                    title={p}
                  >
                    {logo ? (
                      <span className="bg-white rounded-md w-full h-full max-h-16 flex items-center justify-center px-4 py-3 group-hover:scale-[1.03] transition-transform">
                        <img
                          src={logo}
                          alt={`${p} logo`}
                          className="max-h-8 md:max-h-9 max-w-full object-contain"
                        />
                      </span>
                    ) : (
                      <span className="font-display text-lg md:text-xl tracking-tight text-zinc-300 group-hover:text-white transition-colors text-center">
                        {p}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-zinc-400 max-w-2xl">
            Sourcing and deployment across{" "}
            <span className="text-white">Ghana</span>,{" "}
            <span className="text-white">UAE</span> and West Africa.
          </p>
          <Link to="/brands" data-testid="partners-view-all" className="btn-pill w-fit">
            View all brands <ArrowUpRight size={14} />
          </Link>
        </div>

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
