import { Request, Response } from "express";

export function validateIdExistence(request: Request, response: Response): void {
    
}
export function checkRouletteId(request: Request, response: Response, next: any):void {
    if(Object.keys(request.body).length === 0 || request.body.id === null){
        response.send({status: 400, message: 'El id de la ruleta es obligatorio'})
    } else {
        next();    
    }
}