"use client";

import { NAV_LINKS } from "@/lib/constants";
import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useUIAudio } from "./AudioProvider";

function useAccraTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    function update() {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Accra",
          hour12: false,
        }).format(new Date())
      );
    }
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Navbar() {
  const time = useAccraTime();
  const { isMuted, toggleMute, playClick, playHover  } = useUIAudio();

  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/10 bg-white/10 backdrop-blur-md dark:border-white/10 dark:bg-black/25">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" onMouseEnter={playHover} className="text-lg font-semibold tracking-tight text-text">
          Tommie<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onMouseEnter={playHover}
                onClick={playClick}
                className="text-sm text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for Q3 Projects GMT {time}
          </div>

          <button
            onClick={toggleMute}
            aria-label={enabled ? "Mute UI sounds" : "Enable UI sounds"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:text-accent"
          >
            {enabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>

          <a
            href="#contact"
            onMouseEnter={playHover}
            onClick={playClick}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-[#080808] transition-transform hover:scale-105"
          >
            Lets Talk
          </a>
        </div>
      </nav>
    </header>
  );
}

