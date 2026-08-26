import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT } from "@/lib/site-data";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Solutions", to: "/solutions" },
      { label: "Brands we supply", to: "/brands" },
      { label: "Global Sourcing", to: "/global-sourcing" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Computing", to: "/products#computing" },
      { label: "Servers & Enterprise Compute", to: "/products#servers-enterprise-compute" },
      { label: "Storage", to: "/products#storage" },
      { label: "Memory", to: "/products#memory" },
      { label: "Networking", to: "/products#networking" },
      { label: "All categories", to: "/products" },
    ],
  },
  {
    title: "Work with us",
    links: [
      { label: "Request a Quote", to: "/request-a-quote" },
      { label: "Dealers & Resellers", to: "/dealers" },
      { label: "Government & Institutions", to: "/government" },
      { label: "Contact", to: "/contact" },
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
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Freres Global Systems"
                className="h-14 w-auto"
              />
              <div className="mono-label">[ Freres Global Systems ]</div>
            </div>
            <h3 className="font-display text-4xl md:text-5xl tracking-tighter leading-[0.95]">
              One partner.
              <br />
              Multiple solutions.
            </h3>
            <p className="mt-8 text-zinc-400 max-w-md leading-relaxed">
              A Ghanaian technology hardware supply and sourcing partner,
              based in Accra — with a sourcing office in Dubai bringing
              global manufacturers within reach of West Africa.
            </p>
            <div className="mt-8 space-y-2">
              {CONTACT.phones.map((p) => (
                <a
                  key={p.number}
                  href={p.href}
                  data-testid={`footer-phone-${p.number.replace(/[^0-9]/g, "")}`}
                  className="ul-link text-[15px] block w-fit"
                >
                  {p.number}
                </a>
              ))}
              {CONTACT.whatsapp && (
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="footer-whatsapp"
                  className="ul-link text-[15px] block w-fit"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="mono-label mb-5">{c.title}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="ul-link text-[15px]"
                      data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    >
                      {l.label}
                    </Link>
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
            <span className="mono-label">Accra, Ghana · Dubai, UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
