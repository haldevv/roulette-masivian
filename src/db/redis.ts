import * as redis from 'redis';
import { config } from "../utils/config";

export class DB {
    private client: redis.RedisClient;
    constructor(){
        this.client = redis.createClient(parseInt(config.redisPort), config.redisHost, {
            connect_timeout: parseInt(config.redisConnectionTimeout),
            db: parseInt(config.redisDatabase)
        });
    }
    saveData(key: string, data: string){
        return new Promise((resolve) => this.client.set(key, data, (result) => {resolve(result)}));
    }
    getAllData(key: string): Promise<any>{
        return new Promise((resolve) => {
            this.client.get(key,(err, result) => {
                resolve(result)
            })
        })
    }
    closeConnection(): void{
        this.client.quit()
    }
}