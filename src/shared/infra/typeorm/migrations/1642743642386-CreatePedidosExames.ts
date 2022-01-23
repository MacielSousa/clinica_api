import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePedidosExames1642743642386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pedidos_exames",
                columns: [
                    {
                        name: "pedido_id",
                        type: "varchar",
                    },
                    {
                        name: "exame_id",
                        type: "integer"
                    }
                ]
            })
        );

        await queryRunner.createForeignKey(
            "pedidos_exames",
            new TableForeignKey({
                name: "FKExamePedido",
                referencedTableName: "exames",
                referencedColumnNames: ["codigo"],
                columnNames: ["exame_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )

        await queryRunner.createForeignKey(
            "pedidos_exames",
            new TableForeignKey({
                name: "FKPedidoExame",
                referencedTableName: "pedidos",
                referencedColumnNames: ["id"],
                columnNames: ["pedido_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "pedidos_exames", "FKPedidoExame"
        )
        await queryRunner.dropForeignKey(
            "pedidos_exames", "FKExamePedido"
        )
        await queryRunner.dropTable("requests_exams");
    }

}
