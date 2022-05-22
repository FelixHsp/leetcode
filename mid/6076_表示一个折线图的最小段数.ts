/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/minimum-lines-to-represent-a-line-chart/
 * @Date: 2022-05-22 10:52:22 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 12:35:08
 */

const gcd = (num1: number, num2: number): number => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return gcd(num2, num1 % num2);
};

const compute = (num1: number, num2: number) => {
  return `${num1 / gcd(num1, num2)},${num2 / gcd(num1, num2)}`
};

const minimumLines = (stockPrices: number[][]): number => {
  if (stockPrices.length <= 1) {
    return 0;
  }
  stockPrices.sort((a, b) => {
    return a[0] - b[0];
  });

  let count = 0;
  let pre = null;

  for (let i = 0; i < stockPrices.length - 1; i++) {
    const cur = compute(stockPrices[i + 1][1] - stockPrices[i][1], stockPrices[i + 1][0] - stockPrices[i][0]);
    if (pre !== cur) {
      pre = cur;
      count++;
    }
  }

  return count;
}

console.log(minimumLines([[-1, -1],[0, 1],[1, 3],[2, 5]]));

export default void 0;