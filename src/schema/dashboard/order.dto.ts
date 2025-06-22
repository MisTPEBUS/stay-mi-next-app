import { z } from "zod";

const StatusEnum = z.enum(["pending", "confirmed", "cancelled"], {
  message: "狀態只能是 pending、confirmed、cancelled",
});

export const orderRoomProductSchema = z.object({
  id: z.string().uuid({ message: "請填正確 id 格式" }),
  user_id: z.string().uuid({ message: "請填正確 id 格式" }),
  hotel_id: z.string().uuid({ message: "請填正確 id 格式" }),
  room_plans_id: z.string().uuid({ message: "請填正確 id 格式" }),
  check_in_date: z.string().optional(),
  check_out_date: z.string().optional(),
  total_price: z.number().optional(),
  status: StatusEnum,
  payment_name: z.string({ message: "請輸入付款人姓名" }).max(50),
  payment_phone: z.string({ message: "請輸入付款人電話" }).max(20),
  payment_email: z.string({ message: "請輸入付款人信箱" }).email().max(320),
  contact_name: z.string({ message: "請輸入聯絡人姓名" }).max(50),
  contact_phone: z.string({ message: "請輸入聯絡人電話" }).max(20),
  contact_email: z.string({ message: "請輸入聯絡人信箱" }).email().max(320),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  product_plans_id: z.string().uuid({ message: "請填正確 id 格式" }).optional(),
});

export const orderDetailSchema = z.object({
  id: z.string().uuid({ message: "請填正確 id 格式" }),
  user_id: z.string().uuid({ message: "請填正確 id 格式" }),
  hotel_id: z.string().uuid({ message: "請填正確 id 格式" }),
  room_plans_id: z.string().uuid({ message: "請填正確 id 格式" }),
  check_in_date: z.string().optional(),
  check_out_date: z.string().optional(),
  total_price: z.number().optional(),
  status: StatusEnum,
  payment_name: z.string({ message: "請輸入付款人姓名" }).max(50),
  payment_phone: z.string({ message: "請輸入付款人電話" }).max(20),
  payment_email: z.string({ message: "請輸入付款人信箱" }).email().max(320),
  contact_name: z.string({ message: "請輸入聯絡人姓名" }).max(50),
  contact_phone: z.string({ message: "請輸入聯絡人電話" }).max(20),
  contact_email: z.string({ message: "請輸入聯絡人信箱" }).email().max(320),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  product_plans_id: z.string().uuid({ message: "請填正確 id 格式" }).optional(),
  hotel_name: z.string(),
  hotel_region: z.string(),
  hotel_address: z.string(),
  hotel_phone: z.string(),
  room_name: z.string(),
  product_name: z.string().nullable(),
  product_price: z.number().nullable(),
  product_quantity: z.number().nullable(),
});

export const orderRoomProductCreateSchema = orderRoomProductSchema
  .omit({
    id: true,
    status: true,
    created_at: true,
    updated_at: true,
  })
  .extend({
    product_plans_id: z.string().uuid({ message: "請填正確 id 格式" }).optional(),
    quantity: z.number().int().min(1, { message: "數量必須大於 0" }).optional(),
  });
export type OrderRoomProductType = z.infer<typeof orderRoomProductSchema>;
export type OrderDetailType = z.infer<typeof orderDetailSchema>;
export type orderRoomProductCreateType = z.infer<typeof orderRoomProductCreateSchema>;
