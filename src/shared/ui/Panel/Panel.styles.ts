import { styled } from "@mui/material";

export const StyledPanel = styled("div")(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: "15px 25px",
  border: `1px solid ${theme.palette.blockBorder.main}`,
  borderRadius: 8,
}));
