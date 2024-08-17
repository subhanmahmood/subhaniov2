import { z } from "zod";

export type Nullable<T> = T | null;

export const linkFormSchema = z.object({
    name: z.string().min(1),
    url: z.string().min(1),
    categoryId: z.string().optional(),
    addCategory: z.string().optional()
})

export const postTypeFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1),
    price: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }).min(0),
    active: z.boolean().optional(),
    order: z.number().optional(),
})