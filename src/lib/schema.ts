import { z } from "zod";

export const linkFormSchema = z.object({
    name: z.string().min(1),
    url: z.string().min(1),
    categoryId: z.string().optional(),
    addCategory: z.string().optional()
})