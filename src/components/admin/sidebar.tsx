'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
    const pathname = usePathname();
    const routeConfig = [
        {
            label: 'Post Types',
            href: '/admin/post-types',
            active: pathname === '/admin/post-types'
        },
        {
            label: 'Add Post Type',
            href: '/admin/post-types/add',
            active: pathname === '/admin/post-types/add'
        }
    ]

    return (
        <>
            {routeConfig.map((route) => (
                <Link key={route.href} href={route.href} className={`rounded-md px-4 py-2 hover:bg-slate-50 cursor-pointer ${route.active ? 'bg-slate-100 hover:bg-slate-100' : ''}`}>{route.label}</Link>
            ))}
        </>
    )
}