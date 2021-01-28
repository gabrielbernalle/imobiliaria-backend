import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Propertie } from './Propertie';

@Entity('adresses')
export class Address {
    @OneToOne(() => Propertie, propertie => propertie.id, {
        primary: true,
    })
    @JoinColumn({ name: 'propertieId' })
    propertie: Propertie;

    @Column('uuid', { primary: true })
    propertieId: string;

    @Column({ nullable: false })
    logradouro: string;
}
