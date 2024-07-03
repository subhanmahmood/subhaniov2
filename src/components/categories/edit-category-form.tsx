'use client'
import SortableItem from '@/components/sortable-item';
import { deleteCategory, getLinksByCategory, updateCategories } from '@/server/actions/link.actions';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { type Link as DBLink, type Category } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { isEqual } from 'lodash'; // Add this import
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ConfirmDialog from '@/components/confirm-dialog';

type CategoryWithLinks = Category & { links: DBLink[] }

export default function EditCategories() {
    const [categories, setCategories] = useState<CategoryWithLinks[]>([])
    const [initialCategories, setInitialCategories] = useState<CategoryWithLinks[]>([])
    const [orderHasChanged, setOrderHasChanged] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getLinksByCategory({ includeEmpty: true })
            setCategories(categories)
            setInitialCategories(categories)
        }
        fetchCategories().catch(error => {
            console.error('Error in fetchCategories:', error)
        })
    }, [setCategories])

    const reorderItemList = (e: DragEndEvent) => {
        if (!e.over) return;

        if (e.active.id !== e.over.id) {
            setCategories((categories) => {
                const oldIdx = categories.findIndex(category => category.id === e.active.id.toString());
                const newIdx = categories.findIndex(category => category.id === e.over!.id.toString());

                return arrayMove(categories, oldIdx, newIdx)
            })
        }
    }

    const hasOrderChanged = useCallback(() => {
        return !isEqual(
            categories.map(c => c.id),
            initialCategories.map(c => c.id)
        );
    }, [categories, initialCategories])

    const handleSave = async () => {
        const orderedCategories = categories.map((category, i) => ({ ...category, order: i }))
        // You can perform actions here when the order changes
        await updateCategories(orderedCategories)

        setTimeout(() => {
            router.push('/links')
        }, 500)
    }

    const handleDelete = async (id: string) => {
        await deleteCategory(id)
    }

    useEffect(() => {
        setOrderHasChanged(hasOrderChanged());
    }, [categories, hasOrderChanged])

    return <DndContext onDragEnd={reorderItemList}>
        <ul className='flex flex-col gap-4 py-2'>
            <SortableContext items={categories}>
                {categories.map((category) => (
                    <SortableItem key={category.id} id={category.id}>
                        <div className="w-full flex justify-between ml-4">
                            <p>{category.name}</p>
                            <ConfirmDialog
                                title="Delete Category"
                                description={`Are you sure you want to delete this category?${category.links.length > 0 ? ` This category has ${category.links.length} link${category.links.length > 1 ? 's' : ''}.` : ''}`}
                                onConfirm={() => handleDelete(category.id)}>
                                <Button>Delete</Button>
                            </ConfirmDialog>
                        </div>
                    </SortableItem>
                ))}
            </SortableContext>
        </ul>
        <Button disabled={!orderHasChanged} onClick={handleSave}>Save</Button>
    </DndContext>
}