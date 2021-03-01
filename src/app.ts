import 'reflect-metadata'
import express, { NextFunction } from 'express';
import 'express-async-errors';
import { Request,Response} from "express";
import createConnection from  './database';
import { router } from './routes';
import { AppError } from './errors/AppError';

createConnection();
const app = express();

app.use(express.json());//habilita pra trabalhar com o formato .json vindo la do bd
app.use(router);

app.use((err: Error, request: Request, response: Response, _next: NextFunction)=>{
    if(err instanceof AppError){
        return response.status(400).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: "Error",
        message: `Internet server error ${err.message}`,
    })
})

export{app};