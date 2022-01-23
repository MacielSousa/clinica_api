import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateExame1642721830634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "exames",
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
                        name: "description",
                        type: "varchar",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("exames");
    }

}
