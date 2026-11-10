"use client";

import { useEffect, useRef } from "react";
import { DragIcon } from "./icons";
import { Img } from "./Media";

const CANVAS = { width: 2594, height: 2349 };
const DRIVE = "https://drive.google.com/file/d/";

type Card = {
  id: string;
  /** Centre of the card on the canvas. */
  x: number;
  y: number;
  w: number;
  h: number;
  rotate?: number;
  contain?: boolean;
  caption?: string;
  href?: string;
};

const CARDS: Card[] = [
  { id: "nXbpB1mCTFgpxPHHAMQXStgxo", x: 1286, y: 899, w: 284, h: 158, rotate: -5, caption: "Analysed how sales work at a global brand", href: `${DRIVE}1VCDgXUIm68a_6-ptcnXnpxxGWFCQQAUI/view?usp=drive_link` },
  { id: "hl0vjIKYcMMjSEOE5CkG04fCp4", x: 968, y: 1376, w: 207, h: 206, contain: true, caption: "My final philosophy paper!", href: `${DRIVE}1IkAoO2nhj5nByB_WeZbBVGdwHCrHI_bu/view?usp=sharing` },
  { id: "IouhR3YfysO2WpzQ2lNjr8sWI", x: 937, y: 1740, w: 259, h: 173, rotate: 7, contain: true, caption: "Content Campaign for spotify", href: `${DRIVE}1hHZ_RClTWY0KADvqrOP8K5y4maorV0v3/view?usp=drive_link` },
  { id: "mrwbeEFWIBTxZzp9QGK49UD3Vc", x: 1609, y: 1328, w: 251, h: 173, rotate: -6, contain: true, caption: "Attempting social entrepreneurship", href: `${DRIVE}1j5lr9_QC3SAwE2UMIsaMCUc2TzioqpZR/view?usp=drive_link` },
  { id: "h5oEsRpgPWiEMI9fVVt2EFiyow", x: 1751, y: 352, w: 226, h: 229, rotate: -7, contain: true, caption: "did a workshop on personal branding", href: `${DRIVE}1sorT-k6LLvA48tfCyabfdhO-_hD7KTRJ/view?usp=drive_link` },
  { id: "Mj8UdudBByuDXCI9SonaaDLI", x: 741, y: 367, w: 222, h: 223, rotate: 5, contain: true, caption: "study proposal for e-waste disposal", href: `${DRIVE}1VsyxagOuEnXuIPU01Y1cXispPXDxGg4x/view?usp=drive_link` },
  { id: "Qx55l7fvlBN8SwVPvScwBjAV5yE", x: 2137, y: 454, w: 263, h: 184, rotate: 4, contain: true, caption: "gen x ai fashion startup pitch", href: `${DRIVE}1anSrMTkAd1rt_YWmw6r8Pzcs6FdDlG2j/view?usp=drive_link` },
  { id: "olK9Y8a7WOqDkJZCVMGg6NAkrNA", x: 346, y: 518, w: 295, h: 206, rotate: -8, contain: true, caption: "my first film!" },
  { id: "ckqVKgX8KdpYzqAPsuWa2jdlMwQ", x: 1990, y: 787, w: 198, h: 199, contain: true, caption: "logo i made for a language fest" },
  { id: "EMP5NTz3mvnY0oyh0fCeaPSsmmU", x: 282, y: 1592, w: 185, h: 279, rotate: 4, caption: "Pitched a new fellowship to baret scholars", href: `${DRIVE}1-3A0h2Gc-SGtmywfbmq1x0tyqCyj261i/view?usp=sharing` },
  { id: "ftfNcevW7GCLsqcGo9GMnxUdT8", x: 566, y: 1910, w: 184, h: 278, rotate: -8, caption: "Report on Explainable AI & trust", href: `${DRIVE}1cdNbOUn3sShQZfAvu2_kzSayCkQ3qSbl/view?usp=sharing` },
  { id: "bGcySxc9H4i7zUphwEL4mK0Y", x: 412, y: 209, w: 223, h: 156, contain: true, caption: "food we ate in jaipur!" },
  { id: "DTmtILaoiSvlUGXFKPaKSQvEC4", x: 2266, y: 1785, w: 185, h: 280, caption: "My 1st ever award in art!!" },
  { id: "JTW0tpdafIXjuMVP4nqNhr1tns", x: 2276, y: 1395, w: 189, h: 132, contain: true, caption: "my fav noodles :)" },
  { id: "UT0ja3QhCy6GyWgmRna7vXVG2zo", x: 2232, y: 197, w: 189, h: 132, contain: true, caption: "1st ever big girl workspace" },
  { id: "qez4jhfV1FHwrQGdKqfnnQgupY", x: 1379, y: 224, w: 274, h: 191, contain: true, caption: "Support group <3" },
  { id: "ZqI8IruYM1nCIYT43Zf3NmgcCo", x: 615, y: 800, w: 160, h: 220, rotate: -3 },
  { id: "3xm3wJYq7kLolfxWTB0z7C4ug", x: 615, y: 1555, w: 231, h: 154, rotate: 5 },
  { id: "w6ijBuqWFiyG8Uj37wMiINGHids", x: 1976, y: 1536, w: 239, h: 240, rotate: 5 },
  { id: "CTrV7w66euaOWcNhqaXQgprKN9w", x: 1638, y: 1033, w: 214, h: 177, rotate: -5 },
  { id: "H7BLct60IYjrQVcyvi4ax1VCSV8", x: 1090, y: 411, w: 186, h: 181, rotate: 1 },
  { id: "4OfXVOXkTZGqAImuaWReiHUvpFc", x: 1380, y: 557, w: 162, h: 242, rotate: 7, caption: "Enrolled in an artsy course" },
  { id: "KrcwlewmpE6yFF8lxks8GLuIAlI", x: 1636, y: 1698, w: 183, h: 273, rotate: -5, caption: "Studied biz & management at King's College London" },
  { id: "uK2wMS5qgEqNmUSJc80itw5Mb4o", x: 1285, y: 1519, w: 188, h: 216, rotate: 3, caption: "Presenting a concept to my team" },
  { id: "uDT1qoDH2WUFw9FFMBBHtqQrMA", x: 303, y: 862, w: 175, h: 170, rotate: 5, caption: "Merch branding for my uni club" },
  { id: "FmPMblWvi0bP0Zl09BIwAmUm91Q", x: 968, y: 2035, w: 188, h: 172, rotate: -2, caption: "Pattern exploration" },
  { id: "m2pFMf3SUeRTck9XzoZo68d9zrA", x: 1671, y: 719, w: 189, h: 132, rotate: 1 },
  { id: "dpDVCasCWnqTswkPsINagwDIrTU", x: 547, y: 1190, w: 240, h: 266, rotate: -3, caption: "Headed marketing for a Startup Comp" },
  { id: "JlMaysDlKulDEO5XTmKP57jo2DA", x: 938, y: 1013, w: 186, h: 230, rotate: 8, caption: "Volunteered at an NGO" },
  { id: "iLjUBhFE45932ALmjF2KmqQ", x: 1978, y: 1864, w: 188, h: 196, rotate: -4, caption: "BeSci Infographic Explorations" },
  { id: "wGr93AcryCxDArlm8TvCC7xc73Y", x: 2275, y: 1061, w: 256, h: 172, rotate: -7 },
  { id: "0dSvHGYVHlTZTD9Ifybo7QtntQ", x: 1954, y: 1177, w: 189, h: 183, rotate: 7 },
  { id: "2gz0ImS9VTVsgaqf5GgiP0GQ3TA", x: 1676, y: 2040, w: 235, h: 144, rotate: 5 },
  { id: "Ntqaq3nUVrXqgdVnPoeWs0CU", x: 968, y: 680, w: 292, h: 168, rotate: 2 },
  { id: "xC8YIO59CsQAiRYXDGu1EyRD40", x: 1315, y: 1946, w: 241, h: 233, rotate: -5, contain: true, caption: "Learning image generation" },
];

