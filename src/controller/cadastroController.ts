import { Request, Response } from "express";
import cadastroModel from "../models/cadastroModel";
import BaseService from "../service/baseService";
import  baseService  from "../service/baseService";
import BaseController from "./baseController";

class CadastroController extends BaseController {
  /**
   *
   */
  constructor() {
    super(new BaseService(cadastroModel));
    
  }


}
export default CadastroController;
