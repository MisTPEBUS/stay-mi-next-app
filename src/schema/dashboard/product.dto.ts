import { z } from "zod";

export const productsSchema = z.object({
  id: z.string().uuid(),
  hotel_id: z.string().uuid(),
  name: z.string().min(1, "請輸入伴手禮名稱").max(50),
  features: z.string({ message: "請輸入伴手禮特色" }).max(255),
  description: z.string({ message: "請輸入伴手禮描述" }).max(255),
  price: z
    .number({ invalid_type_error: "請輸入數字", required_error: "請輸入伴手禮價格" })
    .min(0, { message: "價格必須大於等於 0" })
    .max(99999999, { message: "價格必須小於等於 99999999" }),
  imageUrl: z.string({ message: "請選擇伴手禮圖片" }),
  created_at: z.string(),
  updated_at: z.string(),
});

export const productsCreateSchema = productsSchema.omit({
  id: true,
  hotel_id: true,
  created_at: true,
  updated_at: true,
});
export const productsUpdateSchema = productsSchema.omit({
  id: true,
  hotel_id: true,
  created_at: true,
  updated_at: true,
});

export type ProductsType = z.infer<typeof productsSchema>;
export type ProductsCreateType = z.infer<typeof productsCreateSchema>;
export type ProductsUpdateType = z.infer<typeof productsUpdateSchema>;
