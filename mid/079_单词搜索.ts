/*
 * @Author: Felix 
 * @Date: 2022-06-04 17:21:59 
 * @File: https://leetcode.cn/problems/word-search/
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-04 18:31:29
 */

const exist = (board: string[][], word: string): boolean => {
  const height = board.length;
  const width = board[0].length;
  const seen = Array.from({ length: height }).map(() => {
    return Array.from({ length: width }).fill(false);
  });

  const search = (i: number, j: number, currentIndex: number): boolean => {
    if (i < 0 || j < 0 || i > height - 1 || j > width - 1 || seen[i][j]) {
      return false;
    }

    if (board[i][j] === word[currentIndex]) {
      if (currentIndex === word.length - 1) {
        return true;
      }
      seen[i][j] = true;
      const status = search(i - 1, j, currentIndex + 1) || search(i + 1, j, currentIndex + 1) || search(i, j - 1, currentIndex + 1) || search(i, j + 1, currentIndex + 1);
      if (!status) {
        seen[i][j] = false;
      }
      return status;
    }
    else {
      return false;
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && search(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS"));

export default void 0;