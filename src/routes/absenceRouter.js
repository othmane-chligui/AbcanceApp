import { Router } from "express";
import { absenceController } from "../Controllers/absenceController.js";

const router = Router();

router.get("/", absenceController.getAll);
router.get("/:id", absenceController.getOne);
router.post("/", absenceController.create);
router.put("/:id", absenceController.update);
router.delete("/:id", absenceController.delete);

export { router as absenceRouter };
