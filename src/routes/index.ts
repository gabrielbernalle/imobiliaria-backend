import { Request, Response, Router } from 'express';
import { swaggerSpec } from '../swagger';
import personRoutes from './person';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Imobiliaria Service 0.01');
});

router.use('/api/person', personRoutes);

router.get('/api-docs', (req: Request, res: Response) => {
    res.send(swaggerSpec);
});

export default router;
