import { Router } from 'express';
import * as counterController from '../api/external/public/counter/controller';
import * as counterControlController from '../api/external/public/counter/control/controller';

const router = Router();

// Public routes
router.get('/counter', counterController.getHandler);
router.post('/counter/control', counterControlController.postHandler);

export default router;
