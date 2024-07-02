import EditCategories from '@/components/categories/edit-category-form';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditCategory() {

    return <>
        <div className="flex gap-4 items-center">
            <Link href="/links"><ArrowLeft size={20} /></Link>
            <h1 className="text-lg font-semibold">Edit Categories</h1>
        </div>

        <EditCategories />
    </>
}