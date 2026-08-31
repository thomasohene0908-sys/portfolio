"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { useUIAudio } from "./AudioProvider";

export function Hero() {
  const { playClick, playHover } = useUIAudio();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl z-10 relative"
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Available for Freelance Projects</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
          Crafting <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">cinematic digital</span> web experiences.
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Full-stack developer & UI/UX specialist crafting high-performance Next.js builds and interactive web applications.
        </p>

        {/* Magnetic CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <MagneticButton>
            <a
              href="#work"
              onClick={playClick}
              onMouseEnter={playHover}
              className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] block"
            >
              View my work
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="px-8 py-4 rounded-2xl bg-black/50 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-all duration-300 backdrop-blur-md block hover:border-white/20"
            >
              Let's Talk
            </a>
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
