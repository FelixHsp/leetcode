/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/longest-binary-subsequence-less-than-or-equal-to-k/
 * @Date: 2022-06-19 12:39:56 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-19 14:52:39
 */

const longestSubsequence = (s: string, k: number): number => {
  if (parseInt(s, 2) <= k) {
    return s.length;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const cur = s.slice(i);

    if (parseInt(cur, 2) > k) {
      let count = 0;
      for (let j = 0; j < i; j++) {
        s[j] === '0' && count++;
      }
      return cur.length - 1 + count;
    }
  }
  return 1;
};

export default void 0;