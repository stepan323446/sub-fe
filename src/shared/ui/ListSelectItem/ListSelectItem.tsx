import type { OnlyChildrenProps } from "@/shared/types/OnlyChildrenProps";
import {
  ListItemIconStyled,
  ListSelectItemStyled,
} from "./ListSelectItem.styles";

type ListSelectItemProps = {
  backgroundIcon?: string;
} & OnlyChildrenProps;

const ListSelectItem = ({
  children,
  className,
  onClick,
  backgroundIcon = "#000000",
}: ListSelectItemProps) => {
  return (
    <ListSelectItemStyled className={className} onClick={onClick}>
      <ListItemIconStyled icon={backgroundIcon} />

      {children}
    </ListSelectItemStyled>
  );
};

export default ListSelectItem;
