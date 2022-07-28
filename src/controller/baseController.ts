import { Request, Response } from "express";
import BaseService from "../service/baseService";
class BaseController{
    public _baseService :BaseService;

    constructor(){
   
      this._baseService = new BaseService()
    }

    public index(req:Request, res:Response) {
      // console.log(this._baseService)
      console.log('blabla')
      this._baseService.get(req, res);
    }


}
export default BaseController;