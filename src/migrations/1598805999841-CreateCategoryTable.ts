import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategoryTable1598805999841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'category',
            columns:[{
                name: 'id',
                type: 'Integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'

            },
            {
                name: 'name',
                type: 'varchar',
            },
            {
                name: 'created_at',
                type: 'datetime',
            }
            
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category');
    }

}
