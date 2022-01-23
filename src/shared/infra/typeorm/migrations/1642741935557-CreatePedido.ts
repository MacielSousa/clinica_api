import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePedido1642741935557 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "pedidos",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "codigo",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "ordemServico",
                        type: "integer",
                        isGenerated : true , 
                        generationStrategy : 'increment',
                        isUnique: true,
                    },
                    {
                        name: "paciente_id",
                        type: "integer",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKPacientePedido",
                        referencedTableName: "pacientes",
                        referencedColumnNames: ["codigo"],
                        columnNames: ["paciente_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pedidos");
    }

}
