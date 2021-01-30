import { Person } from '../../../database/entities/Person';
import { HttpError } from '../../../utils/errors/HttpError';
import { PersonInterface, QueryUserInterface } from '../interfaces';

import * as repository from '../repository';
import { removeSecretProperties } from '../utils';
import { authenticate } from '../utils/auth';

export const auth = async (
    email: string,
    password: string,
): Promise<{ user?: Person; token?: string }> => {
    const user = await repository.getOne({ email });

    return authenticate(user!, password);
};

export const create = async (
    personBody: PersonInterface,
): Promise<PersonInterface> => {
    try {
        const user = await repository.create(personBody);

        return removeSecretProperties(user);
    } catch {
        throw new HttpError(400, 'Já existe usuário com este email');
    }
};

export const getOne = async (
    query: QueryUserInterface,
): Promise<Person | undefined> => {
    const res = await repository.getOne(query);

    if (!res) throw new HttpError(404, 'Person Not Found!');

    return res;
};
