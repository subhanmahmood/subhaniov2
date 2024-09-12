
import EditCategories from '@/components/categories/edit-category-form';
import { PageHeader } from '@/components/page-header';

import { getCategoriesWithLinksAction } from '@/server/actions/category.actions';

export default async function EditCategory() {



    const [categoriesWithLinks] = await getCategoriesWithLinksAction({ includeEmpty: true})

    return <>
        <PageHeader showBack={true} title="Edit Categories" />

        <EditCategories dbCategories={categoriesWithLinks} />
    </>
}