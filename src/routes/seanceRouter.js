import { Router } from "express";
import { seanceController } from "../Controllers/seanceController.js";

const router = Router();

router.get("/", seanceController.getAll);
router.get("/:id", seanceController.getOne);
router.post("/", seanceController.create);
router.put("/:id", seanceController.update);
router.delete("/:id", seanceController.delete);

export { router as seanceRouter };
