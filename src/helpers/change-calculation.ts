import { coinsValue } from '../constant/wallet-constants';
import { Change } from '../store/machine-slice/machine-slice.interface';

export function changeCalculation(sum: number, money: Change) {
  let change = 0;
  const values = Object.keys(money).filter((value) => value !== coinsValue.thousand);
  const changeMoney = { ...money };

  for (let i = values.length - 1; i >= 0; i--) {
    const countValue = Math.floor(sum / Number(values[i]));
    if (!countValue) continue;

    if (changeMoney[values[i]] < countValue) {
      change = change + Number(values[i]) * changeMoney[values[i]];
      sum = sum - Number(values[i]) * changeMoney[values[i]];
      changeMoney[values[i]] = 0;
    } else {
      changeMoney[values[i]] -= countValue;
      change = change + Number(values[i]) * countValue;
      sum = sum - Number(values[i]) * countValue;
    }
  }

  return { sum, change, changeMoney };
}
