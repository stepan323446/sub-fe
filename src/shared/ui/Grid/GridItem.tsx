import { StyledGridItem } from "./GridItem.styles";
import type { GridItemProps } from "./types";

const Row = ({ children }: GridItemProps) => {
  return <StyledGridItem>{children}</StyledGridItem>;
};

export default Row;
