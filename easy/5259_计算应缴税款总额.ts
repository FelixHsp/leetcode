/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/calculate-amount-paid-in-taxes/
 * @Date: 2022-06-12 13:42:26 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-12 13:47:33
 */

const calculateTax = (brackets: number[][], income: number): number => {
  let result: number = 0;
  let preUpper = 0;
  let level = 0;
  
  while (true) {
    const [upper, percent] = brackets[level];
    if (income <= upper) {
      result += (income - preUpper) * percent * 0.01;
      break;
    }
    else {
      result += (upper - preUpper) * percent * 0.01;
      preUpper = upper;
    }
    level++;
  }

  return result;
};


export default void 0;