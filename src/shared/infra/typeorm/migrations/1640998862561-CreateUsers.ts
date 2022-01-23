import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1640470070631 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pacientes",
                columns: [
                    
                    {
                        name: "codigo",
                        type: "integer",
                        isGenerated : true , 
                        generationStrategy : 'increment',
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "sexo",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "int8",
                        isUnique: true,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pacientes");
    }

}
