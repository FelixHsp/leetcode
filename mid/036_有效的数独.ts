/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/valid-sudoku/
 * @Date: 2022-07-23 09:28:38 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-23 09:44:07
 */

const isValidSudoku = (board: string[][]): boolean => {
  const map: Map<string, boolean> = new Map();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const current = board[i][j];
      if (current === '.') {
        continue;
      }

      const areaIndex = Math.floor((i / 3)) * 3 + Math.floor((j / 3));
      if (
        map.has(`r-${i}-${current}`)
        || map.has(`c-${j}-${current}`)
        || map.has(`b-${areaIndex}-${current}`)
      ) {
        return false;
      }

      map.set(`r-${i}-${current}`, true);
      map.set(`c-${j}-${current}`, true);
      map.set(`b-${areaIndex}-${current}`, true);
    }
  }

  return true;
};

export default void 0;