import { z } from "zod";

export const tripQueryParamsSchema = z.object({
  start_date: z.string().min(1, "start_date is required"),
  end_date: z.string().min(1, "end_date is required"),
  location: z.string().min(1, "location is required"),
  travel_theme: z.string().optional(),
  budget_range: z
    .object({
      min: z.number(),
      max: z.number(),
    })
    .optional(),
  room_type: z.string().optional(),
  transport_mode: z.enum(["car", "public"]).optional(),
  companions: z.string().optional(),
});

export type TripQueryParams = z.infer<typeof tripQueryParamsSchema>;

export const extractTravelKeywordsTool = {
  name: "plan_trip",
  description: "根據使用者提供的條件規劃旅遊行程",
  parameters: {
    type: "object",
    properties: {
      start_date: {
        type: "string",
        description: "旅遊開始日期（例如 2025-07-12、07/21、07-21）",
      },
      end_date: {
        type: "string",
        description: "旅遊結束日期（例如 2025-07-12、07/21、07-21）",
      },
      location: {
        type: "string",
        description: "旅遊地點，例如『台北市』",
      },
      travel_theme: {
        type: "string",
        description: "旅遊主題，例如『自然』、『美食』、『親子』",
      },
      budget_range: {
        type: "object",
        properties: {
          min: { type: "number", description: "預算下限（例如 1000）" },
          max: { type: "number", description: "預算上限（例如 5000）" },
        },
        required: ["min", "max"],
        description: "可支配的預算區間",
      },
      room_type: {
        type: "string",
        description: "偏好的房型，例如『雙人房』",
      },
      transport_mode: {
        type: "string",
        enum: ["car", "public"],
        description: "交通方式，例如自駕（car）或大眾運輸（public）",
      },
      companions: {
        type: "string",
        description: "旅伴，例如『情侶』、『家庭』、『朋友』",
      },
    },
    required: ["start_date", "end_date", "location"],
  },
};
