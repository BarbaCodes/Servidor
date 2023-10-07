/*
  Warnings:

  - You are about to drop the column `data` on the `Servicos` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `Servicos` table. All the data in the column will be lost.
  - Added the required column `ficha` to the `Servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Servicos" DROP COLUMN "data",
DROP COLUMN "hora",
ADD COLUMN     "ficha" INTEGER NOT NULL;
