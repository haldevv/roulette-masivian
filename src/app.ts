import express from 'express';
import * as BodyParser from 'body-parser';
import { config } from './utils/config';

const app = express();
app.use(BodyParser.json({
    limit: config.limitBodySize,
    verify(req: any, res, buf, encoding) {
        req.rawbody = buf;
    }
}));
app.get('/', (req, res) => res.send('test'));

export {app};