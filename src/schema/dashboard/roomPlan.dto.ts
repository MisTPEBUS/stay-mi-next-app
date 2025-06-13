import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

//原始欄位
const roomPlanSchema = z.object({
  id: z.string().uuid().optional(),
  hotel_id: z.string({ message: "請填寫飯店 id" }).uuid({ message: "請填正確 id 格式" }),
  hotel_room_id: z.string({ message: "請填寫房間 id" }).uuid({ message: "請填正確 id 格式" }),
  price: z.number({ message: "請填寫售價" }).min(1, "金額不得小於 1"),
  subscription_price: z.number({ message: "請填寫訂閱價優惠價" }).min(1, "金額不得小於 1"),
  images: z.array(z.string()).optional(),
  start_date: z.string({ message: "請填寫計畫開始日期" }).regex(dateRegex, { message: "請使用 YYYY-MM-DD 格式" }),
  end_date: z.string({ message: "請填寫計畫結束日期" }).regex(dateRegex, { message: "請使用 YYYY-MM-DD 格式" }),
  is_active: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  room_type_name: z.string().optional(),
  hotel_room_basePrice: z.string().optional(),
  hotel_room_name: z.string().optional(),
  hotel_room_imageUrl: z.string().optional(),
});

export const roomPlanCreateSchema = roomPlanSchema.omit({
  id: true,
  hotel_id: true,
  created_at: true,
  updated_at: true,
});

export const roomPlanUpdateSchema = roomPlanSchema
  .pick({
    hotel_room_id: true,
    price: true,
    subscription_price: true,
    images: true,
    start_date: true,
    end_date: true,
    is_active: true,
  })
  .partial();

export type RoomPlanType = z.infer<typeof roomPlanSchema>;
export type RoomPlanCreateType = z.infer<typeof roomPlanCreateSchema>;
export type RoomPlanUpdateType = z.infer<typeof roomPlanUpdateSchema>;
