/*
  Warnings:

  - Added the required column `horariosAtendimento` to the `Servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Servicos" ADD COLUMN     "horariosAtendimento" TEXT NOT NULL;
