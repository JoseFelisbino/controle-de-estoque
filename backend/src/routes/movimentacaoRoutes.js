import express from "express";
import * as controller from "../controllers/movimentacaoController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", controller.criar);
router.get("/", controller.listar);

export default router;