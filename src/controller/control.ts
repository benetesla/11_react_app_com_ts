import {Request, Response} from "express"

//model
import {MovieModel} from "../model/movie"

//logger
import logger from "../../config/logger"

export async function createMovie(req:Request, res:Response){
    return res.status(200).send("Api Working");
}

