"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Eases wheel and touch scrolling, like the "Smooth Scroll" component the
 * Framer site uses on every page (intensity 9). The sandbox is a draggable
 * canvas that handles its own wheel events, so it is left alone.
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const skip = pathname.startsWith("/sandbox");

  useEffect(() => {
    if (skip || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      lerp: 0.1,
      anchors: true,
      // Let the design panel (and anything marked data-lenis-prevent) scroll by itself.
      prevent: (node) => !!node.closest?.(".dialkit-root, [data-lenis-prevent]"),
    });
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [skip, pathname]);

  return null;
}
