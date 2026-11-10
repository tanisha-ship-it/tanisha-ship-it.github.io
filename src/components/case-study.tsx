import type { CSSProperties, ReactNode } from "react";
import Reveal from "./Reveal";
import { Img } from "./Media";
import CaseDials from "./CaseDials";
import CaseNav from "./CaseNav";
import NextProject from "./NextProject";
import ReadingProgress from "./ReadingProgress";
import { ArrowUpRight } from "./icons";

type Meta = { label: string; value: ReactNode };
type TocItem = { href: string; label: string };

/**
 * Page shell shared by every case study.
 *
 * Everything sits in one 720px reading column that is centred on the page; the
 * contents list hangs in the left margin on wide screens. Build pages from the
 * primitives below (Section, Frame, Bare, Cols, Split, Group) rather than
 * custom widths, so text and media always share the same left and right edges.
 */
export function CaseStudy({
  accent,
  slug,
  logo,
  title,
  meta,
  hero,
  toc,
  children,
}: {
  accent: string;
  /** Route name, used to pick the next project. */
  slug: string;
  logo: string;
  /** Kept for backwards compatibility; the logo is sized by the layout now. */
  logoClassName?: string;
  title: ReactNode;
  meta: Meta[];
  hero?: ReactNode;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <article className="cs" style={{ "--accent": accent } as CSSProperties}>
      <CaseDials />
      <ReadingProgress />
      <CaseNav items={[{ href: "#top", label: "Overview" }, ...toc]} />
      <div className="cs-shell">
        <div className="cs-main">
          <header className="cs-header">
            <Img id={logo} eager thumb className="cs-logo stagger" style={{ "--i": 0 } as CSSProperties} />
            <h1 className="t-display stagger" style={{ "--i": 1 } as CSSProperties}>
              {title}
            </h1>
            <dl className="cs-meta">
              {meta.map((m, i) => (
                <div key={m.label} className="stagger" style={{ "--i": 2 + i } as CSSProperties}>
                  <dt className="t-eyebrow">{m.label}</dt>
                  <dd className="t-p">{m.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          {hero}

          <div className="cs-body body-enter">
            <Reveal
              x={30}
              y={0}
              duration={1.5}
              delay={0.2}
              ease="cubic-bezier(0.35, 0, 0, 1)"
              margin="0px"
              className="cs-content"
            >
              {children}
            </Reveal>
          </div>

          <NextProject slug={slug} />
        </div>
      </div>
    </article>
  );
}

/** Panel around the hero image or video. Breaks out slightly wider than the column on big screens. */
export function Hero({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`cs-hero cs-wide stagger ${className}`} style={{ "--i": 6 } as CSSProperties}>
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`cs-section ${className}`}>
      {eyebrow && <p className="t-eyebrow">{eyebrow}</p>}
      {children}
    </section>
  );
}

/** A run of related sections (steps of one story) that sit closer together than major sections. */
export function Group({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <div id={id} className="cs-group cs-anchor">
      {children}
    </div>
  );
}

export function H({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`t-h ${className}`}>{children}</h2>;
}

export function Sub({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`t-sub ${className}`}>{children}</h3>;
}

export function P({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`t-p ${className}`}>{children}</p>;
}

/** A "| Heading" pull-out followed by a short explanation. */
export function Note({ title, children }: { title: ReactNode; children?: ReactNode }) {
  return (
    <div className="cs-stack !gap-2">
      <h3 className="t-sub">| {title}</h3>
      {children && <p className="t-p">{children}</p>}
    </div>
  );
}

/** Grey panel framing a screenshot or clip. Edges sit on the column lines; padding is always the panel token. */
export function Frame({
  children,
  className = "",
  tint,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  /** Optional background override, e.g. "bg-[#f7fbff]". */
  tint?: string;
  wide?: boolean;
}) {
  return <div className={`cs-m cs-frame ${wide ? "cs-wide" : ""} ${tint ?? ""} ${className}`}>{children}</div>;
}

/** Media without a panel: fills the column exactly. */
export function Bare({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return <div className={`cs-m cs-bare ${wide ? "cs-wide" : ""} ${className}`}>{children}</div>;
}

/** Two, three or four equal columns. Stacks on phones when `stack` is set. */
export function Cols({
  n = 2,
  stack = false,
  media = true,
  children,
  className = "",
}: {
  n?: 2 | 3 | 4;
  stack?: boolean;
  /** True when the grid holds media (adds the media spacing). */
  media?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${media ? "cs-m " : ""}cs-cols ${className}`}
      data-cols={n}
      data-stack={stack ? "phone" : undefined}
    >
      {children}
    </div>
  );
}

/** Text on one side, media on the other: two equal columns on the column grid. */
export function Split({
  children,
  align = "center",
  className = "",
}: {
  children: ReactNode;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div className={`cs-m cs-split ${className}`} data-align={align}>
      {children}
    </div>
  );
}

/**
 * Phone presentation shared by every project, so all phones read as the same
 * device at the same size. Use <Device> for screen recordings and screenshots
 * that have no bezel (it adds one), and <Mockup> for clips that already include
 * a phone body (`k` is the share of the clip's width the phone body fills, so
 * the phone itself lands at the standard width). Wrap them in a <Stage>.
 */
export function Device({ children }: { children: ReactNode }) {
  return <div className="cs-device">{children}</div>;
}

export function Mockup({ children, k = 1 }: { children: ReactNode; k?: number }) {
  return (
    <div className="cs-mock" style={{ "--k": k } as CSSProperties}>
      {children}
    </div>
  );
}

/** Panel that holds one or more phones, centred, at a fixed minimum height. */
export function Stage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`cs-m cs-frame cs-stage ${className}`}>{children}</div>;
}

/**
 * Figure with a link that appears on hover: a soft dark fade rises from the
 * bottom edge and a button offers the link (always visible on touch screens).
 */
export function LinkedFigure({
  href,
  label,
  children,
  className = "",
}: {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`cs-m cs-bare cs-linked ${className}`}>
      {children}
      <div className="cs-linked-fade">
        <a href={href} target="_blank" rel="noopener noreferrer" className="cs-linked-btn">
          {label}
          <ArrowUpRight className="btn-arrow h-[16px] w-[16px]" />
        </a>
      </div>
    </div>
  );
}

/** Vertical stack of text blocks inside a Split or Cols cell. */
export function Stack({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`cs-stack ${className}`}>{children}</div>;
}

/** Small illustration(s) beside a lead sentence. */
export function Lead({ images, children }: { images: string[]; children: ReactNode }) {
  return (
    <div className="cs-lead">
      <div className="cs-lead-media">
        {images.map((id) => (
          <Img key={id} id={id} thumb />
        ))}
      </div>
      <h3 className="t-sub">{children}</h3>
    </div>
  );
}

/** Card for grids: padding, radius and background come from the layout tokens. */
export function Card({
  children,
  tint = false,
  tall = false,
  className = "",
}: {
  children: ReactNode;
  tint?: boolean;
  tall?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`cs-card cs-stack !gap-2.5 ${className}`}
      data-tint={tint ? "" : undefined}
      data-tall={tall ? "" : undefined}
    >
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  className = "bg-surface",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex h-12 items-center gap-2.5 rounded-lg px-6 font-grotesk text-sm font-light tracking-[0.03em] text-ink transition-colors hover:bg-[#f0f0f0] ${className}`}
    >
      {children}
      <ArrowUpRight className="btn-arrow h-[18px] w-[18px] text-body" />
    </a>
  );
}

export function Quote({
  icon,
  children,
  by,
}: {
  icon?: ReactNode;
  children: ReactNode;
  by: ReactNode;
}) {
  return (
    <figure className="cs-m flex gap-6 rounded-[var(--cs-radius)] bg-surface p-[var(--cs-pad)]">
      {icon && <div className="shrink-0 text-accent">{icon}</div>}
      <div className="cs-stack !gap-2">
        <blockquote className="t-sub italic">{children}</blockquote>
        <figcaption className="t-sm">~ {by}</figcaption>
      </div>
    </figure>
  );
}
