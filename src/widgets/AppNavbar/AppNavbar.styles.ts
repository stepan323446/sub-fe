import { styled } from "@mui/material/styles";
import { Logo } from "@/shared/ui";
import { Link } from "react-router";

export const StyledNavbar = styled("div")(({ theme }) => ({
  position: "fixed",
  width: "100%",
  boxShadow: theme.shadows[2],
  background: theme.palette.background.paper,
  zIndex: 9999,
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
export const StyledProfile = styled(Link)(({ theme }) => ({
  display: "flex",
  color: theme.palette.text.primary,
}));
export const StyledProfileInfo = styled("div")(() => ({
  marginLeft: "10px",
}));
export const StyledNickname = styled("div")(() => ({
  fontSize: 16,
  fontWeight: 600,
}));
export const StyledLimit = styled("div")(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.text.disabled,
}));
