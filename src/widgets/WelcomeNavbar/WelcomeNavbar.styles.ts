import { styled } from "@mui/material/styles";

export const StyledNavbar = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "100%",
  boxShadow: theme.shadows[2],
  background: theme.palette.background.paper,
  zIndex: 9999,
}));
export const StyledNavbarInner = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 0",
}));

export const StyledSpecialText = styled("div")(({ theme }) => ({
  fontSize: 16,

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
