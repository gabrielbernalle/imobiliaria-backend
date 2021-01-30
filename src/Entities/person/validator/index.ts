import { body, oneOf, query } from 'express-validator';

export const createValidator = [
    body('name').isString(),
    body('email').isEmail(),
    body('password').isString().isLength({ min: 5 }),
];

export const authValidator = [
    body('password').isString().isLength({ min: 5 }),
    body('email').isEmail(),
];

export const queryValidator = [
    oneOf([
        query('name').isString(),
        query('id').isUUID(),
        query('email').isEmail(),
    ]),
];
