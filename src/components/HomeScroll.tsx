"use client";

import ProjectLink from "./ProjectLink";
import { useEffect, useRef, type ReactNode } from "react";
import { Img } from "./Media";

import type { Project } from "@/lib/projects";

const CARD_SHADOW =
  "0.3px 0.12px 0.32px -1.25px rgba(0,0,0,0.27), 1.14px 0.46px 1.23px -2.5px rgba(0,0,0,0.24), 5px 2px 5.4px -3.75px rgba(0,0,0,0.09), 0 0.6px 0.6px -1.25px rgba(0,0,0,0.18), 0 2.3px 2.3px -2.5px rgba(0,0,0,0.16), 0 10px 10px -3.75px rgba(0,0,0,0.06)";

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/**
 * The hero stays pinned and blurs as the cards arrive. Each card grows from
 * half size to full size as it travels up from the bottom of the screen. The
 * size follows the scroll position directly (no timers or springs), so it
 * always moves in step with your scroll and never stutters.
 */
export default function HomeScroll({ hero, projects }: { hero: ReactNode; projects: Project[] }) {
  const veil = useRef<HTMLDivElement>(null);
  const heroWrap = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;

      if (!reduced) {
        cards.current.forEach((card) => {
          if (!card) return;
          // Scaling about the centre leaves the centre where it is, so it can be read straight from the layout.
          const r = card.getBoundingClientRect();
          const centre = r.top + r.height / 2;
          const t = clamp01((vh * 1.1 - centre) / (vh * 0.55));
          const eased = 1 - Math.pow(1 - t, 3);
          card.style.transform = `translate3d(0,0,0) scale(${(0.5 + 0.5 * eased).toFixed(4)})`;
        });
      }

      if (veil.current) {
        // The page now ends right after the last card, so once the hero is blurred it stays blurred.
        const blur = clamp01(window.scrollY / (vh * 0.45));
        veil.current.style.opacity = String(blur);
        // Behind the blur nothing should react: no clicks, no focus, no butterflies.
        if (heroWrap.current) heroWrap.current.inert = blur > 0.4;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div ref={heroWrap} className="h-full">
          {hero}
        </div>
        <div
          ref={veil}
          className="pointer-events-none absolute inset-0 z-30 bg-[rgba(240,242,255,0.3)] opacity-0 backdrop-blur-sm"
        />
      </div>

      <div className="pointer-events-none relative z-40 flex flex-col items-center gap-[120px] px-4 pt-20 pb-[120px]">
        {projects.map((p, i) => (
          <ProjectLink
            key={p.href}
            id={p.id}
            href={p.href}
            ref={(el) => {
              cards.current[i] = el;
            }}
            className="home-card pointer-events-auto block w-full max-w-[868px] scroll-mt-[18vh] rounded-[20px] bg-white px-3 pt-3 pb-5 will-change-transform sm:px-5 sm:pt-6"
            style={{ boxShadow: CARD_SHADOW }}
          >
              <div className="overflow-hidden rounded-2xl">
            {p.phoneImage && (
                  <Img
                    id={p.phoneImage}
                    alt={p.title}
                    sizes="100vw"
                    className="w-full rounded-2xl md:hidden"
                  />
                )}
                <Img
                  id={p.image}
                  alt={p.title}
                  eager
                  sizes="(min-width: 900px) 828px, 100vw"
                  className={`aspect-[828/366] w-full rounded-2xl object-cover ${p.phoneImage ? "hidden md:block" : ""}`}
                />
              </div>
            <h2 className="mt-[18px] text-center font-serif text-xl leading-[26px] font-normal text-ink">
              {p.title}
            </h2>
            <p className="t-sm mt-2 text-center">{p.tag}</p>
          </ProjectLink>
        ))}
      </div>
    </div>
  );
}
