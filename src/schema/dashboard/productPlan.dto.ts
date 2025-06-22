import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

//原始欄位
const productPlanSchema = z.object({
  id: z.string().uuid().optional(),
  hotel_id: z.string({ message: "請填寫飯店 id" }).uuid({ message: "請填正確 id 格式" }),
  product_id: z.string({ message: "請填寫伴手禮 id" }).uuid({ message: "請填正確 id 格式" }),
  product_name: z.string().optional(),
  product_imageUrl: z.string().optional(),
  price: z.number({ message: "請填寫售價" }).min(1, "金額不得小於 1"),
  start_date: z.string({ message: "請填寫計畫開始日期" }).regex(dateRegex, { message: "請使用 YYYY-MM-DD 格式" }),
  end_date: z.string({ message: "請填寫計畫結束日期" }).regex(dateRegex, { message: "請使用 YYYY-MM-DD 格式" }),
  is_active: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const productPlanCreateSchema = productPlanSchema.omit({
  id: true,
  hotel_id: true,
  created_at: true,
  updated_at: true,
  product_name: true,
});

export const productPlanUpdateSchema = productPlanSchema
  .pick({
    product_id: true,
    price: true,
    start_date: true,
    end_date: true,
    is_active: true,
  })
  .partial();

export const productPlanPublicSchema = z.object({
  id: z.string().uuid(),
  price: z.number(),
  start_time: z.string(),
  end_time: z.string(),
  product_id: z.string().uuid(),
  product_name: z.string(),
  product_features: z.string(),
  product_description: z.string(),
  product_imageUrl: z.string(),
  product_price: z.number(),
});
export type ProductPlanPublicType = z.infer<typeof productPlanPublicSchema>;
export type ProductPlanType = z.infer<typeof productPlanSchema>;
export type ProductPlanCreateType = z.infer<typeof productPlanCreateSchema>;
export type ProductPlanUpdateType = z.infer<typeof productPlanUpdateSchema>;
