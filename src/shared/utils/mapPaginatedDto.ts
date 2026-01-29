import type { PaginationResponse } from "@/shared";

const mapPaginatedDto = <T, R>(
  pagination: PaginationResponse<T>,
  mapFn: (item: T) => R,
): PaginationResponse<R> => ({
  ...pagination,
  results: pagination.results.map(mapFn),
});

export default mapPaginatedDto;
