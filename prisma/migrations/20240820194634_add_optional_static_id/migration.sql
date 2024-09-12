/*
  Warnings:

  - A unique constraint covering the columns `[staticId]` on the table `PostType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[staticId]` on the table `PromotionType` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."PostType" ADD COLUMN     "staticId" TEXT;

-- AlterTable
ALTER TABLE "public"."PromotionType" ADD COLUMN     "staticId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "PostType_staticId_key" ON "public"."PostType"("staticId");

-- CreateIndex
CREATE UNIQUE INDEX "PromotionType_staticId_key" ON "public"."PromotionType"("staticId");
