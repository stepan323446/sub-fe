import { ListSelectItem } from "@/shared/ui";
import type { Label } from "../../model/types";

interface LabelListItemProps {
  label: Label;
  onClickLabel?: (label: Label) => void;
}

const LabelListItem = ({
  label,
  onClickLabel = () => {},
}: LabelListItemProps) => {
  return (
    <ListSelectItem
      backgroundIcon={label.colorHex}
      onClick={() => onClickLabel(label)}
    >
      {label.name}
    </ListSelectItem>
  );
};

export default LabelListItem;
