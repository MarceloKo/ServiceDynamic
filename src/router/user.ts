import { Router } from "express";
import  UserController  from "../controller/userController";

const router: Router = Router()
const userController = new UserController()

router.get("/", (req,res)=> userController.index(req,res));
router.post("/", (req,res)=> userController.create(req,res));


export default router;
