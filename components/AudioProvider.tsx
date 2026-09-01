"use client";

import React, { createContext, useContext } from "react";

interface UIAudioContextType {
  playHover: () => void;
  playClick: () => void;
  playToggle: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const UIAudioContext = createContext<UIAudioContextType>({
  playHover: () => {},
  playClick: () => {},
  playToggle: () => {},
  isMuted: true,
  toggleMute: () => {},
});

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const dummyValue: UIAudioContextType = {
    playHover: () => {},
    playClick: () => {},
    playToggle: () => {},
    isMuted: true,
    toggleMute: () => {},
  };

  return (
    <UIAudioContext.Provider value={dummyValue}>
      {children}
    </UIAudioContext.Provider>
  );
}

export function useUIAudio() {
  const ctx = useContext(UIAudioContext);
  if (!ctx) {
    return {
      playHover: () => {},
      playClick: () => {},
      playToggle: () => {},
      isMuted: true,
      toggleMute: () => {},
    };
  }
  return ctx;
}
