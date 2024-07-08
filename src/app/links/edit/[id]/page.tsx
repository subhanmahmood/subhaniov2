import { auth } from "@/auth";
import LinkForm from "@/components/link/link-form";
import { PageHeader } from "@/components/page-header";
import { UnauthorizedError } from "@/lib/exception";
import { getCategoriesAction } from "@/server/actions/category.actions";
import { getLinkAction } from "@/server/actions/link.actions";
import { redirect } from "next/navigation";

export default async function EditLink({ params }: { params: { id: string } }) {
    const isEditing = !!params.id;

    const [[link, linkError], [categories, categoriesError]] = await Promise.all([getLinkAction({ id: params.id }), getCategoriesAction()])

    const session = await auth();

    if (!session) {
        throw new UnauthorizedError()
    }

    if (linkError ?? categoriesError) {
        redirect('/links')
    }

    return <>
        <PageHeader title={`${isEditing ? 'Edit' : 'Save'} Link`} />

        <LinkForm id={params.id} link={link} categories={categories} />
    </>
}