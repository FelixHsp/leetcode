/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/set-matrix-zeroes/
 * @Date: 2022-06-19 10:55:38 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-19 11:01:53
 */

const setZeroes = (matrix: number[][]): void => {
  const set: Set<string> = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        set.add(`r-${i}`);
        set.add(`c-${j}`);
      }
    }
  }
  [...set].forEach((item: string) => {
    const [, type, num] = item.match(/(\w)\-(\w)/) as RegExpMatchArray;
    if (type === 'r') {
      for (let i = 0; i < matrix[0].length; i++) {
        matrix[Number(num)][i] = 0;
      }
    }
    else {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][Number(num)] = 0;
      }
    }
  });
};

setZeroes([[1,1,1],[1,0,1],[1,1,1]]);

export default void 0;