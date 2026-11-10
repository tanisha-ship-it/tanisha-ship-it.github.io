import type { Metadata } from "next";
import {
  Bare,
  ButtonLink,
  CaseStudy,
  Cols,
  Device,
  Frame,
  Group,
  H,
  Hero,
  Mockup,
  P,
  Section,
  Split,
  Stack,
  Stage,
  Sub,
} from "@/components/case-study";
import Reveal from "@/components/Reveal";
import PaperCarousel from "@/components/PaperCarousel";
import { Img, Vid } from "@/components/Media";

export const metadata: Metadata = {
  title: "Emotional Care Made Fun | Emote",
  description:
    "Product Designing turning ambiguous, high-stakes systems into clear product experiences.",
  openGraph: { images: ["/og-emote.jpg"] },
};

const DIRECTIONS = [
  { label: "Tracking (Emotion Logs)", phoneLabel: "Tracking-Emotion Logs", video: "oULUMaEYxnCGtuMkdZ7ydpgSPs", status: "REJECTED" },
  { label: "Processing (CBT Prompts)", phoneLabel: "Processing-CBT prompts", image: "9IYmy3xnVlKodIW6MwdHWNFJ9Q", status: "REJECTED" },
  { label: "(Wordless Offloading)", phoneLabel: "Wordless Offloading", video: "i3rySlC1jPtMJxpBk1A1wVySYQ", status: "SELECTED" },
];

const VERDICTS = [
  {
    label: "EMOTION LOGS",
    body: "Users said it felt like \"just recording.\" Easy to do, nothing to show for it. Low effort, low payoff.",
  },
  {
    label: "CBT PROMPTS",
    body: "Users still called it \"work.\" Naming feelings felt effortful, exactly the barrier we were trying to remove.",
  },
  {
    label: "WORDLESS OFFLOADING",
    body: "Users could \"get it out\" without explaining & felt delight. Only then did optional reflection feel safe.",
  },
];

const RELEASE_CLIPS = [
  "MWBGss0UCZcE48xE58JnYO5Sc2I",
  "0Ll80qtuWb2tMmPUJ5wT1uP9AoM",
  "O9qNh88MsqM8Am3SKKvOuBOFCrI",
  "TjXtSfIw9qiRJRODv8m5CuQ4cM",
];

const TRACKED = [
  ["Day 7 return rate", "7 of 12 users came back on day 7"],
  ["Avg. time to first expression", "~30 seconds"],
  ["Fork completion rate", "8 of 12 chose to \"go deeper\" after expressing"],
  ["Avg. session duration", "~2 minutes"],
  ["Reframe save rate", "3-4 saves per user across the week"],
];

function Pair({ items }: { items: { title: React.ReactNode; body: string }[] }) {
  return (
    <Cols n={2} stack media={false}>
      {items.map((item, i) => (
        <Stack key={i}>
          <Sub>{item.title}</Sub>
          <P>{item.body}</P>
        </Stack>
      ))}
    </Cols>
  );
}

