import type { ReactNode } from "react";
import { StyledLabelFormContainer, StyledLabelFormText } from "./Label.styles";

interface LabelFormProps {
  required?: boolean;
  htmlFor?: string;
  label: string;
  children?: ReactNode;
}

const Label = ({
  label,
  htmlFor,
  children,
  required = false,
}: LabelFormProps) => {
  return (
    <StyledLabelFormContainer>
      <StyledLabelFormText htmlFor={htmlFor}>
        {required && <span>*</span>} {label}
      </StyledLabelFormText>
      {children}
    </StyledLabelFormContainer>
  );
};

export default Label;
