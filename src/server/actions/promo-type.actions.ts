'use server';

import { authenticatedAction } from "@/lib/safe-action";
import { promotionTypeFormSchema } from "@/lib/schema";
import { createPromotionTypeUseCase, deletePromotionTypeUseCase, getPromotionTypesUseCase, getPromotionTypeUseCase, updatePromotionTypesUseCase, updatePromotionTypeUseCase } from "@/use-cases/promo-type.use-case";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createPromotionTypeAction = authenticatedAction.createServerAction().input(promotionTypeFormSchema).handler(async ({ input }) => {
    await createPromotionTypeUseCase(input)

    revalidatePath('/admin/promo-types')
})

export const updatePromotionTypeAction = authenticatedAction.createServerAction().input(promotionTypeFormSchema).handler(async ({ input }) => {
    await updatePromotionTypeUseCase(input)

    revalidatePath('/admin/promo-types')
})

export const deletePromotionTypeAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).handler(async ({ input }) => {
    await deletePromotionTypeUseCase(input.id)

    revalidatePath('/admin/promo-types')
})

export const getPromotionTypesAction = authenticatedAction.createServerAction().output(z.array(promotionTypeFormSchema)).handler(async () => {
    return getPromotionTypesUseCase()
})

export const getPromotionTypeAction = authenticatedAction.createServerAction().input(z.object({
    id: z.string()
})).output(promotionTypeFormSchema.nullable()).handler(async ({ input }) => {
    return getPromotionTypeUseCase(input.id)
})

export const updatePromotionTypesAction = authenticatedAction.createServerAction().input(z.array(promotionTypeFormSchema)).handler(async ({ input }) => {
    await updatePromotionTypesUseCase(input)

    revalidatePath('/admin/promo-types')
})