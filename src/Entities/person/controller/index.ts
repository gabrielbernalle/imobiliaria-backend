import { Person } from '../../../database/entities/Person';
import { HttpError } from '../../../utils/errors/HttpError';
import { PersonInterface } from '../interfaces';

import * as repository from '../repository';

export const create = async (
    personBody: PersonInterface,
): Promise<PersonInterface> => {
    try {
        return await repository.create(personBody);
    } catch {
        throw new HttpError(400, 'Já existe usuário com este email');
    }
};

export const getById = async (personId: string): Promise<Person | undefined> => {
    const res = await repository.getById(personId);

    if (!res) throw new HttpError(404, 'Person Not Found!');

    return res;
};
