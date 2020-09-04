import { BetModel } from "./bet_model";

export interface RouletteModel {
    status: string
    id: string
    bets: Array<BetModel>
}