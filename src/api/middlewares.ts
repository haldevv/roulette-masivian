import { Request, Response } from "express";
import { send } from "process";

export function validateIdExistence(request: Request, response: Response): void {
    
}
export function checkRouletteId(request: Request, response: Response, next: any):void {
    if(Object.keys(request.body).length === 0 || request.body.id === null){
        response.send({status: 400, message: 'El id de la ruleta es obligatorio'})
    } else {
        next();    
    }
}
export function validateBetCustomer(request: Request, response: Response, next: any): void {
    const customer = request.header('customer');
    if(typeof customer === 'undefined' || customer === "") {
        response.send({status: 400, message: 'Es obligatorio enviar el cliente'}); 
    } else {
        next();
    }
}
export function validateRouletteId(request: Request, response: Response, next: any): void {
    if(request.body.rouletteId === null || typeof request.body.rouletteId === 'undefined') {
        response.send({status: 400, message: 'Es obligatorio enviar el id de la ruleta'}); 
    } else {
        next();
    }
}
export function validateBetNumber(request: Request, response: Response, next: any): void {
    if(request.body.number === null || typeof request.body.number === 'undefined') {
        response.send({status: 400, message: 'Es obligatorio enviar el número para apostar'}); 
    } else if(request.body.number < 0 || request.body.number > 36){
        response.send({status: 200, message: 'El número debe estar entre 0 y 36'});
    } else {
        next();
    }
}
export function validateBetMoney(request: Request, response: Response, next: any): void {
    if(request.body.money === null || typeof request.body.money === 'undefined') {
        response.send({status: 400, message: 'Es obligatorio enviar el campo de dinero de la apuesta'}); 
    } else if(request.body.money < 0 || request.body.money > 10000){
        response.send({status: 200, message: 'El dinero debe estar entre 0 y 10000'});
    } else {
        next();
    }
}
