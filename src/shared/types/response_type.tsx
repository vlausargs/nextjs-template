export type ResponseType<T> = {
  items: T[];
  pagination: PaginationType;
};
export type PaginationType = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
};
