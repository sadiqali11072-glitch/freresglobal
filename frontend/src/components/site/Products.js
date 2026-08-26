import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Server, Laptop, HardDrive, Wifi } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/lib/site-data";

const ICONS = { computing: Laptop, storage: HardDrive, "servers-enterprise-compute": Server, networking: Wifi };

const IMG_WORKSTATIONS =
  "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1600&auto=format&fit=crop&q=80";
const IMG_STORAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80";
const IMG_SERVERS =
  "https://images.unsplash.com/photo-1601301099413-6c9b7a8a2a55?w=1600&auto=format&fit=crop&q=80";
const IMAGES = { computing: IMG_WORKSTATIONS, storage: IMG_STORAGE, "servers-enterprise-compute": IMG_SERVERS };

const FEATURED_SLUGS = ["computing", "storage", "servers-enterprise-compute"];
const ITEMS = PRODUCT_CATEGORIES.filter((c) => FEATURED_SLUGS.includes(c.slug)).map((c, i) => ({
  ...c,
  icon: ICONS[c.slug],
  img: IMAGES[c.slug],
  className:
    c.slug === "servers-enterprise-compute"
      ? "md:col-span-12 aspect-[16/8] md:aspect-auto md:min-h-[420px]"
      : "md:col-span-6 aspect-[4/3] md:min-h-[420px]",
}));

const ease = [0.2, 0.8, 0.2, 1];

function Card({ item, index }) {
  const ref = useRef(null);
  const Icon = item.icon;
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      data-testid={`product-card-${item.slug}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay: index * 0.05 }}
      className={`spotlight-card group relative flex ${item.className}`}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />

      <div className="relative z-10 flex flex-col justify-between p-6 md:p-9 w-full gap-6">
        <div className="flex items-start justify-between">
          <span className="mono-label text-zinc-200">
            {item.n} / {item.kicker}
          </span>
          {Icon && <Icon size={22} strokeWidth={1.4} className="text-white/85" />}
        </div>

        <div>
          <h3 className="font-display text-3xl md:text-[38px] leading-[1.02] tracking-tighter">
            {item.title}
          </h3>
          <p className="mt-4 text-zinc-300/90 text-[15px] leading-relaxed max-w-xl">
            {item.blurb}
          </p>

          <Link
            to={`/request-a-quote?interest=${item.slug}`}
            data-testid={`cta-quote-${item.slug}`}
            className="mt-7 inline-flex items-center gap-2 btn-solid"
          >
            Request Spec & Pricing Quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Products() {
  return (
    <section
      id="solutions"
      data-testid="products-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06] bg-[#050505]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div>
            <div className="mono-label mb-6">[ 04 · Products ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              Ten categories.
              <br />
              <span className="text-zinc-500">One partner to bring it all through.</span>
            </h2>
          </div>
          <div className="max-w-md flex flex-col items-start gap-5">
            <p className="text-zinc-400 leading-relaxed">
              From single-workstation rollouts to multi-rack datacenter builds —
              staged in Dubai, delivered in-region from Ghana.
            </p>
            <Link to="/products" data-testid="products-view-all" className="btn-pill">
              View all categories <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {ITEMS.map((item, i) => (
            <Card key={item.slug} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
