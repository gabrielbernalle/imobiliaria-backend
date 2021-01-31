import { Address } from '../../../database/entities/Address';
import { HttpError } from '../../../utils/errors/HttpError';
import {
    AddressInterface,
    ConsultAddressInterface,
    UpdateAddressInterface,
} from '../interfaces';

import * as repository from '../repository';

// Não sei se precisa criar as localidades ou se só adiciona, então não criei esse método

export const getOne = async (
    query: ConsultAddressInterface,
): Promise<AddressInterface | undefined> => {
    const res = await repository.getOne(query, ['propertieId', 'bairro']);

    if (!res) throw new HttpError(404, 'Address Not Found!');

    return res;
};

export const update = async (
    id: string,
    updates: UpdateAddressInterface,
): Promise<AddressInterface | undefined> => {
    const res = await repository.update(id, updates, [
        'propertieId',
        'logradouro',
        'bairro',
        'numero',
        'cep',
        'localidade',
        'uf',
        'complemento',
        'valorImovel',
    ]);

    if (!res) throw new HttpError(404, 'Address Not Found!');

    return res;
};
