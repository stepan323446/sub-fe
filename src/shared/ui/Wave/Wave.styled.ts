import { styled } from "@mui/material";

export const StyledWave = styled("img")<{
  vertical: "top" | "bottom";
  horizontal: "left" | "right";
  isHorizontalWave: boolean;
}>(({ vertical = "bottom", horizontal = "left", isHorizontalWave = true }) => ({
  position: "absolute",
  width: isHorizontalWave ? "100%" : "auto",
  height: !isHorizontalWave ? "100%" : "auto",

  left: horizontal == "left" ? 0 : "auto",
  right: horizontal == "right" ? 0 : "auto",
  top: vertical == "top" ? 0 : "auto",
  bottom: vertical == "bottom" ? 0 : "auto",
}));
