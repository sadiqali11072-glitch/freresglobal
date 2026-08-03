import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { id: "work", label: "Work", href: "#products" },
  { id: "approach", label: "Approach", href: "#manifesto" },
  { id: "services", label: "Services", href: "#services" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        data-testid="site-nav"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 nav-blur ${
          scrolled ? "py-3" : "py-5"
        } transition-[padding] duration-300`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
          <a
            href="#top"
            data-testid="brand-logo"
            className="flex items-center gap-3 group"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 border border-white/15 rounded-sm">
              <span className="font-display text-[15px] tracking-tighter">F</span>
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[15px] tracking-tight">Freres Global</span>
              <span className="mono-label mt-1">Systems · Est. 2025</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                data-testid={`nav-link-${l.id}`}
                className="ul-link text-[13.5px] tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-testid="nav-cta-request-quote"
              className="hidden md:inline-flex btn-pill"
            >
              Request a quote <ArrowUpRight size={14} strokeWidth={1.6} />
            </a>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-white/15 rounded-sm"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <span className="font-display text-lg">Freres Global</span>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="w-10 h-10 border border-white/15 inline-flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={l.href}
                  data-testid={`mobile-link-${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                  className="font-display text-4xl tracking-tighter"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                data-testid="mobile-cta"
                className="btn-solid mt-6 self-start"
              >
                Request a quote <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
