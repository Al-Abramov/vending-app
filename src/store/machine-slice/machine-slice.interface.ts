import { IProduct } from '../../constant/products/product.iterface';

export interface machineSliceState {
  initialMachineMoney: Change;
  products: IProduct[];
  userPayment: number;
  notice: string;
}

export interface Change {
  [key: string]: number;
}
