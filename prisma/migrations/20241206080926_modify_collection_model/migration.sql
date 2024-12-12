/*
  Warnings:

  - You are about to drop the column `anime_image` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `anime_image`,
    ADD COLUMN `anime_images` VARCHAR(191) NULL;
