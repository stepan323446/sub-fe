import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  StyledAnswerBlock,
  StyledDescription,
  StyledIcon,
  StyledTitle,
} from "./AnswerBlock.styles";

export interface AnswerInfo {
  icon: IconDefinition;
  background: string;
  title: string;
  content: string;
}
interface AnswerProps {
  answer: AnswerInfo;
}

const AnswerBlock = ({ answer }: AnswerProps) => {
  return (
    <StyledAnswerBlock>
      <StyledIcon background={answer.background}>
        <FontAwesomeIcon icon={answer.icon} />
      </StyledIcon>
      <StyledTitle>{answer.title}</StyledTitle>
      <StyledDescription>{answer.content}</StyledDescription>
    </StyledAnswerBlock>
  );
};

export default AnswerBlock;
