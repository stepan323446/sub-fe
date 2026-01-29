import type { ReactNode } from "react";
import { StyledLabel, StyledValue } from "./ModalItemLabel.styles";
import { Skeleton } from "@mui/material";

interface ModalItemLabelProps {
  label: string;
  children?: ReactNode;
  isLoading?: boolean;
}

const ModalItemLabel = ({
  label,
  children,
  isLoading = false,
}: ModalItemLabelProps) => {
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      {!isLoading && <StyledValue>{children}</StyledValue>}
      {isLoading && <Skeleton sx={{ maxWidth: 120, height: 24 }} />}
    </div>
  );
};

export default ModalItemLabel;
