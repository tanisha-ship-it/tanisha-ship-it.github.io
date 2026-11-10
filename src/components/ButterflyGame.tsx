"use client";

import { useEffect, useRef, useState } from "react";
import { getButterflyCount, incrementButterflyCount } from "@/lib/supabase";
import { Img } from "./Media";

// Centre of each butterfly as a percentage of the hero, with its size and tilt,
// measured from the original layout.
const BUTTERFLIES = [
  { id: "8nM7HWeUAgyriC1BNV6w9jA7dIA", x: 12.4, y: 46, width: 46, rotate: -106 },
  { id: "LIY5lu3rRNKsiJKDXGIB26MR3Es", x: 24.5, y: 77.8, width: 54, rotate: 0 },
  { id: "8nM7HWeUAgyriC1BNV6w9jA7dIA", x: 67.4, y: 83.8, width: 45, rotate: -118 },
  { id: "DsqImCJhz8u6jGPv8Fww5fmmE", x: 82.8, y: 68.4, width: 63, rotate: 0 },
  { id: "LIY5lu3rRNKsiJKDXGIB26MR3Es", x: 94.7, y: 26.4, width: 55, rotate: -38 },
];

export default function ButterflyGame() {
  const [count, setCount] = useState<number | null>(null);
  const [caught, setCaught] = useState<number | null>(null);
  const [swoosh, setSwoosh] = useState(0);
  const [hovering, setHovering] = useState(false);
  const net = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getButterflyCount().then(setCount);
  }, []);

  const moveNet = (e: React.PointerEvent) => {
    if (!net.current) return;
    net.current.style.left = `${e.clientX}px`;
    net.current.style.top = `${e.clientY}px`;
  };

  const catchButterfly = async (index: number) => {
    setSwoosh((n) => n + 1);
    setCaught(index);
    setCount((c) => (c ?? 0) + 1);
    setCount(await incrementButterflyCount());
  };

  return (
    <>
      {BUTTERFLIES.map((b, i) => (
        <button
          key={i}
          type="button"
          aria-label="Catch butterfly"
          className="absolute z-20 flex cursor-none items-center justify-center rounded-full p-3"
          style={{ left: `${b.x}%`, top: `${b.y}%`, transform: "translate(-50%, -50%)" }}
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") setHovering(true);
            moveNet(e);
          }}
          onPointerMove={moveNet}
          onPointerLeave={() => setHovering(false)}
          onClick={() => catchButterfly(i)}
        >
          <Img
            id={b.id}
            eager
            thumb
            className="pointer-events-none max-w-none"
            style={{ width: b.width, transform: `rotate(${b.rotate}deg)` }}
          />
          {caught === i && (
            <span
              key={swoosh}
              className="caught-flash pointer-events-none absolute top-1/2 left-1/2 text-xl text-white [text-shadow:0_0_6px_rgba(0,0,0,0.5)]"
            >
              ✓
            </span>
          )}
        </button>
      ))}

      <div
        ref={net}
        className="pointer-events-none fixed z-[100] h-[100px] w-[100px]"
        style={{ display: hovering ? "block" : "none" }}
      >
        <div key={swoosh} className={swoosh ? "net-swoosh" : ""} style={{ transform: "translate(-30%, -30%)" }}>
          <Img id="butterfly-net" eager thumb className="h-[120px] w-[120px] max-w-none object-contain" />
        </div>
      </div>

      <p className="absolute bottom-[86px] left-5 z-10 text-sm leading-[1.6] font-light tracking-[0.03em] text-white md:left-[42px]">
        Tap on the butterflies to catch them!
      </p>
      <p className="absolute bottom-[34px] left-5 z-10 text-[11px] tracking-[0.03em] text-white md:left-[42px]">
        🦋 {count === null ? "Loading..." : `${count.toLocaleString()} butterflies caught`}
      </p>
    </>
  );
}
