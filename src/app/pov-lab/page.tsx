import type { Metadata } from "next";
import {
  Bare,
  ButtonLink,
  CaseStudy,
  Cols,
  Frame,
  Group,
  H,
  Hero,
  P,
  Section,
  Split,
  Stack,
  Sub,
} from "@/components/case-study";
import { Img, Vid } from "@/components/Media";

export const metadata: Metadata = {
  title: "Reframing Limiting Beliefs | Perspective Lab",
  description:
    "Product Designing turning ambiguous, high-stakes systems into clear product experiences.",
};

const TOOL_URL = "https://perspectivelab.netlify.app/";

const LESSONS = [
  {
    title: "On building it:",
    body: (
      <>
        The classification logic took longer than the reframing. Figuring out <em>what kind</em> of
        thought someone is having is harder than generating a response to it.
      </>
    ),
  },
  {
    title: "On thinking about the AI reasoning:",
    body: "AI works best with constraints. This tool made me think hard about what angles should & shouldn't touch while generating a reframe.",
  },
  {
    title: "On the product:",
    body: "The Insight panel was an afterthought. It became the thing users mentioned first. Feeling heard came first instead of practical reframes for users.",
  },
];

export default function PovLab() {
  return (
    <CaseStudy
      slug="pov-lab"
      accent="#f2bc27"
      logo="PAXovYJ9lg8hkkUdUkCrf3dG2i4"
      title={
        <>
          Reframing Limiting Beliefs <br className="hidden sm:block" />
          through Perspective Lab
        </>
      }
      meta={[
        { label: "NATURE", value: "Personal Project" },
        { label: "TEAM", value: "Just Me!" },
        {
          label: "TOOL",
          value: (
            <>
              Claude
              <br />
              React
              <br />
              Netlify
            </>
          ),
        },
        { label: "TIMELINE", value: "2 Days" },
      ]}
      hero={
        <Hero>
          <Vid id="16E1e9xlzwIr9F8PWXepNuPp0w4" className="aspect-[1912/852] w-full" />
        </Hero>
      }
      toc={[
        { href: "#tldr-pov", label: "TL;DR" },
        { href: "#problem", label: "Problem" },
        { href: "#how-it-works", label: "Perspective Lab" },
        { href: "#try-the-tool", label: "Try the tool" },
        { href: "#feedback", label: "User Feedback" },
        { href: "#ai-framework", label: "AI Framework" },
        { href: "#reflection", label: "Reflection" },
      ]}
    >
      <Section id="tldr-pov" eyebrow="TL;DR">
        <P>
          <strong>What</strong>: Perspective Lab, an AI tool that helps people challenge negative
          thought patterns using a technique from Cognitive Behavioural Therapy called Reframing.
        </P>
        <P>
          <strong>Why:</strong> Reframing only works when you do the thinking yourself. The tool is
          designed around that difference.
        </P>
        <P>
          <strong>Outcome:</strong> Shipped a live tool &amp; got 13 users to test it out.
        </P>
        <P>
          <strong>My Role:</strong> Designed, researched and built end-to-end.
        </P>
        <div>
          <ButtonLink href={TOOL_URL}>View Tool</ButtonLink>
        </div>
      </Section>

      <Section id="problem" eyebrow="WHAT AI TOOLS GET WRONG">
        <H>Most AI tools do the thinking for you. That&apos;s the opposite of how reframing works.</H>
        <P className="!text-body-strong">
          In CBT, reframing is the practice of examining a negative thought, finding the distortion
          in it, and arriving at a more balanced perspective. The cognitive effort is the mechanism,
          it&apos;s what builds the skill over time.
        </P>
        <P className="!text-body-strong">
          Most AI tools skip that step. You type a thought, the AI returns a better version. You
          feel better for a moment. But nothing changes in how you think next time.
        </P>
        <Frame>
          <Vid id="9IfmduspQa8dmf0tt4cKklWND74" className="w-full" />
        </Frame>
        <P className="!text-body-strong">
          | The problem isn&apos;t that AI can&apos;t reframe. It&apos;s that when AI does all the
          reframing, the user never learns to do it themselves.
        </P>
      </Section>

      <Group id="how-it-works">
        <Section eyebrow="INTRODUCING PERSPECTIVE LAB">
          <H>Classify before responding.</H>
          <P>
            The tool detects the thought pattern and scores how rigid the thinking is before
            generating anything. That score shapes the tone, depth, and number of reframes the user
            sees.
          </P>
          <Cols n={2}>
            <Img id="MBHJ1iZ4AojHTAme0UWlRZJBZY" className="w-full" />
            <Img id="I2LqXG3TKB2ASMuYfZnt3AINluI" className="w-full" />
          </Cols>
        </Section>

        <Section>
          <H>Separate understanding from reframing.</H>
          <P>
            Most tools merge explanation and advice into one; Perspective Lab separates them,
            insight on the left (why you think this way), reframes on the right (how else to see
            it).
          </P>
          <Bare>
            <Img id="d61JbMSzpVJgLyClNqZ6sPWkxdo" className="w-full" />
          </Bare>
        </Section>

        <Section>
          <H>Multiple perspectives, not one best answer.</H>
          <P>
            Three reframes, three angles on the same thought, never collapsed into one. The user
            sees all options and chooses what resonates.
          </P>
          <Bare>
            <Img id="rFUlImAc8LIQxUaxCzfe8Vvk" className="w-full" />
          </Bare>
        </Section>

        <Section>
          <Split>
            <Stack>
              <H>Let users change the lens.</H>
              <P>
                The Perspective Style dropdown regenerates reframes through different lenses,
                Logical, Compassionate, Action-Oriented.
              </P>
            </Stack>
            <Img id="aSTstl9vpEgoApbEF54j1IfdbDI" className="w-full" />
          </Split>
        </Section>
      </Group>

      <Section id="try-the-tool" eyebrow="TRY THE TOOL">
        <Bare>
          <iframe
            src={TOOL_URL}
            title="Perspective Lab"
            loading="lazy"
            className="h-[551px] w-full border-0"
          />
        </Bare>
      </Section>

      <Section id="feedback" eyebrow="WHAT USERS SAID">
        <H>I got 13 users to test out the tool &amp; here&apos;s what they thought.</H>
        <P>
          Most of the users said the reframes touched on both, the objective &amp; subjective angles
          around the thoughts. Below are some feedback points I received.
        </P>
        <Frame className="flex flex-col gap-5">
          <Img id="BlsXdiFcZSU70ZExhQbi0caDys" className="w-full" />
          <Img id="9HSGyXavUalHBzPFkDcjX8MUu8g" className="w-full" />
          <Img id="6giFyAzguev2HSAfOA13Q74nCLk" className="w-full" />
        </Frame>
      </Section>

      <Section id="ai-framework" eyebrow="MY AI FRAMEWORK">
        <H>Building this tool is where I formalized how I work with AI.</H>
        <P>
          Every design decision in Perspective Lab maps to a principle I now apply across my work.
        </P>
        <Bare>
          <Img id="Gp9WJLGJhmTiXsoeK0X0gU0Mgc" className="w-full" />
        </Bare>
        <div>
          <ButtonLink href="/ai-framework" className="bg-[#f0f0f0]">
            Read more
          </ButtonLink>
        </div>
      </Section>

      <Section id="reflection" eyebrow="REFLECTION">
        <H>What building this taught me.</H>
        <Stack className="!gap-8">
          {LESSONS.map((l) => (
            <Stack key={l.title} className="!gap-2">
              <Sub>{l.title}</Sub>
              <P>{l.body}</P>
            </Stack>
          ))}
        </Stack>
      </Section>
    </CaseStudy>
  );
}
