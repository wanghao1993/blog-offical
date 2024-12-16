/*
  Warnings:

  - You are about to drop the column `like_count` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "like_count",
ADD COLUMN     "like_posts" TEXT[];
