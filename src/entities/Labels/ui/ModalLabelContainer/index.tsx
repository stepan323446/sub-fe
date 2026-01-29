import type { OnlyChildrenProps } from "@/shared";
import { StyledModalLabelContainer } from "./ModalLabelContainer.styles";

const ModalLabelContainer = ({ children }: OnlyChildrenProps) => {
  return <StyledModalLabelContainer>{children}</StyledModalLabelContainer>;
};

export default ModalLabelContainer;
