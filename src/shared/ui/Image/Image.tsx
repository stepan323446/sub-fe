import {
  getBreakpointsByProps,
  type BreakpointProp,
} from "../lib/helpers/breakpoints";
import { StyledImage, StyledImageImg } from "./Image.styles";

interface ImageProps {
  width: BreakpointProp;
  height: BreakpointProp;
  src: string;
  alt?: string;
  fit?: "contain" | "cover" | "none";
}

const Image = ({
  src,
  width,
  height,
  alt = "",
  fit = "contain",
}: ImageProps) => {
  const widthBreakpoints = getBreakpointsByProps(width);
  const heightBreakpoints = getBreakpointsByProps(height);

  return (
    <StyledImage widthBp={widthBreakpoints} heightBp={heightBreakpoints}>
      <StyledImageImg src={src} alt={alt} fit={fit} />
    </StyledImage>
  );
};

export default Image;
