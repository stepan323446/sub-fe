import { styled } from "@mui/material";
import { NavLink } from "react-router";

export const StyledLinkContainer = styled("nav")(() => ({
  "& > *": {
    marginRight: 15,
  },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 16,
  textDecoration: "none",
  "&.active": {
    color: theme.palette.text.primary,
    fontWeight: 600,
    marginRight: 15,
  },
}));
