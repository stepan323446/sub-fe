import { LabelListItem, useLabels, type Label } from "@/entities/Labels";
import { ItemList } from "@/shared/ui";
import { useState } from "react";

interface LabelListProps {
  onClickLabel?: (label: Label) => void;
}

const LabelList = ({ onClickLabel }: LabelListProps) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useLabels({ page: page });

  const handleChangePage = (page: number) => {
    setPage(page);
  };
  const handleClickLabel = (label: Label) => {
    if (onClickLabel) onClickLabel(label);
  };

  return (
    <>
      <ItemList
        paginator={data}
        isLoading={isLoading}
        onChangePage={handleChangePage}
      >
        {data?.results.map((label) => (
          <LabelListItem
            key={label.id}
            label={label}
            onClickLabel={handleClickLabel}
          />
        ))}
      </ItemList>
    </>
  );
};

export default LabelList;
