import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Server, Laptop, HardDrive, CreditCard } from "lucide-react";

const IMG_WORKSTATIONS =
  "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1600&auto=format&fit=crop&q=80";
const IMG_POS =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&auto=format&fit=crop&q=80";
const IMG_STORAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80";
const IMG_SERVERS =
  "https://images.unsplash.com/photo-1506399309177-3b43e99fead2?w=1600&auto=format&fit=crop&q=80";

const ITEMS = [
  {
    slug: "workstations-laptops",
    n: "01",
    icon: Laptop,
    title: "Enterprise Workstations & Laptops",
    kicker: "Business-grade fleet",
    blurb:
      "Business laptops, desktops, power workstations and enterprise tablets — deployed at scale across Ghana and West Africa.",
    tags: ["Lenovo", "Dell", "HP", "ASUS"],
    img: IMG_WORKSTATIONS,
    className: "md:col-span-7 md:row-span-2 aspect-[16/13] md:aspect-auto md:min-h-[520px]",
  },
  {
    slug: "pos-retail",
    n: "02",
    icon: CreditCard,
    title: "POS & Retail Hardware",
    kicker: "Hospitality · Retail · QSR",
    blurb:
      "Orderman handheld POS, all-in-one terminals and receipt hardware — engineered for high-volume hospitality and retail floors.",
    tags: ["Orderman"],
    img: IMG_POS,
    className: "md:col-span-5 aspect-[4/3] md:min-h-[250px]",
  },
  {
    slug: "storage-components",
    n: "03",
    icon: HardDrive,
    title: "Data Storage & Component Solutions",
    kicker: "Drives · Memory · Parts",
    blurb:
      "Bulk enterprise SSDs, HDDs, memory modules and replacement components sourced authentic and tracked to serial.",
    tags: ["Western Digital", "SanDisk", "Kingston"],
    img: IMG_STORAGE,
    className: "md:col-span-5 aspect-[4/3] md:min-h-[250px]",
  },
  {
    slug: "servers-datacenter",
    n: "04",
    icon: Server,
    title: "Server & Data Center Infrastructure",
    kicker: "Compute · Rack · Network",
    blurb:
      "Rack servers, enterprise compute, storage arrays and networking hardware — configured, cabled and delivered ready-to-power.",
    tags: ["Dell PowerEdge", "HPE ProLiant", "Lenovo ThinkSystem"],
    img: IMG_SERVERS,
    className: "md:col-span-12 aspect-[16/8] md:aspect-auto md:min-h-[420px]",
  },
];

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
          <Icon size={22} strokeWidth={1.4} className="text-white/85" />
        </div>

        <div>
          <h3 className="font-display text-3xl md:text-[38px] leading-[1.02] tracking-tighter">
            {item.title}
          </h3>
          <p className="mt-4 text-zinc-300/90 text-[15px] leading-relaxed max-w-xl">
            {item.blurb}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono uppercase tracking-[0.14em] text-zinc-200 border border-white/20 px-2.5 py-1 rounded-full bg-white/[0.04]"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={`#contact?interest=${item.slug}`}
            data-testid={`cta-quote-${item.slug}`}
            className="mt-7 inline-flex items-center gap-2 btn-solid"
          >
            Request Spec & Pricing Quote <ArrowUpRight size={16} />
          </a>
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
            <div className="mono-label mb-6">[ 03 · Solutions ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              Four solution pillars.
              <br />
              <span className="text-zinc-500">Every category, procurement-grade.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 leading-relaxed">
            From single-site POS rollouts to multi-rack datacenter builds — sourced
            through authorised OEM channels, staged in Dubai, delivered in-region
            from Ghana.
          </p>
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
