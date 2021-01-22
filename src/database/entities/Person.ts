import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('persons')
export class Person {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;
}
