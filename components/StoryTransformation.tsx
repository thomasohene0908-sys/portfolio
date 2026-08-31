"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, ShoppingBag } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function StoryTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stagnantRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const boomingRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(boomingRef.current, { clipPath: "circle(0% at 50% 100%)" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3200",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(phoneRef.current, { opacity: 1, scale: 1, y: 0, duration: 1 })
        .to(".chat-client", { opacity: 1, duration: 0.5 })
        .to(".chat-response", { opacity: 1, duration: 0.5 })
        .to(phoneRef.current, { opacity: 0, scale: 0.5, duration: 0.4 })
        .to(stagnantRef.current, { filter: "grayscale(0%)", duration: 1.2 }, "<")
        .to(boomingRef.current, { clipPath: "circle(150% at 50% 100%)", duration: 1.4 }, "<")
        .fromTo(barRef.current, { height: 0 }, { height: 160, duration: 1 }, "-=0.6")
        .from(".badge", { opacity: 0, scale: 0, y: 20, stagger: 0.15, ease: "elastic.out(1,0.6)" }, "-=0.4")
        .fromTo(ctaRef.current, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="story-container relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-background">

        <div
          ref={stagnantRef}
          className="stagnant-canvas absolute inset-0 flex items-center justify-center grayscale"
        >
          <div className="grid w-full max-w-4xl grid-cols-3 gap-4 p-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-28 rounded-xl border border-border bg-surface" />
            ))}
          </div>
          <div className="absolute left-10 top-10 animate-pulse rounded-full border border-red-500 px-4 py-2 text-xs text-red-400">
            0 Users Active
          </div>
        </div>

        <div
          ref={boomingRef}
          className="booming-dashboard absolute inset-0 flex flex-col items-center justify-center gap-10 bg-background"
        >
          <div className="grid w-full max-w-4xl grid-cols-3 gap-4 px-10">
            <div className="flex h-32 flex-col justify-between rounded-xl border border-accent bg-surface p-4">
              <Users size={18} className="text-accent" />
              <div>
                <div className="text-xl font-semibold text-text">1,204</div>
                <div className="text-xs text-muted">Active Users</div>
              </div>
            </div>
            <div className="flex h-32 flex-col justify-between rounded-xl border border-accent bg-surface p-4">
              <ShoppingBag size={18} className="text-accent" />
              <div>
                <div className="text-xl font-semibold text-text">312</div>
                <div className="text-xs text-muted">Orders Today</div>
              </div>
            </div>
            <div className="flex h-32 flex-col justify-between rounded-xl border border-accent bg-surface p-4">
              <TrendingUp size={18} className="text-accent" />
              <div>
                <div className="text-xl font-semibold text-text">+500%</div>
                <div className="text-xs text-muted">Traffic Growth</div>
              </div>
            </div>
          </div>

          <div className="relative flex h-48 items-end">
            <div ref={barRef} className="w-16 rounded-t-lg bg-accent" style={{ height: 0 }} />
          </div>

          <div className="badge absolute left-[8%] top-[15%] rounded-full bg-accent px-4 py-2 text-xs font-medium text-[#080808]">
            New Order: $150
          </div>
          <div className="badge absolute right-[8%] top-[20%] rounded-full bg-accent px-4 py-2 text-xs font-medium text-[#080808]">
            Lead Captured!
          </div>
        </div>

        <div
          ref={phoneRef}
          className="phone-trigger absolute bottom-10 right-10 z-10 w-72 scale-50 rounded-3xl border border-border bg-surface p-4 opacity-0"
        >
          <div className="space-y-3 text-sm">
            <div className="chat-client rounded-2xl bg-background p-3 text-text opacity-0">
              Hey Thommy, our shop is struggling. We need a high-converting web app to scale up.
            </div>
            <div className="chat-response rounded-2xl bg-accent p-3 text-[#080808] opacity-0">
              I got you. Watch this code injection.
            </div>
          </div>
        </div>

        <div
          ref={ctaRef}
          className="cta-final absolute inset-0 z-20 flex scale-90 items-center justify-center bg-background/90 opacity-0 backdrop-blur-sm"
        >
          <div className="rounded-3xl border border-border bg-surface p-12 text-center">
            <h3 className="text-2xl font-semibold text-text md:text-3xl">
              Ready to scale like this?
            </h3>
            <a
              href="#contact"
              className="mt-6 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-[#080808]"
            >
              Work With Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
