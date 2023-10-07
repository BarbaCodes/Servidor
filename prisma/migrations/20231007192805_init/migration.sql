/*
  Warnings:

  - You are about to drop the column `email` on the `Funcionario` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Funcionario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[senha]` on the table `Funcionario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Funcionario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('enviado', 'lido', 'agendado');

-- DropIndex
DROP INDEX "Funcionario_email_key";

-- AlterTable
ALTER TABLE "Funcionario" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "cpf" INTEGER NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Requerimentos" (
    "protocolo" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "grauUrgencia" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'enviado',

    CONSTRAINT "Requerimentos_pkey" PRIMARY KEY ("protocolo")
);

-- CreateTable
CREATE TABLE "Servicos" (
    "id" SERIAL NOT NULL,
    "nomeDoutor" TEXT NOT NULL,
    "ubsNome" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "hora" TEXT NOT NULL,

    CONSTRAINT "Servicos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_senha_key" ON "Funcionario"("senha");
