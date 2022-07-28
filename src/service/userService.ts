import { Request, Response } from "express";
const User = require("../models/userModel");



class UserService {
    public async get(req: Request, res: Response) {
        console.log('userService')

        const response = await User.find()
        return res.json({
            Response: response
        });
    }

    public async post(req: Request, res: Response) {
        await User.create({name:"teste"});
        return res.json({
            response: 'Aqui faz a requisição padrao post'
        });
    }
}

export const userService = new UserService();