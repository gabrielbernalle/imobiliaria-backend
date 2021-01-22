import { Request, Response, Router } from 'express';
import * as controller from '../Entities/person/controller';
import * as validators from '../Entities/person/validator.ts';
import { getValidData } from '../utils/validator';
import { getByIdValidator } from '../utils/validator/common';

const router = Router();

router.post('/', validators.createValidator, async (req: Request, res: Response) => {
    const { body } = getValidData(req);

    const createdPerson = await controller.create(body);

    return res.status(201).send(createdPerson);
});

router.get('/:id', getByIdValidator, async (req: Request, res: Response) => {
    const { params } = getValidData(req);

    const findedPerson = await controller.getById(params.id);

    return res.status(200).send(findedPerson);
});

export default router;
