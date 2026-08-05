import React from "react";
import { motion } from "framer-motion";
import { Plane, Warehouse, Truck, Globe2 } from "lucide-react";

const HUBS = [
  {
    tag: "Home Base · Headquarters",
    city: "Accra, Ghana",
    coord: "5.6037° N · 0.1870° W",
    title: "Where we live, warehouse and support our clients",
    points: [
      "Local inventory for immediate release",
      "Ghana-based technical & warranty support",
      "Personal, last-mile delivery across West Africa",
      "Field engineering and a team you can call",
    ],
    icon: Warehouse,
  },
  {
    tag: "Sourcing Office",
    city: "Dubai, UAE",
    coord: "25.2048° N · 55.2708° E",
    title: "Our window to the world's leading manufacturers",
    points: [
      "Direct vendor relationships with tier-1 OEMs",
      "Consolidated freight — sea, air and courier",
      "Staging and configuration before it heads home",
      "Same-week dispatch back to Ghana",
    ],
    icon: Plane,
  },
];

const CORRIDOR_STATS = [
  { icon: Truck, k: "Dubai → Accra", v: "Air 3–5 days · Sea 22 days" },
  { icon: Globe2, k: "West Africa reach", v: "Ghana · Nigeria · Ivory Coast · Togo · Benin" },
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
            <div className="mono-label mb-6">[ 05 · Regional Footprint ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              Rooted in Ghana,
              <br />
              <span className="text-zinc-500">connected to the world.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-zinc-400 leading-relaxed text-lg">
              Accra is home — where our team, our warehouse and our
              relationships with clients live. Our Dubai office simply gives
              us a direct line to the world&apos;s best manufacturers, so we
              can bring that sourcing power back to West Africa quickly and
              affordably.
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
                <div className="mono-label mt-2">{h.coord}</div>

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

        {/* Corridor visual line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease, delay: 0.2 }}
          className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent origin-left"
        />

        {/* Corridor stats */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-12">
          {CORRIDOR_STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="flex items-start gap-5"
                data-testid={`corridor-stat-${i}`}
              >
                <Icon size={26} strokeWidth={1.4} className="text-white/85 mt-1" />
                <div>
                  <div className="font-display text-xl md:text-2xl tracking-tight">{s.k}</div>
                  <div className="mono-label mt-2">{s.v}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
