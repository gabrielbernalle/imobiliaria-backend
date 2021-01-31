import { Entity, Column, OneToOne, JoinColumn, Double } from 'typeorm';
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

    @Column({ nullable: false })
    bairro: string;

    @Column({ nullable: false })
    numero: string;

    @Column({ nullable: false })
    cep: string;

    @Column({ nullable: false })
    localidade: string;

    @Column({ nullable: false })
    uf: string;

    @Column({ nullable: false }) // Poderia ser opcional?
    complemento: string;

    @Column({ unique: true, nullable: false })
    valorImovel: Double;
}
