import { auth } from "@/auth";
import { PageHeader } from "@/components/page-header";
import { UnauthorizedError } from "@/lib/exception";
import EditTypeForm from "@/components/admin/post-types/edit-type-form";
import { createPromotionTypeAction } from "@/server/actions/promo-type.actions";


export default async function AddPostType() {
    const session = await auth();

    if (!session) {
        throw new UnauthorizedError()
    }

    const handleSubmit = async (values: Parameters<typeof createPromotionTypeAction>[0]) => {
        "use server";

        await createPromotionTypeAction(values);
    };


    return <>
        <div className="flex gap-2">

            <div className="flex grow flex-col gap-2">
                <PageHeader showBack={false} title="Add Promotion Type" />

                <EditTypeForm submitAction={handleSubmit} successPath="/admin/promo-types" />
            </div>
        </div>

    </>
}