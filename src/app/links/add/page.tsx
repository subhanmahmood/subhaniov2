import { auth } from "@/auth";
import LinkForm from "@/components/link/link-form";
import { getCategoriesAction } from "@/server/actions/category.actions";
import { PageHeader } from "@/components/page-header";
import { UnauthorizedError } from "@/lib/exception";


export default async function AddLinks() {
    const session = await auth();

    if (!session) {
        throw new UnauthorizedError()
    }

    const [categories] = await getCategoriesAction()

    return <>
        <div className="flex gap-2">

            <div className="flex grow flex-col gap-2">
                <PageHeader title="Add Link" />

                <LinkForm categories={categories} />
            </div>
        </div>

    </>
}