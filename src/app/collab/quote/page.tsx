import CollabFormContainer from "@/components/collab/collab-form-container";
import { getPostTypesAction } from "@/server/actions/post-type.actions";
import { getPromotionTypesAction } from "@/server/actions/promo-type.actions";
import { redirect } from "next/navigation";

export default async function Links() {

    const [postTypes] = await getPostTypesAction({ onlyShowActive: true });
    const [promoTypes] = await getPromotionTypesAction({ onlyShowActive: true });

    if (!postTypes || !promoTypes) {
        redirect('/not-found');
    }

    const safePostTypes = postTypes?.map(pt => ({
        id: pt.id ?? '',
        name: pt.name,
        price: pt.price,
        active: pt.active ?? true,
        order: pt.order ?? 0,
        staticId: pt.staticId ?? ''
    })) ?? [];

    const safePromoTypes = promoTypes?.map(pt => ({
        id: pt.id ?? '',
        name: pt.name,
        price: pt.price,
        active: pt.active ?? true,
        order: pt.order ?? 0,
        staticId: pt.staticId ?? ''
    })) ?? [];

    return <CollabFormContainer postTypes={safePostTypes} promotionTypes={safePromoTypes} />
}