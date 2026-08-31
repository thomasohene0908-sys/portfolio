"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">
          Selected Work
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Case studies, not just screenshots.
        </h2>
      </div>

      <a
        href="https://noodlesking.shop"
        target="_blank"
        rel="noopener noreferrer"
        className="group mb-8 grid gap-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 md:grid-cols-2 md:p-12"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-background">
          <Image
            src="/projects/noodles-king.jpg"
            alt="Noodles King"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Flagship Project · Live
          </span>
          <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Noodles King
          </h3>
          <p className="mt-4 text-white/70">
            Built for a live e-commerce brand, currently serving real customers.
            A full storefront built to feel premium from the first scroll, fast,
            cinematic, and built to convert.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>

      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-white/70">
          Also shipped
        </span>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://sandramills01.bolt.host/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition-colors hover:border-accent hover:text-accent"
          >
            sandramills01 ↗
          </a>
          <a
            href="https://ralachips.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition-colors hover:border-accent hover:text-accent"
          >
            Rala Chips ↗
          </a>
        </div>
      </div>
    </section>
  );
}

