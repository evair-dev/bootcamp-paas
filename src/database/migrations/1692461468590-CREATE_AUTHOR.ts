import { MigrationInterface, QueryRunner } from "typeorm";

export class CREATEAUTHOR1692461468590 implements MigrationInterface {
    name = 'CREATEAUTHOR1692461468590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "authors" (
                "id" SERIAL NOT NULL,
                "name" character varying(100) NOT NULL,
                "resume" text NOT NULL,
                CONSTRAINT "PK_d2ed02fabd9b52847ccb85e6b88" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "authors"
        `);
    }

}
