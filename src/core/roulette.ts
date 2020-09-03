import { RedisClient } from "redis";
import { DB } from "../db/redis";
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from "express";
import { RouletteModel } from "../models/roulette_model";

export class Roulette {
    constructor() {}
    // function to create a new object in the db
    public async createRoulette(request: Request, response: Response) {
        const db = new DB();
        const id = uuidv4();
        const roulette: RouletteModel = {id, status: 'created', bets: '[]'};
        try {
            await db.saveData(id, roulette);
            db.closeConnection();
            response.send({status: 200, id});   
        } catch (error) {
            response.send({status: 500, error})
        }
    }
    public async openRoulette() {

    }
    public async getAllRoulettes(){

    }
    public async makeBet(){

    }
    public async getRouletteById(){

    }
    public async getRouletteBets() {

    }
}