CREATE TABLE "coordenadas" (
	"id" SERIAL NOT NULL,
	"nome" VARCHAR(255) NOT NULL,
	"latitude" NUMERIC(10,7) NOT NULL,
	"longitude" NUMERIC(10,7) NOT NULL,
	"created_at" TIMESTAMP NULL DEFAULT NULL,
	"updated_at" TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY ("id")
)
;
COMMENT ON COLUMN "coordenadas"."id" IS '';
COMMENT ON COLUMN "coordenadas"."nome" IS '';
COMMENT ON COLUMN "coordenadas"."latitude" IS '';
COMMENT ON COLUMN "coordenadas"."longitude" IS '';
COMMENT ON COLUMN "coordenadas"."created_at" IS '';
COMMENT ON COLUMN "coordenadas"."updated_at" IS '';
