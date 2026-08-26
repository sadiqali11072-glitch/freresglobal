import React from "react";
import { motion } from "framer-motion";

const ease = [0.2, 0.8, 0.2, 1];

export default function PageHeader({ eyebrow, title, subtitle, testId }) {
  return (
    <section
      data-testid={testId || "page-header"}
      className="relative pt-40 md:pt-48 pb-16 md:pb-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          {eyebrow && <div className="mono-label mb-6">{eyebrow}</div>}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.98] max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-7 text-zinc-400 text-lg leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
