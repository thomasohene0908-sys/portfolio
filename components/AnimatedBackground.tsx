"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const vantaRef = useRef(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const THREE = await import("three");
      const FOG = (await import("vanta/dist/vanta.fog.min")).default;

      if (mounted && vantaRef.current && !effectRef.current) {
        effectRef.current = FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x00e5a8,
          midtoneColor: 0x2b6cff,
          lowlightColor: 0x7c3aed,
          baseColor: 0x080808,
          blurFactor: 0.65,
          speed: 1.1,
          zoom: 0.8,
        });
      }
    })();

    return () => {
      mounted = false;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="pointer-events-none fixed inset-0 -z-10 opacity-40"
    />
  );
}
