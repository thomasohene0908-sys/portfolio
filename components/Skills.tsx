"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js / React", level: 95, detail: "App Router, SSR, Server Actions" },
  { name: "TypeScript", level: 90, detail: "Type-safe full-stack architectures" },
  { name: "Tailwind CSS & Motion", level: 98, detail: "Cinematic dark UI & glassmorphism" },
  { name: "PostgreSQL & Supabase", level: 85, detail: "Database design & auth flows" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Proficiency</h2>
        <p className="text-zinc-400">Core technologies driving performance and aesthetics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-emerald-500/30 transition-all"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white">{skill.name}</span>
              <span className="text-emerald-400 font-mono text-sm">{skill.level}%</span>
            </div>
            <p className="text-xs text-zinc-500 mb-3">{skill.detail}</p>

            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
