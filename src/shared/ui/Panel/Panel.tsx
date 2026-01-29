import type { OnlyChildrenProps } from "@/shared/types/OnlyChildrenProps";
import { StyledPanel } from "./Panel.styles";

const Panel = ({ children, className, onClick }: OnlyChildrenProps) => {
  return (
    <StyledPanel className={className} onClick={onClick}>
      {children}
    </StyledPanel>
  );
};

export default Panel;
