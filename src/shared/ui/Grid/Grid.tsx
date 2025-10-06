import { StyledGrid } from "./Grid.styles";
import type { GridProps } from "./types";
import { getBreakpointsByProps } from "../lib/helpers/breakpoints";

const Grid = ({
  gap = 0,
  rows = "auto",
  cols = "auto",
  children,
}: GridProps) => {
  const gapBreakpoints = getBreakpointsByProps(gap);
  const rowsBreakpoints = getBreakpointsByProps(rows);
  const colsBreakpoints = getBreakpointsByProps(cols);

  return (
    <StyledGrid
      gap={gapBreakpoints}
      rows={rowsBreakpoints}
      cols={colsBreakpoints}
    >
      {children}
    </StyledGrid>
  );
};

export default Grid;
