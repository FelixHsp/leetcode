/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/excel-sheet-column-number/
 * @Date: 2022-06-08 21:31:23 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-08 21:34:52
 */

const titleToNumber = (columnTitle: string): number => {
  let result = 0;
  let cur = 1;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    result += (columnTitle[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * cur;
    cur *= 26;
  }

  return result;
};

export default void 0;