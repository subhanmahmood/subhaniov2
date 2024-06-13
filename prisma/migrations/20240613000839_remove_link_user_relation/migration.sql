/*
  Warnings:

  - You are about to drop the column `userId` on the `Link` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_userId_fkey";

-- AlterTable
ALTER TABLE "Link" DROP COLUMN "userId";
