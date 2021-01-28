import { Request, Response, Router } from 'express';
import * as controller from '../Entities/propertie/controller';
import { getValidData } from '../utils/validator';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const { body } = getValidData(req);

    const createdPropertie = await controller.create(req.body);

    return res.status(201).send(createdPropertie);
});

export default router;
