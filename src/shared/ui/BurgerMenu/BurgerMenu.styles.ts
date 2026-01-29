import { styled } from "@mui/material";

export const StyledBurgerMenu = styled("button")<{
  isActive: boolean;
}>(({ theme, isActive }) => ({
  position: "relative",
  width: 26,
  height: 26,
  border: 0,
  display: "block",
  background: "transparent",
  cursor: "pointer",

  "&::before, &::after, span": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: 2,
    background: theme.palette.text.primary,
    left: 0,
    transition: "0.15s ease",
  },
  "&::after": {
    top: 5,
    transform: isActive
      ? "rotate(45deg) translate(4px, 4px)"
      : "rotate(0deg) translate(0, 0);",
  },
  "&::before": {
    bottom: 5,
    transform: isActive
      ? "rotate(-45deg) translate(5px, -5px)"
      : "rotate(0deg) translate(0, 0);",
  },
  "& span": {
    opacity: isActive ? 0 : 1,
    top: "50%",
    transform: "translateY(-50%)",
  },
}));
