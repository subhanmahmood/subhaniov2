'use server';
import { type leadCollectionFormSchema } from '@/lib/schema';
import { db } from '@/server/db';
import { type z } from 'zod';

export const createLeadUseCase = async (values: z.infer<typeof leadCollectionFormSchema>) => {
    const lead = await db.lead.create({
        data: {
            email: values.email,
            name: values.name,
            companyName: values.companyName,
            projectDescription: values.projectDescription,
        }
    });
    console.log('created lead', lead);
    return lead;
}

export const getLeadsUseCase = async () => {
    const leads = await db.lead.findMany({
        orderBy: { createdAt: 'desc' }
    });
    return leads;
}

export const getLeadUseCase = async (id: string) => {
    const lead = await db.lead.findUnique({ where: { id } });
    return lead;
}

export const deleteLeadUseCase = async (id: string) => {
    await db.lead.delete({ where: { id } });
}