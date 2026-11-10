import ButterflyGame from "@/components/ButterflyGame";
import EmailButton from "@/components/EmailButton";
import HomeScroll from "@/components/HomeScroll";
import { PROJECTS } from "@/lib/projects";
import { Img } from "@/components/Media";

const HOME_PROJECTS = PROJECTS.filter((p) => p.onHome);

function Hero() {
  return (
    <section className="relative h-full">
      <Img
        id="mcSeinu88ncw6QY0KGwuWjrY1XI"
        eager
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <ButterflyGame />

      <div className="absolute inset-x-0 top-[28%] z-10 flex flex-col items-center px-5 text-center">
        <h1 className="hero-title font-serif text-[34px] leading-[1.2] font-normal text-ink md:text-[65px]">
          Tanisha Raghav
        </h1>
        <h2 className="mt-4 text-base leading-[1.3] font-normal text-ink md:text-xl">
          <span className="md:hidden">Hi! I&apos;m Tanisha, an AI-Native Behavioural Product Designer.</span>
          <span className="hidden md:inline">Hi! I&apos;m an AI-Native Behavioural Product Designer.</span>
        </h2>
        {/* The Framer phone layout drops the email button. */}
        <div className="mt-3.5 hidden md:block">
          <EmailButton />
        </div>
        <a
          href="#project-stanford"
          className="mt-[30px] rounded-[64px] bg-ink px-8 py-3 text-sm leading-[1.6] font-light tracking-[0.03em] text-white transition-[background-color,color] duration-[400ms] hover:bg-white/75 hover:text-ink"
        >
          Explore my work
        </a>
      </div>

      <p className="absolute right-5 bottom-[30px] z-10 flex items-center gap-2.5 text-sm leading-[1.6] font-light tracking-[0.03em] text-white md:right-[50px]">
        <svg viewBox="0 0 6 6" className="h-[18px] w-[17px]" fill="none" aria-hidden="true">
          <path
            d="M3 1v4M1.4 3.3 3 5l1.6-1.7"
            stroke="currentColor"
            strokeWidth="0.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Scroll
      </p>
    </section>
  );
}

export default function Home() {
  return <HomeScroll hero={<Hero />} projects={HOME_PROJECTS} />;
}
