import { Request, Response, Router } from 'express';
import { swaggerSpec } from '../swagger';
import personRoutes from './person';
import propertieRoutes from './propertie';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Imobiliaria Service 0.01');
});

router.use('/api/person', personRoutes);

router.get('/api-docs', (req: Request, res: Response) => {
    res.send(swaggerSpec);
});

router.use('/api/propertie', propertieRoutes);

export default router;
