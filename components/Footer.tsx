"use client";

import { useEffect, useState } from "react";

function useFps() {
  const [fps, setFps] = useState(60);
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let raf: number;
    function loop(now: number) {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return fps;
}

export function Footer() {
  const fps = useFps();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/70 md:flex-row">
        <span>Copyright Tommie.dev. All rights reserved.</span>
        <span className="text-xs text-white/50">{fps} FPS</span>
        <span>Built with Next.js and Framer Motion.</span>
      </div>
    </footer>
  );
}
