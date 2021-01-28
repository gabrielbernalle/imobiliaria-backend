import { body } from 'express-validator';

export const createValidator = [body('name').isString(), body('email').isEmail()];
