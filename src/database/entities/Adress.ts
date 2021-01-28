import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    PrimaryColumn,
} from 'typeorm';
import { Properties } from './Properties';

@Entity('adress')
export class Adress {
    @OneToOne(() => Properties, property => property.id, {
        primary: true,
        cascade: true,
    })
    @JoinColumn({ name: 'propertyId' })
    property: Properties;

    @Column('uuid', { primary: true })
    propertyId: string;

    @Column()
    logradouro: string;
}
