import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";
import { verifyToken } from "../../middleware/authApi.js";

const router = Router();

// rutas publicas


// rutas protegidas
// router.get('/register', userApiController.create);
// router.get('/login', userApiController.getByID);
// router.get('/profile', verifyToken, userApiController.getByID);
router.get('/users', verifyToken, userApiController.getAll);

export default router;