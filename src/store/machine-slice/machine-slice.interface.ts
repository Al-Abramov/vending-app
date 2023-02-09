import { IProduct } from '../../constant/products/product.iterface';

export interface machineSliceState {
  initialMachineMoney: Change;
  products: IProduct[];
  userPayment: number;
}

export interface Change {
  [key: string]: number;
}
