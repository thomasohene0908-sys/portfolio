export function CaseStudy() {
  return (
    <section id="case-study" className="relative z-10 bg-transparent text-white py-32 px-6 max-w-5xl mx-auto">
      <span className="text-emerald-400 text-sm font-mono tracking-wider uppercase mb-3 block">Case Study</span>
      <h2 className="text-4xl font-bold tracking-tight mb-12">Noodles King</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6">
          <span className="text-xs font-mono text-white/50 uppercase tracking-wider mb-3 block">Before</span>
          <p className="text-zinc-300 leading-relaxed">Noodles King had no website at all. Orders and menu updates ran entirely offline.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3 block">What I Built</span>
          <p className="text-zinc-300 leading-relaxed">A full ordering flow and live menu display, built to work as their point-of-sale system for daily operations, not just a marketing page.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6">
          <span className="text-xs font-mono text-white/50 uppercase tracking-wider mb-3 block">After</span>
          <p className="text-zinc-300 leading-relaxed">Noodles King now runs everything through the site, orders are up, and it has become core to how the restaurant operates day to day.</p>
        </div>
      </div>

      <a href="https://noodlesking.shop" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-emerald-400 text-sm font-medium hover:underline">Visit noodlesking.shop</a>
    </section>
  );
}