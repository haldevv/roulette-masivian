import * as dotenv from 'dotenv';
import { AppConfig } from '../models/config_model';

dotenv.config()
export const config: AppConfig = {
    port: process.env.APP_PORT || '3000',
    host: process.env.APP_HOST || '127.0.0.1',
    limitBodySize: process.env.APP_LIMIT_BODY_SIZE|| '20mb',
    redisHost: process.env.REDIS_HOST || '127.0.0.1',
    redisPort: process.env.REDIS_PORT || '6397'
}