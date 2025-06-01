import { z } from "zod";

export const ImageSchema = z.object({
  url: z.string().url(),
});

export type ImageType = z.infer<typeof ImageSchema>;
