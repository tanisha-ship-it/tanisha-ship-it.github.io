import type { Metadata } from "next";
import {
  Bare,
  ButtonLink,
  Card,
  CaseStudy,
  Cols,
  Frame,
  Group,
  H,
  Hero,
  Note,
  P,
  Quote,
  Section,
  Split,
  Stack,
  Sub,
} from "@/components/case-study";
import CompareSlider from "@/components/CompareSlider";
import {
  DecomposeIcon,
  FeedbackIcon,
  PredictIcon,
  RubricIcon,
  StepsIcon,
  StudentIcon,
  TeacherIcon,
} from "@/components/icons";
import { Img, Vid } from "@/components/Media";

export const metadata: Metadata = {
  title: "Micro-Assignments for Google Classroom",
  description:
    "Product Designing turning ambiguous, high-stakes systems into clear product experiences.",
  openGraph: { images: ["/og-micro-assignments.jpg"] },
};

const BLUE_TINT = "bg-[#f7fbff]";

const INSTRUCTOR_NEEDS = [
  {
    icon: DecomposeIcon,
    title: "Decomposition",
    body: "I can express how I mentally break down complex work so the tool reflects how I already teach",
  },
  {
    icon: FeedbackIcon,
    title: "Targeted Feedback",
    body: "I can respond to specific components, not just the final artifact, so I can correct earlier and more surgically.",
  },
  {
    icon: RubricIcon,
    title: "Rubric-Based AI Grading Feedback",
    body: "AI should behave like an extension of my standards, not an opaque second opinion.",
  },
];

const STUDENT_NEEDS = [
  {
    icon: StepsIcon,
    title: "Manageable Steps",
    body: "The system shows me what to do now, not just what is due in three weeks.",
  },
  {
    icon: PredictIcon,
    title: "Predictive feedback",
    body: "I know whether I’m on track before the final deadline, so I can course‑correct without guessing.",
  },
];

const ROADMAP = [
  {
    title: "Phase 1- Browser extension (current status- failed miserably with google auth)",
    body: "The browser extension MVP includes the minimum needed to test whether it changes student behavior inside Google Classroom.",
  },
  {
    title: "Phase 2- Expansion",
    body: "Later versions can add richer question types and class-level step analytics, once the core extension loop is validated.",
  },
  {
    title: "Phase 3- Motivation and visibility",
    body: "The extension can add progress tracking, completion visuals, and light streak mechanics, once we know what actually changes behavior, so gamification amplifies signal instead of adding noise.",
  },
];

type Need = (typeof INSTRUCTOR_NEEDS)[number];

function Needs({ heading, items, tint }: { heading: React.ReactNode; items: Need[]; tint?: boolean }) {
  return (
    <Split align="start" className="!mb-0">
      <Sub>{heading}</Sub>
      <Stack>
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="cs-card flex gap-5" data-tint={tint ? "" : undefined}>
            <Icon className="h-[38px] w-[38px] shrink-0 text-accent" />
            <div>
              <P>
                <strong>{title}</strong>
              </P>
              <p className="t-sm !text-body-strong">{body}</p>
            </div>
          </div>
        ))}
      </Stack>
    </Split>
  );
}

/** Screenshot on a pale blue panel with a soft drop shadow. */
function Shot({ id }: { id: string }) {
  return (
    <Frame tint={BLUE_TINT}>
      <Img id={id} className="w-full rounded shadow-[0_1px_5px_rgba(0,0,0,0.15)]" />
    </Frame>
  );
}

