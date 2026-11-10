import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import {
  Bare,
  ButtonLink,
  CaseStudy,
  Card,
  Cols,
  Frame,
  Group,
  H,
  Hero,
  Lead,
  LinkedFigure,
  Mockup,
  Note,
  P,
  Section,
  Split,
  Stack,
  Sub,
} from "@/components/case-study";
import { BulbIcon } from "@/components/icons";
import { Img, Vid } from "@/components/Media";
import { WORKFLOW_CHART_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Reliable Concern Routing for Stanford Medicine",
  description:
    "Product Designing turning ambiguous, high-stakes systems into clear product experiences.",
  openGraph: { images: ["/og-stanford.jpg"] },
};

const ROLES = [
  {
    role: "Patient Care Technician",
    first: "Hears the concern.",
    but: "can't make clinical decisions  pulled to another chair.",
  },
  {
    role: "Registered Nurse",
    first: "Could assess it.",
    but: "wasn't there when the patient spoke. Never receives it.",
  },
  {
    role: "Medical Doctor",
    first: "Could act on it.",
    but: "only sees what gets escalated. Mostly not around.",
  },
];

const PRINCIPLES = [
  {
    title: "01 Capture before it's forgotten",
    insight: "Insight: PCTs are moving between patients. Capture needs to be fast.",
  },
  {
    title: "02 Ownership by assignment",
    insight: "Insight: Without explicit assignment, tasks fall between roles.",
  },
  {
    title: "03 Time Bound Responses",
    insight: "Insight: Delays impact patient trust. Response time is crucial.",
  },
  {
    title: "04 Context survives handoffs",
    insight: "Insight: Handoffs lose 30% of context. History must travel with the concern.",
  },
];

const LEARNINGS = [
  {
    title: "I kept designing for ideal conditions.",
    body: "Learning to design for the worst moment, not the best one, changed how I approach every screen now.",
  },
  {
    title: "I underestimated how much info dies in transitions.",
    body: "I thought capture was enough. I missed how vital handoffs are in healthcare.",
  },
  {
    title: "I confused visibility with usefulness.",
    body: "My instinct was to show more. Learning to surface only what needs attention reshaped how I design.",
  },
];

function Phase({ label, images, children }: { label: string; images: string[]; children: React.ReactNode }) {
  return (
    <>
      <p className="t-eyebrow !text-ink">{label}</p>
      <Lead images={images}>{children}</Lead>
    </>
  );
}

