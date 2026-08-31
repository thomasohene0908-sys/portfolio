"use client";

import { motion } from "framer-motion";

const project = {
  id: "noodles-king",
  title: "Noodles King",
  subtitle: "Featured Client Project • Video Walkthrough",
  description: "High-performance digital restaurant platform with custom UI micro-interactions, full menu visualization, and seamless mobile-responsive checkout.",
  tags: ["Live Client", "Next.js 16", "Tailwind CSS", "Framer Motion"],
  video: "/videos/noodles-king.mp4",
  poster: "/images/noodles-king-poster.jpg",
};

export function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 inline-block mb-3">
          Portfolio Showcase
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
          Selected Work
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
          Large format video demonstration of custom web builds and client projects.
        </p>
      </div>

      {/* Showcase Frame */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="group relative rounded-3xl bg-zinc-950/80 border border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        >
          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-zinc-900">
            <video
              src={project.video}
              poster={project.poster}
              autoPlay
              loop
              muted
              playsInline
              onTimeUpdate={(e) => {
                if (e.currentTarget.currentTime >= 10) {
                  e.currentTarget.currentTime = 0;
                }
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono font-medium text-emerald-300 tracking-wider uppercase">
                {project.subtitle}
              </span>
            </div>
          </div>

          <div className="p-8 md:p-10 bg-gradient-to-b from-zinc-950/50 to-black">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h3 className="text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
