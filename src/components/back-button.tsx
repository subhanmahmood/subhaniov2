'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { cloneElement, type ReactElement } from 'react';

export default function BackButton({
    className,
    children,
}: React.PropsWithChildren<{
    className?: string;
}>) {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    };

    return (
        <>
            {React.isValidElement(children) &&
                cloneElement(children as ReactElement, {
                    className,
                    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
                        const childElement = children as ReactElement<{ onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void }>;
                        if (childElement.props.onClick) {
                            childElement.props.onClick(e);
                        }
                        handleClick();
                    },
                })}
        </>
    );
}