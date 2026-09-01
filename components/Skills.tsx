export function Skills() {
  return (
    <section id="skills" className="relative z-10 bg-transparent text-white py-32 px-6 max-w-5xl mx-auto">
      <span className="text-accent text-sm font-mono tracking-wider uppercase mb-3 block">02 / Toolkit</span>
      <h2 className="text-4xl font-bold tracking-tight mb-12">The Tools Behind the Build</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/10 pb-3">Frontend Craft</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>- Next.js (App Router)</li>
            <li>- TypeScript</li>
            <li>- Tailwind CSS</li>
            <li>- Framer Motion animation</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/10 pb-3">Tooling &amp; Workflow</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>- Git and GitHub</li>
            <li>- Vercel deployment</li>
            <li>- AI-assisted development with Claude</li>
            <li>- Iterative client feedback loops</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-4 text-white border-b border-white/10 pb-3">What Sets It Apart</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>- Cinematic video backgrounds</li>
            <li>- Glassmorphic UI design</li>
            <li>- Performance-first builds</li>
            <li>- Direct WhatsApp communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
