import { Roulette } from '../core/roulette';
import { checkRouletteId } from './middlewares';

const roulleteInstance = new Roulette();
export function getRouletteRoutes(app: any){
    app.post('/roulette/create', roulleteInstance.createRoulette)
    app.use('/roulette/open', checkRouletteId)
    app.post('/roulette/open', roulleteInstance.openRoulette);
    app.post('/roulette/bet');
    app.post('/roulette/close');
    app.get('/roulette/all');
}
