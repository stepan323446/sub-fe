import { styled } from "@mui/material";

export const StyledPanel = styled("div")(({ theme }) => ({
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.blockBorder.main}`,
  borderRadius: 8,
}));

export const StyledWrapper = styled("div")(() => ({
  padding: "15px 25px",
}));
