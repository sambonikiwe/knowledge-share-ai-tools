-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "summary" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "model" TEXT NOT NULL DEFAULT 'unknown',
    "year" TEXT NOT NULL DEFAULT 'unknown'
);
INSERT INTO "new_Car" ("id", "imageUrl", "name", "overview", "price", "summary") SELECT "id", "imageUrl", "name", "overview", "price", "summary" FROM "Car";
DROP TABLE "Car";
ALTER TABLE "new_Car" RENAME TO "Car";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
