import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/site-data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        data-testid="site-nav"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 nav-blur ${
          scrolled ? "py-3" : "py-4"
        } transition-[padding] duration-300`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            data-testid="brand-logo"
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo.png"
              alt="Freres Global Systems"
              className="h-14 md:h-16 w-auto"
            />
            <span className="hidden md:flex flex-col leading-none pl-1 border-l border-white/10 ml-1">
              <span className="mono-label whitespace-nowrap">Ghana · Dubai</span>
              <span className="mono-label text-zinc-600 mt-1.5 whitespace-nowrap">One partner. Multiple solutions.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((l) => (
              <div key={l.id} className="relative group/nav">
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  data-testid={`nav-link-${l.id}`}
                  className={({ isActive }) =>
                    `ul-link text-[13.5px] tracking-wide inline-flex items-center gap-1 ${
                      isActive ? "nav-link-active" : ""
                    }`
                  }
                >
                  {l.label}
                  {l.children && <ChevronDown size={12} strokeWidth={2} />}
                </NavLink>
                {l.children && (
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:translate-y-0 transition-all duration-200">
                    <div className="min-w-[220px] border border-white/10 bg-[#0A0A0A] py-2 shadow-2xl">
                      {l.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          className="block px-4 py-2.5 text-[13.5px] text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/request-a-quote"
              data-testid="nav-cta-request-quote"
              className="hidden md:inline-flex btn-pill"
            >
              Request a quote <ArrowUpRight size={14} strokeWidth={1.6} />
            </Link>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-white/15 rounded-sm"
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
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Freres Global" className="h-11 w-auto" />
                <span className="font-display text-lg">Freres Global</span>
              </div>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="w-10 h-10 border border-white/15 inline-flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-5 py-10">
              {NAV_ITEMS.map((l, i) => (
                <motion.div
                  key={l.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <Link
                    to={l.to}
                    data-testid={`mobile-link-${l.id}`}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl md:text-4xl tracking-tighter"
                  >
                    {l.label}
                  </Link>
                  {l.children && (
                    <div className="mt-3 ml-1 flex flex-col gap-2">
                      {l.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="text-zinc-400 text-sm"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <Link
                to="/request-a-quote"
                onClick={() => setOpen(false)}
                data-testid="mobile-cta"
                className="btn-solid mt-6 self-start"
              >
                Request a quote <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
