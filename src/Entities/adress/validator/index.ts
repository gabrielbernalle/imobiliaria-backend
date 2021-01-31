import { body, oneOf, param, query } from 'express-validator';

export const createValidator = [
    body('logradouro').isString(),
    body('bairro').isString(),
    body('numero').isString(),
    body('cep').isString(),
    body('localidade').isString(),
    body('uf').isString(),
    body('complemento').isString(),
    body('valorImovel').isNumeric(),
];

export const queryValidator = [
    oneOf([
        body('logradouro').isString(),
        body('bairro').isString(),
        body('numero').isString(),
        body('cep').isString(),
        body('localidade').isString(),
        body('uf').isString(),
        body('complemento').isString(),
        body('valorImovel').isNumeric(),
        query('propertieId').isUUID(),
    ]),
];

export const updateValidator = [
    body('logradouro').optional().isString(),
    body('bairro').optional().isString(),
    body('numero').optional().isString(),
    body('cep').optional().isString(),
    body('localidade').optional().isString(),
    body('uf').optional().isString(),
    body('complemento').optional().isString(),
    body('valorImovel').optional().isNumeric(),
    body('propertieId').optional().isUUID(),
    param('propertieId').isUUID(),
];
