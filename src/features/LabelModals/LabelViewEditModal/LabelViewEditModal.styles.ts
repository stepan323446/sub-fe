import { styled } from "@mui/material";

export const StyledColorSquare = styled("div")<{
  color: string;
}>(({ color }) => ({
  display: "inline-block",
  width: 18,
  height: 18,
  borderRadius: 5,
  background: color,
}));
