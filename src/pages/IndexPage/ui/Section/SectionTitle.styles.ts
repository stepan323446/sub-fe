import { styled } from "@mui/material";

export const StyledSectionTitle = styled("h2")<{
  align: "center" | "left" | "right";
}>(({ theme, align }) => ({
  color: theme.palette.primary.main,
  fontSize: 48,
  fontFamily: theme.typography.fontFamilies.header,
  marginBottom: 35,
  textAlign: align,
}));
