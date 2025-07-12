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
  description:
    "根據使用者提供的文字，萃取旅遊行程條件參數，請以完整格式回傳，例如：台北板橋、2025-07-13、transport_mode 為 'car'。",
  parameters: {
    type: "object",
    properties: {
      start_date: {
        type: "string",
        description: "旅遊開始日期（格式需為 YYYY-MM-DD，例如 2025-07-13）",
      },
      end_date: {
        type: "string",
        description: "旅遊結束日期（格式需為 YYYY-MM-DD，例如 2025-07-15）",
      },
      location: {
        type: "string",
        description: "旅遊城市或行政區名稱（例如『台北市』、『台北板橋』），避免模糊詞如『台北101』",
      },
      travel_theme: {
        type: "string",
        description: "旅遊主題（建議值：『自然』、『文化』、『親子』、『美食』、『藝術』）",
      },
      budget_range: {
        type: "object",
        properties: {
          min: { type: "number", description: "每日預算下限（如 1000）" },
          max: { type: "number", description: "每日預算上限（如 5000）" },
        },
        required: ["min", "max"],
        description: "每日可支配預算區間（TWD）",
      },
      room_type: {
        type: "string",
        description: "偏好的房型（如『雙人房』、『豪華雙人房』、『家庭房』）",
      },
    },
    required: ["start_date", "end_date", "location"],
  },
};
