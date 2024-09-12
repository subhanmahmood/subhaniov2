import { type DiscountConfig } from '@/config/discounts';
import { type PostType, type PromotionType } from '@prisma/client';

export function calculateDiscount(
  originalPrice: number,
  discountRule: { type: 'percentage' | 'fixed', value: number }
): number {
  if (discountRule.type === 'percentage') {
    return originalPrice * (1 - discountRule.value / 100);
  } else {
    return originalPrice - discountRule.value;
  }
}

export function applyDiscounts(
  postType: PostType,
  selectedPromotionTypes: PromotionType[],
  reuseRights: boolean,
  allPromotionTypes: PromotionType[],
  discountConfig: DiscountConfig
): { original: number; discounted: number } {
  let originalPrice = postType.price;
  let discountedPrice = postType.price;

  // Add promotion types prices
  const promotionTypePrice = selectedPromotionTypes.reduce((sum, pt) => sum + pt.price, 0);
  originalPrice += promotionTypePrice;
  discountedPrice += promotionTypePrice;

  // Apply promotion types discount if all are selected
  if (selectedPromotionTypes.length === allPromotionTypes.length) {
    discountedPrice = calculateDiscount(discountedPrice, discountConfig.promotionTypes.allSelected);
  }

  // Add and potentially discount reuse rights
  if (reuseRights) {
    const reuseRightsPrice = 200;
    originalPrice += reuseRightsPrice;
    if (selectedPromotionTypes.length === allPromotionTypes.length) {
      discountedPrice += (reuseRightsPrice - discountConfig.reuseRights.withAllPromotionTypes.value);
    } else {
      discountedPrice += reuseRightsPrice;
    }
  }

  return { original: originalPrice, discounted: discountedPrice };
}