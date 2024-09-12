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
    staticId: z.string().min(1).max(20).regex(/^[A-Z0-9_]+$/, "Static ID must be uppercase letters, numbers, and underscores only"),
    price: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }).min(0),
    active: z.boolean().optional(),
    order: z.number().optional(),
})

export const promotionTypeFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1),
    staticId: z.string().min(1).max(20).regex(/^[A-Z0-9_]+$/, "Static ID must be uppercase letters, numbers, and underscores only"),
    price: z.coerce
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }).min(0),
    active: z.boolean().optional(),
    order: z.number().optional(),
})

export const collabFormItemSchema = z.object({
  postType: z.string().min(1, "Post type is required"),
  promotionTypes: z.array(z.string()).min(1, "At least one promotion type must be selected"),
  reuseRights: z.boolean(),
});

export const leadCollectionFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    companyName: z.string().optional(),
    projectDescription: z.string().min(10, { message: "Project description must be at least 10 characters" }),
})
