export interface PaginationResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  page_size: number;
  total_pages: number;
  results: T[];
}

export interface DetailResponseDto {
  detail: string;
}
