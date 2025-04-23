import { Router } from "express";
import eventApiController from "../../controllers/event/eventApiController.js";

const router = Router();

// rutas publicas

// rutas protegidas
router.get('/events', eventApiController.getAll);
router.get('/events/:date', eventApiController.getByDate);

export default router;