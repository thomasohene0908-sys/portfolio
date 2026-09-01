"use client";

import React, { createContext, useContext } from "react";

interface UIAudioContextType {
  playHover: () => void;
  playClick: () => void;
  playToggle: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const defaultContext: UIAudioContextType = {
  playHover: () => {},
  playClick: () => {},
  playToggle: () => {},
  isMuted: true,
  toggleMute: () => {},
};

const UIAudioContext = createContext<UIAudioContextType>(defaultContext);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  return (
    <UIAudioContext.Provider value={defaultContext}>
      {children}
    </UIAudioContext.Provider>
  );
}

export function useUIAudio() {
  const ctx = useContext(UIAudioContext);
  return ctx || defaultContext;
}
