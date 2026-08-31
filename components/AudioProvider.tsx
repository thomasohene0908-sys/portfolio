"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

type UIAudioContextType = {
  enabled: boolean;
  toggle: () => void;
  playClick: () => void;
  playHover: () => void;
};

const UIAudioContext = createContext<UIAudioContextType | null>(null);

export function useUIAudio() {
  const ctx = useContext(UIAudioContext);
  if (!ctx) throw new Error("useUIAudio must be used within AudioProvider");
  return ctx;
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem("ui-audio-enabled");
    if (stored === "true") setEnabled(true);
    
    // Initialize audio elements pointing to public/sounds/
    clickAudioRef.current = new Audio("/sounds/click.mp3");
    hoverAudioRef.current = new Audio("/sounds/hover.mp3");
    
    if (clickAudioRef.current) clickAudioRef.current.volume = 0.2;
    if (hoverAudioRef.current) hoverAudioRef.current.volume = 0.1;
  }, []);

  function playClick() {
    if (!enabled || !clickAudioRef.current) return;
    clickAudioRef.current.currentTime = 0;
    clickAudioRef.current.play().catch(() => {});
  }

  function playHover() {
    if (!enabled || !hoverAudioRef.current) return;
    hoverAudioRef.current.currentTime = 0;
    hoverAudioRef.current.play().catch(() => {});
  }

  function toggle() {
    setEnabled((prev) => {
      const next = !prev;
      window.localStorage.setItem("ui-audio-enabled", String(next));
      return next;
    });
  }

  return (
    <UIAudioContext.Provider value={{ enabled, toggle, playClick, playHover }}>
      {children}
    </UIAudioContext.Provider>
  );
}
