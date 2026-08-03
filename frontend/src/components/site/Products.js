import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const IMG_LAPTOP =
  "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=1600&auto=format&fit=crop&q=80";
const IMG_SERVER =
  "https://images.unsplash.com/photo-1506399309177-3b43e99fead2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHxzZXJ2ZXJzJTIwZGF0YWNlbnRlcnxlbnwwfHx8fDE3ODU3OTMzMTV8MA&ixlib=rb-4.1.0&q=85";
const IMG_WORKSTATION =
  "https://images.unsplash.com/photo-1593486544625-13ef2368e43a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxjb21wdXRlciUyMHdvcmtzdGF0aW9ufGVufDB8fHx8MTc4NTc5MzMxNXww&ixlib=rb-4.1.0&q=85";
const IMG_ABSTRACT =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80";
const IMG_STORAGE =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80";
const IMG_DESKTOP =
  "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1600&auto=format&fit=crop&q=80";
const IMG_PARTS =
  "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1600&auto=format&fit=crop&q=80";

const ITEMS = [
  { slug: "servers", n: "01", title: "Servers", kicker: "Rack & Tower", blurb: "PowerEdge · ProLiant · ThinkSystem. Racked, cabled, configured.", img: IMG_SERVER, className: "md:col-span-7 md:row-span-2 aspect-[16/13] md:aspect-auto md:min-h-[560px]" },
  { slug: "laptops", n: "02", title: "Laptops", kicker: "Mobile Precision", blurb: "Business ultrabooks, dev workhorses, rugged field units.", img: IMG_LAPTOP, className: "md:col-span-5 aspect-[4/3] md:min-h-[270px]" },
  { slug: "workstations", n: "03", title: "Workstations", kicker: "Studio-grade Power", blurb: "Xeon and Threadripper towers for CAD, 3D and ML.", img: IMG_WORKSTATION, className: "md:col-span-5 aspect-[4/3] md:min-h-[270px]" },
  { slug: "storage", n: "04", title: "Storage", kicker: "SAN · NAS · Archive", blurb: "All-flash arrays, hybrid NAS and cold archive tiers.", img: IMG_STORAGE, className: "md:col-span-4 aspect-[4/5] md:min-h-[420px]" },
  { slug: "desktops", n: "05", title: "Desktops", kicker: "Office Fleet", blurb: "Reliable business desktops deployed at scale.", img: IMG_DESKTOP, className: "md:col-span-4 aspect-[4/5] md:min-h-[420px]" },
  { slug: "parts", n: "06", title: "Parts & Components", kicker: "Every Rack, Every Rev", blurb: "Memory, CPUs, GPUs, PSUs, HBAs, drives — tracked to serial.", img: IMG_PARTS, className: "md:col-span-4 aspect-[4/5] md:min-h-[420px]" },
];

const ease = [0.2, 0.8, 0.2, 1];

function Card({ item, index }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.a
      href="#contact"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

      <div className="relative z-10 flex flex-col justify-between p-6 md:p-8 w-full">
        <div className="flex items-start justify-between">
          <span className="mono-label text-zinc-300">
            {item.n} / {item.kicker}
          </span>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/25 bg-black/40 group-hover:bg-white group-hover:text-black transition-colors">
            <ArrowUpRight size={15} />
          </span>
        </div>

        <div>
          <h3 className="font-display text-3xl md:text-4xl leading-none tracking-tighter">
            {item.title}
          </h3>
          <p className="mt-3 text-zinc-300/90 text-sm md:text-[15px] max-w-md">
            {item.blurb}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

export default function Products() {
  return (
    <section
      id="products"
      data-testid="products-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06] bg-[#050505]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div>
            <div className="mono-label mb-6">[ 03 · Catalogue ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              Six categories.
              <br />
              <span className="text-zinc-500">One accountable partner.</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-400 leading-relaxed">
            Every SKU sourced through authorised OEM channels. Every unit
            configured to your spec and imaged before it leaves our floor.
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
