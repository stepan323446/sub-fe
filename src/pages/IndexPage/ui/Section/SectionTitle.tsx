import type { ReactNode } from "react";

import { StyledSectionTitle } from "./SectionTitle.styles";

interface SectionTitleProps {
  children?: ReactNode;
  align?: "center" | "left" | "right";
}

const SectionTitle = ({ children, align = "left" }: SectionTitleProps) => {
  return <StyledSectionTitle align={align}>{children}</StyledSectionTitle>;
};

export default SectionTitle;
