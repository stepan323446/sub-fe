import type { OnlyChildrenProps } from "@/shared/types/OnlyChildrenProps";
import { StyledWrapper } from "./Panel.styles";

const PanelWrapper = ({ children }: OnlyChildrenProps) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default PanelWrapper;
