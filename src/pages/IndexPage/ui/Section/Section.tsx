import type { OnlyChildrenProps } from "@/shared/index";
import { StyledSection } from "./Section.styles";
import { Container } from "@/shared/ui";

const Section = ({ children }: OnlyChildrenProps) => {
  return (
    <Container>
      <StyledSection>{children}</StyledSection>
    </Container>
  );
};

export default Section;