export default function MicroAssignments() {
  return (
    <CaseStudy
      slug="micro-assignments"
      accent="#0e73ad"
      logo="OoYrx40kbbLsay7psYZF36NTySg"
      title={
        <>
          Micro-Assignments <br className="hidden sm:block" />
          with AI Grading Feedback
        </>
      }
      meta={[
        { label: "NATURE", value: "Product Feature Concept" },
        {
          label: "TEAM",
          value: (
            <>
              1 User Researcher
              <br />1 Product Designer (Me!)
            </>
          ),
        },
        {
          label: "TOOL",
          value: (
            <>
              Lovable
              <br />
              Replit
              <br />
              Claude
            </>
          ),
        },
        { label: "TIMELINE", value: "3 Weeks" },
      ]}
      hero={
        <Hero>
          <Vid id="fDdsrXX0qdmJn43H26vCviI0aNc" className="aspect-video w-full" />
        </Hero>
      }
      toc={[
        { href: "#tldr-micro-assgn", label: "TL;DR" },
        { href: "#probs", label: "Problem" },
        { href: "#hypothesis", label: "Hypothesis" },
        { href: "#what2ship", label: "Deciding what ships" },
        { href: "#solution-main", label: "The Solution" },
        { href: "#biz-fit", label: "Business Fit" },
      ]}
    >
      <Section id="tldr-micro-assgn" eyebrow="TL;DR">
        <P>
          <strong>Problem:</strong> Google Classroom treats a 10-week research paper the same as a
          one-question quiz, one deadline, one submission, zero checkpoints in between.
        </P>
        <P>
          <strong>Solution:</strong> A 0→1 feature concept for Google Classroom that breaks complex
          assignments into scaffolded milestones with rubric-based AI grading feedback.
        </P>
        <P>
          <strong>Business Outcome:</strong> Strengthens Google&apos;s case for institutional
          upgrades from free to paid Workspace tiers by making Classroom the only LMS with native
          AI-graded scaffolding.
        </P>
        <P>
          <strong>My Role:</strong> Led product strategy and design, and contributed significantly
          to product management, from hypothesis framing, prioritization &amp; roadmapping.
        </P>
        <div className="cs-m relative cs-bare">
          <Img id="x2X6p6bdEGfuA8FBOTeFXn1wW0" className="aspect-[718/391] w-full object-cover" />
          <Vid
            id="dsU1LTaxgPDYD5k1o77wQDqBvQM"
            className="absolute top-1/2 left-1/2 w-[74.6%] -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-[0_0.6px_0.65px_rgba(0,0,0,0.18)]"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="https://drive.google.com/file/d/1b3j1fvAU-8XpfoEmxQKfR0QGlZJk9_9J/view?usp=sharing">
            Pitch Deck
          </ButtonLink>
          <ButtonLink href="https://micro-assignments.lovable.app">View Live App</ButtonLink>
        </div>
      </Section>

      <Section id="probs" eyebrow="CONTEXT">
        <H>Google Classroom is optimized for submission management, not learning progress.</H>
        <P className="!text-body-strong">
          Google Classroom handles short assignments well, but treats long projects the same way:
          one deadline, one submission, one grade.
        </P>
        <Bare>
          <Img id="VoLNERVcDPEuGAgcyeShmPWMNeo" className="w-full" />
        </Bare>
        <Note title="The Gap">
          Students often put the work off until late, and teachers only get visibility once the
          deadline is close or the work is already done.
        </Note>
      </Section>

      <Section id="hypothesis" eyebrow="HYPOTHESIS">
        <H>
          Breaking work into checkpoints would create better moments for feedback than one final
          submission.
        </H>
        <P>
          Before research, we framed a hypothesis instead of a generic “better grading” ask:
          <br />
          <br />
          If Classroom let instructors decompose a complex assignment into micro‑steps, each with
          its own deadline, instructions, and rubric‑aligned AI grading feedback, then:
        </P>
        <ul className="t-p list-disc pl-5">
          <li>
            Students would get earlier, more actionable feedback, reducing last‑minute panic.
          </li>
          <li>Instructors would shift effort from repetitive checks to higher‑value feedback.</li>
        </ul>
        <Bare>
          <Vid id="eSNJVr03YEEBoqVWiAxB3w6o" className="w-full" />
        </Bare>
        <Note title="This framing intentionally constrained the solution">
          We were not trying to “add AI” for the sake of it, but to validate whether scaffolding
          plus AI grading could change behavior and outcomes without breaking Classroom’s existing
          simplicity.
        </Note>
      </Section>

      <Group>
        <Section eyebrow="RESEARCH REFRAMED THE HYPOTHESIS">
          <H>Both instructors and students needed the same structural shift.</H>
          <P>
            Interviews with instructors highlighted that their real bottleneck is{" "}
            <strong>not the number of assignments but the nature of feedback.</strong>
          </P>
          <Bare>
            <Img id="8oKAtLGStuuwxxir6VrinhWWbwY" className="aspect-[718/300] w-full object-cover" />
          </Bare>
          <Quote icon={<TeacherIcon className="h-[39px] w-[43px]" />} by="Professor McDonald">
            &quot;I want to see work before it&apos;s too late to change anything. By the time
            I&apos;m grading, the semester is basically over.&quot;
          </Quote>
          <P className="!text-body-strong">
            They repeatedly correct the same low‑stakes issues while getting too little time to
            diagnose conceptual gaps. They also only see work when it is fully formed, which turns
            grading into an autopsy rather than a diagnostic check‑up.
          </P>
        </Section>

        <Section>
          <P>
            Students described <strong>“big” assignments not as hard but as vague.</strong>
          </P>
          <Bare>
            <Vid id="H1h0pRTaQOhwgdBQebMaN74UKtc" className="w-full" />
          </Bare>
          <Quote icon={<StudentIcon className="h-[42px] w-[42px]" />} by="Deekshanya, 3rd year student">
            &quot;I know the paper is due in three weeks but I don&apos;t know where to start, so I
            just... don&apos;t start.&quot;
          </Quote>
          <P>
            Students struggle to start, pace their work, and know if they’re on track until it’s too
            late. What looks like procrastination is often a planning and feedback problem: the way
            the work unfolds doesn’t match how Classroom represents it.
          </P>
        </Section>

        <Section>
          <Note title="One key insight reframed our opportunity:">
            Both sides wanted the <em>same</em> thing for different reasons, smaller, visible steps
            earlier in the process. For instructors, steps reduce unseen risk; for students, steps
            reduce unbounded anxiety.
          </Note>
        </Section>
      </Group>

      <Group id="what2ship">
        <Section eyebrow="FROM RESEARCH TO PRODUCT">
          <H>Ten user stories, but one underlying question: what behaviour are we changing?</H>
          <P>
            I used MoSCoW Prioritisation to keep the MVP focused on one thing: does breaking work
            into steps with AI grading each one actually change how students work and when teachers
            step in?
          </P>
          <Bare>
            <Img id="Hl2o7dIAFA0pWZRhz66FHZIuHIA" className="w-full" />
          </Bare>
        </Section>

        <Section>
          <Sub>What got cut &amp; why</Sub>
          <P className="!text-body-strong">
            <span className="font-normal">Peer Review Loops.</span> Students in interviews wanted to
            see each other&apos;s work at checkpoints, and pedagogically it&apos;s well-supported.
            But it doubles the interaction surface for every micro-assignment.
          </P>
          <P className="!text-body-strong">
            <span className="font-normal">Auto-generated micro-steps.</span> Instructors told us the
            decomposition <em>is</em> the pedagogical thinking, automating it would skip the step
            where they decide what matters.
          </P>
        </Section>

        <Section>
          <Needs
            heading={
              <>
                For instructors, <br />
                core needs became:
              </>
            }
            items={INSTRUCTOR_NEEDS}
          />
          <Needs
            heading={
              <strong>
                For students, <br />
                core needs became:
              </strong>
            }
            items={STUDENT_NEEDS}
            tint
          />
        </Section>

        <Section>
          <Note title="This framing pushed us to design a model">
            One where “micro‑assignment” is an object with its own lifecycle (create → do → grade →
            reflect), instead of a subdivision of existing instructions.
          </Note>
        </Section>
      </Group>

      <Section id="solution-main" eyebrow="SOLUTION">
        <H>Introducing Micro-Assignments with AI grading for Google Classroom.</H>
        <P>
          Slide to compare: left is my redesign with Micro-Assignments &amp; right is the existing
          platform interface.
        </P>
        <div className="cs-m">
          <CompareSlider
            left="G6w9FOw8jCTTvXycZCM9kyVZys"
            leftAlt="After"
            right="CsrZ4DwQ3R6LYy0fFWwOyA1u0"
            rightAlt="Before"
          />
        </div>
        <Bare>
          <Img id="bayI34czFBUW1DgKOZVXztgRI" className="w-full" />
        </Bare>
      </Section>

      <Group>
        <Section eyebrow="SOLUTION WALKTHROUGH">
          <H>The same feature had to feel structural to instructors and sequential to students.</H>
          <P>I designed two views around how each group thinks.</P>
        </Section>

        <Section>
          <p className="t-eyebrow !text-ink">INSTRUCTOR VIEW</p>
          <Stack className="!gap-2">
            <Sub>01&nbsp; Breaking down an assignment</Sub>
            <P>
              The flow guides instructors to break one assignment into chunks, each with its own
              instructions, deadline, &amp; grading criteria. It matches how teachers already plan
              the work: outline, draft, citations, final.
            </P>
          </Stack>
          <Frame tint={BLUE_TINT}>
            <Vid id="6TSvC2IqCI4jx3G9Tbh6Et9xzrw" className="w-full" />
          </Frame>
          <Note title="6-step cap">
            Micro-assignments are capped at 6 to prevent scaffolds from turning into mini-syllabi.
            It’s a design guardrail, not a technical limit, and can be revisited for assignment
            types that genuinely need more.
          </Note>
        </Section>

        <Section>
          <Stack className="!gap-2">
            <Sub>02 Track progress before the final deadline</Sub>
            <P>
              A dashboard that helps instructors track progress across each step of a larger
              assignment and sewhere students need support.
            </P>
          </Stack>
          <Shot id="90RhNn4N3zMr2ifI9WLd8670V1w" />
        </Section>

        <Section>
          <Split>
            <Stack className="!gap-2">
              <Sub>03 Criteria-specific AI feedback:</Sub>
              <P>
                AI feedback is tied to the exact rubric row for that step, making it narrower but
                easier for instructors to audit and trust.
              </P>
            </Stack>
            <Shot id="nRRqwsPfLyC4xsJI367kAP20inI" />
          </Split>
        </Section>

        <Section>
          <p className="t-eyebrow !text-ink">STUDENT VIEW</p>
          <Stack className="!gap-2">
            <Sub>01 One task at a time</Sub>
            <P>
              Students see one micro-assignment at a time, turning a large assignment into smaller,
              self-contained tasks that keep attention on what to do next.
            </P>
          </Stack>
          <Shot id="b9avJVRN26ipY8R34XghjkCO2k" />
        </Section>

        <Section>
          <Stack className="!gap-2">
            <Sub>02 Feedback before the next step</Sub>
            <P>
              Each micro-assignment closes its own loop, students see the criteria, submit, and get
              feedback before the next step begins.
            </P>
          </Stack>
          <Shot id="txxtLnoytqGcsDr0CltlxWeQwc" />
          <Note title="Visible, sequential submission not locked.">
            Students can read the full checklist from the start, but must submit in order so
            feedback on one step can shape the next.
          </Note>
          <P>
            <strong>Why</strong>: If students read ahead and start earlier, that’s an early sign the
            visibility itself is improving planning behavior.
          </P>
        </Section>

        <Section>
          <P>
            Across both views, I kept to Google Classroom’s existing patterns for typography,
            hierarchy, and actions so the feature feels like an evolution of the product, not a
            parallel tool that instructors must mentally context‑switch into.
          </P>
        </Section>
      </Group>

      <Section id="biz-fit" eyebrow="BUSINESS FIT">
        <H>It earns its place in paid tiers by scaling instructor intent, not instructor time.</H>
        <P>
          Google Workspace for Education uses tiered plans, and this feature fits naturally in the
          paid ones. It gives schools a clear reason to upgrade: less instructor effort, better
          completion, and a stronger response to platforms like Canvas and Blackboard that already
          support modular assignments.
        </P>
        <Bare>
          <Img id="c0HLLiyrWSQ9yUPkrCy9yW4k8Lo" className="w-full" />
        </Bare>
        <P>
          The Gemini integration creates a high-frequency, measurable surface for Google&apos;s AI
          inside a product used by 250M+ users, making the feature commercially important beyond
          EdTech alone.
        </P>
      </Section>

      <Section eyebrow="ROADMAP">
        <H>Three phases: validate the loop, expand the surface, then add motivation.</H>
        <P>
          Beyond the core flows, I defined acceptance criteria for the key stories and included
          accessibility requirements so the concept stayed realistic to build and use. I then
          mapped the roadmap in three phases.
        </P>
        <Stack className="cs-m">
          {ROADMAP.map((r) => (
            <Card key={r.title}>
              <Sub>{r.title}</Sub>
              <p className="t-sm">{r.body}</p>
            </Card>
          ))}
        </Stack>
      </Section>

      <Group>
        <Section eyebrow="REFLECTION">
          <H>What I&apos;d do differently.</H>
          <Stack className="!gap-2">
            <Sub>Start with a Wizard-of-Oz trial</Sub>
            <P>
              If I revisited this project, I would prioritize a lightweight prototype or
              Wizard‑of‑Oz trial inside a single institution before investing in a full engineering
              track.
            </P>
          </Stack>
          <Stack className="!gap-2">
            <Sub>Expose AI confidence to instructors, not just grades</Sub>
            <P>
              AI grading feedback shift from scoring everything to triaging: high-confidence
              submissions auto-pass, low-confidence/outliers flag for human review, shrinking
              teacher inboxes from 30 to 6 while building trust.
            </P>
          </Stack>
        </Section>

        <Section>
          <H>What I&apos;d want to know first.</H>
          <Stack className="!gap-2">
            <Sub>A question I most want data on</Sub>
            <P className="!text-body-strong">
              Does scaffolding actually flatten the spike of last‑minute submissions, or does it
              just create many small spikes?
            </P>
            <P>
              | Interview data pointed to the former, but log‑level data on submission timing,
              revisions, and final outcomes would make the investment case much stronger.
            </P>
          </Stack>
        </Section>

        <Section>
          <H>What I learnt.</H>
          <Stack className="!gap-2">
            <Sub>
              The best tools in education don&apos;t do more. They surface the right thing at the
              right moment.
            </Sub>
            <P className="!text-body-strong">
              Classroom&apos;s scale makes that a genuinely hard design problem. This was one
              attempt at a structural answer, not a solution to how students learn, but a change to
              when feedback meets them.
            </P>
          </Stack>
        </Section>
      </Group>
    </CaseStudy>
  );
}
