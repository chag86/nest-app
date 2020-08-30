import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { table } from "console";
import { identity } from "rxjs";

export class CreateUserTable1598801673083 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'user',
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
                name: 'email',
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
        await queryRunner.dropTable('user');
    }

}
