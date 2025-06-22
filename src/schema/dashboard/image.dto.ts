import { z } from "zod";

export const ImageSchema = z.object({
  id: z.string(),
  hotel_id: z.string(),
  image_url: z.string({ message: "請上傳圖片" }),
  is_cover: z.boolean().default(false),
  position: z.number({ message: "請輸入整數" }).default(0),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

export const ImageCreateSchema = ImageSchema.omit({
  id: true,
  hotel_id: true,
  created_at: true,
  updated_at: true,
});

export const ImageUpdateSchema = ImageSchema.omit({
  id: true,
  hotel_id: true,
  created_at: true,
});
export const ImageDeleteSchema = ImageSchema.pick({
  id: true,
  hotel_id: true,
});

export const getImagesSchema = ImageSchema.omit({
  hotel_id: true,
  created_at: true,
  updated_at: true,
});

export type ImageType = z.infer<typeof ImageSchema>;
export type ImageCreateType = z.infer<typeof ImageCreateSchema>;
export type ImageUpdateType = z.infer<typeof ImageUpdateSchema>;
export type ImageDeleteType = z.infer<typeof ImageDeleteSchema>;
export type ImageListType = z.infer<typeof getImagesSchema>;
