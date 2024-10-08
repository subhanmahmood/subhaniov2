import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from './server/db'
import { type Provider } from 'next-auth/providers'
import { env } from './env'

const providers: Provider[] = [
    GitHub,
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt' },
    providers,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log({
                user,
                account,
                profile,
                email,
                credentials
            })
            return user.email === env.ALLOWED_EMAIL
        }
    }
})