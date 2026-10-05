import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { FAQSchema } from "@/components/FAQSchema";
import { AudioProvider } from "@/components/AudioProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tommie003.vercel.app"),
  alternates: { canonical: "https://tommie003.vercel.app" },
  openGraph: {
    title: "Thomas Ohene Amoako | Full-Stack Web Developer in Ghana - Tommie.dev",
    description: "Thomas Ohene Amoako (Tommie) is a freelance full-stack web developer in Ghana building fast, cinematic websites for clients worldwide.",
    url: "https://tommie003.vercel.app",
    siteName: "Tommie.dev",
    images: [{ url: "https://tommie003.vercel.app/projects/noodles-king.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Ohene Amoako | Full-Stack Web Developer in Ghana - Tommie.dev",
    description: "Thomas Ohene Amoako (Tommie) is a freelance full-stack web developer in Ghana building fast, cinematic websites for clients worldwide.",
    images: ["https://tommie003.vercel.app/projects/noodles-king.jpg"],
  },  keywords: ["Thomas Ohene Amoako", "Tommie", "web developer Ghana", "freelance web developer", "Next.js developer", "UI/UX designer Ghana", "full-stack developer"],
  verification: {
    google: "L9T2j9b-q48OlWN1ju2mdXdDt-BKbd5inlIl_nmyGQE",
  },

  title: "Thomas Ohene Amoako | Full-Stack Web Developer in Ghana - Tommie.dev",
  description: "Thomas Ohene Amoako (Tommie) — freelance full-stack web developer in Ghana building fast, cinematic websites for clients worldwide. Next.js, React, UI/UX design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-emerald-500/30 selection:text-emerald-300 relative`}>
        <AudioProvider>
          <SmoothScroll />
          <BackgroundVideo />
          <ScrollProgress />
          <CustomCursor />
          <StructuredData />
          <FAQSchema />
          {children}
          <FloatingWhatsApp />
          <SpeedInsights />
          <Analytics />
        </AudioProvider>
      </body>
    </html>
  );
}



