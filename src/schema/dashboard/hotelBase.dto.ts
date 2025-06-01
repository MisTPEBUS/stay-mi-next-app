import { z } from "zod";

import { paginationSchema } from "../common/pagination";

export const HotelSchema = z.object({
  id: z.string().uuid(),
  brand_id: z.string().uuid(),
  region: z.string().max(50, { message: "地區名稱過長，請勿超過 50 字" }),
  name: z.string({ message: "請輸入店名" }).min(1, { message: "店名不可為空" }).max(50),
  address: z.string({ message: "請輸入地址" }).min(1, { message: "地址不可為空" }).max(100),
  phone: z
    .string({ message: "請輸入電話" })
    .regex(/^[\d\-\+() ]+$/, "電話格式不正確")
    .max(20, { message: "電話長度請勿超過 20 字元" }),
  transportation: z.string().optional(),
  hotel_policies: z.string().max(255, { message: "飯店政策內容過長" }).optional(),

  latitude: z
    .string()
    .regex(/^(-?\d+(\.\d+)?)$/, "經度必須是有效的數字字串")
    .refine((val) => parseFloat(val) >= -90 && parseFloat(val) <= 90, "緯度必須在 -90 到 90 之間"),
  longitude: z
    .string()
    .regex(/^(-?\d+(\.\d+)?)$/, "緯度必須是有效的數字字串")
    .refine((val) => parseFloat(val) >= -180 && parseFloat(val) <= 180, "經度必須在 -180 到 180 之間"),

  hotel_facilities: z.array(z.string().min(1)).max(50, { message: "設施項目不得超過 50 筆" }),
  image_url: z.string(),
  is_active: z.boolean({ required_error: "請確認是否啟用" }),
  created_at: z.string(),
  updated_at: z.string(),
});

export const hotelListSchema = z.object({
  hotels: z.array(HotelSchema),
  pagination: paginationSchema,
});

export type HotelSchemaType = z.infer<typeof HotelSchema>;
export type HotelListSchemaType = z.infer<typeof hotelListSchema>;

export const createHotelSchema = z.object({
  region: z.string().max(50, { message: "地區名稱過長，請勿超過 50 字" }),
  name: z.string({ message: "請輸入店名" }).min(1, { message: "店名不可為空" }).max(50),
  address: z.string({ message: "請輸入地址" }).min(1, { message: "地址不可為空" }).max(100),
  phone: z
    .string({ message: "請輸入電話" })
    .regex(/^[\d\-\+() ]+$/, "電話格式不正確")
    .max(20, { message: "電話長度請勿超過 20 字元" }),

  transportation: z.string().optional(),
  hotel_policies: z.string().optional(),

  latitude: z
    .string()
    .regex(/^(-?\d+(\.\d+)?)$/, "經度必須是有效的數字字串")
    .refine((val) => parseFloat(val) >= -90 && parseFloat(val) <= 90, "緯度必須在 -90 到 90 之間"),
  longitude: z
    .string()
    .regex(/^(-?\d+(\.\d+)?)$/, "緯度必須是有效的數字字串")
    .refine((val) => parseFloat(val) >= -180 && parseFloat(val) <= 180, "經度必須在 -180 到 180 之間"),

  hotel_facilities: z.array(z.string().min(1)).max(50, { message: "設施項目不得超過 50 筆" }),
  image_url: z.string(),
  is_active: z.boolean({ required_error: "請確認是否啟用" }),
});

export const CreateHotelFormSchema = createHotelSchema.omit({
  latitude: true,
  longitude: true,
  is_active: true,
});
export type CreateHotelFormSchemaType = z.infer<typeof CreateHotelFormSchema>;

export type CreateHotelSchemaType = z.infer<typeof createHotelSchema>;

/* export type hotelType = z.infer<typeof hotelSchema>;
export type hotelListToDtoType = z.infer<typeof hotelListToDto>;
export type hotelCreateType = z.infer<typeof hotelCreateSchema>;
export type hotelUpdateType = z.infer<typeof hotelUpdateSchema>;

export type LoginRequestSchemaType = z.infer<typeof LoginRequestSchema>;
export type RegisterUserReqSchemaType = z.infer<typeof RegisterUserReqSchema>;

export const StoreLoginRequestSchema = UserResponseSchema.pick({ email: true, password: true });

export type StoreLoginRequestSchemaType = z.infer<typeof StoreLoginRequestSchema>;
export type RegisterStoreReqSchemaType = z.infer<typeof RegisterStoreReqSchema>; */

/* 
{
  "region": "台中",
  "name": "測試測試飯店",
  "address": "台中市中區自由路一段 123 號",
  "phone": "0912123123",
  "transportation": "近台中火車站",
  "hotel_policies": "禁止吸菸",
  "latitude": "24.147736",
  "longitude": "120.673648",
  "hotel_facilities": [
    "WiFi",
    "電視"
  ],
  "is_active": true
} */

/* export const hotelListToDto = z
  .object({
    hotels: z.array(hotelSchema),
    pagination: paginationSchema,
  })
  .transform((data) => ({
    hotels: data.hotels.map((hotel) => ({
      ...hotel,
      created_at: formatDisplayDate(hotel.created_at, "YYYY-MM-DD HH:mm:ss"),
      updated_at: formatDisplayDate(hotel.updated_at, "YYYY-MM-DD HH:mm:ss"),
    })),
    pagination: data.pagination,
  }));

export const hotelToDto = z
  .object({
    hotel: hotelSchema,
  })
  .transform((data) => ({
    hotel: {
      ...data.hotel,
      created_at: formatDisplayDate(data.hotel.created_at, "YYYY-MM-DD HH:mm:ss"),
      updated_at: formatDisplayDate(data.hotel.updated_at, "YYYY-MM-DD HH:mm:ss"),
    },
  }));

export const hotelCreateSchema = hotelSchema.omit({
  created_at: true,
  updated_at: true,
});

export const hotelUpdateSchema = hotelCreateSchema
  .extend({
    updated_at: zDateOrDefault(),
  })
  .extend({
    id: z.string().uuid(),
  }); */
