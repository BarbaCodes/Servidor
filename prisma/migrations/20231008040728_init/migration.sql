/*
  Warnings:

  - The primary key for the `Cidadao` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Cidadao" DROP CONSTRAINT "Cidadao_pkey",
ALTER COLUMN "cpf" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cidadao_pkey" PRIMARY KEY ("cpf");

-- AlterTable
ALTER TABLE "Funcionario" ALTER COLUMN "cpf" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Requerimentos" ALTER COLUMN "cpf" SET DATA TYPE TEXT;
