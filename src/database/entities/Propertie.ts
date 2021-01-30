import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    Column,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { ColumnNumericTransformer } from '../transformers';
import { Address } from './Address';
import { Person } from './Person';

@Entity('properties')
export class Propertie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Address, address => address.propertie, {
        cascade: true,
    })
    adress: Address;

    @ManyToOne(() => Person, person => person.id, {
        cascade: ['remove'],
    })
    @JoinColumn({ name: 'ownerId' })
    owner: Person;

    @Column('uuid', { nullable: false })
    ownerId: string;

    @Column({ nullable: false })
    type: 'casa' | 'apartamento';

    @Column({ nullable: false, type: 'int' })
    roomsAmount: number;

    @Column({ nullable: false, type: 'int', default: 0 })
    suitesAmount: number;

    @Column({ nullable: false, type: 'int' })
    livingRoomsAmount: number;

    @Column({ nullable: false, type: 'int' })
    diningRoomsAmount: number;

    @Column({ nullable: false, type: 'int', default: 0 })
    parkingAmount: number;

    @Column({ nullable: false, type: 'int', default: 0 })
    builtInCabinetsAmount: number;

    @Column({ type: 'int', nullable: true })
    floor?: number;

    @Column('numeric', {
        transformer: new ColumnNumericTransformer(),
        nullable: true,
    })
    condominiumValue?: number;

    @Column({ nullable: true })
    fullConcierge?: boolean;

    @Column({ nullable: true })
    description?: string;
}
