"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Live Client Projects", value: "3+" },
  { label: "Sites Shipped", value: "5+" },
  { label: "Full Stack Stack", value: "100%" },
  { label: "Client Satisfaction", value: "100%" },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Engineering sleek digital products with high performance.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              I'm a full-stack developer and UI/UX designer specialized in building modern web applications, e-commerce platforms, and interactive user interfaces using Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              My focus is combining high-end cinematic design with clean code, responsive layouts, and lightning-fast load times.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 text-center"
              >
                <div className="text-3xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
