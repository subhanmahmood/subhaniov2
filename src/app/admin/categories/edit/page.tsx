import { auth } from '@/auth';
import EditCategories from '@/components/categories/edit-category-form';
import { PageHeader } from '@/components/page-header';
import { UnauthorizedError } from '@/lib/exception';
import { getCategoriesWithLinksAction } from '@/server/actions/category.actions';

export default async function EditCategory() {

    const session = await auth()

    if (!session) {
        throw new UnauthorizedError()
    }

    const [categoriesWithLinks] = await getCategoriesWithLinksAction({ includeEmpty: true})

    return <>
        <PageHeader title="Edit Categories" />

        <EditCategories dbCategories={categoriesWithLinks} />
    </>
}