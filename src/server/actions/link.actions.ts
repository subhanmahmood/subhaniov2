'use server'

import { revalidatePath } from "next/cache";
import { db } from "../db"
import { type Category, type Link } from "@prisma/client";
import { type z } from "zod";
import { type linkFormSchema } from "@/components/link/link-form";

async function handleCategory(values: z.infer<typeof linkFormSchema>): Promise<string> {
    if (values.addCategory) {
        const existingCategory = await db.category.findUnique({
            where: { name: values.addCategory }
        });

        if (existingCategory) {
            return existingCategory.id;
        }

        const newCategory = await db.category.create({
            data: { name: values.addCategory }
        });
        return newCategory.id;
    }

    revalidatePath('/links', 'page')

    return values.categoryId ?? "";
}

export const addLinkClick = async (id: string) => {
    'use server';

    await db.linkClick.create({ data: { linkId: id, datetime: new Date() } })
}


export const createLink = async (values: z.infer<typeof linkFormSchema>) => {
    'use server'

    const categoryId = await handleCategory(values);

    const valuesToAdd = {
        name: values.name,
        url: values.url,
        categoryId,
    }

    await db.link.create({ data: valuesToAdd })

    revalidatePath('/links', 'page')
}

export const editLink = async (id: string, values: z.infer<typeof linkFormSchema>) => {
    'use server';

    const categoryId = await handleCategory(values);

    const valuesToAdd = {
        name: values.name,
        url: values.url,
        categoryId: categoryId
    }

    const link = await db.link.update({ where: { id }, data: valuesToAdd })

    revalidatePath('/links', 'page')

    return link;
}

export const getLinks = async ({ categoryId }: { categoryId?: string } = {}): Promise<Link[]> => {
    'use server';

    if (categoryId) {
        const links = await db.link.findMany({ where: { categoryId } });
        return links;
    }

    const links = await db.link.findMany();

    return links;
}


export const deleteLink = async (id: string) => {
    'use server';

    await db.link.delete({ where: { id } })

    revalidatePath('/links')
}

export const getLink = async (id: string) => {
    'use server';

    const link = await db.link.findFirst({ where: { id } });

    return link
}

export const getCategory = async (id: string) => {
    'use server';

    const category = await db.category.findFirst({ where: { id } });

    return category
}

export const getCategories = async () => {
    'use server';

    const categories = db.category.findMany({ orderBy: { order: 'asc' } });

    return categories;
}

export const updateCategories = async (categories: Category[]) => {
    'use server';

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

    revalidatePath('/links', 'page');
}

export const updateLinks = async (links: Link[]) => {
    'use server';

    await db.$transaction(
        links.map(link => db.link.update({ where: { id: link.id }, data: { order: link.order } }))
    );

    revalidatePath('/links', 'page');
}

export const getLinksByCategory = async ({includeEmpty = false}: {includeEmpty?: boolean} = {}) => {
    'use server';
    
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
    
    revalidatePath('/links', 'page');
    
    return categoriesWithLinks;
}

export const deleteCategory = async (id: string) => {
    'use server';

    await db.category.delete({ where: { id } })

    revalidatePath('/categories/edit', 'page');
    revalidatePath('/links', 'page');
}