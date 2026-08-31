export function Skills() {
  return (
    <section id="skills" className="relative z-10 bg-transparent text-white py-32 px-6 max-w-5xl mx-auto">
      <span className="text-accent text-sm font-mono tracking-wider uppercase mb-3 block">02 / How I Work</span>
      <h2 className="text-4xl font-bold tracking-tight mb-12">Design, Build, Deliver</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/10 pb-3">Design &amp; Front-End</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>- UI/UX Direction</li>
            <li>- Next.js (App Router)</li>
            <li>- Tailwind CSS</li>
            <li>- Responsive, Motion-Based Design</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/10 pb-3">Build Process</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>- Concept to Live Deployment</li>
            <li>- Iterative, Client-Driven Builds</li>
            <li>- Hands-On Testing &amp; Fixes</li>
            <li>- Fast Turnaround</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/10 pb-3">What I Deliver</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>- Fast, Modern Websites</li>
            <li>- Conversion-Focused Layouts</li>
            <li>- E-Commerce Builds (Noodles King)</li>
            <li>- Ongoing Support After Launch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
