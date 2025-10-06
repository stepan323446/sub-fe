import { styled } from "@mui/material";
import type { Breakpoints } from "../lib/helpers/breakpoints";

export const StyledGrid = styled("div")<{
  gap: Breakpoints;
  rows: Breakpoints;
  cols: Breakpoints;
}>(({ theme, gap, rows, cols }) => ({
  display: "grid",
  gridTemplateColumns: cols.default,
  gridTemplateRows: rows.default,
  gap: gap.default,

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: cols.lg,
    gridTemplateRows: rows.lg,
    gap: gap.lg,
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: cols.md,
    gridTemplateRows: rows.md,
    gap: gap.md,
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: cols.sm,
    gridTemplateRows: rows.sm,
    gap: gap.sm,
  },
  [theme.breakpoints.down("xs")]: {
    gridTemplateColumns: cols.xs,
    gridTemplateRows: rows.xs,
    gap: gap.xs,
  },
}));
