'use client'

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from "lucide-react";
import React from "react"

type SortableItemProps = {
    children: React.ReactNode;
    id: string;
}

const SortableItem: React.FC<SortableItemProps> = ({ children, id }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

    return <div
        className='py-2 rounded-md flex w-full'
        style={{
            transform: CSS.Transform.toString(transform),
            transition: transition
        }}
        ref={setNodeRef}
    >
        <GripVertical className="cursor-grab" {...attributes} {...listeners} />
        {children}
    </div>
}

export default SortableItem