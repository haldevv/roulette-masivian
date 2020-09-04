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
    getDataByKey(key: string): Promise<any>{
        return new Promise((resolve) => {
            this.client.get(key,(err, result) => {
                resolve(result)
            })
        })
    }
    closeConnection(): void{
        this.client.quit();
    }
    getAllData(): Promise<any> {
        return new Promise((resolve) => {
            this.client.keys('*', async (err, keys) => {
                const result = [];
                if(keys && keys.length > 0) {
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        const roulette = await this.getDataByKey(key);
                        if(roulette){
                            result.push(JSON.parse(roulette));
                        }
                    }
                }
                resolve(result);
            })
        })
    }
}