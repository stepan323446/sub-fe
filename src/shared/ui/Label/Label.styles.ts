import { styled } from "@mui/material";

export const StyledLabelFormContainer = styled("div")(() => ({}));

export const StyledLabelFormText = styled("label")(({ theme }) => ({
  display: "block",
  fontSize: 18,
  marginBottom: 10,

  "& > span": {
    color: theme.palette.error.main,
  },
}));
