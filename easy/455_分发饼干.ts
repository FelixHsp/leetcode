/*
 * @Author: Felix 
 * @File: 贪心
 * @Date: 2022-06-12 15:18:50 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-15 22:05:50
 */

const findContentChildren = (g: number[], s: number[]): number => {
  let result = 0;
  
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const gLen = g.length;
  const sLen = s.length;
  let i = 0;
  let j = 0;

  while (i < gLen && j < sLen) { 
    if (s[j] >= g[i]) {
      j++;
      i++;
      result++;
    }
    else {
      j++;
    }
  }
  

  return result;
};

export default void 0;