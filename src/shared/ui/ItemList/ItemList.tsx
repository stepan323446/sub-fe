import { StyledItemList } from "./ItemList.styles";
import type { ReactNode } from "react";
import type { PaginationResponse } from "@/shared/types/defaultApiSerializers";
import ListSkeletonAutofill from "../ListSkeletonAutofill/ListSkeletonAutofill";
import ListSelectItemSkeleton from "../ListSelectItem/ListSelectItemSkeleton";
import Pagination from "../Pagination/Pagination";

interface ItemListProps<T> {
  isLoading: boolean;
  paginator?: PaginationResponse<T>;
  onChangePage?: (page: number) => void;
  children?: ReactNode;
}

const ItemList = <T,>({
  children,
  isLoading,
  paginator,
  onChangePage = () => {},
}: ItemListProps<T>) => {
  if (isLoading)
    return (
      <StyledItemList>
        <ListSkeletonAutofill skeleton={<ListSelectItemSkeleton />} />
      </StyledItemList>
    );

  if (!paginator || !paginator.results) return <div>no content</div>;

  return (
    <>
      <StyledItemList>{children}</StyledItemList>

      {paginator.total_pages > 1 && (
        <Pagination paginator={paginator} onPageChanged={onChangePage} />
      )}
    </>
  );
};

export default ItemList;
