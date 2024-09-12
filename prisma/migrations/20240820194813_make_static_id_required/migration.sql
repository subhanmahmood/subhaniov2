/*
  Warnings:

  - Made the column `staticId` on table `PostType` required. This step will fail if there are existing NULL values in that column.
  - Made the column `staticId` on table `PromotionType` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."PostType" ALTER COLUMN "staticId" SET NOT NULL;

-- AlterTable
ALTER TABLE "public"."PromotionType" ALTER COLUMN "staticId" SET NOT NULL;
