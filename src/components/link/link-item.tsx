'use client'
import { ReactNode } from 'react'
import { addLinkClick, deleteLink } from '@/server/actions/link.actions'
import { Link as DBLink } from '@prisma/client'
import clsx from 'clsx'
import Link from 'next/link'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation'


const linkClasses = "text-slate-500 hover:text-slate-900 transition-colors duration-200 underline cursor-pointer"

const DeleteButton = ({ id, children }: { id: number, children: ReactNode }) => {
    return <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => deleteLink(id)}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}

export default function LinkItem({ name, url, id }: DBLink) {
    const router = useRouter();

    const goToLink = async () => {
        await addLinkClick(id)
        // router.push(url)
        window.open(url)
    }

    return <li>
        <span onClick={goToLink} className={clsx(linkClasses, "mr-2")}>{name}</span>
        <Link href={`/links/${id}`}>(<span className={clsx(linkClasses, "text-slate-900")}>Edit</span>)</Link>
        <DeleteButton id={id}>(<span className={clsx(linkClasses, "text-slate-900")}>Delete</span>)</DeleteButton>
    </li>
}