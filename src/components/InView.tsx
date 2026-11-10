"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Flips `data-shown` to true the first time the block is mostly on screen, so CSS can animate children. */
export default function InView({
  children,
  className = "",
  threshold = 0.5,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} data-shown={shown} className={className}>
      {children}
    </div>
  );
}
