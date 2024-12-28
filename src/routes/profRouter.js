import { Router } from "express";
import { profController } from "../Controllers/profController.js";

const router = Router();

router.get("/", profController.getAll);
router.get("/:id", profController.getOne);
router.post("/", profController.create);
router.post("/login", profController.login);
router.put("/:id", profController.update);
router.delete("/:id", profController.delete);

export { router as profRouter };
