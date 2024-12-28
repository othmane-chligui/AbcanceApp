import { Router } from "express";
import { matiereController } from "../Controllers/matiereController.js";

const router = Router();

router.get("/", matiereController.getAll);
router.get("/:id", matiereController.getOne);
router.post("/", matiereController.create);
router.put("/:id", matiereController.update);
router.delete("/:id", matiereController.delete);

export { router as matiereRouter };
