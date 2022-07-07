import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('schedulers')
class Scheduler extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column()
    userId: string;

    @Column()
    status: boolean;

    @CreateDateColumn()
    createdAt: Date;
}

export { Scheduler }