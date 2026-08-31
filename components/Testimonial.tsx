"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-white/10 bg-black/40 p-10 backdrop-blur-md"
      >
        <Quote className="h-8 w-8 text-accent" />
        <p className="mt-6 text-lg text-white/90 md:text-xl">
          Replace this with an actual quote from your Noodles King client about speed, design quality, and results.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-accent/20" />
          <div>
            <div className="text-sm font-medium text-white">Noodles King</div>
            <div className="text-xs text-white/60">Restaurant and Online Ordering</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
