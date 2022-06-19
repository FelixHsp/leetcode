/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/sum-of-numbers-with-units-digit-k/
 * @Date: 2022-06-19 12:21:35 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-19 12:36:22
 */

const minimumNumbers = (num: number, k: number): number => {
  if (num === 0) {
    return 0;
  }
  if (num < k) {
    return -1;
  }

  let count: number = 0;
  for (let i = 1; i <= 10; i++) {
    if ((i * k) % 10 === num % 10 && i * k <= num) {
      count = i;
      break;
    }
  }

  return count === 0 ? -1 : count;
};

export default void 0;