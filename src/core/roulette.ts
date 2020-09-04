import { RedisClient } from "redis";
import { DB } from "../db/redis";
import { v1 as uuidv1 } from 'uuid';
import { Request, Response } from "express";
import { RouletteModel } from "../models/roulette_model";
import { BetModel } from "../models/bet_model";

export class Roulette {
    constructor() {}
    // function to create a new object in the db
    public async createRoulette(request: Request, response: Response) {
        const db = new DB();
        const id = uuidv1();
        const roulette: RouletteModel = {id, status: 'created', bets: []};
        try {
            const res = await db.saveData(id, JSON.stringify(roulette));
            db.closeConnection();
            response.send({status: 200, id});   
        } catch (error) {
            response.send({status: 500, error})
        }
    }
    public async openRoulette(request: Request, response: Response) {
        const id = request.body.id;
        const db = new DB();
        const raw: string = await db.getAllData(id);
        const data: RouletteModel = (raw !== null && typeof raw !== 'undefined') ? JSON.parse(raw) : {status: null};
        if(data.status === 'created'){
            data.status = 'open'
            await db.saveData(id, JSON.stringify(data));
            response.send({status: 200, message: 'El proceso fue exitoso'})
        }   else {
            response.send({status: 400, message: 'El proceso fue denegado, por favor revise el estado de la ruleta'})
        }
        await db.closeConnection();
    }
    public async getAllRoulettes(){

    }
    public async makeBet(request: Request, response: Response){
        const data = request.body;
        const db = new DB();
        const raw = await db.getAllData(data.rouletteId);
        if(raw) {
            const betData: BetModel = {
                color: data.color,
                number: data.number,
                customer: request.header('customer') || '',
                money: data.money
            }
            const roulletData: RouletteModel = (raw !== null && typeof raw !== 'undefined') ? JSON.parse(raw) : {status: null};
            roulletData.bets.push(betData);
            await db.saveData(data.rouletteId, JSON.stringify(roulletData));
            response.send({status: 200, message: 'Apuesta procesada con exito'});
        }
    }
    public async getRouletteById(){

    }
    public async getRouletteBets() {

    }
}