import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Boxes, ServerCog, FileSearch, Wrench, Globe2, Handshake, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    icon: Boxes,
    title: "Fleet Procurement",
    body: "Sourcing for company-wide device rollouts — computing, storage and everything a fleet needs, quoted as one request.",
  },
  {
    icon: ServerCog,
    title: "Server & Infrastructure Builds",
    body: "Rack and enterprise compute specified and sourced back-to-back to the project's exact requirement.",
  },
  {
    icon: FileSearch,
    title: "In-Stock or Back-to-Back",
    body: "Two ways to buy: what's ready now, or sourced specifically for you through our Dubai office.",
  },
  {
    icon: Wrench,
    title: "Multi-Line Quoting",
    body: "One Request a Quote can carry several products and models — we scope and price it as a single order.",
  },
  {
    icon: Globe2,
    title: "Global Sourcing",
    body: "A Ghana team backed by a Dubai sourcing office, for reach beyond what's on the shelf locally.",
  },
  {
    icon: Handshake,
    title: "Procurement-Grade Process",
    body: "Built for corporate, government and institutional buyers — not just a checkout page.",
  },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <div className="mono-label mb-6">[ 05 · How we work ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              What we handle,
              <br />
              <span className="text-zinc-500">so you don&apos;t.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-zinc-400 leading-relaxed text-lg max-w-lg">
              A laptop landing on someone's desk, or a server rack going
              live, is a project we care about — not just a line on a
              purchase order.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                data-testid={`service-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease, delay: (i % 3) * 0.06 }}
                className="group relative p-8 md:p-10 border-t border-l border-white/[0.07] hover:bg-white/[0.02] transition-colors"
                style={{
                  borderRight: i % 3 === 2 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                  borderBottom: i >= SERVICES.length - (SERVICES.length % 3 || 3) ? "1px solid rgba(255,255,255,0.07)" : undefined,
                }}
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="mono-label">0{i + 1}</span>
                  <Icon size={22} strokeWidth={1.4} className="text-white/80" />
                </div>
                <h3 className="font-display text-2xl md:text-[26px] tracking-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14">
          <Link to="/solutions" data-testid="services-view-solutions" className="btn-pill w-fit">
            See solutions by business need <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
