'use client'
import { type Session } from 'next-auth'
import React from 'react'

import { SessionProvider as NextAuthSessionProvider     } from 'next-auth/react'

export const SessionProvider = ({ session, children }: { session: Session | null, children: React.ReactNode }) => {
    return <NextAuthSessionProvider session={session}>
        {children}
    </NextAuthSessionProvider>
}