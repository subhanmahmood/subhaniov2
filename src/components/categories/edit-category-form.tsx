'use client'
import SortableItem from '@/components/sortable/sortable-item';

import {
    type DragEndEvent
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { type Link as DBLink, type Category } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { isEqual } from 'lodash'; // Add this import
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ConfirmDialog from '@/components/confirm-dialog';
import { deleteCategoryAction, updateCategoriesAction } from '@/server/actions/category.actions';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { SortableContainer } from '../sortable/sortable-container';

type CategoryWithLinks = Category & { links: DBLink[] }
type Nullable<T> = T | null;


export default function EditCategories({ dbCategories }: { dbCategories?: Nullable<CategoryWithLinks[]> }) {
    const [categories, setCategories] = useState<CategoryWithLinks[]>(dbCategories ?? [])
    const [orderHasChanged, setOrderHasChanged] = useState(false)
    const router = useRouter()

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
        const initialCategories = dbCategories ?? []
        return !isEqual(
            categories.map(c => c.id),
            initialCategories.map(c => c.id)
        );
    }, [categories, dbCategories])

    const handleSave = async () => {
        const orderedCategories = categories.map((category, i) => ({ ...category, order: i }))
        // You can perform actions here when the order changes
        await updateCategoriesAction(orderedCategories)

        setTimeout(() => {
            router.push('/links')
        }, 500)
    }

    const handleDelete = async (id: string) => {
        await deleteCategoryAction({ id })
    }

    useEffect(() => {
        setOrderHasChanged(hasOrderChanged());
    }, [categories, hasOrderChanged])

    return <SortableContainer onDragEnd={reorderItemList}>
        <ul className='flex flex-col gap-4 py-2'>
            <SortableContext items={categories}>
                {categories.map((category) => (
                    <SortableItem key={category.id} id={category.id}>
                        <div className="w-full flex items-center justify-between ml-4">
                            <p>{category.name}</p>
                            <div className='flex items-center gap-2'>
                                <Link prefetch={true} href={`/categories/edit/${category.id}`}>
                                    <Button variant={'outline'}><Pencil className='w-4 h-4' /></Button>
                                </Link>
                                <ConfirmDialog
                                    title="Delete Category"
                                    description={`Are you sure you want to delete this category?${category.links.length > 0 ? ` This category has ${category.links.length} link${category.links.length > 1 ? 's' : ''}.` : ''}`}
                                    onConfirm={() => handleDelete(category.id)}>
                                    <Button variant={'destructive'}><Trash2 className='w-4 h-4' /></Button>
                                </ConfirmDialog>
                            </div>
                        </div>
                    </SortableItem>
                ))}
            </SortableContext>
        </ul>

        <Button disabled={!orderHasChanged} onClick={handleSave}>Save</Button>
    </SortableContainer>
}