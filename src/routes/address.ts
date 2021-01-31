import { Request, Response, Router } from 'express';
import * as controller from '../Entities/adress/controller';
import * as validators from '../Entities/adress/validator';
import { getValidData } from '../utils/validator';

const router = Router();

router.get('/', validators.queryValidator, async (req: Request, res: Response) => {
    const { query } = getValidData(req);

    const findedAddress = await controller.getOne(query);

    return res.status(200).send(findedAddress);
});

router.put(
    '/:propertieId',
    validators.updateValidator,
    async (req: Request, res: Response) => {
        const { params, body } = getValidData(req);

        const updatedAddress = await controller.update(params.id, body);

        return res.status(200).send(updatedAddress);
    },
);

export default router;
