/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 * @Tags: 正则
 * @Date: 2022-06-14 21:54:01 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-14 22:06:35
 */

const maxProfit = (prices: number[]): number => {
  let result = 0;
  let pre = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const value = prices[i] - pre;

    if (value > 0) {
      result += value;
    }
    pre = prices[i];
  }

  return result;
};

export default void 0;