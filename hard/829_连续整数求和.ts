/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/consecutive-numbers-sum/
 * @Date: 2022-06-03 17:30:46 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-03 17:38:28
 */

const consecutiveNumbersSum = (n: number): number => {
  let count = 0;

  for (let i = 1; (i * (i + 1)) / 2 <= n; i++) {
    count += checkStatus(n, i) ? 1 : 0;
  }

  return count;
};

const checkStatus = (n: number, k: number) => {
  if (k % 2 !== 0) {
    return n % k === 0;
  }
  else {
    return n % k !== 0 && 2 * n % k === 0;
  }
};


export default void 0;