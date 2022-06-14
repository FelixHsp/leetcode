/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/diagonal-traverse/
 * @Date: 2022-06-14 21:17:52 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-14 21:50:22
 */

const findDiagonalOrder = (mat: number[][]): number[] => {
  const result: number[] = [];
  const width = mat[0].length;
  const height = mat.length;

  // 共有width+height-1条对角线
  for (let i = 0; i < width + height - 1; i++) {
    if (i % 2 === 0) {
      // 向上遍历，起点坐标
      let x = i < height ? i : height - 1;
      let y = i < height ? 0 : i - height + 1;

      while (x >= 0 && y < width) {
        result.push(mat[x][y]);
        x--;
        y++;
      }
    }
    else {
      // 向下遍历，起点坐标
      let x = i < width ? 0 : i - width + 1;
      let y = i < width ? i : width - 1;

      while (y >= 0 && x < height) {
        result.push(mat[x][y]);
        y--;
        x++;
      }
    }
  }

  return result;
};

export default void 0;