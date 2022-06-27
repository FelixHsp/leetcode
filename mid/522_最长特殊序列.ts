/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/longest-uncommon-subsequence-ii/
 * @Date: 2022-06-27 21:19:53 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-27 21:49:00
 */

const findLUSlength = (strs: string[]): number => {
  const map: Record<string, number> = {};
  let max = 0;
  let cur = '';

  for (const str of strs) {
    map[str] = (map[str] || 0) + 1;
    
    if (str.length > max) {
      max = str.length;
      cur = str;
    }
  }
  
  if (map[cur] === 1) {
    return max;
  }

  for (const str of Object.keys(map).sort((a, b) => b.length - a.length)) {
    if (map[str] === 1 && !check(str, cur)) {
      return str.length;
    }
  }
  return -1;
};

const check = (str1: string, str2: string) => {
  let i = 0;
  let j = 0;
  let m = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      m++;
    }
    j++;
  }

  return m === str1.length;
};

export default void 0;