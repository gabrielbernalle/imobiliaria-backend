import { createQueryBuilder, getRepository } from 'typeorm';
import { Address } from '../../../database/entities/Address';
import {
    CreateAddressInterface,
    AddressInterface,
    ConsultAddressInterface,
    UpdateAddressInterface,
    AddressReturnColumns,
} from '../interfaces';

export const create = async (
    addressObject: CreateAddressInterface,
    returning: '*' | AddressReturnColumns[] = '*',
): Promise<AddressInterface> => {
    const addressEntity = Object.assign(new Address(), addressObject);

    const { raw } = await createQueryBuilder(Address)
        .insert()
        .values(addressEntity)
        .returning(returning)
        .execute();

    return raw[0];
};

export const getOne = async (
    query: ConsultAddressInterface,
    returning?: AddressReturnColumns[],
): Promise<Address | undefined> => {
    return getRepository(Address).findOne(query, {
        select: returning,
    });
};

export const update = async (
    id: string,
    updates: UpdateAddressInterface,
    returning: '*' | AddressReturnColumns[] = [
        'propertieId',
        'logradouro',
        'bairro',
        'numero',
        'cep',
        'localidade',
        'uf',
        'complemento',
        'valorImovel',
    ],
): Promise<Address | undefined> => {
    const updateRes = await createQueryBuilder()
        .update(Address, Object.assign(new Address(), updates))
        .where({ id })
        .returning(returning)
        .execute();

    return updateRes.raw;
};
