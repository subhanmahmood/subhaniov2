'use client'
import SortableItem from '@/app/_components/sortable-item';
import { getLinks, updateLinks } from '@/server/actions/link.actions';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { type Link as DBLink } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { isEqual } from 'lodash'; // Add this import
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function EditCategoryLinks({ id }: { id: string }) {
    const [initialLinks, setInitialLinks] = useState<DBLink[]>([])
    const [links, setLinks] = useState<DBLink[]>([])
    const [orderHasChanged, setOrderHasChanged] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const fetchCategories = async () => {
            const links = await getLinks({ categoryId: id })
            if (links) {
                setInitialLinks(links)
                setLinks(links)
            }
        }
        fetchCategories().catch(error => {
            console.error('Error in fetchCategories:', error)
            // Handle error appropriately (e.g., show error message to user)
        })
    }, [setInitialLinks, setLinks, id])

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
        await updateLinks(orderedLinks)

        setTimeout(() => {
            router.push('/links')
        }, 500)
    }

    useEffect(() => {
        setOrderHasChanged(hasOrderChanged());
    }, [setOrderHasChanged, hasOrderChanged])

    return <DndContext onDragEnd={reorderItemList}>
        <ul className='flex flex-col gap-4 py-2'>
            <SortableContext items={links}>
                {links.map((link) => (
                    <SortableItem key={link.id} id={link.id}>
                        <div className="w-full flex justify-between ml-4">
                            {link.name}
                        </div>
                    </SortableItem>
                ))}
            </SortableContext>
        </ul>
        <Button disabled={!orderHasChanged} onClick={handleSave}>Save</Button>
    </DndContext>
}