import { z } from "zod";

//UserResponse
const UserResponseSchema = z.object({
  id: z.string(),
  name: z.string({ message: "請輸入名字" }).max(50, { message: "名字最多50個字" }),
  email: z.string({ message: "請輸入信箱" }).email({ message: "信箱格式錯誤" }),
  password: z.string({ message: "請輸入密碼" }).min(8, { message: "密碼至少8個字" }),
  role: z.string({ message: "請選擇角色" }).max(20, { message: "角色最多20個字" }),
  created_at: z.preprocess((val) => String(val), z.string()),
  updated_at: z.preprocess((val) => String(val), z.string()),
});

export const LoginRequestSchema = UserResponseSchema.pick({ email: true, password: true }).extend({
  rememberMe: z.boolean().optional(),
});
export const RegisterUserReqSchema = z.object({
  name: z.string({ message: "請輸入名字" }).max(50, { message: "名字最多50個字" }),
  email: z.string({ message: "請輸入信箱" }).email({ message: "信箱格式錯誤" }),
  password: z.string({ message: "請輸入密碼" }).min(8, { message: "密碼至少8個字" }),

  provider: z.string().optional(),
  provider_id: z.string().optional(),
  phone: z.string({ required_error: "請輸入電話" }).regex(/^\d+$/, { message: "電話格式錯誤，僅限數字" }),
  birthday: z.string({ required_error: "請輸入生日" }).refine(
    (dateStr) => {
      return !isNaN(Date.parse(dateStr));
    },
    { message: "請輸入有效的日期格式" }
  ),
  gender: z.enum(["f", "m"], { required_error: "請選擇性別" }),
  avatar: z.string().optional(),
});

export type LoginRequestSchemaType = z.infer<typeof LoginRequestSchema>;
export type RegisterUserReqSchemaType = z.infer<typeof RegisterUserReqSchema>;
