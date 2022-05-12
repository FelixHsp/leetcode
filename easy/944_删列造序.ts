/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/delete-columns-to-make-sorted/
 * @Date: 2022-05-12 20:55:43 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-12 21:14:49
 */

const minDeletionSize = (strs: string[]): number => {
  let count = 0;

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] > strs[j][i]) {
        count += 1;
        break;
      }
    }
  }

  return count;
};

console.log(minDeletionSize(["rrjk","furt","guzm"]));


export default void 0;