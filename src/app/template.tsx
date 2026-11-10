import { ViewTransition } from "react";
import VtReset from "@/components/VtReset";

/**
 * Re-mounts on every navigation. With view transitions the new page wipes in
 * upward over the old one (which stays visible underneath); browsers without
 * view-transition support fall back to the plain wipe in `.page-enter`.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div className="page-enter">
        <VtReset />
        {children}
      </div>
    </ViewTransition>
  );
}
