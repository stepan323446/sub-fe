import type { OnlyChildrenProps } from "@shared";
import { StyledWhiteBackground } from "./WhiteBackground.styles";

const WhiteBackground = ({ children }: OnlyChildrenProps) => {
  return <StyledWhiteBackground>{children}</StyledWhiteBackground>;
};

export default WhiteBackground;
