import { Panel } from "@/shared/ui";
import { alpha, Skeleton, styled } from "@mui/material";

export const ListSelectItemStyled = styled(Panel)(({ theme }) => ({
  display: "flex",
  height: "fit-content",
  padding: "16px 24px",
  transition: "0.15s ease",

  ":hover": {
    cursor: "pointer",
    userSelect: "none",
    borderColor: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
}));

export const ListItemIconStyled = styled("div")<{
  icon: string;
}>(({ icon }) => ({
  background: icon,
  width: 30,
  height: 30,
  borderRadius: 5,
  marginRight: 30,
}));

export const ListItemSkeletonStyled = styled(Skeleton)(() => ({
  height: 63.6,
  borderRadius: 8,
}));
