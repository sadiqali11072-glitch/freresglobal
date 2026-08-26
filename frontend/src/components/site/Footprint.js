import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Warehouse, ArrowUpRight } from "lucide-react";

const HUBS = [
  {
    tag: "Home Base",
    city: "Accra, Ghana",
    title: "Where we live and support our clients",
    points: [
      "Ghana-based team, on the ground with clients",
      "Main business presence and headquarters",
      "Point of contact for orders across West Africa",
    ],
    icon: Warehouse,
  },
  {
    tag: "Sourcing Office",
    city: "Dubai, UAE",
    title: "Our window to global manufacturers",
    points: [
      "International trading and sourcing hub",
      "Back-to-back sourcing for specific requirements",
      "One team, working for you from both ends",
    ],
    icon: Plane,
  },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Footprint() {
  return (
    <section
      id="footprint"
      data-testid="footprint-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <div className="mono-label mb-6">[ 07 · Global Sourcing ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              Rooted in Ghana,
              <br />
              <span className="text-zinc-500">connected to the world.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-zinc-400 leading-relaxed text-lg">
              Accra is home — where our team and our relationships with
              clients live. Our Dubai office gives us a direct line to
              global manufacturers, so we can bring that sourcing power
              back to West Africa.
            </p>
          </div>
        </div>

        {/* Hub cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {HUBS.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.city}
                data-testid={`hub-${h.city.toLowerCase().split(",")[0]}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease, delay: i * 0.08 }}
                className="relative border border-white/[0.08] p-8 md:p-10 bg-[#080808] hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="mono-label">{h.tag}</span>
                  <Icon size={22} strokeWidth={1.4} className="text-white/85" />
                </div>

                <div className="font-display text-3xl md:text-4xl tracking-tighter leading-none">
                  {h.city}
                </div>

                <h3 className="font-display text-xl md:text-2xl tracking-tight mt-8 leading-tight">
                  {h.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {h.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15px] text-zinc-300 leading-relaxed">
                      <span className="mt-2 inline-block h-1 w-3 bg-white/50 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12">
          <Link to="/global-sourcing" data-testid="footprint-learn-more" className="btn-pill w-fit">
            More on Global Sourcing <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
