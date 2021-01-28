import { getRepository } from 'typeorm';
import { Propertie } from '../../../database/entities/Propertie';
import { PropertieInterface } from '../interfaces';

export const create = async (propertie: PropertieInterface): Promise<Propertie> => {
    const propertieEntity = Object.assign(new Propertie(), propertie);

    return getRepository(Propertie).save(propertieEntity);
};
