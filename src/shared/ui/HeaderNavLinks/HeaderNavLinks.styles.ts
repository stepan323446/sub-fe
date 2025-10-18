import { styled } from "@mui/material";
import { NavLink } from "react-router";

export const StyledLinkContainer = styled("nav")<{
  isVertical: boolean;
}>(({ isVertical }) => ({
  "& > *": {
    display: isVertical ? "block" : "inline-block",
    marginRight: isVertical ? 0 : 15,
    padding: isVertical ? "5px 10px" : 0,
  },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 16,
  textDecoration: "none",
  "&.active": {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
}));
