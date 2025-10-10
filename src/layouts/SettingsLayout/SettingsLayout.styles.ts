import { styled } from "@mui/material";
import { NavLink } from "react-router";

export const StyledSettings = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "300px 1fr",
}));
export const StyledNavHeader = styled("div")(() => ({
  fontSize: 20,
  fontWeight: 600,
  marginBottom: 12,
}));
export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  display: "block",
  marginBottom: 12,
  marginLeft: 17,
  color: theme.palette.text.primary,

  "&.active": {
    fontWeight: 600,
  },
}));
export const StyledLogoutAction = styled("div")(({ theme }) => ({
  display: "block",
  marginBottom: 12,
  marginLeft: 17,
  cursor: "pointer",
  color: theme.palette.error.main,
}));
