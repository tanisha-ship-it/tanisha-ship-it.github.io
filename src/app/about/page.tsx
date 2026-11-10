import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Who is Tanisha Raghav?",
  description: "Learn about how Tanisha thinks",
};

export default function About() {
  return <AboutContent />;
}
