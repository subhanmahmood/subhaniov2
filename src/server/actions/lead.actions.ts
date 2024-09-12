'use server';

import { authenticatedAction } from "@/lib/safe-action";
import { leadCollectionFormSchema } from "@/lib/schema";
import { createLeadUseCase, deleteLeadUseCase, getLeadsUseCase, getLeadUseCase } from "@/use-cases/lead.use-case";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createLeadAction = authenticatedAction.createServerAction()
    .input(leadCollectionFormSchema)
    .handler(async ({ input }) => {
        const lead = await createLeadUseCase(input);
        return lead;
    });

export const getLeadsAction = authenticatedAction.createServerAction()
    .output(z.array(leadCollectionFormSchema.extend({
        id: z.string(),
        createdAt: z.date(),
        updatedAt: z.date(),
        companyName: z.string().nullable()
    })))
    .handler(async () => {
        return getLeadsUseCase();
    });

export const getLeadAction = authenticatedAction.createServerAction()
    .input(z.object({
        id: z.string()
    }))
    .output(z.object({
        id: z.string(),
        email: z.string(),
        name: z.string(),
        companyName: z.string().nullable(),
        projectDescription: z.string(),
        createdAt: z.date(),
        updatedAt: z.date()
    }).nullable())
    .handler(async ({ input }) => {
        return getLeadUseCase(input.id);
    });

export const deleteLeadAction = authenticatedAction.createServerAction()
    .input(z.object({
        id: z.string()
    }))
    .handler(async ({ input }) => {
        await deleteLeadUseCase(input.id);
        revalidatePath('/admin/leads')
    });