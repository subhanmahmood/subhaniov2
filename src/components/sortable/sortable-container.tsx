'use client';

import {
    DndContext, KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors, type DragEndEvent
} from '@dnd-kit/core';
import { type FC, type PropsWithChildren } from 'react';

type SortableContainerProps = { onDragEnd: (event: DragEndEvent) => void }

export const SortableContainer: FC<PropsWithChildren<SortableContainerProps>> = ({ onDragEnd, children }) => {
    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);

    const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);
    return <DndContext onDragEnd={onDragEnd} sensors={sensors}>
        {children}
    </DndContext>   
}