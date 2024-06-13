'use server'

import { revalidatePath } from "next/cache";
import { db } from "../db"
import { type Link } from "@prisma/client";
import { type z } from "zod";
import { type linkFormSchema } from "@/components/link/link-form";
import { createClient } from "@/lib/utils/supabase/server";

export const addLinkClick = async (id: number) => {
    'use server';

    await db.linkClick.create({ data: { linkId: id, datetime: new Date() } })
}


export const createLink = async (values: z.infer<typeof linkFormSchema>) => {
    'use server'

    const supabase = createClient()

    const { data: { user }, error } = await supabase.auth.getUser()

    if (error ?? !user) {
        return
    }

    const valuesToAdd = {
        name: values.name,
        url: values.url,
        category: values.addCategory ?? values.category ?? ''
    }

    await db.link.create({ data: valuesToAdd })

    revalidatePath('/links', 'page')
}

export const editLink = async (id: number, values: z.infer<typeof linkFormSchema>) => {
    'use server';

     const valuesToAdd = {
        ...values,
        category: values.category ?? values.addCategory ?? ''
    }

    const link = await db.link.update({ where: { id }, data: valuesToAdd })

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