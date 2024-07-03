'use client'
import { addLinkClick, deleteLink } from '@/server/actions/link.actions'
import { type Link as DBLink } from '@prisma/client'
import clsx from 'clsx'
import Link from 'next/link'

import ConfirmDialog from '@/components/confirm-dialog'

import { type Session } from 'next-auth'
import { Button } from '../ui/button'


const linkClasses = "text-slate-500 hover:text-slate-900 transition-colors duration-200 underline cursor-pointer"

export default function LinkItem({ name, url, id, session }: DBLink & { session: Session | null }) {

    const handleClick = async () => {
        await addLinkClick(id)
    }

    return <li>
        <Link href={url} target='_blank' onClick={handleClick} className={clsx(linkClasses, "mr-2")}>{name}</Link>
        {session && <>
            <Link href={`/links/edit/${id}`}>(<span className={clsx(linkClasses, "text-slate-900")}>Edit</span>)</Link>
            <ConfirmDialog
                onConfirm={() => deleteLink(id)}
                title='Are you sure you want to delete this link?'
                description="This action cannot be undone.">
                <Button variant={'ghost'}>(<span className={clsx(linkClasses, "text-slate-900")}>Delete</span>)</Button>
            </ConfirmDialog>
        </>}
    </li >
}