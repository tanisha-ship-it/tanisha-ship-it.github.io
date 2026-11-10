export type Project = {
  slug: string;
  href: string;
  /** Anchor id used by the contents link on the home page. */
  id?: string;
  /** Landscape card image. */
  image: string;
  /** Portrait image for phones, where the project has one. */
  phoneImage?: string;
  title: string;
  tag: string;
  /** Shown on the home page. */
  onHome: boolean;
};

/** Every case study, in reading order. "Next project" follows this order and loops. */
export const PROJECTS: Project[] = [
  {
    slug: "stanford-medicine",
    href: "/stanford-medicine",
    id: "project-stanford",
    image: "8xLfvUPg60zO7yRsMWqW3FnrdCA",
    phoneImage: "kmCxDGhLNzBTQZsn8zENZeRKDj0",
    title: "Routing Patient Concerns Before They Disappear",
    tag: "Externship · Stanford Medicine",
    onHome: true,
  },
  {
    slug: "emote",
    href: "/emote",
    image: "kIraXQSOkWXOaOJ9vUxkjsAY",
    phoneImage: "cT3H7RLyAPHYmnDRXALGqh2cHFI",
    title: "Making Emotional Care Lighter for GenZ",
    tag: "Startup Project · Ashoka University",
    onHome: true,
  },
  {
    slug: "micro-assignments",
    href: "/micro-assignments",
    image: "AWKK7EKI6Ped7pRuoyJn6kjYjM",
    phoneImage: "0cgcPyKL6fDIYIb6BEbZuKeWo",
    title: "Rethinking Learning Through Micro-Assignments",
    tag: "Product Feature · Google Classroom",
    onHome: true,
  },
  {
    slug: "pov-lab",
    href: "/pov-lab",
    image: "dfTtcKeidfI1TEWPkUHLeKPBI",
    phoneImage: "Smy2FqjbEhQ2Afhm4oLKVJP8",
    title: "Reframing Limiting Beliefs",
    tag: "Personal Project · Tanisha Raghav",
    onHome: true,
  },
  {
    slug: "aoc",
    href: "/aoc",
    image: "dhGGMCPis9vfwXDBj0V9qdqbA",
    title: "Making Campus Feel Navigable from Day One",
    tag: "Client Project · Ashoka University",
    onHome: false,
  },
];

export function nextProject(slug: string): Project {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
}
