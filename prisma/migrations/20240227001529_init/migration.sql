-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "tokenId" TEXT NOT NULL,
    "tokenName" TEXT NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);
