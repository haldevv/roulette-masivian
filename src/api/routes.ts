import { Roulette } from '../core/roulette';
import { checkRouletteId, validateBetCustomer, validateBetMoney, validateBetNumber, validateRouletteId } from './middlewares';

const roulleteInstance = new Roulette();
export function getRouletteRoutes(app: any){
    app.post('/roulette/create', roulleteInstance.createRoulette)
    app.use('/roulette/open', checkRouletteId)
    app.post('/roulette/open', roulleteInstance.openRoulette);
    app.use('/roulette/bet', validateBetCustomer);
    app.use('/roulette/bet', validateBetMoney);
    app.use('/roulette/bet', validateBetNumber);
    app.use('/roulette/bet', validateRouletteId);
    app.post('/roulette/bet', roulleteInstance.makeBet);
    app.post('/roulette/close', roulleteInstance.closeRoulette);
    app.get('/roulette/all');
}
