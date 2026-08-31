export function About() {
  return (
    <section id="about" className="relative z-10 bg-transparent text-white py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-emerald-400 text-sm font-mono tracking-wider uppercase mb-3 block">01 / Background</span>
          <h2 className="text-4xl font-bold tracking-tight mb-6">Bridging high-performance code with intentional design.</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            I am a web designer and builder with a year of hands-on experience building for real clients. I focus on fast, modern websites with clean UI/UX, from first concept through to a live, working product.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-sm text-zinc-400">
            <div><strong className="text-white block text-lg mb-1">1 Year</strong> Building for Clients</div>
            <div><strong className="text-white block text-lg mb-1">Noodles King</strong> Live E-Commerce Build</div>
          </div>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <div className="absolute -top-3 -right-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-mono text-emerald-400">
            How I Build
          </div>
          <h3 className="text-lg font-semibold mb-4 text-white">Process</h3>
          <div className="space-y-3 text-sm text-zinc-300">
            <p><span className="text-white font-medium">Design &amp; Front-End -</span> UI/UX direction, Next.js, Tailwind CSS</p>
            <p><span className="text-white font-medium">Build Process -</span> concept, design, build, launch</p>
            <p><span className="text-white font-medium">What I Deliver -</span> fast, modern, conversion-focused sites like Noodles King</p>
          </div>
        </div>
      </div>
    </section>
  );
}
