import { Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Address } from './Address';

@Entity('properties')
export class Propertie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Address, address => address.propertie, {
        cascade: true,
    })
    adress: Address;
}
