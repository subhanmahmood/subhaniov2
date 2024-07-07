'use server';
import { db } from "@/server/db";
import { type z } from "zod";
import { handleCategory } from "./category.use-case";
import { type Link } from "@prisma/client";
import { type linkFormSchema } from "@/lib/schema";

export const updateLinkUseCase = async (id: string, values: z.infer<typeof linkFormSchema>) => {
    const categoryId = await handleCategory({ values });

    const valuesToAdd: Partial<Link> = {
        name: values.name,
        url: values.url,
        categoryId,
    }

    await db.link.update({ where: { id }, data: valuesToAdd })
}

export const createLinkUseCase = async (values: z.infer<typeof linkFormSchema>) => {
    const categoryId = await handleCategory({ values });

    const valuesToAdd = {
        name: values.name,
        url: values.url,
        categoryId,
    }

    await db.link.create({ data: valuesToAdd })
}

export const addLinkClickUseCase = async (id: string) => {
    await db.linkClick.create({ data: { linkId: id, datetime: new Date() } })
}

export const getLinksUseCase = async ({ categoryId }: { categoryId?: string }) => {
    if (categoryId) {
        const links = await db.link.findMany({ where: { categoryId } });
        return links;
    }

    const links = await db.link.findMany();

    return links;
}

export const deleteLinkUseCase = async (id: string) => {
    await db.link.delete({ where: { id } })
}

export const getLinkUseCase = async (id: string) => {
    const link = await db.link.findUnique({ where: { id } })
    return link;
}

export const updateLinksUseCase = async (links: Partial<Link>[]) => {
    await db.$transaction(
        links.map(link => db.link.update({ where: { id: link.id }, data: { order: link.order } }))
    );
}