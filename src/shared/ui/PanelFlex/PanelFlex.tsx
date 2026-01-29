import type { ComponentProps } from "react";
import Panel from "../Panel/Panel";
import { StyledPanelFlex, StyledPanelWrapper } from "./PanelFlex.styles";

type PanelFlexProps = ComponentProps<typeof Panel>;

const PanelFlex = (props: PanelFlexProps) => {
  return (
    <StyledPanelFlex className={props.className}>
      <StyledPanelWrapper>{props.children}</StyledPanelWrapper>
    </StyledPanelFlex>
  );
};

export default PanelFlex;
