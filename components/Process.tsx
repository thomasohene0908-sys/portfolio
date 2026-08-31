"use client";

import { motion } from "framer-motion";

const STEPS = [
  { number: "01", title: "Discovery", description: "Understanding the goal, the audience, and what success looks like before any design begins." },
  { number: "02", title: "Design", description: "Wireframes and high-fidelity design exploring layout, type, and motion direction until it feels right." },
  { number: "03", title: "Development", description: "Building it clean and fast, component by component, tested across devices as it comes together." },
  { number: "04", title: "Launch", description: "Performance checks, SEO setup, and a smooth handoff so the site is ready for real traffic from day one." },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">How I Work</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          A process built for premium outcomes.
        </h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-black/40 backdrop-blur-md p-8"
          >
            <span className="text-sm text-accent">{step.number}</span>
            <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm text-white/70">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

