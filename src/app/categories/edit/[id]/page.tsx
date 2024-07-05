import EditCategoryLinks from '@/components/categories/edit-category-links-form';
import { getCategoryAction } from '@/server/actions/category.actions';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function EditCategory({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;

    const [category, error] = await getCategoryAction({ id });

    if (!category) {
        redirect('/links');
    }

    if (error) {
        redirect('/links');
    }

    return <>
        <div className="flex gap-4 items-center">
            <Link href="/links"><ArrowLeft size={20} /></Link>
            <h1 className="text-lg font-semibold">Edit {category?.name}</h1>
        </div>

        <EditCategoryLinks id={id} />
    </>
}