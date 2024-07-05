'use server'

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { authenticatedAction } from "@/lib/safe-action";
import { addLinkClickUseCase, createLinkUseCase, deleteLinkUseCase, getLinksUseCase, getLinkUseCase, updateLinksUseCase, updateLinkUseCase } from "@/use-cases/links.use-case";
import { createServerAction } from "zsa";
import { linkFormSchema } from "@/lib/schema";




export const updateLinkAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string(),
    values: linkFormSchema
})).handler(async ({ input }) => {
    const { id, values } = input;

    await updateLinkUseCase(id, values)

    revalidatePath('/links', 'page')
})

export const createLinkAction = authenticatedAction.createServerAction().input(z.object({
    values: linkFormSchema
})).handler(async ({ input }) => {
    const { values } = input;

    await createLinkUseCase(values)

    revalidatePath('/links', 'page')
})


export const addLinkClickAction = createServerAction().input(z.object({
    id: z.string()
})).handler(async ({ input }) => {
    const { id } = input;

    await addLinkClickUseCase(id)

    revalidatePath
})

export const getLinksAction = createServerAction().input(z.object({
    categoryId: z.string().optional()
})).output(z.array(z.object({
    id: z.string(),
    name: z.string(),
    url: z.string(),
    categoryId: z.string(),
    order: z.number()
}))).handler(async ({ input }) => {
    const { categoryId } = input;

    const links = await getLinksUseCase({ categoryId })

    revalidatePath('/links', 'page')

    return links
})


export const deleteLinkAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).handler(async ({ input }) => {
    const { id } = input;

    await deleteLinkUseCase(id)

    revalidatePath('/links')
})

export const getLinkAction = createServerAction().input(z.object({
    id: z.string()
})).output(z.object({
    id: z.string(),
    name: z.string(),
    url: z.string(),
    categoryId: z.string(),
    order: z.number(),
}).nullable()).handler(async ({ input }) => {
    const { id } = input;

    const link = await getLinkUseCase(id)

    revalidatePath('/links', 'page')

    return link
})

export const updateLinksAction = authenticatedAction.createServerAction().input(z.array(z.object({
    id: z.string(),
    order: z.number()
}))).handler(async ({ input }) => {
    await updateLinksUseCase(input)

    revalidatePath('/links', 'page')
})