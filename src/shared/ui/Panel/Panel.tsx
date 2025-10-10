import type { OnlyChildrenProps } from "@/shared/types/OnlyChildrenProps";
import { StyledPanel } from "./Panel.styles";

const Panel = ({ children }: OnlyChildrenProps) => {
  return <StyledPanel>{children}</StyledPanel>;
};

export default Panel;
