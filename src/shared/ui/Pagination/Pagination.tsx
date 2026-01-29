import { Pagination as MuiPagination } from "@mui/material";
import type { PaginationResponse } from "@/shared/types/defaultApiSerializers";

// type PaginationProps = ComponentProps<typeof MuiPagination>;
interface PaginationProps<T> {
  paginator: PaginationResponse<T>;
  onPageChanged?: (page: number) => void;
}

const Pagination = <T,>({
  paginator,
  onPageChanged = () => {},
}: PaginationProps<T>) => {
  return (
    <MuiPagination
      count={paginator.total_pages}
      variant="outlined"
      shape="rounded"
      onChange={(_, page) => onPageChanged(page)}
    />
  );
};

export default Pagination;
