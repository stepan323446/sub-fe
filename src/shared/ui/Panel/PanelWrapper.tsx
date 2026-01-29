import type { OnlyChildrenProps } from "@/shared/types/OnlyChildrenProps";
import { StyledWrapper } from "./Panel.styles";

const PanelWrapper = ({ children, className }: OnlyChildrenProps) => {
  return <StyledWrapper className={className}>{children}</StyledWrapper>;
};

export default PanelWrapper;
