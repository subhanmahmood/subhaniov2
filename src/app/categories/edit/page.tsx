import EditCategories from '@/components/categories/edit-category-form';
import { getCategoriesAction } from '@/server/actions/category.actions';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function EditCategory() {

    const [categoriesActionResult, error] = await getCategoriesAction({ withLinks: true })

    return <>
        <div className="flex gap-4 items-center">
            <Link href="/links" prefetch={true}><ArrowLeft size={20} /></Link>
            <h1 className="text-lg font-semibold">Edit Categories</h1>
        </div>

        <EditCategories dbCategories={categoriesActionResult?.categories} />
    </>
}