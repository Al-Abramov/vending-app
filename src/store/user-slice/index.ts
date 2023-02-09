import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../constant/products/product.iterface';
import {
  addCoin,
  decreaseUserPayment,
  increaseUserPayment,
  productCounter,
} from '../machine-slice';
import { IState } from '../state.iterface';
import { UserSliceState } from './user-slice.interface';

export const initialState: UserSliceState = {
  userMoney: 1600,
  userProducts: {},
};

export const buyProductAction = createAsyncThunk<void, IProduct, { state: IState }>(
  'user/buyProduct',
  async (payload, { getState, dispatch }) => {
    const state = getState();

    if (state.machine.userPayment < payload.price) return;

    dispatch(productCounter(payload.id));
    dispatch(decreaseUserPayment(payload.price));
    dispatch(addProduct(payload));
  }
);

export const addMoneyAction = createAsyncThunk<void, number, { state: IState }>(
  'user/addMoney',
  async (payload, { getState, dispatch }) => {
    const state = getState();

    if (state.user.userMoney < payload) return;

    dispatch(increaseUserPayment(payload));
    dispatch(decreaseUserMoney(payload));
    dispatch(addCoin(payload));
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increasetUserMoney(state, action: PayloadAction<number>) {
      state.userMoney += action.payload;
    },
    decreaseUserMoney(state, action: PayloadAction<number>) {
      if (state.userMoney < action.payload) return;
      state.userMoney -= action.payload;
    },
    addProduct(state, action: PayloadAction<IProduct>) {
      if (state.userProducts[action.payload.id]) {
        state.userProducts[action.payload.id].count += 1;
      } else {
        state.userProducts[action.payload.id] = { ...action.payload, count: 1 };
      }
    },
  },
});

export const { increasetUserMoney, decreaseUserMoney, addProduct } = userSlice.actions;

export default userSlice.reducer;
