import { Router } from "express";
import publicationApiController from "../../controllers/publication/publicationApiController.js";

const router = Router();

// rutas publicas

// rutas protegidas
router.get('/publications/:id', publicationApiController.getByID);
router.get('/publications', publicationApiController.getAll);
// router.get('/publications/date', publicationApiController.getByDate);

export default router;