'use server';
import { type postTypeFormSchema } from '@/lib/schema';
import { db } from '@/server/db';
import { type z } from 'zod';
import { type PostType } from '@prisma/client';

export const createPostTypeUseCase = async (values: z.infer<typeof postTypeFormSchema>) => {
    const valuesToAdd = {
        name: values.name,
        price: values.price,
    }

    await db.postType.create({ data: valuesToAdd })
    console.log('created post type', valuesToAdd)
}

export const updatePostTypeUseCase = async (values: z.infer<typeof postTypeFormSchema>) => {
    const valuesToUpdate = {
        name: values.name,
        price: values.price,
    }

    await db.postType.update({ where: { id: values.id }, data: valuesToUpdate })
}

export const getPostTypeUseCase = async (id: string) => {
    const postType = await db.postType.findUnique({ where: { id } })
    return postType;
}

export const getPostTypesUseCase = async () => {
    const postTypes = await db.postType.findMany()
    return postTypes;
}

export const deletePostTypeUseCase = async (id: string) => {
    await db.postType.delete({ where: { id } })
}

export const updatePostTypesUseCase = async (postTypes: Partial<PostType>[]) => {
    await db.$transaction(
        postTypes.map(postType => db.postType.update({ where: { id: postType.id }, data: { order: postType.order } }))
    );
}