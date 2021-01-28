import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1611830285282 implements MigrationInterface {
    name = 'createTables1611830285282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adress" ("propertyId" uuid NOT NULL, "logradouro" character varying NOT NULL, CONSTRAINT "REL_24394d1d35f465ab4447c278ab" UNIQUE ("propertyId"), CONSTRAINT "PK_24394d1d35f465ab4447c278abc" PRIMARY KEY ("propertyId"))`);
        await queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_928155276ca8852f3c440cc2b2c" UNIQUE ("email"), CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adress" ADD CONSTRAINT "FK_24394d1d35f465ab4447c278abc" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adress" DROP CONSTRAINT "FK_24394d1d35f465ab4447c278abc"`);
        await queryRunner.query(`DROP TABLE "persons"`);
        await queryRunner.query(`DROP TABLE "adress"`);
        await queryRunner.query(`DROP TABLE "properties"`);
    }

}
