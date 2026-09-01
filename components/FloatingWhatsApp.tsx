"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const phoneNumber = "233538315085";
  const message = encodeURIComponent("Hi Tommie, I checked your portfolio and want to discuss a project.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
    >
      <MessageCircle className="h-7 w-7 fill-black text-emerald-500" />
    </a>
  );
}
