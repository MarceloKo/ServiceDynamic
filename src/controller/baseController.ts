import { Request, Response } from "express";
import BaseService from "../service/baseService";
class BaseController{
    public _baseService;

    constructor(service:any){
      this._baseService = service
    }

    public async index(req:Request, res:Response) {
      return res.json({response: await this._baseService.get()}) 
    }
    
    public async create(req:Request, res:Response) {
      return res.json({response: await this._baseService.post(req.body)}) 
    }


}
export default BaseController;