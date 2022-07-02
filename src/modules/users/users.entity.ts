import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telephone: string;

    @Column()
    active: boolean;

    @Column()
    isWhatsapp: string;

    @CreateDateColumn()
    createdAt: Date;
}