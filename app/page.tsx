import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Roadmap } from "@/components/Roadmap";
import { Playground } from "@/components/Playground";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#080808] text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Roadmap />
      <Playground />
      <Contact />
    </main>
  );
}