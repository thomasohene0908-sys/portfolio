"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function LiquidGlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative rounded-3xl bg-white/[0.04] backdrop-blur-2xl backdrop-saturate-200 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)] ${className}`}
    >
      {/* Specular Liquid Light Follower */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(500px circle at ${spotlight.x}px ${spotlight.y}px, rgba(16, 185, 129, 0.2), rgba(255, 255, 255, 0.08) 35%, transparent 75%)`,
        }}
      />

      {/* Curved Reflection Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
