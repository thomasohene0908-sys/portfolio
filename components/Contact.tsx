"use client";

import { useState } from "react";
import { useUIAudio } from "./AudioProvider";

type Region = "GH" | "USD";
type ProjectType = "business" | "restaurant" | "ecommerce" | "webapp";
type Tier = "basic" | "standard" | "premium";

const PRICING = {
  GH: {
    currency: "GHS",
    symbol: "GHS ",
    types: {
      business: { name: "Standard Business", basic: 1500, standard: 3000, premium: 4500 },
      restaurant: { name: "Restaurant & Dining", basic: 2400, standard: 4800, premium: 7200 },
      ecommerce: { name: "E-commerce Store", basic: 3600, standard: 7200, premium: 10800 },
      webapp: { name: "Custom Web Application", basic: 4500, standard: 9000, premium: 13500 },
    },
    features: [
      { id: "seo", label: "Advanced SEO & Meta Setup", cost: 500 },
      { id: "cms", label: "Content Management System (CMS)", cost: 800 },
      { id: "booking", label: "Online Booking / Reservation System", cost: 1000 },
      { id: "analytics", label: "Analytics & Conversion Tracking", cost: 400 },
    ],
  },
  USD: {
    currency: "USD",
    symbol: "$",
    types: {
      business: { name: "Standard Business", basic: 300, standard: 600, premium: 900 },
      restaurant: { name: "Restaurant & Dining", basic: 480, standard: 960, premium: 1440 },
      ecommerce: { name: "E-commerce Store", basic: 720, standard: 1440, premium: 2160 },
      webapp: { name: "Custom Web Application", basic: 900, standard: 1800, premium: 2700 },
    },
    features: [
      { id: "seo", label: "Advanced SEO & Meta Setup", cost: 100 },
      { id: "cms", label: "Content Management System (CMS)", cost: 160 },
      { id: "booking", label: "Online Booking / Reservation System", cost: 200 },
      { id: "analytics", label: "Analytics & Conversion Tracking", cost: 80 },
    ],
  },
};

export function Contact() {
  const { playClick, playHover } = useUIAudio();
  const [region, setRegion] = useState<Region>("GH");
  const [projectType, setProjectType] = useState<ProjectType>("business");
  const [tier, setTier] = useState<Tier>("basic");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const config = PRICING[region];
  const baseCost = config.types[projectType][tier];
  const featureCost = selectedFeatures.reduce((sum, fId) => {
    const feat = config.features.find((f) => f.id === fId);
    return sum + (feat ? feat.cost : 0);
  }, 0);

  const totalEstimate = baseCost + featureCost;

  function toggleFeature(fId: string) {
    playClick();
    setSelectedFeatures((prev) =>
      prev.includes(fId) ? prev.filter((id) => id !== fId) : [...prev, fId]
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi Tommie! I evaluated a project estimate on your website:\n` +
    `- Region: ${region === "GH" ? "Ghana (GHS)" : "International (USD)"}\n` +
    `- Type: ${config.types[projectType].name}\n` +
    `- Tier: ${tier.toUpperCase()}\n` +
    `- Add-ons: ${selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "None"}\n` +
    `- Total Estimate: ${config.symbol}${totalEstimate.toLocaleString()}\n\n` +
    `I'd like to discuss building this for my business!`
  );

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Project Scope & Pricing Estimator</h2>
        <p className="text-zinc-400">Tailor your requirements to calculate an instant estimated scope.</p>
      </div>

      <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl mb-12">
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
          <span className="text-sm font-semibold text-zinc-300">Select Region / Currency:</span>
          <div className="flex gap-2">
            <button
              onClick={() => { playClick(); setRegion("GH"); }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                region === "GH" ? "bg-emerald-500 text-black font-semibold" : "bg-zinc-800 text-zinc-300"
              }`}
            >
              Ghana (GHS)
            </button>
            <button
              onClick={() => { playClick(); setRegion("USD"); }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                region === "USD" ? "bg-emerald-500 text-black font-semibold" : "bg-zinc-800 text-zinc-300"
              }`}
            >
              International (USD)
            </button>
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-zinc-300 mb-3">1. Select Project Type</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {(Object.keys(config.types) as ProjectType[]).map((type) => (
              <button
                key={type}
                onClick={() => { playClick(); setProjectType(type); }}
                onMouseEnter={playHover}
                className={`p-3 rounded-xl border text-sm text-left transition-all ${
                  projectType === type
                    ? "border-emerald-500 bg-emerald-500/10 text-white"
                    : "border-white/10 bg-zinc-900/50 text-zinc-400"
                }`}
              >
                {config.types[type].name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-zinc-300 mb-3">2. Select Package Tier</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(["basic", "standard", "premium"] as Tier[]).map((t) => (
              <button
                key={t}
                onClick={() => { playClick(); setTier(t); }}
                onMouseEnter={playHover}
                className={`p-4 rounded-xl border text-left transition-all ${
                  tier === t
                    ? "border-emerald-500 bg-emerald-500/10 text-white"
                    : "border-white/10 bg-zinc-900/50 text-zinc-400"
                }`}
              >
                <div className="font-semibold capitalize text-base text-white">{t}</div>
                <div className="text-xl font-bold text-emerald-400 mt-1">
                  {config.symbol}{config.types[projectType][t].toLocaleString()}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-zinc-300 mb-3">3. Optional Add-ons</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {config.features.map((feat) => {
              const isSelected = selectedFeatures.includes(feat.id);
              return (
                <button
                  key={feat.id}
                  onClick={() => toggleFeature(feat.id)}
                  onMouseEnter={playHover}
                  className={`p-3 rounded-xl border text-sm flex justify-between items-center transition-all ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-500/10 text-white"
                      : "border-white/10 bg-zinc-900/50 text-zinc-400"
                  }`}
                >
                  <span>{feat.label}</span>
                  <span className="text-emerald-400 font-semibold">+{config.symbol}{feat.cost}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-sm text-zinc-400 block">Estimated Total</span>
            <span className="text-3xl font-extrabold text-white">
              {config.symbol}{totalEstimate.toLocaleString()}
            </span>
          </div>

          <a
            href={`https://wa.me/233538315085?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            onMouseEnter={playHover}
            className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-center transition-all shadow-lg shadow-emerald-500/20"
          >
            Send Estimate via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
