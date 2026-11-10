import { Img } from "@/components/Media";

const SUBSTACK = "https://tanishasbrainpickings.substack.com";

const WRITING = [
  { title: "Context Blocks", href: `${SUBSTACK}/p/stop-time-blocking-start-context`, year: "2026" },
  { title: "Is Interest a Reliable Guide?", href: `${SUBSTACK}/p/is-interest-a-reliable-guide`, year: "2024" },
  { title: "20 Things I Learnt at 20", href: `${SUBSTACK}/p/16-on-twenty`, year: "2024" },
  { title: "The Fundamentals of Life", href: `${SUBSTACK}/p/15-on-fundamentals`, year: "2024" },
  { title: "What Does God Mean To You?", href: `${SUBSTACK}/p/12-on-god`, year: "2024" },
  { title: "Become a Dot Collector", href: `${SUBSTACK}/p/71-on-being-a-dot-collector`, year: "2023" },
];

const SOCIALS = [
  { label: "Twitter", href: "https://x.com/moonsrabbit7" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/tanisha-raghav-0b3a3b1b4/" },
  { label: "Instagram", href: "https://www.instagram.com/tanishasbrainpickings/" },
];

const PHOTOS = ["Tnk2u8Kd7Ux0UyLuAV8LFift18", "2ooXPjbk50vMB5hJAUpwIuG7to", "CoLkpcLvJ061qYq96dyLnaeEfU8"];

function Em({ children }: { children: React.ReactNode }) {
  return <em className="font-serif text-ink">{children}</em>;
}

export function AboutContent({ title = "Hey, I'm Tanisha :)" }: { title?: string }) {
  return (
    <div className="mx-auto max-w-[576px] px-5 pt-[120px] pb-[50px]">
      <h1 className="t-display">{title}</h1>

      <div className="mt-[72px] grid grid-cols-3 gap-2.5">
        {PHOTOS.map((id) => (
          <Img key={id} id={id} eager thumb className="aspect-[172/177] w-full rounded object-cover" />
        ))}
      </div>

      <h2 className="mt-9 text-xl leading-[34px] font-normal tracking-[0.01em] text-ink">
        I&apos;m 21 &amp; a psychology &amp; entrepreneurship grad from Ashoka University, India. I
        have also been designing since 16!
      </h2>

      <div className="t-p mt-6 flex flex-col gap-4">
        <p>
          I love asking questions &amp; living at the <Em>intersection of different worlds</Em>.
        </p>
        <p>Art &amp; Science, Quantum Physics &amp; Philosophy, Business &amp; Psychology.</p>
        <p>My work is largely guided by questions &amp; curiosities.</p>
        <p>
          I use design to create a more playful &amp; meaningful life, for myself and others.
        </p>
        <p>
          I also write morning pages religiously where I practice what I call being{" "}
          <Em>&apos;creatively analytical&apos;.</Em>
        </p>
        <p>These reflections also inform my writing.</p>
      </div>

      <section className="mt-[72px]">
        <div className="flex items-center justify-between">
          <h2 className="t-sub">Writing</h2>
          <a
            href={`${SUBSTACK}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-grotesk text-sm font-light text-body transition-colors hover:text-ink"
          >
            View all
          </a>
        </div>
        <ul className="mt-6 flex flex-col gap-4">
          {WRITING.map((w) => (
            <li key={w.href} className="flex items-baseline justify-between gap-4">
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="t-p transition-colors hover:text-ink"
              >
                {w.title}
              </a>
              <span className="font-grotesk text-sm font-light tracking-[0.03em]">{w.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-[72px]">
        <h2 className="t-sub">Say hello</h2>
        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <Img
                id="i5KwlHxnC8AAQIMMpygMJRU00"
                thumb
                className="w-[124px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6"
              />
              <span className="t-sm -mt-3">{s.label}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
