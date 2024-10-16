import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TodoStatus {
    waiting = 'waiting',
    done = 'done',
}

@Entity('todos')
export class TodosModel extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar'})
    title: string

    @Column({type: 'enum', enum: TodoStatus})
    status: TodoStatus

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date
}