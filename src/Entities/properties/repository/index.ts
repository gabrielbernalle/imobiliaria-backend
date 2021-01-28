import { getRepository } from 'typeorm';
import { Adress } from '../../../database/entities/Adress';
import { Properties } from '../../../database/entities/Properties';
import { PropertyInterface } from '../interfaces';

export const create = async (property: PropertyInterface): Promise<Properties> => {
    const entity = Object.assign(new Properties(),{ });
    const x = await getRepository(Properties).save(entity);
    x.adress = await getRepository(Adress).save({
        propertyId: x.id,
        logradouro: property.adress.logradouro,
    });
    return x;
};
