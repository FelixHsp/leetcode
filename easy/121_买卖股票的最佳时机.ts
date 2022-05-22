/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/
 * @Date: 2022-05-22 20:22:55 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 20:30:34
 */

// const maxProfit = (prices: number[]): number => {
//   let max = 0;
//   const maxArray: number[] = [];

//   for (let i = prices.length - 1; i >= 0; i--) {
//     max = Math.max(max, prices[i]);
//     maxArray[i] = max;
//   }

//   max = 0;
//   for (let i = 0; i < prices.length; i++) {
//     max = Math.max(max, maxArray[i] - prices[i]);
//   }

//   return max > 0 ? max : 0;
// };

const maxProfit = (prices: number[]): number => {
  let min = Infinity;
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    result = Math.max(prices[i] - min, result);
  }

  return result > 0 ? result : 0;
}

export default void 0;