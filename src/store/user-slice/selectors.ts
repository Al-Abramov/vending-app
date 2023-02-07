import { IState } from '../state.iterface';

export const getUserProducts = (state: IState) => state.user.userProducts;
export const getUserMoney = (state: IState) => state.user.userMoney;
