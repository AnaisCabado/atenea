import { Router } from "express";
import userApiController from "../../controllers/user/userApiController.js";

const router = Router();

// rutas publicas


// rutas protegidas
router.get('/', userApiController.getAll);
router.get('/create', userApiController.create);

router.get('/username/:username', userApiController.getByUsername);
router.get('/:id', userApiController.getByID);
router.get('/:id/edit', userApiController.edit);
router.get("/:id/delete", userApiController.remove);


export default router;