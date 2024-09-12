'use server';

import { authenticatedAction } from "@/lib/safe-action";
import { postTypeFormSchema } from "@/lib/schema";
import { createPostTypeUseCase, deletePostTypeUseCase, getPostTypesUseCase, getPostTypeUseCase, updatePostTypesUseCase, updatePostTypeUseCase } from "@/use-cases/post-type.use-case";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createPostTypeAction = authenticatedAction.createServerAction().input(postTypeFormSchema).handler(async ({ input }) => {
    "use server";

    await createPostTypeUseCase(input)

    revalidatePath('/admin/post-types')
})

export const updatePostTypeAction = authenticatedAction.createServerAction().input(postTypeFormSchema).handler(async ({ input }) => {
    "use server";

    await updatePostTypeUseCase(input)

    revalidatePath('/admin/post-types')
})

export const deletePostTypeAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).handler(async ({ input }) => {
    await deletePostTypeUseCase(input.id)

    revalidatePath('/admin/post-types')
})

export const getPostTypesAction = authenticatedAction.createServerAction().input(z.object({
    onlyShowActive: z.boolean().optional()
})).output(z.array(postTypeFormSchema)).handler(async ({ input }) => {
    return getPostTypesUseCase(input.onlyShowActive)
})

export const getPostTypeAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).output(postTypeFormSchema.nullable()).handler(async ({ input }) => {
    return getPostTypeUseCase(input.id)
})

export const updatePostTypesAction = authenticatedAction.createServerAction().input(z.array(postTypeFormSchema)).handler(async ({ input }) => {
    await updatePostTypesUseCase(input)

    revalidatePath('/admin/post-types')
})