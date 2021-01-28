import { Propertie } from '../../../database/entities/Propertie';
import { PropertieInterface } from '../interfaces';
import * as repository from '../repository';

export const create = async (
    propertieBody: PropertieInterface,
): Promise<Propertie> => {
    return repository.create(propertieBody);
};
