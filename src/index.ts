import { app } from './app';
import { config } from './utils/config';
import { AddressInfo } from 'net';

const server = app.listen(parseInt(config.port), config.host, () => {
    const {port, address} = server.address() as AddressInfo;
    console.log(`Server started on: ${address}:${port}`)
});