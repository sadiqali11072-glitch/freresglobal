import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ease = [0.2, 0.8, 0.2, 1];

export default function CTASection({
  eyebrow = "Ready when you are",
  title,
  subtitle,
  primary = { label: "Request a quote", to: "/request-a-quote" },
  secondary = { label: "Talk to our team", to: "/contact" },
}) {
  return (
    <section
      data-testid="cta-section"
      className="relative py-24 md:py-32 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="border border-white/[0.08] bg-[#080808] px-8 py-14 md:px-16 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div>
            <div className="mono-label mb-5">{eyebrow}</div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-[1.02] max-w-2xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-5 text-zinc-400 leading-relaxed max-w-xl">{subtitle}</p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {primary && (
              <Link to={primary.to} data-testid="cta-primary" className="btn-solid">
                {primary.label} <ArrowUpRight size={16} />
              </Link>
            )}
            {secondary && (
              <Link to={secondary.to} data-testid="cta-secondary" className="btn-pill">
                {secondary.label} <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
