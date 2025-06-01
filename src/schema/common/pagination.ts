import { z } from "zod";

export const paginationSchema = z.object({
  currentPage: z.number(),
  perPage: z.number(),
  totalPages: z.number(),
  totalItems: z.number(),
});

export type PaginationType = z.infer<typeof paginationSchema>;

export type PaginationResult<T> = {
  data: T[];
  pagination: PaginationType;
};

export const QuerySchema = z.object({
  currentPage: z.coerce.number().min(1).default(1),
  perPage: z.coerce.number().min(1).default(10),
});
