/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/minimum-deletions-to-make-character-frequencies-unique/
 * @Date: 2022-06-21 21:17:01 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-21 21:37:51
 */

const minDeletions = (s: string): number => {
  let result = 0;
  const array = Array.from({ length: 26 }).fill(0) as number[];

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    array[index]++;
  }

  array.sort((a, b) => b - a);

  for (let i = 1; i < array.length; i++) {
    if (array[i] === 0) {
      break;
    }
    while (array[i] > 0 && array[i] >= array[i - 1]) {
      array[i]--;
      result++;
    }
  }
  
  return result;
};

export default void 0;