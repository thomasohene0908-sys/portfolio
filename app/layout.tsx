import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/components/AudioProvider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tommie.dev - Full Stack Developer & UI/UX Designer",
  description: "Cinematic, high-performance web development and design portfolio.",
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
          {children}
        <Analytics />
        </AudioProvider>
      </body>
    </html>
  );
}


