import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Playground } from "@/components/Playground";
import { TerminalModal } from "@/components/TerminalModal";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative z-10">
      <Navbar />
      <Hero />
      <Work />
      <Playground />
      <TerminalModal />
      <Contact />
      <Footer />
    </main>
  );
}
