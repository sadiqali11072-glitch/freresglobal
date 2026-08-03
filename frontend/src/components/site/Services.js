import React from "react";
import { motion } from "framer-motion";
import { Boxes, ServerCog, ShieldCheck, Truck, Wrench, Globe2 } from "lucide-react";

const SERVICES = [
  {
    icon: Boxes,
    title: "Fleet Procurement",
    body: "Sourcing, imaging, tagging and staging for company-wide device rollouts — from 20 seats to 20,000.",
  },
  {
    icon: ServerCog,
    title: "Server & Rack Build",
    body: "Custom-spec compute, storage and networking racks — pre-cabled, pre-tested, delivered burn-in ready.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty & Care",
    body: "OEM warranty registration, on-site swap agreements and 4-hour critical-parts SLAs.",
  },
  {
    icon: Truck,
    title: "Global Logistics",
    body: "Bonded warehousing, customs clearance and next-flight-out for spares across EMEA and Africa.",
  },
  {
    icon: Wrench,
    title: "Configuration Lab",
    body: "BIOS, imaging, encryption, MDM enrolment — devices arrive login-ready for your engineers.",
  },
  {
    icon: Globe2,
    title: "IT Solutions Advisory",
    body: "Vendor-neutral architecture, refresh planning and lifecycle cost modelling for CIOs.",
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
            <div className="mono-label mb-6">[ 04 · Services ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              What we handle,
              <br />
              <span className="text-zinc-500">so you don&apos;t.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-zinc-400 leading-relaxed text-lg max-w-lg">
              We wrap every shipment in a service layer — because a laptop
              landing on a desk is a project, not a purchase order.
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
      </div>
    </section>
  );
}
