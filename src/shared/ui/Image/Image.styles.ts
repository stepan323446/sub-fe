import { styled } from "@mui/material";
import type { Breakpoints } from "../lib/helpers/breakpoints";

export const StyledImage = styled("div")<{
  widthBp: Breakpoints;
  heightBp: Breakpoints;
}>(({ theme, widthBp, heightBp }) => ({
  width: widthBp.default,
  height: heightBp.default,
  overflow: "hidden",
  flexShrink: 0,

  [theme.breakpoints.down("lg")]: {
    width: widthBp.lg,
    height: heightBp.lg,
  },
  [theme.breakpoints.down("md")]: {
    width: widthBp.md,
    height: heightBp.md,
  },
  [theme.breakpoints.down("sm")]: {
    width: widthBp.sm,
    height: heightBp.sm,
  },
  [theme.breakpoints.down("xs")]: {
    width: widthBp.xs,
    height: heightBp.xs,
  },
}));
export const StyledImageImg = styled("img")<{
  fit: "contain" | "cover" | "none";
}>(({ fit }) => ({
  width: "100%",
  height: "100%",
  objectFit: fit,
}));
