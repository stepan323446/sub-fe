import { styled } from "@mui/material";

export const StyledAnswerBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledIcon = styled("div")<{
  background: string;
}>(({ background }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 48,
  width: 92,
  height: 92,
  marginBottom: 32,
  borderRadius: 10,
  background: background,
}));

export const StyledTitle = styled("div")(() => ({
  fontSize: 32,
  fontWeight: "bold",
  marginBottom: 25,
}));

export const StyledDescription = styled("div")(() => ({
  fontSize: 24,
}));
