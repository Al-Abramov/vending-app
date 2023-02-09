import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changeIsOverNotice } from '../../constant/info-texts';
import { products } from '../../constant/products/products';
import { changeCalculation } from '../../helpers/change-calculation';
import { IState } from '../state.iterface';
import { increasetUserMoney } from '../user-slice';
import { Change, machineSliceState } from './machine-slice.interface';

export const initialState: machineSliceState = {
  initialMachineMoney: {
    '1': 5,
    '5': 10,
    '10': 10,
    '50': 1,
    '100': 1,
    '500': 0,
    '1000': 0,
  },
  products,
  userPayment: 0,
  notice: '',
};

export const getChangeAction = createAsyncThunk<void, undefined, { state: IState }>(
  'machine/getChange',
  async (_, { getState, dispatch }) => {
    const state = getState();
    const { sum, change, changeMoney } = changeCalculation(
      state.machine.userPayment,
      state.machine.initialMachineMoney
    );

    dispatch(changeCalc({ sum, changeMoney }));
    dispatch(increasetUserMoney(change));
    if (sum !== 0) {
      dispatch(setNotice(changeIsOverNotice));
    } else {
      dispatch(setNotice(''));
    }
  }
);

const machineSlice = createSlice({
  name: 'machine',
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
    changeCalc(state, action: PayloadAction<{ sum: number; changeMoney: Change }>) {
      state.userPayment = action.payload.sum;
      state.initialMachineMoney = action.payload.changeMoney;
    },
    addCoin(state, action: PayloadAction<number>) {
      state.initialMachineMoney[action.payload] += 1;
    },
    setNotice(state, action: PayloadAction<string>) {
      state.notice = action.payload;
    },
  },
});

export const {
  increaseUserPayment,
  decreaseUserPayment,
  productCounter,
  changeCalc,
  addCoin,
  setNotice,
} = machineSlice.actions;

export default machineSlice.reducer;
