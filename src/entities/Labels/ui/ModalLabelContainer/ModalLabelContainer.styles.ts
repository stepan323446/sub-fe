import { styled } from "@mui/material";

export const StyledModalLabelContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 17,
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));
