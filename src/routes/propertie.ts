import { Request, Response, Router } from 'express';
import { authMidleware } from '../Entities/person/utils/auth';
import * as controller from '../Entities/propertie/controller';
import * as validators from '../Entities/propertie/validator';
import { getValidData } from '../utils/validator';

const router = Router();

router.use(authMidleware);

router.post(
    '/',
    validators.createPropertieValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const createdPropertie = await controller.create(
            req.headers.authorization!,
            body,
        );

        return res.status(201).send(createdPropertie);
    },
);

export default router;
