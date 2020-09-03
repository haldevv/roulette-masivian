import { Roulette } from '../core/roulette';

const roulleteInstance = new Roulette();
export function getRouletteRoutes(app: any){
    app.post('/roulette/create', roulleteInstance.createRoulette)
    app.post('/roulette/open');
    app.post('/roulette/bet');
    app.post('/roulette/close');
    app.get('/roulette/all');
}
