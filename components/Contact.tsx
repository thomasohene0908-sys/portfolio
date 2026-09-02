"use client";

import { useState } from "react";
import { Mail, MessageCircle, ChevronDown, Globe, Share2 } from "lucide-react";

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

function EstimateCalculator() {
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
    `I would like to discuss building this for my business!`
  );

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
        <span className="text-sm font-semibold text-zinc-300">Select Region / Currency:</span>
        <div className="flex gap-2">
          <button
            onClick={() => setRegion("GH")}
            className={`px-4 py-2 rounded-xl text-sm transition-all ${
              region === "GH" ? "bg-emerald-500 text-black font-semibold" : "bg-zinc-800 text-zinc-300"
            }`}
          >
            Ghana (GHS)
          </button>
          <button
            onClick={() => setRegion("USD")}
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
              onClick={() => setProjectType(type)}
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
              onClick={() => setTier(t)}
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
          className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-center transition-all shadow-lg shadow-emerald-500/20"
        >
          Send Estimate via WhatsApp
        </a>
      </div>
    </div>
  );
}

export function Contact() {
  const [showEstimator, setShowEstimator] = useState(false);

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400">Contact</span>
        <h2 className="mt-4 text-3xl font-bold text-white">Have a project in mind?</h2>
        <p className="mt-3 text-zinc-400">Reach out directly, or get an instant price estimate below.</p>
      </div>

      <div className="mx-auto mb-10 grid max-w-2xl gap-4 sm:grid-cols-2">
        <a
          href="https://wa.me/233538315085"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 transition-colors hover:border-emerald-500/40"
        >
          <MessageCircle className="h-5 w-5 text-emerald-400" />
          <div>
            <div className="text-sm font-medium text-white">WhatsApp</div>
            <div className="text-xs text-zinc-400">+233 53 831 5085</div>
          </div>
        </a>

        <a
          href="mailto:toamoako.dev@gmail.com"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 transition-colors hover:border-emerald-500/40"
        >
          <Mail className="h-5 w-5 text-emerald-400" />
          <div>
            <div className="text-sm font-medium text-white">Email</div>
            <div className="text-xs text-zinc-400">toamoako.dev@gmail.com</div>
          </div>
        </a>

        <a
          href="https://github.com/thomasohene0908-sys"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 transition-colors hover:border-emerald-500/40"
        >
          <Globe className="h-5 w-5 text-emerald-400" />
          <div>
            <div className="text-sm font-medium text-white">GitHub</div>
            <div className="text-xs text-zinc-400">thomasohene0908-sys</div>
          </div>
        </a>

        <a
          href="https://web.facebook.com/profile.php?id=61592102204325"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 transition-colors hover:border-emerald-500/40"
        >
          <Share2 className="h-5 w-5 text-emerald-400" />
          <div>
            <div className="text-sm font-medium text-white">Facebook</div>
            <div className="text-xs text-zinc-400">Message me directly</div>
          </div>
        </a>
      </div>

      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => setShowEstimator((v) => !v)}
          className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-5 text-left transition-colors hover:border-emerald-500/40"
        >
          <span className="text-sm font-medium text-white">Want a rough price first? Try the instant estimator</span>
          <ChevronDown className={`h-4 w-4 text-emerald-400 transition-transform ${showEstimator ? "rotate-180" : ""}`} />
        </button>

        {showEstimator && (
          <div className="mt-4">
            <EstimateCalculator />
          </div>
        )}
      </div>
    </section>
  );
}

