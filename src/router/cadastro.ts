import { Router } from "express";
import  CadastroController  from "../controller/cadastroController";

const router: Router = Router()
const cadastroController = new CadastroController()

router.get("/", (req,res)=> cadastroController.index(req,res));
router.post("/", (req,res)=> cadastroController.create(req,res));

export default router;
