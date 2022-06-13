/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problemset/all/
 * @Date: 2022-06-13 20:29:09 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-13 20:37:17
 */

const heightChecker = (heights: number[]): number => {
  let result = 0;
  const expected = [...heights];
  expected.sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i++) {
    if (expected[i] !== heights[i]) {
      result ++;
    }
  }

  return result;
};

export default void 0;
