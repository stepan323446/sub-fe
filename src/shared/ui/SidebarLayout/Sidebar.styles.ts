import { Panel } from "..";
import { styled } from "@mui/material";

export const StyledContent = styled(Panel)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledMobileButton = styled(Panel)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 15px",
  fontWeight: "600",
  cursor: "pointer",
  userSelect: "none",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
