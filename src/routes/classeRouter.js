import { Router } from "express";
import { classeController } from "../Controllers/classeController.js";

const router = Router();

router.get("/", classeController.getAll);
router.get("/:id", classeController.getOne);
router.post("/", classeController.create);
router.put("/:id", classeController.update);
router.delete("/:id", classeController.delete);

export { router as classeRouter };
