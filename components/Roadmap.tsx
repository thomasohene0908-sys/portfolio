"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    description: "We align on your goals, target audience, visual style, and exact technical requirements.",
  },
  {
    phase: "02",
    title: "UI/UX & Architecture",
    description: "Wireframing and crafting high-performance component architecture optimized for speed and conversion.",
  },
  {
    phase: "03",
    title: "Development & Polish",
    description: "Writing clean code with Next.js, integrating backend services, and smoothing out every animation.",
  },
  {
    phase: "04",
    title: "Launch & Handover",
    description: "Rigorous testing, security hardening, domain configuration, and final deployment.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">Roadmap</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          How we build your product.
        </h2>
        <p className="mt-4 text-white/70">
          A transparent, step-by-step framework to take your project from concept to launch.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {STEPS.map((step, index) => (
          <motion.div
            key={step.phase}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-emerald-400">{step.phase}</span>
              <h3 className="mt-3 text-lg font-medium text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{step.description}</p>
            </div>
            <div className="mt-6 h-0.5 w-full bg-white/10 overflow-hidden">
              <div className="h-full bg-emerald-500/50 w-full origin-left" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}