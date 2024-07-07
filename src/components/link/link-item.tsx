'use client'
import { addLinkClickAction, deleteLinkAction } from '@/server/actions/link.actions'
import { type Link as DBLink } from '@prisma/client'
import clsx from 'clsx'
import Link from 'next/link'

import ConfirmDialog from '@/components/confirm-dialog'

import { type Session } from 'next-auth'
import { Button } from '../ui/button'
import { Edit, Trash2 } from 'lucide-react'


const linkClasses = "text-slate-500 hover:text-slate-900 transition-colors duration-200 underline cursor-pointer"

type LinkItemProps = { name: string, url: string, id: string, onClick?: () => void  } & { session: Session | null }

export const LinkItem = ({ name, url, id, session, onClick }: LinkItemProps) => {
    return <div className='flex items-center justify-between w-full'>
        <Link prefetch={true} href={url} target='_blank' onClick={onClick} className={clsx(linkClasses, "mr-2")}>{name}</Link>
        {session && <div className='flex items-center'>
            <Link prefetch={true} href={`/links/edit/${id}`}><Button className="px-2" variant={'ghost'}><Edit className='w-4 h-4' /></Button></Link>

            <ConfirmDialog
                onConfirm={() => deleteLinkAction({ id })}
                title='Are you sure you want to delete this link?'
                description="This action cannot be undone.">
                <Button className="px-2" variant={'ghost'}><Trash2 className='w-4 h-4' /></Button>
            </ConfirmDialog>
        </div>}
    </div>
}

export default function LinkListItem({ name, url, id, session }: { name: string, url: string, id: string } & { session: Session | null }) {

    const handleClick = async () => {
        await addLinkClickAction({ id })
    }

    return <li>
        <LinkItem name={name} url={url} id={id} session={session} onClick={handleClick} />
    </li >
}