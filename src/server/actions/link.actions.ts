'use server'

import { revalidatePath } from "next/cache";
import { db } from "../db"
import { Link } from "@prisma/client";
import { z } from "zod";
import { linkFormSchema } from "@/components/link/link-form";

export const addLinkClick = async (id: number) => {
    'use server';

    await db.linkClick.create({ data: { linkId: id, datetime: new Date() } })
}


export const createLink = async (values: z.infer<typeof linkFormSchema>) => {
    'use server'

    await db.link.create({ data: values })

    revalidatePath('/links', 'page')
}

export const editLink = async (id: number, values: z.infer<typeof linkFormSchema>) => {
    'use server';

    const link = await db.link.update({ where: { id }, data: values })

    revalidatePath('/links', 'page')

    return link;
}

export const getLinks = async (): Promise<Link[]> => {
    'use server';

    const links = await db.link.findMany();

    return links;
}


export const deleteLink = async (id: number) => {
    'use server';

    await db.link.delete({ where: { id } })

    revalidatePath('/links')
}

export const getLink = async (id: number) => {
    'use server';

    const link = await db.link.findFirst({ where: { id } });

    return link
}