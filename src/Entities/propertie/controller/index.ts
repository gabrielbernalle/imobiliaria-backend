import { Propertie } from '../../../database/entities/Propertie';
import { CreatePropertieInterface } from '../interfaces';
import * as repository from '../repository';

export const create = async (
    ownerId: string,
    propertieBody: CreatePropertieInterface,
): Promise<Propertie> => {
    return repository.create(ownerId, propertieBody);
};
