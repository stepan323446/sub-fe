import { styled } from "@mui/material";

export const StyledCenterText = styled("div")(({ theme }) => ({
  fontSize: 48,
  marginBottom: 15,
  fontFamily: theme.typography.fontFamilies.header,
  textAlign: "center",
}));