const DOT_GRID = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><circle cx="15" cy="15" r="1.4" fill="#ecdcdc"/></svg>',
)}")`;

function CardView({ card }: { card: Card }) {
  const body = (
    <>
      <Img
        id={card.id}
        thumb
        alt={card.caption ?? ""}
        className={`pointer-events-none block h-full w-full rounded ${card.contain ? "object-contain" : "object-cover"}`}
      />
      {card.caption && (
        <span className="absolute top-full left-1/2 mt-2.5 w-[150px] -translate-x-1/2 text-center font-grotesk text-xs leading-[1.3] font-normal text-[#d97c8a]">
          {card.caption}
        </span>
      )}
    </>
  );

  const props = {
    className: "absolute block rounded shadow-[0_4px_8px_rgba(0,0,0,0.15)]",
    style: {
      left: card.x - card.w / 2,
      top: card.y - card.h / 2,
      width: card.w,
      height: card.h,
      transform: card.rotate ? `rotate(${card.rotate}deg)` : undefined,
    },
  };

  return card.href ? (
    <a href={card.href} target="_blank" rel="noopener noreferrer" draggable={false} {...props}>
      {body}
    </a>
  ) : (
    <div {...props}>{body}</div>
  );
}

/** A scrapbook wall larger than the screen that can be dragged around. */
export default function SandboxCanvas() {
  const viewport = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });
  const drag = useRef<{ startX: number; startY: number; x: number; y: number; moved: boolean } | null>(null);

  // Phones see the wall at about two thirds size, like the Framer phone layout.
  const scale = useRef(1);

  const apply = (x: number, y: number) => {
    const vp = viewport.current;
    if (!vp || !canvas.current) return;
    const minX = Math.min(0, vp.clientWidth - CANVAS.width * scale.current);
    const minY = Math.min(0, vp.clientHeight - CANVAS.height * scale.current);
    offset.current = { x: Math.min(0, Math.max(minX, x)), y: Math.min(0, Math.max(minY, y)) };
    canvas.current.style.transform = `translate3d(${offset.current.x}px, ${offset.current.y}px, 0) scale(${scale.current})`;
  };

  useEffect(() => {
    const centre = () => {
      const vp = viewport.current;
      scale.current = window.innerWidth < 768 ? 0.65 : 1;
      if (vp) {
        apply(
          (vp.clientWidth - CANVAS.width * scale.current) / 2,
          (vp.clientHeight - CANVAS.height * scale.current) / 2,
        );
      }
    };
    centre();
    window.addEventListener("resize", centre);
    return () => window.removeEventListener("resize", centre);
  }, []);

  return (
    <div
      ref={viewport}
      className="relative h-svh cursor-grab touch-none overflow-hidden bg-[#fffafa] select-none active:cursor-grabbing"
      onPointerDown={(e) => {
        drag.current = { startX: e.clientX, startY: e.clientY, ...offset.current, moved: false };
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        if (!d) return;
        const dx = e.clientX - d.startX;
        const dy = e.clientY - d.startY;
        if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true;
        apply(d.x + dx, d.y + dy);
      }}
      onPointerUp={() => {
        // Keep `moved` readable for the click handler that fires right after.
        const d = drag.current;
        setTimeout(() => {
          if (drag.current === d) drag.current = null;
        });
      }}
      onPointerCancel={() => (drag.current = null)}
      onClickCapture={(e) => {
        // A drag that ends on a card should not open its link.
        if (drag.current?.moved) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onWheel={(e) => apply(offset.current.x - e.deltaX, offset.current.y - e.deltaY)}
    >
      <div
        ref={canvas}
        className="absolute top-0 left-0 origin-top-left will-change-transform"
        style={{ ...CANVAS, backgroundImage: DOT_GRID }}
      >
        <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[26px]">
          <p className="font-serif text-[30px] leading-[0.9] font-light tracking-[-0.02em] whitespace-nowrap text-ink italic">
            Consistency = f(Joy)
          </p>
          <p className="flex items-center gap-3 font-mono text-base leading-[0.9] font-medium tracking-[-0.02em] text-[#9ba1a5]">
            <DragIcon className="h-5 w-5" />
            DRAG TO MOVE
          </p>
        </div>
        {CARDS.map((card) => (
          <CardView key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
