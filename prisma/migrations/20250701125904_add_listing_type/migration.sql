-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "listingTypeId" INTEGER;

-- CreateTable
CREATE TABLE "ListingType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ListingType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_listingTypeId_fkey" FOREIGN KEY ("listingTypeId") REFERENCES "ListingType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
