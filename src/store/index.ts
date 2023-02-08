import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import machineReducer from './machine-slice';
import { IState } from './state.iterface';
import userReducer from './user-slice';

const store = configureStore({
  reducer: {
    machine: machineReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = (): ThunkDispatch<IState, object, Action> =>
  useDispatch<AppDispatch>();
