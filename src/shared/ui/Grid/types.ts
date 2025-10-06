import type { ReactNode } from "react";
import type { BreakpointProp } from "../lib/helpers/breakpoints";

export interface GridItemProps {
  children?: ReactNode;
}
export interface GridProps {
  gap?: BreakpointProp;
  rows?: BreakpointProp;
  cols?: BreakpointProp;
  children?: ReactNode;
}
