import { Router } from 'express';
import * as counterController from '../api/external/public/counter/controller';

const router = Router();

// Public routes
router.get('/counter', counterController.getHandler);

export default router;
