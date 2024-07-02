-- DropForeignKey
ALTER TABLE "public"."Link" DROP CONSTRAINT "Link_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."LinkClick" DROP CONSTRAINT "LinkClick_linkId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Link" ADD CONSTRAINT "Link_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LinkClick" ADD CONSTRAINT "LinkClick_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "public"."Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;
