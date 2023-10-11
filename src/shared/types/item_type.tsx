import { z } from "zod";
export const itemSchema = z.object({
  id: z.string(),
  sku: z.string(),
  name: z.string(),
  desc: z.string(),
  price: z.number(),
  status: z.string(),
});

export type ItemType = z.infer<typeof itemSchema>;
