import type { OnlyChildrenProps } from "@/shared/types/OnlyChildrenProps";
import { ModalHeaderTitle } from "./ModalHeader.styles";

const ModalHeader = ({ children }: OnlyChildrenProps) => {
  return <ModalHeaderTitle>{children}</ModalHeaderTitle>;
};

export default ModalHeader;
