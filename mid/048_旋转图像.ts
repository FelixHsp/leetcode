/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/rotate-image/
 * @Date: 2022-05-24 22:08:44 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-24 22:21:49
 */

const rotate = (matrix: number[][]): void => {
  const width = matrix.length;

  // 上下翻转
  for (let i = 0; i < Math.floor(width / 2); i++) {
    for (let j = 0; j < width; j++) {
      [matrix[i][j], matrix[width - i - 1][j]] = [matrix[width - i - 1][j], matrix[i][j]];
    }
  }

  // 沿对角线翻转
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};


export default void 0;