import { Address } from '../../../database/entities/Address';
import { Person } from '../../../database/entities/Person';

export interface PropertieInterface {
    id?: string;
    type: 'casa' | 'apartamento';
    roomsAmount: number;
    suitesAmount: number;
    livingRoomsAmount: number;
    diningRoomsAmount: number;
    parkingAmount: number;
    builtInCabinetsAmount: number;

    floor?: number;
    condominiumValue?: number;
    fullConcierge?: boolean;

    description?: string;

    ownerId: string;
    adress: Address;
    owner: Person;
}

export interface CreatePropertieInterface {
    type: 'casa' | 'apartamento';
    roomsAmount: number;
    suitesAmount: number;
    livingRoomsAmount: number;
    diningRoomsAmount: number;
    parkingAmount: number;
    builtInCabinetsAmount: number;

    floor?: number;
    condominiumValue?: number;
    fullConcierge?: boolean;

    description?: string;

    adress: Address;
}
