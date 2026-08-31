"use client";

import { useState } from "react";
import { Code2, Copy, Check, X } from "lucide-react";

interface CodeSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  codeSnippet: string;
  language?: string;
}

export function CodeSandboxModal({
  isOpen,
  onClose,
  title,
  codeSnippet,
  language = "tsx",
}: CodeSandboxModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#121212] shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-black/40">
          <div className="flex items-center gap-2 text-white font-mono text-sm">
            <Code2 className="h-4 w-4 text-emerald-400" />
            <span>{title}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied!" : "Copy Code"}</span>
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="p-6 overflow-x-auto max-h-[60vh] font-mono text-xs text-emerald-300 bg-black/60">
          <pre><code>{codeSnippet}</code></pre>
        </div>
      </div>
    </div>
  );
}
