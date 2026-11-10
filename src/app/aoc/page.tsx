import type { Metadata } from "next";
import { ButtonLink, CaseStudy, Frame, Group, H, P, Section } from "@/components/case-study";
import { Img } from "@/components/Media";

export const metadata: Metadata = {
  title: "Making Campus Feel Navigable",
  description:
    "Product Designing turning ambiguous, high-stakes systems into clear product experiences.",
};

export default function Aoc() {
  return (
    <CaseStudy
      slug="aoc"
      accent="#0e73ad"
      logo="E1Gk7HBf5L07XypN10wXWQBdSY"
      title={
        <>
          Making Campus Feel <br className="hidden sm:block" />
          Navigable from Day one
        </>
      }
      meta={[
        { label: "NATURE", value: "Client Project" },
        {
          label: "TEAM",
          value: (
            <>
              1 AI Engineer
              <br />1 Frontend Dev
              <br />1 Designer (me!)
            </>
          ),
        },
        {
          label: "TOOL",
          value: (
            <>
              Figma
              <br />
              Flutter
              <br />
              Firebase
            </>
          ),
        },
        { label: "TIMELINE", value: "6 Weeks" },
      ]}
      toc={[
        { href: "#tldr-pov", label: "TL;DR" },
        { href: "#problem", label: "Problem" },
        { href: "#aoc", label: "Ashoka Companion App" },
        { href: "#impact", label: "Impact" },
      ]}
    >
      <Section id="tldr-pov" eyebrow="TL;DR">
        <P>
          <strong>What</strong>: Designed Ashoka Companion, a mobile app that onboards freshmen to
          campus life by solving the things they can&apos;t figure out on their own: who to talk to,
          what&apos;s happening when, and who to ask.
        </P>
        <P>
          <strong>Why:</strong> Ashoka University runs a one-week orientation for incoming students.
          But one week can&apos;t compress an entire campus&apos;s social, spatial, and
          institutional knowledge into a new student&apos;s head.
        </P>
        <P>
          <strong>Outcome:</strong> 1,247+ downloads. 800+ MAU. Shipped on both App Store and Play
          Store within 6 weeks.
        </P>
        <P>
          <strong>My Role:</strong> Product Design Lead. Owned user research, information
          architecture, interaction design, and UI across the full product.
        </P>
        <div>
          <ButtonLink href="https://apps.apple.com/us/app/ashoka-companion/id6462795820">
            View on app store
          </ButtonLink>
        </div>
      </Section>

      <Section id="problem" eyebrow="THE PROBLEM">
        <H>University orientation ends on Day 7. The confusion doesn&apos;t.</H>
        <P className="!text-body-strong">
          Ashoka&apos;s orientation week is dense, talks, tours, mixers, resource fairs. The problem
          isn&apos;t effort. It&apos;s compression. You can&apos;t absorb a campus in a week.
        </P>
        <P className="!text-body-strong">
          We surveyed incoming freshmen and found the same three gaps surfacing everywhere:
        </P>
        <Frame>
          <Img id="DnUaB7PB7CwpJhBG8022WA8ZoE" className="w-full" />
        </Frame>
        <P className="!text-body-strong">
          The university had answers to all of these. Students just had no reliable way to access
          them in the moment they needed them.
        </P>
      </Section>

      <Section eyebrow="THE DESIGN CHALLENGE">
        <H>
          How do you make an entire campus&apos;s knowledge accessible to someone who arrived 48
          hours ago?
        </H>
        <P>
          The constraint wasn’t information, it was discoverability. Resources were scattered
          across PDFs, websites, notice boards, and seniors, and none were accessible at the moment
          of need.
        </P>
        <P>The app had to act as a just-in-time layer over campus.</P>
      </Section>

      <Group id="aoc">
        <Section eyebrow="SOLUTION">
          <H>A single surface for everything a freshman doesn&apos;t know yet.</H>
          <P>
            Five entry points, profile, Find My Pal, Ashoka Assist, campus map, and support
            contacts, each mapped to a specific moment a freshman gets stuck.
          </P>
          <P>
            The schedule view pulls in the full O-week timeline so students stop asking
            &quot;what&apos;s next&quot; and start just showing up.
          </P>
          <Frame>
            <Img id="dhGGMCPis9vfwXDBj0V9qdqbA" className="w-full" />
          </Frame>
        </Section>

        <Section>
          <H>Setting up to connect</H>
          <P>
            Before using Find My Pal, students create a lightweight profile, name, batch, interests,
            and an optional Instagram.
          </P>
          <P>
            Interest tags power matching, but also act as conversation starters by showing up before
            the chat begins.
          </P>
          <Frame>
            <Img id="dJr8aDiZEjtf7i5JYhwSCauRm4" className="w-full" />
          </Frame>
        </Section>

        <Section>
          <H>Find My Pal: A 1-minute window to meet someone new.</H>
          <P>
            50% of freshmen felt isolated. Traditional icebreakers fail, too performative,
            high-pressure, and biased toward extroverts.
          </P>
          <P>
            Find My Pal flips it: you’re matched on shared interests, see common ground upfront,
            then get 60 seconds to chat, short enough to avoid awkwardness, focused enough to spark
            something real, and designed to move offline.
          </P>
          <Frame>
            <Img id="WSaLtAfYbORFaPVkmwXiteW1Blg" className="w-full" />
          </Frame>
        </Section>

        <Section>
          <H>The questions that don&apos;t need a person, just a faster path to the answer.</H>
          <P>
            <strong>Schedule</strong> — A day-by-day O-week timeline with times and locations. The
            current day is highlighted, events are chronological, and location pins replace
            confusing room codes. No more “what’s next?” or “where is it?”
          </P>
          <P>
            <strong>Ashoka Assist</strong> — An AI chatbot trained on university data and manually
            indexed info — from mess menus to club schedules. Built for real freshman questions, not
            assumed ones.
          </P>
          <P>
            <strong>Support Contacts</strong> — A searchable directory of all campus resources —
            academic, health, administrative. One search, one answer. No buried links.
          </P>
          <Frame>
            <Img id="LaH0xeHk7ELEBlW0sUlqcT1HdA" className="w-full" />
          </Frame>
        </Section>
      </Group>

      <Section id="impact" eyebrow="IMPACT">
        <H>1,247 downloads in the first week. 800+ kept using it monthly.</H>
        <P>
          Shipped on both the Apple App Store and Google Play Store in 6 weeks. Find My Pal became
          the most-used feature, the primary way students met beyond orientation groups.
        </P>
        <P>
          The app outlasted O-week: 800+ monthly active users into the semester.
        </P>
        <Frame>
          <Img id="DVmLNuCpOIi8yRKIjH8xiw" className="w-full" />
        </Frame>
      </Section>
    </CaseStudy>
  );
}
