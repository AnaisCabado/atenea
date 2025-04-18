import { Router } from "express";
import userApiRoutes from '../routes/user/userApiRoutes.js';

const router = Router();

// rutas de api
router.use('/', userApiRoutes);

export default router;