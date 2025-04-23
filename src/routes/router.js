import { Router } from "express";
import userApiRoutes from './user/userApiRoutes.js';
import publicationApiRoutes from './publication/publicationApiRoutes.js';
import eventApiRoutes from './event/eventApiRoutes.js';

const router = Router();

// rutas de api
router.use('/', userApiRoutes);
router.use('/', publicationApiRoutes);
router.use('/', eventApiRoutes);

export default router;