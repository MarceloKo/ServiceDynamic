import { Request, Response } from "express";
const Cadastro = require("../models/cadastroModel");



class CadastroService {
    public async get(req: Request, res: Response) {
        console.log('cadastroService')
        const response = await Cadastro.find()
        return res.json({
            Response: response
        });
    }

}

export const cadastroService = new CadastroService();