import React from "react";
import { motion } from "framer-motion";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#manifesto" },
      { label: "Solutions", href: "#solutions" },
      { label: "Brand Partners", href: "#partners" },
      { label: "Regional Footprint", href: "#footprint" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Workstations & Laptops", href: "#solutions" },
      { label: "POS & Retail", href: "#solutions" },
      { label: "Storage & Components", href: "#solutions" },
      { label: "Servers & Datacenter", href: "#solutions" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "sales@freresglobal.com", href: "mailto:sales@freresglobal.com" },
      { label: "support@freresglobal.com", href: "mailto:support@freresglobal.com" },
      { label: "Accra, Ghana · Dubai, UAE", href: "#footprint" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative pt-24 pb-10 border-t border-white/[0.06] bg-[#050505]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-14 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Freres Global Systems"
                className="h-14 w-auto"
              />
              <div className="mono-label">[ Freres Global Systems ]</div>
            </div>
            <h3 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.95]">
              Hardware,
              <br />
              handled.
            </h3>
            <p className="mt-8 text-zinc-400 max-w-md leading-relaxed">
              A Ghanaian enterprise IT solutions and hardware supply house,
              proudly based in Accra — with a dedicated sourcing office in
              Dubai bringing the world's best manufacturers within reach of
              West Africa.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="mono-label mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="ul-link text-[15px]"
                      data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant type sign-off */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
          aria-hidden
        >
          <div className="font-display text-[20vw] md:text-[16vw] leading-[0.8] tracking-tighter text-white/95 select-none">
            freresglobal
          </div>
          <div className="mt-2 flex items-end justify-between">
            <span className="mono-label">.com — Ghana · Dubai · West Africa</span>
            <span className="mono-label hidden md:inline">Freres Global Systems ©</span>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="mono-label">
            © {new Date().getFullYear()} Freres Global Systems. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="ul-link text-[13px]" data-testid="footer-privacy">Privacy</a>
            <a href="#" className="ul-link text-[13px]" data-testid="footer-terms">Terms</a>
            <a href="#" className="ul-link text-[13px]" data-testid="footer-status">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
                All systems operational
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
