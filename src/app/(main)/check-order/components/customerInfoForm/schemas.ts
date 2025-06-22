import { z } from "zod";

export const OrderContactSchema = z.object({
  // 訂購人
  customerLastName: z.string().min(1, "姓氏為必填"),
  customerFirstName: z.string().min(1, "名字為必填"),
  customerEmail: z.string().min(1, "電子郵件為必填").email("電子郵件格式不正確"),
  customerPhone: z.string().optional(),

  // 聯絡人
  contactLastName: z.string().min(1, "姓氏為必填"),
  contactFirstName: z.string().min(1, "名字為必填"),
  contactEmail: z.string().min(1, "電子郵件為必填").email("電子郵件格式不正確"),
  contactPhone: z.string().optional(),
  notes: z.string().optional(),
});

export type OrderContactSchemaType = z.infer<typeof OrderContactSchema>;
