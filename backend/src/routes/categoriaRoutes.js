import express from "express";
import * as controller from "../controllers/categoriaController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", controller.criar);
router.get("/", controller.listar);
router.get("/:id", controller.buscar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.deletar);

export default router;