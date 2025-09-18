import { Router } from "express";
import { createTiquetera, deleteTiquetera, getTiqueteras, getTiqueterasById, updateTiquetera} from "../controllers/tiqueteraController.js";

const router = Router();

router.post("/", createTiquetera);
router.get("/", getTiqueteras);
router.get("/:id", getTiqueterasById);
router.put("/:id", updateTiquetera);
router.delete("/:id", deleteTiquetera);

export default router;