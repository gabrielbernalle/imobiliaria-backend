import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1611888621921 implements MigrationInterface {
    name = 'createTables1611888621921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adresses" ("propertieId" uuid NOT NULL, "logradouro" character varying NOT NULL, CONSTRAINT "REL_05cbd951b0df6bdb7b2a9bcc21" UNIQUE ("propertieId"), CONSTRAINT "PK_05cbd951b0df6bdb7b2a9bcc21f" PRIMARY KEY ("propertieId"))`);
        await queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_928155276ca8852f3c440cc2b2c" UNIQUE ("email"), CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_05cbd951b0df6bdb7b2a9bcc21f" FOREIGN KEY ("propertieId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_05cbd951b0df6bdb7b2a9bcc21f"`);
        await queryRunner.query(`DROP TABLE "persons"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
        await queryRunner.query(`DROP TABLE "properties"`);
    }

}
