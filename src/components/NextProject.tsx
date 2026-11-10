import Link from "next/link";
import ProjectLink from "./ProjectLink";
import { Img } from "./Media";
import { ArrowUpRight } from "./icons";
import { nextProject } from "@/lib/projects";

/** Closing block of a case study: a card for the next project, in the same style as the home cards. */
export default function NextProject({ slug }: { slug: string }) {
  const next = nextProject(slug);
  return (
    <section className="cs-next" aria-label="Next project">
      <p className="t-eyebrow">NEXT PROJECT</p>
      <ProjectLink href={next.href} className="cs-next-card">
        <div className="cs-next-media">
          {next.phoneImage && <Img id={next.phoneImage} alt="" className="cs-next-phone" />}
          <Img id={next.image} alt="" sizes="(min-width: 1100px) 718px, 100vw" className={next.phoneImage ? "cs-next-wide" : ""} />
        </div>
        <div className="cs-next-text">
          <h2>{next.title}</h2>
          <p className="t-sm">{next.tag}</p>
        </div>
        <span className="cs-next-go" aria-hidden="true">
          <ArrowUpRight className="h-[18px] w-[18px]" />
        </span>
      </ProjectLink>
      <Link href="/" className="cs-next-back t-sm">
        ← Back to all work
      </Link>
    </section>
  );
}
