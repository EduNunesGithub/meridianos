import type { ReactNode } from "react";

import { AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";

type PresenceListProps = {
  children: ReactNode;
  className?: string;
};

export function PresenceList({ children, className }: PresenceListProps) {
  return (
    <ul className={twMerge("relative", className)}>
      <AnimatePresence initial={false} mode="popLayout">
        {children}
      </AnimatePresence>
    </ul>
  );
}
