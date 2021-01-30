import { body, CustomValidator } from 'express-validator';

const validateApartamentProps: CustomValidator = (
    value: 'casa' | 'apartamento',
    { req },
) => {
    if (value === 'apartamento') {
        return apartamentValidator.map(validator => validator.run(req));
    }

    return true;
};

const apartamentValidator = [
    body('floor').isInt(),
    body('condominiumValue').isNumeric(),
    body('fullConcierge').isBoolean(),
];

export const createPropertieValidator = [
    body('type').isIn(['casa', 'apartamento']).custom(validateApartamentProps),
    body('roomsAmount').isInt(),
    body('suitesAmount').isInt(),
    body('livingRoomsAmount').isInt(),
    body('diningRoomsAmount').isInt(),
    body('parkingAmount').isInt(),
    body('builtInCabinetsAmount').isInt(),
    body('description').isString().optional(),
    body('adress').exists(),
];
