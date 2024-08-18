-- AlterTable
ALTER TABLE "public"."PromotionType" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "order" SERIAL NOT NULL;
