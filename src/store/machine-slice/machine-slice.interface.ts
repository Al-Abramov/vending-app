import { IProduct } from '../../constant/products/product.iterface';

export interface machineSliceState {
  initialMachineMoney: Change;
  products: IProduct[];
  userPayment: number;
}

interface Change {
  [key: string]: number;
}
