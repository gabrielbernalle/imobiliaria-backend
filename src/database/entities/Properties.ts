import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Adress } from './Adress';

@Entity('properties')
export class Properties {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Adress, {
        cascade: true,
    })
    adress: Adress;
}
