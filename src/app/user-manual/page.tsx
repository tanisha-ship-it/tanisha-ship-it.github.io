import type { Metadata } from "next";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Tanisha's User Manual",
  description: "Learn about how Tanisha thinks",
};

// The Framer site serves this older About variant at /user-manual: same copy
// as /about, different heading. Kept so existing links keep working.
export default function UserManual() {
  return <AboutContent title="Tanisha's User Manual" />;
}
