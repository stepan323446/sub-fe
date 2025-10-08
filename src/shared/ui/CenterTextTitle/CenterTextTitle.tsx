import type { OnlyChildrenProps } from "@/shared/types/OnlyChildrenProps";
import { StyledCenterText } from "./CenterTextTitle.styles";

const CenterTextTitle = ({ children }: OnlyChildrenProps) => {
  return <StyledCenterText>{children}</StyledCenterText>;
};

export default CenterTextTitle;
