import { auth } from "@/auth";
import { PageHeader } from "@/components/page-header";
import EditTypeForm from "@/components/admin/post-types/edit-type-form";
import { UnauthorizedError } from "@/lib/exception";
import { getPostTypeAction, updatePostTypeAction } from "@/server/actions/post-type.actions";
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

    const handleSubmit = async (values: Parameters<typeof updatePostTypeAction>[0]) => {
        "use server";

        await updatePostTypeAction(values);
    };

    return <div className="flex flex-col gap-4">
        <PageHeader showBack={false} title={`${isEditing ? 'Edit' : 'Save'} Post Type`} />

        <EditTypeForm 
            submitAction={handleSubmit}
            successPath="/admin/post-types"
            id={params.id}
            name={postType?.name}
            price={postType?.price}
            active={postType?.active}
            order={postType?.order}
        />
    </div>
}