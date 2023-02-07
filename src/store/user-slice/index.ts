import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import store from '..';
import { IProduct } from '../../constant/products/product.iterface';
import { UserSliceState } from './user-slice.interface';

export const initialState: UserSliceState = {
  userMoney: 1600,
  userProducts: {},
};

const userSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    decreaseUserMoney(state, action: PayloadAction<number>) {
      if (state.userMoney < action.payload) return;
      state.userMoney -= action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      //if (store.getState().machine.userPayment < action.payload.price) return;
      if (state.userProducts[action.payload.id]) {
        state.userProducts[action.payload.id] = {
          ...state.userProducts[action.payload.id],
          count: ++state.userProducts[action.payload.id].count,
        };
      } else {
        state.userProducts[action.payload.id] = { ...action.payload, count: 1 };
      }
    },
  },
});

export const { decreaseUserMoney, addProduct } = userSlice.actions;

export default userSlice.reducer;
