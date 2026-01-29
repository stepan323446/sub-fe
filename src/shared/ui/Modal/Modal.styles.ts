import { Modal, styled } from "@mui/material";

export const StyledModal = styled(Modal)(() => ({}));
export const StyledWrapperBox = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  padding: "5px",
  pointerEvents: "none",
}));

export const StyledModalBox = styled("div")<{
  maxWidth: number;
}>(({ theme, maxWidth }) => ({
  background: theme.palette.background.paper,
  maxWidth: maxWidth,
  boxShadow: theme.shadows[3],
  width: "100%",
  borderRadius: 8,
  padding: "20px 25px",
  pointerEvents: "auto",
}));
