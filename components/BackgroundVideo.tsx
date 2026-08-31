"use client";

import { memo } from "react";

export const BackgroundVideo = memo(function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none transform-gpuWillChange">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover opacity-35 scale-105 transform-gpu"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Optimized Lightweight Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
    </div>
  );
});
