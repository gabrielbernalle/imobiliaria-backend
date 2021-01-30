import { Request, Response, Router } from 'express';
import * as controller from '../Entities/person/controller';
import * as validators from '../Entities/person/validator';
import { getValidData } from '../utils/validator';
import { removeSecretProperties } from '../Entities/person/utils';
import { authMidleware } from '../Entities/person/utils/auth';

const router = Router();

router.post(
    '/authenticate',
    validators.authValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const { token, user } = await controller.auth(body.email, body.password);

        return res.status(200).send({ token, ...removeSecretProperties(user!) });
    },
);

router.use(authMidleware);

router.post('/', validators.createValidator, async (req: Request, res: Response) => {
    const { body } = getValidData(req);

    const createdPerson = await controller.create(body);

    return res.status(201).send(createdPerson);
});

router.get('/', validators.queryValidator, async (req: Request, res: Response) => {
    const { query } = getValidData(req);

    const findedPerson = await controller.getOne(query);

    return res.status(200).send(findedPerson);
});

router.put(
    '/:id',
    validators.updateValidator,
    async (req: Request, res: Response) => {
        const { params, body } = getValidData(req);

        const updatedPerson = await controller.update(params.id, body);

        return res.status(200).send(updatedPerson);
    },
);

export default router;
