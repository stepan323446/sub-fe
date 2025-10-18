import { styled } from "@mui/material/styles";
import { BurgerMenu, Logo } from "@/shared/ui";

export const StyledNavbar = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "100%",
  boxShadow: theme.shadows[2],
  background: theme.palette.background.paper,
  zIndex: 999,
}));
export const StyledLeftContent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
export const StyledRightContent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
export const StyledNavbarInner = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 0",
}));
export const StyledLogo = styled(Logo)(() => ({
  display: "block",
  marginRight: "30px",
}));
export const StyledMobileHidden = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const StyledBurgerMenu = styled(BurgerMenu)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
