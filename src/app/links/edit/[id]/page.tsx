import { auth } from "@/auth";
import LinkForm from "@/components/link/link-form";
import { getCategoriesAction } from "@/server/actions/category.actions";
import { getLinkAction } from "@/server/actions/link.actions";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EditLink({ params }: { params: { id: string } }) {
    const isEditing = !!params.id;

    const [[link, linkError], [categoriesActionResult, categoriesError]] = await Promise.all([getLinkAction({ id: params.id }), getCategoriesAction({ withLinks: false })])

    const session = await auth();

    if (!session) {
        redirect('/login')
    }

    if (linkError ?? categoriesError) {
        redirect('/links')
    }

    return <>
        <div className="flex gap-4 items-center">
            <Link prefetch={true} href="/links"><ArrowLeft size={20} /></Link>
            <h1 className="text-lg font-semibold">{`${isEditing ? 'Edit' : 'Save'} Link`}</h1>
        </div>

        <LinkForm id={params.id} link={link} categories={categoriesActionResult?.categories} />
    </>
}