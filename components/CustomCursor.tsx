"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, input, [role='button']")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-400/60 bg-emerald-500/10 pointer-events-none z-50 backdrop-blur-[1px] shadow-[0_0_15px_rgba(16,185,129,0.3)] hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovered ? 1.8 : 1,
        borderColor: isHovered ? "rgba(16, 185, 129, 0.9)" : "rgba(16, 185, 129, 0.4)",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.2 }}
    />
  );
}
