import { Request, Response, Router } from 'express';
import * as controller from '../Entities/properties/controller';
import { getValidData } from '../utils/validator';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const { body } = getValidData(req);

    const createdPerson = await controller.create(req.body);

    return res.status(201).send(createdPerson);
});

export default router;
