'use client'
import { addLinkClick, deleteLink } from '@/server/actions/link.actions'
import { type Link as DBLink } from '@prisma/client'
import clsx from 'clsx'
import Link from 'next/link'

import ConfirmDialog from '@/app/_components/confirm-dialog'
import { type User } from '@supabase/supabase-js'


const linkClasses = "text-slate-500 hover:text-slate-900 transition-colors duration-200 underline cursor-pointer"

export default function LinkItem({ name, url, id, user }: DBLink & { user: User | null }) {
    const goToLink = async () => {
        await addLinkClick(id)
        // router.push(url)
        window.open(url)
    }

    return <li>
        <span onClick={goToLink} className={clsx(linkClasses, "mr-2")}>{name}</span>
        {user && <>
            <Link href={`/links/edit/${id}`}>(<span className={clsx(linkClasses, "text-slate-900")}>Edit</span>)</Link>
            <ConfirmDialog
                onConfirm={() => deleteLink(id)}
                title='Are you sure you want to delete this link?'
                description="This action cannot be undone.">
                (<span className={clsx(linkClasses, "text-slate-900")}>Delete</span>)
            </ConfirmDialog>
        </>}
    </li >
}