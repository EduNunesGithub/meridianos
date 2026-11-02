import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

import { transitions } from "@/lib/motion";

type ActiveIndicatorProps = {
  className?: string;
};

const activeIndicatorLayoutId = "active-indicator";

export function ActiveIndicator({ className }: ActiveIndicatorProps) {
  return (
    <motion.span
      aria-hidden
      className={twMerge(
        "absolute inset-0 -z-10 rounded-full bg-chip-active",
        className,
      )}
      layoutId={activeIndicatorLayoutId}
      transition={transitions.indicator}
    />
  );
}
