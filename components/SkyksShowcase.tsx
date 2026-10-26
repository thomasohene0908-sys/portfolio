export function SkyksShowcase() {
  return (
    <section id="skyks" className="relative z-10 bg-transparent text-white py-24 px-6 max-w-5xl mx-auto">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-3">Selected Work</p>
        <h2 className="text-3xl md:text-4xl font-semibold">Skyks Organics</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Online store for a Ghanaian brand selling raw honey and cold-pressed oils. Product catalog, cart, admin panel and WhatsApp checkout, built around how customers in Ghana actually order.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs">
          {["React", "Vite", "Tailwind CSS", "Supabase"].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-zinc-300">{t}</span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
        <video controls preload="metadata" playsInline className="w-full">
          <source src="/videos/skyks-organics.mp4" type="video/mp4" />
        </video>
      </div>
      <a
        href="https://skyks-organics01.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-500/10"
      >
        Visit the live store
      </a>
    </section>
  );
}