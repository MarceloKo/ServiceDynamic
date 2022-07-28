import { Request, Response } from "express";
import  baseService  from "../service/baseService";
import BaseController from "./baseController";

class CadastroController extends BaseController {
  /**
   *
   */
  constructor() {
    super();
    
  }

  public create(req:Request, res:Response) {
    return res.json({
      Response: "Cadastrar unico"
  });
  }
}
export const cadastroController = new CadastroController();
