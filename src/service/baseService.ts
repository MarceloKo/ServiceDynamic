import { Request, Response } from "express";
import User from "../models/userModel";
class BaseService {

    public async get(req: Request, res: Response) {
        console.log('entrou')
        // const response = await User.find()
        return res.json({
            Response: "entrou no get"
        });
    }

    public async post(req: Request, res: Response) {
        await User.create({name:"teste"});
        return res.json({
            response: 'Aqui faz a requisição padrao post'
        });
    }
}

export default BaseService;