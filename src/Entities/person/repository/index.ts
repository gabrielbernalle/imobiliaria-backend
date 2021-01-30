import { getRepository } from 'typeorm';
import { Person } from '../../../database/entities/Person';
import { PersonInterface, QueryUserInterface } from '../interfaces';

export const create = async (
    personObject: PersonInterface,
): Promise<PersonInterface> => {
    const personEntity = Object.assign(new Person(), personObject);

    return getRepository(Person).save(personEntity);
};

export const getOne = async (
    query: QueryUserInterface,
): Promise<Person | undefined> => {
    return getRepository(Person).findOne(query);
};
