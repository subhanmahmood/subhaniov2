import { auth } from '@/auth'
import { createServerActionProcedure } from 'zsa'

export const authenticatedAction = createServerActionProcedure().handler(
    async () => {
        const session = await auth();
        return { session }
    }
)