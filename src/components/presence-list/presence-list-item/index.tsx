import type { ReactNode, Ref } from "react";

import { motion } from "motion/react";

import { useMotionToken } from "@/hooks/use-motion-token";
import { presenceVariants, transitions } from "@/lib/motion";

type PresenceListItemProps = {
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLLIElement>;
};

export function PresenceListItem({
  children,
  className,
  ref,
}: PresenceListItemProps) {
  const variants = useMotionToken(presenceVariants);

  return (
    <motion.li
      animate="visible"
      className={className}
      exit="hidden"
      initial="hidden"
      layout="position"
      ref={ref}
      transition={transitions.presence}
      variants={variants}
    >
      {children}
    </motion.li>
  );
}
