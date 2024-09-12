/*
  Warnings:

  - You are about to drop the `DiscountRule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `QualifyingPostType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."QualifyingPostType" DROP CONSTRAINT "QualifyingPostType_discountRuleId_fkey";

-- DropForeignKey
ALTER TABLE "public"."QualifyingPostType" DROP CONSTRAINT "QualifyingPostType_postTypeId_fkey";

-- DropTable
DROP TABLE "public"."DiscountRule";

-- DropTable
DROP TABLE "public"."QualifyingPostType";

-- CreateTable
CREATE TABLE "public"."Lead" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "companyName" TEXT,
    "projectDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
