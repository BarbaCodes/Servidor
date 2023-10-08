-- CreateTable
CREATE TABLE "Cidadao" (
    "cpf" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "ficha" INTEGER NOT NULL,

    CONSTRAINT "Cidadao_pkey" PRIMARY KEY ("cpf")
);
