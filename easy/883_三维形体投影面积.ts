/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/projection-area-of-3d-shapes/
 * @Date: 2022-04-26 20:39:02 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-26 21:08:18
 */

const projectionArea = (grid: number[][]): number => {
  let m = 0;
  let n = 0;
  let o = 0;
  
  for (let i = 0; i < grid.length; i++) {
    let maxZ = 0;
    let maxY = 0;
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j]) {
        m++;
      }
      maxZ = Math.max(maxZ, grid[i][j]);
      maxY = Math.max(maxY, grid[j][i]);
    }
    n += maxZ;
    o += maxY;
  }
  return m + n + o;
};

const grid = [[1,0],[0,2]];
console.log(projectionArea(grid));

export default void 0;