'use server';

import { authenticatedAction } from "@/lib/safe-action";
import { postTypeFormSchema } from "@/lib/schema";
import { createPostTypeUseCase, deletePostTypeUseCase, getPostTypesUseCase, getPostTypeUseCase, updatePostTypesUseCase, updatePostTypeUseCase } from "@/use-cases/post-type.use-case";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createPostTypeAction = authenticatedAction.createServerAction().input(postTypeFormSchema).handler(async ({ input }) => {
    "use server";
    try {
        await createPostTypeUseCase(input);
        revalidatePath('/admin/post-types');
        return { success: true };
    } catch (error) {
        console.error('Error creating post type:', error);
        return { success: false, error: 'Failed to create post type' };
    }
});

export const updatePostTypeAction = authenticatedAction.createServerAction().input(postTypeFormSchema).handler(async ({ input }) => {
    "use server";
    try {
        await updatePostTypeUseCase(input);
        revalidatePath('/admin/post-types');
        return { success: true };
    } catch (error) {
        console.error('Error updating post type:', error);
        return { success: false, error: 'Failed to update post type' };
    }
});

export const deletePostTypeAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).handler(async ({ input }) => {
    try {
        await deletePostTypeUseCase(input.id);
        revalidatePath('/admin/post-types');
        return { success: true };
    } catch (error) {
        console.error('Error deleting post type:', error);
        return { success: false, error: 'Failed to delete post type' };
    }
});

export const getPostTypesAction = authenticatedAction.createServerAction().input(z.object({
    onlyShowActive: z.boolean().optional()
})).output(z.array(postTypeFormSchema)).handler(async ({ input }) => {
    try {
        const postTypes = await getPostTypesUseCase(input.onlyShowActive);
        return postTypes;
    } catch (error) {
        console.error('Error fetching post types:', error);
        throw new Error('Failed to fetch post types');
    }
});

export const getPostTypeAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).output(postTypeFormSchema.nullable()).handler(async ({ input }) => {
    try {
        const postType = await getPostTypeUseCase(input.id);
        return postType;
    } catch (error) {
        console.error('Error fetching post type:', error);
        throw new Error('Failed to fetch post type');
    }
});

export const updatePostTypesAction = authenticatedAction.createServerAction().input(z.array(postTypeFormSchema)).handler(async ({ input }) => {
    try {
        await updatePostTypesUseCase(input);
        revalidatePath('/admin/post-types');
        return { success: true };
    } catch (error) {
        console.error('Error updating post types:', error);
        return { success: false, error: 'Failed to update post types' };
    }
});