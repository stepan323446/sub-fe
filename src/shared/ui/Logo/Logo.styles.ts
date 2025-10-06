import { styled } from "@mui/material/styles";

export const StyledLogo = styled("div")(({ theme }) => ({
  fontFamily: theme.typography.fontFamilies.header,
  fontSize: 28,
  textDecoration: "none",
  color: "#000",
}));
