import { AddressInterface } from '../interfaces';

export const removeSecretProperties = (
    address: AddressInterface,
): AddressInterface => {
    const addressCpy = { ...address };

    delete addressCpy.propertieId;
    delete addressCpy.bairro;

    return addressCpy;
};
