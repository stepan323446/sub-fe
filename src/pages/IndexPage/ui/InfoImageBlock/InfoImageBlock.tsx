import { Content, Image } from "@/shared/ui";
import { StyledContent, StyledInfoImageBlock } from "./InfoImageBlock.styles";

interface InfoImageBlockProps {
  image: string;
  content: string;
}

const InfoImageBlock = ({ image, content }: InfoImageBlockProps) => {
  return (
    <StyledInfoImageBlock>
      <StyledContent>
        <Content content={content} />
      </StyledContent>
      <Image
        width={{ default: "390px", sm: "100%" }}
        height={"100%"}
        src={image}
      />
    </StyledInfoImageBlock>
  );
};

export default InfoImageBlock;
