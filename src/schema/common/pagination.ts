import { z } from "zod";

export const paginationSchema = z.object({
  currentPage: z.number(),
  perPage: z.number(),
  totalPages: z.number(),
  totalItems: z.number(),
});

export type PaginationType = z.infer<typeof paginationSchema>;

export type PaginationResult<T, K extends string = "data"> = {
  [key in K]: T[];
} & {
  pagination: PaginationType;
};

export type NamedArrayWrapper<T, K extends string = "data"> = {
  [key in K]: T[];
};

export const QuerySchema = z.object({
  currentPage: z.coerce.number().min(1).default(1),
  perPage: z.coerce.number().min(1).default(10),
});

export type QuerySchemaType = z.infer<typeof QuerySchema>;
