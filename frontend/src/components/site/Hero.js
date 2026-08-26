import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const LINES = [
  "One partner. ",
  "Multiple technology ",
  "solutions.",
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Cursor parallax for orbs
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full flex flex-col justify-end pb-16 md:pb-20 pt-32"
    >
      {/* Background image with parallax */}
      <motion.div
        aria-hidden
        style={{ y: yBg }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2glMjB0ZXh0dXJlfGVufDB8fHx8MTc4NTc5MzMzMnww&ixlib=rb-4.1.0&q=85')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(1.15) brightness(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]" />
      </motion.div>

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div className="orb" style={{ width: 560, height: 560, top: "10%", right: "-8%", background: "#007AFF" }} />
        <div className="orb" style={{ width: 420, height: 420, bottom: "-12%", left: "-6%", background: "#3b3bfa", opacity: 0.35 }} />
      </motion.div>

      {/* Top marker row */}
      <div className="absolute top-28 md:top-32 left-0 right-0 z-10 mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="flex items-center gap-3"
          data-testid="hero-status"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="mono-label">Currently accepting West Africa fleet orders</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease }}
          className="hidden md:block mono-label text-right"
        >
          Home in Accra, Ghana · Sourcing office in Dubai, UAE
        </motion.div>
      </div>

      {/* Title */}
      <motion.div
        style={{ y: yTitle, opacity: opacityTitle }}
        className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-12"
      >
        <h1
          data-testid="hero-title"
          aria-label="One partner. Multiple technology solutions."
          className="font-display text-[13vw] md:text-[9.5vw] lg:text-[8.2vw] font-medium leading-[0.92] tracking-tighter text-white"
        >
          {LINES.map((line, i) => (
            <span key={i} className="line-reveal" aria-hidden="true">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.05, ease, delay: 0.2 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6 items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.9, ease }}
            className="md:col-span-6 lg:col-span-5 text-zinc-400 text-lg leading-relaxed max-w-xl"
            data-testid="hero-subtitle"
          >
            We&apos;re a Ghanaian technology hardware supplier at heart, with
            a sourcing office in Dubai — whatever the technology
            requirement, from a single laptop to a data centre build, we can
            probably supply it. In-stock for what's ready now, sourced
            back-to-back for what isn't.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.9, ease }}
            className="md:col-span-6 lg:col-span-7 flex flex-wrap items-center gap-4 md:justify-end"
          >
            <Link to="/solutions" data-testid="hero-cta-explore" className="btn-solid">
              Explore the solutions <ArrowUpRight size={16} />
            </Link>
            <Link to="/request-a-quote" data-testid="hero-cta-brief" className="btn-pill">
              Request a quote <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-14 md:mt-20 flex items-center gap-4"
          data-testid="hero-scroll-cue"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-10 h-10 border border-white/15 rounded-full"
          >
            <ArrowDown size={14} />
          </motion.span>
          <span className="mono-label">Scroll · manifesto follows</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
