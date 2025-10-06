import { styled } from "@mui/material";

export const StyledInfoImageBlock = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 580,
  fontSize: 24,
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    marginBottom: 30,
  },
}));
