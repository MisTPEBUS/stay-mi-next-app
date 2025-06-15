import { z } from "zod";

//原始欄位
const hotelRoomSchema = z.object({
  id: z.string().uuid().optional(),
  hotel_id: z.string({ message: "請填寫飯店 id" }).uuid({ message: "請填正確 id 格式" }),
  room_type_id: z.string({ message: "請填寫房型 id" }).uuid({ message: "請填正確 id 格式" }),
  basePrice: z.number({ message: "請填寫原始金額" }).min(1, "金額不得小於 1"),
  description: z.string({ message: "請填寫房間敘述" }),
  images: z.array(z.string()).optional(),
  is_active: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  room_type_name: z.string().optional(),
});

export const hotelRoomCreateSchema = hotelRoomSchema.omit({
  id: true,
  hotel_id: true,
  created_at: true,
  updated_at: true,
});

export const hotelRoomUpdateSchema = hotelRoomSchema
  .pick({
    room_type_id: true,
    basePrice: true,
    description: true,
    images: true,
    is_active: true,
  })
  .partial();

export type HotelRoomType = z.infer<typeof hotelRoomSchema>;
export type HotelRoomTypeCreateType = z.infer<typeof hotelRoomCreateSchema>;
export type HotelRoomTypeUpdateType = z.infer<typeof hotelRoomCreateSchema>;

export const roomPlanProductSchema = z.object({
  hotel_id: z.string(),
  hotel_name: z.string(),
  hotel_region: z.string(),
  hotel_address: z.string(),
  hotel_phone: z.string(),
  hotel_facilities: z.array(z.string()),
  hotel_policies: z.string(),
  hotel_cover_image: z.string().url(),
  transportation: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  room_plan_id: z.string(),
  subscription_price: z.number(),
  price: z.number(),
  start_time: z.string(),
  end_time: z.string(),
  plan_images: z.array(z.any()),
  hotel_room_id: z.string(),
  hotel_room_description: z.string(),
  hotel_room_images: z.array(z.any()),
  base_price: z.number(),
  room_type_id: z.string(),
  room_type_name: z.string(),
  room_type_description: z.string(),
  room_services: z.array(z.string()),
});

export type RoomPlanProductType = z.infer<typeof roomPlanProductSchema>;
