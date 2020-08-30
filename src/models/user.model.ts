import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:   string;

    @Column()
    email: string;

    @CreateDateColumn({type:'datetime'})
    created_at: Date;
}
