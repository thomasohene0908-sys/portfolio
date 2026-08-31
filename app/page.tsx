import { Navbar } from "@/components/Navbar";
import { PrismaHero } from "@/components/PrismaHero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Projects } from "@/components/Projects";
import { CaseStudy } from "@/components/CaseStudy";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { TerminalModal } from "@/components/TerminalModal";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PrismaHero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <CaseStudy />
      <FAQ />
      <Contact />
      <TerminalModal />
      <Footer />
    </main>
  );
}
