import { Double } from 'typeorm/driver/mongodb/typings';

export interface AddressInterface {
    propertieId?: string;
    logradouro: string;
    bairro?: string;
    numero: string;
    cep: string;
    localidade: string;
    uf: string;
    complemento?: string;
    valorImovel: Double;
}

export type ConsultAddressInterface = Partial<Omit<AddressInterface, 'password'>>;
export type CreateAddressInterface = Omit<AddressInterface, 'id'>;
export type UpdateAddressInterface = Partial<CreateAddressInterface>;
export type AddressReturnColumns =
    | 'propertieId'
    | 'logradouro'
    | 'bairro'
    | 'numero'
    | 'cep'
    | 'localidade'
    | 'uf'
    | 'complemento'
    | 'valorImovel';
