"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUIAudio } from "./AudioProvider";

const faqs = [
  {
    q: "What is your typical turn-around time for a website?",
    a: "Standard business sites take 1-2 weeks, while custom e-commerce or full-stack web applications take 2-4 weeks from initial kickoff to deployment.",
  },
  {
    q: "Do you handle hosting, domains, and deployment?",
    a: "Yes. I manage complete setup on Vercel, AWS, or custom servers, connect your custom domains, and set up SSL security certificates.",
  },
  {
    q: "Can I update content on my site after launch?",
    a: "Absolutely. Every project includes CMS integration (Sanity or custom admin) or an intuitive editing interface so you can update text and images effortlessly.",
  },
  {
    q: "How do payments and project contracts work?",
    a: "Projects operate on a standard 50% initial deposit and 50% upon final launch verification. Estimates generated on-site link directly to WhatsApp to kick off discussion.",
  },
];

export function FAQ() {
  const { playClick, playHover } = useUIAudio();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    playClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-zinc-400">Everything you need to know about starting a project.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden transition-all hover:border-emerald-500/30"
            >
              <button
                onClick={() => toggle(i)}
                onMouseEnter={playHover}
                className="w-full p-6 text-left flex justify-between items-center text-white font-medium"
              >
                <span>{faq.q}</span>
                <span className={`text-emerald-400 transition-transform duration-300 text-xl ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-sm text-zinc-400 border-t border-white/5 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
