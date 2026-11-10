import type { Metadata } from "next";
import { ArrowUpRight } from "@/components/icons";
import { Img, Vid } from "@/components/Media";
import InView from "@/components/InView";
import Reveal from "@/components/Reveal";

/** The slide-in-from-the-right used for text blocks on the Framer site. */
const SLIDE = { x: 30, y: 0, duration: 1.5, delay: 0.2, ease: "cubic-bezier(0.35, 0, 0, 1)", margin: "0px" } as const;
const RISE = { x: 0, y: 30, duration: 1.5, delay: 0, ease: "cubic-bezier(0.35, 0, 0, 1)", margin: "0px" } as const;

export const metadata: Metadata = {
  title: "Product Designer's AI Stack",
  description:
    "Product Designing turning ambiguous, high-stakes systems into clear product experiences.",
};

const TOOL_URL = "https://692c0bb350fe9640628546a4--perspectivelab.netlify.app/";

const PRINCIPLES = [
  {
    title: "Grade the output",
    body: "Tag the output before it shapes the work.",
    className: "lg:-rotate-[5deg] lg:mt-[66px]",
  },
  {
    title: "Catch the false clarity",
    body: "Look for the tradeoffs hiding inside the summary.",
    className: "lg:rotate-[9deg]",
  },
  {
    title: "Own the decision",
    body: "Push it from every angle, then own the decision.",
    className: "lg:-rotate-[3deg] lg:mt-[72px]",
  },
];

const IN_PRACTICE = [
  {
    title: "P1: Grade Output",
    body: "Before responding, the tool detects the thought pattern and scores how rigid the thinking is. The classification decides what kind of response the user gets.",
  },
  {
    title: "P2: Catch false clarity",
    body: "Users want relief and understanding at the same time. Instead of blending both into one vague answer, Perspective Lab separates them, insight on one side, reframing on the other.",
  },
  {
    title: "P3: Own the decision",
    body: "AI could generate one best answer. I chose to show multiple paths and let users pick the lens that helps most. The AI wrote the reframes. The product decisions were mine.",
  },
];

const GALLERY = ["NaoCytCeB2PZNY2EriXvYaHCfU", "THQvKBrdRkLqw0AKTIRkJEQUXGg", "WXDFrmuGZ0Mfl3rY4xkOIjrA"];

const GALLERY_LINKS = [
  { id: "agbo62Qj1cPMS2S15s1gm1gcCqw", href: "https://microplastic-calculator.lovable.app/" },
  {
    id: "UnDwwVhMdwWtXgGHD9dcsWqrk8",
    href: "https://ai.studio/apps/drive/1VdlTJ4lWmDogbqwR_AQ17qcxixCdnjyo?fullscreenApplet=true",
  },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center font-serif text-[30px] leading-[1.2] font-light text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

/** Hand-drawn red threads pinning the three principle cards together. */
function Threads() {
  return (
    <svg
      viewBox="0 0 1026 440"
      fill="none"
      stroke="#e5533d"
      strokeWidth="1.5"
      aria-hidden="true"
      className="fly-threads pointer-events-none absolute inset-0 z-10 hidden h-full w-full lg:block"
    >
      <circle cx="232" cy="122" r="6" />
      <path d="M232 116C226 62 290 30 368 34" strokeLinecap="round" />
      <circle cx="404" cy="42" r="6" />
      <circle cx="652" cy="204" r="6" />
      <path d="M655 210c4 30 42 44 60 30 10-8-2-20-22-18" strokeLinecap="round" />
      <circle cx="790" cy="244" r="6" />
    </svg>
  );
}

export default function AiFramework() {
  return (
    <div className="flex flex-col gap-[100px] px-5 pt-[95px] pb-[160px] md:gap-[160px] md:px-[50px] md:pb-[240px]">
      <section className="flex flex-col items-center gap-4 text-center">
        <h1 className="t-display">My AI Design Framework</h1>
        <p className="t-p">
          My framework for working with AI without losing my judgment as a designer.
        </p>
        <Img id="9njMCB1ycXn089th4srSv8xWGJU" eager sizes="100vw" className="mt-11 w-full max-w-[1300px] rounded-[14px]" />
      </section>

      <InView className="fly" threshold={0.35}>
      <section id="process-cards">
        <Heading>The Principles</Heading>
        {/* Phones get a plain list, like the Framer phone breakpoints; cards from md up. */}
        <ul className="mt-10 flex flex-col gap-5 md:hidden">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} className="t-p">
              <strong className="block font-medium text-ink">
                P{i + 1}: {IN_PRACTICE[i].title.replace(/^P\d: /, "")}
              </strong>
              {p.body}
            </li>
          ))}
        </ul>
        <div className="relative mx-auto mt-[68px] hidden max-w-[1026px] flex-col items-center gap-6 md:flex lg:flex-row lg:items-start lg:gap-[30px]">
          <Threads />
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.title}
              className={`fly-card fly-${i} flex min-h-[360px] w-full max-w-[322px] flex-col justify-between bg-[#fff9eb] p-8 shadow-[12px_16px_16px_rgba(235,235,235,0.27)] ${p.className}`}
            >
              <p className="font-mondwest text-[45px] leading-[1.25] font-bold tracking-[-0.06em] text-black">
                {i + 1}
              </p>
              <div>
                <h3 className="font-serif text-[26px] leading-[1.6] font-light tracking-[-0.02em] text-black italic">
                  {p.title}
                </h3>
                <p className="text-base leading-[1.7] font-normal text-black/50">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </InView>

      <section className="flex flex-col items-center">
        <Heading>In Practice</Heading>
        <Reveal {...SLIDE} className="mt-4 max-w-[847px]">
          <p className="t-p text-center">
            Perspective Lab is an AI-powered reframing tool for cognitive distortions. It&apos;s also
            where all three principles of Epistemic Design are baked into the product itself.
          </p>
        </Reveal>
        <a
          href={TOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 font-grotesk text-base font-medium tracking-[-0.01em] text-[#fab273]"
        >
          Try the tool here
          <ArrowUpRight className="h-[18px] w-[18px] text-body" />
        </a>
        <a
          href={TOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 block w-full max-w-[1072px]"
        >
          <Vid id="lslMneD4vMhsQzjPElrsUBaWaQM" className="w-full" />
        </a>
        <div className="mt-9 grid max-w-[1072px] gap-x-[50px] gap-y-8 md:grid-cols-3">
          {IN_PRACTICE.map((p) => (
            <Reveal key={p.title} {...SLIDE}>
              <p className="t-p">
                {p.title}
                <br />
                <br />
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <Heading>The Gallery</Heading>
        <Reveal {...SLIDE} className="mt-4">
          <p className="t-p text-center">
            Explorations built with AI as a thinking and making partner.
          </p>
        </Reveal>
        <div className="mt-24 grid gap-2.5 md:grid-cols-3">
          {GALLERY.map((id) => (
            <Reveal key={id} {...RISE}>
              <Img id={id} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[440/266] w-full object-cover" />
            </Reveal>
          ))}
        </div>
        <div className="mt-[19px] grid gap-2.5 md:grid-cols-3">
          {GALLERY_LINKS.map((g) => (
            <Reveal key={g.id} {...RISE}>
              <a href={g.href} target="_blank" rel="noopener noreferrer" className="block">
                <Img id={g.id} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[440/275] w-full object-cover" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
