import { styled } from "@mui/material";
import PanelWrapper from "../Panel/PanelWrapper";
import Panel from "../Panel/Panel";

export const StyledPanelFlex = styled(Panel)(() => ({
  marginBottom: 15,
}));

export const StyledPanelWrapper = styled(PanelWrapper)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
