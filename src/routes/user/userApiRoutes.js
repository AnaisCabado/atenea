import { Router } from "express";
import userApiController from "../../controllers/user/userApiController";
import { verifyToken } from "../../middleware/authApi.js";

const router = Router();

// rutas publicas
router.post('/register', userApiController.register);
router.post('/login', userApiController.login);

// rutas protegidas
router.get('/profile', verifyToken, userApiController.profile);
router.get('/users', verifyToken, userApiController.getAll);

export default router;