/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/number-of-islands/
 * @Date: 2022-05-20 21:03:57 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-20 21:24:02
 */

const numIslands = (grid: string[][]): number => {
  let count = 0;

  const findLands = (x: number, y: number) => {
    if (
        x < 0 ||
        y < 0 ||
        x >= grid.length ||
        y >= grid[0].length ||
        grid[x][y] === '0'
    ) {
      return;
    }
    grid[x][y] = '0';
  
    findLands(x - 1, y);
    findLands(x + 1, y);
    findLands(x, y - 1);
    findLands(x, y + 1);
  };

  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        findLands(i, j);
        count++;
      }
    }
  }

  return count;
};


export default void 0;