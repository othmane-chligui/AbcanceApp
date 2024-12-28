import { Router } from "express";
import { groupeController } from "../Controllers/groupeController.js";

const router = Router();

router.get("/", groupeController.getAll);
router.get("/:id", groupeController.getOne);
router.post("/", groupeController.create);
router.put("/:id", groupeController.update);
router.delete("/:id", groupeController.delete);

export { router as groupeRouter };
