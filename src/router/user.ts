import { Router } from "express";
import  userController  from "../controller/userController";

const router: Router = Router()
const controller = new userController()

router.get("/", (req,res)=> controller.index(req,res));
// router.post("/create", userController.create);


export default router;
