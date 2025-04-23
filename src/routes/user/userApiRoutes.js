import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";

const router = Router();

// rutas publicas

// rutas protegidas
router.get('/register', userApiController.create);
router.get('/login', userApiController.getByID);
router.get('/users/:id', userApiController.getByID);
router.get('/users', userApiController.getAll);

export default router;