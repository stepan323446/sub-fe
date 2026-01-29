import { Modal as MuiModal } from "@mui/material";
import type { ComponentProps } from "react";
import { StyledModal, StyledModalBox, StyledWrapperBox } from "./Modal.styles";

type ModalProps = {
  maxWidth?: number;
} & ComponentProps<typeof MuiModal>;

const Modal = ({ open, onClose, children, maxWidth = 300 }: ModalProps) => {
  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledWrapperBox>
        <StyledModalBox maxWidth={maxWidth}>{children}</StyledModalBox>
      </StyledWrapperBox>
    </StyledModal>
  );
};

export default Modal;
