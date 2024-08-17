import { auth } from "@/auth";
import { PageHeader } from "@/components/page-header";
import { UnauthorizedError } from "@/lib/exception";
import PostTypeForm from "@/components/post-types/post-types-form";


export default async function AddPostType() {
    const session = await auth();

    if (!session) {
        throw new UnauthorizedError()
    }

    return <>
        <div className="flex gap-2">

            <div className="flex grow flex-col gap-2">
                <PageHeader showBack={false} title="Add Post Type" />

                <PostTypeForm />
            </div>
        </div>

    </>
}