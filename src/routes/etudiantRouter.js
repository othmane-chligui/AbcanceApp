import { Router } from "express";
import { etudiantController } from "../Controllers/etudiantController.js";

const router = Router();

router.get("/", etudiantController.getAll);
router.get("/:id", etudiantController.getOne);
router.post("/", etudiantController.create);
router.put("/:id", etudiantController.update);
router.delete("/:id", etudiantController.delete);

export { router as etudiantRouter };
