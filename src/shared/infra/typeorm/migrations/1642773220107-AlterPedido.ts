import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterPedido1642773220107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("pedidos", new TableColumn({
            name: "status",
            type: "varchar",
            isNullable: true
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("pedidos", "status");
    }

}
