import { Router } from "express";
import userApiRoutes from './user/userApiRoutes.js';
import publicationRoutes from './publication/publicationApiRoutes.js';

const router = Router();

// rutas de api
router.use('/', userApiRoutes);
router.use('/', publicationRoutes);

export default router;