export default function Emote() {
  return (
    <CaseStudy
      slug="emote"
      accent="#1b47ca"
      logo="9F8siMbG9q6G1vVHy1dLIL4pk"
      title={
        <>
          Making Emotional <br className="hidden sm:block" />
          Care Lighter for Gen Z
        </>
      }
      meta={[
        { label: "NATURE", value: "Startup Project" },
        {
          label: "TEAM",
          value: (
            <>
              1 PM
              <br />1 Researcher
              <br />1 Founder + Designer (me!)
            </>
          ),
        },
        {
          label: "SKILLS",
          value: (
            <>
              Behavioural Research
              <br />
              Interaction Design
              <br />
              Concept Validation
            </>
          ),
        },
        { label: "TIMELINE", value: "4 Weeks" },
      ]}
      hero={
        <Hero className="!overflow-hidden !bg-transparent !p-0">
          <Img id="H1BH8xeXwTNSX9bOacrdNebPiWA" eager sizes="100vw" className="w-full" />
        </Hero>
      }
      toc={[
        { href: "#tldr", label: "TL;DR" },
        { href: "#problem", label: "The Problem" },
        { href: "#research", label: "Research" },
        { href: "#design-challenge", label: "Design Challenge" },
        { href: "#solution", label: "Solution" },
        { href: "#takeaway", label: "Takeaways" },
      ]}
    >
      <Section id="tldr" eyebrow="TL;DR">
        <P>
          <strong>What</strong>: Designed an emotional care app for Gen Z that flips the usual
          sequence, you express first, reflect only if you want to. Built to work in the moments
          when people have the least mental capacity to &quot;do&quot; self-care.
        </P>
        <P>
          <strong>Why</strong>: Every existing wellness tool asks you to think before you can feel
          better. That&apos;s the wrong order. The barrier wasn&apos;t that people didn&apos;t care
          about their mental health. It&apos;s that the tools demanded effort at exactly the wrong
          moment.
        </P>
        <P>
          <strong>Outcome</strong>: Shipped a live prototype tested with 12 users over a week. 7 of
          12 returned on day 7. Users reached their first expression in under 30 seconds, proving
          the core bet held.
        </P>
        <P>
          <strong>My Role:</strong> Founded &amp; led product strategy &amp; design.
        </P>
        <div className="cs-m cs-bare relative">
          <Img id="AMnd7oukMErDtxt1PnGIquYcAU" className="aspect-[718/391] w-full object-cover" />
          <Vid
            id="TpNdoKOUQZmTQt6jIgKu4idfg"
            className="absolute top-1/2 left-1/2 w-[74.6%] -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-[0_0.6px_0.65px_rgba(0,0,0,0.18)]"
          />
        </div>
        <div>
          <ButtonLink href="https://drive.google.com/file/d/1D4sUQIU5nrxy3ErXwLisaXs1Z9sVf4uJ/view?usp=sharing">
            Pitch Deck
          </ButtonLink>
        </div>
      </Section>

      <Group id="problem">
        <Section eyebrow="THE TENSION">
          <H>
            &quot;I don&apos;t even know what checking in with yourself means. I just scroll
            Instagram when I&apos;m feeling sad.&quot;
          </H>
          <P>
            That quote came from a 21-year-old in one of my early interviews. Everyone in my age
            group who I spoke to described some version of the same pattern: feeling bad, knowing
            they should &quot;do something,&quot; and reaching for their phone instead.
          </P>
          <P>At 1:30am, Gen Z doesn&apos;t open a wellness app, they scroll.</P>
        </Section>

        <Section eyebrow="SO WHAT?">
          <H>This matters because 40% of GenZ says they feel stressed all or most of the time.</H>
          <P>
            What supports their emotional health now shapes the resilience of the generation
            that&apos;ll eventually lead everything else.
          </P>
          <Bare>
            <Img id="pN8h2TBu0RIHV9cEiOn5qGrLEgQ" className="w-full" />
          </Bare>
          <P>
            This project started with a narrower observation: the tools exist. People just
            don&apos;t reach for them in the moments they need them most.
          </P>
        </Section>
      </Group>

      <Section eyebrow="THE BEHAVIORAL PROBLEM">
        <H>Emotional care is low-dopamine. Everything else isn&apos;t.</H>
        <Bare>
          <Img id="x7NrvFdTrdFaY8FzqAcY6yo5fUY" className="w-full" />
        </Bare>
        <P>
          Emotional care is low-dopamine. Wysa, Reflectly, Finch, even the best still ask you to
          journal, chat, track, complete tasks.
        </P>
        <P>
          TikTok &amp; Instagram offer instant relief with zero effort. Wellness tools aren&apos;t
          bad. They&apos;re just competing against the most frictionless high-dopamine experiences
          ever designed. It&apos;s not a fair fight.
        </P>
      </Section>

      <Group id="research">
        <Section eyebrow="OUR HYPOTHESIS">
          <H>
            Playful, non-clinical framing could lower the barrier to consistent emotional
            processing.
          </H>
          <P>We believed this enough to build a research plan around it.</P>
          <Bare>
            <Img id="wB7tFjgGdG6D8j7bjxwVTjHx2Wo" className="w-full" />
          </Bare>
        </Section>

        <Section eyebrow="WHAT WE ACTUALLY FOUND">
          <H>
            The moment users need care most is exactly when they have the least capacity to start
            it.
          </H>
          <P>
            We ran a survey (n=67) and did ~20 interviews specifically because we needed to
            understand the <em>situation and struggle</em> that triggers a coping attempt.
          </P>
          <Bare>
            <Img id="PAl2SZr7OFah8yrh9GeLkEQGyo" className="w-full" />
          </Bare>
          <Sub>Four patterns kept surfacing:</Sub>
          <Bare>
            <Img id="v1Glgc6pRUmYGVp29SguVFZSuFY" className="w-full" />
          </Bare>
        </Section>

        <Section>
          <Sub>Our hypothesis said the barrier is friction. Research said it&apos;s capacity.</Sub>
          <Bare>
            <Img id="fraJbb0DpkvQdmvLtLSDOxDf8rc" className="w-full" />
          </Bare>
        </Section>
      </Group>

      <Section id="design-challenge" eyebrow="THE DESIGN CHALLENGE">
        <H>
          Make starting emotional care feel easier than scrolling, and deliver a small ‘I feel
          lighter’ shift in under a minute.
        </H>
        <P>These principles set the non-negotiables for how the solution should be designed.</P>
        <Bare>
          <Img id="xc1m5QoxIL96ThN6t98d2lqXAI" className="w-full" />
        </Bare>
      </Section>

      <Group>
        <Section eyebrow="THREE DIRECTIONS. ONE SELECTED.">
          <H>
            The moment users need care most is exactly when they have the least capacity to start
            it.
          </H>
          <P>
            We tested three directions with 32 users to find which one people would actually start
            when overwhelmed.
          </P>
          <Reveal
            x={30}
            y={0}
            duration={1.5}
            delay={0.2}
            ease="cubic-bezier(0.35, 0, 0, 1)"
            margin="0px"
            className="cs-m"
          >
            <Cols n={3} stack media={false}>
              {DIRECTIONS.map((d) => (
                <figure key={d.label} className="cs-stack items-center text-center !gap-4">
                  <figcaption className="t-p">
                    <span className="md:hidden">{d.phoneLabel}</span>
                    <span className="hidden md:inline">{d.label}</span>
                  </figcaption>
                  <Device>
                    {d.video ? <Vid id={d.video} /> : <Img id={d.image!} />}
                  </Device>
                  <p className="t-sm">{d.status}</p>
                </figure>
              ))}
            </Cols>
          </Reveal>
          <Cols n={3} stack media={false}>
            {VERDICTS.map((v) => (
              <Stack key={v.label} className="!gap-2">
                <p className="t-eyebrow !text-ink">{v.label}</p>
                <P>{v.body}</P>
              </Stack>
            ))}
          </Cols>
        </Section>

        <Section>
          <Split align="start">
            <Stage className="!m-0">
              <Device>
                <Vid id="uAhORh2WEDuJLN3cpkGDxpI7aA" />
              </Device>
            </Stage>
            <Stack>
              <Sub>
                | Processing and tracking both failed for the same reason: they asked users to think
                before they could feel lighter.
              </Sub>
              <P>
                Expression was the only direction that delivered relief as step one, which meant it
                was the only one that worked at the moment of lowest capacity.
              </P>
            </Stack>
          </Split>
        </Section>

        <Section eyebrow="THE LIGHTBULB MOMENT">
          <Split align="start">
            <Frame className="!m-0">
              <Vid id="4l4Yv5QYxRoK5lHoUWAM1zoQjo" className="aspect-[480/848] w-full object-cover" />
            </Frame>
            <Stack>
              <H>The insight clicked: the bottleneck wasn&apos;t processing, it was starting.</H>
              <P>We committed to expression first, with depth only if users choose it.</P>
              <P>
                <strong>Why:</strong> To avoid shallowness, we added optional reflection and a
                library for return moments.
              </P>
            </Stack>
          </Split>
        </Section>

        <Section eyebrow="DESIGN EXPLORATIONS WITH AI">
          <Cols n={2} stack media={false}>
            <P>
              <strong>Right:</strong>
              <br />
              The interface flow was suitable for our needed direction. But it seemed cold for an
              emotional care experience.
            </P>
            <P>
              <strong>Left:</strong>
              <br />
              Creating your own emotional canvas was cool but lacked the revisiting flow for
              particular days and feelings.
            </P>
          </Cols>
          <Stage>
            <Device>
              <Vid id="1AatfvGW4IejOZsHXgcP23360Y" />
            </Device>
            <Device>
              <Vid id="k8243dteBH9jTaD49DrmGIqqIpE" />
            </Device>
          </Stage>
        </Section>
      </Group>

      <Group id="solution">
        <Section eyebrow="MEET EMOTE">
          <H>
            A soft place to land when you&apos;re overwhelmed. Start in seconds, feel lighter fast,
            go deeper only if you want.
          </H>
          <P>
            Emotional care redesigned for low-capacity moments. A loop that makes starting easier
            than scrolling, and returning easier than starting over.
          </P>
          <P>
            <strong>The core loop:</strong>
            <br />
            Start → Offload → (Optional) Meaning → Save → Return
          </P>
          <Bare>
            <Img id="gFWTu14QsTQnB0kjRwELD24tc" className="w-full" />
          </Bare>
          <Bare>
            <Img id="Hd2x2VtULRCz1bXjNvpekTlN44" className="w-full" />
          </Bare>
          <P>
            GenZ&apos;s coping happens on phones. The intervention had to live on the device
            they&apos;re already holding.
          </P>
          <Bare>
            <Vid id="omGHP51BXejRK3iTkFv3m9nAE" className="w-full" />
          </Bare>
        </Section>

        <Section>
          <Sub>Release Features are at the core of Emote&apos;s experience.</Sub>
          <P>
            After expressing themselves through a scribble or photo, users can fold, tear, crumple,
            or squeeze the paper.
          </P>
          <div className="cs-m">
            <PaperCarousel ids={RELEASE_CLIPS} />
          </div>
          <P>
            <strong>| Design Decision: </strong>We introduced physical interaction so release could
            feel more embodied than polished.
          </P>
        </Section>

        <Section>
          <Split>
            <Stage className="!m-0">
              <Mockup k={0.72}>
                <Vid id="AGjeSBi51LACuhXgqZRrogcMJk" />
              </Mockup>
            </Stage>
            <Stack>
              <Sub>
                Reflection is offered, <br />
                never assumed.
              </Sub>
              <P className="!text-ink">
                After expression, EMOTE analyses the patterns in the user’s words and offers a
                gentle nudge for reflection.
              </P>
              <P className="!text-ink">
                <strong>| Design Decision: </strong>Reflection stays optional, so users can go
                deeper to process without feeling pushed.
              </P>
            </Stack>
          </Split>
        </Section>

        <Section>
          <Bare>
            <Img id="zk99nO17NfwT8Dp7wxpjGup3rNo" className="w-full" />
          </Bare>
        </Section>

        <Section>
          <Split>
            <Stack>
              <Sub>Reframes are earned, not generated.</Sub>
              <P className="!text-ink">
                Socratic prompts help users arrive at the reframe themselves which then AI polishes.
                Each one is tagged with its thinking lens, so CBT patterns are learned through use.
              </P>
              <P className="!text-ink">
                <strong>| Design Decision: </strong>I turned saving into a physical, visible act so
                it would feel like part of emotional processing,
              </P>
            </Stack>
            <Stage className="!m-0">
              <Mockup k={0.94}>
                <Vid id="okPb4mtuqWRCj9DrVyaDJsvvrbA" />
              </Mockup>
            </Stage>
          </Split>
        </Section>
      </Group>

      <Section eyebrow="RESPONSIBLE AI">
        <H>AI is embedded as a quiet guide not a therapist.</H>
        <Bare>
          <Img id="z2pBrh8WeJS5E5yEqIfNPJ3UeNE" className="w-full" />
        </Bare>
        <P>
          The goal isn&apos;t to replace human support. It&apos;s to offer a lighter touch for the
          everyday moments that don&apos;t need a therapist, but still need <em>something</em>.
        </P>
      </Section>

      <Group id="takeaway">
        <Section eyebrow="WHAT I VALIDATED & WHAT I DIDN'T">
          <H>EMOTE is an early MVP. I validated direction, not long-term retention.</H>
          <Bare>
            <Img id="cW2nzU7p9iYktwLyzxtxHw9QR4" className="w-full" />
          </Bare>
          <P>
            <span className="lead">What I&apos;d still need to prove:</span>
            <br />
            72% said they&apos;d use it daily, but intent doesn&apos;t equal behaviour. True habit
            formation would require a longer pilot with real usage data.
          </P>
        </Section>

        <Section eyebrow="CLOSING THE GAP">
          <H>So I shipped it.</H>
          <P className="!text-ink">
            I got 12 users to test out EMOTE for a week. This wasnt a statistically sound study but
            it proved whether the core bet held up in real life.
          </P>
        </Section>

        <Section>
          <Sub>What I Tracked</Sub>
          <dl className="flex flex-col gap-4">
            {TRACKED.map(([metric, value]) => (
              <div key={metric} className="grid grid-cols-2 items-baseline gap-x-[var(--cs-gap-grid)]">
                <dt className="t-p">
                  <strong>{metric}</strong>
                </dt>
                <dd className="t-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section>
          <H>What the data confirmed</H>
          <Pair
            items={[
              {
                title: (
                  <>
                    Starting wasn&apos;t <br />
                    the barrier anymore.
                  </>
                ),
                body: "Users reached their first expression in under 30 seconds. That worked.",
              },
              {
                title: (
                  <>
                    Depth was chosen, <br />
                    not forced.
                  </>
                ),
                body: "8 of 12 users who completed an expression chose to enter Perspective Lab afterward.",
              },
            ]}
          />
        </Section>

        <Section>
          <H>What Surprised Me</H>
          <Pair
            items={[
              {
                title: "Users returned for the garden, not the reframes.",
                body: "I expected the Perspective Lab to be the retention driver. It wasn't. In exit interviews, users talked about wanting to \"check on\" their garden, to see what they'd planted. The garden became a quiet reason to come back.",
              },
              {
                title: (
                  <>
                    Some users never <br />
                    went deeper
                  </>
                ),
                body: "3 of 10 users used EMOTE purely for expression. Never opened Perspective Lab. Never saved a reframe. But they came back 4+ times that week anyway. Offloading alone was enough value.",
              },
            ]}
          />
        </Section>
      </Group>

      <Section eyebrow="REFLECTIONS">
        <H>What I Learnt</H>
        <Pair
          items={[
            {
              title: (
                <>
                  Ditch perfection, <br />
                  focus on the MLP
                </>
              ),
              body: "We focused on a Minimum Lovable Product, the smallest version that gets people to feel delight & relief. This helped us test 3 directions & ship fast.",
            },
            {
              title: (
                <>
                  Design for the State, <br />
                  Not Just the Need
                </>
              ),
              body: "I started this project designing for what users needed: better emotional processing tools. I should have been designing for how users arrive.",
            },
          ]}
        />
      </Section>
    </CaseStudy>
  );
}
