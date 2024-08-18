'use server';
import { type promotionTypeFormSchema } from '@/lib/schema';
import { db } from '@/server/db';
import { type z } from 'zod';
import { type PromotionType } from '@prisma/client';

export const createPromotionTypeUseCase = async (values: z.infer<typeof promotionTypeFormSchema>) => {
    const valuesToAdd = {
        name: values.name,
        price: values.price,
        active: values.active,
    }

    await db.promotionType.create({ data: valuesToAdd })
    console.log('created promo type', valuesToAdd)
}

export const updatePromotionTypeUseCase = async (values: z.infer<typeof promotionTypeFormSchema>) => {
    const valuesToUpdate = {
        name: values.name,
        price: values.price,
        active: values.active,
    }

    await db.promotionType.update({ where: { id: values.id }, data: valuesToUpdate })
}

export const getPromotionTypeUseCase = async (id: string) => {
    const promotionType = await db.promotionType.findUnique({ where: { id } })
    return promotionType;
}

export const getPromotionTypesUseCase = async () => {
    const promotionTypes = await db.promotionType.findMany()
    return promotionTypes;
}

export const deletePromotionTypeUseCase = async (id: string) => {
    await db.promotionType.delete({ where: { id } })
}

export const updatePromotionTypesUseCase = async (promotionTypes: Partial<PromotionType>[]) => {
    await db.$transaction(
        promotionTypes.map(promotionType => db.promotionType.update({ where: { id: promotionType.id }, data: { order: promotionType.order } }))
    );
}