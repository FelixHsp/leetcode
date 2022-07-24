/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/powx-n/
 * @Date: 2022-07-24 10:03:16 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-24 10:11:19
 */

const myPow = (x: number, n: number): number => {
  if (x === 0 || n === 1) {
    return x;
  }
  else if (n === 0) {
    return 1;
  }
  else if (n < 0) {
    return myPow(1 / x, -n);
  }
  else {
    return n % 2 === 0 ? myPow(n * n, n / 2) : x * myPow(x, n - 1);
  }
};

export default void 0;