export default function StanfordMedicine() {
  return (
    <CaseStudy
      slug="stanford-medicine"
      accent="#0ca66d"
      logo="xliDfzjD45ErkckYfbwFUpurU"
     
      title={
        <>
          Routing Patient Concerns <br className="hidden sm:block" />
          Before They Disappear
        </>
      }
      meta={[
        { label: "NATURE", value: "Externship Project" },
        { label: "TEAM", value: "Just Me!" },
        {
          label: "TOOLS",
          value: (
            <>
              Claude
              <br />
              Figma
              <br />
              Perplexity
            </>
          ),
        },
        { label: "TIMELINE", value: "8 Weeks" },
      ]}
      hero={
        <Hero>
          <Img id="hfI7Gb38374WZaqCsiKjZCdF4" eager sizes="100vw" className="w-full" />
        </Hero>
      }
      toc={[
        { href: "#tldr", label: "TL;DR" },
        { href: "#design-challenge", label: "Design Challenge" },
        { href: "#ai-design-process", label: "AI Process" },
        { href: "#solution", label: "Solution" },
        { href: "#pre-validation", label: "Pre-Validation" },
        { href: "#impact", label: "Impact" },
      ]}
    >
      <Section id="tldr" eyebrow="TL;DR">
        <P>
          <strong>What:</strong> Designed Relay, a concern routing system for dialysis clinics.
          Captures patient concerns at bedside in under 10 seconds, routes them to the right
          clinician, and tracks each one to resolution.
        </P>
        <P>
          <strong>Why</strong>: Up to 60% of patient-reported concerns vanish between being spoken
          and being documented. In chronic care where patients return 3x/week, that compounds into
          eroded trust and missed clinical signals.
        </P>
        <P>
          <strong>Result:</strong> <em>Selected as 3/80 externs</em> to present to Stanford
          clinicians.
        </P>
        <P>
          <strong>Role:</strong> Owned end-to-end design process.
        </P>

        <Split>
          <Stack>
            <P>
              <strong>MVP:</strong> An interactive prototype walking through Relay&apos;s full
              concern lifecycle, from bedside capture to clinical resolution. This also includes any
              edge cases.
            </P>
            <div>
              <ButtonLink href="https://claude.ai/public/artifacts/164b620f-a270-44a8-8ce1-7ae308d445ec">
                View MVP
              </ButtonLink>
            </div>
          </Stack>
          <Frame className="!m-0">
            <Vid id="MgH0vpohgYQl1DnrTrmFFGTCQ4" className="aspect-[314/557] w-full object-cover" />
          </Frame>
        </Split>
      </Section>

      <Section eyebrow="THE CLINIC'S STARTING PROBLEM">
        <H>Upto 60% patient concerns disappear during dialysis sessions.</H>
        <P>A patient mentions leg cramps during their session. Here&apos;s what happens next.</P>
        <Bare>
          <Img id="i9fJfYqWRMVNrcvmMVEBdi42Lw" className="w-full" />
        </Bare>
        <Cols n={3} stack media={false}>
          {ROLES.map((r) => (
            <Stack key={r.role} className="!gap-2.5">
              <Sub>{r.role}</Sub>
              <P>
                {r.first}
                <br />
                <strong>But</strong> {r.but}
              </P>
            </Stack>
          ))}
        </Cols>
        <div className="cs-m cs-card flex items-center gap-4">
          <BulbIcon className="h-6 w-6 shrink-0 text-accent" />
          <P>
            <strong>The problem isn’t recording verbal concerns, it’s routing them.</strong>
            <br />
            They’re captured, but don’t reach the person who can resolve them on time.
          </P>
        </div>
      </Section>

      <Section eyebrow="WHY THIS IS HARD TO FIX">
        <H>Concerns surface in seconds, but resolution requires coordination across roles.</H>
        <P>Three insights that make this a design problem.</P>
        <Bare>
          <Img id="ve1dyxdmmTnhTwpvvDwNlGMoAt4" className="w-full" />
        </Bare>
      </Section>

      <Section id="design-challenge" eyebrow="THE DESIGN CHALLENGE">
        <H>
          How might we design a reliable path between a patient voicing a concern and the clinic
          acting on it?
        </H>
        <P>
          The person who hears it can’t triage it. The person who can triage it may not be there.
          The person who can act on it only sees what gets escalated. The system has to connect all
          three, without adding burden to any of them.
        </P>
      </Section>

      <Section eyebrow="CONSTRAINTS TO PRINCIPLES">
        <H>Each constraint became a design principle.</H>
        <Cols n={2} stack>
          {PRINCIPLES.map((p) => (
            <Card key={p.title}>
              <Sub>{p.title}</Sub>
              <p className="t-sm">{p.insight}</p>
            </Card>
          ))}
        </Cols>
      </Section>

      <Section id="ai-design-process" eyebrow="MY DESIGN PROCESS">
        <H>Designing for Clinic&apos;s Ground Reality, with AI</H>
        <P>
          My AI-Augmented Design process has its roots in the classic double diamond. I front-loaded
          the process around understanding the clinic roles &amp; context, and used AI to go deeper.
        </P>
        <Bare>
          <Img id="nJTVIsGKWQhbMFMmorc11TqskJg" className="w-full" />
        </Bare>
      </Section>

      <Section eyebrow="EXPLORATIONS">
        <H>Three directions rejected. One tradeoff accepted.</H>
        <P>
          I explored three approaches, each solved part of the problem but failed on the rest. Relay
          came out to be the winner with two tradeoffs: complex build &amp; EMR (electronic medical
          records) integration.
        </P>
        <Bare>
          <Img id="dKCOPDCLKFJqyO8hAFy2htAsFyU" className="w-full" />
        </Bare>
        <div className="flex flex-wrap gap-2.5">
          <ButtonLink href="https://ai.studio/apps/drive/1_CeB-pReAjAnjhq5t3_Ng1IG8XuD52Ac?fullscreenApplet=true">
            Kanban Board
          </ButtonLink>
          <ButtonLink href="https://claude.ai/public/artifacts/dfd08e1d-9d17-4621-8d95-78ccdfa2cc16">
            Decision Support Tool
          </ButtonLink>
          <ButtonLink href="https://claude.ai/public/artifacts/49301aee-bb6b-4f26-b573-254cdaddc078">
            EMR Checkpoint
          </ButtonLink>
        </div>
      </Section>

      <Section id="solution" eyebrow="THE SOLUTION">
        <H>
          Relay: A concern routing system that guarantees every patient concern is captured, owned,
          and resolved.
        </H>
        <Bare>
          <Img id="um30eeVjt1hFzX5TJEQI35xZypA" className="aspect-[756/300] w-full object-cover" />
        </Bare>
        <Frame>
          <Img id="gknE3i42fvidkYzOq9KfhDwoYM" className="w-full" />
        </Frame>
        <P>
          Concerns need a trajectory not better documentation. Relay moves a concern from the moment
          a patient speaks, through triage and treatment, to documented closure.
        </P>
      </Section>

      <Section>
        <Sub>
          The workflow maps every concern level, from PCT capture to RN escalation to MD
          intervention, with clear decision points and role handoffs at each step.
        </Sub>
        <LinkedFigure href={WORKFLOW_CHART_URL} label="Go to Workflow Chart">
          <Img id="yTebXn6Rz3HOGZfW7vEmbTNU0" className="w-full" />
        </LinkedFigure>
      </Section>

      <Section>
        <Phase label="PHASE 1: CAPTURE" images={["XO6sJ4GY1MnYht99Ws1llwB8fU"]}>
          A patient says something. The <span className="hl">technician has 10 seconds</span> before they forget or get pulled
          to another chair.
        </Phase>
        <P>This screen exists to move words from memory into the system fast.</P>
        <Frame className="flex flex-col gap-5">
          <Accordion title="AI Iterations">
            <Img id="O1odhUKdvyP2YxwTZOYzGA1jyc" className="w-full" />
          </Accordion>
          <Accordion title="Human-Owned Designs">
            <div className="cs-stage">
              <Mockup k={0.334}>
                <Vid id="mKJUOylPjqiZ9njU804udW5VFFM" />
              </Mockup>
            </div>
          </Accordion>
        </Frame>
      </Section>

      <Section>
        <Phase label="PHASE 2: CLASSIFY" images={["0BYG6r2DqOBxOVjjjUcvTpz4xGs"]}>
          The Nurse just received a concern from the Technician. Now <span className="hl">they decide: How urgent is this? Who should handle it?</span>
        </Phase>
        <P>
          Three levels of concerns: comfort, non-urgent clinical, urgent to keep classification
          fast.
        </P>
        <Frame className="flex flex-col gap-5">
          <Accordion title="AI Iterations">
            <Img id="GTHotbEbH8Km6WlfbQWYsuWbs" className="w-full" />
          </Accordion>
          <Accordion title="Human-Owned Designs">
            <Vid id="LM1HaviKKQU97tmmYWqeWxLxaW4" className="w-full" />
          </Accordion>
        </Frame>
        <P>
          The nurse makes a clinical judgment. The system handles routing, ownership, notifications,
          and deadlines.
        </P>
        <Note title="This avoids two common failures.">
          Over-documenting simple issues and vague escalation when urgency is real.
        </Note>
      </Section>

      <Section>
        <Phase label="PHASE 3: ESCALATE (NURSE TO DOCTOR)" images={["w5MeFk7WyaW9ZYFv8F4JicFDM"]}>
          The leg cramps turn out to be vascular. Nurse classifies the concern as urgent. The <span className="hl">doctor gets an alert immediately.</span>
        </Phase>
        <P>
          Doctors aren&apos;t at the bedside. They need context fast. The nurse&apos;s note enables a
          decision. If they can&apos;t act, ownership transfers automatically, no concern gets
          stuck.
        </P>
        <Frame>
          <Img id="jLIIlCbfmv8wAtkBSQueQ8uctA" className="w-full" />
        </Frame>

        <Lead images={["w5MeFk7WyaW9ZYFv8F4JicFDM", "0BYG6r2DqOBxOVjjjUcvTpz4xGs"]}>
          The doctor accepted. Now the <span className="hl">nurse &amp; doctor are coordinating care remotely</span> while
          the nurse works at the bedside.
        </Lead>
        <P className="!text-body-strong">Both see the same patient. Both stay in sync.</P>
        <Frame>
          {/* Both images are 1423px tall, so columns in proportion to their widths show the phones at the same size. */}
          <div
            className="cs-pair"
            style={{ gridTemplateColumns: "1435fr 798fr", "--a": 1435, "--b": 798 } as React.CSSProperties}
          >
            <figure>
              <Img id="NLd8Q5tVt32KhGjm6hpYIb8AmQ" className="w-full" />
              <figcaption className="t-sm mt-3 text-center">Doctor&apos;s View</figcaption>
            </figure>
            <figure>
              <Img id="6mwjQ6AcLFSMsMJ5Le6ZRaQqQ" className="w-full" />
              <figcaption className="t-sm mt-3 text-center">Nurse&apos;s View</figcaption>
            </figure>
          </div>
        </Frame>
        <P>
          During an emergency, the nurse&apos;s hands are busy. A single status selector
          (Stabilizing → Responding → Not Responding → Stable) takes one tap. The doctor sees it
          instantly.
        </P>
      </Section>

      <Section>
        <Phase label="PHASE 4: CLOSE" images={["w5MeFk7WyaW9ZYFv8F4JicFDM"]}>
          The patient is stable. But the nurse can&apos;t close this alone. <span className="hl">L3 concerns require doctor sign-off.</span>
        </Phase>
        <P>
          Doctor sees the nurse&apos;s note upfront. They can request more info before accepting. The
          concern closes &amp; is marked as resolved or handed off after the doctor approves it.
        </P>
        <Frame>
          <Img id="ididvITOz83zXR6jV511JTeG9Hg" className="w-full" />
        </Frame>
        <Note title="Nurses can’t close high-severity concerns due to regulation.">
          They document; doctors review and approve, ensuring accountability and fast resolution.
        </Note>
      </Section>

      <Section eyebrow="DOCTOR FEEDBACK">
        <P>
          I was selected as 1 of the 3 externs from a batch of 80 to present my solution to get real
          feedback.
        </P>
        <figure className="cs-m cs-card cs-stack !gap-5">
          <Img id="qOtCyoHptMft9B4Y3YJhpISfiY" className="h-[38px] w-[139px] object-cover" />
          <blockquote className="t-sub italic">
            &quot;The tool must reduce mental load in the moment and feel “native” to clinic
            workflow, not like extra admin&quot;
          </blockquote>
          <figcaption className="t-sm">~ Kelly Chen, Nephrology Nurse Practitioner</figcaption>
        </figure>
      </Section>

      <Group id="pre-validation">
        <Section eyebrow="PRE-VALIDATION">
          <H>Simulated walkthroughs before real clinic testing.</H>
          <P>
            I used a synthetic research process to pre-validate the concept to reduce risk before a
            live pilot.
          </P>
        </Section>

        <Section>
          <Sub>Walked 6 scenarios through 4 roles</Sub>
          <P>
            Each scenario imposed a real constraint: peak-hour capture, escalation with the RN
            absent, ambiguous symptom urgency, shift-change handoff, reassignments, and recurrent
            concerns.
          </P>
          <Bare>
            <Img id="iq70onjjK6ztIsvmJg1xGbeNWY" className="w-full" />
          </Bare>
        </Section>

        <Section>
          <Sub>The workflow kept breaking in the same place</Sub>
          <P>
            The decision tree outlines the actions each person needs to do. But across multiple
            scenarios, one role had no way to see whether any of it was actually happening.
          </P>
        </Section>

        <Section>
          <Sub>The charge nurse was accountable, but blind</Sub>
          <P>
            She manages the floor, reassigns staff, and triages priorities. But she had no view of
            which concerns were captured, which were stuck in escalation, and which were missed
            entirely.
          </P>
          <Cols n={2} stack>
            <Card tint className="!p-[var(--cs-pad)]">
              <Img id="H6I2ZGuwUwkll6CB6nJvx5Po9Q" className="h-full w-full rounded-lg object-cover" />
            </Card>
            <Card className="!gap-4">
              <Sub>Charge Nurse (CN)</Sub>
              <Sub>| Owns the floor, but can&apos;t see what&apos;s happening on it</Sub>
              <P>
                <strong>Knows</strong> staffing levels, shift timeline, escalation status
                <br />
                <strong>Acts in</strong> the full 8-hour shift window
                <br />
                <strong>Can&apos;t</strong> assess patients or be at every station
              </P>
            </Card>
          </Cols>
        </Section>

        <Section>
          <Sub>That gap became the dashboard</Sub>
          <P>
            The charge nurse needed a real-time view of what was happening across her floor,
            concern status, ownership, documentation gaps, and escalation state at every station.
          </P>
          <Bare>
            <Vid id="q6A6WunPkwWse2w6rYFlniSQKY" className="w-full" />
          </Bare>
          <Bare>
            <Img id="pErrlRCWMIMnbTQcq2Cvt6utEE" className="w-full" />
          </Bare>
        </Section>
      </Group>

      <Section id="impact" eyebrow="PROJECTED IMPACT">
        <H>
          These outcomes guided every design decision and would be the first metrics I&apos;d track
          in a pilot.
        </H>
        <Bare>
          <Img id="3NqiqoS0FkRTPjNwuisjvM8vRw" className="w-full" />
        </Bare>
      </Section>

      <Group>
        <Section eyebrow="REFLECTION">
          <H>Failures &amp; Learnings from Designing for Healthcare</H>
          <Cols n={3} stack>
            {LEARNINGS.map((l) => (
              <Card key={l.title} tint tall>
                <Sub>{l.title}</Sub>
                <p className="t-sm">{l.body}</p>
              </Card>
            ))}
          </Cols>
        </Section>
        <Section>
          <H>Principles I&apos;ve added to my toolkit:</H>
          <ul className="t-p list-disc pl-5 !text-body-strong">
            <li>Designing for reliability is different from designing for the ideal behaviour.</li>
            <li>AI is most valuable when it reduces friction not for making decisions.</li>
          </ul>
        </Section>
      </Group>
    </CaseStudy>
  );
}
