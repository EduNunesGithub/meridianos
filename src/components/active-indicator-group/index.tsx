import type { ReactNode } from "react";

import { LayoutGroup } from "motion/react";
import { useId } from "react";

type ActiveIndicatorGroupProps = {
  children: ReactNode;
};

export function ActiveIndicatorGroup({ children }: ActiveIndicatorGroupProps) {
  const groupId = useId();

  return <LayoutGroup id={groupId}>{children}</LayoutGroup>;
}
