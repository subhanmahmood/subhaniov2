'use server'

import { getCategoryByName } from "@/data-access/category.data-access";
import { linkFormSchema } from "@/lib/schema";
import { db } from "@/server/db";
import { Category } from "@prisma/client";
import { z } from "zod";
import { createServerAction } from "zsa";

export const handleCategory = async ({ values }: { values: z.infer<typeof linkFormSchema> }) => {
    'use server'

    if (values.addCategory) {
        const existingCategory = await getCategoryByName(values.addCategory);

        if (existingCategory) {
            return existingCategory.id;
        }

        const newCategory = await db.category.create({
            data: { name: values.addCategory }
        });
        return newCategory.id;
    }

    return values.categoryId ?? "";
}

export const getCategoryUseCase = async (id: string) => {
    const category = await db.category.findUnique({ where: { id } })
    return category;
}

export const getCategoriesUseCase = async () => {
    const categories = await db.category.findMany()
    return categories;
}

export const updateCategoriesUseCase = async (categories: Category[]) => {
    await db.$transaction(
        categories.map(category =>
            db.category.update({
                where: { id: category.id },
                data: {
                    name: category.name,
                    order: category.order
                }
            })
        )
    );
}

export const getCategoriesWithLinksUseCase = async ({ includeEmpty }: { includeEmpty?: boolean }) => {
    const categoriesWithLinks = await db.category.findMany({
        where: {
            links: includeEmpty ? {} : {
                some: {}
            }
        },
        include: {
            links: {
                orderBy: {
                    order: 'asc'
                }
            }
        },
        orderBy: {
            order: 'asc'
        }
    });

    return categoriesWithLinks;
}

export const deleteCategoryUseCase = async (id: string) => {
    await db.category.delete({ where: { id } })
}