import { Properties } from '../../../database/entities/Properties';
import { PropertyInterface } from '../interfaces';
import * as repository from '../repository';

export const create = async (personBody: PropertyInterface): Promise<Properties> => {
    return repository.create(personBody);
};
