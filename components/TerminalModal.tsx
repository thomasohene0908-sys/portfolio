"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "Tommie.dev Interactive CLI v1.0",
    "Type 'help' to view available commands.",
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response = "";

    if (cmd === "help") {
      response = "Available commands: 'skills', 'about', 'clear', 'contact'";
    } else if (cmd === "skills") {
      response = "Next.js, TypeScript, Tailwind CSS, Framer Motion, AI-assisted development with Claude";
    } else if (cmd === "about") {
      response = "Tommie - Full-Stack Developer & UI/UX Specialist crafting high-end web builds.";
    } else if (cmd === "contact") {
      response = "WhatsApp / Email available directly via the estimator below.";
    } else if (cmd === "clear") {
      setLogs([]);
      setInput("");
      return;
    } else {
      response = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    setLogs((prev) => [...prev, `> ${input}`, response]);
    setInput("");
  };

  return (
    <div className="py-12 flex justify-center">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2.5 bg-black/40 border border-white/10 hover:border-emerald-500/40 rounded-xl text-xs text-zinc-400 hover:text-emerald-400 transition-all backdrop-blur-md"
        >
          Open Developer Terminal
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-2xl bg-zinc-950/90 border border-white/10 rounded-2xl p-6 font-mono text-sm text-emerald-400 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-3">
            <span className="text-xs text-zinc-500">tommie@portfolio:~</span>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white text-xs">
              [Close]
            </button>
          </div>
          <div className="h-48 overflow-y-auto mb-4 space-y-1.5 text-xs">
            {logs.map((log, index) => (
              <div key={index} className={log.startsWith(">") ? "text-white" : "text-emerald-400"}>
                {log}
              </div>
            ))}
          </div>
          <form onSubmit={handleCommand} className="flex items-center gap-2">
            <span className="text-emerald-500">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type a command..."
              className="bg-transparent border-none outline-none text-white w-full text-xs font-mono"
            />
          </form>
        </motion.div>
      )}
    </div>
  );
}
