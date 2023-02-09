import { IState } from '../state.iterface';

export const getProducts = (state: IState) => state.machine.products;
export const getUserPayment = (state: IState) => state.machine.userPayment;
export const getNotice = (state: IState) => state.machine.notice;
