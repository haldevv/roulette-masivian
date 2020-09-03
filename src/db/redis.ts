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
    saveData(key: string, data: any){
        return new Promise((resolve) => this.client.hmset(key, data, () => {resolve()}));
    }
    getAllData(key: string): Promise<any>{
        return new Promise((resolve) => {
            this.client.get(key, (result) => {
                resolve(result)
            })
        })
    }
    closeConnection(): void{
        this.client.quit()
    }
}