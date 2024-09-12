export type DiscountRule = {
    type: 'percentage' | 'fixed';
    value: number;
};

export type DiscountConfig = {
    promotionTypes: {
        allSelected: DiscountRule;
    };
    reuseRights: {
        withAllPromotionTypes: DiscountRule;
    };
};

export const discountConfig: DiscountConfig = {
    promotionTypes: {
        allSelected: {
            type: 'fixed',
            value: 50
        }
    },
    reuseRights: {
        withAllPromotionTypes: {
            type: 'fixed',
            value: 100
        }
    }
};