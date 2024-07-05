import { db } from "@/server/db"

export const getCategoryByName = async (name: string) => {
    const category = await db.category.findFirst({ where: { name } })
    return category;
}