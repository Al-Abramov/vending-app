import { IState } from '../state.iterface';

export const getProducts = (state: IState) => state.machine.products;
export const getUserPayment = (state: IState) => state.machine.userPayment;
