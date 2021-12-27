import { UnknownObj } from "../types";

export default {
  sum(arr: number[]) {
    return arr.reduce((p: number, c: number) => p + c);
  },

  average(sum: number, len: number) {
    return sum / len;
  },

  joinObjects(obj1: UnknownObj, obj2: UnknownObj) {
    Object.keys(obj1).forEach((key: string) => {
      Object.assign((obj1 as any)[key], (obj2 as any)[key]);
    });
  },
  getProportionToMax(arr: number[] = [], val: number) {
    const max = Math.max(...arr);
    const result = Math.abs(val / max);
    return result || 1;
  },
};
