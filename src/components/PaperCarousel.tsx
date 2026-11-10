"use client";

import { useEffect, useRef, useState } from "react";
import { Vid } from "./Media";

const CARD = 342;
const GAP = 10;
const STEP = CARD + GAP;

/**
 * The "paper carousel" from the Framer Emote page: four clips, two and a bit
 * showing at a time, shifting one place to the right every 3 seconds and
 * looping forever.
 */
export default function PaperCarousel({ ids }: { ids: string[] }) {
  const [order, setOrder] = useState(ids);
  const [shifting, setShifting] = useState(false);
  const hovering = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => {
      if (!hovering.current) setShifting(true);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // A card waits off the left edge; when the track has slid one step, the last
  // card moves to the front and the track snaps back without animating.
  const track = [order[order.length - 1], ...order];

  return (
    <div
      className="mx-auto flex w-full max-w-[816px] justify-center overflow-hidden"
      onPointerEnter={() => (hovering.current = true)}
      onPointerLeave={() => (hovering.current = false)}
    >
      <div
        className="flex"
        style={{
          gap: GAP,
          flexShrink: 0,
          transform: `translateX(${shifting ? STEP : 0}px)`,
          transition: shifting ? "transform 0.4s linear" : "none",
        }}
        onTransitionEnd={() => {
          setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
          setShifting(false);
        }}
      >
        {track.map((id, i) => (
          <div
            key={`${id}-${i === 0 ? "wait" : i}`}
            className="flex h-[385px] shrink-0 items-center justify-center rounded-3xl bg-[#f8f9fc] p-[30px]"
            style={{ width: CARD, marginLeft: i === 0 ? -STEP : 0 }}
          >
            <Vid id={id} className="aspect-[175/312] w-[175px] rounded-[14px] object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
