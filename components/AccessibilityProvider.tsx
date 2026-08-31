"use client";

import { useEffect } from "react";
import { MotionGlobalConfig } from "framer-motion";

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    MotionGlobalConfig.skipAnimations = mediaQuery.matches;

    const handleChange = () => {
      MotionGlobalConfig.skipAnimations = mediaQuery.matches;
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return <>{children}</>;
}
