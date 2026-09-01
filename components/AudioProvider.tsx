"use client";

import React, { createContext, useContext } from "react";

export interface UIAudioContextType {
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

export const UIAudioContext = createContext<UIAudioContextType>(defaultContext);

export function AudioProvider({ children }: { children?: React.ReactNode }) {
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

export function useAudio() {
  return useUIAudio();
}

export function AudioToggle() {
  return null;
}

export default AudioProvider;