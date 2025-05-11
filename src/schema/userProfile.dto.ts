import { z } from "zod";

const user_profileBaseSchema = z.object({
  id: z.string().uuid(),
  user_id: z.string().uuid(),
  name: z.string({ message: "請輸入名字" }).min(2, { message: "名字至少2個字" }).max(50, { message: "名字最多50個字" }),
  phone: z.string({ message: "請輸入電話號碼" }),
});
export const UpdatePasswordSchema = z
  .object({
    oldPassword: z.string({ message: "請輸入舊密碼" }).min(8, { message: "舊密碼至少8個字" }),
    newPassword: z.string({ message: "請輸入新密碼" }).min(8, { message: "新密碼至少8個字" }),
    confirmPassword: z.string({ message: "請再次輸入新密碼" }).min(8, { message: "新密碼至少8個字" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "兩次輸入的新密碼不一致",
  });

export type UpdatePasswordSchemaType = z.infer<typeof UpdatePasswordSchema>;

export const UserProfileResponseSchema = user_profileBaseSchema.extend({
  email: z.string({ message: "請輸入信箱" }).email({ message: "信箱格式錯誤" }),
  birthday: z.string(),
  gender: z.enum(["f", "m"], { errorMap: () => ({ message: "性別格式錯誤" }) }),
});
export const UserProfileRequestSchema = user_profileBaseSchema.extend({
  email: z.string({ message: "請輸入信箱" }).email({ message: "信箱格式錯誤" }),
  birthday: z.string(),
  gender: z.enum(["f", "m"], { errorMap: () => ({ message: "性別格式錯誤" }) }),
});

export type UserProfileResponseSchemaType = z.infer<typeof UserProfileResponseSchema>;
export type UserProfileRequestSchemaType = z.infer<typeof UserProfileRequestSchema>;
/*
export const user_profileUpdateAvatarSchema = z.object({
  id: z.string().uuid(),
  avatar: z.string({ message: "請上傳圖片" }),
  updated_at: z.string(),
});


export type user_profileType = z.infer<typeof user_profileSchema>;
export type user_profileUpdateType = z.infer<typeof user_profileUpdateSchema>;
export type user_profileUpdateAvatarType = z.infer<typeof user_profileUpdateAvatarSchema>;
 */
