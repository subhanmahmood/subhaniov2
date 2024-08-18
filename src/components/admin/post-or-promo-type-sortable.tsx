'use client'
import SortableItem from '@/components/sortable/sortable-item';

import {
    type DragEndEvent
} from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { type PostType, type PromotionType } from '@prisma/client';
import { useCallback, useEffect, useState } from 'react';
import { isEqual } from 'lodash'; // Add this import
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { SortableContainer } from '../sortable/sortable-container';
import { type Nullable } from '@/lib/schema';
import PostTypeCard from './post-types/post-type-card';
import { updatePostTypesAction } from '@/server/actions/post-type.actions';
import { updatePromotionTypesAction } from '@/server/actions/promo-type.actions';
import { cn } from '@/lib/utils';
import BackButton from '../back-button';
import ConfirmDialog from '../confirm-dialog';

type PostOrPromo = PostType | PromotionType

export default function PostOrPromoTypeSortable({ dbItems, postType, successUrl, gap = 'gap-6' }: { dbItems?: Nullable<PostOrPromo[]>, postType: 'post' | 'promo', successUrl: string, gap?: string }) {
    const [items, setItems] = useState<PostOrPromo[]>(dbItems ?? [])
    const [orderHasChanged, setOrderHasChanged] = useState(false)
    const router = useRouter()

    const reorderItemList = (e: DragEndEvent) => {
        if (!e.over) return;

        if (e.active.id !== e.over.id) {
            setItems((items) => {
                const oldIdx = items.findIndex(item => item.id === e.active.id.toString());
                const newIdx = items.findIndex(item => item.id === e.over!.id.toString());

                return arrayMove(items, oldIdx, newIdx)
            })
        }
    }

    const hasOrderChanged = useCallback(() => {
        const initialItems = dbItems ?? []
        return !isEqual(
            items.map(item => item.id),
            initialItems.map(item => item.id)
        );
    }, [items, dbItems])

    useEffect(() => {
        console.log('hasOrderChanged', hasOrderChanged())
    }, [hasOrderChanged])

    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (orderHasChanged) {
                console.log('orderHasChanged', orderHasChanged)
                e.preventDefault();
                e.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [orderHasChanged]);

    const handleSave = async () => {
        const orderedItems = items.map((item, i) => ({ ...item, order: i }))
        // You can perform actions here when the order changes
        if (postType === 'post') {
            await updatePostTypesAction(orderedItems)
        } else {
            await updatePromotionTypesAction(orderedItems)
        }

        setTimeout(() => {
            router.push(successUrl)
        }, 500)
    }

    useEffect(() => {
        setOrderHasChanged(hasOrderChanged());
    }, [items, hasOrderChanged])

    const handleGoBack = async () => {
        router.back()
    }

    return <SortableContainer onDragEnd={reorderItemList}>
        <ul className={cn('flex flex-col mt-4', gap)}>
            <SortableContext items={items}>
                {items.map((item) => (
                    <SortableItem key={item.id} id={item.id}>
                        <PostTypeCard
                            key={item.id}
                            id={item.id ?? ''}
                            name={item.name}
                            price={item.price}
                            active={item.active ?? false}
                            postType={postType}
                        />
                    </SortableItem>
                ))}
            </SortableContext>
        </ul>
        <div className="flex justify-end gap-4 mt-4">
            {!orderHasChanged ? (
                <BackButton>
                    <Button variant="outline">Go back</Button>
                </BackButton>
            ) : <ConfirmDialog
                title='Are you sure you want to go back?'
                description='Your changes will not be saved'
                confirmText='Go back'
                onConfirm={handleGoBack}
            >
                <Button variant="outline">Go back</Button>
            </ConfirmDialog>}

            <Button disabled={!orderHasChanged} onClick={handleSave}>Save</Button>
        </div>
    </SortableContainer>
}