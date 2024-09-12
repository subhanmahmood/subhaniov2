import { PageHeader } from "@/components/page-header";
import EditTypeForm from "@/components/admin/post-types/edit-type-form";
import { getPromotionTypeAction, updatePromotionTypeAction } from "@/server/actions/promo-type.actions";
import { redirect } from "next/navigation";

export default async function EditPromotionType({ params }: { params: { id: string } }) {
    const isEditing = !!params.id;

    const [promoType, promoTypeError] = await getPromotionTypeAction({ id: params.id });

    if (promoTypeError) {
        redirect('/promo-types')
    }

    const handleSubmit = async (values: Parameters<typeof updatePromotionTypeAction>[0]) => {
        "use server";

        await updatePromotionTypeAction(values);
    };

    console.log(promoType)


    return <div className="flex flex-col gap-4">
        <PageHeader showBack={true} title={`${isEditing ? 'Edit' : 'Save'} Promotion Type`} />

        <EditTypeForm id={params.id} name={promoType?.name} price={promoType?.price} active={promoType?.active} order={promoType?.order} submitAction={handleSubmit} successPath="/admin/promo-types" staticId={promoType?.staticId}/>
    </div>
}