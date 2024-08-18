'use client'
import SortableItem from '@/components/sortable/sortable-item';
import {
    type DragEndEvent
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { type Category, type Link as DBLink } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { isEqual } from 'lodash'; // Add this import
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { updateLinksAction } from '@/server/actions/link.actions';
import { LinkItem } from '../link/link-item';
import { useSession } from 'next-auth/react';
import { SortableContainer } from '../sortable/sortable-container';

type CategoryWithLinks = Category & { links: DBLink[] }

export default function EditCategoryLinks({ category }: { category: CategoryWithLinks }) {
    const initialLinks = category?.links
    const [links, setLinks] = useState<DBLink[]>(category?.links)
    const [orderHasChanged, setOrderHasChanged] = useState(false)
    const router = useRouter()
    const { data: session } = useSession();

    const reorderItemList = (e: DragEndEvent) => {
        if (!e.over) return;

        if (e.active.id !== e.over.id) {
            setLinks((links) => {
                const oldIdx = links.findIndex(link => link.id === e.active.id.toString());
                const newIdx = links.findIndex(link => link.id === e.over!.id.toString());

                return arrayMove(links, oldIdx, newIdx)
            })
        }
    }

    const hasOrderChanged = useCallback(() => {
        return !isEqual(
            links.map(l => l.id),
            initialLinks.map(l => l.id)
        );
    }, [links, initialLinks])

    const handleSave = async () => {
        const orderedLinks = links.map((link, i) => ({ ...link, order: i }))
        // You can perform actions here when the order changes
        await updateLinksAction(orderedLinks)

        setTimeout(() => {
            router.push('/links')
        }, 500)
    }

    useEffect(() => {
        setOrderHasChanged(hasOrderChanged());
    }, [setOrderHasChanged, hasOrderChanged])

    return <SortableContainer onDragEnd={reorderItemList}>
        <ul className='flex flex-col gap-4 py-2'>
            <SortableContext items={links}>
                {links.map((link) => (
                    <SortableItem key={link.id} id={link.id}>
                        <LinkItem name={link.name} url={link.url} id={link.id} session={session} />
                    </SortableItem>
                ))}
            </SortableContext>
        </ul>
        <Button disabled={!orderHasChanged} onClick={handleSave}>Save</Button>
    </SortableContainer>
}