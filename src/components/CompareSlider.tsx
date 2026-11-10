"use client";

import { useRef, useState } from "react";
import { Img } from "./Media";

/** Drag-to-compare: `left` shows on the left of the handle, `right` on the right. */
export default function CompareSlider({
  left,
  right,
  leftAlt,
  rightAlt,
}: {
  left: string;
  right: string;
  leftAlt: string;
  rightAlt: string;
}) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const rect = box.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <div
      ref={box}
      role="slider"
      tabIndex={0}
      aria-label="Compare redesign with existing interface"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      className="relative cursor-ew-resize touch-pan-y overflow-hidden select-none"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
      }}
    >
      <Img id={right} alt={rightAlt} className="pointer-events-none block w-full" />
      <Img
        id={left}
        alt={leftAlt}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div
        className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white font-sans text-sm leading-none font-bold tracking-[1px] text-[#111] shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
          ◂ ▸
        </span>
      </div>
    </div>
  );
}
