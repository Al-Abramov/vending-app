import { machineSliceState } from './machine-slice/machine-slice.interface';
import { UserSliceState } from './user-slice/user-slice.interface';

export interface IState {
  machine: machineSliceState;
  user: UserSliceState;
}
