import { getRepository } from 'typeorm';
import { Propertie } from '../../../database/entities/Propertie';
import { CreatePropertieInterface } from '../interfaces';

export const create = async (
    ownerId: string,
    propertie: CreatePropertieInterface,
): Promise<Propertie> => {
    const propertieEntity = Object.assign(new Propertie(), propertie, { ownerId });

    return getRepository(Propertie).save(propertieEntity);
};
