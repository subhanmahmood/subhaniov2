import { auth } from "@/auth";
import { PageHeader } from "@/components/page-header";
import PostTypeForm from "@/components/post-types/post-types-form";
import { UnauthorizedError } from "@/lib/exception";
import { getPostTypeAction } from "@/server/actions/post-type.actions";
import { redirect } from "next/navigation";

export default async function EditPostType({ params }: { params: { id: string } }) {
    const isEditing = !!params.id;

    const [postType, postTypeError] = await getPostTypeAction({ id: params.id });

    const session = await auth();

    if (!session) {
        throw new UnauthorizedError()
    }

    if (postTypeError) {
        redirect('/post-types')
    }

    return <div className="flex flex-col gap-4">
        <PageHeader title={`${isEditing ? 'Edit' : 'Save'} Post Type`} />

        <PostTypeForm id={params.id} postType={postType} />
    </div>
}