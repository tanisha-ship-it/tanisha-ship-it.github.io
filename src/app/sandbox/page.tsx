import type { Metadata } from "next";
import SandboxCanvas from "@/components/SandboxCanvas";

export const metadata: Metadata = {
  title: "Sandbox | Tanisha Raghav",
  description:
    "Product Designing turning ambiguous, high-stakes systems into clear product experiences.",
};

export default function Sandbox() {
  return <SandboxCanvas />;
}
