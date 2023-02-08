import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '../../constant/products/products';
import { machineSliceState } from './machine-slice.interface';

export const initialState: machineSliceState = {
  initialMachineMoney: {
    '1': 10,
    '5': 10,
    '10': 5,
    '50': 5,
    '100': 5,
    '500': 2,
    '1000': 0,
  },
  products,
  userPayment: 0,
};

const machineSlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    increaseUserPayment(state, action: PayloadAction<number>) {
      state.userPayment += action.payload;
    },
    decreaseUserPayment(state, action: PayloadAction<number>) {
      state.userPayment -= action.payload;
    },
    productCounter(state, action: PayloadAction<string>) {
      const currentProduct = state.products.find((product) => product.id === action.payload);
      if (currentProduct) currentProduct.count--;
    },
  },
});

export const { increaseUserPayment, decreaseUserPayment, productCounter } = machineSlice.actions;

export default machineSlice.reducer;
