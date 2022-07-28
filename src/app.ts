import express from "express";
import mongoose from "mongoose";
import router from "./router";
export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
    this.database();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }

   private database(){
    mongoose.connect('mongodb://localhost:27017/').catch(()=>{console.log('Erro ao conectar no banco de dados')});
  }
}