import { IProduct } from '../../constant/products/product.iterface';

export interface ProductProps {
  product: IProduct;
  buyProduct?: (product: IProduct) => void;
}
