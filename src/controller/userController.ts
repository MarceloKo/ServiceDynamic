import { Request, Response } from "express";
import BaseService from "../service/baseService";
import BaseController from "./baseController";
import User from "../models/userModel";
class UserController extends BaseController {

  constructor() {
    super(new BaseService(User)); 
  }
}
export default UserController;
