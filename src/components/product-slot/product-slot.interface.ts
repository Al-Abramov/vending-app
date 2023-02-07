import { IProduct } from '../../constant/products/product.iterface';

export interface ProductSlotProps {
  product: IProduct;
  buyProduct: (product: IProduct) => void;
}
