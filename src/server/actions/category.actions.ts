'use server'
import { authenticatedAction } from "@/lib/safe-action";
import { deleteCategoryUseCase, getCategoriesUseCase, getCategoriesWithLinksUseCase, getCategoryUseCase, updateCategoriesUseCase } from "@/use-cases/category.use-case";
import { z } from "zod";
import { db } from "../db";
import { revalidatePath } from "next/cache";
import { createServerAction } from "zsa";

export const getCategoryAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).output(z.object({
    id: z.string(),
    name: z.string(),
    order: z.number()
}).nullable()).handler(async ({ input }) => {
    const { id } = input;

    const category = await getCategoryUseCase(id)

    return category;
})

export const getCategoriesAction = authenticatedAction.createServerAction().output(z.array(z.object({
    id: z.string(),
    name: z.string(),
    order: z.number()
}))).handler(async () => {
    const categories = await getCategoriesUseCase()

    return categories;
})

export const updateCategoriesAction = authenticatedAction.createServerAction().input(z.array(z.object({
    id: z.string(),
    name: z.string(),
    order: z.number()
}))).handler(async ({ input }) => {
    await updateCategoriesUseCase(input)
    revalidatePath('/links', 'page');
})

export const getCategoriesWithLinksAction = createServerAction().input(z.object({
    includeEmpty: z.boolean().optional()
})).output(z.array(z.object({
    id: z.string(),
    name: z.string(),
    order: z.number(),
    links: z.array(z.object({
        id: z.string(),
        name: z.string(),
        url: z.string(),
        order: z.number(),
        categoryId: z.string()
    }))
})).nullable()).handler(async ({ input }) => {
    const { includeEmpty } = input;
    revalidatePath('/links', 'page');
    const categories = await getCategoriesWithLinksUseCase({ includeEmpty })
    return categories;
})

export const deleteCategoryAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).handler(async ({ input }) => {
    const { id } = input;
    await deleteCategoryUseCase(id)
    revalidatePath('/links', 'page');
})
