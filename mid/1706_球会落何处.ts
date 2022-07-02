/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/where-will-the-ball-fall/
 * @Date: 2022-07-02 10:10:16 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-02 10:28:13
 */

const findBall = (grid: number[][]): number[] => {
  const array: number[] = Array.from({ length: grid[0].length }).fill(-1) as number[];

  const find = (m: number, n: number, origin: number) => {
    if (m === grid.length) {
      array[origin] = n;
      return;
    }

    if (grid[m][n] === 1 && grid[m]?.[n + 1] === 1) {
      find(m + 1, n + 1, origin);
    }
    if (grid[m][n] === -1 && grid[m]?.[n - 1] === -1) {
      find(m + 1, n - 1, origin);
    }
  };

  for (let i = 0; i < grid[0].length; i++) {
    find(0, i, i);
  }

  return array;
};

export default void 0;