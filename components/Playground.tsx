"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function ToggleSwitch() {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${
        on ? "bg-emerald-500" : "bg-white/15"
      }`}
      aria-label="Toggle demo switch"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-md"
        style={{ left: on ? "26px" : "4px" }}
      />
    </button>
  );
}

function CustomSlider() {
  const [value, setValue] = useState(50);
  return (
    <div className="flex flex-col gap-2">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-emerald-500"
      />
      <span className="text-xs text-white/60">{value}%</span>
    </div>
  );
}

export function Playground() {
  return (
    <section id="playground" className="mx-auto max-w-6xl px-6 py-28">
      <div className="mb-16 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">Playground</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Interactive UI, built by hand.
        </h2>
        <p className="mt-4 text-white/70">
          A few of the custom components powering this site, live and interactive.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <h3 className="text-sm font-medium text-white">Custom Toggle</h3>
          <div className="mt-4">
            <ToggleSwitch />
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <h3 className="text-sm font-medium text-white">Custom Slider</h3>
          <div className="mt-4">
            <CustomSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
