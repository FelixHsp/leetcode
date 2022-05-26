/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/valid-anagram/
 * @Tags: 哈希表
 * @Date: 2022-05-26 21:33:30 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-26 21:39:37
 */

const isAnagram = (s: string, t: string): boolean => {
  const map: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const cur = map[t[i]];
    if (!cur) {
      return false;
    }
    map[t[i]] = cur - 1;
  }

  return true;
};


export default void 0;