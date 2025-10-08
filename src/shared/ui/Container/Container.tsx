import type { OnlyChildrenProps } from "@/shared";
import { StyledContainer } from "./Container.styles";

const Container = ({ children }: OnlyChildrenProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
