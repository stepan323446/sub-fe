import { styled } from "@mui/material";
import { Link } from "react-router";

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
