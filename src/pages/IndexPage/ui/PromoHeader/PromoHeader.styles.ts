import { styled } from "@mui/material";
import { WideButton } from "@/shared/ui";

const headerTextShadow = "1px 2px 7px rgba(0,0,0,0.67)";

export const StyledPromoHeader = styled("div")(({ theme }) => ({
  color: "#fff",
  position: "relative",
  background: `linear-gradient(270deg, ${theme.palette.gradientStart.main} 0%, ${theme.palette.gradientEnd.main} 100%)`,
  minHeight: "100vh",
}));

export const StyledPromoHeaderInner = styled("div")(() => ({
  paddingTop: 150,
  maxWidth: 410,
}));

export const StyledHeaderTitle = styled("h1")(({ theme }) => ({
  fontFamily: theme.typography.fontFamilies.header,
  fontSize: 48,
  lineHeight: 1.3,
  textShadow: headerTextShadow,
  letterSpacing: 2,
  marginBottom: 30,
}));

export const StyledPromoText = styled("p")(() => ({
  fontSize: 24,
  textShadow: headerTextShadow,
  marginBottom: 26,
}));

export const PromoButton = styled(WideButton)(({ theme }) => ({
  color: "#000",
  background: "#fff",
  boxShadow: theme.shadows[4],

  "&:hover": {
    background: "#dedede",
  },
}));
