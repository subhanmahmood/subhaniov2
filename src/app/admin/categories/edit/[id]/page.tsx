
import EditCategoryLinks from '@/components/categories/edit-category-links-form';
import { PageHeader } from '@/components/page-header';

import { getCategoryWithLinksAction } from '@/server/actions/category.actions';
import { redirect } from 'next/navigation';

export default async function EditCategory({
    params,
}: {
    params: { id: string };
}) {
    const id = params.id;

    const [category, error] = await getCategoryWithLinksAction({ id });

    if (!category) {
        redirect('/links');
    }

    if (error) {
        redirect('/links');
    }

    return <>
        <PageHeader showBack={true} title={`Edit ${category?.name}`} />

        <EditCategoryLinks category={category} />
    </>
}