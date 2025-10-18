import { styled } from "@mui/material";

export const StyledLayoutWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "calc(100vh - 64px)",

  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const StyledImageWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  background: `linear-gradient(314deg, ${theme.palette.gradientStart.main} 0%, ${theme.palette.gradientEnd.main} 100%)`,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledImageOpacity = styled("div")(() => ({
  opacity: 0.15,
  width: "100%",
  height: "100%",
}));

export const StyledAuthContentContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));
export const StyledAuthContentWrapper = styled("div")(() => ({
  width: "100%",
  maxWidth: 390,
}));
