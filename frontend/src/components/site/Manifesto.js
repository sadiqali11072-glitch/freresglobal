import React from "react";
import { motion } from "framer-motion";

const CHAPTERS = [
  {
    n: "01",
    title: "Built on relationships.",
    body:
      "Freres Global started because West Africa deserved a hardware partner who actually knows your name — not just your PO number. We're a Ghanaian company, and we treat every order, every fleet and every client relationship like it's our own business on the line.",
  },
  {
    n: "02",
    title: "Home in Ghana, reaching further.",
    body:
      "Accra is where we live, warehouse and support our clients. Our Dubai office is there to open doors to the world's best manufacturers and bring that sourcing power home. It's one team, working for you from both ends.",
  },
  {
    n: "03",
    title: "Honest, every time.",
    body:
      "Every unit we supply comes through authorised OEM channels — Lenovo, Dell, HP, HPE, ASUS, Western Digital, SanDisk, Kingston. Authentic, warranty-eligible, and tracked to serial, so you never have to wonder what you're getting.",
  },
  {
    n: "04",
    title: "People, not just parts.",
    body:
      "Anyone can sell you a box. We'd rather understand what you're trying to build, then put the right team and the right hardware behind it — so you get a partner who sticks around after the invoice is paid.",
  },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20 md:mb-28">
          <div className="md:col-span-4">
            <div className="mono-label mb-6">[ 02 · Manifesto ]</div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="md:col-span-8"
          >
            <h2 className="font-display text-4xl md:text-6xl leading-[0.98] tracking-tighter">
              Four principles.
              <br />
              <span className="text-zinc-500">Zero compromise.</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {CHAPTERS.map((c, i) => (
            <motion.article
              key={c.n}
              data-testid={`manifesto-chapter-${c.n}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.9, ease, delay: i * 0.05 }}
              className="grid md:grid-cols-12 gap-8 md:gap-14 items-start border-t border-white/[0.07] pt-10 md:pt-14"
            >
              <div className="md:col-span-3">
                <div className="font-display text-6xl md:text-8xl leading-none tracking-tighter text-white/90">
                  {c.n}
                </div>
                <div className="mono-label mt-3">Chapter {c.n}</div>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                  {c.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-zinc-400 leading-relaxed text-base md:text-[17px]">
                  {c.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
