export interface PaginationResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface Filters {
  page: number;
  perPage: number;
  search: string;
  sort: Sort;
}

export type Sort = 'asc' | 'desc';
