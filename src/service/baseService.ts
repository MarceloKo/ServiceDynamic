import { Request, Response } from "express";
import User from "../models/userModel";
class BaseService {
    private _model:any;
    constructor(model:any){
        this._model = model;
    }
    
    public async get() {
        return await this._model.find()
    }

    public async post(body:object) {
        return await this._model.create(body)
            .then((resp:any)=>{
                return resp
            })
            .catch((err:any)=>{
                return `${err._message}`
            })
    }
}

export default BaseService;