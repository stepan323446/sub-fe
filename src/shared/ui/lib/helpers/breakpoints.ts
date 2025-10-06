export interface Breakpoints {
  default: number | string;
  lg?: number | string;
  md?: number | string;
  sm?: number | string;
  xs?: number | string;
}

export type BreakpointProp = string | number | Breakpoints;

export function getBreakpointsByProps(propValue: BreakpointProp): Breakpoints {
  let breakpoints: Breakpoints = { default: 1 };

  if (typeof propValue == "number" || typeof propValue == "string") {
    breakpoints.sm =
      breakpoints.md =
      breakpoints.xs =
      breakpoints.lg =
      breakpoints.default =
        propValue;
  } else {
    breakpoints = { ...propValue };

    if (breakpoints.lg === undefined) breakpoints.lg = breakpoints.default;
    if (breakpoints.md === undefined) breakpoints.md = breakpoints.lg;
    if (breakpoints.sm === undefined) breakpoints.sm = breakpoints.md;
    if (breakpoints.xs === undefined) breakpoints.xs = breakpoints.sm;
  }

  return breakpoints;
}
