"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/** Fades and slides its children in the first time they scroll into view. */
export default function Reveal({
  children,
  className = "",
  x = 0,
  y = 150,
  duration,
  delay,
  ease,
  margin = "0px 0px -10% 0px",
}: {
  children: ReactNode;
  className?: string;
  x?: number;
  y?: number;
  /** Seconds. Defaults to the spring-like 0.8s used for large blocks. */
  duration?: number;
  delay?: number;
  ease?: string;
  margin?: string;
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
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown}
      className={`reveal ${className}`}
      style={
        {
          "--reveal-x": `${x}px`,
          "--reveal-y": `${y}px`,
          ...(duration !== undefined && { "--reveal-d": `${duration}s` }),
          ...(delay !== undefined && { "--reveal-delay": `${delay}s` }),
          ...(ease && { "--reveal-ease": ease }),
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
