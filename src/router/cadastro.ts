import { Router } from "express";
import { cadastroController } from "../controller/cadastroController";

const router: Router = Router()

router.get("/", cadastroController.index);

export default router;
