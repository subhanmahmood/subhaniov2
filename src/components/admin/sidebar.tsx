'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
    const pathname = usePathname();
    const routeConfig = [
        {
            label: 'Post Types',
            href: '/admin/post-types',
            active: pathname === '/admin/post-types',
            children: [
                {
                    label: 'Reorder',
                    href: '/admin/post-types/reorder',
                    active: pathname === '/admin/post-types/reorder'
                },
                {
                    label: 'Add new',
                    href: '/admin/post-types/add',
                    active: pathname === '/admin/post-types/add'
                }
            ]
        },
        {
            label: 'Promo Types',
            href: '/admin/promo-types',
            active: pathname === '/admin/promo-types',
            children: [
                {
                    label: 'Reorder',
                    href: '/admin/promo-types/reorder',
                    active: pathname === '/admin/promo-types/reorder'
                },
                {
                    label: 'Add new',
                    href: '/admin/promo-types/add',
                    active: pathname === '/admin/promo-types/add'
                }
            ]
        },
        {
            label: 'Links',
            href: '/admin/links',
            active: pathname === '/admin/links',
            children: [
                {
                    label: 'Add new',
                    href: '/admin/links/add',
                    active: pathname === '/admin/links/add'
                }
            ]
        },
        {
            label: 'Discount Rules',
            href: '/admin/discount-rules',
            active: pathname === '/admin/discount-rules'
        }

    ]

    return (
        <>
            {routeConfig.map((route) => (
                <div className="flex flex-col" key={route.href}>
                    <Link key={route.href} href={route.href} className={`rounded-md px-4 py-2 hover:bg-slate-50 cursor-pointer ${route.active ? 'bg-slate-100 hover:bg-slate-100' : ''}`}>{route.label}</Link>
                    {route.children?.map((child) => (
                        <Link key={child.href} href={child.href} className={`ml-4 text-sm text-slate-600 rounded-md px-4 py-2 hover:bg-slate-50 cursor-pointer ${child.active ? 'bg-slate-100 hover:bg-slate-100' : ''}`}>{child.label}</Link>
                    ))}
                </div>
            ))}
        </>
    )
}