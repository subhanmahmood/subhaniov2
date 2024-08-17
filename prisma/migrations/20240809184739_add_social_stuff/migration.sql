-- CreateTable
CREATE TABLE "public"."PostType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PostType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DiscountRule" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "discountPercent" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiscountRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."QualifyingPostType" (
    "id" TEXT NOT NULL,
    "discountRuleId" TEXT NOT NULL,
    "postTypeId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "QualifyingPostType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PromotionType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PromotionType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QualifyingPostType_discountRuleId_postTypeId_key" ON "public"."QualifyingPostType"("discountRuleId", "postTypeId");

-- AddForeignKey
ALTER TABLE "public"."QualifyingPostType" ADD CONSTRAINT "QualifyingPostType_discountRuleId_fkey" FOREIGN KEY ("discountRuleId") REFERENCES "public"."DiscountRule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QualifyingPostType" ADD CONSTRAINT "QualifyingPostType_postTypeId_fkey" FOREIGN KEY ("postTypeId") REFERENCES "public"."PostType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
