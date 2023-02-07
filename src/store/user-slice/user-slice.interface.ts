import { IProduct } from '../../constant/products/product.iterface';

export interface UserSliceState {
  userMoney: number;
  userProducts: UserProducts;
}

type UserProducts = {
  [key: string]: IProduct;
};
