"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
}

function WordsPullUp({ text, className = "" }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          style={{ marginRight: "0.2em" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

const navItems = ["Work", "About", "Skills", "Contact"];

export function PrismaHero() {
  return (
    <section id="top" className="h-screen w-full">
      <div className="relative h-full w-full overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />

        <nav className="absolute left-1/2 top-6 z-20 -translate-x-1/2">
          <div className="flex items-center gap-4 rounded-full border border-white/20 bg-black/40 px-6 py-2 backdrop-blur-md sm:gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-10 sm:px-6 md:px-10">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="font-[family-name:var(--font-heading)] font-medium leading-[0.85] tracking-[-0.03em] text-white text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw]" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.35)" }}>
                <WordsPullUp text="Tommie.dev" />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-2 lg:col-span-4">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm text-white/80 md:text-base"
              >
                Full-stack developer and UI/UX designer building
                cinematic, high-performance websites that feel
                custom-crafted, not templated.
              </motion.p>

              <motion.a
                href="#projects"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group inline-flex items-center gap-2 self-start rounded-full bg-accent py-1 pl-5 pr-1 text-sm font-medium text-[#080808] transition-all hover:gap-3"
              >
                View my work
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080808] transition-transform group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 text-accent" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
